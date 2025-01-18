import React from "react";
import "./mobilemenubutton.css";

const MobileMenuButton: React.FC<{ onClick: () => void; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <button className="w-5 h-5 flex flex-col justify-around" onClick={onClick}>
      <span className={`bg-black dark:bg-white line ${isOpen ? "open" : ""}`} />
      <span className={`bg-black dark:bg-white line ${isOpen ? "open" : ""}`} />
      <span className={`bg-black dark:bg-white line ${isOpen ? "open" : ""}`} />
    </button>
  );
};

export default MobileMenuButton;
