
import { useEffect, useState } from 'react';
import SectionHeader from './../../Shared/SectionHeader/SectionHeader';
import Menu from '../../components/Menu/Menu';

const PopularItem = () => {
    const [items, setItems]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem= data.filter(item => item.category ==='popular')
            setItems(popularItem);
        })
    },[])
    return (
        <section className='my-10'>
            <SectionHeader subHeading={'Check it popular item'} heading={'Popular Menu'}></SectionHeader>
            <div className='grid grid-cols-2 gap-8 mb-10'>
            {
                items.map(item => <Menu item={item}></Menu>)
            }
            </div>
           <div className='flex justify-center'> <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button></div>
        </section>
    );
};

export default PopularItem;