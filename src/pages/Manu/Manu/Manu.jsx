import CoverPage from "../../../components/CoverPage/CoverPage";
import bgImg1 from "../../../assets/menu/banner3.jpg";
import bgSalad from "../../../assets/menu/salad-bg.jpg";
import bgDessert from "../../../assets/menu/dessert-bg.jpeg";
import bgPizza from "../../../assets/menu/pizza-bg.jpg";
import bgSoup from "../../../assets/menu/soup-bg.jpg";
import PopularItem from "../../PopularItem/PopularItem";

const Manu = () => {
  return (
    <div>
      <CoverPage
        coverImg={bgImg1}
        title="Our Menu"
        description={"Would you like to try a dish?"}
      ></CoverPage>
      <PopularItem
        category={"offered"}
        title={"Todays Offered"}
        subTitle={"Don't miss"}
      ></PopularItem>
      <CoverPage
        coverImg={bgDessert}
        title="DESSERTS"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
      <PopularItem category={"dessert"}></PopularItem>
      <CoverPage
        coverImg={bgPizza}
        title="Pizza"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
      <PopularItem category={"pizza"}></PopularItem>
      <CoverPage
        coverImg={bgSalad}
        title="Salad"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
      <PopularItem category={"salad"}></PopularItem>
      <CoverPage
        coverImg={bgSoup}
        title="Soup"
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></CoverPage>
      <PopularItem category={"soup"}></PopularItem>
    </div>
  );
};

export default Manu;
