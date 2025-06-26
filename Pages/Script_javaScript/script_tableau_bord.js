  //Fonction js 

    
     /*   
      function afficher_content(a){
            let lui=document.querySelector('a');
            lui.style.display='block'

     }   
    
        Sélections des liens de la sidebar
    const liens=document.querySelectorAll('.sidebar_tbord li');
    
    Sélections des pages   const pages=document.querySelectorAll('.page');    liens.forEach(li =>              li.addEventListener('click',() =>             //Cacher toutes les pages             pages.forEach(p => p.classList.remove('active'))             //Lire l'attribut data-target du lien cliqué             const idCible=li.getAttribute('data-target')             //Sélectionner la section correspondant             const pageActive=document.getElementById(idCible)             pageActive.classList.add('active');

        });
        });

       Code javascript pour cacher ou fait apparaître la sidebar 

    let boutton_switch = document.querySelector('.icon_switch');
   
    */
   /* boutton_switch.addEventListener('click', () =>{
        alert("hello")
    
    });
  */
 //Code pour cacher ou afficher la sidebar 
let sidebar=document.querySelector('.sidebar_tbord');
let boutton_switch=document.querySelector('.icon_switch');
boutton_switch.addEventListener('click',function(){
    sidebar.classList.toggle('close');
});


   
