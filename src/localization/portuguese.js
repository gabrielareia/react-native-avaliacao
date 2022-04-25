export const pt = {
  homeScreen: {
    title: 'Início',
    welcomeTitle: 'Bem-vindo',
    introduction: 'Esse aplicativo criado com React Native é minha pequena sala de testes, onde eu vou implementar algumas coisas que eu estou aprendendo ou acho curioso e interessante.\n\n' +
      'Por enquanto não tem muito o que fazer por aqui, mas eu pretendo continuar atualizando o aplicativo e adicionando mais coisas de vez em quando.\n\nEu espero que, assim como eu, você também ache as coisas aqui interessantes.\n\nDivirta-se.',
      goToPlaygroundButton: "Começar",
  },
  playgroundScreen: {
    title: 'Playground',
    changeTheme: {
      randomColorTitle: "Altere a paleta de cores do aplicativo",
      randomColorParagraph: 'Clique nesse botão abaixo se você quiser alterar a paleta de cores do aplicativo.\n\n' +
        'Ele faz uma requisição de uma paleta de cores aleatória para a API Colormind e aplica as novas cores no tema do aplicativo. (Talvez não fique bonito, mas você pode sempre mudar o tema novamente)',
      changeColorButton: "Mudar cores do app",
    },
    game: {
      gameTitle: "Pequeno jogo criado com React Native",
      gameParagraph: 'Eu queria fazer um aplicativo simples, e não gastar muito tempo criando coisas falsas como um template de rede social falsa ou de um restaurante, que só serviriam para mostrar que eu sei criar templates de aplicativos, mas não teriam nenhuma criatividade ou originalidade.\n\n' +
      'Ao invés disso eu decidi fazer o aplicativo mais simples que eu imaginei, usando todas as técnicas descritas na seção "Sobre", e eu gastei um tempo maior fazendo uma coisa que eu adoro, que é criar jogos do zero, mas nesse caso usando somente o React Native para isso.\n\n' +
      'Eu queria testar a velocidade do React Native, e mesmo que não tenha sido criado para isso, eu queira saber se conseguiria lidar com tanto processamento e renderizações frame a frame.\n\n' +
      'Então eu criei um joguinho muito básico, completamente usando React. Cada componente no jogo é um componente do React, renderizado como qualquer outro componente do React.\n\n' +
      'Eu tive que criar minha própria engine de física para isso, e arrumar soluções criativas para renderizar os componentes onde eu queria que eles estivessem a cada frame.\n\n' +
      'Abaixo você pode jogar esse pequeno jogo. O objetivo é não deixar a bola tocar nas bordas da sua tela.',
      playButton: 'Jogar minigame',
    },
  },
  aboutScreen: {
    title: 'Sobre',
    aboutAppTitle: 'Sobre esse aplicativo:',
    aboutThisApp: 'Eu criei esse aplicativo de demonstração para aplicar o que eu aprendi sobre React Native, hooks customizados, HOC (Higher-Order Components), React-Query, Context API e Styled components.\n' +
    'O código fonte para este aplicativo está disponível no meu GitHub:',
    sourceCodeButton: 'Leia o código fonte',
    aboutMeTitle: 'Sobre mim:',
    aboutMe: 'Meu nome é Gabriel Areia, eu sou um estudante de ciência da computação e atualmente trabalho com .NET e React. Você pode saber mais sobre mim e meu currículo no meu GitHub ou Linkedin:',
  },
  gameScreen: {
    highScore: 'Recorde:'
  }
};
