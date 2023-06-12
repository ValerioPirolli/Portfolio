import imageName from "../assets/fotoProfilo.jpg";
const Home = () => {
  return (
    <div className="home">
      <h1>
        Hi there, I'm Valerio. A junior Web Developer passionate about coding
        and digital design.
      </h1>
      <div className="home-img">
        <img src={imageName} alt=""/>
      </div>
    </div>
  );
};

export default Home;
