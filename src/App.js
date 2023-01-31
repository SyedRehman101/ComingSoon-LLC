import React from 'react'
import background from "./assets/img/bg.png";
import Background from './components/Background';
import Page from './components/Page';

const App = () => {
  return (
    <div className='flex justify-center items-center' style={{
      backgroundImage: `url(${background})`, backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <Background />
      <Page />
    </div>
  )
}

export default App