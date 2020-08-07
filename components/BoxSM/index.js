import StyledBoxSM from "./style";
import H4 from "../../ui/H4";
import P from "../../ui/P";
import SVGInline from "react-svg-inline";
import { twitter } from "../../assets/icons";

const BoxSM = props => (
  <>
    <StyledBoxSM>
      <P>06-07-2019</P>
      <H4>Person From Social Media</H4>
      <P className="boxText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </P>
      <div className="socialMedia">
        <P>Twitter</P>
        <SVGInline svg={twitter} />
      </div>
    </StyledBoxSM>
  </>
);

export default BoxSM;
