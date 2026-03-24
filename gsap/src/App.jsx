import { useGSAP } from '@gsap/react'
import './App.css' 
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const App = () => {

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#section-1",
      start:"top top",
      markers:true,
      scrub:true
    }
  }) 
  
  tl.to("html",{
      backgroundColor:"red"
  })
  .to("html",{
    backgroundColor:"green"
  })
  .to("html",{
    backgroundColor:"#004455"
  })
  },[])



  return (
    <>
       <section id='section-1'>Section 1</section>
       <section id='section-2'>Section 2</section>
       <section id='section-3'>Section 3</section>
       <section id='section-4'>Section 4</section>
    </>
  )
}

export default App