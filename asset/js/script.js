var top_icon = document.querySelector('.top-icon')
var nav_link= document.querySelector('.navbar-link')
var search = document.querySelector('.search-btn')





top_icon.addEventListener('click',function(){
nav_link.classList.toggle('active');
search.classList.toggle('active');


})


var slideindex=0;
showSlide();


function showSlide(){
    var i;
    var slide = document.getElementsByClassName('img_slider');
    for(i = 0;i<slide.length;i++){
        slide[i].style.display = "none";
    }
    slideindex++;
    if(slideindex > slide.length){slideindex = 1}
    slide[slideindex-1].style.display= "block";
    setTimeout(showSlide,4000);
}

function ShowError(input, message)
 {
     let parent=input.parentElement;

    let small= parent.querySelector('small')

       
        small.innerText= message


 }
 function ShowSuccess(input)
 {
    let parent=input.parentElement;
    let small= parent.querySelector('small')

       
        small.innerText=''


 }

 function checkEmptyError(listInput){
    let isEmptyError= false
    listInput.forEach(input =>{
          
          input.value= input.value.trim()
          if(!input.value){
                 isEmptyError=true
                 ShowError(input,'khong duoc bo trong')
          }
          else{
                 ShowSuccess(input)
          }

    })
  
return isEmptyError
}
function checkLength(input,min,max){
    input.value=input.value.trim()

    if(input.value.length < min){
        ShowError(input,`phai co it nhat ${min} ky tu`)
        return true
    }
    if(input.value.length > max){
        ShowError(input,`phai co it hon ${max} ky tu`)
    
      return true
    }
    return false


}
function check_dt(input,min,max){
    input.value = input.value.trim()
    if(isNaN(input.value)){
        ShowError(input,'phai la so')
        return true
    }
    if(input.value.length < min){
        ShowError(input,`phai co it nhat ${min} ky tu`)
     return true
 }

 if(input.value.length > max){
    ShowError(input,`phai co it hon ${max} ky tu`)
 return true
}

}

var hoten= document.getElementById('ten')
var dt=document.getElementById('phone')
var form = document.querySelector('form')
var dk_btn= document.querySelector('.dangky_submit')
        
dk_btn.addEventListener('click',function(e){
    e.preventDefault()

    checkEmptyError([hoten,dt])

     checkLength(hoten,2,50);
     check_dt(dt,9,12)

    
    
    })



