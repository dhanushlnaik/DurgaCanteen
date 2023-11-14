import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";


import FormBannerComponent from "./sections/formbannercomponent.jsx";


const CustomComponents = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <FormBannerComponent/>

                </div>
            </div>
            <Footer />
        </div>
    );
}

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;
