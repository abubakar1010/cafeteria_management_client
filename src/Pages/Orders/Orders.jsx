import { useState } from "react";
import Cover from "../../Components/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/UseMenu/UseMenu";
import OrderTab from "../../Components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Orders = () => {

    const categories = ["salad","pizza","soup","dessert","drink"]
    const {category}= useParams()

    const categoryIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(categoryIndex);
    console.log(tabIndex);
    const [menu] = useMenu()

    const salads = menu.filter( item => item.category === 'salad')
    const pizzas = menu.filter( item => item.category === 'pizza')
    const soups = menu.filter( item => item.category === 'soup')
    const desserts = menu.filter( item => item.category === 'dessert')
    const drinks = menu.filter( item => item.category === 'drinks')
    
  return (
    <>
      <Cover
        img={"https://i.postimg.cc/0ydDbY9g/banner2.jpg"}
        title={"our shop"}
        description={"Would you like to try a dish?"}
      />
      <div className=" my-24">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salads</Tab>
            <Tab>Pizzas 2</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab item={salads}/>
          </TabPanel>
          <TabPanel>
            <OrderTab item={pizzas}/>
          </TabPanel>
          <TabPanel>
            <OrderTab item={soups}/>
          </TabPanel>
          <TabPanel>
            <OrderTab item={desserts}/>
          </TabPanel>
          <TabPanel>
            <OrderTab item={drinks}/>
          </TabPanel>

        </Tabs>
      </div>
    </>
  );
};

export default Orders;
