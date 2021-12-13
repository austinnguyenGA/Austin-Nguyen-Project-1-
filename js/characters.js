
// Class for all playable characters

class Player {
  constructor(name, health, damage, defense, skills) {
      this.name = name,
      this.health = health,
      this.damage = damage,
      this.defense = defense,
      this.skills = skills

  }
}
// add more things to constructor later

class Tanjiro extends Player {
  constructor() {
    super("Tanjiro", 100, [10, 15, 20], 10, {
      attack1: "Water Surface Slash",
      attack2: "Striking Tide",
      attack3: "Constant Flux"
    })
    this.ult = "Hinokami Kagura"
    this.ultdamage =  100
  }
}

class Deku extends Player {
  constructor() {
    super("Deku", 100, [10, 15, 20], 10, {
      attack1: "Full Cowl",
      attack2: "Black Whip",
      attack3: "Fa Jin"
    })
    this.ult = "One For All 100%"
    this.ultdamage = 100
  }
}

class Kakashi extends Player {
  constructor() {
    super("Kakashi", 100, [10, 15, 20], 10, {
      attack1: "Doiru Suiyari",
      attack2: "Futon Kazekiri",
      attack3: "Katon Engeki",
    })
    this.ult = "Shiden"
    this.ultdamage = 100
  }
}

class Gojo extends Player {
  constructor() {
    super("Gojo", 100, [10, 15, 20], 10, {
      attack1: "Black Flash",
      attack2: "Lapse Blue",
      attack3: "Hollow Purple",
    })
    this.ult = "Unlimited Void"
    this.ultdamage = 100
  }
}

const tanjiro = new Tanjiro()
const deku = new Deku()
const kakashi = new Kakashi()
const gojo = new Gojo()
// console.log(tanjiro)
// console.log(deku)
// console.log(kakashi)
// console.log(gojo)



const characterSelection = {
  player: " ",

}

// const charSelect = document.querySelector(".characterSelection")
// charSelect.addEventListener('click', (event) => {
//   if (event.target.id === "Tanjiro") {
//     characterSelection.player = tanjiro
//   } else if
//     (event.target.id === "Deku") {
//       characterSelection.player = deku
//     } else if
//       (event.target.id === "Kakashi") {
//         characterSelection.player = kakashi
//       } else if
//         (event.target.id === "Gojo") {
//           characterSelection.player = gojo
//         }
//         confirm(`Are you sure that you want to select ${characterSelection.player " "}?`)
//         return characterSelection.player
//   })
function confirmSelect() {
  const charSelect = document.querySelector(".characterSelection")
  charSelect.addEventListener('click', (event) => {
    if (event.target.id === "Tanjiro") {
      characterSelection.player = tanjiro
    } else if
        (event.target.id === "Deku") {
          characterSelection.player = deku
    } else if
        (event.target.id === "Kakashi") {
          characterSelection.player = kakashi
    } else if
        (event.target.id === "Gojo") {
          characterSelection.player = gojo
    }
      let choice = confirm("Do you want to play with this character?")
      if choice = true {

      } else {

      }
      })
  }

  // console.log(characterSelection)
confirmSelect()
console.log(characterSelection.player)
