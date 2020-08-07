import styled from "styled-components";
import planet from "../../assets/images/planet.png";
import shade from "../../assets/images/shade.png";

const StyledHero = styled.section`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 110px);
  background: #0d0d0d;
  width: 100%;
  .textSection {
    padding: 215px 360px 0px 360px;
    display: flex;
    flex-direction: column;

    .firstH1 {
      margin: 5px 0px;
      color: #f15208;
      line-height: 70px;
    }
    .secondH1 {
      margin: 5px 0px;
      font-weight: normal;
      line-height: 70px;
      span {
        font-size: 30px;
        margin-right: 90px;
      }
    }
    p {
      margin: 0px;
      margin-left: 110px;
      width: 250px;
      line-height: 24px;
    }
  }

  .planet {
    background-image: url(${planet});
    position: absolute;
    width: 42%;
    height: calc(100vh - 150px);
    right: 65px;
    top: 210px;
    z-index: 2;
    background-repeat: no-repeat;
  }

  .shade {
    z-index: 1;
    background-image: url(${shade});
    position: absolute;
    width: 60%;
    height: calc(100vh);
    right: 0px;
    top: 110px;
    background-repeat: no-repeat;
  }

  .applicationLabel {
    position: absolute;
    left: 0;
    top: 50%;
    font-family: Helvetica;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.2em;
    color: #959595;
    transform: rotate(-90deg);
    text-transform: uppercase;
    cursor: pointer;
  }

  @media only screen and (max-width: 1600px) {
    .textSection {
      padding: 215px 0px 0px 200px;
    }
    .planet {
      right: 0px;
    }
  }

  @media only screen and (max-width: 1250px) {
    .textSection {
      padding: 50px 200px 0px 200px;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin-left: 0px;
        margin-bottom: 100px;
        text-align: center;
      }
    }
    .planet {
      right: 0px;
      display: none;
    }
  }

  @media only screen and (max-width: 900px) {
    .textSection {
      padding: 100px;

      .secondH1 {
      }
    }
  }

  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    .applicationLabel {
      display: none;
    }
    .planet {
      position: static;
      background-image: url(${planet});
      width: 90%;
      max-height: 300px;
      z-index: 0;
      right: unset;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
    }
    .textSection {
      padding: 0;
      margin-top: 40px;
      width: 80%;
      height: auto;
      margin-bottom: 56px;
      .firstH1,
      .secondH1 {
        text-align: left;
        font-size: 35px;
        line-height: 39px;
        span {
          margin-right: 50px;
        }
      }
      p {
        text-align: left;
        font-size: 14px;
        margin-top: 8px;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    .textSection {
    }
    .applicationLabel {
      left: -30px;
    }

    .shade {
      display: none;
    }
  }
`;

export default StyledHero;
