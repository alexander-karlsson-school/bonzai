User Stories Bonz.ai (Cool Zebras)

## US01 - Maxbredd på innehåll
    Som besökare 
    vill jag att innehållet har en tydlig maxbredd
    så att text och innehåll blir lättlästa och inte sträcker sig över hela skärmen.

Acceptanskriterier:
    - Innehållet centreras och har maxbredd på 1240 px.
    - På större skärmar finns marginaler på sidorna.

## US02 - Responsiv layout som inte går sönder
    Som besökare
    vill jag att sidan fungerar både på mobil och desktop
    Så att jag slipper horisontell scroll och trasiga layouter oavsett skärmstorlek

Acceptanskriterier:
    - Mellan 375-576 px ska allt innehåll synas utan att något bryts eller flödar över.
    - Över 1000 px ser layouten stabil ut och inget flödar utanför containrarna.
    - Sidan har inga brutna layouts och går inte sönder.
    - Användning av både CSS Grid och Flexbox.

## US03 - Tydlig struktur på sektioner
    Som besökare
    vill jag att innehållet är tydligt uppdelat i sektioner
    Så att jag snabbt kan förstå hur sidan är uppbyggd och fungerar.

Acceptanskriterier:
    - Layoutens struktur känns konsekvent mellan mobil och desktop.
    - Minst en sektion som är uppbyggd med flexbox.
    - Minst en sektion som är uppbyggd med CSS Grid.

## US04 - Semantisk HTML
    Som användare med skärmläsare
    vill jag att sidan bygger på semantiska HTML-element
    Så att innehållet är tillgängligt och logiskt strukturerat. 

Acceptanskriterier:
    - Rubriker använder hierarki på ett korrekt sätt (h1, h2, h3 osv.) 
    - Navigationer använder <nav>
    - Huvudinnehåll använder <main>
    - sidfoten använder <footer>
    - DIV-element används ENBART när inget annat semantiskt element passar.

## US05 - Visuell konsistens med Figma
    Som produktägare/beställare
    vill jag att sidan följer fonter, fontstorlekar och färger från figmaskissen
    så att varumärket och designen är konsekvent mellan prototyp och färdig produkt.

Acceptanskriterier:
    - Typsnittet är samma som i Figma..
    - Primära färger matchar Figma.
    - Fontstorlekar ligger inom rimlig tolerans mot Figma.

## US06 - Hamburgermeny på mobila enheter
    Som mobilanvändare
    vill jag att huvudmenyn visas som en hamburgermeny
    så att navigering blir smidig och strukturerad på mobila enheter

Acceptanskriterier:
    - På små skärmar ersätts den vanliga menyn av en hamburgaresymbol.
    - Menyn ska gå att visa/dölja med en lösning som inte kräver Javascript.
    - Navigeringslänkarna är klickbara och leder till rätt sidor.

## US07 - Inget beroende av Javascript
    Som användare
    vill jag kunna använda sidan även om Javascript är inaktiverat
    så att grundfunktionaliteten alltid fungerar.

Acceptanskriterier:
    - Grundfunktionalitet (navigering, scroll, animationer) ska fungera även om javascript är avstängt 

## US08 - Tillgång till senaste versionen online
    Som lärare/produktägare
    vill jag att senaste inkrementet alltid är publicerat på github Pages
    så att jag enkelt kan granska och testa lösningen vid varje Sprint Review.

Acceptanskriterier:
    - Projekt är kopplat till en Github Pages-URL
    - Inför varje Sprint Review pekar länken till den aktuella versionen. 

## US09 - Navigera mellan olika sidor
    Som besökare
    vill jag kunna gå mellan alla relevanta sidor via länkar
    så att jag aldrig fastnar på en sida utan väg vidare.

Acceptanskriterier:
    - All huvudnavigation länkar till rätt HTML-sidor
    - Headerns logga länkar tillbaka till startsidan från varje sida
    - inga trasiga länkar


## US10 - Läsbar text på små skärmar
    Som mobilanvändare
    vill jag att texten är lättläst utan att behöva zooma
    så att jag kan läsa innehållet utan ansträngning

Acceptanskriterier:
    - Brödtext har en minsta fontstorlek som är läsbar på 375px.
    - Raderna blir inte extremt långa eller extremt korta.
    - Det finns tillräckligt med radavstånd för bekväm läsning.

## US11 -  Upplevelse av kvalitet
    Som besökare
    vill jag att sidan ser modern och genomtänkt ut
    Så att upplevelsen känns seriös och förtroendeingivande

Acceptanskriterier:
    - Har transitions på knappar och liknande för att ge en professionell upplevelse.
    - Hemsidan ska ha ett bra flöde.

## US12 - Snabb tillgång till kontaktinformation
    Som användare 
    vill jag snabbt kunna se hur jag kontaktar företaget
    Så jag slipper klicka runt eller gissa

Acceptanskriterier:
    - Ha en kontakt kolumn i Footern så att man slipper leta.
 
## US13 - Snabb responsivitet på sidan
    Som användare
    vill jag att sidan ska snabbt reagera på klick
    så att jag känner att någonting händer

Acceptanskriterier:
    - Knappar ska ha en aktiv och hover-effekt