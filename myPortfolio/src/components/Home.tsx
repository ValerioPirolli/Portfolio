import imageName from "../assets/fotoProfilo.jpg";
import "./scss/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={imageName} alt="" />
      </div>
        <h3>
          Hi there, I'm Valerio. A junior Web Developer passionate about coding
          and digital design.
        </h3>
    </div>
  );
};

export default Home;
