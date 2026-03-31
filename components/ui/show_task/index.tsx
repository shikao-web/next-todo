'use client'

import { useState } from "react";
import styles from './showtask.module.css';
import Link from 'next/link';

type Props = {task_content: string, task_id: number}

const ShowTasks: React.FC<Props> = ({task_content, task_id}) => {
    return (
        <div className="flex items-center border m-3">
            <input className="form-check-input w-24px h-24px" type="checkbox" />
            <h2 hidden>{task_id}</h2>
            <p className="m-0 text-24px text-center">{task_content}</p>
        </div>
    );
};

export default ShowTasks;