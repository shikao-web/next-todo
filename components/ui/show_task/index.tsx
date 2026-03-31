'use client'

import { useState, type ChangeEvent } from "react";

type Props = {task_content: string, task_id: number}

const ShowTasks = ({ task_content, task_id }: Props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsChecked(checked);

        if (!checked || isDeleting) return;

        setIsDeleting(true);
        try {
            // h2 に表示している task_id（todo.id）を削除する
            await fetch(`/api/v1/post?id=${task_id}`, { method: "DELETE" });
        } finally {
            // 200ms待機して '/' をリロード
            await new Promise((resolve) => setTimeout(resolve, 200));
            window.location.href = "/";
        }
    };

    return (
        <div className="flex items-center border m-3">
            <input
                className="form-check-input w-24px h-24px"
                type="checkbox"
                checked={isChecked}
                disabled={isDeleting}
                onChange={handleChange}
            />
            <h2 hidden>{task_id}</h2>
            <p className="m-0 text-24px text-center">{task_content}</p>
        </div>
    );
};

export default ShowTasks;