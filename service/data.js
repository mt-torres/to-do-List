export const removeDatasRepetidas = (datas) => {

    const datasUnicas = []

    datas.forEach(item => {
        if (datasUnicas.indexOf(item.dataFormatada) == -1) {
            datasUnicas.push(item.dataFormatada)
        }
    });

    return datasUnicas;

}

export const ordenaDatas = (data) =>{
    data.sort((a, b) =>{
        const primeiraData = moment(a,'DD/MM/YY').format('YYYYMMDD');
        const segundaData = moment(b,'DD/MM/YY').format('YYYYMMDD');
        return primeiraData - segundaData


    })
}