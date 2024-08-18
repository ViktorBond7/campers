import { useDispatch } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import css from "./CampersPage.module.css";
import Filters from "../../components/Filters/Filters";

const CamperPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <Filters />
      <CamperList />
    </div>
  );
};

export default CamperPage;
