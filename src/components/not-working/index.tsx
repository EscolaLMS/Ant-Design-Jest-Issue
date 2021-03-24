import React from "react";
import { DefaultFooter } from "@ant-design/pro-layout";

export default () => (
  <DefaultFooter
    copyright="2021 EscolaSoft"
    links={[
      {
        key: "EscolaSoft",
        title: "Escola Soft",
        href: "https://escolasoft.com",
        blankTarget: true,
      },
      {
        key: "github",
        title: "github",
        href: "https://github.com/EscolaLMS",
        blankTarget: true,
      },
    ]}
  />
);
