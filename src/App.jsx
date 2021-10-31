import { Toaster } from "react-hot-toast";
import { Switch, Route, Link } from "react-router-dom";
import { CountriesPage } from "pages/CountriesPage";
import { PostsPage } from "pages/PostsPage";
import { TodosPage } from "pages/TodosPage";
import Stopwatch from "components/Stopwatch/Stopwatch";

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/countries">Страны</Link>
        </li>
        <li>
          <Link to="/posts">Посты</Link>
        </li>
        <li>
          <Link to="/todos">Todo</Link>
        </li>
        <li>
          <Link to="/stopwatch">Stopwatch</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/countries">
          <CountriesPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>
        <Route path="/stopwatch">
          <Stopwatch />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </div>
  );
};
