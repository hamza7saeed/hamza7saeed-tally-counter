let head = document.head;

let body = document.body
body.style.backgroundColor = "#7BD3EA"
body.style.backgroundImage = "url('https://wallpapers.com/images/hd/full-hd-background-7cq8mrlft9dct6mx.jpg')"



let title = document.title = "Tally counter";
let link = document.createElement("link");
link.type = "icon/x-image";
link.rel = "icon";
link.href = "https://play-lh.googleusercontent.com/z6Ns4U76b7CCUC4keWhYqowAfzGbBExj4sVJ2ss39pZHX-4ESaCMIBHmF96_vbQgwdk=w240-h480-rw"
// header
let heading = document.createElement("header");
heading.innerHTML = "<h2>Count</h2>";
heading.style.display = "flex";
heading.style.fontSize = "30px"
heading.style.color = "white";
heading.style.justifyContent = "center";

// section start
let sec = document.createElement("section");
sec.style.marginTop = "3%"
sec.style.display = "flex";
sec.style.justifyContent = "center";
sec.style.alignItems = "center";
sec.style.flexDirection = "column";

// number
let div = document.createElement("div");
div.innerText = 0;
div.style.marginBottom = "15px"

div.style.fontSize = "50px"
div.style.padding = "40px"
// butoon
let addNum = 0;

let footBtn = document.createElement("footer")

let substract = document.createElement("button");
substract.style.marginRight = "10px"
substract.style.padding = "10px";
substract.innerText = "Substract Me"
substract.id = "bt1"
substract.className = "btn"
substract.addEventListener('mouseover',function(){
    substract.style.backgroundColor = "#424769";
    substract.style.color = "white"
    substract.style.borderRadius = "10px"
});
substract.addEventListener('mouseout',function(){
    substract.style.backgroundColor = "#FEFBF6";
    substract.style.color = "black"
})

substract.addEventListener('click',function subBtn(){
    div.innerText = addNum--;
    if (div.innerText < 0){
    div.style.color = "red";

    }


});


let reset = document.createElement("button");
reset.innerText = "Reset Me";
reset.id = "bt2"
reset.className = "btn";
reset.style.marginRight = "10px"
reset.style.padding = "10px";
reset.addEventListener('click', function resBut(){
    if(div.innerText == 0){
        div.style.color = "#35374B";
    }
    addNum = 0
    div.innerText = addNum;


}) 

reset.addEventListener('mouseover',function(){
    reset.style.backgroundColor = "#424769";
    reset.style.color = "white"
    reset.style.borderRadius = "10px"
});
reset.addEventListener('mouseout',function(){
    reset.style.backgroundColor = "#FEFBF6";
    reset.style.color = "black"
})
let add = document.createElement("button");
add.innerText = "Add Me"
add.id = "bt3"
add.className = "btn";
add.style.padding = "10px";
add.addEventListener('click',  function addBtn(){
   if (div.innerText > 0){

       div.style.color = "green";
   }

    div.innerText = addNum++;;

}) 
add.addEventListener('mouseover',function(){
    add.style.backgroundColor = "#424769";
    add.style.color = "white"
    add.style.borderRadius = "10px"
});
add.addEventListener('mouseout',function(){
    add.style.backgroundColor = "#FEFBF6";
    add.style.color = "black"
})
// let v = [1,2,3,4];

// v.forEach((e)=>{
//     console.log(e *3); 
// })






head.appendChild(link);
body.appendChild(heading)
body.appendChild(sec);
sec.append(div,footBtn);
footBtn.append(substract,reset,add);