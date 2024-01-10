// Here problem with esmodules. I receive undefined from 
// utils api. But if we use commonjs syntax all work.
// Uncomment and check

// const api = require("@home/api");

import api from "@home/api";

export default function Root() {

  console.log('[api]', api);

  return (
    <section>
      <h1>Navbar 123</h1>
    </section>
  );
}
