import StyledHeader from "./style";
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { logo } from "../../assets/icons";
import SVGInline from "react-svg-inline";
import P from "../../ui/P";
import MobileHeader from "./MobileHeader";
import onClickOutside from "react-onclickoutside";
// import { i18n, Link, withTranslation } from '../../i18n'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    // i18n.changeLanguage(i18n.language === 'en');
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    // console.log(this.props.t("menu"));
    return (
      <StyledHeader>
        {this.state.width > 1050 ? (
          <>
            <SVGInline svg={logo} />
            <div className="menuOptions">
              <P>Home</P>
              <P>Global Presence</P>
              <P>Our Associates</P>
              <P>Applying</P>
              <P>Business Units</P>
              {/*<button*/}
              {/*    type='button'*/}
              {/*    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'sr' : 'en')}*/}
              {/*>*/}
              {/*  {this.props.t('button.text')}*/}
              {/*</button>*/}
            </div>
          </>
        ) : (
          <MobileHeader />
        )}
      </StyledHeader>
    );
  }
}

Header.getInitialProps = async () => ({
  namespacesRequired: ['header'],
});

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Header

