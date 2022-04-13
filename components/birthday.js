import React from "react";
import Lottie from "react-lottie";
import animationData from "./24130-birthday-icon.json";

const BirthdayAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={300} />;
}

export default BirthdayAnimation;