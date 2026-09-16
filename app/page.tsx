import AddForm from "@/components/ui/add_form";
import TaskList from "@/components/ui/task_list";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type HomeProps = {
  searchParams: Promise<{ cursor?: string | string[] }>;
};

function parseCursor(value: string | string[] | undefined): number | undefined {
  const cursor = Array.isArray(value) ? value[0] : value;

  if (!cursor || !/^\d+$/.test(cursor)) {
    return undefined;
  }

  const id = Number(cursor);
  return Number.isSafeInteger(id) && id > 0 ? id : undefined;
}

export default async function Home({ searchParams }: HomeProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const cursor = parseCursor((await searchParams).cursor);

  return (
    <>
      <AddForm />
      <TaskList userId={user.id} cursor={cursor} />
    </>
  );
}
