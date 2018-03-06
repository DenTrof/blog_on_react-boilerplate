import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }


  /* -----------------  slyle for react-transition-group (folder Article) ---------------------*/

    .article-enter {
    opacity: 0.01;
  }

  .article-enter.article-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .article-leave {
    opacity: 1;
  }

  .article-leave.article-leave-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }


 .article-appear {
  opacity: 0.01;
}

.article-appear.article-appear-active {
  opacity: 1;
  transition: opacity .9s ease-in;
}
`;
