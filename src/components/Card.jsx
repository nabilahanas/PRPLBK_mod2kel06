import React, { Component, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import Button from "../elements/Button";

function Card(props) {

    return (
        <div className="card">
            <div className="container">
                <img src={props.photo} alt="Profile Picture" />
                <h2 className="fullName">{props.name}</h2>
                <p>{props.nim}</p>
                <p>{props.email}</p>
                <a href={props.github} target="_blank">
                    <Button background="#61dafb" type="submit">
                        Github
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default class Profile extends Component {
    render() {
        return (
            <div className="User-info">
                <div className="contents">
                    <div className="contents-item">
                        <Card
                            name="Nabila Hana Saphira"
                            nim="21120120140112"
                            email="saphirana17@gmail.com"
                            photo="https://avatars.githubusercontent.com/u/73371159?v=4"
                            github="https://github.com/nabilahanas"
                        />
                    </div>
                    <div className="contents-item">
                        <Card
                            name="Febian Haydar Pratama"
                            nim="21120120120006"
                            email="febianhaydar19@gmail.com"
                            photo="https://avatars.githubusercontent.com/u/85113470?v=4"
                            github="https://github.com/febianhaydarpratama"
                        />
                    </div>
                    <div className="contents-item">
                        <Card
                            name="Fajar Yumna Adani"
                            nim="211201120130128"
                            email="fajaryumna2772@gmail.com"
                            photo="https://avatars.githubusercontent.com/u/82258855?v=4"
                            github="https://github.com/fajaryumna"
                        />
                    </div>
                    <div className="contents-item">
                        <Card
                            name="Rosyad Shidqi Dikpimmas"
                            nim="21120120140161"
                            email="shidqi.dikpimmas@gmail.com"
                            photo="https://avatars.githubusercontent.com/u/82706711?v=4"
                            github="https://github.com/rosyadsd"
                        />
                    </div>
                </div>
            </div>
        )
    }
};