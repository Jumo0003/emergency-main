const cat = document.querySelector("#catearhotspot");
console.log(cat);

const overskrift = document.querySelector(".info-text > h2");
const problem = document.querySelector("#efficiency");
const loesning = document.querySelector("#requirement");

cat.addEventListener("mouseover", mouseOvercatearhotspot);
cat.addEventListener("mouseout", mouseOutcatearhotspot);
cat.addEventListener("click", clickcatearhotspot);

function mouseOvercatearhotspot() {
  console.log("mouseovercatearhotspot");
  cat.style.fill = "blue";
}

function mouseOutcatearhotspot() {
  console.log("mouseOutcatearhotspot");
  cat.style.fill = "var(--primary-bg-color";
}

function clickcatearhotspot() {
  console.log("clickcatearhotspot");
  problem.classList.add("fadeIn");

  overskrift.textContent = "Det Lille Orange dyr";
  document.querySelector(".placeholder").textContent = "Kitty Ear";
  problem.innerHTML = `<h3>Problem</h3>
  <p>Mange mennesker oplever et behov for nærvær og tryghed,
   som et kæledyr kan give. For nogle er dette behov rettet mod katte, 
   der med deres rolige adfærd og selskab kan skabe ro i hverdagen.
    Problemet opstår, når man ikke har mulighed for at holde kat — for eksempel på grund af boligregler, allergi eller økonomi. Manglen på et dyr, man føler en naturlig tilknytning til, kan føre til ensomhed og en følelse af,
   at noget mangler i hverdagen.</p>`;
  loesning.innerHTML = `<h3>Løsnings forslag</h3>
  <p>Der findes heldigvis andre måder at få lidt katte-selskab på.
   Du kan for eksempel passe naboens kat, når de er væk,
    eller melde dig som kattepasser for en ven.
     Nogle steder kan man endda leje en kat for en kort periode,
      så du kan nyde dens selskab uden det store ansvar.
       Og nogle gange skal du bare gå en tur i nabolaget — måske møder du en sød gade- eller gårdkat, 
  der gerne vil have lidt opmærksomhed.</p>`;
}
//første knap kat hovde^^//

//Start hundeknap//

const dog = document.querySelector("#Dogearhotspot");

dog.addEventListener("mouseover", mouseOverDogearhotspot);
dog.addEventListener("mouseout", mouseOutDogearhotspot);
dog.addEventListener("click", clickDogearhotspot);

function mouseOverDogearhotspot() {
  console.log("mouseoverDogearhotspot");
  dog.style.fill = "blue";
}

function mouseOutDogearhotspot() {
  console.log("mouseOutDogearhotspot");
  dog.style.fill = "var(--primary-bg-color";
}

function clickDogearhotspot() {
  console.log("clickDogearhotspot");
  overskrift.textContent = "Det Lille Orange dyr";
  document.querySelector(".placeholder").textContent = "Dog Ear";
  problem.innerHTML = `<h3>Problem</h3>
  <p>Mange mennesker oplever et behov for nærvær, aktivitet og tryghed, 
  som et kæledyr kan give. For nogle er dette behov rettet mod hunde,
  der med deres loyalitet, energi og selskab kan skabe glæde og struktur i hverdagen.
   Problemet opstår, når man ikke har mulighed for at holde hund — for eksempel på grund af boligregler,
    arbejdstider, allergi eller økonomi. Manglen på et dyr,
     man føler en naturlig tilknytning til, kan føre til ensomhed og en følelse af,
   at noget mangler i hverdagen.</p>`;
  loesning.innerHTML = `<h3>Løsning</h3>
  <p>Hund:
Har du brug for at afstresse sammen med en aktiv og kærlig, pelset ven, men har du ikke tid eller mulighed for at have din egen hund?
Der findes heldigvis andre måder at få lidt hundeselskab på. 
Du kan for eksempel bestille en besøgshund, som kommer forbi og spreder glæde for en stund. 
Du kan også tilbyde at gå ture for andre hundeejere, der ikke selv har tid,
 eller melde dig som frivillig hundepasser gennem en forening eller online.
  På den måde kan du stadig få glæden, nærværet og bevægelsen, 
uden at skulle tage det fulde ansvar for at have en hund permanent.</p>`;
}

// start af bunny tail knap//

const bunny = document.querySelector("#bunnyhotspot");

bunny.addEventListener("mouseover", mouseOverbunnyhotspot);
bunny.addEventListener("mouseout", mouseOutbunnyhotspot);
bunny.addEventListener("click", clickbunnyhotspot);

function mouseOverbunnyhotspot() {
  console.log("mouseoverbunnyhotspot");
  bunny.style.fill = "blue";
}

function mouseOutbunnyhotspot() {
  console.log("mouseOutbunnyhotspot");
  bunny.style.fill = "var(--primary-bg-color";
}

function clickbunnyhotspot() {
  console.log("clickbunnyhotspot");
  overskrift.textContent = "Det Lille Orange dyr";
  document.querySelector(".placeholder").textContent = "Bunny Tail";
  problem.innerHTML = `<h3>Problem</h3>
  <p>Mange mennesker oplever et behov for ro, nærvær og omsorg, som et kæledyr kan give.
   For nogle er dette behov rettet mod kaniner, der med deres blide natur og rolige adfærd kan skabe tryghed og hygge i hverdagen.
    Problemet opstår, når man ikke har mulighed for at holde kanin — for eksempel på grund af boligregler, allergi, manglende plads eller tid.
     Manglen på et dyr, man føler en naturlig tilknytning til, 
  kan føre til en følelse af ensomhed og tomhed i hverdagen.</p>`;
  loesning.innerHTML = `<h3>Løsning</h3>
  <p>Har du brug for et hoppende, glad pelsdyr i dit liv, men må du ikke have dyr i lejligheden?
Der findes heldigvis måder at få lidt kaninselskab på alligevel.
 Du kan for eksempel få besøg af det rejsende kaninhold, som kommer ud og spreder glæde med deres bløde og nysgerrige små venner.
  Du kan også tage på tur i naturen og se, om du kan få øje på vilde kaniner i skoven eller på markerne.
   Og hvis du bare trænger til lidt pels og charme, kan du altid kigge forbi en kæledyrsbutik og hilse på kaninerne der
 — måske endda sætte dig ved buret og nyde lidt hoppende selskab for en stund.</p>`;
}
