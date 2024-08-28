import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import { Button } from "@material-tailwind/react";

const Featured = () => {
  return (
    <>
      <div className= " bg-fixed bg-[url('https://i.postimg.cc/d0PdTyLP/featured.jpg')] bg-cover bg-center h-full pt-12 bg-no-repeat relative rounded-xl !text-white " >
      <div className="absolute inset-0  pointer-events-none bg-[#1d1d1d70] rounded-xl"></div>
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className=" cursor-pointer z-50 flex gap-28 justify-center items-center px-24 pb-16 ">
          <div>
            <img className="" src={featuredImage} alt="" />
          </div>
          <div>
            <h3 className=" text-lg font-medium">March 20, 2023</h3>
            <p className=" text-lg font-medium">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button onClick={ () => console.log('clicked')
            } variant="text" className=" mt-4 text-[#FFF] uppercase text-xl rounded-md border-b-2 border-[#FFF]  " >Add To Cart</Button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
