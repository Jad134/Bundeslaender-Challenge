let bundeslaender = [];


async function init() {
    let url = `./bundesland.json`;
    let response = await fetch(url);
    bundeslaender = await response.json();
    render()
}

function render() {
    for (let i = 0; i < bundeslaender.length; i++) {
        let land = bundeslaender[i]
        let name = land['name'];
        let population = land['population'];
        let link = land['url']

        document.getElementById('Show-content').innerHTML += /*html*/`
        <a id="link${i}" class="container" target="_blank" href="${link}">
            <div  id="container${i}">
              <h3>${name}</h3>
              <span id="population"> ${population} Millionen</span>
            </div></a>
        
        `;
        showLetters(i)
    }
    
}

function showLetters(i) {
    let land = bundeslaender[i];
    let name = land['name'];
    let firstLetter = name.charAt(0);

    if (!document.getElementById(firstLetter)) {
        document.getElementById('Letters').innerHTML += /*html*/`
            <div class="letter" id="${firstLetter}" onclick="filterByLetter('${firstLetter}')">${firstLetter}</div>
        `;
    }
}

function filterByLetter(letter) {
    for (let i = 0; i < bundeslaender.length; i++) {
        let land = bundeslaender[i];
        let name = land['name'];
        let container = document.getElementById(`link${i}`);
        
        if (name.charAt(0) === letter) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}


