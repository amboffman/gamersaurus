import React, { Suspense, lazy } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
// import ShareFavorites from "./pages/ShareFavorites";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Signup = lazy(() => import("./pages/Signup"))
const Search = lazy(()=>import("./pages/Search"))
const Profile = lazy(() => import("./pages/Profile"))
const GameInfo = lazy(() => import("./pages/GameInfo"))

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/signup" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>
            {/* <Route exact path="/favorites/:userName">
            <ShareFavorites />
          </Route> */}
            <Route path="/:id">
              <GameInfo />
            </Route>
          </Switch>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
