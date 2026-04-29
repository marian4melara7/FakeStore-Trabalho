# FakeStore-Trabalho

# Aula 04 — Entregável

App React Native com Expo usando a Fake Store API.

## Tecnologias

- React Native + Expo
- React Navigation (native stack)
- Axios
- Fake Store API

## Telas

- **Login** — autenticação via API
- **Home** — listagem de produtos com filtro por categoria
- **Detalhes** — informações completas do produto
- **Grupo** — integrantes do grupo

## Integrantes

| # | Nome | RA |
|---|------|----|
| 01 | Guilherme Tadeu Castellani | 1136257 |
| 02 | Arthur B. Spada | 1136264 |
| 03 | Emanoel Rosa | 1136489 |
| 04 | Maria Eduarda Schulze | 1136125 |
| 05 | Mariana Mellara | 1136271 |

## Usuários disponíveis para login

Os usuários são carregados diretamente da Fake Store API:

```
GET https://fakestoreapi.com/users
```

Credencial de teste rápido: **johnd / m38rmF$**

Para ver todos os usuários e senhas disponíveis, acesse no navegador ou via curl:

```bash
curl https://fakestoreapi.com/users
```

## Como rodar

```bash
npm install
npx expo start
```
