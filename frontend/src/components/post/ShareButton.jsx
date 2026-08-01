export default function ShareButton(){


const sharePost=()=>{


navigator.share?.({

title:"Post",

text:"Check this post"

});


};



return (

<button

onClick={sharePost}

>

🔗 Share

</button>

);


}