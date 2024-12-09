import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Acts from '../../Acts/Acts';
import PopularItem from '../../PopularItem/PopularItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Acts></Acts>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Home;