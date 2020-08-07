import StyledApply from "./style";
import React, { Component } from "react";
import H3 from "../../ui/H3";
import P from "../../ui/P";

class Apply extends Component {
  constructor() {
    super();
    this.state = {
      menuChange: "begginer"
    };
  }

  changeMenu = level => {
    this.setState({ menuChange: level });
  };

  render() {
    return (
      <>
        <StyledApply>
          <div className="mainBoxSection">
            <div className="textSection">
              <div className="orangeDash" />
              <H3>Join our program</H3>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </P>
              <div className="coolBtn">
                <div className="btn">Apply Now</div>
                <span>&rarr;</span>
              </div>
            </div>
            <div className="formSection">
              <div className="headerMenu">
                <p
                  className={
                    this.state.menuChange === "begginer" ? "active" : ""
                  }
                  onClick={() => {
                    this.changeMenu("begginer");
                  }}
                >
                  Begginer
                </p>
                <p
                  className={this.state.menuChange === "expert" ? "active" : ""}
                  onClick={() => {
                    this.changeMenu("expert");
                  }}
                >
                  Expert
                </p>
              </div>
              <input placeholder="Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email" />
              <textarea placeholder="Tell us something about yourself" />
            </div>
          </div>
        </StyledApply>
      </>
    );
  }
}
export default Apply;
