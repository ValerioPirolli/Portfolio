import imageName from "../assets/fotoProfilo.jpg";
import "./scss/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img src={imageName} alt="" />
      </div>
        <h2>
          Hi there, I'm <span className="V">Valerio</span>. A junior Web Developer passionate about <span className="C">coding</span> and digital design.
        </h2>
    </div>
  );
};

export default Home;
