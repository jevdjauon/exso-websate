import StyledInvestitors from "./style";
import daVinci from "../../assets/images/daVinciLogo.png";
import hucon from "../../assets/images/hucon.png";
import aptiv from "../../assets/images/aptiv.png";
import magna from "../../assets/images/logo_Magna.png";
import mercedes from "../../assets/images/mercedes.png";

import H3 from "../../ui/H3";
import P from "../../ui/P";

const Investitors = () => (
  <>
    <StyledInvestitors>
      <div className="titleSection">
        <H3>O nama i našim saradnicima</H3>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </P>
      </div>
      <div className="imagesSection">
        <img src={daVinci} alt="investitors-logo" />
        <div className="verticalDash" />
        <img src={hucon} alt="investitors-logo" />
        <div className="verticalDash" />
        <img src={aptiv} alt="investitors-logo" />
        <div className="verticalDash" />
        <img src={magna} alt="investitors-logo" />
        <div className="verticalDash" />
        <img src={mercedes} alt="investitors-logo" />
      </div>
    </StyledInvestitors>
  </>
);
export default Investitors;
