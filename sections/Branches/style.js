import styled from "styled-components";

const StyledBranches = styled.section`
  background: #121212;
  padding: 50px 360px 100px 360px;
  .titleSection {
    display: flex;
    flex-direction: row;

    h3 {
      margin: 0px;
      width: 250px;
      font-weight: normal;
    }
    p {
      margin-left: 200px;
      width: 300px;
    }
  }

  .boxSection {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  @media only screen and (max-width: 1650px) {
    padding: 100px 160px;
  }
  @media only screen and (max-width: 1200px) {
    .titleSection {
      p {
        margin-left: 0px;
      }
    }
    .boxSection {
      div {
        flex-basis: 34%;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 100px 100px;
    .titleSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h3,
      p {
        text-align: center;
      }
    }

    .boxSection {
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        svg {
          left: 0;
          right: 0;
          margin-right: auto;
          margin-left: auto;
        }
        .number {
          right: 100px;
        }

        h4,
        p {
          text-align: center;
        }
      }
    }
  }

  @media only screen and (max-width: 460px) {
    padding: 100px 40px;
  }
`;

export default StyledBranches;
