import prisma from "@/lib/prisma";

export type TodoRow = { id: number; task: string };
export type TodoPage = { tasks: TodoRow[]; nextCursor?: number };

const PAGE_SIZE = 20;

export async function read_todo_from_DB(
  userId: string,
  cursor?: number
): Promise<TodoPage> {
  const rows = await prisma.todo.findMany({
    where: { userId },
    select: { task: true, id: true },
    orderBy: [{ createdAt: "asc" }, { id: "asc" }],
    cursor: cursor ? { id: cursor } : undefined,
    skip: cursor ? 1 : 0,
    take: PAGE_SIZE + 1,
  });

  const hasNextPage = rows.length > PAGE_SIZE;
  const tasks = rows.slice(0, PAGE_SIZE) as TodoRow[];

  return {
    tasks,
    nextCursor: hasNextPage ? tasks.at(-1)?.id : undefined,
  };
}
