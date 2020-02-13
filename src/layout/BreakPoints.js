const size = {
  mobileSmall: '320px',
  mobileMobile: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  tabletSmall: '600px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileSmall: `(max-width: ${size.mobileSmall})`,
  mobileMobile: `(max-width: ${size.mobileMobile})`,
  mobileLarge: `(max-width: ${size.mobileLarge})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletSmall: `(max-width: ${size.tabletSmall})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopLarge: `(max-width: ${size.laptopLarge})`,
  desktop: `(max-width: ${size.desktop})`
};
