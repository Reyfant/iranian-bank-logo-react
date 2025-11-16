'use client'

import dynamic from "next/dynamic";

const IranianBankClient = dynamic(
    () => import("./IranianBank").then((mod) => mod.default),
    { ssr: false }
);

export default IranianBankClient;