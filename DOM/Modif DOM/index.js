let titreModif = document.querySelector("#titre")
titreModif.textContent = "Ma page dynamique";

let descriptionModif = document.querySelector("#description")
descriptionModif.textContent = "Cette page est générée par JavaScript.";

let zoneTextModif = document.querySelector("#zone-texte")
// ne prend pas en compte les balises html
zoneTextModif.textContent = "<strong>Gras</strong>"
// prend en compte les balises html
zoneTextModif.innerHTML = "<strong>Gras</strong>"

let zoneSecurite = document.querySelector("#zone-securite")
zoneSecurite.innerHTML = "<script>alert('XSS')</script>"

let  date = new Date()
switch (Date)
{
    case "6h - 12h":
        console.log("\"Bon matin !\"")
    break

    case "12h – 18h":
        console.log("Bon après-midi !")
    break

    case "18h – 22h":
        console.log("Bonsoir !")
    break

    case "22h – 6h":
        console.log("Bonne nuit !")
    break
}