
import "./mobilemenubutton.css";

function MobileMenuButton({ onClick, isOpen }) {
  return (
    <button className="w-5 h-5 flex flex-col justify-around" onClick={onClick}>
      <span className={`bg-black dark:bg-white line ${isOpen ? "open" : ""} line`}  />
      <span className={`bg-black dark:bg-white line line ${isOpen ? "open" : ""} line` } />
      <span className={`bg-black dark:bg-white line line ${isOpen ? "open" : ""} line`} />
    </button>
  );
}

export default MobileMenuButton;
