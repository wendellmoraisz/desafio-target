const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const outros = 19849.53;

const rendaPorEstado = [SP, RJ, MG, ES, outros];

function calcularRendaPercentual() {
    const rendaTotal = rendaPorEstado.reduce((mes, proximoMes) => mes + proximoMes);
    const percentualPorEstado = rendaPorEstado.map(estado => 
        parseFloat((estado * 100 / rendaTotal).toFixed(2)));

    return percentualPorEstado;
};

calcularRendaPercentual();