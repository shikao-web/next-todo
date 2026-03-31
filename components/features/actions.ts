import prisma from "@/lib/prisma";

export async function save_todo_to_DB(task: string) { 
  
  // DB保存処理
  return await prisma.todo.create({
    data: { task },
  })
  
}

export async function delete_todo_from_DB(id: number) {
  return prisma.todo.delete({
    where: { id },
  });
}