import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #121212;
  padding: 50px 110px 100px 110px;
  position: relative;
  .footer {
    background: #0d0d0d;
    padding: 110px 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 5;
    position: relative;
    .logoSection {
      flex-basis: 40%;
      margin-right: 200px;
      p {
        margin-top: 40px;
        width: 300px;
      }
    }
    .menuSection {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-basis: 60%;
      .links {
        position: relative;

        .menuTitle {
          color: #fff;
          margin-bottom: 10px;
        }
        p {
          margin: 20px 0px;
          cursor: pointer;

          :hover {
            text-decoration: underline;
          }
        }

        .socialIcons {
          display: flex;
          flex-direction: row;
          align-items: center;

          p {
            margin: 10px 0px;
          }

          svg {
            cursor: pointer;
            margin-right: 10px;
          }
        }
        .address {
          position: absolute;
          bottom: -25px;
          max-width: fit-content;
        }
      }
    }
  }

  .feather {
    position: absolute;
    right: 0;
    bottom: 100px;
    z-index: 0;
  }

  @media only screen and (max-width: 1600px) {
    .footer {
      padding: 110px 150px;
      .logoSection {
        flex-basis: 50%;
        margin-right: 0px;
        p {
          margin-top: 40px;
          width: 300px;
        }
      }
      .menuSection {
        flex-basis: 50%;
      }
    }
  }

  @media only screen and (max-width: 1250px) {
    .footer {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .logoSection {
        flex-basis: 100%;
        text-align: center;
      }
      .menuSection {
        .links {
          margin: 50px;

          p {
            margin: 5px 0px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding: 100px 40px;
    .footer {
      .menuSection {
        .links {
          margin: 50px 25px;
        }
      }
    }
  }

  @media only screen and (max-width: 460px) {
    padding: 50px 0px;

    .footer {
      padding: 40px 0px;

      .logoSection {
        p {
          width: 280px;
        }
      }
      .menuSection {
        display: flex;
        justify-content: space-around;
        margin: 0px;
        padding: 0px;
        width: 100%;
        .links {
          margin: 50px 15px;
          .address {
            display: none;
          }
          .socialIcons {
            p {
              display: none;
            }
          }
        }
      }
    }
  }
`;

export default StyledFooter;
