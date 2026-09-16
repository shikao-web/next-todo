'use client'

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const AddForm: React.FC = () => {
    const router = useRouter();
    const [task, setTask] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set("task", task);

        // 直接遷移せず、API へ POST する
        const response = await fetch("/api/v1/post", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) return;

        setTask("");
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
