import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();
  const { palette } = theme;

  const logo = (
    <Box
      component="div"
      sx={{
        width: 50,
        height: 50,
        display: 'inline-flex',
        borderRadius: '50%',
        backgroundColor: palette.primary.main,
        alignItems: 'center',
        justifyContent: 'center',
        color: palette.common.white,
        fontWeight: 'bold',
        fontSize: '1.8rem',
        cursor: 'pointer',
        boxShadow: `0 0 20px ${palette.grey[400]}`,
        ...sx,
      }}
      {...other}
    >
      <TwoWheelerIcon sx={{ fontSize: '2rem' }} />
    </Box>
  );

  const text = (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: palette.text.primary,
      }}
    >
      Ace Garage
    </Box>
  );

  if (disabledLink) {
    return (
      <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
        {logo}
        {text}
      </Box>
    );
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
        {logo}
        {text}
      </Box>
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
