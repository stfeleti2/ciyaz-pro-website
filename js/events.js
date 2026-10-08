/* First-pass lightweight interaction. Original Codrops Pixi liquid effect
   is intentionally NOT bundled yet. See README roadmap for exact source integration. */
const ticket=document.getElementById("flip-ticket");
if(ticket)ticket.addEventListener("click",()=>{
 const flipped=ticket.getAttribute("aria-pressed")==="true";
 ticket.setAttribute("aria-pressed",String(!flipped));
});
const hero=document.querySelector(".event-hero");
if(hero && matchMedia("(pointer:fine) and (prefers-reduced-motion:no-preference)").matches){
 let queued=false,x=60,y=60;
 hero.addEventListener("pointermove",e=>{
  const rect=hero.getBoundingClientRect();
  x=Math.min(100,Math.max(0,(e.clientX-rect.left)/rect.width*100));
  y=Math.min(100,Math.max(0,(e.clientY-rect.top)/rect.height*100));
  if(queued)return;queued=true;
  requestAnimationFrame(()=>{hero.style.setProperty("--mx",x+"%");hero.style.setProperty("--my",y+"%");queued=false});
 },{passive:true});
}
const teaser=document.querySelector(".november");
if(teaser){const obs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){teaser.classList.add("is-visible");obs.disconnect()}},{threshold:.28});obs.observe(teaser)}
