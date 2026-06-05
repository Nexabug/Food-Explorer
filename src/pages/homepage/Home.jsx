function Home() {
  return (
    <div className="home">
      <div className="hero-content">
        <div className="hero-texts">
          <h1>
            Discover and Save Your <em>Favorite Food</em> Favorite Food Spots
            Around the <em>World</em>
          </h1>
          <h3>
            Food Explorer helps you keep track of restaurants, cafes, and food
            places you have visited or want to visit. Save locations, organize
            them by country and city, and view everything on an interactive map.
          </h3>
        </div>

        <div className="btns">
          <button className="btn">Start Exploring</button>
          <button className="btn sec-btn">More Info</button>
        </div>
      </div>
      <div className="hero-img">
        <img src="/chad-montano-MqT0asuoIcU-unsplash.jpg" alt="hero-img" />
      </div>
    </div>
  );
}

export default Home;
