'use client'

import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {task_content: string, task_id: number}

const ShowTasks = ({ task_content, task_id }: Props) => {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsChecked(checked);

        if (!checked || isDeleting) return;

        setIsDeleting(true);
        try {
            const response = await fetch(`/api/v1/post?id=${task_id}`, { method: "DELETE" });

            if (response.ok) {
                router.refresh();
            } else {
                setIsChecked(false);
            }
        } catch {
            setIsChecked(false);
        } finally {
            setIsDeleting(false);
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
