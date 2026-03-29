'use client'

import { useState } from "react";
import styles from './footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className="text-Gray-50">Copyright © SHIKAO-WEB All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;