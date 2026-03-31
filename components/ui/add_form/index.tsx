'use client'

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from './addform.module.css';

const AddForm: React.FC = () => {
    const router = useRouter();
    const [task, setTask] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("task", task);

        // 直接遷移せず、API へ POST する
        await fetch("/api/v1/post", {
            method: "POST",
            body: formData,
        });

        // 要件どおり少し待ってからリロード
        await new Promise((resolve) => setTimeout(resolve, 500));
        router.refresh();
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                className="form-control"
                type="text"
                name="task"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">ADD</button>
        </form>
    );
};

export default AddForm;