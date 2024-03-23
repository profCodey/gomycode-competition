import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "../pages/recipeList";
import UserProfile from "../pages/userProfile";

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="appRouter">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
