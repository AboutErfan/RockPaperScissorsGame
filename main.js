/**
 * 
 * 
 * Project: Rock, Paper, Scissors Game Tutorial
 * Author: Erfan Valizadeh
 * 
 * 
 */

const userChoose = prompt('Choose One Of Rock, Paper, Scissors?');

const computerChooses = ['Rock','Paper','Scissors'];

const computerChoose = computerChooses[Math.floor(Math.random() * computerChooses.length)];

console.log(`Your Choose Is: ${userChoose}`);
console.log(`Computer Choose Is: ${computerChoose}`);

if(userChoose)
{
    if (userChoose === computerChoose)
    {
        console.log('Draw!');
    }
    else if (userChoose === "Rock" && computerChoose !== "Paper")
    {
        console.log("You Won!");
    }
    else if (userChoose === "Scissors" && computerChoose !== "Rock")
    {
        console.log("You Won!");
    }
    else if (userChoose === "Paper" && computerChoose !== "Scissors")
    {
        console.log("You Won!");
    }
    else
    {
        console.log("You Lose!");
    }
}
else
{
    console.log("You're Cheating!")
}