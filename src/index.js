require('formdata-polyfill');
import './styles/styles.css';
import './components/contact';

let today = new Date();
let currentYear = today.getFullYear();

function getAge() {
  let birthDate = new Date('1994/09/17');
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.getElementById('age').innerText = getAge();

document.getElementById('copyright-year').innerText = currentYear;
