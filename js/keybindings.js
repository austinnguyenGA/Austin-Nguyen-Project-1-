const canvas = document.getElementById('Background')
const  ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

const keys = [] 

const player = {
    x: 0,
    y: 0,
    width: 50,
    height: 103,
    frameX: 0,
    frameY: 0,
    speed: 9,
    moving: false,
}

const playerSprite1 = new Image()
playerSprite1.src = "tanjiro.png"
// const background = new Image()
// background.src = "background1png"

function drawSprite(img, sx, sy, sw, sh, dx, dy, dw, dh){
    ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    drawSprite(playerSprite, 200, 200, player.width, player.height, 0 ,0, player.width, player .height)
    requestAnimationFrame(animate)
}
animate()

window.addEventListener("keydown", function(e){
    keys[e.keys] = true
})
window.addEventListener("keyup", function(e){
    delete keys[e.keys]
})