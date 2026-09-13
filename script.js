const button=document.getElementById("discordButton");
const toast=document.getElementById("toast");
const backTop=document.getElementById("backTop");

button?.addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText("morasainz.");toast.textContent="Discord morasainz. disalin."}
  catch{toast.textContent="Username Discord: morasainz."}
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1900);
});

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
  backTop.classList.toggle("show",window.scrollY>500);
},{passive:true});

backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
