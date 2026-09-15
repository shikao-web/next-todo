import { ReactElement } from "react";
import ShowTasks from "@/components/ui/show_task";
import { read_todo_from_DB } from "@/components/features/selects";
import { createClient } from "@/lib/supabase/server";

async function TaskList(): Promise<ReactElement> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div className="text-center text-muted mt-3">ログインしてください。</div>;
  }

  const tasks = await read_todo_from_DB(user.id);

  if (tasks.length === 0) {
    return <div className="text-center text-muted mt-4">タスクはまだありません。</div>;
  }

  return (
    <div>
      {tasks.map((row) => (
        <ShowTasks key={row.id} task_id={row.id} task_content={row.task} />
      ))}
    </div>
  );
}

export default TaskList;