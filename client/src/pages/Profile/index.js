import React, { useState } from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';

import { Input, TextArea, FormBtn } from "../../components/Form";
// import ProfileList from "../../components/ProfileList";
// import ProfileListDefault from "../../components/ProfileListDefault"

//--------- LOCATION API:
import AutoComplete from "../../components/AutoComplete";

import API from "../../Utils/api";
import "./style.css";

function Profile() {

    const [email, setEmail] = useState("dog@hotmmail.com");
    const [password, setPassword] = useState("!PuppyLover1");
    const [name, setName] = useState("Enter the name of your doggie");
    const [age, setAge] = useState("How old is your dog");
    const [breed, setBreed] = useState("Enter Dog Breed");
    const [size, setSize] = useState("What's their size?");
    const [gender, setGender] = useState("What's their gender?");
    const [description, setDescription] = useState("Tell us something about your pawesome friend!");
    const [image, setImage] = useState("");
    const [likes, setLikes] = useState("");
    const [location, setLocation] = useState("Which city are you located in?");

    const [stateAWS, setStateAWS] = useState({
        success: false,
        url: "../../../img/dog-icon.png",
        error: false,
        errorMessage: ""
    });

    const [selectedFile, setSelectedFile] = useState();

    const [readOnlyState, setReadOnlyState] = useState(true);


    const handleImageChange = (ev) => {
        setStateAWS({ ...stateAWS, success: false, url: "../../../img/dog-icon.png" });
        setSelectedFile(ev.target.files[0]);
    }

    const handleUploadToAWS = (ev) => {

        let file = selectedFile;
        // Split the filename to get the name and type
        let fileParts = selectedFile.name.split('.');

        let userId = "12934434"  // Pass the user id to save photos on unique folder on S3 bucket
        let fileName = `${userId}/${fileParts[0]}`;
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("http://localhost:3001/sign_s3", {
            fileName: fileName,
            fileType: fileType,

        })
            .then(response => {
                var returnData = response.data.data.returnData;
                var signedRequest = returnData.signedRequest;

                var options = {
                    headers: {
                        'Content-Type': fileType
                    }
                };
                axios.put(signedRequest, file, options)
                    .then(result => {
                        console.log("Response from s3")
                        setStateAWS({ ...stateAWS, success: true, url: response.data.data.returnData.url });

                    })
                    .catch(error => {
                        alert("ERROR " + JSON.stringify(error));
                    })
            })
            .catch(error => {
                alert(JSON.stringify(error));
            })
    }


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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            name &&
            breed &&
            age &&
            gender &&
            size &&
            description &&
            location &&
            email
        ) {
            // API.saveDogProfile({
            //     name: dog.name,
            //     breed: dog.breed,
            //     age: dog.age,
            //     gender: dog.gender,
            //     size: dog.size,
            //     description: dog.description,
            //     location: dog.location,
            //     email: dog.email
            // }
            // )
            // .then(res => loadProfile())
            // .catch(err => console.log(err));
            console.log({
                name: name,
                breed: breed,
                age: age,
                gender: gender,
                size: size,
                description: description,
                location: location,
                email: email
            })
        }
        else { console.log("form isn't complete") }
        // console.log("afterSubmit", dog);
    };

    const toggleEditMode = () => {
        setReadOnlyState(prevState => (
            !prevState
        ))
    }

    const SuccessMessage = () => (

        <div>
            <p style={{ color: 'green' }}>SUCCESSFUL UPLOAD</p>
        </div>
    )
    const ErrorMessage = () => (
        <div>
            <h3 style={{ color: 'red' }}>FAILED UPLOAD</h3>
        </div>
    )

    return (
        <>
            <Header />
            <Container >
                <Row>
                {/* <div className="section"> */}
                    {/* Photo Column */}
                    <div className="col s12 m12 l6 xl6">
                        {/* Default Profile Photo */}
                        <div className="defaultProfilePicDiv" id="profile-img-div">
                            <img src={stateAWS.url} alt="default dog" id="profile-img" />
                        </div>
                        {stateAWS.success ? <SuccessMessage /> : null}
                        {stateAWS.error ? <ErrorMessage /> : null}
                        
                        <Row>
                            {/* Image Select */}
                            <div className="input-field file-field selectPhotoDiv">
                                <div className="waves-effect waves-light btn-large">
                                    <span>Select Photo</span>
                                    <input type="file" onChange={handleImageChange} />
                                </div>
                            </div>
                            {/* Image Upload */}
                            <div className="input-field file-field">
                                <button className="waves-effect waves-light btn-large" onClick={handleUploadToAWS}>UPLOAD</button>
                            </div>
                        </Row>
                    </div>

                    {/* Profile Detail Column */}

                    <div className="col s12 m12 l6 xl6">

                        <form onSubmit={handleSubmit} className="formDiv">

                            <h4 className="fieldLabelTxt">Profile</h4>
                            <div className="divider"></div>
                            <h5 className="fieldLabelTxt">Name:</h5>
                            <div className="input-field">
                                <input
                                    placeholder={name}
                                    type="text"
                                    className="validate"
                                    onChange={e => setName(e.target.value)}
                                    name="name"
                                    readOnly={readOnlyState} />
                            </div>
                            <h5 className="fieldLabelTxt">Breed:</h5>
                            <div className="input-field">
                                <input
                                    placeholder={breed}
                                    type="text"
                                    className="validate"
                                    onChange={e => setBreed(e.target.value)}
                                    name="breed"
                                    readOnly={readOnlyState} />
                            </div>

                            <div className="col s6">
                                <h5 className="fieldLabelTxt">Age:</h5>
                                <div className="input-field">
                                    <input
                                        placeholder={age}
                                        type="text"
                                        className="validate"
                                        onChange={e => setAge(e.target.value)}
                                        name="age"
                                        readOnly={readOnlyState} />
                                </div>
                            </div>
                            <div className="col s6">
                                <h5 className="fieldLabelTxt">Gender:</h5>

                                <select
                                    className="browser-default"
                                    onChange={e => setGender(e.target.value)}
                                    name="gender"
                                    value={gender}
                                    disabled={readOnlyState}
                                >
                                    <option disabled>What's their gender?</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>

                            </div>
                            <div className="col s12" style={{ paddingBottom: "20px" }}>
                                <h5 className="fieldLabelTxt">Size:</h5>
                                <select
                                    className="browser-default"
                                    onChange={e => setSize(e.target.value)}
                                    name="size"
                                    value={size}
                                    disabled={readOnlyState}>
                                    <option disabled>What's their size?</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                            <div className="wrapper" style={{ paddingTop: "100px" }}>
                                <h5 className="fieldLabelTxt">About Me:</h5>
                                <div className="input-field">
                                    <textarea
                                        id="textarea1"
                                        className="materialize-textarea"
                                        onChange={e => setDescription(e.target.value)}
                                        name="description"
                                        disabled={readOnlyState}
                                    ></textarea>
                                    <label htmlFor="textarea1">{description}</label>
                                </div>
                            </div>

                            <h5 className="fieldLabelTxt">My Favourite Park:</h5>
                            <div className="input-field">
                                <AutoComplete ></AutoComplete>
                            </div>

                            <div className="col s12" style={{ paddingBottom: "20px" }}>
                                <h5 className="fieldLabelTxt">Location:</h5>
                                <select
                                    className="browser-default"
                                    onChange={e => setLocation(e.target.value)}
                                    name="location"
                                    value={location}
                                    disabled={readOnlyState}
                                >
                                    <option disabled>Which city are you located in?</option>
                                    <option>Toronto</option>
                                    <option>Markham</option>
                                    <option>Mississauga</option>
                                </select>
                            </div>
                            <button className="btn" onClick={toggleEditMode}>Edit</button>
                            <button className="btn submit" onClick={handleSubmit} disabled={readOnlyState}>Save</button>

                        </form>
                    </div>
                {/* </div> */}
                </Row>
            </Container>
        </>
    )
}

export default Profile;