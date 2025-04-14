
//Text till QuoteAnimation
const element = document.getElementById("dynamisk-citat");
const citatArray = ["‘Underbar massage som släppte loss alla spänningar i kroppen. Extra mysigt med varma handdukar man blir omstoppad med. Mycket nöjd!’",
    "‘Hade väldiga spänningar i nacke och kramp i rygg, innan Karolina så effektivt och grundligt löste upp dem. Mycket duktig massör som jag varmt kan rekommendera!!!’",  "‘Amazing! Underbar upplevelse!’",
    "‘Otroligt mysig harmonisk spamiljö och förstaklassig behandling, som alltid hos Ida.’",
    "‘Helt underbart, den bästa behandlingen som jag fått. Kommer tillbaka nästa gång vi är i Stockholm.’",
    "‘Hanna hjälpte min son med sin tonårshud, så bra resultat och bra tips på hur han ska fortsätta hemma med produkter.’"]; 

const totalTid = 10 * 1000; // 10sek skrivstid (omvandla till ms)
const bytsCitatTid = 15 * 1000; //var 1:e sec byts citat=testat
let citatIndex = 0;//det här är = citatArrays index. OBS!

function skrivCitat(){
    //ef 5:e min ta bort liggande citatet.
    element.innerHTML = "";
    let index = 0;
    const text = citatArray[citatIndex];//hämtas nästa citat fr citatArrayen.
    let textLength = text.length;
    let speed = (totalTid/textLength); 

    //Utskriftmetoden till citat som skrivs ut långsammare.
    function typeWriter(){
        if(index < textLength){
            element.innerHTML += text.charAt(index);
            index++;

            //Timeout funktion
            setTimeout (typeWriter, speed);
        }
        else {
            //lägg till ingenting efter citatet är skrivet.
            element.innerHTML += "";
        }
    }
    typeWriter(); //starta utskriften

    //gå till nästa citat;citaten är slut då börja om fr start
    citatIndex = (citatIndex + 1) % citatArray.length;
}

//Anrop till 1:a citat och starta loopen
window.onload = () => {
    skrivCitat(); //anropa citat metoden och visa 1:a citat
    setInterval (skrivCitat, bytsCitatTid); //anropa funktion + tiden
}

