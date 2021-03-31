import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
// import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";


//--------- LOCATION API:
import AutoComplete from "../../components/AutoComplete";

import API from "../../Utils/api";
import "./style.css";

function Profile() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [size, setSize] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [park, setPark] = useState("");

    const [stateAWS, setStateAWS] = useState({
        success: false,
        url: "../../../img/dog-icon.png",
        error: false,
        errorMessage: "",
    });


    const [selectedFile, setSelectedFile] = useState();

    const [formSubmiMessState, setFormSubmiMessState] = useState({});

    const { user } = useAuth0();


    // Load Profile and component render
    useEffect(() => {

        API.getDog(user.email)
            .then(res => {
                setName(res.data[0].name);
                setAge(res.data[0].age);
                setBreed(res.data[0].breed);
                setSize(res.data[0].size);
                setGender(res.data[0].gender);
                setDescription(res.data[0].description);
                setImage(res.data[0].image);
                setPark(res.data[0].fav_park);
                setLocation(res.data[0].location);

            })
            .catch(err => console.log(err));
    }, [])


    const handleImageChange = (ev) => {
        setStateAWS({ ...stateAWS, success: false, url: "../../../img/dog-icon.png" });
        setSelectedFile(ev.target.files[0]);
    }

    const handleUploadToAWS = (ev) => {

        let file = selectedFile;
        // Split the filename to get the name and type
        let fileParts = selectedFile.name.split('.');

        let fileName = `${user.email}/${fileParts[0]}`;  // Pass the user id to save photos on unique folder on S3 bucket
        let fileType = fileParts[1];
        // console.log("Preparing the upload");
        axios.post("/sign_s3", {
            fileName: fileName,
            fileType: fileType,
        })
            .then((response) => {
                var returnData = response.data.data.returnData;
                var signedRequest = returnData.signedRequest;

                var options = {
                    headers: {
                        "Content-Type": fileType,
                    },
                };
                axios
                    .put(signedRequest, file, options)
                    .then((result) => {
                        // console.log("Response from s3");
                        setStateAWS({
                            ...stateAWS,
                            success: true,
                            url: response.data.data.returnData.url,
                        });
                        setImage(response.data.data.returnData.url);
                    })
                    .catch((error) => {
                        alert("ERROR " + JSON.stringify(error));
                    });
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && breed && age && gender && size && description && location && park) {
            API.saveDogProfile(user.email, {
                name: name,
                breed: breed,
                age: age,
                gender: gender,
                size: size,
                description: description,
                image: image,
                location: location,
                fav_park: park
            })
                .then(res => {
                    setFormSubmiMessState({ color: "Green", message: "Profile Saved" });
                })
                .catch(err => console.log(err));
        }
        else { setFormSubmiMessState({ color: "Red", message: "Please Complete Profile" }) }

    };

    //--- function To Handle Select for Auto Complete Of Park Location --->
    const autoCompleteCBPark = (parkAddress) => {
        setPark(parkAddress)
    };

    //--- function To Handle Select for Auto Complete Of City --->
    const autoCompleteCBCity = (parkAddress) => {
        setLocation(parkAddress)
    };

    const MessageDiv = (props) => (
        <div>
            <p style={{ color: props.color }}>{props.message}</p>
        </div>
    );

    return (
        <>
            <Header />
            <div className="container">
                <div className="row section">
                    {/* Picture Column */}
                    <div className="col s12 center-align">
                        <div id="profile-img-div">
                            <img
                                src={image}
                                className="section responsive-img z-depth-5"
                                alt="default dog"
                                id="profile-img"
                            />
                        </div>
                        {stateAWS.success ? <MessageDiv color={"Green"} message={"SUCCESSFUL UPLOAD"} /> : null}
                        {stateAWS.error ? <MessageDiv color={"Red"} message={"FAILED UPLOAD"} /> : null}

                        <input type="file" onChange={handleImageChange} />

                        <div className="input-field">
                            <button
                                className="waves-effect waves-light btn-large"
                                onClick={handleUploadToAWS}
                            >
                                UPLOAD
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Profile Detail Column */}

                    <div className="col s12 profileCol z-depth-5">
                        <form onSubmit={handleSubmit}>
                            <h4 className="fieldLabelTxt">Profile</h4>
                            <div className="divider"></div>
                            <div className="section">
                                <h5 className="fieldLabelTxt">Name:</h5>
                                <div className="input-field">
                                    <input
                                        placeholder="Enter the name of your doggie"
                                        type="text"
                                        className="validate"
                                        onChange={(e) => setName(e.target.value)}
                                        name="name"
                                        value={name}
                                    />
                                </div>
                            </div>
                            <div className="section">
                                <h5 className="fieldLabelTxt">Breed:</h5>
                                <div className="input-field">
                                    <input
                                        placeholder="Enter Dog Breed"
                                        type="text"
                                        className="validate"
                                        onChange={(e) => setBreed(e.target.value)}
                                        name="breed"
                                        value={breed}
                                    />
                                </div>
                            </div>
                            <div className="section">
                                <h5 className="fieldLabelTxt">Age:</h5>
                                <div className="input-field">
                                    <input
                                        placeholder="How old is your dog?"
                                        type="number"
                                        className="validate"
                                        onChange={(e) => setAge(e.target.value)}
                                        name="age"
                                        value={age}
                                    />
                                </div>
                            </div>
                            <div className="section">
                                <h5 className="fieldLabelTxt">Gender:</h5>
                                <select
                                    className="browser-default"
                                    onChange={(e) => setGender(e.target.value)}
                                    name="gender"
                                    value={gender}
                                >
                                    <option disabled>What's their gender?</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="section" style={{ paddingBottom: "" }}>
                                <h5 className="fieldLabelTxt">Size:</h5>
                                <select
                                    className="browser-default"
                                    onChange={(e) => setSize(e.target.value)}
                                    name="size"
                                    value={size}
                                >
                                    <option disabled>What's their size?</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </select>
                            </div>
                            <div className="section" style={{ paddingTop: "" }}>
                                <h5 className="fieldLabelTxt">About Me:</h5>
                                {/* <label htmlFor="textarea1"></label> */}
                                <div className="input-field">
                                    <textarea
                                        id="textarea1"
                                        className="materialize-textarea"
                                        onChange={(e) => setDescription(e.target.value)}
                                        name="description"
                                        value={description}
                                        placeholder="Tell us something about your pawesome friend"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="section">
                                <h5 className="fieldLabelTxt">Park I Enjoy:</h5>
                                <label>{park}</label>
                                <div className="input-field">
                                    <AutoComplete parentCallBack={autoCompleteCBPark}></AutoComplete>
                                </div>
                            </div>
                            <div className="section" style={{ paddingBottom: "20px" }}>
                                <h5 className="fieldLabelTxt">Location:</h5>
                                <label>{location}</label>
                                <div className="input-field">
                                    <AutoComplete parentCallBack={autoCompleteCBCity}></AutoComplete>
                                </div>
                            </div>
                            <MessageDiv color={formSubmiMessState.color} message={formSubmiMessState.message} />
                            <div className="section">
                                <button className="btn submit" onClick={handleSubmit}>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
