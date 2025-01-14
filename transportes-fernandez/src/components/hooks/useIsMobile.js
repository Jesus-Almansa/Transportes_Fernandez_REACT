import { useMediaQuery, useTheme } from '@mui/material';

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Ajusta el breakpoint según lo necesario
  return isMobile;
};

export default useIsMobile;