# Design system — Luciene Martins · Psicóloga

> Versão 1 · paleta **mantida do site original** (amostrada de psicologalucienemartins.com.br) e organizada em papéis.
> Os tokens vivem em [`css/styles.css`](../css/styles.css) como variáveis CSS (`:root`).

## Cores

● = cor presente no site original. As demais são tons de apoio derivados dela para texto e superfícies.

| Token | Hex | Papel |
|---|---|---|
| `--plum-600` ● | `#7F5680` | Cor primária: botões, seção “Especialidade”, botão flutuante |
| `--plum-500` ● | `#765780` | Barra de menu do site antigo (reserva) |
| `--plum-700` | `#5E3D60` | Links, rótulos, texto sobre lilás |
| `--plum-900` | `#3E2840` | Títulos, rodapé |
| `--lav-400` ● | `#B79CBF` | Card de pilar 01, bordas do botão secundário |
| `--lav-300` ● | `#C3A9CC` | Card de pilar 03 |
| `--lav-200` ● | `#CEBBD1` | Card de pilar 02, bordas de campos, moldura do retrato |
| `--lilac-100` ● | `#EDDEF3` | Selos, ícones, campos do formulário antigo |
| `--lilac-50` | `#F8F3FA` | Fundo de seção (hero, contato) |
| `--mist` ● | `#ECEAEB` | Seção “Quem sou”, divisórias |
| `--paper` | `#FAFAFA` | Fundo da página |
| `--ink` | `#2B2230` | Texto principal |
| `--ink-soft` | `#4A3F4E` | Parágrafos |
| `--muted` | `#5C5260` | Legendas, rótulos secundários |
| `--error` | `#A3324F` | Mensagens de erro |

### Contraste (WCAG 2.1)

| Combinação | Razão | Nível |
|---|---|---|
| Branco sobre `#7F5680` | 5,9 : 1 | AA |
| `#2B2230` sobre `#B79CBF` | 6,2 : 1 | AA |
| `#2B2230` sobre `#CEBBD1` | 8,5 : 1 | AAA |
| `#5E3D60` sobre `#EDDEF3` | 7,1 : 1 | AAA |
| `#4A3F4E` sobre `#FAFAFA` | 9,5 : 1 | AAA |
| `#EDDEF3` sobre `#7F5680` | 4,6 : 1 | AA |
| `#A3324F` sobre branco | 6,7 : 1 | AA |

## Tipografia

| Estilo | Fonte | Tamanho / altura |
|---|---|---|
| Display (H1) | Fraunces 500 | `clamp(42px, 6vw, 72px)` / 1.04, `-0.02em` |
| H2 | Fraunces 500 | `clamp(32px, 4vw, 46px)` / 1.12 |
| H3 | Fraunces 500 | 24–28px |
| Citação | Fraunces itálico 400 | 17–34px |
| Eyebrow | Figtree 700 | 14px, caixa alta, `+0.12em` |
| Lead | Figtree 400 | 20px / 1.55 |
| Corpo | Figtree 400 | 17px / 1.6 (mín. 16px) |
| Interface | Figtree 600 | 15–17px |

Serifa suave para acolhimento e autoridade; sans humanista para leitura confortável no celular.

## Espaço, raio e alvo de toque

- Escala de espaço (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
- Container: 1200px, padding lateral 24px; seções com 96px verticais
- Raios: campo 12 · card 18–24 · seção/foto 28–32 · pílula 999
- Retratos com **recorte em arco** (`240px 240px 32px 32px`) — assinatura visual
- Alvo de toque mínimo 44px; CTAs principais 52px

## Componentes

- **Botão primário** — fundo ameixa, texto branco, pílula. Sempre verbo + destino (“Conversar pelo WhatsApp”).
- **Botão secundário** — contorno lavanda 400; hover em lilás 100.
- **Pílula (chip)** — lilás 50 + ameixa 700; usada para listar demandas.
- **Card de demanda** — branco, borda névoa, ícone em quadrado lilás.
- **Card de pilar** — três tons de lavanda herdados da seção “Especialidade” original.
- **Campo** — borda lavanda 200; foco ameixa com halo 18%; erro `#A3324F` + mensagem abaixo.
- **Acordeão (FAQ)** — `<details>/<summary>` nativo, um aberto por vez.
- **WhatsApp flutuante** — 60px, canto inferior direito, `aria-label`.

## Voz e UX copy

- Fala com “você”, na primeira pessoa da Luciene.
- Frases curtas; blocos longos viram pílulas, cards e linha do tempo.
- Ética CFP: CRP sempre visível; sem “cura”, garantias, preços ou depoimentos.
- Erros dizem como resolver: “Confira o número com DDD, por exemplo (11) 91234-5678.”
- Aviso de segurança no rodapé: CVV 188 / SAMU 192.
