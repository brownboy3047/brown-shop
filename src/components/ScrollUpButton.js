import { useState, useEffect } from "react";

//* style
import "./ScrollUpButton.css";
const ScrollUpButton = () => {
  const [scrollUp, setScrollUp] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-up" onClick={scrollToTop}>
      {scrollUp && <button>^</button>}
    </div>
  );
};

export default ScrollUpButton;
