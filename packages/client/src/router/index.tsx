import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../components';
import { withPrivateRoute } from './withPrivateRoute';
import { RouterList } from './routerList';

const GamePage = lazy(() => import('../pages/Game'));
const SignInPage = lazy(() => import('../pages/SignIn'));
const SignUpPage = lazy(() => import('../pages/SignUp'));
const ForumPage = lazy(() => import('../pages/Forum'));
const ProfilePage = lazy(() => import('../pages/Profile'));
const LeaderBoardPage = lazy(() => import('../pages/LeaderBoard'));
const ServerErrorPage = lazy(() => import('../pages/ServerError'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

export function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RouterList.HOME}>
          <Route index element={withPrivateRoute(<GamePage />)} />
          <Route path={RouterList.SIGN_IN} element={<SignInPage />} />
          <Route path={RouterList.SIGN_UP} element={<SignUpPage />} />
          <Route path={RouterList.SERVER_ERROR} element={<ServerErrorPage />} />
          <Route path={RouterList.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={RouterList.FORUM}>
            <Route index element={<ForumPage />} />
            <Route path={RouterList.FORUM_ID_PARAM} element={<ForumPage />} />
          </Route>
          <Route path={RouterList.PROFILE}>
            <Route index element={withPrivateRoute(<ProfilePage />)} />
            <Route
              path={RouterList.PROFILE_ID_PARAM}
              element={withPrivateRoute(<ProfilePage />)}
            />
          </Route>
          <Route
            path={RouterList.PROFILE_EDIT}
            element={withPrivateRoute(<ProfilePage />)}
          />
          <Route
            path={RouterList.GAME}
            element={withPrivateRoute(<GamePage />)}
          />
          <Route
            path={RouterList.LEADER_BOARD}
            element={withPrivateRoute(<LeaderBoardPage />)}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}