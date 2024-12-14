import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Acts from '../../Acts/Acts';
import Contract from '../../Contract/Contract';
import Featured from '../../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import MenuCategory from '../MenuCategory/MenuCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Acts></Acts>
            <MenuCategory category={"popular"}></MenuCategory>
            <Contract></Contract>
            
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;