import React from "react";
import { connect } from "react-redux";
import logo from '../resources/images/logo.jpg';
import ConnectingButtons from "./ConnectingButtons";
import './IntroductionPage.css';


const IntroductionPage = (props) => {
    return (
    <div className="introduction_page_container">
        <div className="introduction_page_panel">
            <img src={logo} className="introduction_page_image"></img>
            <ConnectingButtons />
        </div>

    </div>
    );
};

export default IntroductionPage;