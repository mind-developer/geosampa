# API de Dados CSV para GeoSampa

Este projeto é uma API para a GeoSampa, criada com o objetivo de expor os dados contidos em um arquivo CSV em formato JSON via API. A API lê um arquivo CSV com informações de IDH (Índice de Desenvolvimento Humano) dos anos 2000 e 2010, obtido no site da GeoSampa, e o torna acessível por uma rota GET.

## Estrutura do Projeto

- **`data/DEINFO_IDH_UDH_2000_2010_Dados.csv`**: Arquivo CSV com os dados de IDH, localizado na raiz do projeto na pasta `data`.
- **`src/modules/get-csv`**: Módulo responsável por ler e expor o CSV.
  - **`get-csv.routes.ts`**: Define as rotas para a API de CSV.
  - **`get-csv.controller.ts`**: Controlador que gerencia as requisições e respostas.
  - **`get-csv.service.ts`**: Serviço que lê o CSV e transforma os dados em JSON.
- **`src/routes/server.ts`**: Arquivo principal de rotas que integra as rotas do módulo `get-csv`.

## Requisitos

- **Node.js** (>=14.x)
- **Yarn** como gerenciador de pacotes

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/mind-developer/geosampa-cp.git
   cd geosampa-cp

2. **Instale as dependências:**
   ```bash
   yarn install

3. **Estrutura de arquivos necessária:**
   
   O arquivo CSV `DEINFO_IDH_UDH_2000_2010_Dados.csv` deve estar localizado em `data/` na raiz do projeto. Este arquivo contém os dados obtidos do site GeoSampa.

4. **Inicie o servidor:**

   Para iniciar o servidor em modo de desenvolvimento:
   ```bash
   yarn dev

## Endpoints

### GET `/api/csv-data`

Retorna os dados do arquivo CSV em formato JSON.

- **Exemplo de resposta:**
   ```json
   [
    {
        "COD_ID": "1355030801001",
        "NOME_UDH": "Jardim Anália Franco / Vila Formosa",
        "NOME_MUN": "São Paulo (SP)",
        "ANO": "2000",
        "ESPVIDA": "76.57",
        "T_ANALF15M": "2.35",
        "T_FBMAS": "104.75",
        "GINI": "0.47",
        "RDPC": "1562.09"
    },
    {
        "COD_ID": "1355030802002",
        "NOME_UDH": "Mooca / Tatuapé",
        "NOME_MUN": "São Paulo (SP)",
        "ANO": "2010",
        "ESPVIDA": "78.23",
        "T_ANALF15M": "2.15",
        "T_FBMAS": "105.34",
        "GINI": "0.45",
        "RDPC": "1684.32"
    }
  ]


### Exemplo de Uso
Abra seu navegador ou uma ferramenta como o **Postman** e faça uma requisição GET para:
    ```bash
    http://localhost:3000/api/csv-data

A resposta será uma lista de objetos JSON representando cada linha do arquivo CSV.

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **csv-parser** para leitura e manipulação do CSV

## Objetivo

Esta aplicação demonstra uma API que lê e expõe dados CSV para consulta de informações. A API foi criada para ser facilmente escalável, permitindo que os dados CSV obtidos na GeoSampa sejam acessados em formato JSON para análise e integração em sistemas de visualização de dados e inteligência urbana.
