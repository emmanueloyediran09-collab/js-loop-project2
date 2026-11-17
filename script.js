 let show = document.getElementById('display')
for (let i =1 ; i<=150 ; i++){


    
if (i%5 ==0 && i%3 == 0){
       show.innerHTML += `<p style="color:black;">${i}  FIZZ BUZZ</p>`
    }
 else if(i%3 == 0){
          show.innerHTML += `<p style="color:green;"> ${i}  FIZZ</p>`
  }

  else if ( i%5 ==0){
    show.innerHTML += `<p style="color:red;">${i}  BUZZ</p>`
  }


  else{
    show.innerHTML += `<p style="color:purple;">${i}  NIETHER FIZZ OR BUZZ</p>`
  }
  
}