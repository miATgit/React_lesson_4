import { green, blue } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: blue[400],
    },
  },
});

export default theme;