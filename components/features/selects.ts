import prisma from "@/lib/prisma";

export type TodoRow = { id: number; task: string };

export async function read_todo_from_DB(): Promise<TodoRow[]> {
  const rows = await prisma.todo.findMany({
    select: { task: true, id: true },
  });

  // prisma の型推論が環境によってうまく効かないことがあるため、明示的に型合わせしています
  return rows as unknown as TodoRow[];
}
