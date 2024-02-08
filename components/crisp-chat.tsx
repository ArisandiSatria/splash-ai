"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(`${process.env.NEXT_PUBLIC_WEBSITE_CRISP_AI_SDK}`);
  }, []);

  return null;
};
