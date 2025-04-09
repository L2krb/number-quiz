console.log("Hello Script");
let lives=document.getElementById("lives")
let secretNumber=Math.floor(Math.random()*10+1)
let hint=document.getElementById("hint")
let player="Ivan"
console.log(player);
let hp=3
console.log(typeof hp);
console.log(player, "has", hp, "hp");
let checkButton=document.getElementById("checkButton")
let playerInput=document.getElementById("playerInput")
console.log(checkButton);
checkButton.onclick=function(){
    if (secretNumber==playerInput.value){
        console.log("You win")
        lives.innerHTML="🏆🏆🏆"
        checkButton.style.display="none"
        newgame.style.left = "20px"
    }
    else{
        console.log("Incorrect");
        hp=hp-1
        lives.innerHTML="❤️".repeat(hp)
        if (secretNumber<playerInput.value){
            hint.innerHTML="Less"
        }
        else{
        hint.innerHTML="More"
        }
    }
    if (hp==0){
        lives.innerHTML="💀💀💀"
        hint.innerHTML=secretNumber
        checkButton.style.display="none"
    }
}
newgame.onclick=function(){
    secretNumber=Math.floor(Math.random()*10+1)
    hp=3
    lives.innerHTML="❤️".repeat(hp)
    hint.innerHTML="Enter number and click Check!"
    playerInput.value=''
    checkButton.style.display="inline-block"
}