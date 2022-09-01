tab= document.querySelector(".tabs")
search = document.querySelector(".search")
const Orderr = [];
var total=0
// barss.addEventListener("click", myScript());
function tamount() {
    s=(total * 5) / 100;
    console.log(Math.round(s));
    document.getElementById("tam").innerText=Math.round(s)+total

}

function myscript() {
    tab.classList.toggle("active");
    console.log(tab);
}
function myscript2() {
    search.classList.toggle("activea");
    console.log(search);
}
setInterval(myFunction, 5000);
setInterval(myFunction2, 10000);
// setInterval(myFunction, 2000);
// setInterval(myFunction2, 3000);

document.querySelector(".v").style="display:none;"
function myFunction() {
    document.querySelector(".v").style="display:block;"
    document.querySelector(".a").style="display:none;"

}
function myFunction2() {
    document.querySelector(".v").style="display:none;"
    document.querySelector(".a").style="display:block;"
}

window.onscroll=()=>{
    if (scrollY > 20) {
        // console.log("a");
        // console.log(window.scrollY);
    
    document.querySelector(".btunn").style="display:block; bottom: 20px;"

    }
    else{
    document.querySelector(".btunn").style="display:block; bottom: 3000px;"

    }

}

const bada = document.querySelector(".bada")
const items = document.querySelector(".items")
bada.addEventListener("click",()=>{
    let item = document.createElement("div")
    item.classList.add("item")
    Orderr.push("Bada")
    console.log(Orderr);
    let img = document.createElement("img")
    img.src = "../images/imageedit_9_5127330425.png"
    let price = document.createElement("input")
    price.setAttribute("readonly","readonly")
    value=99
    let pricee = document.createElement("h2")
    pricee.classList.add("pricee")
    pricee.innerText="₹ 99 /-"
    let h2 = document.createElement("h2")
    h2.innerText="Bada Burger Bro"
    h2.style="color:#000;"
    let icons = document.createElement("div")
    icons.classList.add("icons")
    let trash = document.createElement("a")
    trash.innerText=" Delete"
    trash.classList.add("button_slide")
    trash.classList.add("trash")
    trash.classList.add("slide_right")
    trash.style="color:#000;"
    item.appendChild(pricee)

    icons.appendChild(trash)
    item.appendChild(img)
    item.appendChild(h2)
    items.appendChild(item)
    item.appendChild(icons)
    item.appendChild(pricee)
    console.log(value);
    console.log("23");
    total+=value
    tamount()
    localStorage.setItem("Name",h2.innerText)
    localStorage.setItem("Price",value)
    trash.addEventListener("click",()=>{
        items.removeChild(item)
        total-=value
        Orderr.pop("Bada")

        tamount()
        console.log(localStorage);
    })
    document.querySelector(".q").addEventListener("click",()=>{
        console.log(h2.innerText);
    })

    console.log(localStorage);
})
function chotta2(){
    let item = document.createElement("div")
    item.classList.add("item")
    Orderr.push("Bada")

    let price = document.createElement("input")
    price.setAttribute("readonly","readonly")
    value=39
    let pricee = document.createElement("h2")
    pricee.classList.add("pricee")
    pricee.innerText="₹ 39 /-"
    let img = document.createElement("img")
    img.src = "../images/imageedit_11_6221808932.png"
    let h2 = document.createElement("h2")
    h2.innerText="Chotta Burger Bro"
    h2.style="color:#000;"
    let icons = document.createElement("div")
    icons.classList.add("icons")
    let trash = document.createElement("a")
    trash.innerText=" Delete"
    trash.classList.add("button_slide")
    trash.classList.add("trash")
    trash.classList.add("slide_right")
    trash.style="color:#000;"

    icons.appendChild(trash)
    item.appendChild(img)
    item.appendChild(h2)
    items.appendChild(item)
    item.appendChild(icons)    
    item.appendChild(pricee)

    console.log("32");
    total+=value
    tamount()
    
    trash.addEventListener("click",()=>{
        items.removeChild(item)
        total-=value
        tamount()
        Orderr.pop("Bada")

    })
    document.querySelector(".q").addEventListener("click",()=>{
        console.log(h2.innerText);
    })
}

function classic(){
    let item = document.createElement("div")
    item.classList.add("item")
    Orderr.push("Bada")

    let price = document.createElement("input")
    price.setAttribute("readonly","readonly")
    value=69
    let pricee = document.createElement("h2")
    pricee.classList.add("pricee")
    pricee.innerText="₹ 69 /-"
    let img = document.createElement("img")
    img.src = "../images/imageedit_5_9622318190.png"
    let h2 = document.createElement("h2")
    h2.innerText="veg classic Bro"
    h2.style="color:#000;"
    let icons = document.createElement("div")
    icons.classList.add("icons")
    let trash = document.createElement("a")
    trash.innerText=" Delete"
    trash.classList.add("button_slide")
    trash.classList.add("trash")
    trash.classList.add("slide_right")
    trash.style="color:#000;"
    total+=value
    icons.appendChild(trash)
    item.appendChild(img)
    item.appendChild(h2)
    items.appendChild(item)
    item.appendChild(icons)
    console.log("32");
    item.appendChild(pricee)
    tamount()

    trash.addEventListener("click",()=>{
        items.removeChild(item)
        total-=value
        tamount()
        Orderr.pop("Bada")

    })
    document.querySelector(".q").addEventListener("click",()=>{
        console.log(h2.innerText);
    })
}

function mexican(){
    let item = document.createElement("div")
    item.classList.add("item")
    let price = document.createElement("input")
    price.setAttribute("readonly","readonly")
    var value=89
    let pricee = document.createElement("h2")
    pricee.classList.add("pricee")
    pricee.innerText="₹ 89 /-"
    let img = document.createElement("img")
    img.src = "../images/imageedit_7_9350579051.png"
    img.style="width:100px;"
    let h2 = document.createElement("h2")
    h2.innerText="mexicanian chesee bro"
    h2.style="color:#000;"
    let icons = document.createElement("div")
    icons.classList.add("icons")
    let trash = document.createElement("a")
    trash.innerText=" Delete"
    trash.classList.add("button_slide")
    trash.classList.add("trash")
    trash.classList.add("slide_right")
    trash.style="color:#000;"
    total+=value
    icons.appendChild(trash)
    item.appendChild(img)
    item.appendChild(h2)
    items.appendChild(item)
    
    item.appendChild(icons)
    item.appendChild(pricee)
    console.log("32");
    console.log(total);
    tamount()

    trash.addEventListener("click",()=>{
        items.removeChild(item)
        total-=value
        tamount()
    })
    document.querySelector(".q").addEventListener("click",()=>{
        console.log(h2.innerText);
    })

}



function cart() {
    document.querySelector(".cart").classList.toggle("ook");
    console.log(search);
    console.log(total);
    tamount()
}
var bbody = document.getElementById("bbody")
var loader = document.getElementById("loader")

setTimeout(() => {
    loader.style="top:-10000px;"
    bbody.style="overflow-y:hidden;"
}, 2000);

function Orde() {
    
}