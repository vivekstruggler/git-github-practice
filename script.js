alert('js is loaded');
function headingfunction() {
    heading1.style.color = "yellow";
    heading1.style.fontSize = '5rem';
}
function headingfunction2() {
    heading1.style.color = "red";
    heading1.style.fontSize = '2rem';

}
function headingfunction3() {
    heading1.style.fontSize = '5rem';
}
let heading1 = document.getElementById("heading1");
heading1.addEventListener('mouseenter', headingfunction);
heading1.addEventListener('mouseout', headingfunction2);
heading1.addEventListener('click', headingfunction3);