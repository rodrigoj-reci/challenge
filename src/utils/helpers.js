import {SPECIES_IMAGES, CM_TO_IN_CONVERSION_RATIO} from './constants';

export const getImage = name => {
  let image;
  for (const spe in SPECIES_IMAGES) {
    if (name.toLowerCase().includes(spe)) image = SPECIES_IMAGES[`${spe}`];
  }
  return image;
};

export const getInchHeight = height => {
  if (isNaN(height)) return height;
  return `${Math.round(height / CM_TO_IN_CONVERSION_RATIO)}''`;
};
