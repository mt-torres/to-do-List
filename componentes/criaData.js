import { Tarefa } from "./criaTarefa.js";

export const criaData = (data) => {
   /*  const lista = document.querySelector('[data-list]')
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value).format('DD/MM/YYYY');;
    const linhaData = document.createElement('li')
    linhaData.classList.add('task') */

    const tarefa = JSON.parse(localStorage.getItem('tarefas')) ||[];
    const dataTopo = document.createElement('li')
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const conteudo = `<p class= "content-data">${dataMoment.format('DD/MM/YYYY')} </p> `
    const lista = document.querySelector('[data-list]');
           
    dataTopo.innerHTML = conteudo

    tarefa.forEach((item, id) => {
         const dia = moment(item.dataFormatada, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia);
        if (diff === 0) {
            dataTopo.appendChild(Tarefa(item,id))
        } 
        
        
    });

    return dataTopo

     
}
