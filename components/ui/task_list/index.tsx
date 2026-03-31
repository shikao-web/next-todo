import { ReactElement } from "react";
import ShowTasks from "@/components/ui/show_task";
import { read_todo_from_DB } from "@/components/features/selects";

async function TaskList(): Promise<ReactElement> {
    const tasks = await read_todo_from_DB();
    return (
        <div>
            {tasks.map((row) => (
                <ShowTasks
                    key={row.id}
                    task_id={row.id}
                    task_content={row.task}
                />
            ))}
        </div>
    );
}

export default TaskList;