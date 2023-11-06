import { FileInput } from '../../Components/FileInput/FileInput';


import InputComponent from '../../Components/InputComponent/InputComponent'
import { useForm } from 'react-hook-form'


function CreateProduct() {

  const { register, handleSubmit } = useForm();

  let formInputs = [{ label: "Product Name", type: "text", placeholder: "Name of Product" },
  { label: "Product Details", type: "text", placeholder: "Detail of Product" },
  { label: "Product Price", type: "number", placeholder: "Price in $" },
  { label: "Select a Brand" }]

  const submit = (formData) => {
    console.log("Submit", formData);
  }


  return (
    <div className='sm:text-sm md:text-base max-[600px]:mx-auto'>
      Hello
      <form onSubmit={handleSubmit(submit)}>
        <div className=' h-40 md:border-2 mx-12 ' >
          <FileInput props={{ main: "main" }} /></div>
        <div className='flex pl-12'>
          <FileInput props={{ main: "simple" }} />
          <FileInput props={{ main: "simple" }} />
        </div>

        <h1 className='font-bold text-xl text-left pl-5'>Product Information</h1>
        <hr className='w-1/4 ml-5 '/>
        <div className='sm:px-12 lg:px-20 text-left'>{
          formInputs.map((inputObject) => {
            // return <InputComponent props={inputObject} />
            return inputObject.type ?
              <>
                <label>{inputObject.label}</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none my-2 " id="username" type="text" placeholder="Username" {...register(inputObject.label)} />
              </> :
              <select className='w-full shadow rounded border  py-2 px-3 my-2' {...register("Brand Name")}>
                <optgroup label='Imported Brand'>
                  <option>Adidas</option>
                </optgroup>
                <optgroup label='Local Brand'>
                  <option>Service</option>
                  <option>Bata</option>
                </optgroup>
              </select>

          })
        }
        </div>
        <button
          type="submit"
          className=" relative py-3 px-20
          my-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  )
}
export { CreateProduct }