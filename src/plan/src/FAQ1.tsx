import { FunctionComponent } from "react";
import styles from "./css/FAQ1.module.css";

type FAQ1Type = {
  onClose?: () => void;
};

export const FAQ1: FunctionComponent<FAQ1Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ1Div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.featherminusIcon}
          alt=""
          src="featherminus3.svg"
        />
        <div className={styles.canOptimusMakeNotesIfIRe}>
          Can Optimus make notes if I read out?
        </div>
        <div className={styles.yesByMeansOfVoiceToText}>
          Yes, by means of voice-to-text conversion, SI Assistant can do that.
        </div>
      </div>
    </div>
  );
};
