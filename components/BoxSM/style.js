import styled from "styled-components";

const StyledBoxSM = styled.div`
  width: fit-content;
  width: 33.3%;
  padding-top: 30px;
  &:hover {
    background: #f15208;
    color: white !important;
    p {
      color: rgba(255, 255, 255, 0.5);
    }
    svg {
      fill: white;
    }
    .boxText {
      color: rgba(255, 255, 255, 0.5);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    .socialMedia {
      p {
        color: rgba(255, 255, 255, 0.5);
      }
      svg {
        fill: #979797;
      }
    }
  }
  .boxText {
    border-bottom: 1px solid #313131;
    padding: 0px 30px;
    padding-bottom: 35px;
    margin-bottom: 0px;
    margin-right: 0px;
  }

  p {
    margin-top: 0 !important;
    padding: 0px 30px;
  }

  h4 {
    padding: 0px 30px;
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 25px;
    svg {
      fill: #979797;
    }
  }

  /* :hover {
    background: #0d0d0d;
    transition: all 0.1s;
    svg {
      path {
        fill: azure;
      }
    }
  } */
`;

export default StyledBoxSM;
