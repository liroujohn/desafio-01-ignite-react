import styles from './Header.module.css';

import rocketLogo from '../assets/Logo-foguete.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logotipo Rocket" />
        </header>    
    );
}