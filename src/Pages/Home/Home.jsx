import Banner from "../../Components/Banner/Banner";
import ChefRecommendation from "../../Components/ChefRecommendation/ChefRecommendation";
import DiscoverCafe from "../../Components/DiscoverCafe/DiscoverCafe";
import Featured from "../../Components/Featured/Featured";
import Menu from "../../Components/Menu/Menu";
import OrderCategory from "../../Components/OrderCategory/OrderCategory";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderCategory />
            <DiscoverCafe />
            <Menu />
            <ChefRecommendation />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;