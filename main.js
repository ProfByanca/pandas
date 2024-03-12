var motivos = [
    " Eles são perfeitos",
    "Gostam de Brincar",
    "Até praticam kung fu",
    "Os pandas são fofinhos",
      "eles gostam de programar"
  ];
  
  var imagens = [ "https://i.pinimg.com/236x/d7/ce/06/d7ce06d733351b21771d7181cd7e57fe.jpg",
    "https://pbs.twimg.com/profile_images/2564040546/d6zzg76ubw2212b0duof_400x400.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgb66ehAwM25tHv0uLONREuSOGufjDhbZLA&usqp=CAU","https://dcist.com/wp-content/uploads/sites/3/2023/01/51256044458_3a9abb45e5_k.jpg",         "https://static.vecteezy.com/ti/vetor-gratis/p1/4759691-panda-fofo-trabalhando-na-frente-do-computador-gratis-vetor.jpg"
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  
  