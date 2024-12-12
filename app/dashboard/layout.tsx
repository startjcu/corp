"use client"

import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2 className="text-green-500 m-2">这里是 dashboard layout -- {count}</h2>
      <button className="bg-black text-white px-4 py-1 rounded-md ml-5" onClick={() => setCount(count + 1)}>+1</button>
      {children}
    </div>
  );
}