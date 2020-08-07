import styled from "styled-components";

const StyledMap = styled.section`
  background: #121212;
  padding: 150px 110px 150px 360px;
  display: flex;
  min-height: 500px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;

  #boxComponent {
    h3 {
      margin-top: 0px;
    }
    .button {
      color: #f15208;
    }
  }
  .map {
    img {
      /* position: absolute;
      right: 110px;
      top: -120px;
      z-index: 1; */
    }
  }

  @media only screen and (max-width: 1700px) {
    padding: 0px 110px 0px 110px;
  }

  @media only screen and (max-width: 1450px) {
    #boxComponent {
      flex-basis: 60%;
    }
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 1150px) {
    display: flex;
    padding-left: 0;
    padding-right: 0;
    flex-direction: column;
    #boxComponent {
      flex-basis: 60%;
      margin: 50px 70px;
      .button {
        margin-top: 60px;
      }
    }
    .map {
      display: flex;
      justify-content: center;
      width: 100%;
      img {
        margin: 0 auto;
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding: 0px;

    #boxComponent {
      flex-basis: 100%;
    }

    img {
      margin: 0 auto;
      width: 100%;
    }
  }

  @media only screen and (max-width: 460px) {
    align-items: flex-start;
    padding-top: 100px;
    #boxComponent {
      margin-left: 40px;
      margin-right: 0;
      flex-basis: 100%;
    }
    img {
      width: 100%;
      min-height: 250px;
    }
  }
`;

export default StyledMap;
