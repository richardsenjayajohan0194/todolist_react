import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EyeIcon, PencilIcon, TrashIcon } from 'lucide-react'
import { ToDoList } from './columns';
import { useState } from 'react';
import DialogModal from './DialogModal';

interface Props {
    data: ToDoList;  // The todo data to pass (from the row)
}
    

function DropdownMenuSelection({ data }: Props) {
    // Use useEffect to log only once when the component mounts (first render)
    console.log("DropdownMenuSelection Rendered with data:", data);

    const [isDialogOpen, setIsDialogOpen] = useState(false);  // State to control dialog visibility and hold data
    const [isAction, setIsAction] = useState("");  // State to hold the action type (View, Edit, Delete)
    // const handleClick = (todo: ToDoList) => {  
    //     console.log('Button clicked!');  
    //     console.log('Clicked element:', todo); // Access the todo data
    // };  

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">...</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {setIsDialogOpen(true); setIsAction("View")}}>  {/* Pass data on "View" click */}
                        <EyeIcon />
                        View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {setIsDialogOpen(true); setIsAction("Edit")}}>  {/* Pass data on "Edit" click */}
                        <PencilIcon />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="tw-text-red-600" onClick={() => {setIsDialogOpen(true); setIsAction("Delete")}}>  {/* Pass data on "Delete" click (or handle delete separately) */}
                            <TrashIcon />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DialogModal data={data} isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} Action={isAction}/>

        </>
    );
}

export default DropdownMenuSelection;