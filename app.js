const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const time = document.querySelector('#time-left')
let score = document.querySelector('#score')
let result = 0
let currrenTime = timeLeft.textContent

//function to assign mole to random square
function randomSquare() {
    //removes any mole image that might be on a square
    square.forEach(className => {
            className.classList.remove('mole')
        })
        //selects a random number and assigns a mole to the square with corresponding number
    let randomPosition = square[Math.floor(math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPositon to hit position for
    hitPosition = randomPosition.id
}

//for each function on each square 
square.forEach(id => {
    //we listen to a click on any square
    id.addEventListener('mouseup', () => {
        //we use the id clicked to compare it to the id of the square with the mole
        if (id.id === hitposition) {
            //if the ids match 1 is added to the result
            result = result + 1
                //the result is then put in our score
            score.textContent = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over!!! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)