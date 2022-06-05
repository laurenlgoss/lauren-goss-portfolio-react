import React from 'react';
import Carousel from 'react-material-ui-carousel';

function SkillsCarousel({ skills }) {
  const sliderItems = skills.length > 6 ? 6 : skills.length;
  const items = [];

  for (let i = 0; i < skills.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <div className="row">
          {skills.slice(i, i + sliderItems).map((skill, i) => {
            return (
              <div className="col">
                <div className="text-center" key={i}>
                  <img src={skill.img} alt={`${skill.name} logo`} />
                  <div className="mt-3">{skill.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className="carousel row">
      <div className="col">
        <Carousel
          animation={'slide'}
          duration={7000}
          indicators={false}
          interval={8000}
        >
          {items}
        </Carousel>
      </div>
    </div>
  );
}

export default SkillsCarousel;
