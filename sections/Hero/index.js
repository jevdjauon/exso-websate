import H1 from "../../ui/H1";
import P from "../../ui/P";
import StyledHero from "./style";

const Hero = () => (
  <>
    <StyledHero>
      <div className="textSection">
        <H1 className="firstH1">EXSO Group</H1>

        <H1 className="secondH1">
          <span>&ndash;</span>Second line
        </H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </P>
      </div>

      <div className="planet" />
      <div className="shade" />
      <div className="applicationLabel">Apliciraj</div>
    </StyledHero>
  </>
);

export default Hero;
