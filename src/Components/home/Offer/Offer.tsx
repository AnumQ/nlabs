import { useTranslation } from "react-i18next";
import Button from "../../shared/Button/Button";
import "./offer.scss";
import Card from "../../shared/Card/Card";

type OfferProps = {
  isVisible: boolean;
  onOfferClick: () => void;
};

function Offer(props: OfferProps) {
  const { isVisible, onOfferClick } = props;
  const { t } = useTranslation();

  const elClassname = "offer-container";
  return (
    <div
      className={`${
        !isVisible
          ? `${elClassname} ${elClassname}--closed`
          : `${elClassname} ${elClassname}--isopen`
      }`}
    >
      <Card>
        <div className="offer-content">
          <h2 className="offer-title">{t("title")}</h2>
          <p className="offer-description"> {t("description")}</p>
          <div>
            <Button title={t("ctaTitle")} onClick={onOfferClick}></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Offer;
