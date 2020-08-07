import styled from "styled-components";

const StyledAbout = styled.section`
  background: #121212;
  padding: 160px 200px 100px 200px;
  .textSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      flex-basis: 33%;
      font-weight: normal;
      max-width: 270px;
    }
    p {
      flex-basis: 33%;
      max-width: 300px;
    }
  }

  .boxSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 160px;
  }

  @media only screen and (max-width: 1350px) {
    padding: 160px 100px 100px 100px;
  }
  @media only screen and (max-width: 1150px) {
    padding: 160px 100px 50px 100px;
    .textSection {
      flex-wrap: wrap;
      justify-content: space-around !important;

      h2 {
        text-align: center;
        flex-basis: 100% !important;
        max-width: none;
      }
      p {
        max-width: none;
        width: 45% !important;
      }
    }
    .boxSection {
      flex-direction: column;
      justify-content: center !important;
      align-items: center;
    }
  }
  @media only screen and (max-width: 750px) {
    padding: 160px 70px 100px 70px;

    .textSection {
      flex-direction: column;
      justify-content: center !important;

      h2 {
        text-align: left;
      }
      p {
        width: 70% !important;
        text-align: left;
      }
    }
  }
  @media only screen and (max-width: 460px) {
    padding: 80px 40px 0px 40px;
    .textSection {
      align-items: start;
      h2 {
        text-align: left !important;
        font-size: 40px;
      }
      p {
        width: 90% !important;
      }
    }
    .boxSection {
      margin-top: 0;
      justify-content: flex-start;
      align-items: flex-start;
      #boxComponent {
        margin: 0;
        margin-top: 160px;
        padding: 0;
      }
    }
  }
`;

export default StyledAbout;
