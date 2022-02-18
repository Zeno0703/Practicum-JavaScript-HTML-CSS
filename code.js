let mijn_reversi = [[0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 3, 0, 0, 0, 0,],
                    [0, 0, 3, 2, 1, 0, 0, 0,],
                    [0, 0, 0, 1, 2, 3, 0, 0,],
                    [0, 0, 0, 0, 3, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,]];


window.onload = function () {
    teken_reversi(mijn_reversi);
    score_label = document.getElementById("score");
    beurt_label = document.getElementById("huidige_beurt");
}


// Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7)
function teken_reversi(reversi) {
    let reversi_html = generate_reversi_html(reversi);
    document.getElementById("reversi_container").innerHTML = reversi_html;
}

// Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7)
function generate_reversi_html(reversi) {
    let result = "<table>";
    for (let i = 0; i < reversi.length; i++) {
        result += generate_row_html(reversi, i);
    }
    result += "</table>";
    return result;
}
// Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7)
function generate_row_html(reversi, row) {
    let result = "<tr>";
    for (let i = 0; i < reversi[row].length; i++) {
        result += generate_cell_html(reversi, row, i);
    }
    result += "</tr>";
    return result;
}
// Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7)
function generate_cell_html(reversi, row, col) {
    let result = `<td>${reversi[row][col]}</td>`;
    return result;
}
// Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7)
function generate_cell_html(reversi, row, col) {
    let cell_value = reversi[row][col];
    if (cell_value == 0) {
        return "<td class=emptyTile; onclick=square_click_handler(this)></td>"
    }
    else if (cell_value == 1) {
        return "<td ><span class=black_circle></span></td>"
        // Circle in table cell, StackOverflow, (https://stackoverflow.com/questions/54637061/draw-circle-in-middle-of-a-table-cell/54637119)
    }
    else if (cell_value == 2) {
        return "<td ><span class=white_circle></span></td>"
        // Circle in table cell, StackOverflow, (https://stackoverflow.com/questions/54637061/draw-circle-in-middle-of-a-table-cell/54637119)
    }
    else if (cell_value == 3) {
        return "<td onclick=square_click_handler(this)><span class=opa_circle></span></td>"
        // Circle in table cell, StackOverflow, (https://stackoverflow.com/questions/54637061/draw-circle-in-middle-of-a-table-cell/54637119)
    }
}


function square_click_handler(cell) {
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;
    // Oefenzitting JavaScrip IW, Kobe Vrancken, (https://www.youtube.com/watch?v=fw6kyTBAJro&list=PLNALXJPvImgt5QcsoDXA3QekBLrUDeIRV&index=7) 
    verwijder_vorige_klikplaatsen(mijn_reversi);
    plaats_steen(mijn_reversi, row, col);
    toon_mogelijke_klikplaatsen(mijn_reversi);
    teken_reversi(mijn_reversi);
    teken_score(mijn_reversi);
    check_game_over(mijn_reversi);
    if (check_game_over == true) {
        alert_winnaar(mijn_reversi);
    }
}


let score_label;

function teken_score(reversi) {
    let aantal_zwarte_stenen = 0;
    let aantal_witte_stenen = 0;
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            let waarde = reversi[i][j];
            if (waarde == 1) {
                aantal_zwarte_stenen += 1;
            } else if (waarde == 2) {
                aantal_witte_stenen += 1;
            }
        }

    }
    score_label.innerHTML = "Zwart: " + aantal_zwarte_stenen + " Wit: " + aantal_witte_stenen;
    // HTML implementatie JavaScript, YouTube, (https://www.youtube.com/watch?v=soF8LLYrZeY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=8&t=175s)
}


let beurt_label;

function beurt_updaten(beurt) {
    let huidige_beurt = "ZWART";
    if (beurt == 1) {
        huidige_beurt = "ZWART";
    } else if (beurt == 2) {
        huidige_beurt = "WIT";
    }
    beurt_label.innerHTML = "Huidige beurt: " + huidige_beurt;
}


let beurt = 1;

