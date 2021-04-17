import './App.css';
import PopOverMenu from "./popoverMenu/popoverMenu";
import { List, makeStyles,Divider} from '@material-ui/core';

function App() {
  const classes = useStyle();
  return (
      <div className="App">
        <List className={classes.list}>
          <PopOverMenu text='Harita Tipi' icon='map' title='Harita Tipi'/>
          <Divider orientation="vertical" flexItem/>
          <PopOverMenu text='Katmanlar' icon='layers' title='Katmanlar'/>
          <Divider orientation="vertical" flexItem/>
          <PopOverMenu text='Yerlerim' icon='room' title='Yerler'/>
        </List>


      </div>
  );
}
const useStyle = makeStyles((theme) => {
  return {
    list: {
      display: 'flex',
      border: 'solid 1px #000'

    }
  }
});



export default App;
