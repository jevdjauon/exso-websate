import PropTypes from 'prop-types'
import StyledFooter from "./style";
import SVGInline from "react-svg-inline";
import P from "../../ui/P";
import {
  logoFooter,
  footerFb,
  footerIns,
  footerTw,
  footerLi
} from "../../assets/icons";
import feather from "../../assets/images/feather.png";
import { i18n, Link, withTranslation } from '../../i18n'


const Footer = ({ t }) => {
  return (
      <>
        <StyledFooter>
          <div className="footer">
            <div className="logoSection">
              <SVGInline svg={logoFooter}/>
              <P>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga.
              </P>
            </div>

          </div>
          <div className="feather">
            <img src={feather} alt="feather-img"/>
          </div>
        </StyledFooter>
      </>
  )
};

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Footer)
