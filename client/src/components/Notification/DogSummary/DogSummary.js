import React, {Component} from "react"
import M from "materialize-css";
import style from "./style.css"

class DogSummary extends Component {

    componentDidMount() {
        const options = {
          onOpenStart: () => {
            console.log("Open Start");
          },
          onOpenEnd: () => {
            console.log("Open End");
          },
          onCloseStart: () => {
            console.log("Close Start");
          },
          onCloseEnd: () => {
            console.log("Close End");
          },
          inDuration: 250,
          outDuration: 250,
          opacity: 0.5,
          dismissible: false,
          startingTop: "4%",
          endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
      }

    render() {
        console.log(this.props)
        return (
            <>
        <a
          className="waves-effect waves-light modal-trigger secondary-content"
          data-target={"modal"+this.props.index}
        >
            <i className="material-icons">send</i>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={"modal"+this.props.index}
          className="modal" style={{maxHeight:"85%"}}
        >
            <div className="modal-content container" style={{width: "90%", maxHeight:"70%", marginBottom:"-50px"}}>
                <h4>{this.props.match.name}</h4>
                <div className="wrapper row">
                    <div className="col s12 m6 center">
                        <div className="image">
                            <img alt={this.props.match.name} src={this.props.match.image}></img>
                        </div>
                    </div>
                    <div className="info float-left s12 m6">
                        <h5><span className="fieldLabelTxt"> Age:</span>  {this.props.match.age}</h5>
                        <h5><span className="fieldLabelTxt"> Breed:</span>  {this.props.match.breed}</h5>
                        <h5><span className="fieldLabelTxt"> Description:</span>  {this.props.match.description}</h5>
                        <h5><a className="call btn" href={"mailto:" + this.props.match.email}>Bark back!<br/><small>(send email)</small></a></h5>
                    </div>
            </div>
        </div>
        <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
            Close
            </a>
        </div>
        </div>
        </>
        )}
    }

  export default DogSummary