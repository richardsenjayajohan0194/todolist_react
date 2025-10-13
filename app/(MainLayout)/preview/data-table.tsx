import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ToDoList } from "./columns";
import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import InputField from "@/app/components/global/InputField";
import { useForm } from "react-hook-form";
import { FormSchema, toDoSchema } from "@/app/components/main_layout/FormValidationToDo";
import { zodResolver } from "@hookform/resolvers/zod";


interface Props{
  data: ToDoList[],
}

 const DataTable = ({data}:Props) => {
  console.log("Page Preview Rendering");

  const defaultValues = {
      title: "",
      content: "",
    };
  
    const {
      register,
      handleSubmit,
      // reset,
      //   formState: { errors },
    } = useForm<FormSchema>({
      resolver: zodResolver(toDoSchema), // Use Zod schema for validation
      defaultValues,
      reValidateMode: "onSubmit",
    });

    //For Register Account
  const onSubmit = async (data: FormSchema) => {
    console.log("Form Data:", data);
    
  };
    
  const rowPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowPerPage);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  // const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  console.log("Data in DataTable:", startIndex, endIndex, data);
  console.log("Pembagian:", data.length / rowPerPage);
  console.log("Pembulatan:", Math.ceil(data.length / rowPerPage));
    return (
      <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Content</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.slice(startIndex, endIndex).map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.content}</TableCell>
                <TableCell>{item.users.name}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">...</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onSelect={() => setIsDialogOpen(true)}>View</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setIsDialogOpen(true)}>Update</DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setIsDeleteDialogOpen(true)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="content-field">
                          <InputField
                            register={register("title")}
                            name="title"
                            label="Title"
                            placeholder="Title"
                            area={false}
                          />
                          <InputField
                            register={register("content")}
                            label="Content"
                            placeholder="Content"
                            area={true}
                          />
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>

                  <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                    <form>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Delete profile</DialogTitle>
                          <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="content-field">
                            <InputField
                                label="Title"
                                name="title"
                                placeholder="Title"
                                area={false}
                            />
                            <InputField
                                label="Content"
                                name="content"
                                placeholder="Content"
                                area={true}
                            />
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>
                </TableCell>
              </TableRow>
              );
          })}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              className={startIndex === 0 ? "tw-pointer-events-none tw-opacity-50" : ""}
              onClick={() => {
                if (startIndex > 0) {
                  setStartIndex(startIndex - rowPerPage);
                  setEndIndex(endIndex - rowPerPage);
                }
              }}
            >
            Previous
            </Button>
          </PaginationItem>

          {/* Dynamically generate page numbers */}
          {Array.from({ length: Math.ceil(data.length / rowPerPage) }, (_, i) => {
            const pageNumber = i + 1;
            const isActive = startIndex === i * rowPerPage;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  className={isActive ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    setStartIndex(i * rowPerPage);
                    setEndIndex(pageNumber * rowPerPage);
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <Button
              variant="outline"
              size="sm"
              className={
                endIndex >= data.length ? "tw-pointer-events-none tw-opacity-50" : ""
              }
              onClick={() => {
                if (endIndex < data.length) {
                  setStartIndex(startIndex + rowPerPage);
                  setEndIndex(endIndex + rowPerPage);
                }
              }}
            >
            Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </>
    );
};

export default DataTable;