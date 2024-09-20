import Footer from "../../Components/Footer";
import HandyFreeTools from "@/Pages/Tools/HandyFreeTools";

import Hero from "../../Components/landing/Hero";
import TemplateSelector from "../../Components/landing/TemplateSelector";
import ToolsHub from "../../Components/landing/ToolsHub";

const Home = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <main className="">
          <Hero />
          <TemplateSelector />
          <ToolsHub />
          <HandyFreeTools />

          <Footer></Footer>
        </main>
      </div>
    </>
  );
};

export default Home;
