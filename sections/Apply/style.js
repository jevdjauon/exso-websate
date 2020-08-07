import styled from "styled-components";

const StyledApply = styled.section`
  padding: 0px 110px;
  background: #121212;

  .mainBoxSection {
    background: #181818;
    padding: 130px 250px;
    display: flex;
    flex-direction: row;

    .textSection {
      flex-basis: 40%;
      .orangeDash {
        transform: rotate(-90);
        width: 45px;
        height: 2px;
        background: #f15208;
        margin-bottom: 40px;
      }
      h3 {
        margin: 0px;
        font-weight: normal;
      }
      p {
        margin-top: 40px;
        width: 250px;
      }
      .coolBtn {
        position: relative;
        cursor: pointer;
        width: fit-content;

        .btn {
          display: flex;
          align-items: center;
          padding: 0px 40px;
          height: 60px;
          margin-top: 180px;
          background: #f15208;
          color: #fff;
          width: fit-content;
        }
        span {
          position: absolute;
          top: 0;
          right: -60px;
          width: 60px;
          height: 60px;
          background: #d94500;
          color: #fff;
          font-size: 38px;
          display: flex;
          justify-content: center;
        }
      }
    }

    .formSection {
      .headerMenu {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #272727;
        margin-bottom: 30px;

        p {
          margin: 0px;
          font-family: Helvetica;
          font-size: 20px;
          line-height: 23px;
          margin-right: 65px;
          cursor: pointer;
          color: #979797;
        }
        .active {
          border-bottom: 2px solid #535353;
          padding-bottom: 30px;
        }
      }

      input {
        color: #979797;
        height: 60px;
        border: 1px solid #272727;
        width: 100%;
        font-family: Helvetica;
        font-size: 14px;
        line-height: 24px;
        background: transparent;
        padding-left: 10px;
        margin-bottom: 20px;
        color: #979797;
        ::placeholder {
          color: #979797;
        }
        :focus {
          outline: none;
        }
      }

      textarea {
        border: 1px solid #272727;
        width: 100%;
        background: transparent;
        padding-left: 10px;
        padding-top: 20px;
        color: #979797;
        font-family: Helvetica;
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 20px;
        height: 110px;
        ::placeholder {
          color: #979797;
        }

        :focus {
          outline: none;
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 0px;
  }

  @media only screen and (max-width: 1350px) {
    .mainBoxSection {
      padding: 130px 120px;
    }
  }
  @media only screen and (max-width: 1150px) {
    .mainBoxSection {
      padding: 130px 50px;
    }
  }

  @media only screen and (max-width: 950px) {
    .mainBoxSection {
      display: flex;
      flex-direction: column;
      .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p,
        h3 {
          text-align: left;
        }
        .coolBtn {
          width: 200px;
          .btn {
            margin: 50px 0px 100px 0px;
          }
          span {
            top: 50px;
            right: 0px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 460px) {
    .mainBoxSection {
      .textSection {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`;

export default StyledApply;
