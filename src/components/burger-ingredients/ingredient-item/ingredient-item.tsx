import { INGREDIENTS } from '@utils/data';

export const IngredientItem = ({}) => {
	return (
		<>
			{INGREDIENTS.map((ingredient, i) => (
				<div key={i}>
					{ingredient.name}
					{ingredient.price}
				</div>
			))}
		</>
	);
};
