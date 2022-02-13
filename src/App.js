import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";

import Landing from "./containers/Landing";
import ArticleSection from "./containers/ArticleSection";
import TimelineContainer from "./containers/TImelineContainer";
import LetterSec from './containers/LetterEditor';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <LetterSec />
      <ArticleSection />
      <TimelineContainer></TimelineContainer>
    </ThemeProvider>
  );
}

export default App;
