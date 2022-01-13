const api = "https://restcountries.com/v2/all";

async function getData() {
    const response = await fetch(api)
    const data = await response.json();

    printData(data)
    console.log(data)

}
function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")

    header.innerHTML += `
        <select class="form-control" onchange="getCou(this.value)">
            <option>Select</option>
            ${data.map(m => `<option>${m.name}</option>`)}
        </select>`

}
content.innerHTML = `
<table id="table" class="table table-dark">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Alpha Code</th>
                <th scope="col">calling Codes</th>
                <th scope="col">Capital</th>
                <th scope="col">Subregion</th>
                <th scope="col">Region</th>
                <th scope="col">Timezones</th>
                <th scope="col">Native Name</th>

            </tr>
        </thead>
    <tbody>`;

async function getCou(name) {
    const response = await fetch(api)
    const countries = await response.json()

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name == name) {
            table.innerHTML +=

                `
                <img src="${countries[i].flags}">            
     <tbody>            
            <tr>
                <th scope="row"> ${countries[i].name}</th>
                <th scope="row">${countries[i].alpha2Code}</th>
                <th scope="row"> ${countries[i].callingCodes}</th>
                <th scope="row">${countries[i].capital}</th>
                <th scope="row"> ${countries[i].subregion}</th>
                <th scope="row">${countries[i].region}</th>
                <th scope="row"> ${countries[i].timezones}</th>
                <th scope="row">${countries[i].nativeName}</th>
            
            </tr>
    </tbody>      
    </table>
   
            `
            break;
        }
    }
    content.innerHTML +=
        `
       
   
    `
}

// <td>${code}</td>
// <td>${codes}</td>
// <td>${currency}</td>
// <td>${lang}</td>
// <td>${capital}</td>
// <td>${region}</td>
// <td>${name}</td>



getData()
