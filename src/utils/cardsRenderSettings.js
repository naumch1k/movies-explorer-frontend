const cardsRenderSettings = {
  desktop: { total: 12, add: 3 },
  tablet: { total: 8, add: 2 },
  mobile: { total: 5, add: 2 },
};
  
export const getCardsRenderSettings = (windowWidth) => {
  let breakpoint = '';

  if (windowWidth >= 1280) {
    breakpoint = 'desktop';
  } else  if (windowWidth >= 650) {
    breakpoint = 'tablet';
  } else {
    breakpoint = 'mobile';
  }
  
  return cardsRenderSettings[breakpoint];
};
