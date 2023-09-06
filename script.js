gsap.to("#page1 h1",{
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger:{
        trigger:"#page1",
        scroll:"body",
        // markers:true,
        start: "top 0",
        end: "top -200%",
        scrub:3,
        pin:true
    }
})

var tl = gsap.timeline();

tl.from(".nav,.nav h3, #page1 .nav-links",{
    y:-100,
    opacity:0,
   
})

tl.from(".content-h1 h1",{
    x:-100,
    opacity:0,
    duration:0.8,
    delay:0.8,
    stagger:0.8
})

// skills page 

gsap.from("#skills h2, .card-skills img",{
   y:-100,
   opacity:0,
    duration:1.5,
    delay:1,
    scrollTrigger:"#skills h2, .card-skills img"
    
})

// project page 
gsap.from("#projects h2, #projects .box",{
    scale:0,
    opacity:0,
     duration:1,
     delay:1,
     scrollTrigger:"#projects h2, #projects .box"
     
 })

//  about me page 
gsap.from("#aboutme h2, #l-r .left, #l-r .right, .icons i",{
    y:100,
    opacity:0,
     duration:1,
     delay:1,
     stagger:0.8,
     scrollTrigger:"#aboutme h2, #l-r .left, #l-r .right"
     
 })

