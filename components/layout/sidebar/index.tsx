'use client'


import { useState } from "react";
import styles from './sidebar.module.css';
import Link from 'next/link';

const Sideber: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <p>Content of Sideber</p>
        </aside>
    );
};

export default Sideber;