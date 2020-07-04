var emailsUnicos = function(emails) { 
    var emArray = JSON.parse(emails.replace(/\s/g,''));
    
    
    return emails[0]

};

var ejecutar = function (){
    var input = document.getElementById('input').value;
    var output = emailsUnicos(input);
    document.getElementById('output').value = output;
}