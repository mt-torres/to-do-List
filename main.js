import {handleNovoitem} from './componentes/criaTarefa.js'
import {carregaTarefa} from './componentes/carregaTarefa.js'

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', handleNovoitem);
carregaTarefa();