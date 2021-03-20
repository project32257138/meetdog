import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import ProfileList from "../../components/ProfileList";
import "./style.css";

function Profile() {
    const [dog, savedDog] = useState({});


    return(
        <Container >
            <Row>
                {/* Picture Column */}
                <Col size="6">
                    {dog.length ? (
                        <img src={`${dog.image}`} alt="Dog profile picture" />
                    ) : (
                        <h3>Please add your profile picture!</h3>
                    )}
                </Col>
                
                {/* Profile Detail Column */}
                <Col size="6">
                {savedDog.length ? (
                 <ProfileList dogState={state.savedDog} />
                ) : (
                    <ProfileListDefault />
                )}
                </Col>
            </Row>
        </Container>
    )
}

export default Profile;