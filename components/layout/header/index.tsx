'use client'

import { useState } from "react";
import styles from './header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link href="/">NextTodo</Link>
            </h1>
        </header>
    );
};

export default Header;