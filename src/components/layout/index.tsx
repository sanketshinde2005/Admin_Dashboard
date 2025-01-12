import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "../layout/header";
import React from "react";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
