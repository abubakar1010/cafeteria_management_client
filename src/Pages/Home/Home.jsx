import Banner from "../../Components/Banner/Banner";
import ChefRecommendation from "../../Components/ChefRecommendation/ChefRecommendation";
import Cover from "../../Components/Cover/Cover";
import Featured from "../../Components/Featured/Featured";
import OrderCategory from "../../Components/OrderCategory/OrderCategory";
import PopularItem from "../../Components/PopularItem/PopularItem";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    console.log(import.meta.env.VITE_IMAGE_HOISTING_KEY);
    
    return (
        <div>
            <Banner />
            <OrderCategory />
            <Cover title={"Bistro Boss"} description={`It's official: our doors are finally open! Bistro is the name we've carefully chosen for our new restaurant, with the aim of offering you an emotionally rich experience when tasting each of our dishes. Find us at 17 Rue Bergère, in the 9th arrondissement of Paris, just a few minutes from the Comptoir National d'Escompte de Paris monument.`} img={'https://i.postimg.cc/C14MJLz4/chef-service.jpg'}  />
            <PopularItem />
            <ChefRecommendation />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;