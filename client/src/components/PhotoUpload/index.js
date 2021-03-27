import React, { useState } from "react";
import { Row } from "../../components/Grid";
import axios from 'axios';

function PhotoUpload(
    props
) {
    const {AWS, setAWS, handleImageUpload} = props;
    
    // const [stateAWS, setStateAWS] = useState({
    //     success: false,
    //     url: "../../../img/dog-icon.png",
    //     error: false,
    //     errorMessage: ""
    // });

    const [selectedFile, setSelectedFile] = useState();

    const handleImageChange = (ev) => {
        setAWS({ ...AWS, success: false, url: "../../../img/dog-icon.png" });
        setSelectedFile(ev.target.files[0]);
    }

    // const handleUploadToAWS = (ev) => {

    //     let file = selectedFile;
    //     // Split the filename to get the name and type
    //     let fileParts = selectedFile.name.split('.');

    //     let userId = "12934434"  // Pass the user id to save photos on unique folder on S3 bucket
    //     let fileName = `${userId}/${fileParts[0]}`;
    //     let fileType = fileParts[1];
    //     console.log("Preparing the upload");
    //     axios.post("http://localhost:3001/sign_s3", {
    //         fileName: fileName,
    //         fileType: fileType,

    //     })
    //         .then(response => {
    //             var returnData = response.data.data.returnData;
    //             var signedRequest = returnData.signedRequest;

    //             var options = {
    //                 headers: {
    //                     'Content-Type': fileType
    //                 }
    //             };
    //             axios.put(signedRequest, file, options)
    //                 .then(result => {
    //                     console.log("Response from s3")
    //                     setStateAWS({ ...stateAWS, success: true, url: response.data.data.returnData.url });

    //                 })
    //                 .catch(error => {
    //                     alert("ERROR " + JSON.stringify(error));
    //                 })
    //         })
    //         .catch(error => {
    //             alert(JSON.stringify(error));
    //         })
    // }

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
    return(
        <div className="col s12 m12 l6 xl6">
                        {/* Default Profile Photo */}
                        <div className="defaultProfilePicDiv" id="profile-img-div">
                            <img src={AWS.url} alt="default dog" id="profile-img" />
                        </div>
                        {AWS.success ? <SuccessMessage /> : null}
                        {AWS.error ? <ErrorMessage /> : null}
                        
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
                                <button className="waves-effect waves-light btn-large" onClick={handleImageUpload}>UPLOAD</button>
                            </div>
                        </Row>
                    </div>
    )
};

export default PhotoUpload;