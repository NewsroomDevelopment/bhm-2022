import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";

import Landing from "./containers/Landing";
import ArticleSection from "./containers/ArticleSection";
import TimelineContainer from "./containers/TImelineContainer";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <ArticleSection />
      <TimelineContainer></TimelineContainer>
    </ThemeProvider>
  );
}

export default App;
