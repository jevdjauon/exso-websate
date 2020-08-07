import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0d0d0d;
  height: 110px;

  .menuOptions {
    flex-basis: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    height: 100%;

    p {
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0px;
      cursor: pointer;
      :first-child {
        color: #fff;
        border-bottom: 2px solid #fff;
      }
      :last-child {
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .menuOptions {
      flex-basis: 75%;
    }
  }
`;

export default StyledHeader;
