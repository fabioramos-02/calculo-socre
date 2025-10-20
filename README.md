# Serviço de Cálculo de Score

Este é um serviço de API RESTful desenvolvido com **Node.js** e **Express** para calcular um **score fictício** baseado no CPF fornecido pelo usuário.

## Funcionalidade

A API recebe um **CPF** via método `POST` e retorna um **score fictício** (entre 0 e 100) calculado com base no CPF.

## Requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes)

## Instalação

### Passo 1: Clonar o Repositório

Clone o repositório para a sua máquina local:

```bash
git clone https://github.com/usuario/calculo-score.git
cd calculo-score
```

### Passo 2: Instalar Dependências

Instale as dependências necessárias para o projeto:

```bash
npm install
```

### Passo 3: Executar a Aplicação

Para rodar a aplicação localmente, use o comando:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Produção

A aplicação **Cálculo Score API** está agora publicada e em funcionamento no **Render.com**. Você pode acessar a aplicação a partir do seguinte endereço:

**URL de Produção:** [https://calculo-socre.onrender.com](https://calculo-socre.onrender.com)

A documentação Swagger também está disponível em produção:

```
https://calculo-socre.onrender.com/api-docs
```

## API

### POST /score

**Descrição:** Calcula o score fictício baseado no CPF.

**Requisição:**

Corpo da requisição (JSON):

```json
{
    "cpf": "12345678901"
}
```

**Resposta:**

Sucesso (200 OK):

```json
{
    "cpf": "12345678901",
    "score": 75
}
```

Erro (400 Bad Request):

Caso o CPF não seja fornecido:

```json
{
    "message": "CPF é obrigatório"
}
```

Caso o CPF seja inválido:

```json
{
    "message": "CPF inválido"
}
```

## Documentação Swagger

A documentação da API está disponível em:

```
http://localhost:3000/api-docs
```

## Docker

### Passo 1: Construir a Imagem Docker

Para construir a imagem Docker do serviço, execute o comando:

```bash
docker build -t calculo-score .
```

### Passo 2: Rodar o Container Docker

Após a construção da imagem, execute o serviço em um container:

```bash
docker run -p 3000:3000 calculo-score
```

A aplicação estará acessível em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construir APIs RESTful.
- **Swagger**: Ferramenta para gerar e documentar a API.
- **Docker**: Containerização do serviço.

## Contribuição

Se você deseja contribuir para o projeto, fique à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está sob a licença MIT.