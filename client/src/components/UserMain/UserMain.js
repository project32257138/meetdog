import React, {useState, useEffect} from "react";
import Notification from "../Notification/Notification";
import Swipe from "../Swipe/index";
import Header from "../Header";
import Footer from"../../components/Footer";
import Loading from "../Loading/Loading";
import API from "../../Utils/api"
import "./style.css"


class UserMain extends React.Component {

    state = {
        _id: "",
        name: "",
        email: "",
        currentMatch: false,
        currentDog: {
            image: "../../../img/loading.svg",
            name: "Loading",
            _id: "",
            likes: {
            },
            description: "",
            breed: "",
        },
        dogList: [],
        dogIndex: 1,
        likes: {
            // object storing id and if that dog was liked by the user
            // id: true,  for liked --or--
            // id: false, for disliked
        },
        matches: []
    }

    email = this.props.user.email

    componentDidMount() {
        console.log(this.email)

        const OSID = process.env.REACT_APP_ONE_SIGNAL_ID;
        const OSKEY = "Basic " + process.env.REACT_APP_ONE_SIGNAL_KEY
        
        window.OneSignal = window.OneSignal || [];
        const OneSignal = window.OneSignal;
        OneSignal.push(() => {
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
          })
          OneSignal.showSlidedownPrompt()
        })

        API.getDog(this.email).then(
            res => {
              if (!res.data.length) return null
                let thisDog = res.data[0]
                this.setState({
                    _id: thisDog._id,
                    name: thisDog.name,
                    email: thisDog.email,
                    image: thisDog.image
                })
              return thisDog._id
        })
      OneSignal.push(() => {
        OneSignal.setExternalUserId(this.email);
      });

      API.getAllMatches({
            email: this.email
          })
          .then(res => {
              this.setState({
                matches: res.data
              })
          })
          .catch(err => []);
      
      this.getDogList()
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("they like you",prevState.currentDog?.likes[this.state._id], "you like them",this.state.likes[prevState.currentDog?._id])
        if (prevState.currentDog?.likes[this.state._id] && this.state.likes[prevState.currentDog?._id])
          this.setState({
            currentMatch: true,
            matches: [{...prevState.currentDog, date: new Date(Date.now()).toLocaleString()}, ...this.state.matches],
        })
        

  
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.currentDog !== nextState.currentDog
    }

    getDogList = () => {
      API.getNextDogs(this.email,(dogs) => {
        console.log(dogs)
          if (dogs) {
            this.setState({
              dogList : dogs,
              currentDog: dogs[0]
            })
          } 
      })
    }


    getNextDog = () => {
        if (this.state.dogIndex >= this.state.dogList.length) {
          this.getDogList()
          this.setState({
            dogIndex: 1,
            // currentDog: this.state.dogList[0],
          })
        } else {
        this.setState({
          dogIndex: this.state.dogIndex + 1,
          currentDog: this.state.dogList[this.state.dogIndex],
        })
      }
    }

    likeDog = () => {
        this.setState({likes: {[this.state.currentDog._id]: true, ...this.state.likes}})

        this.setState({
            likes: {[this.state.currentDog._id]: true, ...this.state.likes},
        })
        API.likeOrDislike(this.state.email,{id: this.state.currentDog._id, value: true}) //{ id: "2323483", value: false }
        this.getNextDog()
    }

    dislikeDog = () => {
        this.setState({likes: {[this.state.currentDog._id]: false, ...this.state.likes}})
        API.likeOrDislike(this.state.email,{id: this.state.currentDog._id, value: false}) //{ id: "2323483", value: false }
        this.getNextDog()
    }

  render () {

    return (
      <>
        <Header/>
        <div className="wrapper">
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
                <div className="col s12 m6 notificationCol">
                  <Notification 
                    matches={this.state.matches}
                    details={this.state}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserMain
