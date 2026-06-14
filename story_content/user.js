function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5w9IK0zMn2Z":
        Script1();
        break;
      case "646PE8MoSUq":
        Script2();
        break;
      case "6bSbNrwvLV6":
        Script3();
        break;
      case "5rvKDycfnLl":
        Script4();
        break;
      case "5cLrv3oXvom":
        Script5();
        break;
      case "5udo7rARwJf":
        Script6();
        break;
      case "6idpKoilOyu":
        Script7();
        break;
      case "6HA8LQ4FPfH":
        Script8();
        break;
      case "5s3nEjLXztY":
        Script9();
        break;
      case "6UIaHLNLZdW":
        Script10();
        break;
      case "5tDYJ6087yl":
        Script11();
        break;
      case "5fCM42qKyr7":
        Script12();
        break;
      case "6lNjZpMxbxs":
        Script13();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  // Mengambil objek audio berdasarkan ID yang sudah dibuat sebelumnya
var audio = document.getElementById('bgSong');

// Jika audio ditemukan, hentikan putarannya
if (audio !== null) {
    audio.pause();
    console.log("Backsound berhasil dihentikan pada slide ini.");
}
}

function Script8()
{
  var audio = document.getElementById('bgSong');

// Jika audio ada dan dalam kondisi berhenti, putar kembali
if (audio !== null && audio.paused) {
    audio.play();
    console.log("Backsound dilanjutkan kembali.");
}
}

function Script9()
{
  var iframes = document.getElementsByTagName('iframe');
for (var i = 0; i < iframes.length; i++) {
    if (typeof iframes[i].contentWindow.downloadPDF === 'function') {
        iframes[i].contentWindow.downloadPDF();
        break;
    }
}
}

function Script10()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE") {
        var player = GetPlayer();
        player.SetVar("GameLevel1", true);
    }
}, false);
}

function Script11()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE_2") {
        var player = GetPlayer();
        player.SetVar("GameLevel2", true);
    }
}, false);
}

function Script12()
{
  // Membuat pendengar pesan
window.addEventListener("message", function(event) {
    // Cek apakah isi pesannya sesuai
    if (event.data === "GAME_COMPLETE_3") {
        var player = GetPlayer();
        player.SetVar("GameLevel3", true);
    }
}, false);
}

function Script13()
{
  // Mencari semua Web Object (iframe) di dalam slide
var iframes = document.getElementsByTagName('iframe');

// Melakukan iterasi untuk mencari iframe yang memiliki fungsi downloadPDF
for (var i = 0; i < iframes.length; i++) {
    if (typeof iframes[i].contentWindow.downloadPDF === 'function') {
        // Memanggil fungsi eksekusi PDF yang ada di dalam HTML Web Object
        iframes[i].contentWindow.downloadPDF();
        break; // Hentikan pencarian jika sudah ketemu
    }
}
}

