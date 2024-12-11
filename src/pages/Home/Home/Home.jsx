import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Acts from '../../Acts/Acts';
import PopularItem from '../../PopularItem/PopularItem';
import Contract from '../../Contract/Contract';
import Featured from '../../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Acts></Acts>
            <PopularItem category={'popular'}></PopularItem>
            <Contract></Contract>
            
            <Featured></Featured>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;