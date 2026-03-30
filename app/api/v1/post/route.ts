import type { NextApiRequest, NextApiResponse } from 'next';
import { save_todo_to_DB } from '@/components/features/actions';

export async function GET(req: Request, res: Response) {
    return Response.redirect(new URL('/', req.url));
}

export async function POST(req: Request, res: Response) {
    // フォームデータ受信
    const formData = await req.formData();
    const task: string = formData.get("task") as string;
    console.log(task);
    // 受信したデータをDBに保存
    save_todo_to_DB(task);
    // '/'にリダイレクト
    return Response.redirect(new URL('/', req.url));
}
