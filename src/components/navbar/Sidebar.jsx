import { useState, useEffect, useCallback } from "react";
import "../../styles/sidebar.css";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";

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
      <button onClick={handleMenu} className="hamburger">
        <CiMenuBurger className="icon" />
      </button>

      <div className={classNames("sidebar", { open: isOpen })}>
        <button onClick={handleMenu} className="close" aria-label="Close Menu">
          <AiOutlineClose className="icon" />
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
