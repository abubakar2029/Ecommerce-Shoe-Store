import { useState } from 'react';

export default function SizeButton(props) {

  let [selectedButton, setSelectedButton] = useState(null);
  let currentSize = props.size;
  console.log("Size", props.size);
  console.log("Size001", selectedButton);
  return (
    <div>
      <button className={selectedButton == currentSize ? "bg-slate-800 text-white border-none font-bold border-gray-400 border-2 w-20 py-1 rounded mx-3 my-3" : "         bg-white w-20 py-1 hover:border-none  hover:bg-slate-800 hover:text-white font-bold rounded mx-3 my-3 border-solid border-gray-400 border-2"} onClick={(evt) => {
        console.log(evt);
        // selectedSize(evt.target.innerText);
        setSelectedButton(evt.target.innerText)
      }}>{props.size}</button>
    </div>
  )
}

export { SizeButton };
