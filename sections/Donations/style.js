import styled from "styled-components";
import donations1 from "../../assets/images/donations1.png";

const StyledDonations = styled.section`
  background: #121212;
  padding: 0px 110px 20px 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .imageSection {
    flex-basis: 35%;
    min-height: 100%; 
    min-width: 63px;
    position: relative;
    background: url(${donations1});
    background-size: cover;
    .transparentSquare {
      position: absolute;
      bottom: -60px;
      right: -70px;
      width: 140px;
      height: 140px;
      background: #ffffff;
      mix-blend-mode: overlay;
    }

    .fillerText {
      position: absolute;
      font-family: Helvetica;
      font-size: 70px;
      left: -250px;
      top: 45%;
      color: #121212;
      text-align: center;
      text-shadow: -1px 0 #303030, 0 1px #303030, 1px 0 #303030, 0 -1px #303030;
      transform: rotate(-90deg);
    }
  }
  .textSection {
    background: #0d0d0d;
    padding: 75px 90px 80px 90px;
    flex-basis: 65%;
    height: 100%;

    .titleSection {
      h3 {
        font-weight: normal;
      }
      p {
        width: 250px;
      }
    }
    .boxSection {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      h3 {
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
      }
      p {
        width: 250px;
        margin-right: 70px;
      }
      #boxComponent {
        .button {
          margin-top: 50px;
          color: #f15208;
        }
      }
    }
  }

  @media only screen and (max-width: 1800px) {
    padding: 100px 110px 100px 180px;
  }
  @media only screen and (max-width: 1500px) {
    padding-left: 110px;
    padding-right: 110px;
    .textSection {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 75px;
      .titleSection {
        margin-bottom: 60px;
        h3,
        p {
          text-align: left;
        }
      }

      .boxSection {
        flex-direction: column;
        text-align: left;
        #boxComponent {
          margin-bottom: 30px;
          .button {
            margin-top: 10px !important;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media only screen and (max-width: 900px) {
    .imageSection {
      .fillerText {
        display: none;
    }
  }

  @media only screen and (max-width: 460px) {
    .imageSection {
      .transparentSquare {
        position: absolute;
        bottom: -40px;
        right: -40px;
        width: 80px;
        height: 80px;
        background: #ffffff;
        mix-blend-mode: overlay;
      }
    }
    .textSection{
      margin-left: 40px;
    }
  }
  @media only screen and (max-width: 460px) {
    .imageSection {
    display:none;
    }  
  }
`;

export default StyledDonations;
