# Etapa 1: Definir a imagem base
FROM node:16

# Etapa 2: Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Etapa 3: Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Etapa 4: Instalar as dependências
RUN npm install

# Etapa 5: Copiar todo o restante do código para o diretório de trabalho
COPY . .

# Etapa 6: Expor a porta que o servidor vai rodar
EXPOSE 3000

# Etapa 7: Comando para rodar a aplicação quando o container for iniciado
CMD ["node", "src/app.js"]
