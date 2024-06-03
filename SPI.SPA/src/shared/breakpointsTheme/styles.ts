import { createTheme } from "@mui/material";

// declare module '@mui/material/styles' {
//   interface BreakpointOverrides {
//     xs: false,
//     sm: false,
//     md: false,
//     lg: false,
//     xl: false,
//     mobile: true,
//     tablet: true,
//     laptop: true,
//     desktop: true
//   }
// };

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 740,
      sm: 1024,
      md: 1365,
      lg: 1920,
      xl: 2560,
    },
  },
});
// export const theme = createTheme({

//   breakpoints: {
//     values: {
//       mobile: 360,
//       tablet: 768,
//       laptop: 1024,
//       desktop: 1200
//     },
//   },
// });
