import styles from './app-header.module.scss';
import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const AppHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={`${styles.menu} p-4`}>
				<div className={styles.menu__left}>
					<div className={styles.menu_item}>
						<BurgerIcon type={'primary'} />
						<div className={styles.link}>
							<p className='text text_type_main-default ml-2 mr-10'>
								Конструктор
							</p>
						</div>
					</div>
					<div className={styles.menu_item}>
						<ListIcon type={'primary'} />
						<div className={styles.link}>
							<p className='text text_type_main-default ml-2'>Лента заказов</p>
						</div>
					</div>
				</div>
				<Logo className={styles.logo} />
				<div className={`${styles.menu_item} ${styles.menu_item__last}`}>
					<ProfileIcon type={'primary'} />
					<div className={styles.link}>
						<p className='text text_type_main-default ml-2'>Личный кабинет</p>
					</div>
				</div>
			</nav>
		</header>
	);
};
