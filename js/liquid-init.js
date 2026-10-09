/* Direct adaptation of Codrops Liquid Distortion Demo 1 image set and physics.
 * Original visual sources: https://github.com/codrops/LiquidDistortion
 * Its exact three Demo-1 photographs and displacement texture are requested.
 * On touch/reduced-motion devices the site uses a lightweight fallback.
 */
(async()=>{
 const host=document.querySelector(".water-scene");
 if(!host||!matchMedia("(min-width:900px) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches)return;
 const test=document.createElement("canvas");
 if(!(test.getContext("webgl",{failIfMajorPerformanceCaveat:true})||test.getContext("experimental-webgl")))return;
 const load=(src)=>new Promise((resolve,reject)=>{
  const el=document.createElement("script");el.async=true;el.src=src;
  el.onload=resolve;el.onerror=()=>reject(new Error("Missing dependency: "+src));
  document.head.appendChild(el);
 });
 try{
  for(const name of ["pixi.min.js","TweenMax.min.js","codrops-liquid.js"])await load("../vendor/"+name);
  if(!window.PIXI||!window.CanvasSlideshow)return;
  const original="https://raw.githubusercontent.com/codrops/LiquidDistortion/master/img/";
  const sprites=["1.jpg","2.jpg","3.jpg"].map(name=>original+name);
  const slider=new CanvasSlideshow({
   sprites,
   displacementImage:original+"dmaps/2048x2048/clouds.jpg",
   autoPlay:true,autoPlaySpeed:[10,3],displaceScale:[200,70],
   interactive:true,interactionEvent:"hover",
   stageWidth:1920,stageHeight:1080,fullScreen:true
  });
  host.classList.add("has-liquid");
  let next=0;
  const timer=setInterval(()=>{
   if(document.visibilityState==="hidden")return;
   const rect=host.getBoundingClientRect();
   if(rect.bottom<0||rect.top>innerHeight)return;
   next=(next+1)%sprites.length;
   slider.moveSlider(next);
  },13000);
  addEventListener("pagehide",()=>clearInterval(timer),{once:true});
 }catch(error){
  console.warn("Codrops liquid effect could not load; still image fallback active.",error);
 }
})();