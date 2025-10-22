# Documento de Requisitos para Sistema de Análise de Crédito

## Visão Geral

O objetivo deste projeto é criar um sistema de **Análise de Crédito** utilizando uma arquitetura de **Microserviços**, desenvolvendo cada serviço de forma independente, escalável e eficiente. A aplicação será construída com as tecnologias **JavaScript**, **TypeScript**, **Express** e **Node.js**.

## Objetivos do Sistema

- Validar dados do cliente.
- Calcular o score de crédito.
- Analisar o risco associado ao cliente.
- Aprovar ou reprovar o crédito com base nas análises.

## Arquitetura de Microserviços

A arquitetura será baseada em quatro microserviços principais:

1. **Serviço de Validação de Dados**
2. **Serviço de Cálculo de Score de Crédito**
3. **Serviço de Análise de Risco**
4. **Serviço de Aprovação de Crédito**

### API Gateway

- Será responsável por ser o ponto de entrada da aplicação.
- Encaminha as requisições para os microserviços apropriados.
- Possui endpoints básicos para interação com o sistema.

---

## Requisitos Funcionais

### 1. Serviço de Validação de Dados
- **Objetivo**: Validar as informações do cliente, como nome, CPF, data de nascimento e endereço.
- **Endpoints**:
  - `POST /validar-dados`: Recebe os dados do cliente e retorna se estão válidos ou não.
- **Função**:
  - Verificar a validade do CPF.
  - Verificar se o nome e a data de nascimento estão no formato correto.

### 2. Serviço de Cálculo de Score de Crédito
- **Objetivo**: Calcular o score de crédito do cliente com base em seu histórico financeiro.
- **Endpoints**:
  - `GET /calcular-score/{cpf}`: Retorna o score de crédito do cliente.
- **Função**:
  - Consultar o histórico financeiro do cliente.
  - Calcular o score com base em uma fórmula simples (por exemplo, média de pagamentos).

### 3. Serviço de Análise de Risco
- **Objetivo**: Avaliar o risco de conceder crédito ao cliente.
- **Endpoints**:
  - `GET /analise-risco/{cpf}`: Retorna o risco associado ao cliente.
- **Função**:
  - Avaliar o risco com base em uma pontuação interna, levando em consideração a inadimplência ou outros fatores.
  - Retorna um valor de risco de "baixo", "médio" ou "alto".

### 4. Serviço de Aprovação de Crédito
- **Objetivo**: Aprovar ou reprovar o crédito com base nas análises anteriores.
- **Endpoints**:
  - `POST /aprovar-credito`: Recebe o CPF e a análise de risco e retorna a decisão de aprovação ou reprovação.
- **Função**:
  - Verificar se o risco é baixo o suficiente para aprovação.
  - Aprovar ou reprovar o crédito com base no score e no risco.

---

## Requisitos Não Funcionais

- **Escalabilidade**: Cada microserviço deve ser independente e escalável.
- **Resiliência**: Se um microserviço falhar, os outros devem continuar funcionando.
- **Desempenho**: As respostas de cada microserviço devem ser rápidas (tempo de resposta < 500ms).
- **Segurança**: A comunicação entre os microserviços deve ser segura, utilizando HTTPS e autenticação via token JWT (JSON Web Token).
- **Tecnologia**: O sistema será desenvolvido utilizando:
  - Node.js
  - Express.js
  - TypeScript

---

## Banco de Dados

- **Cada microserviço terá seu próprio banco de dados**, para garantir que sejam independentes e escaláveis.
  - **Serviço de Validação de Dados**: Banco relacional (MySQL, PostgreSQL) para armazenar dados do cliente.
  - **Serviço de Cálculo de Score de Crédito**: Banco de dados NoSQL (MongoDB) para armazenar históricos financeiros.
  - **Serviço de Análise de Risco**: Banco de dados relacional (MySQL, PostgreSQL) para armazenar registros de risco e pontuação.
  - **Serviço de Aprovação de Crédito**: Banco relacional (MySQL, PostgreSQL) para armazenar as aprovações de crédito.

---

## Comunicação entre Microserviços

- **API REST**: A comunicação entre os microserviços será realizada por meio de APIs RESTful.
- **Formato de Dados**: JSON será utilizado para todas as trocas de dados entre os microserviços.
- **Mensageria (opcional)**: Para aumentar a resiliência, pode-se considerar o uso de filas (RabbitMQ, Kafka) para comunicação assíncrona entre os microserviços, caso seja necessário.

---

## Cronograma de Desenvolvimento

1. **Fase 1**: Configuração do ambiente e estrutura inicial de microserviços (API Gateway e Serviço de Validação de Dados).
2. **Fase 2**: Desenvolvimento do Serviço de Cálculo de Score e Serviço de Análise de Risco.
3. **Fase 3**: Implementação do Serviço de Aprovação de Crédito.
4. **Fase 4**: Testes, otimização e deploy.

---

## Considerações Finais

Este documento define uma base simples para a construção de um sistema de análise de crédito com microserviços. O foco está em garantir uma arquitetura limpa e escalável, com independência entre os serviços. O uso de Node.js e Express proporciona uma base leve e eficiente para construção de APIs RESTful.

