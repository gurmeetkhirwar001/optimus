import { FunctionComponent } from "react";
import styles from "./css/MainBanner3.module.css";

export const MainBanner3: FunctionComponent = () => {
  return (
    <div className={styles.mainBanner3}>
      <div className={styles.rectangleDiv} />
      <img className={styles.groupIcon} alt="" src="group-634.svg" />
      <img className={styles.tvCopy11} alt="" src="tv-copy1-1@2x.png" />
      <img className={styles.tvCopy12} alt="" src="tv-copy1-2@2x.png" />
      <img className={styles.tensor21} alt="" src="tensor-2-1@2x.png" />
      <img className={styles.banner31} alt="" src="banner-3-1@2x.png" />
      <img className={styles.banner32} alt="" src="banner-3-2@2x.png" />
      <img className={styles.banner33} alt="" src="banner-3-3@2x.png" />
    </div>
  );
};
