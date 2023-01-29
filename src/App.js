import React from 'react'
import background from "./assets/img/bg.png";
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
      <Page/>
    </div>
  )
}

export default App