import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import { criaData } from './criaData.js'
import BotaoDeleta from './deletaTarefa.js'
    
    
    export const handleNovoitem = (evento) => {
        evento.preventDefault()
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
       // const lista = document.querySelector('[data-list]') usado no carregaTarefa
        const input = document.querySelector('[data-form-input]')
        const valor = input.value;
        const calendario = document.querySelector('[data-form-date]');
        const data = moment(calendario.value);
        const horario = data.format('HH:mm')
        const dataFormatada = data.format('DD/MM/YYYY');
        const concluida = false

        const dados = {
            valor,
            dataFormatada,
            horario,
            concluida
        }
        const tarefasAtualizadas = [...tarefas, dados]

        //const criaTrarefa = Tarefa(dados);usado no carregaTarefa
        //lista.appendChild(criaTrarefa)usado no carregaTarefa
        localStorage.setItem('tarefas',JSON.stringify(tarefasAtualizadas))
        input.value = " "
        carregaTarefa();
        criaData()
        
    }
         
    export const Tarefa = ({valor, horario, concluida},id) => {
    const tarefa = document.createElement('li')
    

    const conteudo = `<p class="content">${horario} * ${valor}</p>`
    if (concluida) {
        tarefa.classList.add('done')
    }
        tarefa.classList.add('task')
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))

    return tarefa
}
    

        





