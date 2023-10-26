import { useEffect, useState } from "react";
import "./header.scss";
import LanguageDropdrown from "./LanguageDropdown/LanguageDropDown";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="home-icon-container">
        <Link to="/">
          <i className="home-icon">
            <FaHome size={"2rem"} />
          </i>
        </Link>
      </div>
      <LanguageDropdrown />
    </header>
  );
}

export default Header;
