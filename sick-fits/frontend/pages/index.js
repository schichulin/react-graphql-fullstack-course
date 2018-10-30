// dev note: next.js takes care about the React importing
// import React from "react";

import Link from "next/link";

const Home = () => (
  <>
    <h3>Hey Home!</h3>
    <Link href="/sell">
      <a>Go to Sell page</a>
    </Link>
  </>
);

export default Home;
