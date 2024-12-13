import React from "react";
import CoverPage from "../../components/CoverPage/CoverPage";
import bgImg from "../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";

const Order = () => {
    const [items]= useMenu()
    const  salad= items.filter(item=> item.category ==='salad')
    const  pizza= items.filter(item=> item.category ==='pizza')
    const  soup= items.filter(item=> item.category ==='soup')
    const  dessert= items.filter(item=> item.category ==='dessert')
    const  drinks= items.filter(item=> item.category ==='drinks')
    
  return (
    <div>
      <CoverPage
        coverImg={bgImg}
        title="Order Food"
        description={"Would you like to try a dish?"}
      ></CoverPage>

      <Tabs>
       <div className="w-1/2 mx-auto text-center my-10">
       <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
       </div>

        <div className="w-4/5 mx-auto mb-10">
        <TabPanel>
          <div className="grid grid-cols-3 gap-8">
          {
            salad.map(item=> <FoodCard key={item.key} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-8">
          {
            pizza.map(item=> <FoodCard key={item.key} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-8">
          {
            soup.map(item=> <FoodCard key={item.key} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-8">
          {
            dessert.map(item=> <FoodCard key={item.key} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-8">
          {
            drinks.map(item=> <FoodCard key={item.key} item={item}></FoodCard>)
          }
          </div>
        </TabPanel>
        </div>
       
      </Tabs>
    </div>
  );
};

export default Order;
