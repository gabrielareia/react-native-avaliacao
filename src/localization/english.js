export const en = {
  homeScreen: {
    title: 'Home',
    welcomeTitle: 'Welcome',
    introduction: 'This demo app created with React Native is my little playground, where I will implement some things that I am learning or I find curious and interesting.\n\n' +
      "For now there isn't a lot to do, but I intend to continue to update the app and add more stuff from time to time.\n\nI hope you find it as interesting as I do.\n\nHave fun.",
    goToPlaygroundButton: "Start",
  },
  playgroundScreen: {
    title: 'Playground',
    changeTheme: {
      randomColorTitle: "Change app's color palette",
      randomColorParagraph: "Click this button below if you want to change the app's color palette.\n\n" +
        "It queries a random palette from Colormind API and applies it to the app's theme. (Maybe it won't look pretty, but you can always change the theme again)",
      changeColorButton: "Change app's theme",
    },
    game: {
      gameTitle: "Little game created with React Native",
      gameParagraph: "I wanted to do a simlpe app, and not spend too much time creating fake stuff like a fake social media or restaurant template, that would only fit the purpouse of showing that I can create apps templates, but wouldn't have any creativity or originality.\n\n" +
        "Instead I decided to do the simplest app I could think of, using all those techniques described in the \"About\" section, and I spent some time doing something that I love, which is creating games from scratch, but in this case using only React Native for that.\n\n" +
        "I wanted to test the speed of React Native, and even though it wasn't designed for that, I wanted to see if it would manage to deal with that much processing and renders per frame.\n\n" +
        "So I created a very basic game, completely using React. Every component in the game is a React component, rendered just like any other React component.\n\n" +
        "I had to create my own little physics engine for that, and come up with creative solutions to render the components where I wanted them to be each frame.\n\n" +
        "Below you can play this minigame. The goal is to not let the ball touch the borders of the screen.",
      playButton: 'Play minigame',
    },
  },
  aboutScreen: {
    title: 'About',
    aboutAppTitle: 'About this app:',
    aboutThisApp: "I created this demo app to apply what I've learned about React Native, custom hooks, HOC (Higher Order Components), React-Query, Context API and Styled components.\n" +
      'The source code for this app is available on my GitHub:',
    sourceCodeButton: 'Read source code',
    aboutMeTitle: 'About me:',
    aboutMe: "My name is Gabriel Areia, I am a computer science student and currently I am working with .NET and React. You can know more about me and my resume in my GitHub or Linkedin:",
  },
  gameScreen: {
    highScore: 'High score:'
  }
};
