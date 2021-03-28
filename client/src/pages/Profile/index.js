import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
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
  const [likes, setLikes] = useState("");
  // const [park, setPark] = useState("");
  const [location, setLocation] = useState("");

  const [stateAWS, setStateAWS] = useState({
    success: false,
    url: "../../../img/dog-icon.png",
    error: false,
    errorMessage: "",
  });

  
    const [selectedFile, setSelectedFile] = useState();

    const [readOnlyState, setReadOnlyState] = useState(false);

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
                setLikes(res.data[0].likes);
                // setPark(res.data.park);
                setLocation(res.data[0].location);
            })
            .catch(err => console.log(err));


        console.log(user.email)

        // ---------------------

        // API.getNewDog({
        //   email: user.email
        // }).then(res => {
        //     console.log(res)
        // })
        // .catch(err => console.log(err));

        // ---------------------

        // API.getNewDogs({
        //   email: user.email
        // }).then(res => {
        //     console.log(res)
        // })
        // .catch(err => console.log(err));

        // ------------------

        // API.likeOrDislike(user.email,
        //     {
        //         id: "605e58f29f0ef52213ba4749", 
        //         value: false
        //     })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err));

        // ---------------------

        // API.checkIfMatch(user.email, {
        //       likedEmail: "test@hotmail.com"
        //     })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err));

        // ----------------

        // API.getAllMatches({
        //       email: user.email
        //     })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => console.log(err));

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
        console.log("Preparing the upload");
        axios.post("http://localhost:3001/sign_s3", {
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
            console.log("Response from s3");
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
        if (
            name &&
            breed &&
            age &&
            gender &&
            size &&
            description &&
            location
        ) {
            API.saveDogProfile(user.email, {
                name: name,
                breed: breed,
                age: age,
                gender: gender,
                size: size,
                description: description,
                image: image,
                // park: park,
                location: location,
            })
                .then(res => {
                    console.log('Profile saved')
                })
                .catch(err => console.log(err));
        }
        else { console.log("form isn't complete") }
   
  };

  const SuccessMessage = () => (
    <div>
      <p style={{ color: "green" }}>SUCCESSFUL UPLOAD</p>
    </div>
  );
  const ErrorMessage = () => (
    <div>
      <h3 style={{ color: "red" }}>FAILED UPLOAD</h3>
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
                className="section responsive-img"
                alt="default dog"
                id="profile-img"
              />
            </div>
            {stateAWS.success ? <SuccessMessage /> : null}
            {stateAWS.error ? <ErrorMessage /> : null}

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

          <div className="col s12">
            <form onSubmit={handleSubmit}>
              <h4 className="fieldLabelTxt">Profile</h4>
              <div className="divider"></div>
              <h5 className="fieldLabelTxt">Name:</h5>
              <div className="input-field">
                <input
                  placeholder={name}
                  type="text"
                  className="validate"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  readOnly={readOnlyState}
                />
              </div>
              <h5 className="fieldLabelTxt">Breed:</h5>
              <div className="input-field">
                <input
                  placeholder={breed}
                  type="text"
                  className="validate"
                  onChange={(e) => setBreed(e.target.value)}
                  name="breed"
                  readOnly={readOnlyState}
                />
              </div>

              <div className="">
                <h5 className="fieldLabelTxt">Age:</h5>
                <div className="input-field">
                  <input
                    placeholder={age}
                    type="text"
                    className="validate"
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    readOnly={readOnlyState}
                  />
                </div>
              </div>
              <div className="">
                <h5 className="fieldLabelTxt">Gender:</h5>

                <select
                  className="browser-default"
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  value={gender}
                  disabled={readOnlyState}
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
                  disabled={readOnlyState}
                >
                  <option disabled>What's their size?</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className="" style={{ paddingTop: "" }}>
                <h5 className="fieldLabelTxt">About Me:</h5>
                <div className="input-field">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    disabled={readOnlyState}
                  ></textarea>
                  <label htmlFor="textarea1">{description}</label>
                </div>
              </div>

              <h5 className="fieldLabelTxt">Parks I Enjoy:</h5>
              <div className="input-field">
                <AutoComplete></AutoComplete>
              </div>

              <div className="" style={{ paddingBottom: "20px" }}>
                <h5 className="fieldLabelTxt">Location:</h5>
                <select
                  className="browser-default"
                  onChange={(e) => setLocation(e.target.value)}
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
              {/* <button className="btn" onClick={toggleEditMode}>Edit</button> */}
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
