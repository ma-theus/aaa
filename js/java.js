function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simples validação de usuário e senha
    if (username === 'vic' && password === 'namorada') {
      // Se o login for bem-sucedido, redirecione para a página do jogo
      window.location.href = 'jogo.html';
    } else {
      document.getElementById('error-message').innerText = 'Usuário ou senha incorretos!';
    }
  }
  