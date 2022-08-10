import { FunctionComponent } from "react";
import styles from "./css/MainBanner2.module.css";

export const MainBanner2: FunctionComponent = () => {
  return (
    <div className={styles.mainBanner2Div}>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="group-6341.svg" />
      <img className={styles.tvCopy11} alt="" src="tv-copy1-1@2x.png" />
      <img className={styles.tvCopy12} alt="" src="tv-copy1-2@2x.png" />
      <img className={styles.tensor21} alt="" src="tensor-2-1@2x.png" />
      <img
        className={styles.tensor21Copy11}
        alt=""
        src="tensor-21-copy1-1@2x.png"
      />
      <img
        className={styles.tensorBanner2FinalCopy1}
        alt=""
        src="tensor-banner-2-final-copy-1@2x.png"
      />
    </div>
  );
};
