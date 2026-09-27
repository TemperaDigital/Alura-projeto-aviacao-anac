# Site de estudos — Engenharia de Dados

O `index.html` na raiz é a página inicial. Ele organiza as cópias HTML de `imersao_engenhariadedados_ia/` por assunto, oferece busca por termos, apresenta a Imersão Engenharia de Dados com IA da Alura (14 a 18 de setembro de 2026) e reúne os links para vídeos e para o projeto prático VoeBem Analytics.

## Prévia local

Na raiz do repositório, execute `python -m http.server 8080` e abra `http://localhost:8080/`. A página, a busca e os links para os arquivos HTML locais funcionam nessa prévia.

## Publicação futura no Coolify

Crie uma aplicação a partir do repositório GitHub e selecione **Dockerfile** como método de build, com a raiz do repositório como contexto. O container serve HTTP na porta **80**; configure essa porta no Coolify e associe domínio e HTTPS no proxy. O `.dockerignore` limita o contexto aos arquivos do site e às dez cópias HTML, sem incluir CSVs, notebooks, scripts ou o PDF de privacidade.

O site é estático. Ele não usa banco de dados, variáveis de ambiente nem o Supabase do ZimaOS. As cópias HTML são páginas arquivadas de terceiros e podem depender de recursos externos ou autenticação; os links para a plataforma Alura e para os vídeos apontam aos sites originais.
