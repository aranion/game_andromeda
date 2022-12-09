import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { allActions } from '../../server/store';
import { go, push, goBack, getRouter } from 'connected-react-router';
import type { RootState } from '../../server/store/getInitialState';

function AppTest() {
  const state = useSelector(s => s);
  const { router, auth, user, game, leaderBoard } = state as RootState;
  const { location } = router;
  const { isAuth, isLoadingAuth } = auth;

  const {
    setIsAuth,
    setIsLoadingAuth,
    setUserData,
    setHightScore,
    setLeaders,
  } = allActions;

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

  const handleChangeUserData = () => {
    dispatch(
      setUserData({
        avatar: 'Avatar',
        display_name: 'sdijfsoidf',
        email: 'asdasd',
        first_name: 'asdasd',
        id: 1231231,
        login: 'asdasd',
        phone: 'asdasd',
        second_name: 'asdas',
      })
    );
  };

  const handleHightScore = () => {
    dispatch(setHightScore(777));
  };

  const handleChangeLeader = () => {
    const { id, avatar, display_name, login } = user.userData;

    dispatch(
      setLeaders([
        {
          highScore: 23423,
          id: id || 0,
          avatar,
          nickname: display_name || login,
        },
      ])
    );
  };

  return (
    <div>
      <h1>простой SSR c Redux...</h1>
      <p>isAuth = {isAuth ? 'true' : 'false'}</p>
      <p>isLoadingAuth = {isLoadingAuth ? 'true' : 'false'}</p>
      <p>user = {JSON.stringify(user)}</p>
      <p>leaderBoard = {JSON.stringify(leaderBoard.leaders)}</p>
      <p>HightScore = {game.hightScore}</p>
      <p>path = {location.pathname}</p>
      <p>
        <button onClick={handle}>Click</button>
        <button onClick={handleGoGame}>Click go Game</button>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleChangeUserData}>Change UserData</button>
        <button onClick={handleChangeLeader}>ChangeLeaderBoards</button>
        <button onClick={handleHightScore}>HightScore</button>
      </p>
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
