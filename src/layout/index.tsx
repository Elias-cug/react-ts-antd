import React, {ReactNode} from "react";
import Header from './header'
import MenuAside from './menu-aside'
interface MainLayoutProps {
  children: ReactNode
}

function MainLayout(props: MainLayoutProps) {
  return (
    <div className="container">
      <Header></Header>
      <div className="main-container-wrapper">
        <MenuAside></MenuAside>
        <div className="main-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout