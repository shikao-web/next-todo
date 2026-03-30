import type { NextApiRequest, NextApiResponse } from 'next'

export async function GET(req: Request, res: Response) {
    return Response.redirect(new URL('/', req.url));
}

export async function POST(req: Request, res: Response) {
    const formData = await req.formData();
    const task: string = formData.get("task") as string;
    console.log(task);  // これをデータベース保存処理に変える
    return Response.redirect(new URL('/', req.url));
}
