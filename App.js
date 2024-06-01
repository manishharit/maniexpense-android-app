import { View, Text } from 'react-native'
import { useState } from 'react';
import AppNavigation from './AppNavigation'
import IntroPage from './IntroPage';
import Dashboard from './Dashboard';

const App = () => {
  const [isLoded , setIsLoded] = useState(false);
  setTimeout(() => {
    setIsLoded(true);
  }, 1000);
  return (
    <>
    {isLoded ? <AppNavigation/> : <IntroPage/>}
{/* <AppNavigation/>  */}
      </>
  )
}

export default App