import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function save_todo_to_DB(task: string) { 
  
  // DB保存処理
  return await prisma.todo.create({
    data: { task },
  })
  
}