import StyledBranches from "./style";
import H3 from "../../ui/H3";
import P from "../../ui/P";
import Box2 from "../../components/Box2";
import {
  branch1,
  branch2,
  branch3,
  branch4,
  branch5,
  branch6
} from "../../assets/icons";

const Branches = () => (
  <>
    <StyledBranches>
      <div className="titleSection">
        <H3>Dalji ogranci poslovanja</H3>

        <P>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint{" "}
        </P>
      </div>
      <div className="boxSection">
        <Box2
          className="box2"
          boxNumber={"01"}
          svg={branch1}
          boxTitle={"Consulting"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <Box2
          className="box2"
          boxNumber={"02"}
          svg={branch2}
          boxTitle={"Human Resource Management"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <Box2
          className="box2"
          boxNumber={"03"}
          svg={branch3}
          boxTitle={"Engineering"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <Box2
          className="box2"
          boxNumber={"04"}
          svg={branch1}
          boxTitle={"Investment"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <Box2
          className="box2"
          boxNumber={"05"}
          svg={branch2}
          boxTitle={"Building Academy"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
        <Box2
          className="box2"
          boxNumber={"06"}
          svg={branch3}
          boxTitle={"Project Management"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
        />
      </div>
    </StyledBranches>
  </>
);

export default Branches;
