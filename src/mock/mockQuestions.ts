// data/mockQuestions.ts
import { Question } from "@/type/QuizTypes";

export const mockQuestions: Question[] = [
    {
        id: 1,
        question: "Which is the most popular JavaScript framework?",
        options: ["Angular", "React", "Svelte", "Vue"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 2,
        question: "Which company invented React?",
        options: ["Google", "Apple", "Netflix", "Facebook"],
        correctOption: 3,
        points: 10,
    },
    {
        id: 3,
        question: "What's the fundamental building block of React apps?",
        options: ["Components", "Blocks", "Elements", "Effects"],
        correctOption: 0,
        points: 10,
    },
    {
        id: 4,
        question:
            "What's the name of the syntax we use to describe the UI in React components?",
        options: ["FBJ", "Babel", "JSX", "ES2015"],
        correctOption: 2,
        points: 10,
    },
    {
        id: 5,
        question: "How does data flow naturally in React apps?",
        options: [
            "From parents to children",
            "From children to parents",
            "Both ways",
            "The developers decides",
        ],
        correctOption: 0,
        points: 10,
    },
    {
        id: 6,
        question: "How to pass data into a child component?",
        options: ["State", "Props", "PropTypes", "Parameters"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 7,
        question: "When to use derived state?",
        options: [
            "Whenever the state should not trigger a re-render",
            "Whenever the state can be synchronized with an effect",
            "Whenever the state should be accessible to all components",
            "Whenever the state can be computed from another state variable",
        ],
        correctOption: 3,
        points: 30,
    },
    {
        id: 8,
        question: "What triggers a UI re-render in React?",
        options: [
            "Running an effect",
            "Passing props",
            "Updating state",
            "Adding event listeners to DOM elements",
        ],
        correctOption: 2,
        points: 20,
    },
    {
        id: 9,
        question: 'When do we directly "touch" the DOM in React?',
        options: [
            "When we need to listen to an event",
            "When we need to change the UI",
            "When we need to add styles",
            "Almost never",
        ],
        correctOption: 3,
        points: 20,
    },
    {
        id: 10,
        question: "In what situation do we use a callback to update state?",
        options: [
            "When updating the state will be slow",
            "When the updated state is very data-intensive",
            "When the state update should happen faster",
            "When the new state depends on the previous state",
        ],
        correctOption: 3,
        points: 30,
    },
    {
        id: 11,
        question: "If we pass a function to useState, when will that function be called?",
        options: [
            "On each re-render",
            "Each time we update the state",
            "Only on the initial render",
            "The first time we update the state",
        ],
        correctOption: 2,
        points: 30,
    },
    {
        id: 12,
        question:
            "Which hook to use for an API request on the component's initial render?",
        options: ["useState", "useEffect", "useRef", "useReducer"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 13,
        question: "Which variables should go into the useEffect dependency array?",
        options: [
            "Usually none",
            "All our state variables",
            "All state and props referenced in the effect",
            "All variables needed for clean up",
        ],
        correctOption: 2,
        points: 30,
    },
    {
        id: 14,
        question: "An effect will always run on the initial render.",
        options: [
            "True",
            "It depends on the dependency array",
            "False",
            "In depends on the code in the effect",
        ],
        correctOption: 0,
        points: 30,
    },
    {
        id: 15,
        question: "When will an effect run if it doesn't have a dependency array?",
        options: [
            "Only when the component mounts",
            "Only when the component unmounts",
            "The first time the component re-renders",
            "Each time the component is re-rendered",
        ],
        correctOption: 3,
        points: 20,
    },
    {
        id: 16,
        question: "What is the primary purpose of routing in a web application?",
        options: [
            "To load styles and scripts dynamically",
            "To connect the frontend with the backend",
            "To match different URLs to corresponding views or components",
            "To handle form validation on the client side"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 17,
        question: "In React, what does a 'route' typically represent?",
        options: [
            "A function that fetches data from an API",
            "A match between a URL path and a specific React component",
            "A global state shared across components",
            "A reference to a DOM node in the render tree"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 18,
        question: "What does routing in a React application enable users to do?",
        options: [
            "Navigate between different screens using links and the browser URL",
            "Inject global styles into individual components",
            "Automatically fetch and cache API responses",
            "Synchronize component state with local storage"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 19,
        question: "What is React Router used for in React applications?",
        options: [
            "Managing application state globally",
            "Handling navigation and routing between components",
            "Styling React components",
            "Fetching data from APIs"
        ],
        correctOption: 1,
        points: 10
    },

    {
        id: 20,
        "question": "What is a Single Page Application (SPA)?",
        "options": [
            "An app that works only on a single device",
            "A web app that loads a single HTML page and updates the UI dynamically",
            "A website that requires reloading the page for each interaction",
            "An app that is limited to only one route"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        id: 21,
        "question": "What is one major benefit of using a Single Page Application?",
        "options": [
            "Pages reload faster on every click",
            "Server load increases significantly",
            "Navigation between pages feels faster and smoother",
            "It does not require JavaScript"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        id: 22,
        "question": "How does an SPA typically handle browser URLs?",
        "options": [
            "Each new page requires a full server request",
            "It changes the URL without reloading the page using the History API",
            "It hides the URL entirely",
            "It reloads the page using server redirection"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        id: 23,
        question: "Where is the rendering typically performed in a Single Page Application (SPA)?",
        options: [
            "Only on the server before sending HTML to the client",
            "Primarily on the client using JavaScript to build and update the UI",
            "Rendering is handled equally by client and server simultaneously",
            "Rendering happens exclusively on external CDN servers"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 24,
        question: "What happens in a React application when the URL changes via routing?",
        options: [
            "The browser reloads the entire page from the server",
            "The URL change is ignored and nothing updates",
            "The DOM updates to reflect the new component matching the URL",
            "The application closes and restarts"
        ],
        correctOption: 2,
        points: 10
    },

    {
        id: 25,
        question: "In a Single Page Application (SPA), the page is updated primarily by what?",
        options: [
            "JavaScript executing in the browser",
            "Server sending a new HTML page",
            "Browser reloading the whole document",
            "CSS stylesheets changing the layout"
        ],
        correctOption: 0,
        points: 10
    },

    {
        id: 26,
        "question": "What is a common SEO challenge when using SPAs?",
        "options": [
            "SPAs cannot be hosted on secure servers",
            "Search engines cannot index dynamically-rendered content easily",
            "SPAs do not support links between pages",
            "SPAs are not compatible with HTTPS"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        id: 27,
        question: "What is a fundamental difference between client-side routing and server-side routing?",
        options: [
            "Client-side routing reloads the entire page on every navigation",
            "Server-side routing never reloads the page",
            "Both client-side and server-side routing behave exactly the same",
            "Client-side routing updates views dynamically without full page reloads, while server-side routing reloads the entire page"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 28,
        "question": "Which technique can improve SEO for a Single Page Application?",
        "options": [
            "Using multiple HTML pages instead of JavaScript",
            "Avoiding use of routing libraries like React Router",
            "Using server-side rendering (SSR) or pre-rendering",
            "Disabling JavaScript completely"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        id: 29,
        "question": "What is ESLint primarily used for in JavaScript projects?",
        "options": [
            "Managing state between components",
            "Linting and identifying problematic code patterns",
            "Rendering UI elements",
            "Running tests on components"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        id:30,
        "question": "When is ESLint typically run?",
        "options": [
            "Only during deployment",
            "When bundling with Webpack",
            "During development or before commit",
            "After production build"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        id:31,
        "question": "Does ESLint only check for syntax errors?",
        "options": [
            "Yes, it only parses JavaScript syntax",
            "No, it can enforce coding style and detect logic bugs",
            "Yes, it replaces the need for a compiler",
            "No, it compiles your code to production-ready bundles"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        id:32,
        "question": "Which file is commonly used to configure ESLint rules?",
        "options": [
            ".eslint.config.js",
            ".eslint",
            ".eslintrc.json",
            ".linterrc.js"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        id:33,
        "question": "What is the purpose of plugins in ESLint?",
        "options": [
            "To improve runtime performance",
            "To install TypeScript",
            "To add custom rules or extend ESLint’s behavior",
            "To convert JavaScript to HTML"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        id:34,
        "question": "Which command runs ESLint via the CLI?",
        "options": [
            "eslint-check",
            "lint-start",
            "eslint .",
            "node run eslint"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        id:35,
        "question": "How can you exclude a file or folder from being linted?",
        "options": [
            "By adding it to .eslintignore",
            "By removing it from package.json",
            "By adding a comment in index.html",
            "By renaming the file"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        id:36,
        "question": "Which statement about custom ESLint rules is true?",
        "options": [
            "You can write your own rule as a function that analyzes the AST",
            "Rules can only be modified from the command line",
            "Rules must be defined in the root HTML file",
            "Custom rules are only supported in Angular projects"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        id:37,
        "question": "How do you enable ESLint for React projects?",
        "options": [
            "Add 'react' in the plugins and 'plugin:react/recommended' in the extends array",
            "Install Redux before using ESLint",
            "Use `vite` instead of `eslint`",
            "Only install `eslint` without any plugins"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        id:38,
        "question": "What is the difference between 'rules', 'extends', and 'plugins' in ESLint config?",
        "options": [
            "'rules' is for plugins, 'extends' defines environments, 'plugins' lists globals",
            "'rules' defines specific rule settings, 'extends' inherits base configs, 'plugins' adds extra rule sets",
            "All three are the same and interchangeable",
            "Only 'rules' is required; the rest are optional comments"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 39,
        "question": "Why are there so many different ways of styling a React application?",
        "options": [
            "Because React enforces a specific styling method",
            "Because CSS is not supported in React by default",
            "Because React is unopinionated and allows flexibility based on project needs",
            "Because JSX can only use inline styles"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 40,
        "question": "What is the main benefit of using CSS Modules in a React application?",
        "options": [
            "They allow you to write CSS directly inside JSX using template literals",
            "They automatically apply styles globally across all components",
            "They enable CSS to be compiled into JavaScript at runtime",
            "They scope CSS class names locally to the component by default",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 41,
        "question": "What does it mean when CSS styles are 'scoped' to a React component?",
        "options": [
            "The styles are applied to the entire page by default",
            "The styles can be reused across all components globally",
            "The styles are only available in global.css files",
            "The styles affect only the component where they are used"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 42,
        "question": "What is one common problem with using global CSS styles in a React application?",
        "options": [
            "They cannot be used in server-side rendering",
            "They are not supported by most modern browsers",
            "They make it difficult to manage style conflicts between components",
            "They require a special syntax in JSX to work"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 43,
        "question": "Why might you store UI state in the URL of a React application?",
        "options": [
            "To reduce the size of component files",
            "To make the application look cleaner",
            "To enable users to share, bookmark, and revisit specific states of the UI",
            "To prevent re-rendering of components"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 44,
        "question": "Which of the following is an example of storing state in the URL?",
        "options": [
            "Setting a ?search=react query in the URL",
            "Saving selected theme in localStorage",
            "Using useState to manage input value",
            "Passing props to a child component"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 45,
        "question": "which hook is commonly used to access query string parameters from the URL when using React Router?",
        "options": [
            "useState",
            "useEffect",
            "useSearchParams",
            "useMemo"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 46,
        "question": "Which approach would help preserve UI state when a user refreshes the page?",
        "options": [
            "Storing the state in a local variable",
            "Using useState without any persistence",
            "Using React context only",
            "Storing the state in the URL as query parameters"
        ],
        "correctOption": 0,
        "points": 10
    },

    {
        "id": 47,
        "question": "Which React hook is used to prevent unnecessary re-renders of child components?",
        "options": [
            "useEffect",
            "useMemo",
            "useCallback",
            "useState"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 48,
        "question": "What does React.memo() do?",
        "options": [
            "Memoizes the result of expensive calculations",
            "Prevents a component from re-rendering if props haven't changed",
            "Stores component state in memory",
            "Creates a new component instance"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 49,
        "question": "When should you use useMemo?",
        "options": [
            "Only for expensive calculations or complex object creations",
            "To replace all useState hooks",
            "For simple string concatenations",
            "For every variable in your component",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 50,
        "question": "Which technique helps avoid prop drilling in React?",
        "options": [
            "Using more useState hooks",
            "Creating more components",
            "Using React Context API",
            "Adding more props to components"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 51,
        "question": "What is the main difference between useCallback and useMemo?",
        "options": [
            "useCallback memoizes functions, useMemo memoizes values",
            "useCallback is faster than useMemo",
            "useMemo is for state, useCallback is for effects",
            "They are exactly the same"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 52,
        "question": "Which approach can cause performance issues in React?",
        "options": [
            "Using keys in list items",
            "Creating objects or functions inside render methods",
            "Using React.memo appropriately",
            "Splitting components into smaller pieces"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 53,
        "question": "What is the purpose of the 'key' prop in React lists?",
        "options": [
            "To add CSS styling",
            "To help React identify which items have changed",
            "To make components look better",
            "To pass data between components"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 54,
        "question": "Which hook would you use to optimize expensive calculations?",
        "options": [
            "useEffect",
            "useState",
            "useReducer",
            "useMemo",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 55,
        "question": "How can you prevent a component from re-rendering when its parent re-renders?",
        "options": [
            "Wrap it with React.memo",
            "Use useEffect with empty dependency array",
            "Use useState instead of props",
            "Add more props to the component"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 56,
        "question": "What happens when you don't provide a dependency array to useEffect?",
        "options": [
            "The effect runs only once",
            "The effect never runs",
            "The effect runs on every render",
            "React throws an error"
        ],
        "correctOption": 2,
        "points": 10
    },

    {
        "id": 57,
        "question": "What is the primary benefit of using React.lazy() with Suspense?",
        "options": [
            "It enables code splitting and reduces initial bundle size",
            "It makes components render faster",
            "It prevents memory leaks",
            "It improves SEO performance"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 58,
        "question": "Which scenario would cause React.memo to be ineffective?",
        "options": [
            "When component receives the same props",
            "When component receives new object references as props on every render",
            "When component has no props",
            "When component uses useState internally"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 59,
        "question": "What happens when useMemo's dependency array contains a function that's recreated on every render?",
        "options": [
            "useMemo works perfectly",
            "React throws an error",
            "The memoized value is recalculated on every render, defeating optimization",
            "The function gets automatically memoized"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 60,
        "question": "Which technique helps prevent unnecessary Context re-renders?",
        "options": [
            "Using multiple Context providers",
            "Adding more consumers",
            "Using useEffect in Context",
            "Splitting Context into multiple contexts for different data"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 61,
        "question": "In React DevTools Profiler, what does the 'Committed' phase represent?",
        "options": [
            "Time spent actually applying changes to the DOM",
            "Time spent calculating what changes are needed",
            "Time spent in useEffect",
            "Total component lifecycle time"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 62,
        "question": "Why might using useCallback everywhere be counterproductive?",
        "options": [
            "It always improves performance",
            "The overhead of memoization can exceed the benefits for simple functions",
            "It causes memory leaks",
            "It only works with class components"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 63,
        "question": "What is the most effective way to optimize a large list rendering in React?",
        "options": [
            "Using React.memo on each list item",
            "Using useCallback for all functions",
            "Implementing virtualization (windowing)",
            "Adding more useEffect hooks"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 64,
        "question": "Which hook should you use to persist expensive computed values between renders?",
        "options": [
            "useState",
            "useEffect",
            "useRef",
            "useMemo"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 65,
        "question": "What is a potential issue with this code pattern?\n\nconst MyComponent = () => {\n  const [items, setItems] = useState([]);\n  const filterItems = items.filter(item => item.active);\n  return <List items={filterItems} />;\n}",
        "options": [
            "The filter operation runs on every render creating new array reference",
            "It's perfectly optimized",
            "useState is used incorrectly",
            "List component will never update"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 66,
        "question": "When using React.StrictMode, why do some effects run twice in development?",
        "options": [
            "It's a bug in React",
            "To help detect side effects and ensure effects are properly cleaned up",
            "To make the app run faster",
            "To simulate production environment"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 67,
        "question": "What does 'optimization' primarily focus on in React applications?",
        "options": [
            "Writing shorter code and using fewer files",
            "Using the latest React features only",
            "Reducing unnecessary re-renders, improving bundle size, and enhancing user experience",
            "Converting all components to class components"
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 68,
        "question": "What is the primary benefit of using React.lazy() with Suspense?",
        "options": [
            "It makes components render faster",
            "It prevents memory leaks",
            "It improves SEO performance",
            "It enables code splitting and reduces initial bundle size",
        ],
        "correctOption":3,
        "points": 10
    },
    {
        "id": 69,
        "question": "Which scenario would cause React.memo to be ineffective?",
        "options": [
            "When component receives the same props",
            "When component has no props",
            "When component receives new object references as props on every render",
            "When component uses useState internally"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 70,
        "question": "What happens when useMemo's dependency array contains a function that's recreated on every render?",
        "options": [
            "useMemo works perfectly",
            "React throws an error",
            "The memoized value is recalculated on every render, defeating optimization",
            "The function gets automatically memoized"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 71,
        "question": "Which technique helps prevent unnecessary Context re-renders?",
        "options": [
            "Using multiple Context providers",
            "Adding more consumers",
            "Using useEffect in Context",
            "Splitting Context into multiple contexts for different data"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 72,
        "question": "In React DevTools Profiler, what does the 'Committed' phase represent?",
        "options": [
            "Time spent actually applying changes to the DOM",
            "Time spent calculating what changes are needed",
            "Time spent in useEffect",
            "Total component lifecycle time"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 73,
        "question": "Why might using useCallback everywhere be counterproductive?",
        "options": [
            "It always improves performance",
            "The overhead of memoization can exceed the benefits for simple functions",
            "It causes memory leaks",
            "It only works with class components"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 74,
        "question": "What is the most effective way to optimize a large list rendering in React?",
        "options": [
            "Using React.memo on each list item",
            "Using useCallback for all functions",
            "Implementing virtualization (windowing)",
            "Adding more useEffect hooks"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 75,
        "question": "Which hook should you use to persist expensive computed values between renders?",
        "options": [
            "useRef",
            "useState",
            "useEffect",
            "useMemo"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 76,
        "question": "What is a potential issue with this code pattern?" +
            "const MyComponent = () => {  const [items, setItems] = useState([]);" +
            " const filterItems = items.filter(item => item.active);" +
            "  return <List items={filterItems} />;}",
        "options": [
            "The filter operation runs on every render creating new array reference",
            "It's perfectly optimized",
            "useState is used incorrectly",
            "List component will never update"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 77,
        "question": "When using React.StrictMode, why do some effects run twice in development?",
        "options": [
            "It's a bug in React",
            "To help detect side effects and ensure effects are properly cleaned up",
            "To make the app run faster",
            "To simulate production environment"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 78,
        "question": "What are the three main areas of React performance optimization?",
        "options": [
            "Use more hooks, add more components, write longer functions",
            "Focus only on CSS optimization, database queries, and server responses",
            "Increase component nesting, add more props, use class components",
            "Prevent wasted renders, improve app speed, reduce bundle size",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 79,
        "question": "Which technique directly addresses 'preventing wasted renders'?",
        "options": [
            "Code splitting with React.lazy",
            "Compressing images and assets",
            "Using React.memo to skip re-renders when props haven't changed",
            "Minifying JavaScript bundle"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 80,
        "question": "How does React.lazy() help with 'reducing bundle size'?",
        "options": [
            "It prevents components from re-rendering",
            "It compresses the component code",
            "It loads components only when they're needed (code splitting)",
            "It removes unused CSS automatically"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 81,
        "question": "Which approach best represents 'improving app speed' through DOM optimization?",
        "options": [
            "Using inline styles for all components",
            "Implementing virtual scrolling for large lists to minimize DOM nodes",
            "Adding more event listeners",
            "Creating more nested div elements"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 82,
        "question": "What is the performance impact when this pattern is used incorrectly?" +
            "const Parent = () => {" +
            "  const [count, setCount] = useState(0);" +
            "  const expensiveValue = heavyCalculation(count);" +
            "  return <Child value={expensiveValue} />;}",
        "options": [
            "It only affects bundle size",
            "It causes wasted renders in Child component",
            "It causes expensive recalculation on every render (app speed issue)",
            "It has no performance impact"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 83,
        "question": "Which combination of techniques addresses all three optimization areas simultaneously?",
        "options": [
            "React.memo + React.lazy + useMemo",
            "useCallback + React.Suspense + React.memo",
            "useMemo + useEffect + useState",
            "React.lazy + useCallback + React.Fragment"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 84,
        "question": "What are 'wasted renders' in React?",
        "options": [
            "Renders that take more than 16ms to complete",
            "Initial renders when components first mount",
            "Renders that happen when component props or state actually changed",
            "Re-renders that occur even though the component output remains exactly the same",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 85,
        "question": "When exactly does a React component instance get re-rendered?",
        "options": [
            "Only when its own state changes",
            "When its state changes, context value changes, or parent component re-renders",
            "Only when props are different from previous render",
            "Only when useEffect dependencies change"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 86,
        "question": "What happens when a Context value changes?",
        "options": [
            "Only the Provider component re-renders",
            "All consumer components re-render, regardless of which part of context they use",
            "Only components that use the changed part of context re-render",
            "No components re-render automatically"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 87,
        "question": "Which pattern causes unnecessary Context re-renders?" +
            "nconst MyProvider = ({ children }) => {" +
            "const [user, setUser] = useState(null);" +
            " const [theme, setTheme] = useState('light');" +
            " const value = { user, setUser, theme, setTheme };" +
            "return <MyContext.Provider value={value}>{children}</MyContext.Provider>;}",
        "options": [
            "Using multiple state variables",
            "Creating new object reference for value on every render",
            "Having both user and theme in same context",
            "Using useState instead of useReducer"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 88,
        "question": "How can you prevent Context consumers from re-rendering when only part of context changes?",
        "options": [
            "Use React.memo on all consumer components",
            "Use useCallback for all context functions",
            "Split context into multiple contexts for different data",
            "Store everything in component state instead"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 89,
        "question": "What is the performance impact of this Context usage?" +
            "const ExpensiveComponent = () => {" +
            " const { theme } = useContext(AppContext); "+
            "return <div className={theme}>Content</div>;}",
        "options": [
            "No performance issues",
            "Component re-renders when user or settings change, even though it only uses theme",
            "Only re-renders when theme changes",
            "Never re-renders due to context"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 90,
        "question": "Which solution optimizes the Context provider to prevent object recreation?",
        "options": [
            "const value = useMemo(() => ({ user, setUser }), [user]);",
            "const value = { user, setUser };",
            "const value = useCallback(() => ({ user, setUser }), []);",
            "const value = useState({ user, setUser });"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 91,
        "question": "Do props changes directly cause component re-renders?",
        "options": [
            "Yes, React watches all props for changes",
            "No,Only if props are objects or arrays",
            "Yes, but only for primitive props",
            "No, props changes are a result of parent re-rendering, not the cause",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 92,
        "question": "What does 'render' actually mean in React?",
        "options": [
            "Updating the actual DOM elements",
            "Painting pixels on the screen",
            "Running the component function to create Virtual DOM representation",
            "Executing useEffect hooks"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 93,
        "question": "Does a React 'render' mean the DOM actually gets updated?",
        "options": [
            "Yes, every render updates the DOM",
            "No, render creates Virtual DOM, DOM updates only if changes are found during reconciliation",
            "Only for class components",
            "Only when state changes, not props"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 94,
        "question": "What exactly is a 'wasted render'?",
        "options": [
            "A render that produces the same Virtual DOM output as before",
            "A render that takes longer than 16ms",
            "A render that updates the DOM unnecessarily",
            "Any render triggered by parent component"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 95,
        "question": "When do wasted renders become a performance problem?",
        "options": [
            "They are always a problem and should be eliminated",
            "Only when they cause DOM updates",
            "Never, React optimizes them automatically",
            "When they happen frequently in components with expensive calculations or many children",
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 96,
        "question": "Why is passing a heavy component as children usually more performant than rendering it directly inside a stateful parent?",
        "options": [
            "Because children are cached forever and never re-render",
            "Because React treats children as a stable prop and reuses it if unchanged",
            "Because children are executed in a separate rendering thread",
            "Because children skip the virtual DOM completely",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 97,
        "question": "What happens if a heavy component is rendered directly inside a parent component with changing state?",
        "options": [
            "It will re-render every time the parent re-renders",
            "It will render only once and never again",
            "It will re-render only if the parent state matches its props",
            "It will re-render only when React is in development mode",
        ],
        "correctOption": 0,
        "points": 30
    },{
        "id": 98,
        "question": "How does React decide whether to re-render children passed as props?",
        "options": [
            "React always re-renders children on every parent state change",
            "React uses memoization automatically for all children",
            "React only re-renders children if the reference to them changes",
            "React ignores children props during reconciliation",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 99,
        "question": "What is the best practice when dealing with expensive child components inside a parent with frequent state updates?",
        "options": [
            "Wrap the child with React.memo or pass it as children/prop",
            "Recreate the child on every render to keep it fresh",
            "Avoid using state in the parent",
            "Move the expensive child outside of React’s tree",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 100,
        "question": "Why does using children not automatically guarantee better performance?",
        "options": [
            "Because children are always re-rendered regardless of props",
            "Because React does not support children optimization",
            "Because children bypass the virtual DOM diffing process",
            "Because performance depends on whether children content changes or not",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 101,
        "question": "What is the purpose of memoization in React?",
        "options": [
            "To reuse previous results of a component or calculation i",
            "To permanently store components in memory to prevent all future renders",
            "To reuse previous results of a component or calculation if inputs have not changed",
            "To automatically parallelize all component renders",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 102,
        "question": "Memoizing a component in React really only affects...",
        "options": [
            "Its internal state updates",
            "The way it handles DOM updates",
            "The scheduling of React rendering in concurrent mode",
            "How React compares and reuses the component based on its props",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 103,
        "question": "When will a memoized component re-render?",
        "options": [
            "Only when its props change",
            "Whenever its parent re-renders, regardless of props",
            "Only when React’s virtual DOM decides to recycle it",
            "Never, once memoized it cannot re-render"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 104,
        "question": "When is it better to use React.memo?",
        "options": [
            "Only for components that manage local state",
            "Only when the component has no children",
            "For components with expensive renders that receive stable props",
            "For all components in the application, to maximize performance",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 105,
        "question": "When does React.memo have no effect?",
        "options": [
            "When the component always receives new props or object references",
            "When the component has children",
            "When the component is wrapped in a parent with state",
            "When the component is a function instead of a class"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 106,
        "question": "What is the main difference between React.memo and useMemo?",
        "options": [
            "React.memo is for class components, while useMemo is for function components",
            "React.memo memoizes entire components, while useMemo memoizes values inside components",
            "React.memo is faster than useMemo in all cases",
            "React.memo automatically memoizes all props and state deeply",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 107,
        "question": "Why might React.memo not prevent re-renders when using objects or arrays as props?",
        "options": [
            "Because React.memo doesn’t support objects and arrays at all",
            "Because React.memo compares props by converting them to strings",
            "Because React.memo requires custom hooks to compare complex props",
            "Because React.memo only does a shallow comparison of props",
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 108,
        "question": "Which situation is a bad use case for React.memo?",
        "options": [
            "Wrapping small, frequently updated components that render quickly",
            "Optimizing a heavy component that rarely changes its props",
            "Preventing expensive recalculations for components with stable inputs",
            "Reducing re-renders in components with complex child trees",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 109,
        "question": "How can you optimize memoization for props that are objects or arrays?",
        "options": [
            "By converting props into strings before passing them",
            "By using useMemo or useCallback to stabilize the reference of props",
            "By avoiding objects and arrays as props altogether",
            "By wrapping objects in React.memo directly",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 110,
        "question": "why does using React.memo not improve performance when objects are passed as props?",
        "options": [
            "Because React.memo ignores object props by default",
            "Because objects are compared by reference, so a new object is seen as changed every render",
            "Because React.memo only works with primitive props like strings and numbers",
            "Because React.memo automatically clones objects internally, causing re-renders",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 111,
        "question": "In React, why does using React.memo not improve performance when functions are passed as props?",
        "options": [
            "Because React.memo ignores function props during comparison",
            "Because React.memo only optimizes state variables, not functions",
            "Because React.memo automatically inlines functions, which forces re-renders",
            "Because functions are reference types and get recreated on every render unless stabilized",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 112,
        "question": "What is the main difference between useMemo and useCallback in React?",
        "options": [
            "useMemo prevents re-renders, while useCallback prevents re-execution of effects",
            "useMemo is used only with primitive types, while useCallback is used only with objects",
            "useMemo memoizes values, while useCallback memoizes functions",
            "useMemo caches props, while useCallback caches state",
        ],
        "correctOption":2,
        "points": 30
    },
    {
        "id": 113,
        "question": "What is the key difference between React.memo and the hooks useMemo/useCallback?",
        "options": [
            "React.memo memoizes components, while useMemo/useCallback memoize values or functions inside components",
            "React.memo caches state, while useMemo caches props and useCallback caches context",
            "React.memo prevents re-renders completely, while useMemo/useCallback only prevent re-execution of useEffect",
            "React.memo works only with primitive props, while useMemo/useCallback work only with objects and arrays",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 114,
        "question": "What is the role of the dependency array in useMemo?",
        "options": [
            "It prevents the function inside useMemo from ever running again",
            "It specifies which props should be passed to React.memo",
            "It ensures the memoized value is always recalculated on every render",
            "It determines when the memoized value should be recalculated",
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 115,
        "question": "What similarity exists between the dependency array in useMemo and React.memo?",
        "options": [
            "Both automatically stabilize function references without developer effort",
            "Both control when a value or component should be re-computed or re-rendered based on changes",
            "Both always prevent re-renders completely, regardless of changes",
            "Both only work with primitive values and ignore objects or arrays",
        ],
        "correctOption":1,
        "points": 20
    },
    {
        "id": 116,
        "question": "When using useMemo, what happens if the dependency array does not change between renders?",
        "options": [
            "A new value is always recalculated regardless of dependencies",
            "The previously memoized (cached) value is returned instead of recalculating",
            "React automatically removes the memoized value to save memory",
            "The component will never re-render again",
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 117,
        "question": "Which React hook is primarily used for memoizing props to prevent unnecessary re-renders?",
        "options": [
            "useState",
            "useMemo",
            "useCallback",
            "React.memo",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 118,
        "question": "Which React hook is used to avoid expensive recalculations of a value inside a component?",
        "options": [
            "useCallback",
            "useMemo",
            "useEffect",
            "React.memo",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 119,
        "question": "Which React hook is useful for memoizing values that are used in the dependency array of another hook?",
        "options": [
            "useMemo",
            "useState",
            "useRef",
            "useCallback",
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 120,
        "question": "When you want to prevent a child component from re-rendering due to unchanged props, which of the following is the most appropriate?",
        "options": [
            "useMemo inside the parent component to memoize props",
            "React.memo wrapping the child component",
            "useCallback to memoize the child component function",
            "useEffect to control prop updates",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 121,
        "question": "To avoid expensive recalculations of a computed value that depends on multiple props or state variables, which hook is best suited?",
        "options": [
            "useMemo with a proper dependency array",
            "useCallback wrapping the computation",
            "React.memo wrapping the parent component",
            "useEffect to store the computed value in state",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 122,
        "question": "When a value is used in the dependency array of another hook, but is expensive to recompute, which hook should you use to stabilize it?",
        "options": [
            "useCallback for stabilizing the value",
            "React.memo wrapping the component using the value",
            "useRef to persist the value across renders",
            "useMemo to memoize the value",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 123,
        "question": "In a React component wrapped with React.memo, why might passing handleClick as an arrow function in JSX prevent memoization from working effectively?",
        "options": [
            "Because arrow functions cannot access props or state, so memoization fails",
            "Because React.memo automatically converts arrow functions to function references",
            "Because arrow functions create a new function on every render, causing props to appear changed even if the logic is the same",
            "Because function references inside useCallback are recreated every render, similar to arrow functions",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 124,
        "question": "When are the callbacks in useMemo and useEffect executed during the component lifecycle?",
        "options": [
            "useMemo runs after render commit, while useEffect runs during render",
            "useMemo runs during rendering to provide a value, while useEffect runs after rendering to handle side effects",
            "Both run during rendering before committing to the DOM",
            "Both run after rendering, asynchronously",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 125,
        "question": "What is the primary purpose of useMemo compared to useEffect?",
        "options": [
            "Both are used for memoizing values inside a component",
            "Both are used for managing side effects after rendering",
            "useMemo handles side effects, while useEffect memoizes values",
            "useMemo memoizes values, while useEffect handles side effects",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 126,
        "question": "What do useMemo and useEffect each return?",
        "options": [
            "useMemo returns functions only, while useEffect returns computed values",
            "Neither hook returns any value",
            "useMemo returns a memoized value, while useEffect returns nothing (optionally a cleanup function)",
            "Both return cleanup functions",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 127,
        "question": "Why is it invalid to call a Hook using call/apply or indirectly inside another function?",
        "options": [
            "Because Hooks must be invoked directly so React can track them properly",
            "Because Hooks cannot be reused across functions",
            "Because call/apply breaks the scope of React state",
            "Because indirect calls are only allowed in class components",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 128,
        "question": "Why is it incorrect to call a Hook (like useState) inside a conditional statement in a component?",
        "options": [
            "Because Hooks automatically break if used inside loops or conditions",
            "Because React cannot guarantee consistent order of Hooks across renders",
            "Because Hooks can only be used once in each component",
            "Because conditionals prevent Hooks from receiving props",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 129,
        "question": "Where are Hooks allowed to be called?",
        "options": [
            "Inside React function components or custom Hooks",
            "Inside class components only",
            "Inside any regular JavaScript function",
            "Inside event handlers only",
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 130,
        "question": "What happens if a dependency used inside useEffect is not included in the dependency array?",
        "options": [
            "The effect may use stale values, leading to unexpected behavior",
            "React automatically adds the missing dependency",
            "React throws a runtime error immediately",
            "The effect will run on every render regardless",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 131,
        "question": "Why must Hooks always be called in the same order on every render?",
        "options": [
            "Because React only supports one Hook per component",
            "Because changing the order will reset state but still work",
            "Because Hooks automatically reorder themselves internally",
            "Because React identifies each Hook call by its position in the render order",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 132,
        "question": "Why is useMemo helpful when passing objects as props to memoized components?",
        "options": [
            "Because useMemo prevents the object from being garbage collected",
            "Because useMemo automatically deep compares objects before passing them as props",
            "Because useMemo ensures the same object reference is reused between renders if dependencies do not change",
            "Because useMemo converts objects into primitive values for React.memo",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 133,
        "question": "What is the main difference between useCallback and useMemo?",
        "options": [
            "useCallback memoizes primitive values, while useMemo memoizes objects and arrays",
            "useCallback is used for side effects, while useMemo is used for rendering",
            "useCallback prevents all re-renders, while useMemo only prevents re-renders of children",
            "useCallback memoizes a function itself, while useMemo memoizes the result of executing a function",
        ],
        "correctOption":3,
        "points": 20
    },
    {
        "id": 134,
        "question": "Why does React guarantee that setter functions from useState (like setCount) always have a stable identity?",
        "options": [
            "Because React automatically memoizes all functions declared inside components",
            "Because setter functions are recreated on every render but hidden by React",
            "To prevent unnecessary re-renders by keeping setter references stable across renders",
            "To ensure that state variables are always primitive values",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 135,
        "question": "What does it mean that the dispatch function from useReducer has a stable identity?",
        "options": [
            "The same function reference is reused on every render and does not change",
            "It always produces the same state value for the same action",
            "It is recreated on every render but behaves the same way",
            "It can only handle primitive action types",
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 136,
        "question": "Why is it safe to omit useState setters or useReducer dispatch from dependency arrays in useEffect, useCallback, or useMemo?",
        "options": [
            "Because React automatically adds them to the dependency array at runtime",
            "Because React guarantees their identity is stable across renders, so they never change",
            "Because these functions are re-created every render but compared by value",
            "Because dependency arrays in Hooks only track primitive values by default",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 137,
        "question": "Why is it incorrect to omit a state variable used inside useEffect from its dependency array?",
        "options": [
            "Because React automatically re-adds the variable internally",
            "Because dependency arrays only track setter functions, not values",
            "Because the effect would run with stale values, not reflecting the latest state",
            "Because state variables are guaranteed to be stable like setters",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 138,
        "question": "If a prop is used inside a useCallback, why must it be included in the dependency array?",
        "options": [
            "Because React automatically freezes props unless included",
            "Because props are treated like setter functions with stable identity",
            "Because useCallback only works when props are primitive values",
            "Because props can change between renders, and omitting them may cause stale closures",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 139,
        "question": "Why should a non-memoized function defined inside a component be included in the dependency array if used in useEffect?",
        "options": [
            "Because a new function is created on each render, and omitting it causes effects to run with outdated references",
            "Because React automatically memoizes functions if not included",
            "Because functions inside components are stable like dispatch",
            "Because dependency arrays only matter for state setters and props",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 140,
        "question": "Why can a constantly changing Context value lead to performance issues in React apps?",
        "options": [
            "Because React ignores context updates for performance reasons",
            "Because all consumers re-render on every value change, even if they don't need the updated part",
            "Because Context automatically freezes values causing lag",
            "Because useMemo cannot be used with Context values"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 141,
        "question": "Which technique helps optimize a React Context to prevent unnecessary re-renders of consumers?",
        "options": [
            "Wrap the context value in useMemo so it only changes when actual data changes",
            "Always pass new object literals directly as context value",
            "Use class components instead of function components",
            "Avoid using React.memo on consumer components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 142,
        "question": "What is an effective strategy when a Context has many consumers to avoid wasted renders?",
        "options": [
            "Convert all consumers to class components",
            "Always update the entire context on any state change",
            "Use a single large context for all app state to simplify updates",
            "Split the context into multiple smaller contexts targeting specific state slices",
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 143,
        "question": "How can passing children into a dedicated component inside a Context help optimize performance?",
        "options": [
            "It makes the entire subtree always re-render to stay consistent",
            "It automatically freezes context values to prevent re-renders",
            "It allows only the necessary part of the tree to re-render when the context value changes",
            "It converts all consumers to use useMemo internally",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 144,
        "question": "Why is it recommended to wrap a Context value in useMemo when it contains objects or arrays?",
        "options": [
            "Because it guarantees that all consumers will re-render on every render",
            "Because it prevents unnecessary re-renders by keeping the reference stable between renders",
            "Because useMemo automatically freezes the values to make them immutable",
            "Because useMemo converts objects to primitive types for React.memo"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 145,
        "question": "How does wrapping a Context consumer component with React.memo help with performance?",
        "options": [
            "It prevents the consumer from re-rendering unless its props change, even if the Context value changes",
            "It automatically memoizes all context values used inside the component",
            "It ensures that all children of the component are never updated",
            "It merges multiple context values into a single reference"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 146,
        "question": "What is the main advantage of combining the children pattern with React.memo in Context providers?",
        "options": [
            "It allows all children to automatically receive new props without re-rendering",
            "Only the parts of the subtree that depend on the context value re-render, reducing wasted renders",
            "It forces the entire subtree to render at least once on every change",
            "It converts context values into static primitives for performance"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 147,
        "question": "Why does passing an inline object as the value of a Context.Provider usually trigger unnecessary re-renders?",
        "options": [
            "Because React deeply compares object contents and finds changes on every render",
            "Because a new object reference is created on each render, making React treat it as a different value",
            "Because Context always re-renders its consumers no matter what the value is",
            "Because objects are automatically converted into primitives when used in Context"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 148,
        "question": "What is the recommended way to avoid unnecessary re-renders when passing an object to a Context.Provider?",
        "options": [
            "Wrap the Context.Provider component itself with React.memo",
            "Create a new object literal inside the provider each time to ensure fresh data",
            "Wrap the object in useMemo so the same reference is reused unless dependencies change",
            "Convert the object into a serialized string before passing it to the provider"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 149,
        "question": "How does wrapping a Context consumer with React.memo help reduce wasted re-renders?",
        "options": [
            "It re-renders only if its props change, even when the Context provider passes the same value",
            "It forces all consumers of the same Context to re-render together for consistency",
            "It automatically memoizes the Context value so providers do not create new objects",
            "It makes React use shallow comparison for Context updates instead of full re-renders"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 151,
        "question": "Which combination of techniques is most effective for reducing wasted renders in Context-heavy applications?",
        "options": [
            "Using useMemo for provider values, React.memo for consumers, and separating frequently changing values into different Contexts",
            "Using useMemo for provider values, memoizing consumers partially, and passing state as separate Contexts",
            "Using useMemo for provider values, React.memo for consumers, and the children pattern to isolate updates",
            "Wrapping provider values in useCallback, using React.memo for consumers, and splitting large Contexts",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 152,
        "question": "What does 'bundle size' represent in a React application?",
        "options": [
            "The number of React components in the project",
            "The total size of all JavaScript and CSS files after build",
            "The memory consumed by React in the browser",
            "The amount of network requests per page",
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 153,
        "question": "The bigger the bundle, the ...?",
        "options": [
            "faster the page loads",
            "smaller the network usage",
            "better the SEO ranking",
            "slower the application becomes",
        ],
        "correctOption":3,
        "points": 10
    },
    {
        "id": 154,
        "question": "What is the main goal of code splitting in React apps?",
        "options": [
            "To combine all files into a single bundle",
            "To rewrite components into smaller functions",
            "To split code into smaller chunks that load on demand",
            "To reduce the number of React hooks in code",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 155,
        "question": "Which React feature is commonly used for lazy loading components?",
        "options": [
            "React.StrictMode",
            "React.Suspense with React.lazy",
            "useMemo with useCallback",
            "React.memo with props",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 156,
        "question": "When splitting bundles by page router in frameworks like Next.js, what happens?",
        "options": [
            "All pages are still combined into one bundle",
            "Only components with useEffect hooks are separated",
            "Pages are split but still downloaded together at first load",
            "Each page is delivered as a separate bundle, loaded only when visited",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 157,
        "question": "What is the role of React.Suspense when using lazy loaded components?",
        "options": [
            "It delays rendering and shows a fallback to optimize performance",
            "It delays rendering and shows a fallback until the component is loaded",
            "It prevents components from re-rendering unnecessarily",
            "It creates a separate bundle for each component automatically",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 158,
        question: "What is the main purpose of tree-shaking in modern bundlers?",
        options: [
            "To split JavaScript into multiple chunks",
            "To remove unused code from the bundle",
            "To improve CSS loading",
            "To lazy-load images"
        ],
        correctOption: 1,
        points: 10
    },
    {
        "id": 159,
        question: "Which React feature enables code splitting by loading components only when needed?",
        options: [
            "React.memo",
            "useCallback",
            "React.lazy with Suspense",
            "StrictMode"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 160,
        question: "How does using dynamic import() improve performance?",
        options: [
            "It loads modules only when required",
            "It always reduces bundle size",
            "It automatically compresses JavaScript",
            "It preloads all modules at startup"
        ],
        correctOption: 0,
        points: 10
    },
    {
        "id": 161,
        question: "Which official Next.js plugin helps analyze JavaScript bundle size?",
        options: [
            "webpack-analyze",
            "eslint-plugin-next",
            "next-optimizer",
            "@next/bundle-analyzer",
        ],
        correctOption: 3,
        points: 10
    },
    {
        "id": 162,
        question: "Why is the Next.js <Image /> component recommended instead of plain <img>?",
        options: [
            "It increases resolution of all images",
            "It converts all formats to WebP",
            "It automatically lazy-loads and optimizes images",
            "It avoids caching on the browser"
        ],
        correctOption: 3,
        points: 10
    },
    {
        "id": 163,
        question: "What is the role of caching in bundle optimization?",
        options: [
            "It reduces React component re-renders",
            "It inlines critical CSS automatically",
            "It prevents downloading unchanged bundles again",
            "It forces all modules to preload"
        ],
        correctOption: 2,
        points: 20
    },
    {
        "id": 164,
        question: "What is the main downside of importing large third-party libraries directly into your project?",
        options: [
            "They may disable React hooks",
            "They increase the initial JavaScript load time",
            "They prevent tree-shaking from working",
            "They block Suspense fallback"
        ],
        correctOption: 1,
        points: 20
    },
    {
        "id": 165,
        question: "If you import a library but never use it, what happens in a production build with tree-shaking enabled?",
        options: [
            "The library code will not be included in the final bundle",
            "It will always remain in the bundle",
            "It throws a runtime error at execution",
            "It automatically preloads the library"
        ],
        correctOption: 0,
        points: 30
    },
    {
        "id": 166,
        question: "How can unused CSS affect bundle performance?",
        options: [
            "It increases JavaScript execution time",
            "It disables CSS modules",
            "It bloats the bundle size unnecessarily",
            "It forces inline styles only"
        ],
        correctOption: 3,
        points: 20
    },
    {
        "id": 167,
        question: "In Next.js, what is the difference between preloading and prefetching?",
        options: [
            "Preloading happens during idle time, prefetching happens immediately",
            "Preloading fetches immediately, prefetching waits for idle time",
            "Both are identical in behavior",
            "Both disable cache headers"
        ],
        correctOption: 1,
        points:30
    },
    {
        id: 168,
        question: "What is the main purpose of using `preload` in web performance optimization?",
        options: [
            "To download resources only when the user clicks a link",
            "To download critical resources as early as possible",
            "To reduce the size of JavaScript bundles",
            "To block unused CSS from being loaded"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 169,
        question: "How does `prefetch` improve the user experience in Next.js?",
        options: [
            "By executing JavaScript faster",
            "By caching all images automatically",
            "By loading future page resources during idle time",
            "By reducing React re-renders"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 170,
        question: "Which of the following is the biggest risk of using `preload` incorrectly?",
        options: [
            "Increasing bundle splitting",
            "Blocking lazy-loading of components",
            "Overloading the network with too many high-priority requests",
            "Preventing prefetch from working"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 171,
        question: "In Next.js, why does `<Link>` with `prefetch={true}` help navigation?",
        options: [
            "It reduces React rendering time",
            "It preloads the target page’s code during idle time",
            "It disables hydration errors",
            "It loads CSS inline for the target page"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 172,
        question: "Which strategy is best for optimizing the initial load time of a page?",
        options: [
            "Disable caching",
            "Prefetch all images",
            "Prefetch non-critical scripts",
            "Preload fonts and above-the-fold CSS",
        ],
        correctOption:3,
        points: 20
    },
    {
        id: 173,
        question: "What is a reactive value in React?",
        options: [
            "A value that never changes during component lifecycle",
            "A value that automatically triggers UI updates when changed",
            "A constant value stored outside the component",
            "A function that only runs once during rendering"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 174,
        question: "Which hook in React is primarily used to create reactive values?",
        options: [
            "useState",
            "useReducer",
            "useEffect",
            "useMemo"
        ],
        correctOption: 3,
        points: 10
    },
    {
        id: 175,
        question: "Why are normal variables in React components NOT reactive?",
        options: [
            "Because React ignores primitive values",
            "Because JavaScript does not support functions",
            "Because React does not track changes to plain variables",
            "Because React only watches context",
        ],
        correctOption: 2,
        points: 20
    },
    {        id: 176,
        question: "Which of the following is TRUE about reactive values?",
        options: [
            "They automatically trigger re-renders or re-computations",
            "They require manual DOM updates every time they change",
            "They only work with numbers and strings",
            "They cannot be used inside functional components"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 177,
        question: "why must all reactive values be included in a dependency array of useEffect, useCallback, or useMemo?",
        options: [
            "To prevent stale values and ensure the effect or memoized function sees the latest value",
            "To reduce bundle size",
            "To avoid re-rendering the component",
            "To disable React hooks linting"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 178,
        question: "Which of the following is considered a reactive value in React?",
        options: [
            "Local variable inside render",
            "A literal number inside useEffect",
            "A prop passed from parent component",
            "Module-level constant",
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 179,
        question: "Which of these values does NOT need to be in the dependency array?",
        options: [
            "State value from useState",
            "Function returned by useCallback",
            "Setter function from useState",
            "Prop passed from parent"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 180,
        question: "What can happen if a reactive value is NOT included in a dependency array?",
        options: [
            "React will throw a runtime error",
            "Component will not mount",
            "Nothing will happen, it’s safe to omit",
            "Effect or memoized function may use stale values",
        ],
        correctOption: 3,
        points: 30
    },
    {
        id: 181,
        question: "Which tool helps automatically detect missing dependencies in useEffect?",
        options: [
            "Prettier",
            "React DevTools",
            " ESLint rule",
            "TypeScript compiler"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 182,
        "question": "Why must a context value used inside a useEffect be included in the dependency array?",
        "options": [
            "Because React automatically tracks context changes even if they are not declared in dependencies",
            "Because omitting it would cause the effect to potentially read outdated context values on re-renders, leading to inconsistent behavior",
            "Because useEffect ignores context values unless explicitly listed, making the hook skip execution permanently",
            "Because React internally serializes context values to compare them and needs the explicit declaration to avoid errors",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 183,
        "question": "What is a stale closure in React hooks?",
        "options": [
            "A closure that captures outdated values of state or props, causing logic inside an effect or callback to use old references instead of the latest ones",
            "A closure that is preserved in memory to ensure deterministic state updates across renders regardless of dependency arrays",
            "A closure that is garbage collected by JavaScript after re-rendering, leaving dangling references behind",
            "A closure that is created when multiple effects overlap and share the same dependency values at different times",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 184,
        "question": "Why is it generally discouraged to use objects or arrays directly as dependencies in useEffect or useCallback?",
        "options": [
            "Because objects and arrays are deeply compared by React by default, which is computationally expensive and may freeze the UI under heavy rendering",
            "Because objects and arrays cannot be serialized into dependency arrays and React will throw an error when attempting to resolve them at runtime",
            "Because objects and arrays are compared by reference, causing effects or callbacks to re-run on every render even if their contents did not change",
            "Because objects and arrays cause memory leaks in hooks when stored in dependency arrays due to cyclic references with React’s fiber architecture",
        ],
        "correctOption":2,
        "points": 30
    },
    {
        "id": 185,
        "question": "How can you avoid unnecessary dependencies when a function is causing re-renders?",
        "options": [
            "Declare the function as a global variable so it never updates with component state or props",
            "Wrap the function in React.memo to ensure it never re-creates regardless of its inputs",
            "Move the function into the effect or memoize it with useCallback so its reference remains stable",
            "Only call the function conditionally to avoid including it in the dependency array",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 186,
        "question": "If a function does not reference any reactive values (like state or props), what is the best practice?",
        "options": [
            "Keep it inside the component but wrap it with useEffect to prevent re-creation",
            "Move it outside of the component so it is not re-created on every render",
            "Memoize it with useMemo to ensure it runs only once and remains stable across renders",
            "Convert it into a static method inside a React.memo component for better encapsulation",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 187,
        "question": "Instead of including an entire object as a dependency, what is a better approach?",
        "options": [
            "Include only the specific properties you actually use inside the effect",
            "Use JSON.stringify on the object before passing it as a dependency to ensure value comparison",
            "Clone the object on every render and memoize it with useCallback to stabilize it",
            "Avoid using objects in dependencies by converting them to primitive values at runtime",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 188,
        "question": "What can you do if an object does not work correctly as a dependency?",
        "options": [
            "Wrap the object in React.memo to prevent re-creation inside the dependency array",
            "Place the object inside a state variable so React automatically compares it deeply",
            "Convert the object into a function and call it inside useEffect instead of passing it",
            "Move or memoize the object so its reference stays stable across renders",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 189,
        "question": "If you have multiple related reactive values that must be dependencies, what is often a better pattern?",
        "options": [
            "Store them inside a useRef so React does not re-render when they change",
            "Combine them with useReducer so the effect depends on a single stable state object",
            "Merge them into one object and stringify it in the dependency array for comparison",
            "Wrap them all in useMemo to make the dependency array shorter and easier to manage",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 190,
        "question": "Why is useEffect often described as an 'escape hatch' in React?",
        "options": [
            "Because it allows running side effects only when props or state change, which is not possible with regular rendering logic",
            "Because it is the primary mechanism React provides for writing all business logic in a component, replacing the need for other hooks",
            "Because it ensures components render synchronously with side effects applied immediately after DOM updates",
            "Because it enables bypassing React's reconciliation algorithm and directly mutating the DOM safely",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 191,
        "question": "Why should useEffect be considered a 'last resort' rather than the first tool to reach for?",
        "options": [
            "Because useEffect causes memory leaks by default unless explicitly cleaned up",
            "Because React discourages side effects entirely and recommends only pure rendering logic inside components",
            "Because most effects can be avoided by deriving state, using event handlers, or computing values directly during render",
            "Because useEffect always blocks rendering until the effect has finished executing",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 192,
        "question": "Which of the following is NOT a recommended use case for beginners when working with useEffect?",
        "options": [
            "Synchronizing an external system (like updating the document title) when props or state change",
            "Responding to a user event like button click by updating state directly in the handler instead of using useEffect",
            "Fetching data on component mount using useEffect with an empty dependency array",
            "Subscribing to a global event bus and cleaning up on component unmount",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 193,
        "question": "What is the recommended way to synchronize multiple state variables with one another in React?",
        "options": [
            "Derive one state from the other or combine them in a single reducer, instead of writing an effect that manually updates one when the other changes",
            "Use multiple useEffect hooks so that each state variable updates the other on every render cycle",
            "Store all related states inside a ref object and mutate it directly to ensure they stay in sync without triggering re-renders",
            "Wrap both state variables in a context provider so they automatically update each other whenever one changes",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 194,
        "question": "Which statement best defines the stale closure problem in React?",
        "options": [
            "It happens when a function continues to use an outdated snapshot of state or props",
            "It happens when React prevents a component from re-rendering after state updates",
            "It happens when closures in JavaScript do not work with arrays and objects",
            "It happens when useEffect runs more times than expected due to dependency arrays"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 195,
        "question": "what causes the stale closure problem inside effects or callbacks?",
        "options": [
            "Functions always rebind automatically to the latest state and props",
            "Functions hold onto the snapshot of state and props from when they were created",
            "React intentionally freezes state values after the initial render",
            "Closures in JavaScript only work with primitive values, not objects"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 196,
        "question": "What is the stale closure problem in React?",
        "options": [
            "When a function keeps referencing outdated state or props values",
            "When React automatically freezes state values after the first render",
            "When a function cannot access props because of scoping issues",
            "When React re-renders too often due to dependency arrays"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 197,
        "question": "Which of the following is the best way to prevent the stale closure problem in React?",
        "options": [
            "Always use global variables instead of state",
            "Freeze objects in state to keep them consistent across renders",
            "Add the latest state or props as dependencies in useEffect or useCallback",
            "Avoid using closures in React components",
        ],
        "correctOption": 2,
        "points": 30
    }

];
