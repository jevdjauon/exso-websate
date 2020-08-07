import styled from "styled-components";

const StyledSocialMedia = styled.section`
  background: #121212;
  padding: 100px 360px;

  h3 {
    margin: 0px;
    font-weight: normal;
  }

  .boxSection {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .showMore {
    margin-top: 70px;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 24px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #282d3f;
  }

  @media only screen and (max-width: 1700px) {
    padding: 100px 160px;
  }

  @media only screen and (max-width: 1250px) {
    .boxSection {
      div {
        flex-basis: 50%;
      }
    }
  }

  @media only screen and (max-width: 950px) {
    padding: 100px 80px;
  }

  @media only screen and (max-width: 750px) {
    .boxSection {
      div {
        flex-basis: 100%;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    padding: 100px 40px;

    .boxSection {
      margin-top: 100px;
    }
  }
`;

export default StyledSocialMedia;
