# Gerador de Nota Fiscal de Serviço (NFS-e) 📈

Este projeto tem como objetivo criar uma aplicação web que permita a geração de uma Nota Fiscal de Serviço (NFS-e) com base em dados fornecidos pelo usuário. Ele calcula automaticamente os impostos aplicáveis e exibe a nota fiscal gerada na própria página.

## Estrutura de Arquivos 📄

```
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilização da aplicação
└── script.js       # Lógica em JavaScript para cálculo e exibição
```

## Funcionalidades 🛠

1. **Entrada de Dados**: Permite ao usuário informar:
   - Valor da venda
   - Itens vendidos
   - Percentuais de impostos: IRPF, PIS, COFINS, INSS e ISSQN
2. **Cálculo Automático**: Calcula os valores de cada imposto e o total a ser pago.
3. **Geração de Nota Fiscal**: Exibe a nota fiscal com todos os dados informados e calculados.

## Pré-requisitos 🔧

- Navegador atualizado para abrir o arquivo HTML.

## Como Usar 🖥️

1. Faça o download ou clone este repositório:
   ```
   git clone https://github.com/souzalipe/Desafio-Saguitech
   ```

2. Navegue até o diretório do projeto:
   ```
   cd index.html
   ```

3. Abra o arquivo `index.html` no navegador para usar a aplicação.

## Exemplo de Uso

### Entrada:
- **Valor da Venda**: R$ 1000,00  
- **Itens Vendidos**: Consultoria em TI  
- **Impostos**:  
  - IRPF: 15%  
  - PIS: 1.65%  
  - COFINS: 3%  
  - INSS: 11%  
  - ISSQN: 5%

### Saída (Nota Fiscal Gerada):
```
Nota Fiscal de Serviço

Valor da Venda: R$ 1000.00
Itens Vendidos: Consultoria em TI
IRPF (R$): 150.00
PIS (R$): 16.50
COFINS (R$): 30.00
INSS (R$): 110.00
ISSQN (R$): 50.00
Total de Impostos: R$ 356.50
Valor Líquido: R$ 643.50
```

## Contribuindo 🤝

Se desejar contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Faça commit das alterações: `git commit -m 'Adicionei uma nova feature'`.
4. Faça o push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença 🖍

© *Felipe Nascimento de Souza*. Este projeto está licenciado sob os termos da [MIT License](LICENSE).
