import AddForm from "@/components/ui/add_form";
import TaskList from "@/components/ui/task_list";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <AddForm />
      <TaskList />
    </>
  );
}

