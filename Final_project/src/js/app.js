

// const body = document.querySelector("body"),
// tooggle =body.querySelector(".tooggle");

// tooggle.addEventListener("click", () => {
//      body.classList.toggle("dark");
// })






///--------SHOW PASSWORD------\\\
const ShowPassword = document.querySelector(".fa-eye")
const ClosePassword = document.querySelector(".fa-eye-slash")
const PasswordInput=document.querySelector("#password ");



const ChangeTypePassword = (type, Close, Show) =>{
     PasswordInput.getAttribute("type" ,"password")
     PasswordInput.setAttribute("type",type)
     ShowPassword.style.display=Show;
     ClosePassword.style.display=Close;
     
}
ShowPassword && 
ShowPassword.addEventListener("click", ()=>{
     ChangeTypePassword ("text", "block", "none");
     
});

ClosePassword &&
ClosePassword.addEventListener("click",()=>{
     ChangeTypePassword ("password", "none", "block")
});



///-----PASSWORD STRENG-----\\\\

var streng = document.querySelector(".streng")

PasswordInput&& 

PasswordInput.addEventListener("keyup", (e)=>{
     

     if( e.target.value.length === 0){
          streng.style.width="0%";
          streng.style.background="transparent ";
     };
     if( e.target.value.length > 0){
          streng.style.width="33%";
          streng.style.background="red";
     };

     if( e.target.value.length > 4 && e.target.value.length <= 9){
          streng.style.width="66%";
          streng.style.background="gold";
     };
     if( e.target.value.length > 9 && e.target.value.length <= 23){
          streng.style.width="100%";
          streng.style.background="green";
     };
    

});





