import React from "react";
import styles from "../../assets/sass/style.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function GoBack() {
  return (
    <a className={styles.goback} href="/">
      <AiOutlineArrowLeft size={35} />
      <span className={`${styles.tooltip} ${styles.text}`}>Back</span>
    </a>
  );
}