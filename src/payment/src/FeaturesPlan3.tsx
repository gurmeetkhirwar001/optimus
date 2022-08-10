import { FunctionComponent } from "react";
import styles from "./css/FeaturesPlan3.module.css";

type FeaturesPlan3Type = {
  onClose?: () => void;
};

export const FeaturesPlan3: FunctionComponent<FeaturesPlan3Type> = ({
  onClose,
}) => {
  return (
    <div className={styles.featuresPlan3}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.languageDiv}>Language</div>
          <div className={styles.accessToCommunicateInYour}>
            Access to communicate in your own language that is recognized
            globally.
          </div>
          <img className={styles.boxIcon} alt="" src="box.svg" />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.languageDiv}>Voice assistance</div>
          <div className={styles.alongWithVoiceAssistanceAn}>
            Along with voice assistance and object identification, in-house
            monitoring and intruder alarm features are available.
          </div>
          <img className={styles.boxIcon1} alt="" src="box1.svg" />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.languageDiv}>SI Eyes</div>
          <div className={styles.accessToCommunicateInYour}>
            <p className={styles.enhancedVisionAvailable}>
              {" "}
              Enhanced vision available for SI Eyes.
            </p>
            <p className={styles.enhancedVisionAvailable}></p>
          </div>
          <img className={styles.boxIcon1} alt="" src="box2.svg" />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.languageDiv}>Basic Features</div>
          <div className={styles.accessToCommunicateInYour}>
            Along with the basic and moderate features, advanced features of
            helping you solve complex mathematical equations are available.
          </div>
          <img className={styles.boxIcon3} alt="" src="box3.svg" />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.languageDiv}>Avatar</div>
          <div className={styles.accessToCommunicateInYour}>
            Choose from the 25 Avatars and voices, moreover make adjustments as
            you like.
          </div>
          <img className={styles.boxIcon} alt="" src="box4.svg" />
        </div>
      </div>
    </div>
  );
};
