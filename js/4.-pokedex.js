const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            document.getElementById("statusled").style.backgroundColor = "red";

            console.log(res);
            // pokeImage("./pokemon-sad.gif")
        }
        else {
            document.getElementById("statusled").style.backgroundColor = "blue";
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let pokeinfo = data.stats;
            pokeInfo(pokeinfo);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeInfo = (info) => {
    const pokeInfo = document.getElementById("pkmninfo");
    let infotext = "HP: " + info[0].base_stat +"\n";
    infotext += "Attack: " + info[1].base_stat +"\n";
    infotext += "Defense: " + info[2].base_stat +"\n";
    infotext += "Sp-Atk: " + info[3].base_stat +"\n";
    infotext += "Sp-Def: " + info[4].base_stat +"\n";
    infotext += "Speed: " + info[5].base_stat +"\n";
    pokeInfo.innerHTML=infotext;
    console.log(info);
}


