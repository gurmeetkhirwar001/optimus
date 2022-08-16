import { FunctionComponent } from "react";
import styles from "./css/FAQ5.module.css";

type FAQ5Type = {
  onClose?: () => void;
};

export const FAQ5: FunctionComponent<FAQ5Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ5Div}>
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
        <div className={styles.sIAssistantIsASoftwareApp}>
          SI Assistant is a software application that can be installed on your
          PC, Mobile or Smart TV and you can use it with feasibility without any
          distortions.
        </div>
      </div>
    </div>
  );
};
