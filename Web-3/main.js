

const tl = gsap.timeline({
    defaults:{
        ease:"power3.inOut"
    }
})

tl.to(".block-items",{
    clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    stagger:0.2,
    duration:2
}).to(".block",{
    backgroundColor:"#121212"
},"-=0.5")
.to(".logo",{
    y:0,
    clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration:1
},"-=1")
.to(".hamMenu",{
    y:0,
    clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration:1
},"-=1")
.to(".social li",{
    x:0,
    clipPath:"polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    duration:1,
    stagger:0.2
},"-=1")
.to(".hero h1",{
    scale:1,
    duration:2
},"-=1")
.to(".hero img",{
    y:"-50%",
    x:"-50%",
    opacity:1,
    scale:1,
    duration:3
},"-=2")
.to(".hero button",{
    y:0,
    duration:1
},"-=1")
