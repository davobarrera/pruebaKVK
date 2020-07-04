var emailsUnicos = function(emails) { 
    var cleanText = emails.replace(/\s/g,'').replace(/'/g,"\"")
    try{
        var emArray = JSON.parse(cleanText);
    }catch(err){
        alert('No tiene la estructura de un arreglo de strings')
    }
    
    return emArray[0]

};

var ejecutar = function (){
    var input = document.getElementById('input').value;
    var output = emailsUnicos(input);
    document.getElementById('output').value = output;
}