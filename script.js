
console.log(title)

document.title = 'test'

document.body.style.backgroundColor = "#FF69B4";

d1 = Math.floor(Math.random() * 255);
d2 = Math.floor(Math.random() * 255);
d3 = Math.floor(Math.random() * 255);

randomcolor = "rgb("+d1+","+d2+","+d3+")";

document.body.style.backgroundColor = randomcolor;

const collection = document.body.children;

for (const element of collection) {
    console.log(element);
  }


// Selectors

var imparray = document.querySelectorAll('.important')
len = imparray.length

for(i=0; i<len; i++) {

   (imparray[i]).setAttribute('title', 'This is an important item');

}

console.log(imparray)

// Alternative

const easyway = document.querySelectorAll(".important");

easyway.forEach ((e)=> {
    e.title = 'This is an important item';
});

// Display: none

var selectimg = document.querySelectorAll('img')
imglen = selectimg.length

for(i=0; i<imglen; i++) {

    if (selectimg[i].classList == ('important')) {}
    else {
       selectimg[i].style.display = "none";
    }
}

// Alternative

var selectimg = document.querySelectorAll('img')

selectimg.forEach ((e)=> {
    if (e.classList == ('important')) {
        
            } else {
                
               e.style.display = "none";
            }
});


// Alternative 2 (for...of loop)

var all_img_elements = document.querySelectorAll('img')

for (const element of all_img_elements) {
    if (element.classList == ('important')) {}
    else {
       element.style.display = "none";
    }
}


// Display p + class

var allpar = document.querySelectorAll('p')
parlen = allpar.length

for(i=0; i<parlen; i++) {

    if (allpar[i].classList.length == 0) {
        console.log(allpar[i].innerText)
    }
    else {
       console.log(allpar[i].innerText)
       console.log (allpar[i].className)
    }
}


allpar.forEach((e)=>{
    if (e.classList.length == 0){
        console.log(e.innerText)
    } else {
        console.log(e.innerText)
        console.log (e.className)
    }
})

// Random color if no class




var allpar = document.querySelectorAll('p')
parlen = allpar.length

for(i=0; i<parlen; i++) {
    
    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

randomcolor = "rgb("+d1+","+d2+","+d3+")";

    if (allpar[i].classList.length == 0) {
               allpar[i].style.color = randomcolor;  
    }
}



allpar.forEach((e)=>{
    
    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

randomcolor = "rgb("+d1+","+d2+","+d3+")";
    if (e.classList.length == 0) {
        e.style.color = randomcolor;  
}

})


// Create

var names = ["ben", "diego", "hassan", "estime", "munise", "arseniia"]
var nalen = names.length

names.sort(() => Math.random() - 0.5);

for (i=0; i<nalen; i++) {
    var sec = document.createElement("section");
    var text = document.createTextNode(names[i]);
    sec.appendChild(text);
    var element = document.querySelector('article');
    element.appendChild(sec);

    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

    randomcolor = "rgb("+d1+","+d2+","+d3+")";

    sec.style.background = randomcolor;  

        
}

let bgColor = document.querySelectorAll('section');

for (let ntext of bgColor) {
    let d1 = Math.floor(Math.random() * 360);
    let d2 = Math.floor(Math.random() * 100);
    let d3 = Math.floor(Math.random() * 100);
    ntext.style.background = 'hsl('+ d1 +','+ d2 +'%,'+ d3 +'%)';
    if (d3 > 50) {
        ntext.style.color = 'black';
    }
    else if (d3 <= 50) {
        ntext.style.color = 'white';
    }
}


// Navigate

// Last Child becomes First Child

    const list = document.querySelector("ol");

    fast = list.lastElementChild

    sleep = list.firstElementChild

    list.insertBefore(fast, sleep)


// H2 moves to another section

    const sections = document.querySelectorAll("section")

    htwo = sections[1].firstElementChild

    hthree = sections[2].firstElementChild.firstElementChild

    sections[1].insertBefore(hthree, htwo);

    sections[2].appendChild(htwo);

    stwostart = sections[2].firstElementChild

    sections[2].insertBefore(htwo, stwostart)

// Remove the last section

    const lastsection = Array.from(document.querySelectorAll("section")).pop();

    lastsection.remove()


