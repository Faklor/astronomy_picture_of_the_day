import anime from "animejs"

const slyder = ()=>{
    anime({
        targets:'.slyder',
        scale:[0,1],
        duration: 500,
        opacity:[0,1],
        easing: 'easeInOutExpo',
        delay:500,
    })
}


export{
    slyder
}