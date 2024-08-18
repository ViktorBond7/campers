import IconSvg from "../IconSvg/IconSvg";
import css from "./CamperItem.module.css";

const CamperItem = ({ camper }) => {
  const { name, details } = camper;

  return (
    <li className={css.item}>
      <div className={css.containerImg}>
        <img className={css.camperIcon} src={camper.gallery[0]} alt={name} />
      </div>
      <div>
        <div className={css.itemHeader}>
          <p>{name}</p>
          <p className={css.pagePrice}>
            €{camper.price}
            <IconSvg
              iconName="icon-favorite"
              width="24"
              height="24"
              className={css.iconns}
            />
          </p>
        </div>

        <div className={css.ratingLocation}>
          <p className={css.pageRating}>
            <IconSvg
              iconName="icon-asterisk"
              width="16"
              height="16"
              className={css.asterisk}
            />
            {camper.rating}({camper.reviews ? camper.reviews.length : 0}
            reviews)
          </p>
          <p className={css.pageLocation}>
            <IconSvg
              iconName="icon-location"
              width="16"
              height="16"
              className={css.iconns}
            />
            {camper.location}
          </p>
        </div>

        <p className={css.page}>{camper.description}</p>
        <ul className={css.optionalList}>
          <li className={css.camperOpcion}>
            <IconSvg
              iconName="icon-adults"
              width="20"
              height="20"
              className={css.iconns1}
            />
            {camper.adults} adults
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-automatic"
              width="20"
              height="20"
              className={css.iconns}
            />
            {camper.transmission}
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-petrol"
              width="20"
              height="20"
              className={css.iconns1}
            />
            {camper.engine}
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-kitchen"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            kitchen
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-beds"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            {camper.details.beds} beds
          </li>
          <li className={css.camperOpcion}>
            {" "}
            <IconSvg
              iconName="icon-conditioner"
              width="20"
              height="20"
              className={css.iconns}
            />{" "}
            {camper.details.airConditioner ? "AC" : "-"}
          </li>
        </ul>
        <button className={css.button}>
          Show more{" "}
          <svg width="48" height="48">
            <use href="../../img/symbol-icons.svg#chevron-right"></use>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default CamperItem;
