const BotaoConclui = (atualiza,id) => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza,id))

    return botaoConclui

}

const concluirTarefa = (atualiza, id) => {
    const tarefasCadatradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadatradas[id].concluida = !tarefasCadatradas[id].concluida;

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadatradas))


    atualiza()



}   

export default BotaoConclui

