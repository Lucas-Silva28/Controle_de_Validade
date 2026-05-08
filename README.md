<div align="center">
  <br>
  <img src="assets/logo-koda.png" alt="Koda Sistemas Logo" width="280px">
  <br>
</div>

# 🛒 Controle de Validade Profissional (Mobile Edition)

<p align="center">
  <img src="LINK_DA_IMAGEM_BANNER" alt="Banner Controle de Validade" width="100%">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## 📸 Demonstração do Sistema

Abaixo, algumas capturas de tela da interface operando em ambiente mobile:

<p align="center">
  <img src="LINK_DA_IMAGEM_TELA_INICIAL" width="45%" title="Dashboard com Alertas">
  <img src="LINK_DA_IMAGEM_BANCO_DADOS" width="45%" title="Configuração de Banco de Dados">
</p>

<p align="center">
  <img src="LINK_DA_IMAGEM_PDF" width="45%" title="Relatório PDF Gerado">
  <img src="LINK_DA_IMAGEM_DARK_MODE" width="45%" title="Interface Dark Mode">
</p>

---

Este projeto é um ecossistema completo para gestão de estoque e monitoramento de prazos de validade, projetado especificamente para operação em dispositivos móveis. Desenvolvido por **Lucas Silva**, Analista de Sistemas e Desenvolvedor Full Stack, o sistema foca em alta performance, usabilidade e agilidade no chão de loja.

---

## 🚀 Visão Geral do Projeto

O **Controle de Validade Profissional** nasceu da necessidade de eliminar perdas financeiras causadas por produtos vencidos e pela falta de organização em inventários rotativos. Diferente de planilhas complexas, este sistema oferece uma interface fluida que permite o lançamento de centenas de itens em poucos minutos, diretamente do celular.

### 🎯 Objetivos Principais
- **Redução de Desperdício:** Identificação visual imediata de itens em estado crítico.
- **Mobilidade Total:** Desenvolvido para rodar no navegador do celular, sem necessidade de hardware caro.
- **Relatórios Ágeis:** Geração de documentos PDF e mensagens formatadas para WhatsApp em segundos.
- **Independência de Rede:** Funciona totalmente offline através de armazenamento local (LocalStorage).

---

## ⚙️ Especificações Técnicas

O sistema utiliza tecnologias modernas de front-end para garantir que o software seja leve e compatível com qualquer dispositivo Android ou iOS.

- **Linguagens:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+).
- **Persistência de Dados:** LocalStorage API para salvamento automático.
- **Bibliotecas Externas:**
  - [jsPDF](https://github.com/parallax/jsPDF): Geração de documentos PDF.
  - [AutoTable](https://github.com/simonbengtsson/jsPDF-autotable): Formatação de tabelas profissionais.

---

## 📱 Guia de Versionamento e Fluxo Mobile

Como o projeto é mantido 100% via dispositivos móveis, a estrutura de versionamento segue um fluxo rigoroso para garantir a evolução do código:

1. **Editor de Código:** Utilização do app **Acode** para edição de scripts.
2. **Controle de Versão:** Uso de commits granulares para cada nova funcionalidade.
3. **Histórico de Commits:** Cada ajuste (ex: "Ajuste de PDF", "Correção de Dark Mode") recebe um commit exclusivo, criando uma linha do tempo clara de evolução.

---

## 📖 Manual de Operação (Passo a Passo)

### 1. Configuração Inicial
Vá até a aba **⚙️ Banco de Dados e Perfil** para configurar o nome do Responsável e da Loja. Isto personalizará todos os teus relatórios PDF automaticamente.

### 2. Cadastro e Lançamento
- Cadastre produtos fixos no **Banco** para agilizar a entrada.
- Utilize o campo de **Pesquisa** para preenchimento automático de gramatura e nome.
- O sistema ordena a lista automaticamente: o que vence primeiro fica no topo.

### 3. Gestão de Alertas Visuais
- 🔴 **CRÍTICO:** Ação imediata (dentro da margem de alerta).
- 🟡 **ALERTA:** Vencimento próximo (próximos 15 dias após a margem).
- 🟢 **ÓTIMO:** Prazo seguro.

---

## 💾 Segurança e Backup

- **Exportar Backup:** Gera um arquivo `.json` com todos os dados. Recomendado fazer diariamente.
- **Importar Backup:** Permite restaurar os dados em outro aparelho ou após limpeza de cache.

---

## ⚖️ Licença

Este projeto está licenciado sob a **Licença MIT**.

---
**Desenvolvido com ☕ e Lógica por Lucas Silva | KODA Sistemas** *Araguaína, Tocantins, Brasil*
