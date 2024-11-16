import React, { ReactNode, Suspense } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Layout: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Suspense>
      <div className="h-auto min-h-dvh bg-[url('/img/rosatiBG.jpg')] bg-cover pb-16">
        <div className="w-full xl:w-[1150px] mx-auto grid bg-amber-50 pb-10">
          <main>{children}</main>
        </div>
      </div>
    </Suspense>
  );
};

export default Layout;
