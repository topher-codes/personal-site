// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function H1({ children }) {
  // ...
}

function H2({ children }) {
  // ...
}

export function useMDXComponents(components) {
  return { h1: H1, h2: H2, ...components };
}
