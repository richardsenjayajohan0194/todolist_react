'use client'

import { usePathname } from "next/navigation";
import HeaderForm from "./HeaderForm";
import Input from "./Input";
import InputArea from "./InputArea";

const AddContent = () => {

    const pathname = usePathname();
    if(pathname === "/dashboard"){
        return (
            <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
                <HeaderForm tag_header="h1" header="Welcome"/>
            </div>
        );
    }

    if(pathname === "/action"){
        return (
            <div className="add-content bg-success vh-100 d-flex justify-content-center align-items-center p-2">
                <div className="display row">
                    <HeaderForm tag_header="h1" header="Todo List Action"/>
                    <div className="content-field">
                        <Input  classname="mt-2"
                                type="text"
                                label="Title"
                                name_input="title"
                                placeholder="Title"/>
                        <InputArea classname="mt-2"
                                name="text"
                                label="Text"
                                name_input="text"
                                placeholder="Text"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddContent;