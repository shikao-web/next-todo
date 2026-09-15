import prisma from "@/lib/prisma";

export type TodoRow = { id: number; task: string };

export async function read_todo_from_DB(userId: string): Promise<TodoRow[]> {
  const rows = await prisma.todo.findMany({
    where: { userId },
    select: { task: true, id: true },
    orderBy: { createdAt: "asc" },
  });

  return rows as unknown as TodoRow[];
}

