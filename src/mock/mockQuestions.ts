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
    }
];
