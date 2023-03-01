import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              title="Easy and quick"
              paragraph="Get access to the book you purchased"
              icon={<FontAwesomeIcon icon="bolt" />}
            />
            <Highlight
              title="10,000+ Books"
              paragraph="Library has books in all your favourite categories"
              icon={<FontAwesomeIcon icon="book-open" />}
            />
            <Highlight
              title="Affordable"
              paragraph="Get your hands on popular books for as little as $10"
              icon={<FontAwesomeIcon icon="tags" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
