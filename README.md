# 🛒 EconomizeJá

**Projeto Acadêmico - Curso de Análise e Desenvolvimento de Sistemas** **Aluno(a):** Flávio Lins

## 📝 Descrição do Projeto
Aplicativo focado em melhorar a experiência de compra do usuário, permitindo a busca de produtos e aplicando, de forma 100% automática, o melhor cupom de desconto disponível no momento do checkout. O projeto visa praticar a criação de interfaces de e-commerce e a integração com APIs.

## 🔗 Links Importantes
* **Protótipo no Figma:** https://www.figma.com/design/oMXBQvJzfEbsqnvcE40FM2/EconomizeJ%C3%A1?node-id=0-1&t=01g0NLdgoJfWHgOz-1
* **Documento Product Backlog:** https://docs.google.com/document/d/181pJm7L_7ye4w91cVLwhJZy6ajbMoYjsi5cXwgkREFo/edit?tab=t.0#heading=h.jmk0ll6h481k

---

## 📋 Backlog do Produto Priorizado

O desenvolvimento foi dividido em 3 Sprints principais, priorizando desde a fundação do aplicativo até o motor de descontos e o checkout.

### 🏃 Sprint 1: Descoberta e Catálogo
Foco na navegação básica e visualização dos produtos.

| ID | User Story (US) | Prioridade | Critérios de Aceite |
| :--- | :--- | :--- | :--- |
| **US01** | Como usuário, quero buscar produtos por nome ou categoria para encontrar rapidamente o que desejo. | Alta | - Campo de busca funcional.<br>- Retorno de lista de produtos correspondentes.<br>- Mensagem de "produto não encontrado". |
| **US02** | Como usuário, quero ver os detalhes de um produto (foto, preço, descrição) para decidir se vou comprá-lo. | Alta | - Tela de detalhes exibindo informações corretas puxadas da base de dados/API. |
| **US03** | Como usuário, quero me cadastrar e fazer login para manter o histórico das minhas compras e cupons. | Média | - Formulário de cadastro com validação.<br>- Redirecionamento para a Home após login. |

### 🏃 Sprint 2: Carrinho e Motor de Cupons
Foco na lógica principal do aplicativo: o carrinho de compras e a automação dos descontos.

| ID | User Story (US) | Prioridade | Critérios de Aceite |
| :--- | :--- | :--- | :--- |
| **US04** | Como usuário, quero adicionar produtos ao carrinho para fechar uma compra única. | Alta | - Botão "Adicionar ao Carrinho" funcional.<br>- Atualização visual do ícone do carrinho. |
| **US05** | Como sistema, devo consultar a base de cupons disponíveis sempre que o usuário acessar o carrinho. | Alta | - Integração com API/tabela de cupons.<br>- Exclusão automática de cupons expirados. |
| **US06** | Como usuário, quero que o melhor cupom de desconto seja aplicado automaticamente ao meu carrinho. | Alta | - Lógica que compara descontos e aplica o maior.<br>- Exibição do aviso: "Cupom Aplicado Automaticamente". |

### 🏃 Sprint 3: Checkout e Integração (Finalização)
Foco em fechar o pedido e comunicar a transação.

| ID | User Story (US) | Prioridade | Critérios de Aceite |
| :--- | :--- | :--- | :--- |
| **US07** | Como usuário, quero visualizar um resumo claro com o subtotal, o desconto aplicado e o valor final antes de pagar. | Alta | - Tela de checkout com os cálculos matemáticos precisos (Subtotal - Desconto = Total). |
| **US08** | Como sistema, devo enviar os dados da compra para a API do e-commerce para registrar o pedido. | Alta | - Envio do payload correto via método POST.<br>- Tratamento de sucesso ou erro na tela. |
| **US09** | Como usuário, quero ver meu histórico de pedidos para acompanhar quanto economizei no total. | Baixa | - Tela de perfil listando pedidos passados.<br>- Tag indicando a economia de cada compra. |

---
