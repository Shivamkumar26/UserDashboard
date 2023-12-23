import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Data/Data';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/DashBoard/DashBoard';
import LoadingPage from './components/LoadingPage/LoadingPage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
  // const {allTickets} = false;
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <>
      {allTickets ? (
        <div className='tickets'>
          <Navbar />
          <hr className='dashview' />
          <Dashboard />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;