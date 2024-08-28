import { Button } from "@material-tailwind/react";
import MenuItem from "../../Pages/Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({item, img, coverTitle, coverDescription}) => {
    console.log(item);
    
    return (
        <>
        {img && <Cover img={img} title={coverTitle} description={coverDescription} />}
         <div className=" grid grid-cols-2 gap-12 justify-center items-center mt-24 ">
        {
            // eslint-disable-next-line react/prop-types
            item.map( item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className=" text-center mb-28 mt-12">
      <Button
       className=" text-[#1F2937] uppercase text-xl rounded-md border-b-2 border-[#1F2937] bg-[#FFF] " >View Full Menu</Button>

      </div>
        </>

    );
};

export default MenuCategory;