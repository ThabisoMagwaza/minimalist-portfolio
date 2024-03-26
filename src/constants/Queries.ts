const Breakpoints = {
  mobile: 600,
  tablet: 900,
  laptop: 1300,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${Breakpoints.mobile / 16}rem)`,
  laptopAndUp: `(min-width: ${Breakpoints.tablet / 16}rem)`,
  desktopAndUp: `(min-width: ${Breakpoints.laptop / 16}rem)`,
};
