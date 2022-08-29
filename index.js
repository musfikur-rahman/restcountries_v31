document.onreadystatechange = function () {
    RestCountriesByFetch();
}

document.getElementById('countryName').onchange = function () {
    ClearAllField();
    RestSingleCountriesByFetch();
}

async function RestCountriesByFetch() {
    let response = await fetch('https://restcountries.com/v3.1/all');
    try {
        let data = await response.text();
        let obj = JSON.parse(data);        
        var txt = '';
        txt += '<option value="">-------Select-------</option>';
        obj.forEach(element => (txt += '<option value=' + element.cca2 + '>' + element.name.common + '</option>'));
        document.getElementById('countryName').innerHTML = txt;
    }
    catch (error) {
        console.log(error.message);
    }
}

async function RestSingleCountriesByFetch() {
    var requestData = document.getElementById('countryName').value;
    if (requestData == '') {
        alert('Please select a country');
    }
    else {
        let response = await fetch('https://restcountries.com/v3.1/alpha/' + requestData);

        try {
            let responseData = await response.text();
            let obj = JSON.parse(responseData)[0];
            if (Object.hasOwn(obj.name, 'common') == true) { document.getElementById('common').value = obj.name.common; } else { document.getElementById('common').value = ''; }
            if (Object.hasOwn(obj.name, 'official') == true) { document.getElementById('official').value = obj.name.official; } else { document.getElementById('official').value = ''; }
            if (Object.hasOwn(obj.name, 'nativeName') == true) { for (let x in obj.name.nativeName) { document.getElementById('nativeName').value += x + '- '; for (let y in obj.name.nativeName[x]) { document.getElementById('nativeName').value += y + ': ' + obj.name.nativeName[x][y] + ', ' } } } else { document.getElementById('nativeName').value = ''; }
            if (Object.hasOwn(obj, 'tld') == true) { document.getElementById('tld').value = obj.tld; } else { document.getElementById('tld').value = ''; }
            if (Object.hasOwn(obj, 'cca2') == true) { document.getElementById('cca2').value = obj.cca2; } else { document.getElementById('cca2').value = ''; }
            if (Object.hasOwn(obj, 'ccn3') == true) { document.getElementById('ccn3').value = obj.ccn3; } else { document.getElementById('ccn3').value = ''; }
            if (Object.hasOwn(obj, 'cca3') == true) { document.getElementById('cca3').value = obj.cca3; } else { document.getElementById('cca3').value = ''; }
            if (Object.hasOwn(obj, 'cioc') == true) { document.getElementById('cioc').value = obj.cioc; } else { document.getElementById('cioc').value = ''; }
            if (Object.hasOwn(obj, 'independent') == true) { document.getElementById('independent').value = obj.independent; } else { document.getElementById('independent').value = ''; }
            if (Object.hasOwn(obj, 'status') == true) { document.getElementById('status').value = obj.status; } else { document.getElementById('status').value = ''; }
            if (Object.hasOwn(obj, 'unMember') == true) { document.getElementById('unMember').value = obj.unMember; } else { document.getElementById('unMember').value = ''; }
            if (Object.hasOwn(obj, 'currencies') == true) {  for (let x in obj.currencies) { document.getElementById('currencies').value += x + '- '; for (let y in obj.currencies[x]) { document.getElementById('currencies').value += y + ': ' + obj.currencies[x][y] + ', ' } } } else { document.getElementById('currencies').value = ''; }
            if (Object.hasOwn(obj, 'idd') == true) { for (let x in obj.idd) { document.getElementById('idd').value += x + '- '; for (let y in obj.idd[x]) { document.getElementById('idd').value += y + ': ' + obj.idd[x][y] + ', ' } } } else { document.getElementById('idd').value = ''; }
            if (Object.hasOwn(obj, 'capital') == true) { for (let x = 0; x < obj.capital.length; x++) { document.getElementById('capital').value += obj.capital[x]; } } else { document.getElementById('capital').value = ''; }
            if (Object.hasOwn(obj, 'altSpellings') == true) { for (let x = 0; x < obj.altSpellings.length; x++) { document.getElementById('altSpellings').value += '[' + obj.altSpellings[x] + ']'; } } else { document.getElementById('altSpellings').value = ''; }
            if (Object.hasOwn(obj, 'region') == true) { document.getElementById('region').value = obj.region; } else { document.getElementById('region').value = ''; }
            if (Object.hasOwn(obj, 'subregion') == true) { document.getElementById('subregion').value = obj.subregion; } else { document.getElementById('subregion').value = ''; }
            if (Object.hasOwn(obj, 'languages') == true) { for (let x in obj.languages) { document.getElementById('languages').value += obj.languages[x]; } } else { document.getElementById('subregion').value = ''; }
            if (Object.hasOwn(obj, 'translations') == true) { for (let x in obj.translations) { document.getElementById('translations').value += x + '- '; for (let y in obj.translations[x]) { document.getElementById('translations').value += y + ': ' + obj.translations[x][y] + ', ' } } } else { document.getElementById('translations').value = ''; }
            if (Object.hasOwn(obj, 'latlng') == true) { for (let x = 0; x < obj.latlng.length; x++) { document.getElementById('latlng').value += '[' + obj.latlng[x] + ']'; } } else { document.getElementById('latlng').value = ''; }
            if (Object.hasOwn(obj, 'landlocked') == true) { document.getElementById('landlocked').value = obj.landlocked; } else { document.getElementById('landlocked').value = ''; }
            if (Object.hasOwn(obj, 'borders') == true) { for (let x = 0; x < obj.borders.length; x++) { document.getElementById('borders').value += '[' + obj.borders[x] + ']'; } } else { document.getElementById('borders').value = ''; }
            if (Object.hasOwn(obj, 'area') == true) { document.getElementById('area').value = obj.area; } else { document.getElementById('area').value = ''; }
            if (Object.hasOwn(obj, 'demonyms') == true) { for (let x in obj.demonyms) { document.getElementById('demonyms').value += x + '- '; for (let y in obj.demonyms[x]) { document.getElementById('demonyms').value += y + ': ' + obj.demonyms[x][y] + ', ' } } } else { document.getElementById('demonyms').value = ''; }
            









            
            

            if (Object.hasOwn(obj, 'flags') == true) { document.getElementById('flag_1').src = obj.flags.svg; } 
            if (Object.hasOwn(obj, 'flags') == true) { document.getElementById('flag_2').src = obj.flags.png; } 
            document.getElementById('flag_1').className = 'w3-image w3-border w3-border-black';
            document.getElementById('flag_2').className = 'w3-image w3-border w3-border-black';
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

async function ClearAllField() {
    document.getElementById('common').value = '';
    document.getElementById('official').value = '';
    document.getElementById('nativeName').value = '';
    document.getElementById('tld').value = '';
    document.getElementById('cca2').value = '';
    document.getElementById('ccn3').value = '';
    document.getElementById('cca3').value = '';
    document.getElementById('cioc').value = '';
    document.getElementById('independent').value = '';
    document.getElementById('status').value = '';
    document.getElementById('unMember').value = '';
    document.getElementById('currencies').value = '';
    document.getElementById('idd').value = '';
    document.getElementById('capital').value = '';
    document.getElementById('altSpellings').value = '';
    document.getElementById('region').value = '';
    document.getElementById('subregion').value = '';
    document.getElementById('languages').value = '';
    document.getElementById('translations').value = '';
    document.getElementById('latlng').value = '';
    document.getElementById('landlocked').value = '';
    document.getElementById('borders').value = '';
    document.getElementById('area').value = '';
    document.getElementById('demonyms').value = '';
    














    document.getElementById('flag_1').src = '';
    document.getElementById('flag_2').src = '';
}
