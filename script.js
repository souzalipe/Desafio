document.getElementById('gerarNota').addEventListener('click', () => {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    if (isNaN(valorVenda) || !itens || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const totalIRPF = valorVenda * irpf;
    const totalPIS = valorVenda * pis;
    const totalCOFINS = valorVenda * cofins;
    const totalINSS = valorVenda * inss;
    const totalISSQN = valorVenda * issqn;
    const totalImpostos = totalIRPF + totalPIS + totalCOFINS + totalINSS + totalISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    const notaFiscalHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>IRPF (R$):</strong> ${totalIRPF.toFixed(2)}</p>
        <p><strong>PIS (R$):</strong> ${totalPIS.toFixed(2)}</p>
        <p><strong>COFINS (R$):</strong> ${totalCOFINS.toFixed(2)}</p>
        <p><strong>INSS (R$):</strong> ${totalINSS.toFixed(2)}</p>
        <p><strong>ISSQN (R$):</strong> ${totalISSQN.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
});
