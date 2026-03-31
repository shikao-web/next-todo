import AddForm from "@/components/ui/add_form";
import TaskList from "@/components/ui/task_list";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <AddForm />
      <TaskList />
    </>
  );
}
