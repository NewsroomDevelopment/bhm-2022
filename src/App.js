import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";

import Landing from "./containers/Landing";
import ArticleSection from "./containers/ArticleSection";
import LetterSec from './containers/LetterEditor';
import Credits from "./containers/Credits";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <LetterSec />
      <ArticleSection/>
      <Credits />
    </ThemeProvider>
  );
}

export default App;
