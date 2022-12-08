import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allActions } from '../../server/store';
import { go, push, goBack, getRouter } from 'connected-react-router';

function AppTest() {
  const state = useSelector(s => s);
  const { router, auth } = state as any;
  const { location } = router;
  const { isAuth, isLoadingAuth } = auth;

  const { setIsAuth, setIsLoadingAuth } = allActions;

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('store', state);
  }, [isAuth, isLoadingAuth, location]);

  const handle = () => {
    console.log('click');

    dispatch(setIsAuth(!isAuth));
    dispatch(setIsLoadingAuth(!isLoadingAuth));
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
      <p>isAuth = {isAuth ? 'true' : 'false'}</p>
      <p>isLoadingAuth = {isLoadingAuth ? 'true' : 'false'}</p>
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
