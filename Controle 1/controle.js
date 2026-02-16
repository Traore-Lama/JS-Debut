let revenues =
    [
        {libelle: "Salaire", montant: 2000},
        {libelle: "Freelance", montant: 500}
    ]
let depenses =
    [
        {libelle: "Loyer", montant: 800},
        {libelle: "course", montant: 300},
        {libelle: "transport", montant: 150},
        {libelle: "loisirs", montant: 200}
    ]
let calculTotal2 = 0;
function calculerTotal(operations)
{
    for (let i = 0; i < operations.length; i++)
    {
        calculTotal2 += operations[i].montant
    }
    return calculTotal2
}
console.log(calculerTotal(revenues))

let titre = document.querySelector("#titre-budget")
titre.textContent("emfgjnniewjvjwjweicmewcmwvmwo")
