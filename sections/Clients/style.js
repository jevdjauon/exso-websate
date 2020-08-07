import styled from "styled-components";

const StyledClients = styled.section`
  position: relative;
  background: #f15208;
  z-index: 4;
  display: flex;
  background: #0d0d0d;
  .container {
    padding: 60px 100px;
    background: #f15208;
    margin-left: 360px;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .box {
      flex-basis: 40%;
    }
    .tableLike {
      flex-basis: 60%;
      display: flex;
      text-align: center;
      flex-wrap: wrap;
      .tableElement {
        border: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
        flex-basis: 33%;
        position: relative;

        svg {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;

          :hover {
            path {
              transition: all 0.2s;
              fill: #dfdfdfff;
              fill-opacity: 1 !important;
            }
          }
        }

        :nth-child(1) {
          border-top: none;
          border-left: none;
        }
        :nth-child(2) {
          border-top: none;
          border-left: none;
        }
        :nth-child(3) {
          border-top: none;
          border-left: none;
          border-right: none;
        }
        :nth-child(4) {
          border-top: none;
          border-bottom: none;
          border-left: none;
        }
        :nth-child(5) {
          border-top: none;
          border-bottom: none;
          border-left: none;
        }
        :nth-child(6) {
          border: none;
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
    .container {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 1150px) {
    #boxComponent {
      text-align: left;
      margin: 0;
      margin-bottom: 50px;
      h3 {
        text-align: left;
        width: unset;
      }
      p {
        text-align: left;
      }
      .button {
        text-align: left;
        margin-top: 20px;
      }
    }
    .container {
      margin: 0 30px;
      flex-direction: column;
      /* height: 600px; */
      .tableLike {
        /* display: flex; */
        /* justify-content: space-between; */
        /* align-items: center; */
        .tableElement {
          /* flex-basis: 35%; */
          /* margin-right: 20px; */
          span {
            display: block;
            flex: 1;
            height: 87px;
            width: 131px;
          }
        }
      }

      .button {
        margin-top: 50px;
      }
    }
  }

  @media only screen and (max-width: 850px) {
    .container {
      padding: 60px 40px;

      .tableLike {
        justify-content: center;
        .tableElement {
          flex-basis: 45%;
          border: none;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .container {
      .tableLike {
        .tableElement {
          flex-basis: 55%;
        }
      }
    }
  }
  /* 
  @media only screen and (max-width: 460px) {
    .container {
      padding-left: 30px;
      padding-right: 30px;
      .tableLike {
        display: flex;
        justify-content: center;
        align-items: center;
        .tableElement {
          flex-basis: 35%;
          margin-right: 20px;
          span {
            display: block;
            flex: 1;
            height: 87px;
            width: 131px;
          }
        }
      }
    }
  } */
`;

export default StyledClients;
