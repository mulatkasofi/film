import React from "react";



interface MainLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ header, content, footer}) => {
  return (
    <div>
      <header >{header}</header>
      <main >{content}</main>
      <footer >{footer}</footer>
    </div>
  );
};

export default MainLayout;
