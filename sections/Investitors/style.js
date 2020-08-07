import styled from "styled-components";

const StyledInvestitors = styled.section`
  padding: 100px 360px 150px 360px;
  background: #121212;

  .titleSection {
    margin-bottom: 100px;

    h3 {
      font-weight: normal;
    }
    p {
      width: 250px;
    }
  }

  .imagesSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
      filter: grayscale(100%);
      :hover {
        filter: none;
        transition: all 0.3s;
      }
    }
    .verticalDash {
      width: 70px;
      border-bottom: 1px solid #272727;
      transform: rotate(-90deg);
    }
  }

  @media only screen and (max-width: 1700px) {
    padding: 100px 160px 100px 160px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 100px 140px 100px 140px;

    .imagesSection {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img {
        margin: 15px 0px;
      }
      .verticalDash {
        border: none;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 80px 100px 80px;

    .titleSection {
      margin-bottom: 80px;
      h3,
      p {
        text-align: center;
        margin: 30px auto;
      }
    }

    .imagesSection {
      display: flex;
      flex-direction: column;

      img {
        margin: 15px 0px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 20px 30px 50px 30px;
    .titleSection {
      margin-bottom: 80px;
      h3,
      p {
        text-align: left;
        margin: 30px 0px;
        width: 100%;
      }
    }
  }
`;

export default StyledInvestitors;
