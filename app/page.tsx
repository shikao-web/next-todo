import Image from "next/image";
import AddForm from "@/components/ui/add_form";
import ShowTasks from "@/components/ui/show_task";

export default function Home() {
  return (
    <>
      <AddForm />
      <div>
        <ShowTasks task_content="ゲームする"/>
      </div>
    </>
  );
}
