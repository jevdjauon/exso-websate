import StyledAbout from "./style";
import Box from "../../components/Box";
import H2 from "../../ui/H2";
import P from "../../ui/P";

import { about1, about2, about3 } from "../../assets/icons";

const About = () => (
  <>
    <StyledAbout>
      <div className="textSection">
        <H2>Ko smo mi?</H2>
        <P>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint
        </P>
        <P>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint
        </P>
      </div>
      <div className="boxSection">
        <Box
          boxTitle="Delatnost Prva"
          boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          svg={about1}
        />
        <Box
          boxTitle="Delatnost Druga"
          boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          svg={about2}
        />
        <Box
          boxTitle="Delatnost Treca"
          boxText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          svg={about3}
        />
      </div>
    </StyledAbout>
  </>
);

export default About;
