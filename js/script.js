import { getRndInteger } from './utility.js';

// SNACK 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo (tableName),
// nome dell'ospite (guestName),
// posto occupato (place),
// Generiamo e stampiamo in console la lista per i segnaposto.
let elBtnVip = document.getElementById("btn-vip");

elBtnVip.addEventListener("click", () => {
    display.innerHTML = "";

    let guestName = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
    let list = guestName.map((vipName, index) => {
        return {
            tableName: "Tavolo Vip",
            guestName: vipName,
            place: index + 1
        };
    });
    console.log(list);

    let ul = '<ul>';
    list.forEach(element => {
        ul += `<li><span class="text-primary">Table name:</span> ${element.tableName} - <span class="text-primary">Guest Name:</span> ${element.guestName} - <span class="text-primary">Place:</span> N°${element.place}</li>`;
    });
    ul += '</ul>';

    display.innerHTML = ul;
});
// SNACK 2
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

let elBtnStudents = document.getElementById("btn-students");

elBtnStudents.addEventListener("click", () => {
    display.innerHTML = "";

    let id = [213, 110, 250, 145, 196, 102, 120];
    let name = ["Marco della Rovere", "Paola Cortellessa", "Andrea Mantegna", "Gaia Borromini", "Luigi Grimaldello", "Piero della Francesca", "Francesca da Polenta"];
    let grades = [78, 96, 48, 74, 68, 50, 84];

    let elDiv = document.createElement("div");
    elDiv.className = "d-flex gap-5"

    let students = name.map((name, i) => {
        return {
            id: id[i],
            name: name,
            grades: grades[i]
        }
    })
    console.log(students);
    let ul = document.createElement("ul")
    ul.innerHTML = `<span class="text-primary">STUDENTS:</span><br><br>`
    students.forEach(element => {
        ul.innerHTML += `<li>${element.name.toUpperCase()}</li>`;
    });


    let students70 = students.filter((element) => {
        return element.grades > 70
    })
    console.log(students70);
    let ul2 = document.createElement("ul")
    ul2.innerHTML = ` <span class="text-primary">STUDENTS (GRADES > 70):</span><br><br>`
    students70.forEach(element => {
        ul2.innerHTML += `<li>${element.name}</li>`;
    });


    let stundents120 = students.filter((element) => {
        return element.grades > 70 && element.id > 120
    })
    console.log(stundents120);
    let ul3 = document.createElement("ul")
    ul3.innerHTML = ` <span class="text-primary">STUDENTS (GRADES > 70, ID > 120):</span><br><br>`
    stundents120.forEach(element => {
        ul3.innerHTML += `<li>${element.name}</li>`;
    });

    elDiv.append(ul, ul2, ul3)
    display.append(elDiv)
});

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

let elBtnBikes = document.getElementById("btn-bikes");

elBtnBikes.addEventListener("click", () => {
    display.innerHTML = "";

    let bikes = [
        {
            name: "Bianchi Oltre XR4",
            weight: 7.1
        },
        {
            name: "Trek Domane SLR 9",
            weight: 7.3
        },
        {
            name: "Specialized S-Works Roubaix",
            weight: 7.4
        },
        {
            name: "Cannondale SuperSix EVO",
            weight: 6.8
        },
        {
            name: "Giant TCR Advanced Pro",
            weight: 7.2
        },
        {
            name: "Pinarello Dogma F12",
            weight: 6.9
        },
        {
            name: "Cervelo R5",
            weight: 7.5
        },
        {
            name: "Scott Addict RC",
            weight: 7.0
        },
        {
            name: "Argon 18 Gallium Pro",
            weight: 7.6
        },
        {
            name: "Colnago C64",
            weight: 7.7
        }
    ];
    console.log(bikes);

    let ul = document.createElement("ul")
    ul.innerHTML = `<span class="text-primary">BIKES:</span><br><br>`
    bikes.forEach(element => {
        ul.innerHTML += `<li>Bikes Name: <span class="text-primary">${element.name}</span> Bike Weight: <span class="text-primary">${element.weight} kg</span></li>`;
    });

    let lightestBike = bikes.reduce((min, current) => (current.weight < min.weight ? current : min), bikes[0]);
    console.log(lightestBike);

    const { name, weight } = lightestBike;

    console.log(`The lightest bike is ${name} with a weight of ${weight} kg.`);

    let elDiv = document.createElement("div");
    elDiv.className = "d-flex align-items-center gap-5";
    elDiv.append(ul);
    elDiv.innerHTML += `<div>The lightest bike is <span class="text-primary">${name}</span> with a weight of <span class="text-primary">${weight} kg</span>.</div>`;
    display.append(elDiv);
});

// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
let elBtnTeams = document.getElementById("btn-teams");

elBtnTeams.addEventListener("click", () => {
    display.innerHTML = "";

    let teams = [
        { name: "Manchester United", pointsScored: 0, foulsSuffered: 0 },
        { name: "Liverpool", pointsScored: 0, foulsSuffered: 0 },
        { name: "Barcelona", pointsScored: 0, foulsSuffered: 0 },
        { name: "Real Madrid", pointsScored: 0, foulsSuffered: 0 },
        { name: "Juventus", pointsScored: 0, foulsSuffered: 0 },
        { name: "Bayern Munich", pointsScored: 0, foulsSuffered: 0 },
        { name: "Paris Saint-Germain", pointsScored: 0, foulsSuffered: 0 },
        { name: "Inter Milan", pointsScored: 0, foulsSuffered: 0 },
        { name: "Atletico Madrid", pointsScored: 0, foulsSuffered: 0 },
        { name: "AC Milan", pointsScored: 0, foulsSuffered: 0 }
    ];
    console.log(teams);

    teams.forEach((element) => {
        element.pointsScored = getRndInteger(60, 100);
        element.foulsSuffered = getRndInteger(20, 50);
    });
    console.log(teams);

    let teamsWithFouls = teams.map(({ name, foulsSuffered }) => ({ name, foulsSuffered }));

    console.log(teamsWithFouls);

    let elDiv = document.createElement("div");
    elDiv.className = "d-flex align-items-center gap-5";

    let ul = document.createElement("ul")
    ul.innerHTML = `<span class="text-primary">TEAMS:</span><br><br>`
    teams.forEach(element => {
        ul.innerHTML += `<li>Team Name: <span class="text-primary">${element.name}</span>, Team Point Scored: <span class="text-primary">${element.pointsScored}</span>, Team Fouls Suffered: <span class="text-primary">${element.foulsSuffered}</span></li>`;
    });
    
    let ul2 = document.createElement("ul")
    ul2.innerHTML = `<span class="text-primary">TEAMS and FOULS:</span><br><br>`
    teamsWithFouls.forEach(element => {
        ul2.innerHTML += `<li>Team Name: <span class="text-primary">${element.name}</span>, Team Fouls Suffered: <span class="text-primary">${element.foulsSuffered}</span></li>`;
    });
    
    elDiv.append(ul, ul2);
    display.append(elDiv);
});
