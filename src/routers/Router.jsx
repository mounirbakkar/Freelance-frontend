import { Route, Routes } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import Account from "../features/users/pages/Account";
import Search from "../features/users/pages/Search";
import AdminLayout from "../components/layouts/AdminLayout";
import Dachboard from "../features/admin/pages/Dachboard";
import Home from "../features/users/pages/home";
import MangeCategories from "../features/admin/pages/MangeCategories";
import MangeUsers from "../features/admin/pages/MangeUsers";
import MangeAccount from "../features/admin/pages/MangeAccount";
import Settings from "../features/admin/pages/Settings";
import Category from "../features/users/pages/Category";

export default function Router() {
  return (
    <Routes>
      {/* PUBLIC LAYOUT */}
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":slug" element={<Category />} />
        <Route
          path="account"
          element={
            <ProtectedRoute allowedRoles={["user", "admin"]}>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route path="search" element={<Search />} />
      </Route>

      {/* ADMIN LAYOUT (completely separate) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dachboard />} />
        <Route path="managecategories" element={<MangeCategories />} />
        <Route path="mangeusers" element={<MangeUsers />} />
        <Route path="mangeaccount" element={<MangeAccount />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
