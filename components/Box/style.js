import styled from "styled-components";

const StyledBox = styled.div`
  position: relative;
  h3 {
    font-weight: normal;
    margin: 20px 0px;
  }
  p {
    color: rgba(255, 255, 255, 0.5);
    max-width: 300px;
    line-height: 24px;
    margin: 0px;
  }

  .button {
    margin-top: 110px;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 24px;
    text-decoration-line: underline;
    cursor: pointer;
    color: #ffffff;
  }

  svg {
    position: absolute;
    left: -20px;
    top: -70px;

    g {
      filter: none; /* this is better, no? */
    }
  }

  @media only screen and (max-width: 1150px) {
    margin: 0px auto 140px auto;
  }
`;

export default StyledBox;
