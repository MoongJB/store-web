import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useTheme } from "@emotion/react";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

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
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#272727" : undefined,
      }}
    >
      <KeyboardArrowUpOutlinedIcon
        sx={{
          color: (theme) => theme.palette.primary.main,
          textDecoration: "bold",
        }}
      />
    </button>
  );
};

export default ScrollToTopButton;
