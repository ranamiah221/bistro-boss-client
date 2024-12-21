import { Circles } from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderSpinner;
