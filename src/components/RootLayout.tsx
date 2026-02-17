import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* You can add a Navbar or Footer here later */}
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};