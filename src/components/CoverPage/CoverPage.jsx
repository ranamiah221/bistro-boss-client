import { Parallax, Background } from 'react-parallax';
const CoverPage = ({ coverImg, title, description }) => {
  return (
    <>
     <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={(`${coverImg}`)}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div
      className="hero h-[500px]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-1/2 mx-auto text-neutral-content text-center">
        <div className="bg-[#15151599] py-16 px-24 text-[#FFF] rounded-lg">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">{description}</p>
        </div>
      </div>
    </div>
    </Parallax>
    
   
    </>

  );
};

export default CoverPage;
