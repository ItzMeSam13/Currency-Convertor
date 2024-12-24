const Base_Url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-23/v1/currencies"
const dropdown= document.querySelectorAll(".dropdown select");
const From=document.querySelector(".From");
const To=document.querySelector(".To");
const btn=document.querySelector("form button");
const message=document.querySelector(".msg");
let countrycode;
let amtvalue;

for(let select of dropdown){
    for(code in countryList){
    let el=document.createElement("option");
    el.innerText=code;
    el.value=code;
    select.append(el);
    if(select.name=="from"&&code=="USD")
        el.selected="selected"
    }
    if(select.name=="to"&&code=="INR")
        el.selected="selected";
    select.addEventListener("change",(ev)=>{
        flag(ev.target);
    })
}
const flag = (element)=>{
    let currcode = element.value;
    let countryCode=countryList[currcode];
    let newsource = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = newsource;
}
btn.addEventListener("click",async (ev)=>{
    ev.preventDefault();
    let amt = document.querySelector(".amount input");
    amtvalue = amt.value;
    if(amtvalue == "" || amtvalue<0){
        amt.value=1;
        amtvalue=1;
    }
        
            for(code in countryList)
                if(code==From.value){
            const  url=`${Base_Url}/${code.toLowerCase()}.json`;
            let response=await fetch(url);
            let rate=await response.json();
            let c=code.toLowerCase();
            let b=To.value.toLowerCase();
            let finalamt=amt.value*rate[c][b];
            message.innerText=`${amtvalue} ${c.toUpperCase()} = ${finalamt} ${b.toUpperCase()}`;

                }
            });
            


