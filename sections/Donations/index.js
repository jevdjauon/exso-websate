import StyledDonations from "./style";
import donations1 from "../../assets/images/donations1.png";
import H3 from "../../ui/H3";
import P from "../../ui/P";
import Box from "../../components/Box";

const Donations = () => (
  <>
    <StyledDonations>
      <div className="imageSection">
        {/* <img src={donations1} alt="donations-img" /> */}
        <div className="transparentSquare" />
        <div className="fillerText">Filler Text </div>
      </div>
      <div className="textSection">
        <div className="titleSection">
          <H3>Donacije</H3>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </P>
        </div>
        <div className="boxSection">
          <Box
            boxTitle={"Prva Donacija"}
            boxText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
            btn={"button"}
          />
          <Box
            boxTitle={"Druga Donacija"}
            boxText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            }
            btn={"button"}
          />
        </div>
      </div>
    </StyledDonations>
  </>
);

export default Donations;
