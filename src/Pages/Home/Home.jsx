import HandyFreeTools from "@/Pages/Tools/HandyFreeTools";

import Hero from "../../Components/landing/Hero";
import TemplateSelector from "../../Components/landing/TemplateSelector";
import ToolsHub from "../../Components/landing/ToolsHub";
import Footer from "../../Components/shared/footer/Footer";
import FrequentlyAskedQuestion from "../../Components/FrequentlyAskedQuestions/FAQ";
import Pricing from "../../Components/Pricing/Pricing";
import FooterSection from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <main className="">
          <Hero />
          <TemplateSelector />
          <ToolsHub />
          <HandyFreeTools />
          <Footer />

          <FrequentlyAskedQuestion />

          <Pricing />

          <FooterSection />

          <Footer></Footer>
        </main>
      </div>
    </>
  );
};

export default Home;
