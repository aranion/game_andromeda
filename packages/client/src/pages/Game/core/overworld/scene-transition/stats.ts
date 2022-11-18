import endGameButtonSrc from '../../assets/finish-button/finish.png';

export const endGameLabel = {
  text: 'Your ship was consumed by cosmic void...',
  color: 'red',
  font: 'bold 30px Audiowide',
};

export const endGameButton = {
  width: 224,
  height: 102,
  backgroundImageSrc: endGameButtonSrc,
  handleClick: () => {
    console.log('мы кликнули');
  },
};
