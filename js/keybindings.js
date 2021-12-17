const playerSprite1 = new Image()
playerSprite1.src = "image/tanjiro-2.png"
const background = new Image()
background.src = "image/dungeonbackground.png"
const healthbar = document.querySelector('#healthnbr')
// const canvas = document.getElementById('Background1')
// const  ctx = canvas.getContext('2d')
// canvas.width = 800
// canvas.height = 500


const player = {
    x: 200,
    y: 300,
    width: 60,
    height: 60,
    frameX: 0,
    frameY: .5,
    speed: 15,
    moving: false,
    health: 100
}


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function handlePlayerFrame(){
    if (player.frameX < 3) {
        player.frameX++
    } else {
        player.frameX = 0
        // player.frameY = .5
    }
}

function handlePlayerAttackFrame1(){
    let counter = 0
    const playerInterval = setInterval(()=> {
        player.frameX++
        counter++
        if (counter === 15) {
            clearInterval(playerInterval)
        } 
    }, 100)
}

function handlePlayerAttackFrame2(){
    let counter = 0
    const playerInterval = setInterval(()=> {
        player.frameX++
        counter++
        if (counter === 9) {
            clearInterval(playerInterval)
        } 
    }, 200)
}

function handlePlayerAttackFrame3(){
    let counter = 0
    const playerInterval = setInterval(()=> {
        player.frameX++
        counter++
        if (counter === 7) {
            clearInterval(playerInterval)
        } 
    }, 250)
}

function handlePlayerAttackFrame4(){
    let counter = 0
    const playerInterval = setInterval(()=> {
        player.frameX++
        counter++
        if (counter === 12) {
            clearInterval(playerInterval)
        } 
    }, 200)
}

function movePlayer(e){
    if (e.key === "w" && player.y > -15){
        player.y -= player.speed
        player.frameY = 2.89
        handlePlayerFrame()
    } 
    if (e.key === "a" && player.x > 0){
        player.x -= player.speed
        player.frameY = 2.89
        handlePlayerFrame()
    }
    if (e.key === "s" && player.y < canvas.height - player.height){
        player.y += player.speed
        player.frameY = 2.89
        handlePlayerFrame()
    }
    if (e.key === "d" && player.x < canvas.width - player.width){
        player.x += player.speed
        player.frameY = 2.89
        handlePlayerFrame()
    }
}    
   
function attack(e) {
    if (e.key === "q") {
        player.frameY = 6.5
        handlePlayerAttackFrame1()
    }
    if (e.key === "e") {
        player.frameY = 4.5
        handlePlayerAttackFrame2()
    }
    if (e.key === "r") {
        player.frameY = 8.4
        player.frameX = 4
        handlePlayerAttackFrame3()
    }
    if (e.key === "t") {
        player.frameY = 10.15
        player.frameX = 0
        handlePlayerAttackFrame4()
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    drawSprite(playerSprite1, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x , player.y, player.width, player.height)
    for (i = 0; i < characters1.length; i++){
        characters1[i].draw()
        characters1[i].update() 
    }
    // for (let i = 0; i < characters1.length; i++){
    //     if (detectCollisions(player, characters1[i])){
    //         characters1.splice(i, 1);
    //     }
    // }
    //detectCollisions()
    requestAnimationFrame(animate)
}


window.addEventListener("keydown", function(e){
    console.log(e.key)
    movePlayer(e)
    attack(e)
    player.moving = true
})

window.addEventListener("keydown", function(e){
    if (e.key === "e" || e.key === "r" || e.key === "t" || e.key === "q"){
        detectCollisions();
    } 
})


window.addEventListener("keyup", function(e){
    if (e.key === "a" || e.key === "s" || e.key === "d" || e.key === "w"){
        player.moving = false 
        player.frameY = .5
        player.frameX = 0
    }
})

function detectCollisions() {
    for (let i = 0; i < characters1.length; i++){
        if (characters1[i].x > player.x && characters1[i].x < player.x + player.width && characters1[i].y > player.y && characters1[i].y < player.y + player.height) {
            console.log("collision")
            characters1.splice(i, 1);
            player.health -= 100
            healthbar.innerHTML = `Health: ${player.health}`
            if (healthbar === 'Health: 0') {
                alert('Game Over')
            }
        }
    }
 }

 function Heal() {
    const restorehlth = document.querySelector('#health')
    restorehlth.addEventListener('click', (event) => {
        player.health += 10
        healthbar.innerHTML = `Health: ${player.health}`
    })
 }

 function alerts() {
     if (healthbar === 0) {
        console.log("You Lost") 
        alert("Game Over")
     }
 }
 
 Heal()
animate()
alerts()

//////////////////////////////////////////////// Other attmepts at different methods////////////////////////////////////
// function draw() {
// ctx.draw
// var x = canvas.width / 2 
// var y = canvas.height / 2 
// var r = 45 
// }

// draw()

// function collisions(player, characters1) {
//     return ( player.x > characters1.x + characters1.width &&
//             player.x + player.width < characters1.x &&
//             player.y > characters1.y + characters1.height &&
//             player.y + player.height < characters1.y)
// }