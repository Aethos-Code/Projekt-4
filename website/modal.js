const closeModal = document.getElementById('overlay');
const modal = document.getElementById('modal');
const modalH = document.querySelector('.modal-header');
const modalA = document.querySelector('.modal-address');

const overlay = document.getElementById('overlay');
const body = document.getElementById('body')


const albanigade = document.getElementById('albanigade');
const kochsgade = document.getElementById('kochsgade');
const dalumvej = document.getElementById('dalumvej');



const abg = {location:"Albanigade", address:"Albanigade 33, 5000 Odense", image:'img/abg.jpg'}
const kcg = {location:"Kochsgade", address:"Kochsgade 120, 5000 Odense", image:'img/kcg.jpg'}
const dmv = {location:"Dalumvej", address:"Dalumvej 32, 5250 Odense", image:'img/dmv.jpg'}




const openingHours = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
const mHours = document.getElementById('modal-hours');

function hours() {
  for (let i = 0; i < openingHours.length; i++) {
    const p = document.createElement('p')
    p.innerHTML = openingHours[i] + ": <br>" + "10:00 - 22:00";
    mHours.appendChild(p);
  
    console.log(openingHours[i]);
  }
}




const h1 = document.createElement('h1');
const ad = document.createElement('p');
const img = document.createElement('img')



albanigade.addEventListener('click', () => {
  modal.style.display = "flex";
  h1.innerHTML = abg.location;
  ad.innerHTML = abg.address;
  img.src = abg.image;
  modalH.appendChild(h1);
  modalA.appendChild(img);
  modalA.appendChild(ad);
  hours();
  overlay.style.display = "block";
}); 

kochsgade.addEventListener('click', () => {
  modal.style.display = "flex";
  h1.innerHTML = kcg.location;
  ad.innerHTML = kcg.address;
  img.src = kcg.image;
  modalH.appendChild(h1);
  modalA.appendChild(img);
  modalA.appendChild(ad);
  hours();
  overlay.style.display = "block";
}); 

dalumvej.addEventListener('click', () => {
  modal.style.display = "flex";
  h1.innerHTML = dmv.location;
  ad.innerHTML = dmv.address;
  img.src = dmv.image;
  modalH.appendChild(h1);
  modalA.appendChild(img);
  modalA.appendChild(ad);
  hours();
  overlay.style.display = "block";
}); 







closeModal.addEventListener('click', () => {
  modalH.replaceChildren();
  mHours.replaceChildren();
  modal.style.display = "none";
  overlay.style.display = "none";

});
