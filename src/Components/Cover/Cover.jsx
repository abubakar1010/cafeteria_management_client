import { Button } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
const Cover = ({img, title, description}) => {
    return (
        <div
        style={{
            backgroundImage: `url(${img})`,
          }}
         className={` w-full h-[520px] bg-cover bg-center bg-no-repeat  flex
         items-center`}>
            <div className=" bg-[#15151599] text-center text-white w-[900px] px-40 py-12 mx-auto ">
                <h1 className=" text-3xl font-bold text-center mb-4 ">{title}</h1>
            <p className=" text-center">{description}</p>
            <Button variant="text" className=" mt-8 text-[#BB8506] uppercase text-xl rounded-md border-b-2 border-[#FFF]  " >Discover</Button>

            </div>
            
        </div>
    );
};

export default Cover;