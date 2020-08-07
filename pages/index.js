import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Header from "../components/Header";

import Hero from "../sections/Hero";
import Clients from "../sections/Clients";
import About from "../sections/About";
import Map from "../sections/Map";
import Donations from "../sections/Donations";
import Investitors from "../sections/Investitors";
import Apply from "../sections/Apply";
import Testimonials from "../sections/Testimonials";
import Branches from "../sections/Branches";
import SocialMedia from "../sections/SocialMedia";
import Footer from "../components/Footer";

const Index = () => (
  <>
    <GlobalStyles />
    <Header />
    <Hero />
    <Clients />
    <About />
    <Map />
    {/*<Donations />*/}
    {/*<Investitors />*/}
    <Apply />
    {/*<Testimonials />*/}
    <Branches />
    {/*<SocialMedia />*/}
    <Footer />
  </>
);

export default Index;
