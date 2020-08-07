import styled from "styled-components";

const StyledBox2 = styled.div`
  min-width: 25.1%;
  position: relative;
  margin-top: 150px;
  .number {
    position: absolute;
    left: -70px;
    top: -70px;
    font-family: Helvetica;
    font-size: 50px;
    line-height: 168.6%;
    color: rgba(156, 156, 156, 0.15);
  }
  svg {
    position: absolute;
    left: 0px;
    top: -70px;

    g {
      filter: none; /* this is better, no? */
    }
  }
  h4 {
    padding-top: 50px;
    font-weight: normal;
  }
  p {
    margin: 0px;
    width: 250px;
  }
`;

export default StyledBox2;
