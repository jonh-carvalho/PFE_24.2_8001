## Introdução ao React Usando CDN

### 1. **Criar um Novo Arquivo HTML:**

* **Nome:** index.html
* **Conteúdo inicial:** Um simples documento HTML com uma div com um ID específico para servir como ponto de montagem para o componente React.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Introdução ao React</title>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="app.js"></script>
</body>
</html>
```

### 2. **Criar um Arquivo JavaScript:**

* **Nome:** app.js
* **Conteúdo:**
  * **Importar React e ReactDOM:** Importe as bibliotecas React e ReactDOM do CDN.
  * **Criar um componente React:** Use a função `createRoot` para criar um root e renderizar um componente React dentro da div com o ID "root".

```javascript
import React from 'https://unpkg.com/react@18/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';

const myHeading = <h1>Olá, mundo! Este é meu primeiro componente React.</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myHeading);
```

### 3. **Entendendo o Código:**

* **CDN:** Os links para `react.development.js` e `react-dom.development.js` carregam as bibliotecas React diretamente do CDN do unpkg.
* **JSX:** O código `<h1>Olá, mundo!</h1>;` é JSX, uma sintaxe similar ao HTML que é transformada em chamadas de funções JavaScript pelo Babel ou outro transpilador.
* **ReactDOM.createRoot:** Cria um root para renderizar componentes React no DOM.
* **root.render:** Renderiza o componente `myHeading` dentro do elemento com o ID "root".

### 4. **Executar o Código:**

* **Abrir o arquivo HTML:** Abra o arquivo `index.html` em um navegador.
* **Ver o resultado:** Você verá a mensagem "Olá, mundo!" exibida na página.

### 5. **Próximos Passos:**

* **Componentes:** Explore a criação de componentes mais complexos com props e state.
* **JSX:** Aprofunde seus conhecimentos em JSX e como ele é transformado em JavaScript.
* **React Developer Tools:** Instale as ferramentas de desenvolvedor do React para inspecionar seus componentes.
* **Gerenciadores de pacotes:** Explore o uso de gerenciadores de pacotes como npm ou yarn para gerenciar dependências em projetos maiores.
* **Webpack ou Create React App:** Para projetos mais complexos, utilize ferramentas de build como Webpack ou use o Create React App para configurar um ambiente de desenvolvimento mais rápido.

### **Dicas Adicionais:**

* **Ambiente de desenvolvimento:** Considere usar um editor de código com suporte a JSX e React, como o Visual Studio Code.
* **Documentação oficial:** Consulte a documentação oficial do React para obter informações mais detalhadas e exemplos.
* **Comunidade:** Participe da comunidade React para tirar dúvidas e aprender com outros desenvolvedores.

**Este roteiro fornece uma base sólida para começar a aprender React. Ao seguir estes passos e explorar os recursos adicionais, você estará pronto para criar aplicações web interativas e dinâmicas.**

**Gostaria de aprofundar em algum tópico específico, como props, state ou JSX?** 
