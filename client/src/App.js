import React from 'react'
import './App.css';
import HeroImage from "./Components/HeroImage";
import LandList from "./Components/LandList.js";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className='layout'>
            <HeroImage />
            <LandList />
            <Footer />
        </div>
    );
}

export default App;
