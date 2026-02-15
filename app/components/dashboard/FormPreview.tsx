
"use client";
import { SubmitHandler, useForm } from "react-hook-form"; // Add useEffect if not already imported
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, toDoSchema } from "@/app/components/main_layout/FormValidationToDo";
import { memo} from "react";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputField from "../global/InputField";
import { ToDoList } from "@/app/(MainLayout)/preview/columns";
// import { UseUserSession } from "@/app/components/dashboard/UserInfo";

interface FormPreviewProps {
  selectedItem: ToDoList | null; // The item to edit
}

const FormPreview = ({ selectedItem }: FormPreviewProps) => {
  console.log("Form Preview Rendered");
  console.log("Selected Item:", selectedItem);
 
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(toDoSchema), // Use Zod schema for validation
    reValidateMode: "onSubmit",
  });


  //For Register Account
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    console.log("Form Data:", data);

  };

  return (
    <>
       <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
              <div className="content-field">
                <InputField
                  classname="title-field"
                  // value={selectedItem?.title}
                  register={register("title")}
                  name="title"
                  label="Title"
                  placeholder="Title"
                  error={errors.title?.message}
                  area={false}
                />
                <InputField
                  classname="content-field"
                  register={register("content")}
                  // value={selectedItem?.content}
                  label="Content"
                  placeholder="Content"
                  error={errors.content?.message}
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
    </>
  );
};

export default memo(FormPreview);