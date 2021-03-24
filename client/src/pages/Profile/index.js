import React, { useEffect, useState, Component } from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import ProfileList from "../../components/ProfileList";

//--------- LOCATION API:
// import ParkPreference from "../../components/ParkPreference";

import API from "../../Utils/api";
import "./style.css";

function Profile() {
    const [dog, savedDog] = useState(
        {
            password: "!PuppyLover1",
        }
    );
    // const [formObject, setFormObject] = useState([]);

    // Load all profile and store them with savedDog
    // useEffect(() => {
    //     loadProfile()
    // }, [])

    // Loads all Profile and set to savedDog
    // function loadProfile() {
    //     API.getDogProfile()
    //     .then(res => 
    //         savedDog(res.data)
    //     )
    //     .catch(err => console.log(err));
    // };


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
        const { name, value } = e.target;
        
        console.log({
            value,
            // check value before we change the state
            currentState: dog
        });
    
        savedDog({...dog, [name]:value});
        // setFormObject({...formObject, [name]: value})
    
        // check value after we change the state
        console.log("stateAfterInput", dog);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (
            dog.name && 
            dog.breed && 
            dog.age &&
            dog.gender &&
            dog.size &&
            dog.description &&
            dog.location &&
            dog.email) {
            API.saveDogProfile({
                name: dog.name,
                breed: dog.breed,
                age: dog.age,
                gender: dog.gender,
                size: dog.size,
                description: dog.description,
                location: dog.location,
                email: dog.email
            })
            // .then(res => loadProfile())
            .catch(err => console.log(err));
        }
        else {console.log("form isn't complete")}
        console.log("afterSubmit",dog);
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

                        <h5>Size:</h5>
                        <p>{dog.size}</p>

                        <h5>About Me:</h5> 
                        <p>{dog.description}</p>
                        
                        <h5>Location:</h5> 
                        <p>{dog.location}</p>

                        <h5>Email Me:</h5>
                        <p>{dog.email}</p>
                    </div>
                    {/* <!-- Edit Profile Modal Trigger --> */}
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Edit Profile</a>
                    {/* <!-- Modal Structure --> */}
                    <div id="modal1" className="modal" style={{backgroundColor: "#426d49"}}>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-content">
                            
                                <h4 className="modalTxt">Edit Profile</h4>
                                <div className="divider"></div>
                                
                                <h5 className="modalTxt">Name:</h5> 
                                <div className="input-field">
                                    <input 
                                    placeholder="Tucker Budzyn" 
                                    type="text" 
                                    className="validate" 
                                    onChange={handleProfileChange}
                                    name="name"/>
                                </div>
                                <h5 className="modalTxt">Breed:</h5> 
                                <div className="input-field">
                                    <input 
                                    placeholder="Golden Retriever" 
                                    type="text" 
                                    className="validate" 
                                    onChange={handleProfileChange}
                                    name="breed"/>
                                </div>
                                
                                <div className="col s6">
                                    <h5 className="modalTxt">Age:</h5>
                                    <div className="input-field">
                                        <input 
                                        placeholder="2 years old" 
                                        type="text" 
                                        className="validate" 
                                        onChange={handleProfileChange}
                                        name="age"/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <h5 className="modalTxt">Gender:</h5>

                                    <select 
                                    class="browser-default"
                                    onChange={handleProfileChange}
                                    name="gender">
                                        <option disabled selected>What's their gender?</option>
                                        <option>male</option>
                                        <option>female</option>
                                    </select>
                                    
                                </div>
                                <div className="col s12" style={{paddingBottom: "20px"}}>
                                    <h5 className="modalTxt">Size:</h5>
                                    <select 
                                    class="browser-default"
                                    onChange={handleProfileChange}
                                    name="size">
                                        <option disabled selected>What's their size?</option>
                                        <option>small</option>
                                        <option>medium</option>
                                        <option>large</option>
                                    </select>
                                </div>
                                <div className="wrapper" style={{paddingTop: "100px"}}>
                                    <h5 className="modalTxt">About Me:</h5> 
                                    <div className="input-field">
                                        <textarea 
                                        id="textarea1" 
                                        className="materialize-textarea"
                                        onChange={handleProfileChange}
                                        name="description"></textarea>
                                        <label for="textarea1">Tell us something about your pawesome friend!</label>
                                    </div>
                                </div>
                                
                                {/* <h5 className="modalTxt">Parks I Enjoy:</h5> 
                                <div className="input-field">
                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label for="textarea1">What parks do you guys like to go to?</label>
                                </div> */}

                                <div className="col s12" style={{paddingBottom: "20px"}}>       
                                    <h5 className="modalTxt">Location:</h5>
                                    <select 
                                    class="browser-default"
                                    onChange={handleProfileChange}
                                    name="location">
                                        <option disabled selected>Which city are you located in?</option>
                                        <option>Toronto</option>
                                        <option>Markham</option>
                                        <option>Mississauga</option>
                                    </select>
                                </div>
                                
                                {/* ---------LOCATION API */}
                                {/* <ParkPreference onChange={handleProfileChange} /> */}

                                <h5 className="modalTxt">Email Me:</h5>
                                <div class="input-field">
                                    <input 
                                    placeholder="123tucker@gmail.com" 
                                    type="text" 
                                    class="validate" 
                                    onChange={handleProfileChange}
                                    name="email"/>
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