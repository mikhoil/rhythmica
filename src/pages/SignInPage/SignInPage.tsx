import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import brand from '../../assets/brand.svg';
import google from '../../assets/google.svg';
import styles from './SignInPage.module.scss';

export const SignInPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.brandCard}>
                    <img src={logo} width={240} alt="" className="mb-[18px]" />
                    <img src={brand} alt="" />
                </div>
                <div className={styles.signinCard}>
                    <h2 className="text-4xl">Авторизация</h2>
                    <form className={styles.form}>
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
                        <button
                            className={`${styles.button} bg-[#2771ff] w-[210px]`}
                            type="submit"
                        >
                            Войти
                        </button>
                    </form>
                    <Link to={'/register'} className="italic underline mt-10">
                        Регистрация
                    </Link>
                    <p>или</p>
                    <button className={styles.google}>
                        Войти
                        <img src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};
