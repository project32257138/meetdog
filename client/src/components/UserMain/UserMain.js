import React from "react";
import Notification from "../Notification/Notification";
import Swipe from "../Swipe/index";
import Header from "../Header";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Loading/Loading";
import API from "../../Utils/api"

class UserMain extends React.Component {

    state = {
        id: "605fc76b98cc70501f8771ee",
        name: "Spot",
        email: "spotty@gmail.com",
        currentMatch: false,
        currentDog: {
            image: "../../../img/loading.svg",
            name: "Loading",
            id: 0,
            liked: {
            }
        },
        dogList: [],
        dogIndex: 1,
        liked: {
            // object storing id and if that dog was liked by the user
            // id: true,  for liked --or--
            // id: false, for disliked
        },
        matches: []
    }

    componentDidMount() {
        const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
        const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY
        
        window.OneSignal = window.OneSignal || [];
        const OneSignal = window.OneSignal;

        OneSignal.init(
            {
              appId: OSID,
              promptOptions: {
                slidedown: {
                  enabled: true,
                  actionMessage: "We'd like to notify you of matches for new play dates for you.",
                  acceptButtonText: "Yes!",
                  cancelButtonText: "Maybe later.",
              } 
            },
            welcomeNotification: {
              "title": "Puppy Love | Creating New Play Dates",
              "message": "Thanks for subscribing!",
            } 
          });

        API.getDog(this.state.id).then(
            res => {
                let thisDog = res.data
                // console.log(thisDog)
                this.setState({
                    id: thisDog._id,
                    name: thisDog.name,
                    email: thisDog.email,
                    image: thisDog.image
                })
            }
        )        

        API.getNextDogsNoCheck(this.state.id,(dogs) => {
            this.setState({dogList : dogs})
            this.setState({currentDog: dogs[0]})
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentDog?.liked[this.state.id] && this.state.liked[prevState.currentDog.id])
          this.setState({
            currentMatch: true,
            matches: [...this.state.matches, {...prevState.currentDog, date: new Date(Date.now()).toLocaleString()}],
        })
        console.log(this.state)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.currentDog !== nextState.currentDog
    }


    getNextDog = () => {
        this.setState({
            dogIndex: this.state.dogIndex + 1,
            currentDog: this.state.dogList[this.state.dogIndex],
        })
    }

    likeDog = () => {
        this.setState({liked: {[this.state.currentDog.id]: true, ...this.state.liked}})

        this.setState({
            liked: {[this.state.currentDog.id]: true, ...this.state.liked},
        })
        this.getNextDog()
    }

    dislikeDog = () => {
        this.setState({liked: {[this.state.currentDog.id]: false, ...this.state.liked}})
        this.getNextDog()
    }

  render () {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div className="section" style={{width: "100%"}}>
              <div className="col s12 m6">
                <Swipe 
                  details={this.state}
                  likeDog={this.likeDog}
                  dislikeDog={this.dislikeDog}
                  getNextDog={this.getNextDog}
                />
              </div>
              <div className="col s12 m6">
                <Notification 
                  matches={this.state.matches}
                  details={this.state}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withAuthenticationRequired(UserMain, {
  onredirecting: () => <Loading />,
});
