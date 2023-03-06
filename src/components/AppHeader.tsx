import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./appHeader.css";

export const AppHeader = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const onClick = () => navigate(`/${search}`);

  return (
    <div className="appHeader">
      <h2>STONX</h2>
      <div>
        <input
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
        />
        <button onClick={onClick} type="submit">
          LupenIcon
        </button>
      </div>
    </div>
  );
};
