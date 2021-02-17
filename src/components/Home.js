import { Description, FoodiesImage, Title } from "../styles";


const Home = () => {
  return (
    <>
      <Title>Foodiez Truck</Title>
      <Description>“A recipe has no soul, you as the cook must bring soul to the recipe.”
      <p> – Thomas Keller.</p>
      </Description>
      
      <FoodiesImage
        alt="Foodiez Truck"
        src="https://i.pinimg.com/originals/30/7e/81/307e8154e87ffc5d2f823cd50b174dee.gif"
      />
    </>
  );
};

export default Home;
