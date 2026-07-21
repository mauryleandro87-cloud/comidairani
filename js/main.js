const langButtons = document.querySelectorAll("[data-lenguaje]");
const textsToChange = document.querySelectorAll("[data-section]");
console.log(textsToChange);
 /*           console.log(section);
            console.log(value);
            console.log(data);*/

langButtons.forEach((button)=>{
    button.addEventListener("click",() => {
        //console.log(button.dataset.lenguaje);
        fetch(`../leguajes/${button.dataset.lenguaje}.json`)
        .then(res => res.json())
       // .then(data => console.log(data))
        .then(data => {
            textsToChange.forEach((el) => {
            const section = el.dataset.section;
            const value = el.dataset.value;
            
           el.innerHTML = data[section][value];

        })
        })
    })
})