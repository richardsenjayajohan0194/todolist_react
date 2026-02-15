"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ToDoList = {
  id: string
  title: string
  content: string
  users: Users
}

export type Users =  {
  name: string
}

export type ToDoListResponse = {
  getToDoList: ToDoList[];
  totalCountData: number;
}

export const columns: ColumnDef<ToDoList>[] = [
  {
    accessorKey: "id",
    header: "ID"
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "users.name",
    header: "Name",
  },
  
]