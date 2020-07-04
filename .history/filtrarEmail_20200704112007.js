var emailsUnicos = function(emails) { 
    var cleanText = emails.replace(/\s/g,'').replace(/'/g,"\"")
    var emArray = JSON.parse(cleanText);
    
    
    return emArray[0]

};

var ejecutar = function (){
    var input = document.getElementById('input').value;
    var output = emailsUnicos(input);
    document.getElementById('output').value = output;
}