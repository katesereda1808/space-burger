import styles from './ingredients-group.module.scss';
import { IngredientItem } from '../ingredient-item/ingredient-item';
import { FC } from 'react';
import { IngredientsGroupProps } from './types';

// группа ингредиентов, принимает название группы и отсортированные ингредиенты, относящиеся к этой группк
export const IngredientsGroup: FC<IngredientsGroupProps> = ({ groupName, ingredients }) => (
    <>
      <h3 className='text text_type_main-medium mt-10 mb-6'>
        {groupName}
      </h3>
      <ul className={styles.items}>
        {ingredients.map((ingredient) => (
          <IngredientItem ingredient={ingredient} key={ingredient._id} />
        ))}
      </ul>
    </>
  );