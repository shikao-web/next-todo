import prisma from "@/lib/prisma";

export async function save_todo_to_DB(task: string, userId: string) { 
  // DB保存処理
  return await prisma.todo.create({
    data: {
      task,
      userId,
    },
  });
}

export async function delete_todo_from_DB(id: number, userId: string) {
  return prisma.todo.deleteMany({
    where: {
      id,
      userId,
    },
  });
}