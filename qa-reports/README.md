# 🎯 GoLedger Challenge - QA Edition
**Candidata:** Vitória | **Data:** 06/04/2026

Abaixo você encontra o mapa completo da minha entrega, incluindo o plano de validação passo a passo, documentação de falhas, melhorias propostas 

---

## 📋 Documentação de Qualidade e Processos

Todos os documentos estão organizados na pasta `qa-reports`. Clique nos links abaixo para acessar as evidências:

### 📑 Validação e Execução
* [**RET - Relatório de Execução de Testes**](./Relatório%20de%20Execução%20de%20Testes_%20API%20e%20Plataforma%20Web.pdf) 
  *(Este documento contém o roteiro completo de testes, evidências de execução e a estratégia utilizada para explorar as funcionalidades).*

### 🐛 Bug Reports
* [BUG-001 - Relatório de Falha](./BUG-001.pdf)
* [BUG-002 - Relatório de Falha](./BUG-002.pdf)
* [BUG-003 - Relatório de Falha](./BUG-003.pdf)
* [BUG-004 - Relatório de Falha](./BUG-004.pdf)
* [BUG-005 - Relatório de Falha](./BUG-005.pdf)
* [BUG-006 - Relatório de Falha](./BUG-006.pdf)
* [BUG-007 - Relatório de Falha](./BUG-007.pdf)
* [BUG-008 - Relatório de Falha](./BUG-008.pdf)
* [BUG-009 - Relatório de Falha](./BUG-009.pdf)
* [BUG-010 - Relatório de Falha](./BUG-010.pdf)
* [BUG-011 - Relatório de Falha](./BUG-011.pdf)
* [BUG-012 - Relatório de Falha](./BUG-012.pdf)
* [BUG-013 - Relatório de Falha](./BUG-013.pdf)
* [BUG-014 - Relatório de Falha](./BUG-014.pdf)

### 💡 Propostas de Melhoria
* [IMP-001 - Melhoria: Listagem de Persons](./IMP-001.pdf)
* [IMP-002 - Melhoria: Gestão de Usuários](./IMP-002.pdf)
* [IMP-003 - Melhoria: Seleção Inteligente de Livros/Tenants](./IMP-003.pdf)

### 💡 Documento único com todos os reports
* [ALL-REPORTS](./ALL-REPORTS.pdf)
 *(Este documento contém todos os reports(BUG e Proposta de melhorias) para facilitar a visualização).*
---


## 🤖 Automação E2E (Playwright)

Para complementar a validação manual, desenvolvi uma suíte de testes E2E utilizando **Playwright + TypeScript**. 

### Como executar os testes:

1. Com a API e a Web rodando localmente, navegue até a pasta `web` e execute o comando abaixo:
   ```bash
   npx playwright test --headed
    ```