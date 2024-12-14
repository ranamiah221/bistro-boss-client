import CoverPage from "../../../components/CoverPage/CoverPage";
import bgImg1 from "../../../assets/menu/banner3.jpg";
import bgSalad from "../../../assets/menu/salad-bg.jpg";
import bgDessert from "../../../assets/menu/dessert-bg.jpeg";
import bgPizza from "../../../assets/menu/pizza-bg.jpg";
import bgSoup from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../../Home/MenuCategory/MenuCategory";

const Manu = () => {
  return (
    <div>
      <CoverPage
        coverImg={bgImg1}
        title="Our Menu"
        description={"Would you like to try a dish?"}
      ></CoverPage>
      <MenuCategory
      category={"offered"}
      title={"Todays Offered"}
      subTitle={"Don't miss"}></MenuCategory>
     
      <CoverPage
        coverImg={bgDessert}
        title="DESSERTS"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
      <MenuCategory category={"dessert"}></MenuCategory>
      <CoverPage
        coverImg={bgPizza}
        title="Pizza"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
       <MenuCategory category={"pizza"}></MenuCategory>
      <CoverPage
        coverImg={bgSalad}
        title="Salad"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
     <MenuCategory category={"salad"}></MenuCategory>
      <CoverPage
        coverImg={bgSoup}
        title="Soup"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
    <MenuCategory category={"soup"}></MenuCategory>
    </div>
  );
};

export default Manu;
