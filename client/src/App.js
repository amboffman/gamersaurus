import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
import ShareFavorites from "./pages/ShareFavorites";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import GameInfo from "./pages/GameInfo";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar";

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
      </AuthProvider>
    </Router>
  );
}

export default App;
