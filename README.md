# Boilerplate - "version": "0.1.0"

<aside>
💡 Projeto levantado usando "create-react-app" com template em typescript.
</aside>

> Atenção, no script "check-coverage", é possível definir a cobertura de testes que deseja para a aplicação.

> Por padrão, está definido 100% de cobertura, caso não atenda, o commit não é realizado.

> Para alterar, conforme deseja em seu projeto, basta modificar o script no arquivo de package.json.

> "check-coverage": "istanbul check-coverage --statements=100 --branches=100 --functions=100 --lines=100"

> Por padrão, estamos coletando a cobertura apenas na pasta de "components", pode ser adicionado novas pastas para cobertura, no arquivo "jest.config.js"

> collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}']

### Introdução

Boilerplate com React e Typescript.

### Instalar dependências

```tsx
npm i

# ou

yarn
```

**Levantar o projeto**

```tsx
npm run start

# ou

yarn start
```

### Principais tecnologias:

- **Husky** - [https://www.npmjs.com/package/husky](https://www.npmjs.com/package/husky)
- **Lint-staged** - [https://www.npmjs.com/package/lint-staged](https://www.npmjs.com/package/lint-staged)
- **Prettier** - [https://prettier.io/docs/en/install.html](https://prettier.io/docs/en/install.html)
- **Eslint** - [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
- **Git-commit-msg** - [https://www.npmjs.com/package/git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- **Git-cz** - [https://www.npmjs.com/package/git-cz](https://www.npmjs.com/package/git-cz)
- **Pretty-quick** - [https://www.npmjs.com/package/pretty-quick](https://www.npmjs.com/package/pretty-quick)
