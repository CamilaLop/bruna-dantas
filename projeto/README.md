# Bruna Dantas — Advocacia e Consultoria Jurídica

Site em React e Vite, com identidade em vinho, cobre e creme, navegação por seções e formulário de contato pelo WhatsApp. A composição segue as duas referências enviadas em 6 de outubro de 2026: marca com mais destaque, tipografia clássica, linhas finas, retrato em cores e ícones nas áreas de atuação.

## Executar

```bash
npm ci
npm run dev
```

## Build de produção

```bash
npm run build
```

No Vercel: preset Vite, diretório raiz do projeto, build `npm run build` e saída `dist`.

## Atualizar conteúdo

- Serviços, contatos e horários: `src/app/content.ts`.
- Estilos e breakpoints: `src/styles/bruna.css` e `src/styles/privacy.css`.
- Retrato: `src/assets/bruna-dantas.webp`, convertido do arquivo original sem retoque.
- Símbolo original: `src/imports/Clip_path_group.svg`. A variante em cobre está em `src/assets/bruna-monograma-cobre.svg`; o desenho foi preservado e apenas a cor foi adaptada.
- Favicon: `public/favicon.svg`.
- Política de privacidade: `src/app/components/PrivacyPolicy.tsx`.
- Painel de cookies e aviso: `src/app/components/PrivacyCenter.tsx`.
- Preferência de privacidade e validade: `src/app/privacy.ts`.
- Fontes WOFF2 locais e suas licenças: `src/assets/fonts/`.

O formulário abre o WhatsApp com o texto preenchido; o visitante confirma o envio no próprio WhatsApp. Não há envio de e-mail nem armazenamento de mensagens no site.

## Privacidade

O formulário informa, antes do botão, quais dados são usados, a finalidade e o encaminhamento ao WhatsApp. Nome e mensagem são obrigatórios; e-mail e telefone são opcionais. Não é pedido consentimento genérico como condição para contato.

O código ativo não inclui Google Analytics, pixels, embeds ou cookies de publicidade. As fontes foram hospedadas localmente para eliminar as conexões automáticas com Google Fonts. O banner e o painel mostram apenas as tecnologias existentes: um registro local com a preferência de privacidade, gravado quando a pessoa escolhe “Usar somente necessários”. Ele é válido por 180 dias, expira e é removido na próxima visita. O rodapé permite reabrir o painel e apagar a preferência. O site continua funcionando se o navegador bloquear o armazenamento local.

Antes da publicação, Bruna deve conferir a política quanto aos seus procedimentos de atendimento: identificação da controladora, uso e guarda de conversas no WhatsApp/e-mail, critérios de retenção, acesso da equipe, serviços contratados e atendimento aos pedidos de titulares. O prazo de guarda das conversas não foi inventado; o texto descreve critérios gerais e fornece um canal para esclarecimentos. A implementação não equivale, por si só, à adequação integral à LGPD.

Caso acrescente uma ferramenta opcional no futuro, faça novo inventário, informe sua finalidade e duração, atualize a política e a versão da preferência, e implemente seu carregamento somente após a escolha adequada. O painel atual não fornece um aceite para ferramentas inexistentes.

Referências para revisão jurídica:

- LGPD, texto compilado: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
- Guia ANPD — Cookies e Proteção de Dados Pessoais: https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf

O e-mail, a inscrição OAB/RJ 260.703, o atendimento online e presencial e as cinco áreas de atuação foram atualizados conforme a primeira referência. WhatsApp, Instagram, localização e horários foram mantidos do site anterior. O símbolo e a fonte Cinzel foram conferidos no arquivo original do Figma.

O retrato usado é o arquivo original do projeto, agora exibido em cores. A foto de blusa vinho aparece incorporada à arte enviada; para substituir o retrato com qualidade, use o arquivo separado dessa fotografia.

Validação: build de produção, estrutura das seções, links de navegação e contato, campos opcionais, preparação da mensagem com e sem contatos adicionais, contraste do aviso e preferência de privacidade (persistência, expiração, remoção, registro inválido e armazenamento bloqueado). A revisão visual e a interação dos diálogos em navegador permanecem pendentes; a prévia HTML permite conferir a composição no seu navegador.
