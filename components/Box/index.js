import StyledBox from "./style";
import H3 from "../../ui/H3";
import SVGInline from "react-svg-inline";
import P from "../../ui/P";

const Box = props => (
  <>
    <StyledBox id="boxComponent">
      {props.svg ? <SVGInline svg={props.svg} /> : null}
      <H3>{props.boxTitle}</H3>
      <P>{props.boxText}</P>
      {props.btn ? <div className="button">{props.btn}</div> : null}
    </StyledBox>
  </>
);

export default Box;
