import { AppHeader } from '../app-header/app-header';
// import { INGREDIENTS } from '@utils/data';
// import { IngredientsGroup } from '../burger-ingredients/ingredients-group/ingredients-group';
import { IngredientsSection } from '../burger-ingredients/indredients-section/ingredients-section';

export const App = () => {
	return (
		<div className='page'>
			<AppHeader />
			<IngredientsSection/>
		</div>
	);
};
