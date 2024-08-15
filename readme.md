# Projeto Grunt com LESS, HTML e JavaScript

Este projeto utiliza o Grunt para automatizar o processo de desenvolvimento, incluindo a compilação de arquivos LESS em CSS, minificação de arquivos HTML e JavaScript, e observação de alterações nos arquivos para automação contínua.

## Estrutura do Projeto
meu-projeto/
│
├── src/
│ ├── styles.less # Arquivo LESS para estilos
│ ├── index.html # Arquivo HTML principal
│ └── script.js # Arquivo JavaScript
│
├── dist/
│ ├── styles.css # Arquivo CSS gerado
│ ├── index.html # Arquivo HTML minificado
│ └── script.js # Arquivo JavaScript minificado
│
├── node_modules/ # Diretório de dependências do Node.js
├── package.json # Configuração do projeto e dependências
└── Gruntfile.js # Configuração do Grunt

## O Grunt está configurado para realizar as seguintes tarefas:


- **LESS**: Compila arquivos LESS em CSS.
- **HTMLMin**: Minifica arquivos HTML.
- **Uglify**: Minifica arquivos JavaScript.
- **Watch**: Observa alterações nos arquivos e executa tarefas automaticamente.
- **Clean**: Remove arquivos antigos da pasta `dist`.

### `Gruntfile.js`

### Comandos

Aqui estão os principais comandos usados no projeto:

- **Instalar Dependências:**

    ```bash
    npm install
    ```

- **Compilar e Minificar Arquivos:**

    Executa as tarefas de `less`, `htmlmin`, e `uglify`, e limpa a pasta `dist` antes da criação dos arquivos finais.

    ```bash
    grunt
    ```

- **Observar Alterações:**

    Executa o Grunt em modo de observação. Ele vai compilar e minificar arquivos automaticamente sempre que você fizer alterações.

    ```bash
    grunt watch
    ```

- **Limpar a Pasta `dist`:**

    Remove todos os arquivos da pasta `dist`.

    ```bash
    grunt clean
    ```
