# ground-up-coffee-shop
I made a BrianSlides Class for a History of Coffee slideshow, but it works with your images, captions and even audio. 
I coded it from the "ground up" (no pun intended) using OOP (Object Oriented Programming), to emulate and help me and others better understand how libraries, such Splide() and Tabby() libraries were made.
I 
In addition to images, the slideshow supports captions and mp3 audio files. All files are provided for the default 15-slide presentation (History of Coffee).
The slideshow has Next >> and Prev << buttons, as well as an Autoplay option. Click AUTO to have the slideshow run automatically. 
It uses an "ended" event on the Audio object to cue up the next slide by calling the next() function, recursively. 
In this example, the audio consists of my voiceover, reading the captions aloud.
The data consists of an array of objects called coffeeHistArray, which is the only thing in coffee-data.js. 
The OOP Class is the BrianSlides.js, an object of which needs to be instantiated in the HTML, where '.slideshow' is some ul you choose to receive the slides as li tags.
const slideshow = new BrianSlider(coffeeHistArray, '.slideshow');
slideshow.load();
The css is in its own folder. 
For this example, I nested the BrianSlider in a Tabby tab.. Navigate in the browser to the About page, click the History of Coffee tab,
and the slideshow will appear. Click >> to hear the first slide play, then >> to get the next slide. Click << for the previous slide.
Click AUTO for autoplay (the button says STOP while autoplay is in progress). Click STOP to stop autoplay and go back to using the >> and << buttons.
