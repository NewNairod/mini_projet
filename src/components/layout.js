import { Outlet, Link } from "react-router-dom";
const Layout = () => {
return (
<>
<nav>
<ul>
<li>
<Link to="/">Employes</Link>
</li>
<li>
<Link to="/salaire">Salaire</Link>
</li>
<li>
<Link to="/conge">Conge</Link>
</li>
</ul>
</nav>
<Outlet />
</>
)
};
export default Layout;