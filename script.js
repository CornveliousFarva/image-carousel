// Button and image variable declarations
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// Image varialble declaration
const img = document.querySelectorAll('#imgs img')

// Initial settings of the index and the image time intervals
let idx = 0

let interval = setInterval(run, 2000)

// Run program
function run(){
    idx++
    changeImage()
}

// Change image function
function changeImage() {
    if(idx > img.length -1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

// Reset interval function
function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

// Button event listeners
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})