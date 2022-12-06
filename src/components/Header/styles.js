const search = {
  position: 'right',
  marginLeft: 1,
  width: '100%',
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 4,
  borderRadius: 0,
  // [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
}

const searchIcon= {
  height: '100%', position: 'absolute', right:30, pointerEvents: 'none', display: 'flex',
}

const inputRoot = {
  color: 'inherit'
}


const toolbar = {
  display: 'flex', justifyContent: 'space-between'
}

export const classes = {
search: search,
searchIcon: searchIcon,
inputRoot: inputRoot,
toolbar: toolbar
}