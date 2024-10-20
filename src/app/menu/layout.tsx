import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Layout: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="w-full bg-[url(https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_1280.jpg)] h-dvh m-auto bg-cover">
      <div className="w-full xl:w-[1150px] bg-amber-50 h-dvh mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
