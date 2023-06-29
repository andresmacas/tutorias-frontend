import Head from 'next/head';
import bg from '../public/images/login_background.jpg';
import styles from '../styles/Login.module.css'
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        var tipo = document.getElementById("password");
        if (tipo.type == "password") {
            tipo.type = "text";
        } else {
            tipo.type = "password";
        }
        setShowPassword(!showPassword);
    };
    // Evalua showIcon, si es verdadero cambia la fuente de imagen de una hacia otra
    const showIcon = showPassword ? "/images/icon_hide_glow.png" : "/images/icon_show_password.png";

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${bg.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Head>
                <title>Log-in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.form}>
                <h1 className={styles.minimalist}>SISTEMA DE GESTION DE TUTORIAS</h1>
                <h1 className={styles.tittle}>
                    <span>Log In</span>
                    <span style={{ color: '#1c90f5' }}>.</span>
                </h1>
                <h1 style={{ paddingTop: '13px', paddingBottom: '13px' }} className={styles.minimalistsubtitle}>Aun no tienes cuenta?
                    <Link style={{ color: '#1e7fd6' }} href="/register" passHref>
                        Registrate
                    </Link>
                </h1>
                <div className={styles.inputContainer}>
                    <input className={styles.input} style={{ width: '330px' }} type="text" />
                    <span className={styles.span}>Email</span>
                    <div className={styles.icon} style={{ backgroundImage: `url("/images/icon_email.png")` }} />
                </div>
                <div className={styles.inputContainer} >
                    <input className={styles.input} style={{ width: '330px' }} type="password" name="password" id="password" />
                    <span className={styles.span}>Password</span>
                    <div className={styles.iconToggle} style={{ backgroundImage: `url(${showIcon})` }} onClick={handleTogglePassword} />
                </div>
                <button href='/home' className={styles.button} style={{ width: '330px' }}>Log In</button>
            </div>
        </div>

    )
}