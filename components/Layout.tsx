import Header from "components/Header";
import { FC, ReactNode } from "react";

const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
