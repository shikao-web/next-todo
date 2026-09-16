import Link from "next/link";
import ShowTasks from "@/components/ui/show_task";
import { read_todo_from_DB } from "@/components/features/selects";

type TaskListProps = {
  userId: string;
  cursor?: number;
};

async function TaskList({ userId, cursor }: TaskListProps) {
  const { tasks, nextCursor } = await read_todo_from_DB(userId, cursor);

  if (tasks.length === 0) {
    return <div className="text-center text-muted mt-4">タスクはまだありません。</div>;
  }

  return (
    <div>
      {tasks.map((row) => (
        <ShowTasks key={row.id} task_id={row.id} task_content={row.task} />
      ))}
      {nextCursor && (
        <div className="text-center mt-3">
          <Link href={`/?cursor=${nextCursor}`} className="btn btn-outline-primary">
            さらに表示
          </Link>
        </div>
      )}
    </div>
  );
}

export default TaskList;
