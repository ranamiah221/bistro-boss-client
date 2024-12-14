import React, { useState } from "react";
import CoverPage from "../../components/CoverPage/CoverPage";
import bgImg from "../../assets/menu/banner3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const {category} = useParams()
    const categories=['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered'];
    const initialIndex = categories.indexOf(category)
    const [items]= useMenu()
    const [tabIndex, setTabIndex]= useState(initialIndex)
    const  salad= items?.filter(item=> item.category ==='salad')
    const  pizza= items?.filter(item=> item.category ==='pizza')
    const  soup= items?.filter(item=> item.category ==='soup')
    const  dessert= items?.filter(item=> item.category ==='dessert')
    const  drinks= items?.filter(item=> item.category ==='drinks')
    const  offered= items?.filter(item=> item.category ==='offered')
    
  return (
    <div>
      <CoverPage
        coverImg={bgImg}
        title="Order Food"
        description={"Would you like to try a dish?"}
      ></CoverPage>

      <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
       <div className="w-1/2 mx-auto text-center my-10 uppercase text-sm font-medium">
       <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drinks</Tab>
          <Tab>offered</Tab>
        </TabList>
       </div>

        <div className="w-4/5 mx-auto mb-10">
        <TabPanel>
        <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={offered}></OrderTab>
        </TabPanel>
        </div>
       
      </Tabs>
    </div>
  );
};

export default Order;
