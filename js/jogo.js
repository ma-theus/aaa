function playGame(playerChoice) {
  var choices = ['rock', 'paper', 'scissors'];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determinar o resultado
  let result;
  let resultImage;
  let showMessage = true;
  let showPlayAgainButton = true;

  if (playerChoice === computerChoice) {
    result = 'Empate! Tente novamente.';
    resultImage = 'imagens/empate.gif';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'Parabéns! Você ganhou!';
    resultImage = 'imagens/parabens.gif';
    showPlayAgainButton = false;
    showMessage = true;
    document.getElementById('specialButton').style.display = 'block';
  } else {
    result = 'Ops! Você perdeu. Tente novamente.';
    resultImage = 'imagens/perdeu.gif';
  }

  // Exibir o resultado e a imagem dentro da div com o id 'resultadoDiv'
  var resultadoDiv = document.getElementById('resultadoDiv');
  resultadoDiv.innerHTML = ''; // Limpar conteúdo anterior

  // Exibir a imagem
  if (resultImage) {
    var imageElement = document.createElement('img');
    imageElement.src = resultImage;
    imageElement.alt = 'Imagem do resultado';
    imageElement.style.maxWidth = '100px'; // Altere o valor conforme necessário
    imageElement.style.maxHeight = '100px'; // Altere o valor conforme necessário
    resultadoDiv.appendChild(imageElement);
  }

  // Exibir a mensagem de resultado
  if (showMessage) {
    var messageElement = document.createElement('p');
    messageElement.innerHTML = result;
    resultadoDiv.appendChild(messageElement);
  }

  // Exibir o botão "Jogar Novamente" se necessário
  var playAgainButton = document.getElementById('playAgainButton');
  playAgainButton.style.display = showPlayAgainButton ? 'block' : 'none';
}

function playAgain() {
  // Redirecionar para a mesma página para jogar novamente
  window.location.reload();
}

function goToSpecialPage() {
  // Redirecionar para a página especial
  window.location.href = 'special.html';
}