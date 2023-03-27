import { useState, useRef, useEffect } from "react";

// *style
import "./Dropdown.css";

const Dropdown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menus = ["Shop Details", "Shoping Cart", "Check Out"];

  let menuRef = useRef();

  //click outside the modal container to close
  useEffect(() => {
    let handleMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleMenu);

    return () => {
      document.removeEventListener("mousedown", handleMenu);
    };
  }, [openMenu, setOpenMenu]);

  return (
    <div className="drop-down" ref={menuRef}>
      <div className="drop-down-text" onClick={() => setOpenMenu(!openMenu)}>
        <p>PAGES</p>
      </div>

      <div>
        {openMenu && (
          <ul className="drop-down-link">
            {menus.map((menu) => (
              <li onClick={() => setOpenMenu(false)} key={menu}>
                {menu}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
