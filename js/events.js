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

/* Ticket holographic optical timelines adapted from Simeydotme's 3D Pen.
   https://codepen.io/simeydotme/pen/QWJqRvB
   Our ticket flips only on tap/click; there is no forced auto-rotation. */
(()=>{
 const stage=document.querySelector(".ticket-stage");
 const card=document.getElementById("flip-ticket");
 if(!stage||!card)return;
 const reduced=matchMedia("(prefers-reduced-motion:reduce)").matches;
 const pointer=matchMedia("(pointer:fine)").matches;
 if(pointer&&!reduced){
  let queued=false;
  card.addEventListener("pointermove",e=>{
   if(queued)return;
   queued=true;requestAnimationFrame(()=>{
    const b=card.getBoundingClientRect();
    const x=Math.max(-.5,Math.min(.5,(e.clientX-b.left)/b.width-.5));
    const y=Math.max(-.5,Math.min(.5,(e.clientY-b.top)/b.height-.5));
    card.style.setProperty("--tilt-y",(x*12).toFixed(2)+"deg");
    card.style.setProperty("--tilt-x",(-y*10).toFixed(2)+"deg");
    stage.style.setProperty("--foil-x",(50+x*80)+"%");
    queued=false;
   });
  },{passive:true});
  card.addEventListener("pointerleave",()=>{
   card.style.setProperty("--tilt-x","0deg");
   card.style.setProperty("--tilt-y","0deg");
  });
 }
 if(reduced||!window.gsap)return;
 const light=gsap.timeline({repeat:-1,paused:true})
  .to(stage,{"--foil-x":"100%","--foil-p":"50%",duration:4,ease:"sine.inOut"})
  .to(stage,{"--foil-x":"0%","--foil-p":"100%",duration:4,ease:"sine.inOut"});
 const opacity=gsap.timeline({repeat:-1,paused:true})
  .to(stage,{"--foil-o":.8,duration:3.5,ease:"power1.inOut"})
  .to(stage,{"--foil-o":.23,duration:3.5,ease:"power1.inOut"});
 const observer=new IntersectionObserver(entries=>{
  entries[0].isIntersecting?(light.play(),opacity.play()):(light.pause(),opacity.pause());
 },{threshold:.08});
 observer.observe(card);
})();
