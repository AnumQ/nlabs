import { ReactNode } from "react";
import "./card.scss";

type CardProps = {
  closable?: boolean;
  onClose?: () => void;
  children: ReactNode;
};
const Card = (props: CardProps) => {
  const { closable, onClose, children } = props;

  return (
    // <div className={`card card${!isOpen ? "--closed" : ""}`}>
    <div className="card">
      {closable && (
        <img src="cross.svg" className="close" alt="Close" onClick={onClose} />
      )}
      {children}
    </div>
  );
};

export default Card;
