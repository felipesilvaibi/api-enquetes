# api-enquetes

Projeto básico Typescript para fins didáticos (fonte: [TDD com Mango](https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1))

## Ferramentas utilizadas

*   **NodeJs:** Software de código aberto para a execução de códigos Javascript

*   **Typescript:** Library para desenvolvimento de NodeJs tipado

*   **TDD**: Desenvolvimento orientado por testes 

*   **DDD:** Desenvolvimento orientado a domínios

*   **Clean Architecture**: Arquitetura de software limpa

*   **SOLID**: Princípios de programação orientada a objetos

*   **Design Patterns**: Padrões de Projeto

## Organização do projeto

    ├── README.md 
    ├── docs                          Documentos gerais associados ao projeto
    │   └── signup-diagram.pdf        Diagrama da estrutura final do projeto
    ├── jest-mongodb-config.js        Configurações do jest mongodb
    ├── jest.config.js                Configurações do jest runner
    ├── jest_integration_config.js    Configurações de testes de integração
    ├── jest_unit_config.js           Configurações de testes unitários
    ├── package.json                  Info, dependências e scripts
    ├── src                           Source
    │   ├── data                      Data Layer
    │   ├── domain                    Domain Layer
    │   ├── infra                     Infraestructure Layer
    │   ├── main                      Main Layer
    │   ├── presentation              Presentation Layer
    │   └── utils                     Utils Layer
    ├── tsconfig.json                 Configurações do typescript
    └── yarn.lock                     Integração entre dependências
