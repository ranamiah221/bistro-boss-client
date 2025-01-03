import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu/Menu';
import useMenu from '../../../Hooks/useMenu';

const MenuCategory = ({category, title, subTitle }) => {
    const [items] = useMenu();
    const popularItem = items.filter(item=> item.category ===`${category}`)
    return (
        <section className='my-10'>
            {
                title ? <div className='w-3/12 mx-auto text-center my-8'>
                <p className='text-base font-normal text-[#D99904] mb-2'>---{subTitle}---</p>
                <h2 className='text-3xl font-semibold uppercase border-y-4 py-3'>{title}</h2>
            </div> :""
            }
           
            <div className='grid grid-cols-2 gap-8 mb-10'>
            {
                popularItem.map(item => <Menu key={item._id} item={item}></Menu>)
            }
            </div>
            <div>
                {
                   category ==='popular' ? '':<Link to={`/order/${category}`} className='flex justify-center'> <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button></Link>   
                }
            </div>
        
        </section>
    );
};

export default MenuCategory;