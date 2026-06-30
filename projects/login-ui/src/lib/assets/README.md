# Assets da biblioteca login-ui

Coloque aqui o arquivo de imagem usado pela tela de login:

- **`Cabelefant.avif`** — imagem do elefante exibida no card de login.

Copie o arquivo real do seu outro repositório (a tela de login original) para esta pasta.
O `ng-package.json` está configurado para copiar tudo desta pasta para `dist/login-ui/assets`
durante o `ng build login-ui`.

O app que consumir a biblioteca deve copiar esses assets no próprio `angular.json`:

```json
"assets": [
  { "glob": "**/*", "input": "node_modules/login-ui/assets", "output": "assets" }
]
```
