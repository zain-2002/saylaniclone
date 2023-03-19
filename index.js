
const myButton = document.getElementById("abd");
const myDiv = document.getElementById("ifif");

myButton.addEventListener("click", function() {
  myDiv.style.opacity = "1";
  myDiv.style.height="100%";
  myButton.style.display="none";
  
});
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '4ep7zySM3sQ',
   
  });
}
document.getElementById('abd').addEventListener('click', function() {
  document.getElementById('player').style.display = 'block';
  player.playVideo();
});

