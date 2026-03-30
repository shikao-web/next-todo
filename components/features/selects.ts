import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function read_todo_from_DB(): Promise<string[]> {

  const tasks: string[] = (await prisma.todo.findMany({
    where: {
      task: {
        not: null,
      },
    },
    select: { task: true },
  })).map(t => t.task).filter((t): t is string => t !== null);

  

  return tasks;


}