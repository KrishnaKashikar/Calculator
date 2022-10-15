function setTime() {
    let date=new Date() ;
let time=date.toLocaleTimeString();
console.log(time)
document.getElementById('time').innerHTML=time 
setTimeout(setTime,1000)
}
setTime()
for(let i=1;i<=100;i++)
{
    console.log(i);
}
prompt(name)