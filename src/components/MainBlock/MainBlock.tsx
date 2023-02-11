import React from 'react';
import styles from "./MainBlock.module.scss";
import Image from "next/image";

const MainBlock = () => {
  return (
    <div className={styles.photo_block}>
      <div className={styles.photo_block__left}>
        <p>Приобретайте качество и удобство за самую приемлемую цену.</p>
      </div>
      <div className={styles.photo_block__center}>
        <Image width={360} height={440} src={"/img/main.jpeg"}/>
      </div>
      <div className={styles.photo_block__right}>
        <p>
          Свитшоты, толстовки, штаны, кроссовки, аксессуары.
          <br/>
          Честные цены. Быстрая доставка. Минимальные усилия.
        </p>
      </div>
    </div>
  );
};

export default MainBlock;