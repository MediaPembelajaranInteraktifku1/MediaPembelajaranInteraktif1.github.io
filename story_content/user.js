window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementByid('bgSoundku');
audio.scr="musikku.mp3";
audio.load();
audio.play();
audio.volume=0,3;
}

};
