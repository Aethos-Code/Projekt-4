const ofteStilledeSpørgsmål = [
    { spørgsmål: 'Hvordan ved jeg hvem jeg donerer til?', svar: 'Hent vores app på mobilen og opret dig. Herinde kan du holde styr på dine doneringer, optjene point og se hvilke udsatte grupper du støtter med dine doneringer.' },
    { spørgsmål: 'Hvem hjælper I?', svar: 'Vi hjælper så vidt muligt alle, der har brug for hjælp. Har du brug for hjælp, kan du finde det nærmeste sociale arbejde <a href="https://kirkenskorshaer.dk/kontakt/socialt-arbejde" target="_blank">her</a> og høre, hvordan de kan hjælpe dig.'},
    { spørgsmål: 'Kan jeg søge om julehjælp?', svar: 'Du kan ikke søge om julehjælp gennem hovedkontoret. Kontakt det nærmeste sociale arbejde og hør, hvad mulighederne er. Du finder det nærmeste sociale arbejde <a href="https://kirkenskorshaer.dk/kontakt/socialt-arbejde/familietilbud" target="_blank">her</a>.' },
    { spørgsmål: 'Kan jeg søge om økonomisk støtte?', svar: 'Vi yder ikke økonomisk støtte til enkeltpersoner, men hjælper så godt vi kan på mange andre måder. Kontakt det nærmeste sociale arbejde og hør, hvordan de kan hjælpe dig. Du finder det nærmeste sociale arbejde <a href="https://kirkenskorshaer.dk/kontakt/socialt-arbejde" target="_blank">her</a>.' },
    { spørgsmål: 'Kan jeg hjælpe?', svar: 'Det kan du! Der er flere muligheder: Du kan blive bidragsyder <a href="https://kirkenskorshaer.dk/stoet" target="_blank">her</a>. så gør du os i stand til at hjælpe udsatte og sårbare mennesker i Danmark. Du kan blive frivillig i det sociale arbejde eller i en af vores genbrugsbutikker <a href="https://kirkenskorshaer.dk/blivfrivillig" target="_blank">her</a>. Du kan også donere dine ting til vores genbrugsbutikker <a href="https://kirkenskorshaer.dk/genbrug/donation-toej-og-moebler" target="_blank">her</a>.' }
];


function genererSpørgsmål() {
    const container = document.querySelector('.spørgsmål-bokse');

    ofteStilledeSpørgsmål.forEach((item) => {  //looper igennem hvert spørgsmål og laver en boks//
        const boks = document.createElement('div'); 
        boks.className = 'spørgsmål-boks';  
        boks.textContent = item.spørgsmål;  
        boks.addEventListener('click', () => visSvar(item.svar));
        container.appendChild(boks);
    });
}


function visSvar(svar) {
    document.querySelector('.spørgsmål-bokse').style.display = 'none';  
    document.getElementById('svar-tekst').innerHTML = svar;  
    document.getElementById('svar-boks').style.display = 'block'; 
}


function gåTilbageTilSpørgsmål() {
    document.getElementById('svar-boks').style.display = 'none'; 
    document.querySelector('.spørgsmål-bokse').style.display = 'block';  
}


function håndterBrugerSpørgsmål() {
    const email = document.getElementById('bruger-email').value.trim();  
    const input = document.getElementById('bruger-spørgsmål').value.trim(); 
    
   
    if (email === "" || input === "") {
        alert("Indtast venligst både din e-mail og dit spørgsmål.");  
    } else if (!validateEmail(email)) {
        alert("Indtast venligst en gyldig e-mail.");  
    } else {
      
        visSvar("Dit spørgsmål: '" + input + "' er modtaget. Vi vender tilbage til dig på '" + email + "' hurtigst muligt.");
        document.getElementById('bruger-spørgsmål').value = '';  
        document.getElementById('bruger-email').value = '';  
    }
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


document.getElementById('åbnChatbot').addEventListener('click', () => {
    document.getElementById('chatbot').classList.add('vis');  
});

document.getElementById('lukChatbot').addEventListener('click', () => {
    document.getElementById('chatbot').classList.remove('vis'); 
});


genererSpørgsmål();





