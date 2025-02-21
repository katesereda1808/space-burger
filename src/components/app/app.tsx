import { AppHeader } from '../app-header/app-header';
import { INGREDIENTS } from '@utils/data';

export const App = () => {
	return (
		<div className='page'>
			<AppHeader />
			{INGREDIENTS.map((ingredient, i) => (
				<div key={i}>
					{ingredient.name}
					{ingredient.price}
				</div>
			))}
		</div>
	);
};
