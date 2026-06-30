# @SEU_USUARIO/login-ui

Biblioteca Angular com a tela de login padrão da Tintas Marfim. O mesmo layout é
reutilizado em vários projetos; **cada projeto decide como autenticar**, reagindo ao
evento `login` emitido pelo componente.

> Substitua `SEU_USUARIO` pelo seu usuário do GitHub e `NOME_DO_REPO` pelo nome do repositório.

---

## Instalação

A lib é publicada no **GitHub Packages** (registry privado). Em cada projeto que for usá-la:

### 1. Criar um `.npmrc` na raiz do projeto

```
@SEU_USUARIO:registry=https://npm.pkg.github.com
```

### 2. Autenticar (uma vez por máquina)

Adicione seu token do GitHub no `.npmrc` da **pasta do usuário** (`C:\Users\<voce>\.npmrc`).
O token é um Personal Access Token (classic) com escopo `read:packages` + `repo`:

```
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

> Nunca commite o token. Ele fica só no `~/.npmrc` da sua máquina.

### 3. Instalar

```bash
npm install @SEU_USUARIO/login-ui
```

---

## Configuração no projeto consumidor

### Imagem (asset do elefante)

A imagem vem empacotada na lib. Copie-a no `angular.json` do projeto:

```json
"assets": [
  { "glob": "**/*", "input": "node_modules/@SEU_USUARIO/login-ui/assets", "output": "assets" }
]
```

### Font Awesome (ícones de lua/sol do toggle de tema)

Inclua no `index.html` do projeto:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
```

---

## Uso

O `LoginPage` é um componente **standalone** — importe direto:

```ts
import { Component } from '@angular/core';
import { LoginPage, LoginCredentials } from '@SEU_USUARIO/login-ui';

@Component({
  selector: 'app-minha-tela',
  imports: [LoginPage],
  template: `
    <lib-login-page
      (login)="entrar($event)"
      (forgotPassword)="recuperarSenha()">
    </lib-login-page>
  `,
})
export class MinhaTela {
  entrar(cred: LoginCredentials) {
    // cada projeto faz a autenticação do seu jeito:
    // chamar API, validar, navegar, etc.
    console.log(cred.username, cred.password);
  }

  recuperarSenha() {
    // navegar para recuperação de senha, abrir modal, etc.
  }
}
```

### API do componente

| Saída (`@Output`) | Tipo | Quando dispara |
|---|---|---|
| `login` | `LoginCredentials` (`{ username, password }`) | Ao enviar o formulário (botão **Entrar**). |
| `forgotPassword` | `void` | Ao clicar em **"Esqueceu sua senha?"**. |

O toggle de tema (claro/escuro) é interno: adiciona/remove a classe `dark-theme` no `<body>`.

---

## Publicar uma nova versão (mantenedores)

```bash
# 1) suba a versão em projects/login-ui/package.json (ex.: 0.0.1 -> 0.0.2)
# 2) build da lib
ng build login-ui
# 3) publique a partir do pacote compilado
cd dist/login-ui
npm publish
```

Para publicar, o token precisa do escopo `write:packages` (além de `repo`).
