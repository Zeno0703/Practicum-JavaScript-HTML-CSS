# JavaScript project: 2021-2022

In dit practicum implementeren we het spel [Reversi](https://nl.wikipedia.org/wiki/Reversi) in Javascript.
Dit project wordt ingediend via GitHub Classroom.
Tijdens de verdediging kijken we naar de recentst gepushte commit versie vóór het verstrijken van de deadline.


## Afspraken

Overloop eerst de afspraken vooraleer je begint aan de opgave.


### Gedragscode

De practica worden gequoteerd, en het examenreglement is dan ook van toepassing.
Soms is er echter wat onduidelijkheid over wat toegestaan is en niet inzake samenwerking bij opdrachten zoals deze.

De oplossing en/of programmacode die ingediend wordt, moet volledig het resultaat zijn van werk dat je zelf gepresteerd hebt.
Je mag je werk uiteraard bespreken met andere studenten, in de zin dat je praat over algemene oplossingsmethoden of algoritmen, maar de bespreking mag niet gaan over specifieke code die je aan het schrijven bent of die je wenst in te dienen.
Als je het met anderen over je practicum hebt, mag dit er dus *nooit* toe leiden, dat je op om het even welk moment in het bezit bent van een geheel of gedeeltelijke kopie van het opgeloste practicum van anderen, onafhankelijk van of die code op papier staat of in elektronische vorm beschikbaar is, en onafhankelijk van wie de code geschreven heeft (mede-studenten, eventueel uit andere studiejaren, volledige buitenstaanders, internet-bronnen, e.d.).
Dit houdt tevens ook in dat er geen enkele geldige reden is om je code door te geven aan mede-studenten, noch om ze beschikbaar te stellen via publiek bereikbare directories of websites. De git-repository die we jullie ter beschikking stellen is standaard op privaat ingesteld.

Elke student is verantwoordelijk voor de code en het werk dat hij of zij indient.
Als er tijdens de beoordeling van het practicum twijfels zijn over het feit of het practicum zelf gemaakt is (bvb. gelijkaardige code, of oplossingen met andere practica), zal de student gevraagd worden hiervoor een verklaring te geven.
Indien dit de twijfels niet wegwerkt, zal er worden overgegaan tot het melden van een onregelmatigheid, zoals voorzien in het onderwijs- en examenreglement (zie http://www.kuleuven.be/onderwijs/oer/).

**Alle inzendingen worden automatisch met elkaar vergeleken met behulp van plagiaatsoftware voor code.
Deze software geeft een score van gelijkaardigheid aan projecten.
De projecten die het meest op elkaar lijken worden nadien manueel nagekeken.**


### Toelichting

Het is toegestaan om gebruik te maken van informatie en code (bijvoorbeeld hulpfuncties) op het internet om je practicum op te lossen, **indien je de bron vermeldt**.
Het is niet de bedoeling om een volledig opgelost spel te downloaden en dit in te dienen, zelfs met bronvermelding.

Indien je twijfelt over wat al dan niet toegestaan is, stel dan een vraag op het discussieforum!


### Forum

Alle vragen over het practicum, *inclusief vragen aan medestudenten*, moeten gesteld worden via het **discussieforum** op [Toledo](https://toledo.kuleuven.be).

Alle antwoorden van assistenten op het discussieforum worden beschouwd als **deel van de opgave** en kunnen bijgevolg aanvullingen of correcties bevatten.
Zorg ervoor dat je deze posts leest!

> **Tip:** open het forum en klik bovenaan op *subscribe* om een e-mail te krijgen wanneer nieuwe threads worden toegevoegd aan het forum.


### Indienen

De *deadline* voor dit practicum is **zondag 21 november 2021** om **23u59**.
Het practicum wordt ingediend met behulp van _Git_, door simpelweg je oplossing te pushen naar deze online repository.

Wijzigingen aan jullie repository na deze datum zullen niet aanvaard worden.

``` bash

$ git add index.html
$ git add code.js
... <alle bestanden toevoegen met git add> ...
$ git commit -m "Oplossing practicum"
$ git push origin master
```

**Kijk goed na of je alle bestanden correct hebt ingediend. Een foute inzending wordt gelijkgesteld aan laattijdige inzending!**
Controleer je inzending door je eigen repository opnieuw te clonen in een tijdelijke folder.

``` bash
$ cd /tmp
$ git clone https://www.github.com/informaticawerktuigen2021-2022/project-javascript-reversi-[github_accountnaam]
$ cd project-javascript-reversi-[github_accountnaam]
$ firefox index.html
```

Indien alles correct is gepusht zouden bovenstaande commando's je oplossing moeten downloaden van GitHub en vervolgens openen in Firefox.

Je kan de inhoud van de repository ook nakijken op de website van GitHub zelf.

> **Tip:** Het is ook een goed idee om regelmatig gedurende het maken van je project je bestanden te committen en pushen met git.
Zo heb je altijd een back-up van je code.


### Verdediging

Gedurende de verdediging overloop je je code samen met een assistent.
De beoordeling zal gebeuren op basis van de vooraf ingediende code en de verdediging hiervan.
Er zal ook gevraagd worden om ter plekke een uitbreiding te maken op de ingediende code, die ook beoordeeld zal worden.

De praktische informatie omtrent de verdediging en de planning hiervan volgen later via Toledo.

De verdediging is een examenmoment, behandel dit ook zo.
**Zorg ervoor dat je op tijd ter plaatse bent voor je toegekende moment.**
Indien je om eender welke reden niet op tijd op de verdediging kan geraken, neem dan zo snel mogelijk contact op met het assistententeam zodat er gezocht kan worden naar een oplossing.
> **Belangrijk:** *Niet komen opdagen op je verdediging zonder enige verwittiging, zal resulteren in een 0 op dit practicum*.
Indien je door ziekte je verdediging niet kan halen, bezorg je je ombudspersoon een doktersattest.
Via de ombudspersoon kan dan een inhaalverdediging vastgelegd worden.


## Evaluatiecriteria

In deze sectie beschrijven we kort enkele criteria die we gebruiken om een score toe te kennen aan het practicum.


### Functionaliteit

In de eerste plaats wordt er gekeken naar een correcte, foutloze werking van je programma.
Zorg ervoor dat alle functionaliteit die in de opgave gevraagd wordt, ook aanwezig is in je programma.
Je zal enkel kunnen slagen voor dit practicum als je een werkend spel oplevert!


### Leesbaarheid code

Zorg ervoor dat je code leesbaar is!

Enkele tips:

* Gebruik duidelijke, verklarende namen voor alle variabelen en functies.
* Maak gebruik van functies om je code op te delen. Deel lange functies op in kleinere subfuncties die je probleem stap voor stap oplossen. Als je je code voldoende opsplitst in functies met heldere namen zal de code snel leesbaar worden.
* *Indenteer* je code! Vele editors hebben auto-formatting functionaliteit. Maak daar gebruik van! Er is niets vervelender dan code te lezen met foute of geen indentatie.
* Maak gebruik van commentaar, maar enkel voor de stukken code die slecht leesbaar zijn. Voeg deze commentaar dus pas toe nadat je alle bovenstaande stappen hebt uitgevoerd en nog steeds merkt dat het stuk code lastig te lezen is.
* Wees consequent met alle stijlkeuzes die je maakt. Indien je bijvoorbeeld beslist om een accolade telkens op een nieuwe regel te laten beginnen, doe dit dan voor het volledige document.


### Correcte inzending

Zorg ervoor dat je code correct en tijdig is ingediend via GitHub.


### Niet gequoteerd

We geven geen punten op

* De esthetiek van de user interface. Het kan leuk zijn om je spel mooier te maken, maar hier kan je geen punten mee winnen. (Concreet mogen munten dus bvb. vierkant zijn.)
* Extra (ongevraagde) functionaliteit. Je mag eigen functies toevoegen, maar hier kan je geen punten mee winnen.


## Verdediging

Op de verdediging is het uiterst belangrijk dat je goed kan uitleggen wat je code doet, en waarom je bepaalde keuzes hebt gemaakt.
Vergeet zeker niet om als voorbereiding voor de verdediging je eigen code opnieuw te bekijken, zeker de ingewikkelde delen.
Met code waarvan je niet kan uitleggen hoe ze werkt, kan je uiteraard weinig punten verdienen.


# Opgave

De opdracht van in practicum bestaat eruit het spel [Reversi](https://nl.wikipedia.org/wiki/Reversi) te implementeren met behulp van HTML, CSS en Javascript.
In deze sectie beschrijven we eerst de algemene regels en werking van het spel.
Vervolgens beschrijven we de specifieke functionaliteit die we verwachten in jullie oplossing.


## Reversi

Om de regels van Reversi op te frissen kan je het spel [online](https://cardgames.io/reversi/) spelen.
We beschrijven de regels ook in deze sectie.

### Spelregels

#### Doel van het spel

Zo veel mogelijk munten van jouw kleur op het bord hebben liggen wanneer het spel eindigt. De speler waarvan de kleur het meeste op het bord voorkomt, wint.


#### Het spelbord

Het bord is (in dit geval) een vierkant, verdeeld in 8 x 8 vakken.


#### De munten

Munten zijn ofwel wit ofwel zwart. Aan het begin van het spel wordt bepaald welke speler met welke kleur speelt. De speler mag enkel munten van deze kleur leggen.


#### Het spelverloop

Het aantal spelers is beperkt tot exact twee spelers. De spelers leggen om de beurt een munt op het spelbord. Het initiële speelbord bevat twee zwarte en twee witte munten in het midden van het bord.

In onze implementatie zal de beginstelling er als volgt uitzien (`x` vertegenwoordigt zwart, `o` vertegenwoordigt wit):

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
4 |   |   |   | o | x |   |   |   |
5 |   |   |   | x | o |   |   |   |
6 |   |   |   |   |   |   |   |   |
7 |   |   |   |   |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+
    a   b   c   d   e   f   g   h
```

Een speler mag enkel een munt leggen als daarmee minstens één munt van de tegenstander wordt omgedraaid (de munt wisselt van kleur).
Een munt zal omgedraaid worden wanneer binnen dezelfde rij, kolom, of diagonaal de munt ingesloten wordt door twee munten van de tegenovergestelde kleur.

Zwart doet de openingszet. In onze beginstelling mag zwart enkel op de volgende posities een munt leggen, aangeduid met `·`:

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
3 |   |   |   | · |   |   |   |   |
4 |   |   | · | o | x |   |   |   |
5 |   |   |   | x | o | · |   |   |
6 |   |   |   |   | · |   |   |   |
7 |   |   |   |   |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+
    a   b   c   d   e   f   g   h
```

Zwart kiest bvb. om een munt te leggen op `e6`:

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
4 |   |   |   | o | x |   |   |   |
5 |   |   |   | x | x |   |   |   |
6 |   |   |   |   | x |   |   |   |
7 |   |   |   |   |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+
    a   b   c   d   e   f   g   h
```

De witte munt op `e5` werd vertical ingesloten door twee zwarte munten, en als gevolg wordt de witte munt omgedraaid. Deze witte munt is dus een zwarte munt geworden.

Vervolgens is wit aan zet en heeft de volgende mogelijkheden:

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   |   |   |   |   |   |
3 |   |   |   |   |   |   |   |   |
4 |   |   |   | o | x | · |   |   |
5 |   |   |   | x | x |   |   |   |
6 |   |   |   | · | x | · |   |   |
7 |   |   |   |   |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+  
    a   b   c   d   e   f   g   h
```

Er kunnen ook meerdere munten worden omgedraaid in één zet. Neem bvb. de volgende spelsituatie, waarbij wit aan zet is:

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   | x |   |   |   |   |
3 |   |   |   | x |   |   |   |   |
4 |   |   | x | x | x |   |   |   |
5 |   |   | x | x | o |   |   |   |
6 |   |   | x | o | o | o |   |   |
7 |   |   |   | o |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+
    a   b   c   d   e   f   g   h
```

Als wit een munt plaatst op `b5` dan zullen er drie zwarte munten omgedraaid worden:

```
  +---+---+---+---+---+---+---+---+
1 |   |   |   |   |   |   |   |   |
2 |   |   |   | x |   |   |   |   |
3 |   |   |   | x |   |   |   |   |
4 |   |   | x | x | x |   |   |   |
5 |   | o | o | o | o |   |   |   |
6 |   |   | o | o | o | o |   |   |
7 |   |   |   | o |   |   |   |   |
8 |   |   |   |   |   |   |   |   |
  +---+---+---+---+---+---+---+---+
    a   b   c   d   e   f   g   h
```

Wanneer een speler geen munt kan leggen, gaat de beurt automatisch naar de tegenstander. Indien beide spelers geen munten kunnen leggen, is het spel ten einde.


## Functionaliteit

In deze sectie beschrijven we de functionaliteit die we verwachten voor dit practicum.

* Voorzie een spelbord dat bestaat uit 8 rijen en 8 kolommen.
* Het spel moet gespeeld kunnen worden door twee menselijke spelers - je hoeft dus geen computerspeler te voorzien.
* Zorg ervoor dat er een visueel verschil is tussen een leeg vakje, een vakje met munt van speler 1 en een vakje met munt van speler 2.
* Het spel geeft weer welke speler aan zet is.
* De speler moet een munt in een vakje kunnen leggen. De munt moet zich gedragen zoals in de spelregels beschreven. De speler kan enkel een munt in een vakje leggen dat leeg is, en enkel wanneer dit minstens één munt van de tegenspeler omdraait. De kleur van de munt is uiteraard deze van de huidige speler.
* Het spel geeft elke beurt weer welke zetten er mogelijk zijn (dit kan bvb. door de rand van deze vakjes een bepaalde kleur te geven). Indien er geen mogelijke zetten zijn, wordt de speler hiervan op de hoogte gebracht en gaat de beurt naar de tegenspeler.
* Van zodra een speler een munt heeft geplaatst, dient de beurt automatisch over te gaan naar de tegenspeler.
* Het spel geeft de scores van beide spelers weer (het aantal munten op het bord in diens kleur).
* Het spel geeft een melding van zodra een speler gewonnen heeft. Ook als het bord vol is en er geen winnaar is, breng je de spelers hiervan op de hoogte.
* Aan het einde van een spel hebben de spelers de mogelijkheid om een nieuw spel te starten, zonder de pagina te refreshen.
* Toon een timer die aangeeft hoe lang het huidige spel al loopt.
* Voorzie ook een knop om onmiddellijk een nieuw spel te starten.


## Oplossingsstrategie

Om dit practicum op te lossen kan je het werk opsplitsen in een aantal stappen:

1. Maak eerst met behulp van HTML en CSS de volledige interface voor een willekeurig spelbord. Zorg ervoor dat je hierin alle grafische elementen al verwerkt.
2. Bedenk een representatie in JavaScript die de volledige staat van het spel kan beschrijven. Denk bijvoorbeeld aan de oefenzitting, waarin we een tweedimensionale lijst gebruikten om een Sliding Puzzle voor te stellen.
3. Schrijf een functie die de interne Javascript-representatie kan omzetten naar jouw HTML-representatie. Kijk bijvoorbeeld naar de functies *draw_puzzle* en *generate_puzzle_html* uit de oefenzitting.
4. Vervolgens kan je functies schrijven die gebruik maken van de interne voorstelling van je spel om het spel te spelen. Bij iedere aanpassing van de interne representatie kan je deze opnieuw omzetten naar HTML met behulp van je omzetfunctie. Je kan de functies telkens testen door deze uit te voeren vanuit de JavaScript console.
5. Maak gebruik van de `onclick`-attributen van HTML om ervoor te zorgen dat wanneer men op het spelbord klikt, de correcte JavaScript functies (beschreven in de vorige stap) uitgevoerd worden.
6. Je zal voor elke zet een aantal zaken moeten checken (bvb. is de zet geldig, welke munten van de tegenstander worden omgedraaid, is het spel afgelopen) die het verdere verloop van het spel bepalen. Dit zijn de belangrijkste functies met betrekking tot de logica van het spel. Probeer deze zo overzichtelijk mogelijk te houden.

> **Tip:** Wanneer je spel crasht, **lees dan de error-boodschap!** Dit beschrijft wat er precies fout is gegaan in je applicatie en helpt je om het probleem op te lossen. **Maak ook gebruik van de debugger** door breakpoints te plaatsen om zo de oorzaak van het probleem te vinden.


## Opgave downloaden

Via GitHub Classroom hebben jullie een eigen private kopie gekregen van deze repository.

Deze repository kan je clonen met het commando:

``` bash
$ git clone https://www.github.com/informaticawerktuigen2021-2022/project-javascript-reversi-[github_accountnaam]
```

De repository bevat reeds een basis-HTML bestand gekoppeld aan een leeg Javascript-bestand en een leeg CSS-bestand.
Vanuit deze bestanden kan je starten.
Het is echter ook toegestaan je eigen bestanden toe te voegen of de meegeleverde bestanden te verwijderen.
