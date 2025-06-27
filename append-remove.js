let aish=document.createElement("p");
//aish.textContent="I am Chitti";//

aish.innerHTML="Memory 1 Tera Byte";
aish.style.color="blue";aish.style.fontSize="20px";
document.getElementById("Vasi").appendChild(aish);
let b = document.getElementsByClassName("list");
b[0].style.color="pink";
b[1].style.color="red";
b[2].style.color="blue";
b[3].style.color="green";
b[0].style.fontSize="20px";
b[1].style.fontSize="20px";
b[2].style.fontSize="20px";
b[3].style.fontSize="20px";
/*let priya=document.getElementsByClassName("list");
if(priya){
    priya.remove();
}*/
setTimeout(()=>{
    let aish=document.getElementsByClassName("list")[1];
    if(aish){
        aish.remove();
    }
},2000);

let newHeading = document.createElement("h2");
newHeading.innerHTML="This is new heading added by JS";

newHeading.style.color="purple";
newHeading.style.fontSize="24px";
document.body.appendChild(newHeading);

setTimeout(()=>{
    let newText=document.createElement("p");
    newText.textContent="this text is added after 3 seconds";
    newText.style.color="green";
    document.body.appendChild(newText);
},3000);

let tagText= document.createElement("p");
tagText.textContent="This text is appended to the tag";
tagText.style.color="orange";
document.getElementById("Vasi").appendChild(tagText);

let list=document.createElement("ul");
for( let i= 1; i <=3; i++) {
    let listItem=document.createElement("li");
    listItem.textContent = 'Item ${i}';
    list.appendChild(listItem);
    list.appendChild("li");
    document.body.appendChild(list);
}