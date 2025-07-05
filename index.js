var totalbuttons = document.querySelectorAll(".drum").length;

document.addEventListener("keypress",function(event){
    var key=event.key;
    switch(key){
        case "w" :
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;

        case "a" :
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;

        case "s" :
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;

        case "d" :
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;

        case "j" :
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;

        case "k" :
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;

        case "l" :
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
        
            
    }
})


for(var i=0;i<totalbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var clkbtn = this.innerHTML;
        switch(clkbtn){
            case "w" :
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;

            case "a" :
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;

            case "s" :
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;

            case "d" :
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;

            case "j" :
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;

            case "k" :
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;

            case "l" :
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;
            
                
        }
    });
}