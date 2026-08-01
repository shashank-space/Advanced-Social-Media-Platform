export default function MediaPreview({file}){


const url =
URL.createObjectURL(file);



if(file.type.startsWith("video")){


return (

<video

src={url}

controls

className="
mt-4
rounded-lg
max-h-80
"

/>

);


}



return (

<img

src={url}

className="
mt-4
rounded-lg
max-h-80
"

/>

);


}