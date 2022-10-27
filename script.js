function getComputerChoice(){ 
 let rock = Math.floor(Math.random()* 3) +1
 let paper = Math.floor(Math.random()* 3) +1
 let scissor = Math.floor(Math.random()* 3) +1
 let full = Math.floor(Math.random()* 3) +1
 if (full === rock){
    console.log('Rock!')
 } else if (full === paper) {
    console.log('Paper!') 
 } else if (full === scissor) {
     console.log('Scissor!')
 }
} 

getComputerChoice()

