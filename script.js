
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

var implis = document.querySelectorAll('.important')
len = implis.length

for(i=0; i<len; i++) {

   (implis[i]).setAttribute('title', 'This is an important item');

}

console.log(implis)

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

    sections[1].insertBefore(hthree, htwo)

    sthreediv = sections[2].firstElementChild

    sthreediv.appendChild(htwo)

    sthreedivchild = sthreediv.firstElementChild

    sthreediv.insertBefore(htwo, sthreedivchild)



// Remove the last section

    const lastsection = lis.from(document.querySelectorAll("section")).pop();

    lastsection.remove()




// Events

    const sections = document.querySelectorAll("section")

    const dwdiv = sections[0]

    const actionlog = sections[2].children[1]

    const _initTime = Date.now()

    const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
    }

    const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
    newdiv = document.createElement("div")
    dwdiv.appendChild(newdiv)
    newdiv.classList.add("displayedsquare")
    newdiv.classList.add(e.target.classList[1])

    newlog = document.createElement("li")
    actionlog.appendChild(newlog)
    newlogtext = document.createTextNode(getElapsedTime()+" Created a new "+e.target.classList[1]+" square")
    actionlog.appendChild(newlogtext)

    const allli = document.querySelectorAll("li")
    const alilen = allli.length

    for (i=0; i<alilen; i++){
    const lis = sections[2].children[1].children[i]
    lis.appendChild(newlogtext)

    }
}

    const actionSquares = document.querySelectorAll('.actionsquare')
    for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare)

    }


    document.body.onkeyup = function(e) {
        if (e.key == " " ||
            e.code == "Space" ||      
            e.keyCode == 32      
        ) {
    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

    randomcolor = "rgb("+d1+","+d2+","+d3+")";

    document.body.style.backgroundColor = randomcolor;

    newlog = document.createElement("li")
    actionlog.appendChild(newlog)
    newlogtext = document.createTextNode("New Background Color")
    actionlog.appendChild(newlogtext)

    const allli = document.querySelectorAll("li")
    const alilen = allli.length

    for (i=0; i<alilen; i++){
    const lis = sections[2].children[1].children[i]
    lis.appendChild(newlogtext)

    }

        }
        if (e.key == "l" ||
        e.code == "KeyL" ||      
        e.keyCode == 76      
    ) {

        const lastli = document.querySelectorAll("li")
        const lastlilen = lastli.length

        for (i=0; i<lastlilen; i++) {

            lastli[i].remove()
        }
       
    }

    if (e.key == "s" ||
    e.code == "KeyS" ||      
    e.keyCode == 83      
) {

    const lastsquare = lis.from(document.querySelectorAll('.displayedsquare')).pop();

        lastsquare.remove()
        
   
}


      }

    const clickOnNewSquare = (e) => {
    if (e.target.classList.contains("green")){
    alert("green");
    }
    else if (e.target.classList.contains("violet")){
    alert("violet");
    }
    else if (e.target.classList.contains("orange")){
    alert("orange");
    }    
    }

    const displayedSquares = document.querySelectorAll(".displayedsquare-wrapper");
    for (let square of displayedSquares) {
    square.addEventListener('click', clickOnNewSquare);
    }




// Forms

//1

    const input = document.getElementById('firstname');
    const span = document.getElementById('display-firstname');

    const spanKey = () => {
        span.textContent = input.value;
    }

    input.addEventListener('keyup', spanKey);

//2

    const input2 = document.getElementById('age');

    const hardt = document.getElementById('a-hard-truth');
    
    const ageKey = () => {
        iv = input2.value
        if (iv >= 18) {
           hardt.style.visibility = "visible";
        }
        else if (iv < 18) {
          hardt.style.visibility = "hidden";
        }
    }

    input2.addEventListener('keyup', ageKey);

    //3

    const input3 = document.getElementById('pwd');
    const input4 = document.getElementById('pwd-confirm');
    const span3 = document.createElement("span")
    input3.appendChild(span3)
    const span4 = document.createElement("span")
    input4.appendChild(span4)

    const pwdKey = () => {

        span3.textContent = input3.value;
        const chara = span3.textContent.length

        if (chara>5){
            input3.style.background= "green";
    
        } else {
            input3.style.background= "red";
            }
    }

    const pwdcKey = () => {

        span4.textContent = input4.value;
        const chara2 = span4.textContent.length

        if (span3.textContent == span4.textContent && chara2>5){
            input4.style.background= "green";
    
        } else {
            input4.style.background= "red";
    }
    }


    input3.addEventListener('keyup', pwdKey);
    input4.addEventListener('keyup', pwdcKey);

//4

    const myselect = document.getElementById('toggle-darkmode');
    myselect.addEventListener('change', function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})



// Drill

//1

const container = document.querySelector("ul")
const lis = document.querySelectorAll("li")
const films = container.childNodes
var string = "";

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    string = string + films[i].textContent;
}

console.log(string)

//2

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    if (films[i].textContent == "Fast and Furious") {
        container.insertBefore(films[i], films[0])
    }
}

//3

for (i = 0; i < films.length; i++) {
    films.nodeType === 1
    if (films[i].textContent == "Fast and Furious") {
        const lis = document.querySelectorAll("li")
        lis[i].classList.add("important")
    }
}

//4 & 5


const clickli = (e) => {
    if (e.target.innerText == "Fast and Furious") {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
    } else{
    alert(e.target.innerText);
}
}

    for (let liso of films) {
   liso.addEventListener('click', clickli)}


//6

for (i = 0; i < films.length; i++) {
    films.nodeType === 1

    for (e = 0; e < films.length; e++)
    if (films[i].textContent == films[e].textContent && films[i] !== films[e]) {
        container.removeChild(films[e])
    }
}


// 7
//     document.body.onkeyup = function(e) {
//     const lis = document.querySelectorAll("li")

// if (e.key == "r" ||
//     e.code == "KeyR" ||      
//     e.keyCode == 82      
// ) {
//     function shufflelis(lis) {
//         for (let i = lis.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             [lis[i], lis[j]] = [lis[j], lis[i]];
//         }
    
//         }
//     }

// }