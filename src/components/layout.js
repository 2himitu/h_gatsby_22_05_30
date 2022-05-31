import { Link } from "gatsby";
import React, { Children } from "react";

function Layout({Children}){
  return(
    <main>
      <div style={{display:"flex",gap:10}}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">테스트 스페이스</Link>
      </div>
      {Children}
      <div>
        copyright....
      </div>
    </main>

  );

}
export default Layout;