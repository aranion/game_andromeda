import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setName, setLoading } from '../../server/store';
import { go, push, goBack, getRouter } from 'connected-react-router';

function AppTest() {
  const state = useSelector(s => s);
  const { data, router } = state as any;
  const { location } = router;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('store', state);
  }, [data, location]);

  const handle = () => {
    console.log('click');

    dispatch(setLoading(!data.loading));
    dispatch(setName('NewName... test-random:' + Math.random().toFixed(1)));
  };

  const handleGoGame = () => {
    // console.log(getRouter(router));

    dispatch(push('/game'));
  };

  const handleBack = () => {
    dispatch(goBack());
  };

  return (
    <div>
      <h1>простой SSR c Redux...</h1>
      <p>name = {data.name}</p>
      <p>loading = {data.loading ? 'true' : 'false'}</p>
      <p>path = {location.pathname}</p>
      <button onClick={handle}>Click</button>
      <button onClick={handleGoGame}>Click go Game</button>
      <button onClick={handleBack}>Back</button>
    </div>
    // <Routes>
    //   <Route path={RouterList.HOME}>
    //     <Route
    //       index
    //       element={
    //         <div>
    //           <h1>простой SSR c Redux...</h1>
    //           <p>name = {data.name}</p>
    //           <p>loading = {data.loading ? 'true' : 'false'}</p>
    //           <p>path = {location.pathname}</p>
    //           <button onClick={handle}>Click</button>
    //           <button onClick={handleGoGame}>Click go Game</button>
    //         </div>
    //       }
    //     />
    //     <Route
    //       path={RouterList.GAME}
    //       element={
    //         <div>
    //           <h1>простой SSR c Redux...</h1>
    //           <p>page Game</p>
    //           <button onClick={handleBack}>Back</button>
    //         </div>
    //       }
    //     />
    //   </Route>
    // </Routes>
  );
}

export default AppTest;
