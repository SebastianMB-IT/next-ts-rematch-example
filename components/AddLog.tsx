import { useRef } from "react";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../store";
import { LogsList } from "../components/LogsList"

export const AddLog = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const logs = useSelector((state: RootState) => state.log);
  const dispatch = useDispatch<Dispatch>()

  const doneLogin = () => {
    const uname = inputName.current?.value;
    if (uname) {
      dispatch.log.addToLog({
        username: uname,
        date: new Date().toLocaleTimeString()
      })
    }
  };

  return (
    <>
      {" "}
      <div>
        <input
          ref={inputName}
          name="username"
          placeholder="Enter a username"
          type="text"
        />
        <button
          className={`${styles.button} ${styles.red}`}
          onClick={doneLogin}
        >
          Login
        </button>
      </div>
      <LogsList logs={logs} />
    </>
  );
};
