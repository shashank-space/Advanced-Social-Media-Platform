import {useState} from "react";


export default function CommentSection(){


const [comment,setComment]=useState("");



return (

<div>


<input

value={comment}

onChange={(e)=>
setComment(e.target.value)
}

placeholder="Comment..."

className="
bg-slate-900
rounded
px-3
py-1
"

/>


<button

className="
ml-2
text-cyan-400
"

>

Send

</button>


</div>

);


}