const target=new Date("2026-08-15T10:00:00");
function tick(){
 const diff=target-new Date();
 if(diff<=0){
   countdown.textContent="000:00:00";
   return;
 }
 const total=Math.floor(diff/1000);
 const hrs=Math.floor(total/3600);
 const mins=Math.floor((total%3600)/60);
 const secs=total%60;
 countdown.textContent=
 String(hrs).padStart(3,"0")+":"+
 String(mins).padStart(2,"0")+":"+
 String(secs).padStart(2,"0");
}
tick();
setInterval(tick,1000);
