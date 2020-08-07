import StyledBox2 from "./style";
import H3 from "../../ui/H3";
import H4 from "../../ui/H4";
import P from "../../ui/P";
import SVGInline from "react-svg-inline";

const Box2 = props => (
  <>
    <StyledBox2>
      <div className="number">{props.boxNumber}</div>
      <SVGInline svg={props.svg} />
      <H4>{props.boxTitle}</H4>
      <P>{props.boxText}</P>
    </StyledBox2>
  </>
);

export default Box2;
