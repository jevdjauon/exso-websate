import StyledClinics from "./style";
import Box from "../../components/Box";
// import client1 from "../../assets/images/clients/client1.png";
// import client2 from "../../assets/images/clients/client2.png";
// import client3 from "../../assets/images/clients/client3.png";
import SVGInline from "react-svg-inline";
import { client1, client2, client3 } from "../../assets/icons";

const Clinics = () => (
  <>
    <StyledClinics>
      <div className="container">
        <Box
          className="box"
          boxTitle={"Nasi Saradnici"}
          boxText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
          }
          btn={"button"}
        />
        <div className="tableLike">
          <div className="tableElement">
            <SVGInline svg={client1} />
          </div>
          <div className="tableElement">
            <SVGInline svg={client2} />
          </div>
          <div className="tableElement">
            <SVGInline svg={client3} />
          </div>
          <div className="tableElement">
            <SVGInline svg={client1} />
          </div>
          <div className="tableElement">
            <SVGInline svg={client2} />
          </div>
          <div className="tableElement">
            <SVGInline svg={client3} />
          </div>
        </div>
      </div>
    </StyledClinics>
  </>
);

export default Clinics;
