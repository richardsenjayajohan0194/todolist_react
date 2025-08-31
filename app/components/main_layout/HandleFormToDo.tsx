import { toDoSchema } from "./FormValidationToDo";
import UseToastAxios from "./UseToastAxios";

const handleFormToDo = async (prevState: unknown, formData: FormData, userId: string) => {
  console.log("Datanya adalah: ", formData);
  

  const dataToValidate = {
      userId: userId,
      title: formData.get('title'),
      content: formData.get('content'),
  };
  
  console.log("Type of this data: ", typeof dataToValidate);

  const result = await toDoSchema.safeParse(dataToValidate);

  if(!result.success){
      console.log(result.error.flatten().fieldErrors);
      return {error: result.error.flatten().fieldErrors};
  }


  UseToastAxios("http://localhost:3001/action", dataToValidate);
}

export default handleFormToDo;