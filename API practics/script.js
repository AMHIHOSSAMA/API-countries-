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
        <select class="form-control" id="sel" onchange="getCou(this.value)">
            <option>Select</option>
            ${data.map(m => `<option>${m.name}</option>`)}
        </select>`

}
content.innerHTML = `
<table id="table" class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Flag</th>
                <th scope="col">Alpha Code</th>
                <th scope="col">calling Codes</th>
                <th scope="col">Capital</th>
                <th scope="col">Subregion</th>
                <th scope="col">Region</th>
                <th scope="col">Timezones</th>
                <th scope="col">Native Name</th>

            </tr>
        </thead>
    <tbody >`;

async function getCou(name) {
    const response = await fetch(api)
    const countries = await response.json()

    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name == name) {
            table.innerHTML +=

                `
                          
     <tbody id="tbody">            
            <tr>
                <td id="fsttd" scope="row"> ${countries[i].name}</td>
                <td scope="row"><img id="tableimg" src=" ${countries[i].flag}" alt=""></td>
                <td scope="row">${countries[i].alpha2Code}</td>
                <td scope="row"> ${countries[i].callingCodes}</td>
                <td scope="row">${countries[i].capital}</td>
                <td scope="row"> ${countries[i].subregion}</td>
                <td scope="row">${countries[i].region}</td>
                <td scope="row"> ${countries[i].timezones}</td>
                <td scope="row">${countries[i].nativeName}</td>
            
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

async function allData() {
    const allcount = document.querySelector("#allCount");
    const response = await fetch(api)
    const cytis = await response.json()

    console.log(cytis.length);
    for (let i = 1; i < cytis.length; i++) {
        console.log(1);
        allcount.innerHTML += `
            <div class="col-xs-12 col-md-4">
                <span id="span">${cytis[i].alpha2Code}</span>
                <img data-pagespeed-url-hash="1099758570" id="flags" src="${cytis[i].flag}">
                <a href="">${cytis[i].name}</a>
            </div>    
        `
    }
   
    

}
async function rows() {
    const response = await fetch(api)
    const cytis = await response.json()
    const col1 = document.querySelector("#col1");
    const col2 = document.querySelector("#col2");
    const col3 = document.querySelector("#col3");
    col1.innerHTML += `
             <img data-pagespeed-url-hash="1099758570" class="colimg" src="${cytis[151].flag}">
             <h6>Alpha Code &nbsp;&nbsp; : ${cytis[151].alpha2Code}</h6>
             <h6>Capital &nbsp;&nbsp; : ${cytis[151].capital}</h6>
             <h6>Subregion &nbsp;&nbsp;: ${cytis[151].subregion}</h6>
             <h6>Region &nbsp;&nbsp;: ${cytis[151].region}</h6>
             <h6>Timezones &nbsp;&nbsp;: ${cytis[151].timezones}</h6>
             <h6>Native Name &nbsp;&nbsp;: ${cytis[151].nativeName}</h6>
    `
    col2.innerHTML += `
             <img data-pagespeed-url-hash="1099758570" class="colimg" src="${cytis[30].flag}">
             <h6>Alpha Code &nbsp;&nbsp; : ${cytis[30].alpha2Code}</h6>
             <h6>Capital &nbsp;&nbsp; : ${cytis[30].capital}</h6>
             <h6>Subregion &nbsp;&nbsp;: ${cytis[30].subregion}</h6>
             <h6>Region &nbsp;&nbsp;: ${cytis[30].region}</h6>
             <h6>Timezones &nbsp;&nbsp;: ${cytis[30].timezones}</h6>
             <h6>Native Name &nbsp;&nbsp;: ${cytis[30].nativeName}</h6>
    `
    col3.innerHTML += `
             <img data-pagespeed-url-hash="1099758570" class="colimg" src="${cytis[160].flag}">
             <h6>Alpha Code &nbsp;&nbsp; : ${cytis[160].alpha2Code}</h6>
             <h6>Capital &nbsp;&nbsp; : ${cytis[160].capital}</h6>
             <h6>Subregion &nbsp;&nbsp;: ${cytis[160].subregion}</h6>
             <h6>Region &nbsp;&nbsp;: ${cytis[160].region}</h6>
             <h6>Timezones &nbsp;&nbsp;: ${cytis[160].timezones}</h6>
             <h6>Native Name &nbsp;&nbsp;: ${cytis[160].nativeName}</h6>
    `
}



getData()
allData()
rows()