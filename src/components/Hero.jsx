const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* (Assuming background image handling is included here) */}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgb(19, 14, 16) 10%, rgb(52, 24, 27) 50%, rgb(19, 14, 16) 90%)",
          zIndex: 1, // Ensure the gradient is above the image
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl lg:text-7xl font-semibold">
          Transform Your Images <br /> into{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, rgb(248, 91, 61), rgb(215, 54, 125))",
              WebkitBackgroundClip: "text", // For Safari/Chrome
              backgroundClip: "text",
              color: "transparent", // Makes the text see-through, revealing the gradient
            }}
          >
            Stunning Visuals
          </span>
        </h1>
        <p className="max-w-2xl text-sm lg:text-lg text-gray-300 mt-8">
          Picyard is more than just a screenshot editor. It's your all-in-one
          design tool for creating eye-catching images, mockups, and social
          media content in minutes.
        </p>
        <button
          className="mt-6 rounded-full px-6 py-3 text-white"
          style={{
            background:
              "linear-gradient(358.3deg, rgb(201,38,152) 12.9%, rgb(250,93,58) 130.3%)",
            zIndex: 1, // Ensure the gradient is above the image
          }}
        >
          Start creating for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
