const cards = document.querySelector(".cards")


const data = [
   {
    img:"img/orig.avif",
    name:"Redmi Note 11",
   },
   {
    img:"img/168864850655809100246.avif",
    name:"Lenovo Ideapad",
   },
   {
    img:"img/168560874483759800532.avif",
    name:"Poco F5",
   } ,
   {
      img:"img/167989958464461100195.avif",
      name:"Xiaomi"
   },
   {
      img:"img/orig (1).avif",
      name:"Samsung A14"
   },
   {
      img:"img/orig (2).avif",
      name:"Samsung A54"
   },
   {
      img:"img/3133166909d7986de227abc629e1f080a96600a65761846d547d8d7e6d877e24.jpg.avif",
      name:"Samsung A24"
   },   
   {
      img:"img/168354876577496900506.avif",
      name:"Teno Pova"
   },  
   {
      img:"img/162108227196068800096.avif",
      name:"Pover Bank Xiaomi"
   },  
   {
      img:"img/168665549657846200908.avif",
      name:"Xiamomi Amazit"
   },  
   {
      img:"img/orig (3).avif",
      name:"Xiamomi Buds"
   },  
   
]


data.forEach((item)=>{
   cards.innerHTML+=`<div class="card">
   <img src="${item.img}" alt="">
   <h1>${item.name}</h1>
   <p>Narxlari Skidka Narxda</p>
   <p>2,450 ming So'm</p>
   <svg xmlns="http://www.w3.org/2000/svg" height="48"viewBox="0 -960 960 960" width="48"><path d="M465-613v-123H341v-60h124v-123h60v123h123v60H525v123h-60ZM289.788-80Q260-80 239-101.212q-21-21.213-21-51Q218-182 239.212-203q21.213-21 51-21Q320-224 341-202.788q21 21.213 21 51Q362-122 340.788-101q-21.213 21-51 21Zm404 0Q664-80 643-101.212q-21-21.213-21-51Q622-182 643.212-203q21.213-21 51-21Q724-224 745-202.788q21 21.213 21 51Q766-122 744.788-101q-21.213 21-51 21ZM290-287q-42 0-61.5-34t.5-69l61-111-150-319H62v-60h116l170 364h292l156-280 52 28-153 277q-9.362 16.667-24.681 25.833Q655-456 634-456H334l-62 109h494v60H290Z"/></svg>  

`
})
const number = document.querySelector(".box2")
const plus = document.querySelectorAll("svg")


plus.forEach((item)=>{
  item.addEventListener("click", () =>{
    num++
    number.textContent = num
  })
})

const options = {
    bottom: '64px',
    right:'unset',
    left:'32px',
    time:'0.5s ',

    mixColor:'#fff',
    backgroundColor:'#fff',
    buttonColorLight:'#fff',
    saveInCookies:'false',
    label:'Dark',
   
}
new Darkmode(options).showWidget();
const btn = document.querySelector(".btn")
const modal = document.querySelector(".modal")
function showModal(){
    modal.classList.add("active")
}
btn.addEventListener("click",showModal)


















