import IconSvg from "../IconSvg/IconSvg";
import css from "./Features.module.css";
const Features = ({ camper }) => {
  return (
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
  );
};

export default Features;
