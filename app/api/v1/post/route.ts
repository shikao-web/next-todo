import { NextResponse } from "next/server";
import { delete_todo_from_DB, save_todo_to_DB } from "@/components/features/actions";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: Request) {
  return NextResponse.redirect(new URL("/", req.url));
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // フォームデータ受信
  const formData = await req.formData();
  const task: string = ((formData.get("task") as string) || "").trim();

  if (!task) {
    return NextResponse.json({ error: "Task content is required" }, { status: 400 });
  }

  // 受信したデータをDBに保存
  await save_todo_to_DB(task, user.id);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const idParam = url.searchParams.get("id");
  const id = idParam ? Number(idParam) : NaN;

  if (!idParam || Number.isNaN(id)) {
    return NextResponse.json({ error: "id is required" }, { status: 400 });
  }

  await delete_todo_from_DB(id, user.id);
  return NextResponse.json({ ok: true });
}

