import type { NextApiRequest, NextApiResponse } from 'next';
import { save_todo_to_DB } from '@/components/features/actions';

export async function GET(req: Request, res: Response) {
    return Response.redirect(new URL('/', req.url));
}

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const task: string = formData.get("task") as string;
    console.log(task);
    save_todo_to_DB(task);
    return Response.redirect(new URL('/', req.url));
}
