

function scroller() {

    if(window.scrollY > 10) {
        document.querySelector("#head").style = "background-color: orange;"
    }else {
         document.querySelector("#head").style = "background-color: transparent;"

    }if(window.scrollY > 10) {
        document.querySelector(".head-2").style = "background-color: orange;"
    }else{
        document.querySelector(".head-2").style = "background-color: orange;"
    }


    console.log(window.scrollY)
}
let  change = 0;

function countUp() {
    if(change < 1500) {
        change = change + 10;
        document.querySelector(".count").innerHTML = change;
    }else {
        if(change = 3000) {
            document.querySelector(".hide1").style = `opacity: 1;`
        }
    }
    
    
    
}

let  change2 = 0;


function countUp2() {
    if(change2 < 2000) {
        change2 = change2 + 25;
        document.querySelector("#count1").innerHTML = change2;
    }else{
        if(change2 = 5000) {
            document.querySelector(".hide2").style = `opacity: 1;`
        }
    }

}


function clicker() {
    setInterval(() => {
        countUp();
    }, 0.5);
    setInterval(()=> {
        countUp2()
    },0.01)
}
function drop() {
    document.querySelector(".menu").style = `display: flex;`
    document.querySelector(".drop").style = `display: none;`
    document.querySelector(".close").style = `display: flex;`
}
function leave() {
    document.querySelector(".menu").style = `display: none;`
    document.querySelector(".drop").style = `display: flex;`
    document.querySelector(".close").style = `display: none;`

    
}
function home() {
    window.location.href = 'home.html';
}
function product() {
    window.location.href = 'product.html';
}
function service() {
    window.location.href = 'service.html';
}
function about() {
    window.location.href = 'about.html';
}

let dpd = true;
function solar() {
    document.querySelector(".t-sp2").style = "display: flex;"
    document.querySelector(".tx-5").style = "display: none;"
    document.querySelector(".cls").style = "display: flex"
        
    
}
function fold() {
    document.querySelector(".t-sp2").style = "display: none;"
    document.querySelector(".tx-5").style = "display: flex;"
    document.querySelector(".cls").style = "display: none"
}
function inverter() {
    document.querySelector(".inverter-2").style = "display: flex;"
    document.querySelector(".tx-6").style = "display: none;"
    document.querySelector(".cls2").style = "display: flex"
}
function fold2() {
    document.querySelector(".inverter-2").style = "display: none;"
    document.querySelector(".tx-6").style = "display: flex;"
    document.querySelector(".cls2").style = "display: none"
}
function battery() {
    document.querySelector(".battery-2").style = "display: flex;"
    document.querySelector(".tx-7").style = "display: none;"
    document.querySelector(".cls3").style = "display: flex"
}
function fold3() {
    document.querySelector(".battery-2").style = "display: none;"
    document.querySelector(".tx-7").style = "display: flex;"
    document.querySelector(".cls3").style = "display: none"
}

function streetlight() {
    document.querySelector(".t-sl2").style = "display: flex;"
    document.querySelector(".tx-8").style = "display: none;"
    document.querySelector(".cls4").style = "display: flex"
}
function fold4() {
    document.querySelector(".t-sl2").style = "display: none;"
    document.querySelector(".tx-8").style = "display: flex;"
    document.querySelector(".cls4").style = "display: none"
}
