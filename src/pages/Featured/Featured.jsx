import SectionHeader from './../../Shared/SectionHeader/SectionHeader';
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featuredBgImg bg-fixed text-white mb-10'>
           <div className='h-full w-full bg-gradient-to-r from-[#151515B3] to-[#151515B3] py-16 px-32'>
           <SectionHeader subHeading={"Check it out"} heading={'From our menu'}></SectionHeader>
            <div className='flex justify-between items-center gap-10 my-10 '>
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p className='text-xl font-light'>March 20, 2023</p>
                    <h2 className='text-3xl font-light'>WHERE CAN I GET SOME?</h2>
                    <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='btn btn-outline border-0 border-b-4 text-white'>Read More</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;