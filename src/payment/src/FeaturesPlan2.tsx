import { FunctionComponent } from "react";
import styles from "./css/FeaturesPlan2.module.css";

type FeaturesPlan2Type = {
  onClose?: () => void;
};

export const FeaturesPlan2: FunctionComponent<FeaturesPlan2Type> = ({
  onClose,
}) => {
  return (
    <div className={styles.featuresPlan2}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv} />
          <div className={styles.languageDiv}>Language</div>
          <div className={styles.accessToCommunicateInEngli}>
            Access to communicate in English as well as any globally recognized
            language of your choice.
          </div>
          <img className={styles.boxIcon} alt="" src="box5.svg" />
        </div>
        <div className={styles.groupDiv2}>
          <div className={styles.languageDiv}>Voice assistance</div>
          <div className={styles.accessToCommunicateInEngli}>
            {" "}
            Along with voice assistance, object identification feature is
            available.
          </div>
          <img className={styles.boxIcon1} alt="" src="box6.svg" />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.languageDiv}>SI Eyes</div>
          <div className={styles.accessToCommunicateInEngli}>
            Premium vision available for SI Eyes.
          </div>
          <img className={styles.boxIcon1} alt="" src="box7.svg" />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.languageDiv}>Basic Features</div>
          <div className={styles.accessToCommunicateInEngli}>
            Along with basic features, moderate features of online order
            placement and Internet surfing are available.
          </div>
          <img className={styles.boxIcon3} alt="" src="box8.svg" />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.languageDiv}>Avatar</div>
          <div className={styles.accessToCommunicateInEngli}>
            Choose from the 11 Avatars and Voices.
          </div>
          <img className={styles.boxIcon} alt="" src="box9.svg" />
        </div>
      </div>
    </div>
  );
};
