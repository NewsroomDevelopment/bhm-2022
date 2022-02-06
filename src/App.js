import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, Theme } from "./utils/Styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from "./containers/Landing";
import ArticleSection from "./containers/ArticleSection";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Landing />
      <ArticleSection />
    </ThemeProvider>
  );
}

export default App;
