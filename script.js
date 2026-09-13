const button=document.getElementById("discordButton");
const toast=document.getElementById("toast");
button.addEventListener("click",async()=>{try{await navigator.clipboard.writeText("morasainz.");toast.textContent="Discord morasainz. disalin."}catch{toast.textContent="Username Discord: morasainz."}toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1900)});