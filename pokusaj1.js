
var muskaImena = [
    'Grom', 'Vuk', 'Lav', 'Miloš', 'Žuća',
    'Meda', 'Rajko', 'Gruja', 'Voja', 'Bane',
    'Šone', 'Rile', 'Žika', 'Perica', 'Saša',
    'Miki', 'Zoki', 'Tadija', 'Steva', 'Relja'
];

var zenskaImena = [
    'Ruža', 'Ceca', 'Maza', 'Dunja', 'Zara',
    'Kaca', 'Mina', 'Seka', 'Lela', 'Nela',
    'Rada', 'Jeca', 'Tara', 'Kaja', 'Mira',
    'Luna', 'Vesna', 'Sima', 'Beba', 'Daca'
];


function pretraziImena(pol, unos) {
    var izabraniNiz = pol === 'muški' ? muskaImena : zenskaImena;
    var filtriranaImena;

    if (unos) {
        filtriranaImena = izabraniNiz.filter(ime => ime.toLowerCase().startsWith(unos));
    } else {
        filtriranaImena = izabraniNiz;
    }

    var izabranoIme = filtriranaImena[Math.floor(Math.random() * filtriranaImena.length)];
    return izabranoIme;
}

document.getElementById('potvrdiBtn').addEventListener('click', function() {
    var pol = document.getElementById('polZivotinje').value;
    var unos = document.getElementById('unosSlova').value.trim().toLowerCase();
    var rezultat = pretraziImena(pol, unos);
    document.getElementById('rezultat').textContent = rezultat;
});



document.addEventListener('DOMContentLoaded', function() {
    const dodajPoljeBtn = document.getElementById('dodajPoljeBtn');
    let poljeDodato = false;
    document.getElementById('potvrdiBtn').addEventListener('click', pretraziImena);

    dodajPoljeBtn.addEventListener('click', function() {
        if (!poljeDodato) {
            const formDiv = document.getElementById('forma');
            const noviUnos = document.createElement('input');
            noviUnos.type = 'text';
            noviUnos.placeholder = 'Unesi imena kućnih ljubimaca, razdvojena zarezom';
            noviUnos.id = 'imenaKucnihLjubimaca';

            
            potvrdiBtn.addEventListener('click', function() {
                const imenaString = document.getElementById('imenaKucnihLjubimaca').value;
                if (imenaString.trim() === '') {
                    alert('Niste uneli ime. Molimo unesite imena kućnih ljubimaca.');
                } else if (imenaString.includes('. ')) {
                    alert('Imena treba da budu razdvojena zarezom, a ne tačkom i razmakom.');
                } else {
                    const imenaArray = imenaString.split(',').map(item => item.trim());
                    if(imenaArray.length === 1) {
                        alert('Molimo unesite više imena razdvojenih zarezom.');
                        return;
                    }
                    
                    const izabranoIme = imenaArray[Math.floor(Math.random() * imenaArray.length)];
                    document.getElementById('rezultat').textContent =  izabranoIme;
                }
            });

            formDiv.appendChild(noviUnos);
            formDiv.appendChild(potvrdiBtn);
            poljeDodato = true; 
        }
    });
});

function dodajIme() {
    var izabranoIme = document.getElementById('rezultat').textContent.replace('Izabrano ime: ', '');
    var pol = document.getElementById('polZivotinje').value;
    var lista = pol === 'muški' ? document.getElementById('listaImenaMuški') : document.getElementById('listaImenaŽenski');
    
  
    if (lista.childElementCount >= 5) {
        alert('Maksimalno 5 imena može biti dodato u listu.');
        return;
    }

  
    if (izabranoIme) {
        var li = document.createElement('li');
        li.textContent = izabranoIme;
        lista.appendChild(li);
    } else {
        alert('Niste izabrali ime. Molimo izaberite ime pre dodavanja.');
    }
}



var boje = ['red', 'blue', 'green']; 
var trenutniIndexBoje = 0; 

function ispisiImenaUnazad() {
    var pol = document.getElementById('polZivotinje').value;
    var lista = pol === 'muški' ? document.getElementById('listaImenaMuški') : document.getElementById('listaImenaŽenski');
    var listaImena = lista.getElementsByTagName('li');
    
    
    for (var i = 0; i < listaImena.length; i++) {
        var ime = listaImena[i].textContent;
        listaImena[i].textContent = ime.split('').reverse().join('');
        
       
        listaImena[i].style.color = boje[trenutniIndexBoje]; 
        listaImena[i].style.fontSize = '30px'; 
    }
    
    trenutniIndexBoje = (trenutniIndexBoje + 1) % boje.length;
}
