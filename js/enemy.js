const images = {}
images.enemy1 = new Image()
images.enemy1.src = "image/satoru_gojo.png"
console.log("check")

const canvas = document.getElementById('Background1')
const  ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

const enemyActions1 = ['up', 'top', 'right', 'right', 'down right', 'down']
const numberOfEnemies1 = 100
const characters1 = [] 
class enemyOne {
    constructor(){
        this.width = 27
        this.height = 45
        this.frameX = .4
        this.frameY = .765
        this.x =  Math.random() * canvas.width - this.width
        this.y =  Math.random() * canvas.height -this.height
        this.speed = .5 
        this.minFrame = 0 
        this.action = enemyActions1[Math.floor(Math.random() * enemyActions1.length)]
        if (this.action === 'up') {
            this.frameY = .765; 
            this.minFrame = 0; // 4: 12?
            this.maxFrame = 0; // 15: 15? 
        }
        else if (this.action === 'top right') {
            this.frameY = .765; // 1 : 12 ?
            this.minFrame = 0; // 4 : 12?
            this.maxFrame = 0; // 14 : 15?
        }
        else if (this.action === 'right') {
            this.frameY = .765; // 3 : 12?
            this.minFrame = 0; // 3 : 12?
            this.maxFrame = 0; // 13 : 15?
        }
        else if (this.action === 'down right') {
            this.frameY = .765; // 4 : 12?
            this.minFrame = 0; // 4 : 12?
            this.maxFrame = 0; // 15 : 15?
        } 
        else if (this.action === 'down') {
            this.minFrame = 0;
            this.frameY = .765; //6 : 12?
            this.maxFrame = 0; //12 : 15?
        }
        else if (this.action === 'jump') {
            this.minFrame = 0;
            this.frameY = .765; // 7 : 12?
            this.maxFrame = 0; // 9 : 15?
        }

    }
    draw(){
        drawSprite(images.enemy1, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width * 1.5, this.height * 1.5)
    
        if (this.frameX < this.maxFrame) this.frameX++
        else this.frameX = this.minFrame
    }
    update(){
        if (this.action === 'up') {
            if (this.y < 0 - (this.height * 5)) {
                 this.y = canvas.height + this.height
                 this.x = Math.random() * canvas.width
                 this.speed = .5 //(Math.random() * 2) 
             } else {
                 this.y -= this.speed  
             }
         }
         else if (this.action === 'top right') {
             if (this.y < 0 - this.height && this.x > canvas.width + this.width) {
                 this.y = canvas.height + this.height
                 this.x = Math.random() * canvas.width
                 this.speed = .5 //(Math.random() * 2) 
             } else {
                 this.y -= this.speed 
                 this.x += this.speed 
             }
         }
         else if (this.action === 'right') {
             if (this.x > canvas.width + (this.width * 5)) {
                 this.x = 0 - this.width
                 this.y = Math.random() * canvas.height 
                 this.speed = .5 //(Math.random() * 2) 
             } else {
                 this.x += this.speed; 
             }
         }
         else if (this.action === 'down right') {
             if (this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
                 this.y = 0 - this.height
                 this.x = Math.random() * canvas.width
                 this.speed = .5 //(Math.random() * 2) 
             } else {
                 this.y += this.speed 
                 this.x += this.speed 
             }
         } 
         else if (this.action === 'down') {
             if (this.y > canvas.height + (this.height * 5)) {
                 this.y = 0 - this.height
                 this.x = Math.random() * canvas.width
                 this.speed = .5 //(Math.random() * 2) 
             } else {
                 this.y += this.speed
             }
         }
         else if (this.action === 'jump') {
 
         }
    }
}
for (i = 0; i < numberOfEnemies1; i++){
    characters1.push(new enemyOne())
}
console.log(characters1)

function drawSprite1(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage1(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

// function animate1(){
//     ctx.clearRect(0,0,canvas.width, canvas.height)
//     for (i = 0; i < characters1.length; i++ ){
//         characters1[i].draw()
//         characters1[i].update()
//     }

// }
// const enemy1 = new enemyOne() 
// window.onload = setInterval(animate1, 1000/20)

// window.addEventListener('resize', function(){
//     canvas.height = window.innerHeight
//     canvas.width = window.innerWidth
// })
    
//console.log(characters1)
function win(){
if (characters1.length < 1) {
    alert("You've Won!")
    }
}
win()