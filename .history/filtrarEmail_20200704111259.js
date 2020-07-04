var emailsUnicos = function(emails) { 
    return emails

};

var ejecutar = function (){
    var input = document.getElementById('input').value;
    var output = emailsUnicos(input);
    document.getElementById('output').value = output;
}