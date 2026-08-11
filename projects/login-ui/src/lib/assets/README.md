# Assets da biblioteca login-ui

Coloque aqui os arquivos de imagem usados pela tela de login:

- **`ivory-icon.png`** — logo Ivory exibida por padrão no card de login.
- **`Cabelefant.avif`** — imagem antiga do elefante, mantida para consumidores que ainda usam esse asset.

Copie o arquivo real do seu outro repositório (a tela de login original) para esta pasta.
O `ng-package.json` está configurado para copiar tudo desta pasta para `dist/login-ui/assets`
durante o `ng build login-ui`.

O app que consumir a biblioteca deve copiar esses assets no próprio `angular.json`:

```json
"assets": [
  { "glob": "**/*", "input": "node_modules/@murilo5341/login-ui/assets", "output": "assets" }
]
```
