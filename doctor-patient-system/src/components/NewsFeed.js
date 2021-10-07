import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function NewsFeed() {
  return (
    <div class="carousel-wrapper">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        centreMode
        dynamicHeight
        className="News"
      >
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/yogabest-colorlib-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/healthvest-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/docmed-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/hospice-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/healthcouch-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/medic-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/xgym-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/healthvest-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/docmed-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/hospice-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/healthcouch-free-template.jpg.webp" />
        </div>
        <div>
          <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/acupuncture-free-template.jpg.webp" />
        </div>
      </Carousel>
    </div>
  );
}
