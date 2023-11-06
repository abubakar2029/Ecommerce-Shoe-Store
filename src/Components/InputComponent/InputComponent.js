import { useForm } from "react-hook-form";
export default function InputComponent(props) { /* props from CreateProduct.js */
    let inputObject = props.props;
    const { register } = useForm();
    // console.log(inputObject);
    return (
        <div className='sm:px-12 lg:px-20'>
            {inputObject.type ?
                <>
                    <label>{inputObject.label}</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none my-2 sm:text-sm " id="username" type="text" placeholder="Username" {...register(inputObject.label)} />
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
            }
        </div>
    )
}

