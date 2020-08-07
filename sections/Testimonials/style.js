import styled from "styled-components";

const StyledTestimonials = styled.section`
  background: #121212;
  padding: 100px 360px 100px 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .textSection {
    background: #0d0d0d;
    padding: 75px 90px 80px 250px;
    flex-basis: 70%;
    margin-bottom: 70px;
    .orangeDash {
      transform: rotate(-90);
      width: 45px;
      height: 2px;
      background: #f15208;
      margin-bottom: 40px;
    }

    h3 {
      font-weight: normal;
    }
    p {
      margin-right: 50px;
    }

    .authorSection {
      margin-top: 70px;
    }

    .dotsForChange {
      margin-top: 50px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      div {
        width: 4px;
        height: 4px;
        margin-right: 10px;
        background: #93969f;
      }
      .active {
        width: 8px;
        height: 8px;
        background: #fff;
      }
    }
  }
  .imageSection {
    flex-basis: 30%;
    position: relative;

    img {
      height: 600px;
      width: 550px;
    }

    .imageNavigation {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70px;
      background: #0d0d0d;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 70px;
        height: 70px;
        font-size: 25px;
        cursor: pointer;
        :first-child {
          background: #303030;
          color: #fff;
          left: 0;
        }
        :nth-child(2) {
          color: #fff;
          left: 80px;
          font-size: 14px;
        }
        :nth-child(3) {
          color: #fff;
          right: 80px;
          font-size: 14px;
        }
        :last-child {
          background: #303030;
          color: #fff;
          right: 0;
        }
      }
    }
    .transparentSquare {
      position: absolute;
      bottom: 0;
      left: -140px;
      width: 140px;
      background: #ffffff;
      mix-blend-mode: overlay;
      height: 140px;
    }

    .fillerText {
      position: absolute;
      font-family: Helvetica;
      font-size: 70px;
      right: -250px;
      top: 45%;
      color: #121212;
      text-align: center;
      text-shadow: -1px 0 #303030, 0 1px #303030, 1px 0 #303030, 0 -1px #303030;
      transform: rotate(90deg);
    }
  }

  @media only screen and (max-width: 1800px) {
    padding: 100px 110px;
    .textSection {
      padding: 100px;

      p {
        width: 400px;
      }
    }
    .imageSection {
      .fillerText {
        right: -200px;
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    flex-direction: column;

    .textSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0px;
      h3,
      p {
        text-align: center;
      }
      .orangeDash {
        margin: 0 auto;
        margin-bottom: 40px;
      }
      .authorSection {
        h3,
        p {
          text-align: left;
        }
      }
      .dotsForChange {
        display: flex;
        justify-content: center;
      }
    }
    .imageSection {
      display: flex;
      justify-content: center;

      img {
        width: 400px;
      }
      .imageNavigation {
        width: 400px;
      }

      .fillerText {
        right: 0px;
      }

      .transparentSquare {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1050px) {
    padding: 100px 0px;
    .textSection {
      padding: 50px;
      .titleSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          width: 300px;
          text-align: center;
          margin-right: 0px;
        }
      }
      .authorSection {
        padding-left: 100px;
      }
    }
    .imageSection {
      .fillerText {
        right: -100px;
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .imageSection {
      .fillerText {
        transform: rotate(0deg);
        top: 440px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media only screen and (max-width: 460px) {
    padding: 20px 20px 100px 20px;

    .textSection {
      .titleSection,
      .authorSection {
        margin: 0px 25px;
        padding: 0px;

        h4,
        p {
          width: fit-content;
          margin: 0px 0;

          width: 280px;
        }
        h4 {
          margin-top: 50px;
        }
      }
    }

    .imageSection {
      img {
        height: 450px;
        width: 100%;
      }

      .imageNavigation {
        width: 100%;
        height: 0px;
      }
      .fillerText {
        display: none;
      }
    }
  }
`;

export default StyledTestimonials;
