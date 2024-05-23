import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <KeyboardArrowUpOutlinedIcon
        sx={{ color: (theme) => theme.palette.error.main }}
      />
    </button>
  );
};

export default ScrollToTopButton;
