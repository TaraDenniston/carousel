import { useState } from "react";
import Card from "./Card";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "../styles/Carousel.css";

const DEFAULT_CARDS = [
  {
    src: image1,
    caption: "Photo by Richard Pasquarella on Unsplash"
  },
  {
    src: image2,
    caption: "Photo by Pratik Patel on Unsplash"
  },
  {
    src: image3,
    caption: "Photo by Josh Post on Unsplash"
  }
];
const DEFAULT_TITLE = "Shells from far away beaches.";

function Carousel({ cardData = DEFAULT_CARDS, title = DEFAULT_TITLE }) {
  const [cardIdx, setCardIdx] = useState(0);
  const card = cardData[cardIdx];
  const total = cardData.length;
  const leftIconHidden = cardIdx === 0 ? "hidden" : "";
  const rightIconHidden = cardIdx === total - 1 ? "hidden" : "";
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBackward = () => setCardIdx(cardIdx - 1);

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`fas fa-chevron-circle-left fa-2x ${leftIconHidden}`}
          onClick={goBackward}
          data-testid="left-arrow"
        />
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        <i
          className={`fas fa-chevron-circle-right fa-2x ${rightIconHidden}`}
          onClick={goForward}
          data-testid="right-arrow"
        />
      </div>
    </div>
  );
}

export default Carousel;