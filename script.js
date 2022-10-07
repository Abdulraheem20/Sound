let sounds = document.querySelectorAll('.sounds');

sounds.forEach(function(element, index) {
//    console.log(element);
   element.addEventListener('click', (e)=>{
    // console.log(index);
    if (index === 0){
        let audio = new Audio('./soundBox/sounds/crash.mp3');
        audio.play();
    } else if (index === 1){
        let audio = new Audio('./soundBox/sounds/kick-bass.mp3');
        audio.play();
    }
    else if (index === 2){
        let audio = new Audio('./soundBox/sounds/snare.mp3');
        audio.play();
    }
    else if (index === 3){
        let audio = new Audio('./soundBox/sounds/tom-1.mp3');
        audio.play();
    }
    else if (index === 4){
        let audio = new Audio('./soundBox/sounds/tom-2.mp3');
        audio.play();
    }
    else if (index === 5){
        let audio = new Audio('./soundBox/sounds/tom-3.mp3');
        audio.play();
    }
    else if (index === 6){
       let audio = new Audio('./soundBox/sounds/tom-4.mp3');
       audio.play();
   }
   })
    
});
