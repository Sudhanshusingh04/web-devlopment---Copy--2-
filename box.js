 const form=document.querySelector("form")
 
 form.addEventListener("submit",function(e){
    e.preventDefault()
   const height= parseInt( document.querySelector("#height").value);
   const weight= parseInt( document.querySelector("#weight").value);
   const result=  document.querySelector("#result")
   if (height===""||isNaN(height)) {
    result.innerHTML="pls enter valid number";
    
   }
   else if (height===""||isNaN(weight)) {
    result.innerHTML="pls enter valid number";

   }

    const bmi=(weight/((height*height)/10000)).toFixed(3)
   
   if (bmi<=18.6) {
    result.innerHTML=`Under weight ${bmi}`
   }
  
   else if(bmi>=24.4){
    result.innerHTML=`over weight ${bmi}`

    
   }
   else  {
    
    result.innerHTML=`normal weight ${bmi}`

    
   }
   
   
 })


 
