let counter =0;

const getData=() => {
    console.log("Fetched Data",counter++);
    
}


const debounce =(fn,d)=>{
     let timer

    const context = this,
    arg=arguments;
    clearTimeout(timer)

    return function(){
           timer=setTimeout(()=>{
            getData.apply(context,arg)
          },d)

    }

   
}



const betterFunction = debounce(getData,3000)