ScrollSmoother.create({
     smooth: 3,               // how long (in seconds) it takes to "catch up" to the native scroll position
     effects: true,           // looks for data-speed and data-lag attributes on elements
     smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
   });



gsap.fromTo('.driverDiv', {x: '-20%'}, {
     scrollTrigger: {
          trigger: '.driver',
          start: 'center 100%',
          end: 'bottom -3000%',
          
          scrub: true
     },
     x: '100%',
      
})


gsap.fromTo('.truckDiv', {x: '60%'}, {
     scrollTrigger: {
          trigger: '.truck',
          start: 'bottom 95%',
          end: 'bottom -600%',
          pin: true,
          scrub: true
     },
     x: '-70%',
      
})


gsap.fromTo('.section2Text', {x: '70%'}, {
     scrollTrigger: {
          trigger: '.section2Text',
          start: 'top 10%',
          end: 'bottom -320%',
          pin: true,
          scrub: true
     },
     x: '0%',
      
})





gsap.fromTo('.section2TextAboutContainer', {x: '80%'}, {
     scrollTrigger: {
          trigger: '.section2TextAboutContainer',
          start: 'top 20%',
          end: 'bottom -270%',
          pin: true,
          scrub: true
     },
     x: '0%',
      
})





//HERE


gsap.fromTo('.skillsContainer', {x: '-70%'}, {
     scrollTrigger: {
          trigger: '.skillsContainer',
          start: 'top 0%',
          end: 'bottom -100%',
          pin: true,
          scrub: true
     },
     x: '0%',
      
})



const timeline = gsap.timeline({
     scrollTrigger: {
       trigger: ".projects",
       start: "top top", // this is the trigger position
       pin: true, // pins the element to the top
       end: "+=315%", // defines the end of the pin
       scrub: true // allows the pin to move with the scroll
     }
   });


   const timeline2 = gsap.timeline({
     scrollTrigger: {
       trigger: ".wrapper",
       start: "top 10%", // this is the trigger position
       pin: true, // pins the element to the top
       end: "+=315%", // defines the end of the pin
       scrub: true // allows the pin to move with the scroll
     }
   });