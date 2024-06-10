"use client";

import { RenameModal } from "@/components/modals/renameModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  //useEffect runs only once the page is rendered on client side, hence, we can setisMounted to true here. This will ensure that the modal is rendered on the client side, AVOIDING THE HYDRATION ERROR
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <RenameModal />
    </>
  );
};
