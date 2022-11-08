import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withPrivateRoute } from './withPrivateRoute';
import { RouterList } from './routerList';
import { Loader } from 'src/components';

const GamePage = lazy(() => import('src/pages/Game'));
const SignInPage = lazy(() => import('src/pages/SignIn'));
const SignUpPage = lazy(() => import('src/pages/SignUp'));
const ForumPage = lazy(() => import('src/pages/Forum'));
const ProfilePage = lazy(() => import('src/pages/Profile'));
const LeaderBoardPage = lazy(() => import('src/pages/LeaderBoard'));
const ServerErrorPage = lazy(() => import('src/pages/ServerError'));
const NotFoundPage = lazy(() => import('src/pages/NotFound'));
const ForumItemPage = lazy(() => import('src/pages/ForumItem'));
const TopicPage = lazy(() => import('src/pages/Topic'));

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
            <Route
              path={RouterList.FORUM_ID_PARAM}
              element={<ForumItemPage />}
            />
          </Route>
          <Route path={RouterList.FORUM_TOPIC} element={<TopicPage />} />
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
