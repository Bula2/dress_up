import React, {useState} from 'react';
import styles from "./game.module.scss";
import {Button, Image} from "antd";
import Link from "next/link";
import cx from "classnames";
import {useDispatch} from "react-redux";
import {addItemToBasket, delItemFromBasket} from "../../../redux/basket-reducer";

interface IGame {
  id: number,
  src: string,
  title: string,
  platform: string,
  price: number,
  isBasket: boolean
  delItem?: (id: number) => void
}

const Game: React.FC<IGame> = (props) => {

  const [alert, useAlert] = useState(true)
  const dispatch = useDispatch()

  const showAlert = () => {
    dispatch(addItemToBasket(props.id, props.src, props.title, props.platform, props.price))
    useAlert(false)
    setTimeout(() => useAlert(true), 2000)
  }

  return (
    <div className={styles.item} key={props.id}>
      <div className={styles.item_img}>
        <Image
          className={styles.item_img}
          width={250}
          height={280}
          src={props.src}
        />
      </div>
      <div className={styles.item_info}>
        <div className={styles.item_title}>{props.title}</div>
        <div className={styles.item_platform}>{props.platform}</div>
        <div className={styles.item_price}>{props.price} ₽</div>
        {props.isBasket ?
          <div className={styles.item_button}
               onClick={() => props.delItem!(props.id)}>
            Удалить из корзины
          </div> :
          <div className={styles.item_button}
               onClick={() => showAlert()}>
            Добавить в корзину
          </div>
        }
      </div>
      <div className={cx(alert && styles.hide, styles.alert)}>Игра добавлена в корзину</div>
    </div>
  );
};

export default Game;