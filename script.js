const Base_url =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");



// for(let crrCode in countryList){
//     console.log(crrCode);
// }
for(let select of dropdowns)
{

    for(crrCode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=crrCode;
        newOption.value=crrCode;
        select.append(newOption);
        if(select.name==="from" && crrCode==="USD"){
            newOption.selected ="selected";   
        }
        else if(select.name==="to" && crrCode==="INR"){
            newOption.selected ="selected";
        }
    }    

    select.addEventListener("change",(evt) => {
        updatFlag(evt.target);
    })
}

const updatFlag= (element) => {
    let crrCode=element.value;
    let countrCode=countryList[crrCode];
    let newSrc=`https://flagsapi.com/${countrCode}/flat/64.png`
    element.parentElement.querySelector("img").src=newSrc;
}

const button = document.querySelector("#btn");
const fromCrr = document.querySelector(".from select");
const toCrr = document.querySelector(".to select");
const msg = document.querySelector(".msg");



button.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue ==" " || amtValue<1 ){
        amtValue="1";
    }
    const URL =`${Base_url}/${fromCrr.value.toLowerCase()}/${toCrr.value.toLowerCase()}.json`;
    let response =  await fetch(URL);
    let data = await response.json();
    let rate = data[toCrr.value.toLowerCase()];
    let finalAmt=rate*amtValue;
    msg.innerText=`${amtValue} ${fromCrr.value} = ${rate} ${toCrr.value}`;
})


