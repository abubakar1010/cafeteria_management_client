import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import { Button } from "@material-tailwind/react";

const Menu = () => {
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter( item => item.category === 'popular')
        setMenuInfo(popularItem)})
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'} />
      <div className=" grid grid-cols-2 gap-12 justify-center items-center">
        {
            menuInfo.map( item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className=" text-center my-12">
      <Button className=" text-[#1F2937] uppercase text-xl rounded-md border-b-2 border-[#1F2937] bg-[#FFF] " >View Full Menu</Button>

      </div>
    </>
  );
};

export default Menu;
