// Mario Vs Link

"use Strict";

// Functions

document.getElementById('mario-btn').addEventListener('click', mario)
document.getElementById('link-btn').addEventListener('click', link)
document.getElementById('btn-atk').addEventListener('click', attack)
document.getElementById('btn-start').addEventListener('click', lib)


// Function Mario
function mario() {
    document.getElementById('main-img').src = 'images/mario.png';
    document.getElementById('html').style.background = 'red';
    document.getElementById('body').style.background = 'pink';
    document.getElementById('hero').innerHTML = 'The Mushroom Kingdom';
    document.getElementById('love').innerHTML = 'Princess Peach';
    document.getElementById('nemesis').innerHTML = 'King Bowser';
    document.getElementById('href').innerHTML = 'Mario';
    document.getElementById('href').href = 'https://mario.fandom.com/wiki/MarioWiki';
}

// Function Link
function link() {
    document.getElementById('main-img').src = 'images/link.png';
    document.getElementById('html').style.background = 'green';
    document.getElementById('body').style.background = 'lightgreen';
    document.getElementById('hero').innerHTML = 'Hyrule';
    document.getElementById('love').innerHTML = 'Princess Zelda';
    document.getElementById('nemesis').innerHTML = 'Ganon';
    document.getElementById('href').innerHTML = 'Link';
    document.getElementById('href').href = 'https://zelda.fandom.com/wiki/Link';
}

// Function Calculate Attack
function attack() {
    // INPUT- Get numbers
    let num1 = Number(document.getElementById("matk").value);
    let num2 = Number(document.getElementById("latk").value);
    let num3 = Number(document.getElementById("mdef").value);
    let num4 = Number(document.getElementById("ldef").value);


    // PROCESS- Calculate
    let CalculateM = Math.floor((2 * num1 / num4) + 5);
    let CalculateL = Math.floor((num2 + 15) / num3);

    // OUTPUT- Display 
    document.getElementById("mario-atk").innerHTML = CalculateM;
    document.getElementById("link-atk").innerHTML = CalculateL;

}

// Start Battle
function lib() {

    //Declare variables as input friom each text box
    var first = document.getElementById("text1").value;
    var second = document.getElementById("text2").value;
    var third = document.getElementById("text3").value;


    //Final Result is the input processed into a paragraph

    document.getElementById("lib").innerHTML =
        "Once upon a time, a Mario with a " + first + "crashed into a Link dealing massive damage " + "which enraged Link forcing him to whip out his " + second + " dealing an insane amount of damage " + " causing the Great War between The Mushroom Kingdom and Hyrule to break out! " + "The heroes charged at each other for one last stand, screaming " + third + "their weapons clashed and clashed until they lost consciousness ";
}
