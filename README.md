<div align="center">

<img src="assets/img/logo-cerebro-coracao.png" alt="Logotipo: ilustração de cérebro e coração" width="140">

# Luciene Martins · Psicóloga

**Movimentar é transformar.**
Site institucional redesenhado — Terapia Cognitivo-Comportamental (TCC) para adultos e adolescentes, on-line e presencial em Mogi das Cruzes (SP).

`CRP 06/98494` · HTML + CSS + JS puro · Mobile-first · Sem dependências

</div>

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [O que mudou](#o-que-mudou)
- [Estrutura da página](#estrutura-da-página)
- [Design system](#design-system)
- [Como rodar localmente](#como-rodar-localmente)
- [Configuração](#configuração)
- [Publicação](#publicação)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Imagens](#imagens)
- [Acessibilidade, SEO e LGPD](#acessibilidade-seo-e-lgpd)
- [Pendências antes de publicar](#pendências-antes-de-publicar)

## Sobre o projeto

Redesign do site [psicologalucienemartins.com.br](https://www.psicologalucienemartins.com.br/) (hoje no Wix) com três objetivos:

1. **Escaneabilidade** — trocar blocos longos de texto por cards, pílulas e linha do tempo.
2. **Conversão** — CTAs de WhatsApp ao longo da jornada, botão flutuante e formulário curto.
3. **Identidade preservada** — a paleta ameixa/lavanda do site original foi mantida e organizada em tokens.

Todo o conteúdo é da profissional; os textos foram reescritos para leitura rápida, preservando a essência e as normas de publicidade do **Conselho Federal de Psicologia** (CRP visível, sem promessas de cura, sem preços ou depoimentos).

## O que mudou

| Antes (Wix) | Depois |
|---|---|
| Citação no topo, nome em segundo plano | Hero com proposta clara em 5 s, retrato e CTA de WhatsApp |
| Ícone de WhatsApp sem texto só no topo e rodapé | CTAs com verbo + destino em cada seção e botão flutuante |
| Parágrafos iniciados com `>>` | 3 cards de demanda com pílulas (Saúde emocional · Momentos difíceis · Carreira) |
| Botões “Up” soltos e links duplicados | Menu âncora com 5 itens e header fixo |
| Menu “Dúvidas” sem FAQ na página | Acordeão com 5 perguntas frequentes |
| Formulário Nome · Email · Mensagem | Nome · WhatsApp · Modalidade · Mensagem opcional · consentimento LGPD |
| Sem aviso de emergência | Rodapé com CVV 188 e SAMU 192 |
| Imagens JPG/PNG grandes | WebP com fallback JPG, `loading="lazy"` e dimensões declaradas |

## Estrutura da página

| # | Seção | Âncora | Objetivo |
|---|---|---|---|
| 01 | Header | — | Logo, menu âncora, CTA “Agendar consulta” |
| 02 | Hero | `#inicio` | “Movimentar é transformar.” + TCC + retrato + CRP |
| 03 | Como posso te ajudar | `#ajuda` | Identificação com a queixa |
| 04 | Abordagem (TCC) | `#abordagem` | Colaboração · Psicoeducação · Psicodiagnóstico + citação de Aaron Beck |
| 05 | Para quem | `#publico` | Adultos e adolescentes (12–18 anos) |
| 06 | Quem sou | `#sobre` | Trajetória: 2005 · FGV · 20+ anos em RH · TCC |
| 07 | Dúvidas | `#duvidas` | Primeira sessão, on-line × presencial, duração, sigilo, adolescentes |
| 08 | Agendamento + rodapé | `#agendar` | Formulário, canais de contato, aviso de emergência |

## Design system

Documentação completa em [`docs/design-system.md`](docs/design-system.md). Resumo:

| | Token | Hex | Uso |
|---|---|---|---|
| ![#7F5680](https://placehold.co/20x20/7F5680/7F5680.png) | `--plum-600` | `#7F5680` | Primária (original) |
| ![#5E3D60](https://placehold.co/20x20/5E3D60/5E3D60.png) | `--plum-700` | `#5E3D60` | Links e rótulos |
| ![#3E2840](https://placehold.co/20x20/3E2840/3E2840.png) | `--plum-900` | `#3E2840` | Títulos e rodapé |
| ![#B79CBF](https://placehold.co/20x20/B79CBF/B79CBF.png) | `--lav-400` | `#B79CBF` | Card 01 (original) |
| ![#C3A9CC](https://placehold.co/20x20/C3A9CC/C3A9CC.png) | `--lav-300` | `#C3A9CC` | Card 03 (original) |
| ![#CEBBD1](https://placehold.co/20x20/CEBBD1/CEBBD1.png) | `--lav-200` | `#CEBBD1` | Card 02, bordas (original) |
| ![#EDDEF3](https://placehold.co/20x20/EDDEF3/EDDEF3.png) | `--lilac-100` | `#EDDEF3` | Selos e ícones (original) |
| ![#ECEAEB](https://placehold.co/20x20/ECEAEB/ECEAEB.png) | `--mist` | `#ECEAEB` | Seção cinza (original) |

**Tipografia:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos e citações) + [Figtree](https://fonts.google.com/specimen/Figtree) (texto e interface), via Google Fonts.
Todas as combinações de texto/fundo passam no **WCAG 2.1 AA** (tabela no doc).

## Como rodar localmente

Não há build. Basta servir a pasta:

```bash
git clone https://github.com/<usuario>/<repositorio>.git
cd <repositorio>

# Python 3
python3 -m http.server 8080
# ou Node
npx serve .
```

Abra <http://localhost:8080>.

## Configuração

Tudo fica em dois lugares:

**Número do WhatsApp e mensagem padrão** — [`js/main.js`](js/main.js):

```js
var WHATSAPP = '5511984049855';            // DDI + DDD + número
var MSG_PADRAO = 'Olá, Luciene! Gostaria de agendar uma sessão.';
```

Todos os links com o atributo `data-wa` recebem automaticamente o link `wa.me` com a mensagem pré-preenchida.

**Destino do formulário** — atributo `data-endpoint` do `<form id="contato-form">` em [`index.html`](index.html):

- **Vazio (padrão):** ao enviar, o site monta uma mensagem com nome, WhatsApp, modalidade e mensagem e abre o WhatsApp da Luciene. Funciona sem servidor.
- **Com URL:** envia um `POST` JSON para o serviço informado (ex.: [Formspree](https://formspree.io/), [Getform](https://getform.io/) ou uma função serverless) e mostra a confirmação na própria página.

```html
<form id="contato-form" data-endpoint="https://formspree.io/f/SEU_ID">
```

## Publicação

O site é 100% estático e roda em qualquer hospedagem:

- **GitHub Pages (no ar):** <https://r0f0el.github.io/site-psicologa-luciene-martins/> — publicado da branch `main`, pasta raiz (*Settings → Pages → Deploy from a branch*). Cada push na `main` atualiza o site. Para usar o domínio próprio, adicione um arquivo `CNAME` com `www.psicologalucienemartins.com.br` e aponte o DNS.
- **Netlify / Vercel / Cloudflare Pages:** importe o repositório; diretório de publicação `/`, sem comando de build.
- **Hospedagem tradicional:** envie os arquivos por FTP para a pasta pública.

Depois de publicar: cadastrar o site no Google Search Console, enviar o `sitemap.xml` e atualizar o Perfil da Empresa no Google com o novo link.

## Estrutura de pastas

```
.
├── index.html                 # página única, HTML5 semântico
├── css/
│   └── styles.css             # tokens (:root) + componentes, mobile-first
├── js/
│   └── main.js                # WhatsApp, menu mobile, FAQ, formulário
├── assets/
│   └── img/                   # imagens otimizadas (WebP + JPG de fallback)
│       └── originais/         # arquivos de referência do site antigo
├── docs/
│   └── design-system.md       # paleta, tipografia, componentes, voz
├── robots.txt
├── sitemap.xml
└── README.md
```

## Imagens

Todas as imagens foram salvas do site atual e convertidas para WebP (com JPG de fallback):

| Arquivo | Origem | Uso no novo site |
|---|---|---|
| `luciene-retrato-rosa` | Ensaio da profissional | Hero |
| `luciene-retrato-azul` | Ensaio da profissional | Quem sou |
| `paisagem-montanhas` | Fundo do topo do site antigo | Fundo do hero |
| `logo-cerebro-coracao` | Logotipo do site antigo | Header, rodapé, favicon |
| `adultos-1`, `adultos-2` | Banco de imagens do Wix | Card “Adultos” (`adultos-2`; `adultos-1` é alternativa) |
| `adolescentes-1`, `adolescentes-2` | Banco de imagens do Wix | Card “Adolescentes” (`adolescentes-2`; `adolescentes-1` é alternativa) |

> ⚠️ **Licença:** as fotos de banco do Wix (`adultos-*`, `adolescentes-*`) costumam ser licenciadas apenas para uso em sites hospedados no Wix. Antes de publicar fora do Wix, troque-as por imagens próprias ou de bancos com licença livre (ex.: Unsplash, Pexels) mantendo os mesmos nomes de arquivo.

O logotipo original é pequeno (296 × 331 px). Para nitidez máxima em telas retina, o ideal é obter o arquivo vetorial (SVG/AI) com quem criou a marca.

## Acessibilidade, SEO e LGPD

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`), um único `<h1>` e link “Pular para o conteúdo”.
- Contraste AA em todos os textos, foco visível, alvos de toque ≥ 44 px, `prefers-reduced-motion` respeitado.
- Menu mobile com `aria-expanded`; erros do formulário com `aria-live` e `aria-invalid`.
- Meta title/description focados em “Psicóloga em Mogi das Cruzes” e “TCC on-line”, Open Graph e dados estruturados `schema.org/Psychologist`.
- Imagens com `width`/`height`, `loading="lazy"` e `decoding="async"`; retrato do hero com `fetchpriority="high"`.
- Consentimento LGPD obrigatório no formulário; dados usados apenas para retorno do contato.

## Pendências antes de publicar

- [ ] Confirmar o **número oficial** — o site atual exibe (11) 98404-9855, mas o link `tel:` aponta para +55 11 98844-5527.
- [ ] Preencher a **duração e frequência das sessões** na FAQ (`[DURAÇÃO E FREQUÊNCIA — confirmar]`).
- [ ] Substituir as **fotos de banco do Wix** (ver [Imagens](#imagens)).
- [ ] Definir o destino do formulário (`data-endpoint`) ou manter o envio via WhatsApp.
- [ ] Obter o logotipo em vetor, se existir.
- [ ] Revisão final dos textos pela Luciene.

---

<sub>Conteúdo, textos e fotografias © Luciene Martins. Código do site livre para uso e manutenção pela profissional.</sub>
