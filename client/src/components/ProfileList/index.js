import React from 'react';
import ProfileListItem from "../ProfileListItem";

class ProfileList extends React.Component {

    render() {
        return (
            this.props.dogState.map((dog) => (
            <ProfileListItem 
                key={dog._id}
                id={dog._id}
                name={dog.name}
                breed={dog.breed}
                age={dog.age}
                gender={dog.gender}
                bio={dog.bio}
                email={dog.email}
            />
            ))
        )
    }
}

export default ProfileList;