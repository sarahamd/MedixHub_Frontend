"use client";
import { Provider } from "react-redux";
import Store from "@/lib/redux/store";
const StorePovider = ({ children }) => {
  // Auth handler
  return <Provider store={Store}>{children}</Provider>;
};

export default StorePovider;
