import { toDoSchema } from "./FormValidationToDo";
import UseToastAxios from "./UseToastAxios";

const handleFormToDo = async (data: { title: string; content: string }, userId: number) => {
  console.log("Datanya adalah: ", data);

  const dataToValidate = {
    title: data.title,
    content: data.content,
  };

  console.log("Type of this data: ", typeof dataToValidate);

  const result = toDoSchema.safeParse(dataToValidate);

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { error: result.error.flatten().fieldErrors };
  } else {
    const payload = {
      userId: userId,
      ...dataToValidate,
    };
    return UseToastAxios("http://localhost:3001/action", payload);
  }
}

export default handleFormToDo;