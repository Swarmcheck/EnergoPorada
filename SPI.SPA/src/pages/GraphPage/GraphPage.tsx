import { Box } from "@mui/material";
import { useFooter } from "contexts/Footer/footer";
import { PageEnum } from "contexts/Footer/Page.enum";
import React from "react";
import { useEffect } from "react";

export const GraphPage = ():JSX.Element => {
  const { setCurrentPage } = useFooter();

  useEffect(() => {
    window.scrollTo(0, 0)
    setCurrentPage(PageEnum.GraphPage);
  },[])

  return (
    <Box sx= {{ height: '100vh' }}>
      <iframe
        title="SwarmcheckGraph"
        width="100%"
        height="100%"
        src="https://pv3.swarmcheck.ai/widget/1840/pl/light"
        frameBorder= {0 as number}
      />
    </Box>
    )
}
