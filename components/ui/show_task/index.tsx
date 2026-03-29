'use client'

import { useState } from "react";
import styles from './showtask.module.css';
import Link from 'next/link';

type Props = {task_content: string}

const ShowTasks: React.FC<Props> = ({task_content}) => {
    return (
        <div className="flex items-center border m-3">
            <input className="form-check-input w-24px h-24px" type="checkbox" />
            <p className="m-0 text-24px text-center">{task_content}</p>
        </div>
    );
};

export default ShowTasks;