import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import brand from '../../assets/brand.svg';
import styles from './SignUpPage.module.scss';

export const SignUpPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.brandCard}>
                    <img src={logo} width={240} alt="" className="mb-[18px]" />
                    <img src={brand} alt="" />
                </div>
                <div className={styles.signupCard}>
                    <h2 className="text-4xl">Регистрация</h2>
                    <form className={styles.form}>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="Почта"
                        />
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Логин"
                        />
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Пароль"
                        />
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="Подтвердите пароль"
                        />
                        <button
                            className={`${styles.button} bg-[#2771FF]`}
                            type="submit"
                        >
                            Зарегистрироваться
                        </button>
                    </form>
                    <Link to={'/login'} className="italic underline">
                        Уже есть аккаунт
                    </Link>
                </div>
            </div>
        </div>
    );
};
