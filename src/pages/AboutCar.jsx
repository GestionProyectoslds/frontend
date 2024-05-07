import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutCar = () => {
    return (
    <div>
        <div className="flex flex-col min-h-screen bg-red-100">
            <Header />
            <NavBar />
            {/* Div examples carousel */}
            <SliderOne />
        </div>
        <div className="flex flex-col bg-white shadow mt-8">
                {/* div allies carousel */}
                <SliderTwo />
        </div>
        <Footer />   
    </div>
    );
};

export default AboutCar;