import React from "react";

function imageSelect(props) {
    const [AWS, setAWS, setSelectFile] = props;
    const handleImageChange = (ev) => {
        setAWS({ ...AWS, success: false, url: "../../../img/dog-icon.png" });
        setSelectFile(ev.target.files[0]);
    }
    return (
        <div className="input-field file-field selectPhotoDiv">
        <div className="waves-effect waves-light btn-large">
            <span>Select Photo</span>
            <input type="file" onChange={handleImageChange} />
        </div>
        </div>
    )
};

export default imageSelect;