function plaats_steen(reversi, row, col) {

    if (reversi[row][col] != 0) {
        return;
    }

    if (check_mogelijke_klikplaats(reversi, row, col) == true) {
        let ingesloten_stenen = check_ingesloten_stenen(reversi, row, col);
        draai_stenen_om(reversi, ingesloten_stenen);
        // Othello Javascript functionality, (https://www.youtube.com/watch?v=XseyfdrHmoY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=7&t=892s)
        reversi[row][col] = beurt;              // Steen wordt geplaatst in kleur van beurt (cell_value).
        if (beurt == 1) {                       // beurt wisselen.
            beurt = 2;
            beurt_updaten(beurt);
            // verander_beurt(reversi, beurt);
        } else {
            beurt = 1;
            beurt_updaten(beurt);
            // verander_beurt(reversi, beurt);
        }
    }
}


function toon_mogelijke_klikplaatsen(reversi) {
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            if (check_mogelijke_klikplaats(reversi, i, j) == true) {
                reversi[i][j] = 3;
            }
        }
    }
}


function verwijder_vorige_klikplaatsen(reversi) {
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            if (reversi[i][j] == 3) {
                reversi[i][j] = 0;
            }
        }
    }
}



function check_mogelijke_klikplaats(reversi, row, col) {
    let ingesloten_stenen = check_ingesloten_stenen(reversi, row, col);
    if (ingesloten_stenen.length == 0) {                                        // Als er geen ingesloten cellen zijn op die bepaalde plaats dan is het geen mogelijke klikplaats.
        // Othello JavaScript functionality (https://www.youtube.com/watch?v=XseyfdrHmoY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=7&t=776s)
        return false;
    } else {
        return true;
    }
}


