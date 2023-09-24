import React, { Component, useEffect } from "react";
import "../App.css";
import styled from "styled-components";

function Card(props) {

    return (
        <div className="card">
            <div className="container">
                <img src={props.photo} alt="Profile Picture" />
                <h2 className="fullName">{props.name}</h2>
                <p>{props.nim}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default class Profile extends Component {
    render() {
        return (
            <div className="User-info">
                <Card
                    name="Nabila Hana Saphira"
                    nim="21120120140112"
                    email="saphirana17@gmail.com"
                    photo="https://avatars.githubusercontent.com/u/73371159?v=4"
                />
                <Card
                    name="Febian Haydar Pratama"
                    nim="21120120120006"
                    email=""
                />
                <Card
                    name="Fajar Yumna Adani"
                    nim="211201120130128"
                    email=""
                />
                <Card
                    name="Rosyad Shidqi Dikpimmas"
                    nim="21120120140161"
                    email=""
                />
            </div>
        )
    }
};