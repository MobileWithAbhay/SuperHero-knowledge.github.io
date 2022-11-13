var link = document.querySelector('.search-name');
var hidden = document.querySelector('.hidden');

// accordion function
const accordion = document.getElementsByClassName("contentbox");

for(i=0; i<accordion.length;i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
  });
}

function getHero(){
  // Change your api key 
  // https://superheroapi.com/
  // https://www.superheroapi.com/api.php/727054372039115/search/
  url = `https://www.superheroapi.com/api.php/106771455558380/search/${link.value}`
  fetch(url).then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data);
    hidden.classList.add('active');
    document.querySelector('.tabs').innerHTML = `
        <img class="img" src = "${data.results[0].image.url}">
        <div class="name">${data.results[0].name}</div>
        <div class="fullN">(${data.results[0].biography['full-name']})</div>`;
        
     document.querySelector('.powerstats').innerHTML = `
    <li>
         <div>
           <span>Intelligence</span>
         </div>
         <span class="span1">${data.results[0].powerstats.intelligence}</span>
       </li>
       <li>
         <div>
           <span>Strength</span>
         </div>
         <span class="span2">${data.results[0].powerstats.strength}</span>
       </li>
       <li>
         <div>
           <span>Speed</span>
         </div>
         <span class="span3">${data.results[0].powerstats.speed}</span>
       </li>
       <li>
         <div>
           <span>Durability</span>
         </div>
         <span class="span4">${data.results[0].powerstats.durability}</span>
       </li>
       <li>
         <div>
           <span>Power</span>
         </div>
         <span class="span5">${data.results[0].powerstats.power}</span>
       </li>
       <li>
         <div>
           <span>Combat</span>
         </div>
         <span class="span6">${data.results[0].powerstats.combat}</span>
       </li>
    `;

    document.querySelector('.biography').innerHTML = `
    <li>
        <span class="sp">Full Name</span>
        <span>${data.results[0].biography['full-name']}</span>
    </li>
    <li>
        <span class="sp">Alert-Egos</span>
        <span>${data.results[0].biography['alter-egos']}</span>
    </li>
    <li>
        <span class="sp">Aliases</span>
        <span>${data.results[0].biography['aliases']}</span>
    </li>
    <li>
        <span class="sp">Place-Of-Birth</span>
        <span>${data.results[0].biography['place-of-birth']}</span>
    </li>
    <li>
        <span class="sp">First-Apperance</span>
        <span>${data.results[0].biography['first-appearance']}</span>
    </li>
    <li>
        <span class="sp">Publisher</span>
        <span>${data.results[0].biography['publisher']}</span>
    </li>
    `;

    document.querySelector('.appearance').innerHTML = `
             <li>
               <div>
               <span>Gender</span>
               </div>
               <span class="span1">${data.results[0].appearance['gender']}</span>
             </li>
             <li>
               <div>
               <span>Race</span>
               </div>
               <span class="span2">${data.results[0].appearance['race']}</span>
             </li>
             <li>
               <div>
               <span>Height</span>
               </div>
               <span class="span3">${data.results[0].appearance['height'][0]}</span>
             </li>
             <li>
               <div>
               <span>Weight</span>
               </div>
               <span class="span4">${data.results[0].appearance['weight'][0]}</span>
             </li>
             <li>
               <div>
               <span>Eye-Color</span>
               </div>
               <span class="span5">${data.results[0].appearance['eye-color']}</span>
             </li>
             <li>
               <div>
               <span>Hair-Color</span>
               </div>
               <span class="span6">${data.results[0].appearance['hair-color']}</span>
             </li>
`;
    document.querySelector('.connections').innerHTML = `
    <li>
        <span class="cs">👇👇👇Group--Affiliation👇👇👇</span><br/>
        <span>${data.results[0].connections['group-affiliation']}</span>
    </li>
    <li>
        <span class="cs">👇👇👇Relatives👇👇👇</span><br/>
        <span>${data.results[0].connections['relatives']}</span>
    </li>
    `;
  });
}

function SuperHero(){
     if(link.value!= ""){
        getHero();
         
     }
     else{
       alert('Enter Your SuperHero Name');
     }
 }
