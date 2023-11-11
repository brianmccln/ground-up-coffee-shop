let sectionImg = document.querySelectorAll('section img');
let sectionText = document.querySelectorAll('section div');
// NodeList (array of img elements; array length is 3
console.log(sectionImg); 
console.log(sectionText);
console.log(sectionImg[0]); 
console.log(sectionText[0]);

for(let i = 0; i < sectionImg.length; i++) {

    let movement = 100; // odd rows

    if(i % 2 == 0) {
        movement = -movement; // even rows
    }

    gsap.from(sectionImg[i], {
        scrollTrigger: {
            trigger: sectionImg[i],
            // markers: true,
            scrub: 1,
            start: 'top 85%',
            end: 'bottom 80%'
        }, 
        x: movement, 
        opacity: 0,
        // scale: 0
    })

    gsap.from(sectionText[i], {
        scrollTrigger: {
            trigger: sectionText[i],
            // markers: true,
            scrub: 1,
            start: 'top 85%',
            end: 'bottom 80%'
        }, 
        x: -movement, 
        opacity: 0
    })

} // end for loop