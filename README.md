# 🛡️ Controle de Validade Profissional
**Gerenciamento inteligente de estoque e prazos de vencimento.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 📝 1. Visão Geral do Sistema
O **Controle de Validade Profissional** é uma solução robusta e intuitiva projetada para otimizar a gestão de estoque em tempo real. Focado em usabilidade e eficiência, o sistema permite que colaboradores e gestores monitorem prazos de validade com precisão cirúrgica, reduzindo perdas financeiras e garantindo a conformidade sanitária.

### Tecnologias Utilizadas:
* **HTML5 Semântico:** Estrutura focada em acessibilidade.
* **CSS3 Dinâmico:** Interface responsiva com variáveis e temas.
* **JavaScript ES6+:** Lógica avançada de processamento de dados.
* **jsPDF & AutoTable:** Geração de relatórios profissionais em PDF.
* **LocalStorage API:** Persistência de dados local segura e rápida.

---

## 🏗️ 2. Arquitetura Funcional
O sistema é dividido em quatro pilares principais, garantindo um fluxo de trabalho fluido:

1.  **Identidade e Perfil:** Customização total da interface e relatórios com dados do responsável.
2.  **Banco de Inteligência:** Armazenamento local de produtos para preenchimento automático ultra-rápido.
3.  **Gestão de Inventário:** Lançamento simplificado com cálculo automático de dias restantes e status de risco.
4.  **Exportação e Segurança:** Geração de documentos PDF oficiais, integração com redes sociais e sistemas de backup.

---

## 📸 3. Demonstração Visual (Guia do Sistema)

Abaixo, detalhamos cada módulo do sistema através de capturas de tela:

### 🖼️ Módulo de Interface e Perfil

**IMAGEM 01: DASHBOARD INICIAL** > *Onde tirar: Tela principal (Home).* > Mostra a saudação de boas-vindas com o nome do mercado e do responsável, além do menu de navegação superior.  
![Dashboard](screenshots/01.jpg)

**IMAGEM 02: TELA DE PERFIL (FOCO VISUAL)** > *Onde tirar: Perfil do usuário.* > Exibe a estética do perfil com a foto de capa e avatar, demonstrando o design moderno e personalização.  
![Perfil](screenshots/02.jpg)

**IMAGEM 03: EDIÇÃO DE DADOS PROFISSIONAIS** > *Onde tirar: Campos de entrada na tela de perfil.* > Local onde o usuário insere seu nome profissional e contato para alimentar a assinatura dos relatórios.  
![Edição](screenshots/03.jpg)

**IMAGEM 04: MODO ESCURO (DARK MODE)** > *Onde tirar: Tela principal após alternar o tema.* > Exibe a adaptação das cores para tons escuros, ideal para ambientes de baixa luminosidade em estoques.  
![DarkMode](screenshots/04.jpg)

---

### 🗄️ Módulo de Banco de Dados

**IMAGEM 05: GESTÃO DE GRAMATURAS (TAGS)** > *Onde tirar: Seção Banco de Dados > Gramaturas.* > Sistema de tags dinâmicas para cadastro de pesos (1kg, 2L, 500g), padronizando os registros.  
![Gramaturas](screenshots/05.jpg)

**IMAGEM 06: FORMULÁRIO DE CADASTRO NO BANCO** > *Onde tirar: Seção Configurar Produto no Banco.* > Campos de Nome, Peso, Tipo e Margem de Alerta, armazenando a inteligência de cada item.  
![CadastroBanco](screenshots/06.jpg)

**IMAGEM 07: LISTAGEM DO BANCO DE DADOS** > *Onde tirar: Tabela abaixo do botão Salvar no Banco.* > Mostra os produtos já salvos e a facilidade de organização e edição.  
![ListaBanco](screenshots/07.jpg)

---

### 🚀 Lançamento e Monitoramento

**IMAGEM 08: LANÇAMENTO COM AUTO-FILL** > *Onde tirar: Seção Lançamento Diário.* > Demonstra o preenchimento automático de detalhes ao selecionar um produto já cadastrado.  
![AutoFill](screenshots/08.jpg)

**IMAGEM 09: SELETOR DE DATA E CALENDÁRIO** > *Onde tirar: Campo Data Vencimento.* > Interface nativa de calendário para garantir precisão absoluta nas datas.  
![Calendario](screenshots/09.jpg)

**IMAGEM 10: TABELA DE MONITORAMENTO ATIVA** > *Onde tirar: Tabela principal de produtos lançados.* > Exibe a lista completa de produtos em estoque com suas respectivas datas e quantidades.  
![Monitoramento](screenshots/10.jpg)

**IMAGEM 11: BADGES DE STATUS (ESTRATÉGIA VISUAL)** > *Onde tirar: Close-up na coluna Status.* > Cores Verde (Ótimo), Amarelo (Alerta) e Vermelho (Crítico) indicando prioridade de retirada.  
Gestão de Alertas Visuais
- 🔴 **CRÍTICO:** Ação imediata (dentro da margem de alerta).
- 🟡 **ALERTA:** Vencimento próximo (próximos 15 dias após a margem).
- 🟢 **ÓTIMO:** Prazo seguro.

---

![Status](screenshots/11.jpg)

**IMAGEM 12: BUSCA E FILTRAGEM NA LISTA** > *Onde tirar: Barra de busca da tabela.* > Filtragem instantânea por nome, essencial para o gerenciamento de grandes estoques.  
![Busca](screenshots/12.jpg)

---

### 📄 Exportação e Segurança

**IMAGEM 13: RELATÓRIO PDF GERADO** > *Onde tirar: Arquivo PDF aberto.* > Documento oficial com cabeçalho personalizado e assinatura de autoria de Lucas Silva.  
![PDF](screenshots/13.jpg)

**IMAGEM 14: INTEGRAÇÃO WHATSAPP (TOAST)** > *Onde tirar: Clique em Copiar WhatsApp.* > Feedback visual da cópia dos dados formatados para compartilhamento rápido.  
![WhatsApp](screenshots/14.jpg)

**IMAGEM 15: SISTEMA DE BACKUP E SEGURANÇA** > *Onde tirar: Botões de Exportar/Importar Backup.* > Funcionalidade de salvaguarda que permite trocar de aparelho sem perder as configurações.  
![Backup](screenshots/15.jpg)

---

## 🏆 4. Conclusão e Autoria
Este sistema representa uma solução completa de ponta a ponta. Desde a entrada de dados inteligente até a exportação de documentos oficiais, cada linha de código foi pensada para oferecer a melhor experiência ao usuário final.

Desenvolvido com dedicação por **Lucas Silva**.

📍 **Araguaína, Tocantins - 2026** *© Todos os direitos reservados.*
