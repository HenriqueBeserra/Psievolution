#  Plataforma de Evolução de Pacientes – Backend API

API backend em desenvolvimento para uma **plataforma de evolução e acompanhamento de pacientes**, construída com foco em **arquitetura limpa, segurança, escalabilidade e manutenibilidade**.

Este projeto foi pensado para servir como base sólida para sistemas clínicos de pscicologia que buscam o registro dos dados de acompanhamento dos pacientes.

---

##  Visão Geral do Projeto

Esta API foi desenvolvida seguindo **boas práticas modernas de engenharia de software**, priorizando:

- Arquitetura limpa e escalável
- Separação clara de responsabilidades
- Autenticação stateless
- Código fortemente tipado
- Organização orientada a domínio
- Infraestrutura preparada para produção

O sistema foi estruturado para crescer sem comprometer a qualidade do código ou a integridade arquitetural.

---

##  Arquitetura

O projeto segue os princípios da **Clean Architecture**, garantindo que:

- As regras de negócio sejam independentes de frameworks e isoladas
- O núcleo da aplicação não dependa de detalhes externos
- O sistema seja fácil de manter, testar e evoluir
- As dependências sempre apontem para o core da aplicação

### Camadas da Arquitetura

- **Application (Use Cases)**  
  Responsável por orquestrar as regras de negócio e os fluxos da aplicação.

- **Domain**  
  Contém as entidades, regras e conceitos centrais do sistema.

- **Infraestrutura (Infra)**  
  Implementações externas como banco de dados, criptografia, HTTP e autenticação.

- **HTTP (Controllers e Routes)**  
  Camada de entrada responsável por expor a API REST.

---

##  Estrutura de Pastas

```
src/
├── application_use-cases/
│   ├── interfaces/
│   ├── authentication-use-cases.ts
│   ├── jwt.ts
│   └── sanitization-data-use-case.ts
│
├── controllers/
│
├── domain/
│
├── infra/
│   ├── crypto/
│   ├── db/
│   └── http/
│
├── server/
│   ├── routes/
│   │   ├── authentication/
│   │   │   └── auth.ts
│   │   ├── pacient-api/
│   │   │   ├── create-pacient-route.ts
│   │   │   └── get-pacient-route.ts
│   │   └── index.ts
│   │
│   └── server.ts
│
├── service-atendimento/
├── service-evolução/
└── service-paciente/
```

Essa organização permite crescimento do projeto sem perda de clareza ou acoplamento excessivo.

---

##  Autenticação e Segurança

- Autenticação **stateless** utilizando **JWT (JSON Web Token)**
- Controle de acesso baseado em token
- Proteção de rotas via middleware seguindo o padrão HTTP:
- Camada de criptografia isolada na infraestrutura
- Estrutura preparada para evolução futura (roles, permissões, refresh token)

---

##  Tecnologias Utilizadas

### Core
- **TypeScript** – Tipagem forte e maior segurança no desenvolvimento
- **Node.js** – Ambiente de execução
- **Fastify** – Framework web performático

### Banco de Dados
- **PostgreSQL** – Banco de dados relacional robusto
- **Drizzle ORM** – ORM moderno, tipado e eficiente
- **Drizzle Migrations** – Versionamento e evolução do schema

### Segurança
- **JWT (jsonwebtoken)** – Autenticação e autorização
- **Camada de criptografia isolada** – Boas práticas de segurança

### Infraestrutura
- **Docker** – Containerização da aplicação
- **Docker Compose** – Orquestração de serviços
- **dotenv** – Gerenciamento de variáveis de ambiente

### Arquitetura e Padrões
- **Clean Architecture**
- **Use Cases**
- **Inversão de Dependência**
- **Separação de Responsabilidades**

---

## Status do Projeto

🚀 **Em desenvolvimento ativo**

Focos atuais:
- Evolução de pacientes
- Validações de domínio
- Melhoria contínua de segurança
- Expansão modular dos serviços
- Testes automatizados (planejados)

---