function check_ingesloten_stenen(reversi, row, col) {

    let ingesloten_stenen = [];

    if (reversi[row][col] == 0) {

        let mogelijk_ingesloten_stenen = [];                                    // Zolang je niet weet wat er na de huidige cel komt dan is het een mogelijk ingeloten steen. Pas als je weet of je volgende cel 0, de beurt of 3 is weet je of het daadwerkelijk een ingesloten cel is.
        let j = col;
        while (j < 7) {
            j += 1;
            let waarde_op_cel = reversi[row][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }       // Othello JavaScript functionality (https://www.youtube.com/watch?v=XseyfdrHmoY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=7&t=776s)
                        // Dit keert terug doorheen heel de functie.
                break;
            } else {
                let locatie_van_steen = { row: row, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }           // Othello JavaScript functionality (https://www.youtube.com/watch?v=XseyfdrHmoY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=7&t=776s)
                        // Dit keert terug doorheen heel de functie.
        }

        mogelijk_ingesloten_stenen = [];
        j = col;
        while (j > 0) {
            j -= 1;
            let waarde_op_cel = reversi[row][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: row, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        let i = row;
        while (i > 0) {
            i -= 1;
            let waarde_op_cel = reversi[i][col];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: col }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        i = row;
        while (i < 7) {
            i += 1;
            let waarde_op_cel = reversi[i][col];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: col }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        i = row;
        j = col;
        while (i < 7 && j < 7) {
            i += 1;
            j += 1;
            let waarde_op_cel = reversi[i][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        i = row;
        j = col;
        while (i < 7 && j > 0) {
            i += 1;
            j -= 1;
            let waarde_op_cel = reversi[i][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        i = row;
        j = col;
        while (i > 0 && j < 7) {
            i -= 1;
            j += 1;
            let waarde_op_cel = reversi[i][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }

        mogelijk_ingesloten_stenen = [];
        i = row;
        j = col;
        while (i > 0 && j > 0) {
            i -= 1;
            j -= 1;
            let waarde_op_cel = reversi[i][j];
            if (waarde_op_cel == 0 || waarde_op_cel == beurt || waarde_op_cel == 3) {
                if (waarde_op_cel == beurt) {
                    ingesloten_stenen = ingesloten_stenen.concat(mogelijk_ingesloten_stenen);
                }
                break;
            } else {
                let locatie_van_steen = { row: i, col: j }
                mogelijk_ingesloten_stenen.push(locatie_van_steen);
            }
        }
    }
    return ingesloten_stenen;
}


function draai_stenen_om(reversi, ingesloten_stenen) {
    for (let i = 0; i < ingesloten_stenen.length; i++) {
        let spot = ingesloten_stenen[i];
        if (reversi[spot.row][spot.col] == 1) {
            reversi[spot.row][spot.col] = 2;
        } else {
            reversi[spot.row][spot.col] = 1;
        }       // Othello JavaScript functionality, (https://www.youtube.com/watch?v=XseyfdrHmoY&list=PLA7VQFdAJ2vfytZFoskFIBYLlNuCUGi0N&index=7&t=776s)
    }
}


function reset() {
    mijn_reversi = [[0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 3, 0, 0, 0, 0,],
                    [0, 0, 3, 2, 1, 0, 0, 0,],
                    [0, 0, 0, 1, 2, 3, 0, 0,],
                    [0, 0, 0, 0, 3, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0,]];

    teken_reversi(mijn_reversi);
    teken_score(mijn_reversi);
    beurt = 1;
    beurt_updaten(beurt);
    totale_seconden = 0
    // timer_veranderen = setInterval(timer, 1000);
    // Als de functie alert_winnaar wordt opgeroepen en daarna reset werkt bovenstaande functie. Als je daarentegen op reset duwt zonder dat alert_winaar is opgeroepen is het interval heelmaal verknoeid.
}


// Timer, StackOverflow, (https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript)
let timer_veranderen = setInterval(timer, 1000);                                 // iedere duizend milliseconden wordt de functie timer() opnieuw doorlopen.
let totale_seconden = 0;

function timer() {
    totale_seconden += 1;
    let minuten = Math.floor(totale_seconden / 60);
    let seconden = totale_seconden - (minuten * 60);
    if (minuten < 10)
        minuten = "0" + minuten;
    if (seconden < 10)
        seconden = "0" + seconden;
    document.getElementById("timer").innerHTML = minuten + ":" + seconden;
}


let lege_cellen;

function check_game_over(reversi) {
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            let waarde = reversi[i][j];
            if (waarde == 0) {
                lege_cellen += 1
            }
        }
    }
    if (lege_cellen == 0) {
        return true;
    } else {
        return false;
    }
}


let winnaar;

function check_winnaar(reversi) {
    let aantal_zwarte_stenen = 0;
    let aantal_witte_stenen = 0;
    for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
            let waarde = reversi[i][j];
            if (waarde == 1) {
                aantal_zwarte_stenen += 1;
            } else if (waarde == 2) {
                aantal_witte_stenen += 1;
            }
        }
    }
    if (aantal_zwarte_stenen > aantal_witte_stenen) {
        winnaar = 1;
    } else if (aantal_witte_stenen > aantal_zwarte_stenen) {
        winnaar = 2
    } else if (aantal_witte_stenen == aantal_zwarte_stenen) {
        winnaar = 3
    }
}


function alert_winnaar(reversi) {
    check_winnaar(reversi);
    clearInterval(timer_veranderen);
    if (winnaar == 1) {
        alert("ZWART WINT!");
    } else if (winnaar == 2) {
        alert("WIT WINT!");
    } else if (winnaar == 3) {
        alert("GELIJKSPEL");
    }
}

/*
let aantal_klikbare_plaatsen;

function verander_beurt(reversi, beurt){
    for (let i = 0; i <= 7; i++){
        for (let j = 0; j <= 7; j++){
            let waarde = reversi[i][j]
            if (waarde == 3){
                aantal_klikbare_plaatsen += 1;
            }
        }
    }
    if (aantal_klikbare_plaatsen == 0 && beurt == 1){
        beurt = 2;
        alert("De beurt is aan de andere speler");
    } else if (aantal_klikbare_plaatsen == 0 && beurt == 2){
        beurt = 1;
        alert("De beurt is aan de andere speler");
    }
}
*/
