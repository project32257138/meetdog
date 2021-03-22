import React, { useEffect, useState, Component } from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import ProfileList from "../../components/ProfileList";
import API from "../../Utils/api";
import "./style.css";

function Profile() {
   

    const [dog, savedDog] = useState({
        name: "Tucker Budzyn",
        breed: "Golden Retriever",
        age: "2 years old",
        gender: "Male",
        description: "I enjoy long run at the doggy park and chasing squirrels!",
        email: "tucker123@gmail.com"
    });

    // const addDefaultProfile = () => {
    //     API.getDogDetail()
    //     .then(res => savedDog(res.data))
    //     .catch(err => console.log(err));
    // }

    const handleProfileChange = (e) => {
        // savedDog({
        //     name: e.target.value,
        //     breed: e.target.value,
        //     age: e.target.value,
        //     gender: e.target.value,
        //     description: e.target.value,
        //     email: e.target.value
        // })
        e.preventDefault();
        const { value } = e.target;
        
        console.log({
            value,
            // check value before we change the state
            currentState: dog
        });
    
        savedDog(value);
    
        // check value after we change the state
        console.log("stateAfterInput", dog)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log([dog]);
    };

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
                        <h5>Name:</h5> <p>{dog.profile.name}</p>
                    
                        <h5>Breed:</h5> <p>{dog.profile.breed}</p>
                        
                        
                        <div className="col s6" style={{paddingLeft: "0px"}}>
                            <h5>Age:</h5>

                            <p>{dog.profile.age}</p>
                        </div>
                        <div className="col s6">
                            <h5>Gender:</h5>

                            <p>{dog.profile.gender}</p>
                        </div>
                        
                        <h5>About Me:</h5> 

                        <p>{dog.profile.description}</p>
                        
                        <h5>Parks I Enjoy:</h5> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <h5>Email Me:</h5>
                        <p>{dog.profile.email}</p>
                    </div>
                    {/* <!-- Edit Profile Modal Trigger --> */}
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Edit Profile</a>
                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" className="modal" style={{backgroundColor: "#426d49"}}>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-content">
                            
                                <h4 className="modalTxt">Edit Profile</h4>
                                <div className="divider"></div>
                                <p className="modalTxt">A bunch of text</p>
                                
                                <h5 className="modalTxt">Name:</h5> 
                                <div className="input-field">
                                    <input 
                                    placeholder="Tucker Budzyn" 
                                    type="text" 
                                    className="validate" 
                                    onChange={handleProfileChange}/>
                                </div>
                                <h5 className="modalTxt">Breed:</h5> 
                                <div className="input-field">
                                    <input 
                                    placeholder="Golden Retriever" 
                                    type="text" 
                                    className="validate" 
                                    onChange={handleProfileChange}/>
                                </div>
                                
                                <div className="col s6">
                                    <h5 className="modalTxt">Age:</h5>
                                    <div className="input-field">
                                        <input 
                                        placeholder="2 years old" 
                                        type="text" 
                                        className="validate" 
                                        onChange={handleProfileChange}/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <h5 className="modalTxt">Gender:</h5>

                                    <div className="input-field">
                                        <input 
                                        placeholder="Male" 
                                        type="text" 
                                        className="validate" 
                                        onChange={handleProfileChange}/>
                                    </div>
                                </div>
                                
                                <h5 className="modalTxt">About Me:</h5> 
                                <div className="input-field">
                                    <textarea 
                                    id="textarea1" 
                                    className="materialize-textarea"
                                    onChange={handleProfileChange}></textarea>
                                    <label for="textarea1">Tell us something about your pawesome friend!</label>
                                </div>
                                
                                <h5 className="modalTxt">Parks I Enjoy:</h5> 
                                <div className="input-field">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label for="textarea1">What parks do you guys like to go to?</label>
                                </div>

                                <h5 className="modalTxt">Email Me:</h5>
                                <div class="input-field">
                                    <input 
                                    placeholder="123tucker@gmail.com" 
                                    type="text" 
                                    class="validate" 
                                    onChange={handleProfileChange}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <a href="#!" className="modal-close btn-flat">Cancel</a>
                                <button className="btn waves-effect waves-light modal-close" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Profile;