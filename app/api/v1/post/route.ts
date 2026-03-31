import { NextResponse } from "next/server";
import { delete_todo_from_DB, save_todo_to_DB } from '@/components/features/actions';

export async function GET(req: Request) {
    return NextResponse.redirect(new URL('/', req.url));
}

export async function POST(req: Request) {
    // フォームデータ受信
    const formData = await req.formData();
    const task: string = formData.get("task") as string;
    console.log(task);
    // 受信したデータをDBに保存
    await save_todo_to_DB(task);
    // リダイレクトではなく JSON を返す（クライアント側で遷移制御するため）
    return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
    const url = new URL(req.url);
    const idParam = url.searchParams.get("id");
    const id = idParam ? Number(idParam) : NaN;

    if (!idParam || Number.isNaN(id)) {
        return NextResponse.json({ error: "id is required" }, { status: 400 });
    }

    await delete_todo_from_DB(id);
    return NextResponse.json({ ok: true });
}
