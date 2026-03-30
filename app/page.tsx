import Image from "next/image";
import AddForm from "@/components/ui/add_form";
import ShowTasks from "@/components/ui/show_task";
import TaskList from "@/components/ui/task_list";
import { read_todo_from_DB } from "@/components/features/selects";

export default function Home() {
  return (
    <>
      <AddForm />
      <TaskList />
    </>
  );
}
