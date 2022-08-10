import { FunctionComponent } from "react";
import styles from "./css/FAQ3.module.css";

type FAQ3Type = {
  onClose?: () => void;
};

export const FAQ3: FunctionComponent<FAQ3Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ3Div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.featherminusIcon}
          alt=""
          src="featherminus1.svg"
        />
        <div className={styles.canOptimusCallThePoliceIf}>
          Can Optimus call the police if I am in danger.?
        </div>
        <div className={styles.yesDuringLifeAndDeathSit}>
          Yes, during life and death situations, one does not have the time to
          reach out to the phone and call for help. Optimus is perfect to take
          instructions like calling emergency services without anyone around
          knowing that it is actually sending an alarm or making a call.
        </div>
      </div>
    </div>
  );
};
