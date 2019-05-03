import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from "antd";
import {caseSlides} from '../../img'

const CasesCarousel = ({slides}) => {
  return (
    <Carousel draggable={true}>
      {slides.map(slide => <div key={slide.id}><img src={caseSlides[slide.slideName]} alt={slide.slideName} /></div>)}
    </Carousel>
  )
};

CasesCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CasesCarousel;
