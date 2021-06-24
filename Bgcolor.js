
    let h1 = document.getElementsByTagName('h1')[0];
    let btn = document.getElementsByTagName('button')[0];
    let photo = [ ,"img/sagor1 (2).jpg" , "img/moinul.jpg" , " img/ropon.jpg" , "img/rifat.jpg" , "img/ashik.jpg" ,"img/shimul.jpg" , "img/limon.jpg" ,"img/sab.jpg"];
    let nn = 0;
    let imgTag = document.getElementsByTagName('img')[0];
    let text = document.getElementById('text');
    
     

 
   btn.addEventListener("click", function(){

        nn++;
        let input = document.getElementsByTagName('input')[0].value;
        let input1 = String(input);

       console.log(input1);

       if(input == ''){
         alert('budar pula karo nam lekhos nai kan..')

       }else if(input == 'jaminur islam sagor'){
       imgTag.src = photo[1];
       text.innerHTML='sala amar nam lekhsos kan arek bar zodi amar nam lekhos tor nak fatamu..'
       h1.innerHTML = 'chele ta onk valo, innocent boy';
       }
       else if (input == 'Moinul Hasan'){
         imgTag.src = photo[2];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'filancing e onk valo korte parba futuere ';

       }
       else if (input == 'Aryn Ahmed'){
         imgTag.src = photo[3];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'sala jambo togo xm hoboi...';

       }
       else if (input == 'Rj Rifat'){
         imgTag.src= photo[4];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'Mim er asha bad de..mim e khailo sobaire';

       }
       else if (input == 'Ash Ik'){
         imgTag.src = photo[5];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'বাসাইলের ভবিষৎ সফটওয়ার  ইঞ্জেনিয়ার। ';

       }
       else if (input == 'Shimul Khan'){
         imgTag.src = photo[6];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'oVery good people can improve their lives ';

       }
       else if (input == 'Limon Khandokar'){
         imgTag.src = photo[7];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = 'm*c er dekha zaitase salay eknumber er m*c sala magi baj';

       }
       else if (input == 'Sakib Alhasan'){
         imgTag.src = photo[8];
       text.innerHTML='type your Facebook other friend names'
       h1.innerHTML = ' matha muta vuri fula ';

       }
       
       else {
         alert('sala bal lekho fb nam lekhon marao')
       }
     
       
      
       
        

   





   })



















































//      let imgt = document.getElementsByTagName('img')[0];
   

//   let btt = document.getElementsByTagName('button')[0];
//   let h1 = document.getElementsByTagName('h1')[0];
//   let hax = [,'ami tumake onek onek valobasi' , 'saradin tumake miss kori','rat e tumar kotha mon kore ghumate pari nah' , 'tumie kano bujte cao nah ami tumake sottie khub valobasi' , 'plz amake chere zeo nah'  ];
   
//   let nn = 0;
//   let photo = [ ,"/img/sagor1 (1).jpg" , "/img/sagor1 (2).jpg"  , "/img/sagor3.jpg" ,"/img/sagor4.jpg" , "/img/sagor5.jpg"];

//   btt.addEventListener("click" , function() {

//     nn++;
        
//     imgt.src = photo[nn];
     
//      let nu2 = hax[nn];
//      console.log(nu2)


//      if(nn<=5) {              
//      h1.innerHTML=nu2;
    
//      }else{
//      h1.innerHTML= "finish";

      
//      }

//     })


// let btn = document.getElementById('btt');
// let container = document.getElementById('container');
// let input = document.getElementById('output');

// function generateColor () {              
//   let haxColors = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f'];
//   let color = '#';
// for ( let i = 0 ;  i < 6  ;  i++) {       
//   let num = Math.round(Math.random()*15);
//   let num2 = haxColors[num];
//    color += num2;
//    console.log(color);
// }
//  h1.style.color = color
//  container.style.backgroundColor = color;
//  input.innerHTML= color;
// input.style.color=color;

//   }
//   btt.addEventListener("click", generateColor)







