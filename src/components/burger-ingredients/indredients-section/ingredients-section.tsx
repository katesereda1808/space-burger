// общий компонент со всем функционалов секции ингредиентов

import { INGREDIENTS } from '@utils/data';
import { Ingredient } from '@utils/types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { IngredientsGroup } from '../ingredients-group/ingredients-group';
import styles from './ingredients-section.module.scss';

// секция ингредиентов, основной компонент ингредиентов
export const IngredientsSection = () => {
	const sortIngredients = (ingredients: Ingredient[]) => ({
		Булки: ingredients.filter((ingredient) => ingredient.type === 'bun'),
		Соусы: ingredients.filter((ingredient) => ingredient.type === 'sauce'),
		Начинки: ingredients.filter((ingredient) => ingredient.type === 'main'),
	});
	const onTabClick = () => {
		console.log('click');
	};
	const sortedIngredients = useMemo(() => sortIngredients(INGREDIENTS), []);

	return (
		<section className={styles.container}>
			<h2 className='text text_type_main-large'>Соберите бургер</h2>
			<nav>
				<ul className={styles.menu}>
					<Tab value='bun' active={true} onClick={onTabClick}>
						Булки
					</Tab>
					<Tab value='main' active={false} onClick={onTabClick}>
						Начинки
					</Tab>
					<Tab value='sauce' active={false} onClick={onTabClick}>
						Соусы
					</Tab>
				</ul>
			</nav>
			<div className={styles.content}>
				{Object.entries(sortedIngredients).map(([groupName, ingredients]) => (
					<IngredientsGroup
						key={groupName}
						groupName={groupName}
						ingredients={ingredients}
					/>
				))}
			</div>
		</section>
	);
};
