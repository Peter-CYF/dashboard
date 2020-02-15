import React, { Component } from "react";
import FirstSlideTotaliser from "./slides/firstSlideTotaliser/FirstSlideTotaliser";
import SecondSlide from "./slides/secondSlideInformation/SecondSlide";
import ThirdSlidePlaceholder from "./slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0
    };
  }

  changeSlide = current => {
    if (current === 1) {
      this.setState(currentState => {
        return {
          currentPicture: currentState.currentPicture + 1
        };
      });
    }
  };

  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 20000,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.changeSlide(next)
    };
    return (
      <Slider {...settings}>
        <SecondSlide current={this.state.currentPicture} />
        <ThirdSlidePlaceholder />
        <FirstSlideTotaliser />
      </Slider>
    );
  }
}

export default Home;
