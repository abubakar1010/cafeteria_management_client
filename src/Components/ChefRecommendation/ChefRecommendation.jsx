import PurchaseCard from "../PurchaseCard/PurchaseCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import useMenu from "../../Hooks/UseMenu/UseMenu";

const ChefRecommendation = () => {

    // const [menu, setMenu] = useState([]);

    const [menu] = useMenu()

    

    // console.log(menu);
    
    return (
        <>
            <SectionTitle subHeading={'Should Try'} heading={"CHEF RECOMMENDS"} />

            <div className=" grid grid-cols-3 w-full justify-center items-center mb-24 gap-24 ">
                {
                    menu.slice(0, 3).map( item => <PurchaseCard key={item._id} item={item} />)
                }
                
            </div>
        </>
    );
};

export default ChefRecommendation;