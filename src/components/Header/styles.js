const search = {
  position: 'right',
  marginLeft: 1,
  width: '100%',
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 4,
  borderRadius: 0,
}

const searchIcon= {
  height: '100%', position: 'absolute', right:30, pointerEvents: 'none', display: 'flex',
}

const inputRoot = {
  color: 'inherit'
}


const toolbar = {
  display: 'flex', justifyContent: 'space-between',color: 'black', backgroundImage:'linear-gradient(to right bottom, #d37300, #e54543, #d72478, #a339a8, #2b52c3)',
}

const journey = {
  font: "Roboto Slab" ,bodyFontFamily: 'sans-serif', padding : '1em 2em',
}

export const classes = {
search: search,
searchIcon: searchIcon,
inputRoot: inputRoot,
toolbar: toolbar,
journey: journey,
}