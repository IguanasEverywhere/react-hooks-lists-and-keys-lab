import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let linkAnchors = links.map((link) => {
    return <a href={`#${link}`} key={link}>{link}</a>
  })

  return <nav>
    {linkAnchors}</nav>;
}

export default NavBar;
