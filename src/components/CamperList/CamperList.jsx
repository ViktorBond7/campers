import { useSelector } from "react-redux";

import css from "./CamperList.module.css";
import { selectError, selectCampers } from "../../redux/campersSlice";
import CamperItem from "../CamperItem/CamperItem";

const CamperList = () => {
  const visibleCampers = useSelector(selectCampers);
  const error = useSelector(selectError);

  return (
    <>
      {error && (
        <p>Oops, there was an error, please try reloading!!! {error}</p>
      )}
      <ul className={css.list}>
        {visibleCampers.map((camper) => (
          <CamperItem key={camper._id} camper={camper} />
        ))}
      </ul>
    </>
  );
};

export default CamperList;
