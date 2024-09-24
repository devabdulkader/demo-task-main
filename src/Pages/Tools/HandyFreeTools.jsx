import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const HandyFreeTools = ({ toolsTitle }) => {
  const tools = [
    {
      title: "Icon Images",
      description: "Easily create app icons",
      link: "/more/icon-image",
    },
    {
      title: "Image Converter",
      description: "PNG/ WEBP/ JPG/ SVG",
      link: "/more/image-converter",
    },
    {
      title: "Blur / Redact Image",
      description: "Easily redact information",
      link: "/more/blur-image",
    },
    {
      title: "Crop Image",
      description: "Easily crop images",
      link: "/more/crop-image",
    },
    {
      title: "GIF Generator",
      description: "GIF from images",
      link: "/more/gif",
    },
    {
      title: "Google Suggestions",
      description: "Fake google suggestions",
      link: "/more/google-suggestions",
    },
    {
      title: "Color picker",
      description: "Online color picker",
      link: "/more/color-picker",
    },
    {
      title: "Image Color picker",
      description: "Online Image color picker",
      link: "/more/image-color-picker",
    },
    {
      title: "Resize image",
      description: "To any pixel",
      link: "/more/resize-image",
    },
  ];
  const location = useLocation();
  const pathHandyTools = location.pathname;
  // Filter out the tool that matches the current path
  const filteredTools = tools.filter((tool) => tool.link !== pathHandyTools);
  return (
    <>
      <div
        className={` mx-5 ${
          pathHandyTools === "/more" && "flex-1 overflow-y-auto"
        }`}
      >
        <main className={`${pathHandyTools === "/more" && "px-2 py-4 md:p-8"}`}>
          <div className="mx-auto mb-12">
            <h2 className="text-xl md:text-3xl text-center md:text-left font-bold mb-4 md:mb-8 dark:text-gray-100 text-[#171717]">
              {toolsTitle ? toolsTitle : "Handy Free Tools"}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={tool.link}
                    className="block h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HandyFreeTools;
