import HandyFreeTools from "@/Pages/Tools/HandyFreeTools";

import Hero from "../../Components/landing/Hero";
import TemplateSelector from "../../Components/landing/TemplateSelector";
import ToolsHub from "../../Components/landing/ToolsHub";
import FrequentlyAskedQuestion from "../../Components/landing/FAQ";
import Pricing from "../../Components/landing/Pricing";
import Footer from "../../Components/shared/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <main className="">
          <Hero />
          <TemplateSelector />
          <ToolsHub />
          <HandyFreeTools />

          <FrequentlyAskedQuestion />

          <Pricing />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
