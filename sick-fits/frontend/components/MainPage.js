import Header from "./Header";
import Meta from "./Meta";

/**
 * Common page for all the router pages
 */
const MainPage = (props) => (
  <div>
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default MainPage;
