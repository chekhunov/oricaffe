import { createTheme } from '@mui/material/styles'

import breakpoints from './breakpoints'
import palette from './palette'
import typography from './typography'

const theme = createTheme({
  spacing: 10,
  breakpoints,
  palette,
  typography
})

export default theme
