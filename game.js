var buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
}

var randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
sound.play();

$("button").click(function (event) {
    var userChosenColour = $(this).attr("id");
});

userClickedPattern.push(userChosenColour);