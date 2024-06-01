import { useState, useEffect, useCallback } from "react";
import "../../../public/styles/sidebar.css";
import classNames from "classnames";
import { Hamburger } from "../../assets/icons/Hamburger.icon";
import { Close } from "../../assets/icons/Close.icon";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="sidebarContainer">
      <button
        onClick={handleMenu}
        className="hamburger"
        aria-label="Sidebar Menu"
      >
        <Hamburger className="icon" />
      </button>

      <div className={classNames("sidebar", { open: isOpen })}>
        <button onClick={handleMenu} className="close" aria-label="Close Menu">
          <Close className="icon" />
        </button>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/about-us">About Us</a>
        <a href="/contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default Sidebar;
