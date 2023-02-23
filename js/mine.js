
var arrayofqouts=[
    {
        "auther": " ' Anaïs Nin '",
        "qoute": " ' We write to taste life twice, in the moment and in retrospect '."
    },
    {
        "auther":' " Masashi Kishimoto " ',
        "qoute": ' "When a man learns to love, he must bear the risk of hatred." '
    },
    {
        "auther": ' "John Paul Warren" ',
        "qoute": ' "Let the world know what you live for...not what you fall for!" '
    },   
    {
        "auther": ' "Lee Argus" ',
        "qoute": ' "Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades" ',
    },   
    {
        "auther": ' "JJohn Paul Warren" ',
        "qoute": ' "Together we are better" '
    },   
    {
        "auther": ' "Eleanor Roosevelt" ',
        "qoute": ' "Learn from the mistakes of others. You cant live long enough to make them all yourself." '
    },   
    {
        "auther": ' "Tal bekerman" ',
        "qoute": ' "life isnt about black and whitelook around and you will see that the world is much more colorful than you thought" '
    },   
    {
        "auther": ' " Jayson Engay" ',
        "qoute": ' "The day I open my eyes to you, was also the day I open my heart to you" '
    },   
    {
        "auther": ' " Motorhead" ',
        "qoute": ' "Everything changes, it all﻿ stays the same Everyone guilty no one to blame Every way out brings you back to the start Everyone dies to break somebodys heart..." '
    },   
    {
        "auther": ' "  Tom Hiddleston " ',
        "qoute": ' "We all have two lives. The second one starts when we realize we only have one" '
    },   
]

function randemselctor(arraylength){
    return Math.floor(Math.random() * arraylength);
}

function generateqoute(){
    var randemNamber=randemselctor(arrayofqouts.length);
    document.getElementById("qouteOutput").innerHTML=arrayofqouts[randemNamber].qoute;
    document.getElementById("authorOutput").innerHTML=arrayofqouts[randemNamber].auther;
}