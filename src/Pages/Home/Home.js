import React from 'react';
import Banner from '../Banner/Banner';
import Services from './Services/Services';
import Villas from './Villas/Villas';
import WaterCatage from './WaterCottage/WaterCatage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Services></Services>
            <Villas></Villas>
            <WaterCatage></WaterCatage>
        </div>
    );
};

export default Home;