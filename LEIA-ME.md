# Bruna Dantas — site com avisos de privacidade

Esta versão mantém o visual em vinho, cobre e creme e acrescenta:

- Aviso no formulário com dados utilizados, finalidade e encaminhamento ao WhatsApp.
- E-mail e telefone opcionais; apenas nome e mensagem são obrigatórios.
- Política de privacidade acessível pelo formulário e pelo rodapé.
- Banner e painel de cookies com informações sobre as tecnologias existentes.
- Preferência local válida por 180 dias, com opção de remoção.
- Fontes hospedadas junto ao site, sem conexões automáticas com Google Fonts.

## Abrir a prévia

Abra Bruna-Dantas-previa.html no seu navegador. O site, as imagens e as fontes estão incorporados ao arquivo. A prévia não precisa de conexão para carregar as fontes.

## Executar o projeto

Entre em projeto/ e rode npm ci e npm run dev.
Para a build de produção, rode npm run build.
No Vercel: preset Vite, saída dist.

## O que o painel de cookies faz

O código ativo não inclui análise de visitas ou publicidade. Por isso, o painel não oferece aceite genérico para ferramentas inexistentes. “Usar somente necessários” grava somente a preferência e as datas no navegador, sem incluir conteúdo do formulário. O rodapé permite reabrir o painel e apagar essa preferência. Depois de 180 dias, o registro expirado é removido na próxima visita.

O formulário prepara um link para o WhatsApp com os dados preenchidos. Esse serviço é aberto ao clicar no botão; o visitante revisa e confirma a mensagem lá. Não há banco de dados de mensagens no site.

## Revisão pela Bruna

Antes da publicação, confira a política quanto à identificação da controladora, aos procedimentos de atendimento, à guarda de conversas e documentos, ao acesso da equipe, aos serviços externos contratados e ao atendimento de pedidos dos titulares. Os prazos de retenção de conversas e de registros da hospedagem precisam corresponder aos processos reais. A implementação do site não representa, por si só, adequação integral à LGPD.

A política está em projeto/src/app/components/PrivacyPolicy.tsx. As referências oficiais estão no README do projeto.

## Validação

Build de produção aprovada. Conferidos aviso, campos opcionais, estrutura, referências dos diálogos, contraste e ausência de rastreadores no bundle ativo. Testadas persistência, expiração e remoção da preferência, dados inválidos e armazenamento bloqueado. A revisão visual e o uso dos diálogos em navegador permanecem pendentes.

A fotografia segue sendo o retrato original em cores. Para usar a imagem de blusa vinho com qualidade, é necessário o arquivo separado.

A versão pública no Vercel não foi alterada. Este pacote está pronto para revisão e publicação.
