import styles from './ingredient-item.module.scss';
import { FC } from 'react';
import {
  CurrencyIcon,
  Counter
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientItemProps } from './types';

// на вход тип ingredient
export const IngredientItem: FC<IngredientItemProps> = ({ingredient}) => {
    const { image, price, name, _id } = ingredient;

    return (
      <li
        className={styles.container}
		    key={_id}
      >
        <div
          className={styles.description}
        >
          <Counter count={1} />
          <img className={styles.img} src={image} alt={name} />
          <div className={`${styles.price} mt-2 mb-2`}>
            <p className='text text_type_digits-default mr-2'>{price}</p>
            <CurrencyIcon type='primary' />
          </div>
          <p className={`text text_type_main-default ${styles.text}`}>{name}</p>
        </div>
      </li>
    );
  };