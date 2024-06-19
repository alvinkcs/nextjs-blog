"use client"; // This is a client component

import React, { useState } from "react";

function Footer() {
  const year = new Date().getFullYear();
  const date = new Date().getUTCDate();
  const month = new Date().getUTCMonth();
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  function refresh() {
    now = new Date().toLocaleTimeString();
    setTime(now);
  }

  setInterval(refresh, 1000);

  return (
    <footer style={{maxWidth:"fit-content", marginLeft:"auto", marginRight:"auto"}}>
      <p suppressHydrationWarning >
        Alvin Kong ⓒ {date}/{month + 1}/{year} {time}
      </p>
    </footer>
  );
}

export default Footer;