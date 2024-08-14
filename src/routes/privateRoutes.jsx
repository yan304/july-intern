import { MainDashboard } from "../components/main";

export const privateRoutes = [
  {
    name: "Admin",
    path: "admin",
    element: <div>Hello Admin</div>
  },
  {
    name: "Main",
    path: "main",
    element: <MainDashboard />
  },
  // {
  //   path: "/",
  //   element: < DashboardLayout />,
  //   children: [
  //     {
  //       name: "Dashboard",
  //       path: "dashboard",
  //       element: <Dashboard />
  //     },
  //     {
  //       name: "Bernasor",
  //       path: "bernasor",
  //       element: <Student />
  //     }
  //   ]
  // },
]
