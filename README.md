Leonardo Zerbinatti de Sales, RM: 562992
Murillo Fernandes Carapia, RM: 564942

GorillaxHumano

🐵 Gorila vs 100 Humanos, simulação interativa de uma batalha entre um gorila e 100 humanos. O usuário controla o gorila e pode atacar, defender ou se curar enquanto enfrenta uma horda de humanos com forças variadas.

🚀 Tecnologias Utilizadas
HTML5
CSS3
JavaScript (Vanilla)
LocalStorage (para persistência de dados)

🎯 Funcionalidades
🔥 Ataque: O gorila ataca todos os humanos vivos, causando 5 de dano em cada um. Humanos com vida 0 são eliminados.

🛡️ Defesa: O gorila ativa defesa, reduzindo pela metade o dano dos humanos no próximo ataque.
❤️ Cura: O gorila recupera entre 10 e 24 pontos de vida (valor aleatório).
🔄 Reset: Reinicia a batalha, limpando o progresso salvo no navegador.
🗺️ Estrutura do Projeto

HTML (index.html)
Define a interface da batalha.

1) Contém:
- Cabeçalho com título.
- Seção de status do gorila e dos humanos (vida, força média, quantidade viva).
- Barra de ações (Atacar, Defender, Curar, Resetar).
- Área de log que registra cada ação durante a batalha.
- Rodapé com créditos.

2) CSS (style.css)
- Estiliza a interface com:
- Fundo temático.
- Barras de vida dinâmicas (mudam de cor com base na vida restante).
- Botões estilizados com efeito hover e desativação após o fim do jogo.
- Log com visual de terminal (texto verde em fundo preto).
- Layout responsivo e organizado.

3) JavaScript (script.js)
Gerencia toda a lógica da batalha:

- Criação dos humanos (vida = 10 e força aleatória entre 1 e 3).
- Controle das ações do gorila (atacar, defender, curar).
- Turno automático dos humanos após cada ação do gorila.
- Quantidade de humanos vivos.
- Força média dos humanos.
- Vida do gorila e dos humanos (representada também nas barras visuais).
- Verificação constante de condições de vitória ou derrota.
- Desabilitação dos botões ao fim da batalha.
- Salvamento e carregamento automático do estado da batalha usando LocalStorage.
- Sistema de log que registra todos os eventos da batalha em tempo real.

4) 💾 Persistência de Dados
O estado da batalha é salvo automaticamente no navegador usando localStorage.

- Ao recarregar a página, a batalha continua de onde parou.
- O botão "🔄 Resetar" limpa o estado salvo e reinicia a batalha do zero.

5) ✅ Como Rodar o Projeto
- Baixe ou clone o repositório.
- Abra o arquivo index.html no seu navegador.
- Jogue diretamente sem necessidade de servidores ou instalações.