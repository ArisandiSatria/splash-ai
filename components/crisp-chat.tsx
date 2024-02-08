"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("08fe8707-a3b6-4eef-80fa-4f91879f0a80");
  }, []);

  return null;
};
