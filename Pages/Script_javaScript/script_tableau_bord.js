  //Fonction js 

    
    
 //Code pour cacher ou afficher la sidebar 
let sidebar=document.querySelector('.sidebar_tbord');
let boutton_switch=document.querySelector('.icon_switch');
boutton_switch.addEventListener('click',function(){
    sidebar.classList.toggle('close');
});



//Affichage dynamique 
//Séléction des pages et des bouttons 
let liens = document.querySelectorAll('.sidebar_tbord li');
let pages = document.querySelectorAll('.page');

liens.forEach(lien => {
    lien.addEventListener('click',() => {
        const idCible=lien.getAttribute('data-target');
        pages.forEach(page => {
            page.classList.remove('active')
        });
        let elementCible=document.getElementById(idCible);
        elementCible.classList.add('active');


    });
});


   
//Script Js de la section dépenses du tableau de bord 



document.addEventListener('DOMContentLoaded', () => {
  const formDepense = document.getElementById('formDepense');
  const tableBody = document.querySelector('#tableDepenses tbody');
  let depenses = [];

  formDepense.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const montant = document.getElementById('montant').value;
    const date = document.getElementById('date').value;
    const categorie = document.getElementById('categorie').value;

    const depense = {
      id: Date.now(),
      description,
      montant,
      date,
      categorie
    };

    depenses.push(depense);
    ajouterDepenseDansTable(depense);
    formDepense.reset();
  });

  function ajouterDepenseDansTable(depense) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td style="padding:10px;">${depense.description}</td>
      <td style="padding:10px;">${depense.montant}</td>
      <td style="padding:10px;">${depense.date}</td>
      <td style="padding:10px;">${depense.categorie}</td>
      <td style="padding:10px;">
        <button onclick="supprimerDepense(${depense.id})" style="padding:5px 10px; background-color: red; color: white; border: none; border-radius: 4px; cursor: pointer;">Supprimer</button>
      </td>
    `;
    tr.setAttribute('data-id', depense.id);
    tableBody.appendChild(tr);
  }

  window.supprimerDepense = (id) => {
    depenses = depenses.filter(dep => dep.id !== id);
    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) row.remove();
  };
});

