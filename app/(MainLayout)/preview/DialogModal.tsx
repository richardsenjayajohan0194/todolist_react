import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { ToDoList } from './columns'

interface Props{
    data: ToDoList;
    isDialogOpen: boolean;
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
    Action: string;
}

const DialogModal = ({data, isDialogOpen, setIsDialogOpen, Action}:Props) => {

    console.log(data);
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <form>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>{Action}</DialogTitle>
                </DialogHeader>
                {/* <div>
                    <input type="text" value={data.content} />
                </div> */}
                {/* <div className="content-field">
                <InputField // Memoized version
                    classname="title-field"
                    register={register("title")}
                    name="title"
                    label="Title"
                    placeholder="Title"
                    error={errors.title?.message}
                    area={false}
                />
                <InputField // Memoized version
                    classname="content-field"
                    register={register("content")}
                    label="Content"
                    placeholder="Content"
                    error={errors.content?.message}
                    area={true}
                />
                </div> */}
                <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
            </form>
        </Dialog>
    )
}

export default DialogModal