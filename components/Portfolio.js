function Portfolio() {
  return (
    <section className="portfolio section max-w-container">
      <h2 className="chapter">
        <span>002</span> - Selected Works
      </h2>
      <div className="portfolio__fixed-nav">
        <ul>
          <li className="active">
            <a href="#portfolio1">Saving Forests</a>
          </li>
          <li>
            <a href="#portfolio2">Entering Winter</a>
          </li>
          <li>
            <a href="#portfolio3">Wildlife Exploration</a>
          </li>
          <li>
            <a href="#portfolio4">Holiday Resorts</a>
          </li>
        </ul>
      </div>
      <div id="portfolio1" className="portfolio__items with-parallax">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/images/img_landscape-01-large.jpg" alt="" />
          </div>
          <div data-scroll data-scroll-speed = '2' className="portfolio__item-heading">
            <p>01</p>
            <h3>Saving Forests</h3>
          </div>
          <div className="portfolio__item-text">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

          </div>
        </div>
      </div>
      <div id="portfolio1" className="portfolio__items with-parallax">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/images/img_landscape-02-large.jpg" alt="" />
          </div>
          <div data-scroll data-scroll-speed = '2' className="portfolio__item-heading">
            <p>02</p>
            <h3>Entering Winter</h3>
          </div>
          <div className="portfolio__item-text">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

          </div>
        </div>
      </div>
      <div id="portfolio3" className="portfolio__items with-parallax">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/images/15.jpg" alt="" />
          </div>
          <div data-scroll data-scroll-speed = '2' className="portfolio__item-heading">
            <p>03</p>
            <h3>Wildlife Exploration</h3>
          </div>
          <div className="portfolio__item-text">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

          </div>
        </div>
      </div>
      <div id="portfolio4" className="portfolio__items with-parallax">
        <div className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/images/11.jpg" alt="" />
          </div>
          <div data-scroll data-scroll-speed = '2' className="portfolio__item-heading">
            <p>04</p>
            <h3>Holiday Resorts</h3>
          </div>
          <div className="portfolio__item-text">
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
