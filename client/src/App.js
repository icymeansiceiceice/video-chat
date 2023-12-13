import {Typography,AppBar} from '@mui/material'
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';


function App() {


  return (
    <div >
        <AppBar position='static' color='inherit' >
          <Typography variant='h2' align='center'>Video chat</Typography>
        </AppBar>
        <VideoPlayer></VideoPlayer>
              <Options>
                  <Notification></Notification>
              </Options>
    </div>
  );
}

export default App;
