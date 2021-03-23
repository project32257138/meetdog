import React, { useEffect, useState, Component } from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import ProfileList from "../../components/ProfileList";
// import ParkPreference from "../../components/ParkPreference"
import API from "../../Utils/api";
import "./style.css";

function Profile() {
    const [dog, savedDog] = useState({});

    // const addDefaultProfile = () => {
    //     API.getDogDetail()
    //     .then(res => savedDog(res.data))
    //     .catch(err => console.log(err));
    // }
    
    return(
        <>
        <Header />
        <Container >
            <Row>
                {/* Picture Column */}
                <Col size="6">
                    {/* {savedDog.length ? (
                        <img src={`${savedDog.image}`} alt="Dog profile picture" />                 
                    ) : (
                        // random avatar 
                        <h3>Please add your profile picture!</h3> 
                    )} */}


                    {/* <!-- Upload Photo Modal Trigger --> */}
                    <a className="btn-floating btn-large waves-effect waves-light cyan darken-2 modal-trigger" href="#modal2"><i className="material-icons">add</i></a>
    
                    {/* <!-- Modal Structure --> */}
                    <div id="modal2" className="modal" style={{backgroundColor: "#426d49"}}>
                        <div className="modal-content">
                            <h4 className="modalTxt">Upload You Profile Picture</h4>
                            <p className="modalTxt">A bunch of text</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Cancel</a>
                            <button className="btn waves-effect waves-light modal-close" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                
                </Col>
                    
                {/* Profile Detail Column */}
                <Col size="6">
                    {/* {savedDog.length ? (
                    <ProfileList dogState={state.savedDog} />
                    ) : (
                        <ProfileListDefault />
                    )} */}

                    <div className="card-panel" style={{backgroundColor: "#426d49"}}>
                        <h4>My Profile</h4>
                        <div className="divider"></div>
                        <h5>Name:</h5> <p>{dog.name}</p>
                    
                        <h5>Breed:</h5> <p>{dog.breed}</p>
                        
                        
                        <div className="col s6" style={{paddingLeft: "0px"}}>
                            <h5>Age:</h5>

                            <p>{dog.age}</p>
                        </div>
                        <div className="col s6">
                            <h5>Gender:</h5>

                            <p>{dog.gender}</p>
                        </div>
                        
                        <h5>About Me:</h5> 

                        <p>{dog.bio}</p>
                        
                        <h5>Parks I Enjoy:</h5> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <h5>Email Me:</h5>
                        <p>{dog.email}</p>
                    </div>
                    {/* <!-- Edit Profile Modal Trigger --> */}
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Edit Profile</a>
                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" className="modal" style={{backgroundColor: "#426d49"}}>
                        <div className="modal-content">
                            <h4 className="modalTxt">Edit Profile</h4>
                            <div className="divider"></div>
                            <p className="modalTxt">A bunch of text</p>
                            
                            <h5 className="modalTxt">Name:</h5> 
                            <div className="input-field">
                                <input placeholder="Tucker Budzyn" type="text" className="validate" />
                            </div>
                            <h5 className="modalTxt">Breed:</h5> 
                            <div className="input-field">
                                <input placeholder="Golden Retriever" type="text" className="validate" />
                            </div>
                            
                            <div className="col s6">
                                <h5 className="modalTxt">Age:</h5>
                                <div className="input-field">
                                    <input placeholder="2 years old" type="text" className="validate" />
                                </div>
                            </div>
                            <div className="col s6">
                                <h5 className="modalTxt">Gender:</h5>

                                <div className="input-field">
                                    <input placeholder="Male" type="text" className="validate" />
                                </div>
                            </div>
                            
                            <h5 className="modalTxt">About Me:</h5> 
                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">Tell us something about your pawesome friend!</label>
                            </div>
                            
                            <h5 className="modalTxt">Parks I Enjoy:</h5> 
                            <div className="input-field">
                                <textarea id="textarea1" className="materialize-textarea"></textarea>
                                <label for="textarea1">What parks do you guys like to go to?</label>
                            </div>

                            <h5 className="modalTxt">Email Me:</h5>
                            <div class="input-field">
                                <input placeholder="123tucker@gmail.com" type="text" class="validate" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="#!" className="modal-close btn-flat">Cancel</a>
                            <button className="btn waves-effect waves-light modal-close" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Profile;