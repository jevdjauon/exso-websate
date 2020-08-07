import StyledMap from "./style";
import Box from "../../components/Box";
import map from "../../assets/images/map-dummy.png";

const Map = () => (
  <>
    <StyledMap>
      <Box
        boxTitle={"Mapa Partnera"}
        boxText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        }
        btn={"Full partner list"}
      />
      {/* Here will go Map component */}
      <div className="map">
        <img src={map} alt="map-static" />
      </div>
    </StyledMap>
  </>
);

export default Map;
