import {useContext} from 'react';
import {PupContext} from '.context/PupContext'

import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';

const PupImage = () => {
  useContext(PupConttext)
  return (
    <img src={speedy} alt="pup" />
  );
};

export default PupImage;