import prisma from "@/lib/prisma";

export type TodoRow = { id: number; task: string };

export async function read_todo_from_DB(): Promise<TodoRow[]> {
  return (await prisma.todo.findMany({
    select: { task: true, id: true },
  })).map((t) => ({ id: t.id, task: t.task }));
}
