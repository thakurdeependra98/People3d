gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var ppl = document.querySelector("#people h1").textContent
var splited = ppl.split("")
var clutter = ""
splited.forEach(function(e){
    clutter += `<span>${e}</span>`
})

document.querySelector("#people h1").innerHTML = clutter


var move = gsap.timeline()

move.to("#img1",{
    y:50,
    duration:2.5,
    yoyo:1,
    repeat:-1,
})
move.to("#img2",{
    y:-50,
    duration:2.5,
    yoyo:1,
    repeat:-1,
    delay:-2.5,
})

move.from("#people h1 span",{
    y:50,
    opacity:0,
    duration:.6,
    stagger:.3,
    color:"blue",
    delay:-2
})
move.from("#img3",{
    y:100,
    opacity:0,
    duration:.6,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:1,
        pin:true
    }
})

gsap.to(".curlyline img",{
    x:"-100%",
    duration:25,
    repeat:-1,
    ease:Expo.easeInout5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top -50%",
    }
})
gsap.from("#page2>img",{
    x:"-100%",
    duration:.8,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:1,
        pin:true
    }
})

gsap.from(".part",{
    y:150,
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2
    }
})

var tl = gsap.timeline()

tl.from("#left h1,p",{
    x:"-100%",
    duration:.5,
    stagger:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#section",
        scroller:"#main",
        // markers:true,
        start:"top 20%",
        end:"top -10",
        scrub:2,
        pin:true
    }
})
tl.from("#girl img",{
    x:"100%",
    delay:1,
    duration:1,
    stagger:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#section",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 80",
        scrub:2
    }
})
gsap.to("#sliders",{
    transform:"translateX(-66.5%)",
    duration:5,
    scrollTrigger:{
        trigger:"#sliders",
        scroller:"#main",
        // markers:true,
        start:"top 17%",
        end:"top -50%",
        scrub:2,
        pin:true
    }
})

var wl = gsap.timeline()

wl.from("#page5 h1",{
    // transform:"translateX(-100%)",
    duration:5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 10%",
        end:"top 0%",
        scrub:2,
        pin:true
    }
})

wl.from("#pic1",{
    transform:"translateX(-100%)",
    duration:.5,
    opacity:0,
    // stagger:.3,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true
    }
})
wl.from("#pic2",{
    transform:"translateX(100%)",
    duration:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})
wl.from("#box img",{
    x:-100,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#box img",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -20%",
        scrub:2,
    }
})
wl.from("#tip img",{
    x:-100,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#tip img",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -20%",
        scrub:2,
        // pin:true
    }
})
wl.from("#agency img",{
    x:100,
    duration:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#agency img",
        scroller:"#main",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
    }
})
gsap.from("#page6 img",{
    y:50,
    opacity:0,
    duration:50,
    stagger:5,
    scrollTrigger:{
        trigger:".characters",
        scroller:"#main",
        // markers:true,
        start:"top 70%",
        end:"top -510%",
        scrub:2,
    }
})
gsap.from("#part1",{
    x:-200,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#part2",{
    x:200,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:"#page7",
        scroller:"#main",
        // markers:true,
        start:"top 50%",
        end:"top 10%",
        scrub:2,
    }
})