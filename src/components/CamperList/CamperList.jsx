import { useSelector } from "react-redux";
import { selectFilteredLocation } from "../../redux/campers/selectors";
import css from "./CamperList.module.css";
import CamperItem from "../CamperItem/CamperItem";
import { selectCampers, selectError } from "../../redux/campers/campersSlice";

const CamperList = () => {
  // const campers = useSelector(selectCampers);

  const filteredLocation = useSelector(selectFilteredLocation);
  const error = useSelector(selectError);

  return (
    <>
      {error && (
        <p>Oops, there was an error, please try reloading!!! {error}</p>
      )}
      <ul className={css.list}>
        {filteredLocation.map((camper) => (
          <CamperItem key={camper._id} camper={camper} />
        ))}
      </ul>
    </>
  );
};

export default CamperList;
