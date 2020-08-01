// Bootstrap
import '../node_modules/bootstrap/scss/bootstrap-grid.scss';

// Style
import './scss/index.scss';

// JS
import Person from './js/Person';

const person = new Person('John', 35);
console.log(person.info());