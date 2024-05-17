console.log("Hello Nikith");
const hourEl=document.getElementById("hour");
const minutesEl=document.getElementById("Mins");
const secondsEl=document.getElementById("Sec");
const ampmEl=document.getElementById("ampm");
function updateClock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="Am" 
    if(h > 12)
    h=h-12;
    ampm="PM"
    hourEl.innerText=h;
minutesEl.innerText=m;
secondsEl.innerText=s;
ampmEl.innerText=ampm;
setTimeout(()=>{
updateClock()
},1000);
}

updateClock();
add
