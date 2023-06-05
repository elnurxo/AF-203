import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainRoot = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainRoot