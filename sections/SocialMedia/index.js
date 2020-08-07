import StyledSocialMedia from "./style";
import BoxSM from "../../components/BoxSM";
import H3 from "../../ui/H3";

const SocialMedia = () => (
  <>
    <StyledSocialMedia>
      <div className="titleSection">
        <H3>EXSO Group on</H3>
        <H3>social media</H3>
      </div>
      <div className="boxSection">
        <BoxSM />
        <BoxSM />
        <BoxSM />
        <BoxSM />
        <BoxSM />
        <BoxSM />
      </div>
    </StyledSocialMedia>
  </>
);

export default SocialMedia;
