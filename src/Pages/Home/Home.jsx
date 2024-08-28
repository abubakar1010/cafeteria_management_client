import Banner from "../../Components/Banner/Banner";
import ChefRecommendation from "../../Components/ChefRecommendation/ChefRecommendation";
import Featured from "../../Components/Featured/Featured";
import Menu from "../../Components/Menu/Menu";
import OrderCategory from "../../Components/OrderCategory/OrderCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderCategory />
            <Menu />
            <ChefRecommendation />
            <Featured />
        </div>
    );
};

export default Home;