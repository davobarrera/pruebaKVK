var emailsUnicos = function(emails) { 
    var locales = emails.reduce(
        (acc,e) =>{
            var local, dominio, dividido;
            dividido = e.split('@');
            local = dividido[0];
            dominio = dividido[1];
            local = local.replace(/\./g,'').split('+')[0]
            acc.push([local,dominio].join('@'))
            return acc
        },[] )
    return locales

};

var ejecutar = function (){
    var input = document.getElementById('input').value;
    var cleanText = input.replace(/\s/g,'').replace(/'/g,"\"")
    try{
        input = JSON.parse(cleanText);
    }catch(err){
        alert('No tiene la estructura de un arreglo de strings')
        return;
    }
    var output = emailsUnicos(input);
    output = output.reduce((acc, e) => acc + '\n' + e,'').replace(/,/g,'\n')
    document.getElementById('output').value = output;
}