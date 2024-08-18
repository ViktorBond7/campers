import IconSvg from "../IconSvg/IconSvg";
import css from "./Filters.module.css";
const Filters = () => {
  return (
    <div className={css.container}>
      <IconSvg
        width="20"
        height="20"
        iconName="icon-beds"
        className={css.iconns}
      />
    </div>
  );
};

export default Filters;
