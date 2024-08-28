import Banner from "../../Components/Banner/Banner";
import Menu from "../../Components/Menu/Menu";
import OrderCategory from "../../Components/OrderCategory/OrderCategory";

const Home = () => {
    return (
        <div>
            <Banner />
            <OrderCategory />
            <Menu />
        </div>
    );
};

export default Home;