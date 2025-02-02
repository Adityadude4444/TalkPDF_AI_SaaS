import Header from "@/components/Header";
import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div>
        <Header />
        {children}
      </div>
      ;
    </ClerkLoaded>
  );
};

export default Layout;
