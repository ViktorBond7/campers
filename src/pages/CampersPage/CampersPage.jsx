import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import css from "./CampersPage.module.css";
import Filters from "../../components/Filters/Filters";
import { incrementPage, selectPage } from "../../redux/campersSlice";
import LoadMore from "../../components/LoadMore/LoadMore";

const CamperPage = () => {
  const dispatch = useDispatch();

  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div>
      <div className={css.container}>
        <Filters />
        <CamperList handleLoadMore={handleLoadMore} />
      </div>
      <LoadMore className={css.button} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default CamperPage;
