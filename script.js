
/*const messageElement=document.getElementById("message");
const messagesContainer=document.getElementById("messages");
const messages=messagesContainer.children;
let currentIndex=0;
messagesContainer.style.display='block';
function showNextMessage(){
messageElement.style.opacity=0;
setTimeout (() => {
currentIndex=(currentIndex + 1)% messages.length;
messageElement.textContent=messages[currentIndex].textContent;
messageElement.style.opacity=1;
},1000);


}
messageElement.textContent=messages[currentIndex].textContent;
messageElement.style.opacity=1;

setInterval(showNextMessage,4000);
console.log(
    "script loaded and ececuted"
);
messagesContainer.style.display='none';*/


function showsidebar(){
const sidebar=document.querySelector('.side')
sidebar.style.display='flex'
  
}
function hidesidebar() {
const sidebar=document.querySelector('.side')
sidebar.style.display='none'
} 



const messageElement=document.getElementById("message");
const messagesContainer=document.getElementById("messages");
const messages=messagesContainer.children;
let currentIndex=0;
messagesContainer.style.display='block';
function showNextMessage(){
messageElement.style.opacity=0;
setTimeout (() => {
currentIndex=(currentIndex + 1)% messages.length;
messageElement.textContent=messages[currentIndex].textContent;
messageElement.style.opacity=1;
},1000);


}
messageElement.textContent=messages[currentIndex].textContent;
messageElement.style.opacity=1;

setInterval(showNextMessage,4000);
console.log(
"script loaded and ececuted"
);
messagesContainer.style.display='none';


