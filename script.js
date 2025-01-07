function gerarNotaFiscal() {
    const valorDaVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itensVenda').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    // Cálculo dos impostos 
    const valorIRF = valorDaVenda * irpf;

    const valorPIS = valorDaVenda * pis;

    const valorCOFINS = valorDaVenda * cofins;

    const valorINSS = valorDaVenda * inss;

    const valorISSQN = valorDaVenda * issqn;

    const totalImpostos = valorIRF + valorPIS + valorCOFINS + valorINSS + valorISSQN;

    const valorLiquido = valorDaVenda - totalImpostos;

    // Geração da Nota fislcal com DOM 
    const notaFiscalDiv = document.getElementById('notaFiscal');

    notaFiscalDiv.innerHTML = `
    <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Valor da Venda:</strong> R$ ${valorDaVenda.toFixed(2)}</p>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>IRPF (${(irpf * 100).toFixed(2)}%):</strong> R$ ${valorIRF.toFixed(2)}</p>
        <p><strong>PIS (${(pis * 100).toFixed(2)}%):</strong> R$ ${valorPIS.toFixed(2)}</p>
        <p><strong>COFINS (${(cofins * 100).toFixed(2)}%):</strong> R$ ${valorCOFINS.toFixed(2)}</p>
        <p><strong>INSS (${(inss * 100).toFixed(2)}%):</strong> R$ ${valorINSS.toFixed(2)}</p>
        <p><strong>ISSQN (${(issqn * 100).toFixed(2)}%):</strong> R$ ${valorISSQN.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
`;
}