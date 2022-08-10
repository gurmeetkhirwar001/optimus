import { FunctionComponent } from "react";
import styles from "./css/FAQ4.module.css";

type FAQ4Type = {
  onClose?: () => void;
};

export const FAQ4: FunctionComponent<FAQ4Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ4Div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.featherminusIcon}
          alt=""
          src="featherminus3.svg"
        />
        <div className={styles.shouldOptimusBeFixedWithW}>
          Should Optimus be fixed with wired network?
        </div>
        <div
          className={styles.sIAssistantIsASoftwareApp}
        >{` SI Assistant is a software application that can be installed on your PC, Mobile or Smart TV `}</div>
      </div>
    </div>
  );
};
