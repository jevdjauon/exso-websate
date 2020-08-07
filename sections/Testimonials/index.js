import React, { Component } from "react";
import StyledTestimonials from "./style";
import testemonial1 from "../../assets/images/testemonialFace1.png";
import testemonial2 from "../../assets/images/planet.png";
import testemonial3 from "../../assets/images/donations1.png";
import H3 from "../../ui/H3";
import H4 from "../../ui/H4";
import P from "../../ui/P";

class Testimonials extends Component {
  constructor() {
    super();
    this.state = {
      imageSlider: 1
    };
  }

  prevSlider = () => {
    if (this.state.imageSlider === 0) {
      this.setState({ imageSlider: 2 });
    } else {
      this.setState({ imageSlider: this.state.imageSlider - 1 });
    }
    console.log("prevSlider");
  };

  nextSlider = () => {
    if (this.state.imageSlider > 2) {
      this.setState({ imageSlider: 1 });
    } else {
      this.setState({ imageSlider: this.state.imageSlider + 1 });
    }
    console.log("next Slider");
  };
  render() {
    return (
      <>
        <StyledTestimonials>
          <div className="textSection">
            <div className="titleSection">
              <div className="orangeDash" />
              <H3>What our clients have to say</H3>
              <P>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </P>
            </div>
            <div className="authorSection">
              <H4>John Doe</H4>
              <P>Now works as CEO of Company</P>
            </div>

            <div className="dotsForChange">
              <div className={this.state.imageSlider === 1 ? "active" : ""} />
              <div className={this.state.imageSlider === 2 ? "active" : ""} />
              <div className={this.state.imageSlider === 3 ? "active" : ""} />
            </div>
          </div>
          <div className="imageSection">
            <img
              src={
                this.state.imageSlider === 1
                  ? testemonial1
                  : this.state.imageSlider === 2
                  ? testemonial2
                  : testemonial3
              }
              alt="donations-img"
            />
            <div className="imageNavigation">
              <span
                onClick={() => {
                  this.prevSlider();
                }}
              >
                &larr;
              </span>
              <span>Prev</span>
              <span>Next</span>
              <span
                onClick={() => {
                  this.nextSlider();
                }}
              >
                &rarr;
              </span>
            </div>
            <div className="transparentSquare" />
            <div className="fillerText">Filler Text </div>
          </div>
        </StyledTestimonials>
      </>
    );
  }
}

export default Testimonials;
