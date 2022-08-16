import { FunctionComponent } from "react";
import styles from "./css/FAQ31.module.css";

type FAQ31Type = {
  onClose?: () => void;
};

export const FAQ31: FunctionComponent<FAQ31Type> = ({ onClose }) => {
  return (
    <div className={styles.fAQ3Div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <img
          className={styles.featherminusIcon}
          alt=""
          src="featherminus3.svg"
        />
        <div
          className={styles.whyDoINeedOptimusWhenIH}
        >{`Why do I need  Optimus when I have Siri&Alexa ?`}</div>
        <div className={styles.sIAssistantIsAUniqueSmart}>
          SI Assistant is a unique Smart Assistant that comes with Computer
          Vision driven Natural Language Processing. No other Smart Assistant in
          the current market has the combination of these applications together,
          so you may prefer to opt for our Super Intelligent Assistant.
        </div>
      </div>
    </div>
  );
};
