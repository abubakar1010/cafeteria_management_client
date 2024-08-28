import { useEffect, useState } from "react";
import PurchaseCard from "../PurchaseCard/PurchaseCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const ChefRecommendation = () => {

    const [menu, setMenu] = useState([]);

    useEffect( () => {
        fetch('menu.json')
        .then( res => res.json())
        .then ( data => setMenu(data.slice(0,3)))
    },[])

    

    console.log(menu);
    
    return (
        <>
            <SectionTitle subHeading={'Should Try'} heading={"CHEF RECOMMENDS"} />

            <div className=" grid grid-cols-3 w-full justify-center items-center mb-24 gap-24 ">
                {
                    menu.map( item => <PurchaseCard key={item._id} item={item} />)
                }
                
            </div>
        </>
    );
};

export default ChefRecommendation;