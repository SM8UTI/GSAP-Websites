

const tl = new gsap.timeline({
    defaults:{
        ease:"power2.out"
    }
})

tl.to(".line",{
    width:"100%",
    duration:2,
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    x:0
})
.to(".logo",{
    x:0,
    opacity: 1,
    duration:1
})
.to(".nav li",{
    x:0,
    opacity: 1,
    duration:2
},"-=0.5")
.to(".ham-menu",{
    x:0,
    opacity:1,
    duration:2
},"-=1")
.to(".coco",{
    scale:1,
    duration:2
},"-=4")
.to(".line h1",{
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    x:0,
    duration:1,
    opacity:1
},"-=2")
.to(".text h1",{
    clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    x:0,
    duration:1,
    opacity:1
},"-=2")
.to(".social li",{
    opacity:1,
    duration:0.5,
    stagger:0.5
},"-=2")