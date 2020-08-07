import StyledMobileHeader from "./style";
import React, { Component } from "react";
import { logoFooter, hamburgerMenu, plus } from "../../../assets/icons";
import SVGInline from "react-svg-inline";
import P from "../../../ui/P";
import onClickOutside from "react-onclickoutside";

class MobileHeader extends Component {
  constructor() {
    super();
    this.state = {
      hamburgerClicked: false
    };
  }
  handleClickOutside = evt => {
    this.setState({ hamburgerClicked: false });
  };

  clickMenu = () => {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
    if (this.state.hamburgerClicked === false) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.removeAttribute("style");
    }
  };
  render() {
    return (
      <StyledMobileHeader>
        <SVGInline svg={logoFooter} />
        {this.state.hamburgerClicked ? (
          <SVGInline id="closeMenu" svg={plus} onClick={this.clickMenu} />
        ) : (
          <SVGInline svg={hamburgerMenu} onClick={this.clickMenu} />
        )}

        {this.state.hamburgerClicked ? (
          <div className="mobileMenu">
            <div className="background" />
            <P>Home</P>
            <P>Mapa Partnera</P>
            <P>Saradnici</P>
            <P>Apliciranje</P>
            <P>Ogranci</P>
            <P>Investitori</P>
            <P>Donacije</P>
            <P>Testimonials</P>
          </div>
        ) : null}
      </StyledMobileHeader>
    );
  }
}

export default onClickOutside(MobileHeader);
