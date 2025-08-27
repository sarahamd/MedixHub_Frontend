"use client";

import Link from "next/link";

const Error = () => {
  return (
    <>
      <h2>Something went wrong!</h2>
      <Link href="/">Go Back</Link>
    </>
  );
};

export default Error;
