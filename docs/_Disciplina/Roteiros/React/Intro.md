---

### **Título: Introdução ao React com HTML e CDN**

---

#### **Objetivo:**
Apresentar os conceitos básicos do React e como integrá-lo em uma página HTML utilizando um link para a CDN, sem a necessidade de um ambiente de desenvolvimento local como o Node.js.

---

### **Estrutura do Roteiro:**

#### **1. Introdução ao React**
   - **Definição**: React é uma biblioteca JavaScript criada pelo Facebook para criar interfaces de usuário de forma declarativa e eficiente.
   - **Vantagens**:
     - Componentes reutilizáveis.
     - Atualizações rápidas do DOM (Virtual DOM).
     - Facilita a criação de Single Page Applications (SPAs).
   
---

#### **2. Preparando o Ambiente**
   - Não é necessário instalar nada localmente para este exemplo inicial, vamos usar uma página HTML e um link para a biblioteca via CDN.
   
---

#### **3. Estrutura Básica do Projeto**
   - **HTML Básico**: 
     - Comece com a criação de uma página HTML simples contendo um elemento `<div>` que será usado como “ponto de montagem” para o React.
     
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>React Introdução</title>
   </head>
   <body>
     <!-- Div onde o React renderizará o conteúdo -->
     <div id="root"></div>
   
     <!-- Scripts do React via CDN -->
     <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
     <!-- Nosso script JavaScript -->
     <script src="app.js"></script>
   </body>
   </html>
   ```

---

#### **4. Criando um Componente React**
   - **Componente de Função**: Usaremos um componente de função básico que renderiza "Hello, React!".
   
   Crie o arquivo `app.js` com o seguinte código:
   
   ```javascript
   // Criando um componente de função
   function App() {
     return (
       <div>
         <h1>Hello, React!</h1>
         <p>Este é seu primeiro componente React!</p>
       </div>
     );
   }
   
   // Renderizando o componente no DOM
   ReactDOM.render(<App />, document.getElementById('root'));
   ```

---

#### **5. Explicando o Código**
   - **ReactDOM.render**: Explica como o ReactDOM.render monta o componente React no DOM.
   - **Componente Funcional**: Mostre como o componente `App` retorna uma estrutura JSX, que é uma sintaxe semelhante a HTML, mas que será compilada em JavaScript puro.
   - **JSX**: Explique brevemente que o JSX é uma extensão da sintaxe JavaScript que permite escrever código semelhante a HTML dentro do JavaScript, e que o Babel compila isso em chamadas `React.createElement()`.

---

#### **6. Estendendo o Exemplo**
   - **Adicionar Props**: Mostre como podemos passar propriedades (props) para os componentes para torná-los dinâmicos.
   
   No `app.js`, modifique o código para incluir uma propriedade:
   
   ```javascript
   function App(props) {
     return (
       <div>
         <h1>Hello, {props.name}!</h1>
         <p>Este é seu primeiro componente React!</p>
       </div>
     );
   }
   
   ReactDOM.render(<App name="Mundo React" />, document.getElementById('root'));
   ```

---

#### **7. Conclusão**
   - **Recapitulando**: Você criou seu primeiro componente React, utilizou o JSX e entendeu como o React monta a interface dentro de um elemento do DOM.
   - **Próximos Passos**:
     - Explorar mais sobre estados e ciclo de vida de componentes.
     - Introdução a ferramentas como Create React App para desenvolvimento avançado.

---

Esse roteiro cobre os conceitos fundamentais de React e como integrá-lo rapidamente em um projeto sem muita configuração.