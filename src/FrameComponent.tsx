import { FunctionComponent } from "react";
import styles from "./css/FrameComponent.module.css";

export const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1}>
        <div className={styles.groupDiv}>
          <img className={styles.vectorIcon} alt="" src="vector.svg" />
          <div className={styles.mobileDiv}>Mobile</div>
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.laptopDiv}>Laptop</div>
          </div>
          <img className={styles.frameIcon} alt="" src="frame-38.svg" />
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.groupDiv3}>
          <div className={styles.groupDiv4}>
            <div className={styles.laptopDiv}>Watch</div>
          </div>
          <img className={styles.watch1Icon} alt="" src="watch-1.svg" />
        </div>
      </div>
    </div>
  );
};
