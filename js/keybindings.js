const playerSprite1 = new Image()
playerSprite1.src = "image/tanjiro-2.png"
const background = new Image()
background.src = "image/dungeonbackground.png"

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
    speed: 12,
    moving: false,
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
    if (e.key === "w" && player.y > 100){
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
    for (i = 0; i < characters1.length; i++ ){
        characters1[i].draw()
        characters1[i].update()
    }
    requestAnimationFrame(animate)
}
animate()

window.addEventListener("keydown", function(e){
    console.log(e.key)
    movePlayer(e)
    attack(e)
    player.moving = true
})


window.addEventListener("keyup", function(e){
    if (e.key === "a" || e.key === "s" || e.key === "d" || e.key === "w"){
        player.moving = false 
        player.frameY = .5
        player.frameX = 0
    }
})


