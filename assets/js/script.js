const navSlide = () =>{
  const line = document.querySelector(".line");
  const menu = document.querySelector(".menu");
  const mtBtn = document.querySelector(".mybtn");

  line.addEventListener('click',()=>{
  
    if(menu.style.display=='block'){
      menu.style.display='none';
      line.style.top='0px';
      document.querySelector(".line1").style.transform='rotate(0)';
      document.querySelector(".line1").style.top='0';
      document.querySelector(".line2").style.backgroundColor='white';
      document.querySelector(".line3").style.transform='rotate(0)';
      document.querySelector(".line3").style.top='14px';
      mtBtn.style.display="none";
    }else{
      menu.style.display='block';
      line.style.top='-271px';
      document.querySelector(".line1").style.transform='rotate(45deg)';
      document.querySelector(".line1").style.top='7px';
      document.querySelector(".line3").style.top='7px';
      document.querySelector(".line2").style.backgroundColor='transparent';
      document.querySelector(".line3").style.transform='rotate(-45deg)';
      mtBtn.style.display="block";
   
    }
    
      });
    }
navSlide()