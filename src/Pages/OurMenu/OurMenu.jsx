import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Cover/Cover";
import useMenu from "../../Hooks/UseMenu/UseMenu";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const OurMenu = () => {

    const [menu] = useMenu()

    const offered = menu.filter( item => item.category === 'offered')
    const soups = menu.filter( item => item.category === 'soup')
    const pizzas = menu.filter( item => item.category === 'pizza')
    const desserts = menu.filter( item => item.category === 'dessert')
    const salads = menu.filter( item => item.category === 'salad')


    return (
        <>
            <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover title={'OUR MENU'} description={"Would you like to try a dish?"} img={'https://i.postimg.cc/SR2zNyTF/banner3.jpg'} />
      
      <div>
        <SectionTitle heading={"TODAY'S OFFER"} subHeading={"don't miss"} />
        <MenuCategory item={offered} />
      </div>

      <div>
        <MenuCategory item={desserts} img={'https://i.postimg.cc/SstMhXGf/dessert-bg.jpg'} coverTitle={"dessert"} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
      </div>
      <div>
        <MenuCategory item={pizzas} img={'https://i.postimg.cc/SstMhXGf/dessert-bg.jpg'} coverTitle={"pizza"} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
      </div>
      <div>
        <MenuCategory item={salads} img={'https://i.postimg.cc/SstMhXGf/dessert-bg.jpg'} coverTitle={"salad"} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
      </div>
      <div>
        <MenuCategory item={soups} img={'https://i.postimg.cc/SstMhXGf/dessert-bg.jpg'} coverTitle={"soup"} coverDescription={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
      </div>
        </>
    );
};

export default OurMenu;