import React from "react";
import "./button.scss";
function Button({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div>
      <button className="ctp-btn" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
