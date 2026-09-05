const sleep = ms => new Promise(r => setTimeout(r, ms));
async function boot(){
  const bar=document.getElementById("progress"), text=document.getElementById("bootText");
  const msgs=["Inicializando algo especial...","Cargando recuerdos...","Verificando lo hermosa que eres...","Sistema listo ❤️"];
  for(let i=0;i<=100;i+=4){bar.style.width=i+"%"; if(i%24===0) text.textContent=msgs[Math.min(Math.floor(i/24),msgs.length-1)]; await sleep(45);}
  await sleep(350); document.getElementById("loader").classList.add("hide");
}
window.addEventListener("load",boot);
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}
function openLetter(){
  document.getElementById("envelope").style.display="none";
  document.getElementById("letterContent").classList.add("show");
  setTimeout(()=>document.getElementById("letterContent").scrollIntoView({behavior:"smooth",block:"start"}),100);
}

const musicBtn = document.getElementById("musicBtn"); 
const music = document.getElementById("backgroundMusic");

// Intentar reproducir automáticamente al cargar la página
window.addEventListener("load", () => {
   music.play()
    .then(() => {
      // El navegador permitió el autoplay
      musicBtn.innerHTML = "⏸️";
    })
    .catch(() => {
      // El navegador bloqueó el autoplay
      console.log("El navegador bloqueó la reproducción automática.");
      musicBtn.innerHTML = "🎵"; 
    });
  }
);
  
musicBtn.addEventListener("click", () => { 
  if (music.paused) {
     music.play(); musicBtn.innerHTML = "⏸️"; 
  } else {
     music.pause(); musicBtn.innerHTML = "🎵"; 
  } 
});