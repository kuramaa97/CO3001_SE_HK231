import slbktv from '/slbktv.jpg';



const Home: React.FC = () => {
  return (
<div className="hero flex-grow bg-cover  bg-center overflow-hidden" style={{backgroundImage: `url(${slbktv})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
</div>
</div>
  );
};

export default Home;
