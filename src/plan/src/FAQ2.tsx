import { FunctionComponent } from "react";
import styles from "./css/FAQ2.module.css";

type FAQ2Type = {
  onClose?: () => void;
};

export const FAQ2: FunctionComponent<FAQ2Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ2Div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.featherminusIcon}
          alt=""
          src="featherminus3.svg"
        />
        <div className={styles.willOptimusSpeakToMeInFr}>
          Will Optimus speak to me in French?
        </div>
        <div className={styles.sIAssistantCanTakeInputsA}>
          SI Assistant can take inputs as well as respond in French and many
          other global languages.
        </div>
      </div>
    </div>
  );
};
