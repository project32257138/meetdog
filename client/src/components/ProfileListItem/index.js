import React from "react";
import "./style.css";

function ProfileListItem(name, breed, age, gender, bio, email) {
    return(
        <div>
            <div class="card-panel">
                <h4>My Profile</h4>
                <div class="divider"></div>
                <h5>Name:</h5> <p>{name}</p>
                
                <h5>Breed:</h5> <p>{breed}</p>
                    
                {/* <!-- Change padding-left to "0" --> */}
                <div class="col s6 leftCol">
                    <h5>Age:</h5>

                    <p>{age}</p>
                </div>
                <div class="col s6">
                    <h5>Gender:</h5>

                    <p>{gender}</p>
                </div>
                    
                <h5>About Me:</h5> 

                <p>{bio}</p>
                    
                <h5>Parks I Enjoy:</h5> 
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <h5>Email Me:</h5>
                <p>{email}</p>
            </div>
            <a class="waves-effect waves-light btn">Edit Profile</a>
                 
        </div>
    )
}

export default ProfileListItem;