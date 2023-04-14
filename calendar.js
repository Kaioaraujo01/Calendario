function colorirDia(){
    let days      = document.getElementById('day').value;
    let color     = document.getElementById('color').value;
    let calendar  = document.getElementById('calendar');
    var td        = document.getElementsByTagName('td')[parseInt(days)+5];
    td.style.backgroundColor = color;
}