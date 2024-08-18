import { useSelector } from "react-redux";
import css from "./LoadMore.module.css";
import { selectHasMore, selectLoading } from "../../redux/campersSlice";
const LoadMore = ({ handleLoadMore }) => {
  const loading = useSelector(selectLoading);

  const hasMore = useSelector(selectHasMore);
  return (
    <div className={css.container}>
      {loading && <p>Loading...</p>}
      {hasMore && !loading && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMore;
