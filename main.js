var btnCopy = document.getElementById('btnCopy');
var password = document.getElementById('password');
var result = '';
document.write(password);
var a ;
function copy(){
  if(result == ''){
    document.getElementById('alert1').style.display='';
    setTimeout(function(){
      document.getElementById('alert1').style.display='none';
    },3000);
  }
  else{
    password.select();
    document.execCommand('Copy');
    document.getElementById('alert').style.display='';
    setTimeout(function(){
      document.getElementById('alert').style.display='none';
    },3000);
  }
};
function getRandomArbitrary() {
    result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:;"<>.,/?';
    var charactersLength = characters.length;
    for ( var i = 0; i < 17; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    document.getElementById('password').value = result; 
}

