
const promise =(delay)=>
    new Promise((resolve,)=>{
      setTimeout(
        resolve({username:"Hammad Ali Khan"})
    )
    },delay)





promise(1000).then((username)=>console.log(username))