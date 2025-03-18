# 🚀 Configuração rápida

## 💡 O Jeito Mais Rápido (Recomendado)

Se você deseja configurar tudo automaticamente, basta rodar:

```Bash
npx cloud-crafter-cli run quickstart-js
```

Este comando cuidará de todas as etapas para você—criando os arquivos necessários, instalando dependências e configurando o ESLint, Husky e Lint-staged.
Após rodá-lo, seu ambiente estará pronto para uso! 🎉

## 🔧 Configuração Manual (Passo a Passo)

Se você prefere configurar tudo manualmente, siga estes passos:

1. Crie o arquivo package.json. (A flag "y" indica que os valores padrão serão usados, sem perguntas.)
2. Crie o arquivo .gitignore.
3. Adicione "node_modules" ao .gitignore.
4. Instale ESLint, Husky e Lint-staged como dependências de desenvolvimento.

```Bash
npm init -y

touch .gitignore
echo 'node_modules' > .gitignore

npm i -D eslint husky lint-staged
```

5. Inicialize a configuração do ESLint:

```Bash
npm init @eslint/config
```

6. Adicione os scripts "lint" e "prepare" ao package.json.
7. Configure o Lint-staged.
8. Configure o Husky para rodar o hook pre-commit.

```Bash
npm pkg set scripts.lint="npx eslint"
npx husky init
touch .lintstagedrc
echo '{
  "*.js": "npm run lint -- --fix"
}' > .lintstagedrc

npx husky add .husky/pre-commit "npx lint-staged"
```
