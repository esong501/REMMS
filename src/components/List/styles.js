import { styled } from '@mui/material';

export default styled((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 20, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '40px',
    spacing: 8,
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '35vh', overflow: 'auto',
  },
}));