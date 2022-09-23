import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { Dispatch } from "./store";
import { Total } from '../components/Total'

const Home: NextPage = () => {
  const dispatch = useDispatch<Dispatch>();

  return (
    <div className={`${styles.centered} ${styles.container}`}>
      <Total />
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
