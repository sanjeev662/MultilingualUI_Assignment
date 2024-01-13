import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './login.css';
import logoImage from '../../assets/header_logo.png';

const Login = () => {
    const { selectedLanguage } = useLanguage();
    const [username, setUsername] = useState('guest');

    const languageTranslations = {
        ca_ES: {
            enterCredentials: 'Si us plau, introduïu el nom d\'usuari i la contrasenya de l\'administrador.',
            username: 'Nom d\'usuari',
            password: 'Contrasenya',
            signIn: 'Inicia sessió',
        },
        cs_CZ: {
            enterCredentials: 'Prosím, zadejte přihlašovací údaje správce.',
            username: 'Uživatelské jméno',
            password: 'Heslo',   
            signIn: 'Přihlásit se',
        },
        da_DK: {
            enterCredentials: 'Indtast administratorlogin og adgangskode.',
            username: 'Brugernavn',
            password: 'Adgangskode',
            signIn: 'Log ind',
        },
        en_US: {
            enterCredentials: 'Please enter your administrator login and password.',
            username: 'Username',
            password: 'Password',
            signIn: 'Sign in',
        },
        es_ES: {
            enterCredentials: 'Por favor, ingrese su nombre de usuario y contraseña de administrador.',
            username: 'Nombre de usuario',
            password: 'Contraseña',
            signIn: 'Iniciar sesión',
        },
        fr_FR: {
            enterCredentials: 'Veuillez entrer votre identifiant et votre mot de passe administrateur.',
            username: 'Nom d\'utilisateur',
            password: 'Mot de passe',
            signIn: 'Se connecter',
        },
        hu_HU: {
            enterCredentials: 'Kérjük, adja meg az adminisztrátori bejelentkezési és jelszót.',
            username: 'Felhasználónév',
            password: 'Jelszó',
            signIn: 'Bejelentkezés',
        },
        is_IS: {
            enterCredentials: 'Vinsamlegast sláðu inn notendanafn og lykilorð stjórnanda.',
            username: 'Notandanafn',
            password: 'Lykilorð',
            signIn: 'Skrá inn',
        },
        it_IT: {
            enterCredentials: 'Inserisci il nome utente e la password dell\'amministratore.',
            username: 'Nome utente',
            password: 'Password',
            signIn: 'Accedi',
        },
        ja_JP: {
            enterCredentials: '管理者のログインとパスワードを入力してください。',
            username: 'ユーザー名',
            password: 'パスワード',
            signIn: 'サインイン',
        },
        ko_KR: {
            enterCredentials: '관리자 로그인 및 비밀번호를 입력하십시오.',
            username: '사용자 이름',
            password: '비밀번호',
            signIn: '로그인',
        },
        nl_NL: {
            enterCredentials: 'Voer uw beheerdersaanmelding en wachtwoord in.',
            username: 'Gebruikersnaam',
            password: 'Wachtwoord',
            signIn: 'Aanmelden',
        },
        pl_PL: {
            enterCredentials: 'Proszę podać login i hasło administratora.',
            username: 'Nazwa użytkownika',
            password: 'Hasło',
            signIn: 'Zaloguj się',
        },
        pt_BR: {
            enterCredentials: 'Por favor, insira o login e a senha do administrador.',
            username: 'Nome de usuário',
            password: 'Senha',
            signIn: 'Entrar',
        },
        ru_RU: {
            enterCredentials: 'Введите логин и пароль администратора.',
            username: 'Имя пользователя',
            password: 'Пароль',
            signIn: 'Войти',
        },
        zh_CN: {
            enterCredentials: '请输入管理员登录名和密码。',
            username: '用户名',
            password: '密码',
            signIn: '登录',
        },
        zh_TW: {
            enterCredentials: '請輸入管理員登錄名和密碼。',
            username: '用戶名',
            password: '密碼',
            signIn: '登錄',
        },
    };

    const translations = languageTranslations[selectedLanguage] || languageTranslations.en_US;

    return (
        <div className="container">
            <div className="login-page">
                <img src={logoImage} alt="Barracuda Logo" className="logo-image" />
                <div className="form">
                    <form className='login-form'>
                        <p>{translations.enterCredentials}</p>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            id="username"
                            placeholder={translations.username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={translations.password}
                        />
                        <button className='btn'>{translations.signIn}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
