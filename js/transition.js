
var tl = new TimelineMax;
gsap.registerPlugin(ScrollTrigger)
gsap.from('.fade-in',{duration: 2, scale: 0.5, ease:'bounce', 
    scrollTrigger:
    {
        trigger: '.fade-in',
    }
})
gsap.from('.fade-left',{duration: 3, x: -300, ease: 'elastic',    
scrollTrigger:
{
    trigger: '.fade-in',

}})

