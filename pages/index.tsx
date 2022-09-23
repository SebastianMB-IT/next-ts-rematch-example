import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, Dispatch } from "./store";

const Home: NextPage = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<Dispatch>();

  return (
    <div className={`${styles.centered} ${styles.container}`}>
      <h2>{count}</h2>
      <div className={styles.column}>
        <button
          className={styles.button}
          onClick={() => dispatch.count.increment()}
        >
          +1
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch.count.increment(2)}
        >
          +2
        </button>
      </div>
      <div className={styles.column}>
        <button
          className={`${styles.button} ${styles.red}`}
          onClick={() => dispatch.count.increment(-1)}
        >
          -1
        </button>
        <button
          className={`${styles.button} ${styles.red}`}
          onClick={() => dispatch.count.increment(-2)}
        >
          -2
        </button>
      </div>
    </div>
  );
};

export default Home;
