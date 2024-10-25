# Prova de Conceito - API de Dados CSV para GeoSampa

Este projeto é uma prova de conceito para a GeoSampa, criada com o objetivo de expor os dados contidos em um arquivo CSV em formato JSON via API. A API lê um arquivo CSV com informações de IDH (Índice de Desenvolvimento Humano) dos anos 2000 e 2010, obtido no site da GeoSampa, e o torna acessível por uma rota GET.

## Estrutura do Projeto

- **`data/DEINFO_IDH_UDH_2000_2010_Dados.csv`**: Arquivo CSV com os dados de IDH, localizado na raiz do projeto na pasta `data`.
- **`src/modules/get-csv`**: Módulo responsável por ler e expor o CSV.
  - **`get-csv.routes.ts`**: Define as rotas para a API de CSV.
  - **`get-csv.controller.ts`**: Controlador que gerencia as requisições e respostas.
  - **`get-csv.service.ts`**: Serviço que lê o CSV e transforma os dados em JSON.
- **`src/routes/index.ts`**: Arquivo principal de rotas que integra as rotas do módulo `get-csv`.

## Requisitos

- **Node.js** (>=14.x)
- **Yarn** como gerenciador de pacotes

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL do repositório>
   cd nome-do-repositorio

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
       "Ano": "2010",
       "IDH": "0.805",
       "Nome_UH": "Subprefeitura Lapa",
       ...
     },
     ...
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

Esta aplicação demonstra uma prova de conceito de uma API que lê e expõe dados CSV para consulta de informações. A API foi criada para ser facilmente escalável, permitindo que os dados CSV obtidos na GeoSampa sejam acessados em formato JSON para análise e integração em sistemas de visualização de dados e inteligência urbana.
