
const HeroSection = () => {
    return (
      <main className="hero-container">
        <div className="hero-content">
            <div className="mainword">
            <h1>YOUR FEET <br /> DESERVE <br />THE BEST</h1>
            </div>
          
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR 
            SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
            SHOES.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
             <p>Also Available On</p>
   
             <div className="brand-icons">
               <img src="/images/amazon.png" alt="amazon-logo" />
               <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;