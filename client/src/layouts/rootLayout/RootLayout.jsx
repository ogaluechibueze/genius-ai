import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MobileLayout from "../dashboardLayout/MobileLayout";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootLayout">
        <div className="navbar">
        <header>
          <Link to="/" className="logo">
              <img src="/DEMTECH.png" />
          
          </Link>
          <div className="user">
              <SignedIn>
                  <UserButton />
                  <div className="mobile">
              <MobileLayout />
          </div>
              </SignedIn>
          </div>
          
          </header>
          </div>
          <main>
            <Outlet />
          </main>
         <footer/>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
