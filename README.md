# Bruna Dantas — Advocacia e Consultoria Jurídica

Website em React, TypeScript, Vite e GSAP, adaptado às seis telas enviadas em 14/10/2026, com refinamentos de hierarquia e navegação em 15/10/2026. O layout usa fundo branco, títulos vinho, cabeçalho arredondado, estátua da Justiça em camadas no hero e dois retratos de Bruna. O código inclui a versão responsiva, navegação, formulário e privacidade.

## Executar e publicar

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

No Vercel: preset Vite, root na pasta que contém `package.json`, build `npm run build`, saída `dist`. A entrega não altera o site publicado automaticamente.

## Composição e conteúdo

1. Hero com arquitetura clássica, estátua de bronze transparente, nome “Bruna Dantas” em duas camadas e botão de contato.
2. Serviços: apresentação à esquerda e cards fotográficos “Para empresas” e “Para você”, com a descrição das áreas em cada grupo. Ambos conduzem à seção de atuação com o filtro correspondente: empresas reúne Trabalho, Imobiliário e Contratos; pessoas reúne as cinco áreas. A seleção pode ser alterada nos botões “Todas as áreas”, “Para você” e “Para empresas”. A lista anuncia a quantidade de resultados e conserva os acordeões nativos.
3. Áreas de atuação: título e chamada à esquerda, cinco acordeões nomeados à direita. Os nomes foram preservados para que a referência sem títulos não resultasse em controles vazios.
4. Sobre mim: apresentação mais curta, parágrafos separados e entrelinha confortável, com retrato frontal e linha vertical.
5. Convite ao contato: arquitetura na faixa superior, retrato cinematográfico sobreposto e chamada grande à direita.
6. Contato: título direto, canais de atendimento e três campos (nome, e-mail e motivo), sem repetir a chamada do bloco com foto. O botão de WhatsApp informa o destino. Rodapé fotográfico com horários, links sociais, privacidade e assinatura Camila Lopes Studio com link para o portfólio.

O botão “Continuar no WhatsApp” prepara um link para o WhatsApp. O visitante confirma o envio no próprio aplicativo; não há servidor de mensagens, envio de e-mail nem persistência do conteúdo do formulário.

## Arquivos para editar

- Texto, áreas, horários e contatos: `src/app/content.ts`.
- Hero: `src/app/components/HomePage.tsx`.
- Parallax hero/serviços: `src/app/components/HeroServicesTransition.tsx`.
- Cards: `src/app/components/EquilibriumIntro.tsx`.
- Acordeões: `src/app/components/AreasPage.tsx`.
- Sobre: `src/app/components/AboutPage.tsx`.
- Convite: `src/app/components/ContactInvitation.tsx`.
- Formulário e rodapé: `ContactPage.tsx` e `Footer.tsx`.
- Cabeçalho e marca: `Navigation.tsx` e `Brand.tsx`.
- Estilos atuais: `src/styles/cinematic.css`; estilos de base em `bruna.css` e `privacy.css`.
- Imagens e prompts atuais: `src/assets/editorial/`.
- Retrato frontal e assets das etapas anteriores: `src/assets/cinematic/`.
- Fontes locais e licenças: `src/assets/fonts/`.

Os assets foram reconstruídos com IA a partir das imagens de referência, separados da interface e otimizados para WebP. A estátua possui alpha real. As fotografias de Bruna foram editadas a partir das fotos enviadas; os fundos e trechos de roupa ocultos pelos textos são reconstruções. Os PNGs e prompts estão preservados. Esta entrega não afirma usar os arquivos-fonte exatos do Figma.

A tipografia geométrica usa Josefin Sans local, com Cinzel no nome da marca e Cormorant Garamond nos títulos serifados. O monograma original foi mantido e adaptado para branco em SVG. Durante a rolagem, o cabeçalho e a marca ficam mais compactos e recuperam o tamanho inicial ao voltar ao topo. Todos os assets e fontes são carregados pelo próprio site.

## Movimento

No desktop, apenas o hero é fixado durante uma altura de tela, com `pinSpacing: false`. A seção de serviços sobe no fluxo normal por cima dele. O fundo arquitetônico tem deslocamento leve; os textos e a estátua permanecem em posição enquanto são cobertos. Não há fade entre essas duas seções, nem Observer que salte entre etapas.

O nome ganhou mais espaço em relação à estátua e o fundo recebeu uma camada vinho mais forte para reforçar a leitura do branco. A descrição informa advocacia/consultoria, Búzios e atendimento online/presencial.

Os dois retratos receberam um tratamento visual de cor por CSS (saturação, contraste e uma camada vinho discreta). Os arquivos de imagem, o rosto e a pose não foram reeditados nesta etapa.

O cursor aplica à estátua um deslocamento discreto (até 8 px na horizontal e 5 px na vertical), apenas no desktop com ponteiro preciso. O hero respeita a navegação de retorno. O botão “Serviços” conduz ao fim do pin. Os cards têm um pequeno zoom por hover e os demais blocos entram suavemente na rolagem. O módulo `motion.tsx` centraliza a duração, a curva e o scrub dos efeitos; os estilos usam uma curva comum nos hovers e no cabeçalho. O fundo do convite ao contato também tem parallax leve.

No celular, a página segue em fluxo nativo, sem pin, com cards em uma coluna, demais blocos em uma coluna e menu recolhido. O modo reduzido elimina os efeitos e mantém todos os conteúdos disponíveis. A preferência de movimento reduzido do sistema é respeitada automaticamente. Não há botão para alterar o movimento no hero ou no rodapé.

## Privacidade

Nome e motivo do contato são obrigatórios; e-mail é opcional. Antes do botão, o visitante lê quais dados serão utilizados, para que serão usados e que serão transferidos ao WhatsApp. A política foi atualizada para os três campos atuais. Não é exigido consentimento genérico como condição de contato.

O site não usa Analytics, pixels, embeds ou cookies de publicidade. O painel informa as tecnologias existentes. A escolha “Usar somente necessários” salva apenas a preferência no armazenamento local por 180 dias. O rodapé permite reabrir o painel e apagar a escolha. O site continua funcionando se o navegador bloquear esse armazenamento.

Antes de publicar, Bruna deve revisar a política à luz dos procedimentos reais de atendimento, guarda de conversas e pedidos de titulares. A implementação não equivale, sozinha, à adequação integral à LGPD. Se forem incluídas ferramentas opcionais, atualizar o inventário e suas escolhas antes de ativá-las.

Referências mantidas para revisão jurídica:

- https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm
- https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf

## Arquivos e verificação

A pasta `src/` está na raiz deste pacote, ao lado de `package.json` e `index.html`.

- `src/main.tsx`: entrada da aplicação.
- `src/app/App.tsx`: composição da página.
- `src/app/components/`: seções e componentes.
- `src/assets/`: imagens, marca e fontes.
- `src/styles/`: estilos.
- `dist/`: build de produção gerada por `npm run build` (não versionada).
- `Bruna-Dantas-previa.html`: prévia autocontida para abrir no navegador.

TypeScript e build de produção passaram na última alteração de código. Nesta entrega, a estrutura do ZIP e a extração dos arquivos foram verificadas. A conferência visual no navegador continua pendente. A entrega não atualiza o site no Vercel.
