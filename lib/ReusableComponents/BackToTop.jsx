import { useState, useEffect } from "react";
import { backToTopArrow } from "../Assets/index";
const BackToTop = () => {
  const [state, setState] = useState({
    isDisplayBackToTop: false,
  });
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setState((prev) => {
      return {
        ...prev,
        isDisplayBackToTop: window.scrollY > 400 ? true : false,
      };
    });
  };
  const backToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    setState((prev) => {
      return {
        ...prev,
        isDisplayBackToTop: false,
      };
    });
  };
  return (
    <section
      className={`fixed bottom-5 right-5 flex items-center justify-end rounded-full z-[100] `}
    >
      <img
        src={backToTopArrow}
        alt=""
        className={`back-to-top-arrow cursor-pointer bg-white p-2.5 h-10 w-10 rounded-full ${
          window.scrollY > 400 ? "flex" : "hidden"
        }`}
        onClick={() => {
          backToTop();
        }}
      />
    </section>
  );
};

export default BackToTop;
