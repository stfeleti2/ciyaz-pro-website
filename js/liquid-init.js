/* Original Codrops CanvasSlideshow (vendor/codrops-liquid.js) lazy integration.
   Uses the actual PixiJS/TweenMax displacement effect, only on capable desktops.
   Mobile and failed downloads retain the static hero photography. */
(async()=>{
 const host=document.querySelector(".water-scene");
 if(!host||!matchMedia("(min-width:900px) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches)return;
 const c=document.createElement("canvas");
 if(!(c.getContext("webgl",{failIfMajorPerformanceCaveat:true})||c.getContext("experimental-webgl")))return;
 const load=(src)=>new Promise((res,rej)=>{let s=document.createElement("script");s.async=true;s.src=src;s.onload=res;s.onerror=()=>rej(new Error(src));document.head.appendChild(s)});
 try{
  for(const file of ["pixi.min.js","TweenMax.min.js","codrops-liquid.js"])await load("../vendor/"+file);
  if(!window.PIXI||!window.CanvasSlideshow)return;
  const sprites=[
   "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1600&q=78",
   "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=78"
  ];
  const slider=new CanvasSlideshow({
   sprites,autoPlay:true,autoPlaySpeed:[.32,.1],displaceScale:[95,55],
   displacementImage:"https://cdn.jsdelivr.net/gh/codrops/LiquidDistortion@master/img/dmaps/2048x2048/clouds.jpg",
   stageWidth:1920,stageHeight:1080,fullScreen:true
  });
  let next=0;
  const timer=setInterval(()=>{
   if(document.visibilityState==="hidden")return;
   const r=host.getBoundingClientRect();
   if(r.bottom<0||r.top>innerHeight)return;
   next=(next+1)%sprites.length;
   slider.moveSlider(next);
  },12000);
  addEventListener("pagehide",()=>clearInterval(timer),{once:true});
 }catch(e){console.warn("Liquid effect unavailable; static hero preserved.",e)}
})();