
import Navbar from "./Nabvar";
import Home from "../components/Home";
import ShopByOccasion from "../components/ShopByOccasion";
import FabricSection from "../components/FabricSection";
import ShopByTrend from "../components/ShopByTrend";
import TestimonialsSection from "../components/TestimonialsSection";
import DrapedByAtulya from "../components/DrapedByAtulya";
import Footer from "../components/Footer";
import AtulyaPopup from "./AtulyaPopup";
import AfterHome from "../components/AfterHome";
import SignatureCollection from "../components/SignatureCollection";
import WeavingStory from "../components/WeavingStory";
import { useAuth } from "../services/AuthContext";

function Dashboad() {
  const { user } = useAuth();

  return (
    <div>
      <AtulyaPopup />
      <Navbar />

      <div>
       
        {user && (
          <>
            <AfterHome />
            <SignatureCollection />
            <FabricSection />
            <WeavingStory />
            <ShopByTrend />
            <TestimonialsSection />
            <DrapedByAtulya />
            <Footer />
          </>
        )}

        {!user && (
          <>
            <Home />
            <ShopByOccasion />
            <FabricSection />
            <ShopByTrend />
            <TestimonialsSection />
            <DrapedByAtulya />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboad;
