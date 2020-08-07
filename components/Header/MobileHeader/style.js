import shade from "../../../assets/images/shade.png";
import styled from "styled-components";

const StyledMobileHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.1px;
  .mobileMenu {
    height: calc(100vh - 110px);
    right: 0px;
    left: 0px;
    top: 110px;
    position: absolute;
    width: 100%;
    background: #0d0d0d;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .background {
    background: url(${shade});
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  p {
    font-family: Helvetica;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    color: #979797;
    margin-bottom: 10px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #closeMenu {
    transform: rotate(-45deg);
  }
  @media only screen and (max-height: 600px) {
    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
  @media only screen and (max-height: 500px) {
    p {
      font-size: 14px;
      line-height: 14px;
    }
  }
`;

export default StyledMobileHeader;
