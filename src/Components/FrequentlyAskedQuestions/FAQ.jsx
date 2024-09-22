import React, { useState } from "react";

const FrequentlyAskedQuestion = () => {
  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    // Toggle the FAQ: if already open, close it; if closed, open it.
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQs array
  const faqs = [
    {
      question: "What is Picyard?",
      answer:
        "pixlab is a free online tool that allows you to create beautiful images for social media, blog posts, presentations, and more. You can use pixlab to create Beautiful Images, Testimonials, Code Snippets, QR Codes and then download them as PNG or JPEG files.",
    },
    {
      question: "Is Picyard free?",
      answer: "Yes pixlab is free to use, but also comes with a premium plan",
    },
    {
      question: "Does Picyard store my images?",
      answer:
        "pixlab produces your beautiful looking images in your browser and no information or data is uploaded on the internet.",
    },
    {
      question: "Do i need to create an account to use Picyard?",
      answer:
        "No, you do not need to create an account to use the tools on pixlab. However, creating an account can provide a more personalized experience.",
    },
    {
      question: "Can i use Picyard for free commercial purpose?",
      answer:
        "Yes, you can use the tools provided by pixlab for commercial purposes.",
    },
    {
      question: "How many images can i create with Picyard?",
      answer:
        "You can create an unlimited number of images with pixlab. There is no limit on the number of images you can create or the number of times you can use the tool.",
    },
  ];

  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <>
              <div
                key={index}
                className="relative my-3 w-full rounded-md px-12 py-8"
              >
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-black dark:text-white cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-500 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              <div className="mr-4 ml-8 border border-gray-200 dark:border-gray-400"></div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestion;
