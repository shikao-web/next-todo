'use client'

import { ReactElement, useState } from "react";
import styles from './showtask.module.css';
import Link from 'next/link';
import ShowTasks from "@/components/ui/show_task";
import { read_todo_from_DB } from "@/components/features/selects";

async function TaskList(): Promise<ReactElement> {
    const tasks = await read_todo_from_DB(); 
    return (
        <div>
            {tasks.map((task) => (
                <ShowTasks task_content={task} />
            ))}
        </div>
    );
}

export default TaskList;