// data/mockQuestions.ts
import { Question } from "@/type/QuizTypes";

export const mockQuestions: Question[] = [
    {
        id: 1,
        question: "Which JavaScript framework has the largest developer community as of 2024?",
        options: ["Angular", "React", "Svelte", "Vue"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 2,
        question:  "Which company originally created React?",
        options: ["Google", "Apple", "Netflix", "Facebook"],
        correctOption: 3,
        points: 10,
    },
    {
        id: 3,
        question:  "What are the primary building blocks of React applications?",
        options: ["Components", "Blocks", "Elements", "Effects"],
        correctOption: 0,
        points: 10,
    },
    {
        id: 4,
        question:
            "What syntax extension allows you to write HTML-like code in JavaScript?",
        options: ["FBJ", "Babel", "JSX", "ES2015"],
        correctOption: 2,
        points: 10,
    },
    {
        id: 5,
        question:"In React&360;s data flow model, how does data typically move between components?",
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
        question: "What mechanism is used to pass data from parent to child components?",
        options: ["State", "Props", "PropTypes", "Parameters"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 7,
        question: "When should you derive state from existing state variables?",
        options: [
            "When state updates should not trigger re-renders",
            "When state needs to be synchronized with useEffect",
            "When state should be accessible globally",
            "When one state can be calculated from another"
        ],
        correctOption: 3,
        points: 30,
    },
    {
        id: 8,
        question: "What causes a React component to re-render?",
        options: [
            "Running a useEffect hook",
            "Receiving new props",
            "Updating component state",
            "Adding event listeners"
        ],
        correctOption: 2,
        points: 20,
    },
    {
        id: 9,
        question:"In React applications, when should you directly manipulate the DOM?",
        options: [
            "When adding event listeners",
            "When updating component content",
            "When applying dynamic styles",
            "Almost never - React manages the DOM"
        ],
        correctOption: 3,
        points: 20,
    },
    {
        id: 10,
        question: "When should you use a callback function to update state in React?",
        options: [
            "When the update will be computationally expensive",
            "When the new state contains large amounts of data",
            "When you want the update to happen faster",
            "When the new state depends on the previous state"
        ],
        correctOption: 3,
        points: 30,
    },
    {
        id: 11,
        question:  "When is the initializer function passed to useState executed?",
        options: [
            "On every component re-render",
            "Every time state is updated",
            "Only during the initial render",
            "Only the first time state is updated"
        ],
        correctOption: 2,
        points: 30,
    },
    {
        id: 12,
        question:
            "Which hook is primarily used for making API requests when a component mounts?",
        options: ["useState", "useEffect", "useRef", "useReducer"],
        correctOption: 1,
        points: 10,
    },
    {
        id: 13,
        question:  "What should be included in a useEffect dependency array?",
        options: [
            "No dependencies are typically needed",
            "All state variables in the component",
            "All reactive values used inside the effect",
            "Only variables needed for cleanup"
        ],
        correctOption: 2,
        points: 30,
    },
    {
        id: 14,
        question:  "Does a useEffect hook always run on the component's initial render?",
        options: [
            "Yes, regardless of the dependency array",
            "It depends on the dependency array contents",
            "No, it only runs on subsequent renders",
            "It depends on the effect's cleanup function"
        ],
        correctOption: 0,
        points: 30,
    },
    {
        id: 15,
        question: "How often will a useEffect run if no dependency array is provided?",
        options: [
            "Only when the component mounts",
            "Only when the component unmounts",
            "Only on the first re-render",
            "On every render of the component"
        ],
        correctOption: 3,
        points: 20,
    },
    {
        "id": 16,
        "question":  "What is the primary purpose of routing in web applications?",
        "options": [
            "Loading JavaScript modules on demand",
            "Connecting frontend with backend APIs",
            "Mapping URLs to corresponding views",
            "Validating form inputs on the client"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 17,
        "question": "In React Router, what does a route typically represent?",
        "options": [
            "A function for fetching remote data",
            "A connection between URL and component",
            "A global state object for context",
            "A reference to specific DOM element"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 18,
        "question": "What capability does routing provide to users in React applications?",
        "options": [
            "Navigation between screens using URLs",
            "Automatic global styling for components",
            "Built-in API response caching system",
            "Persistent component state across sessions"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 19,
        "question": "What is React Router's main responsibility?",
        "options": [
            "Managing global application state efficiently",
            "Handling navigation and component rendering",
            "Providing CSS-in-JS utilities for styling",
            "Coordinating API data fetching operations"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 20,
        "question": "What defines a Single Page Application (SPA)?",
        "options": [
            "An app that works only one device",
            "A web app loading once, updating dynamically",
            "A website reloading on each navigation",
            "An app with exactly one route"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 21,
        "question":"What is a primary benefit of Single Page Applications?",
        "options": [
            "Faster page reloads on every navigation",
            "Reduced server computational load significantly",
            "Smoother and more responsive navigation",
            "No JavaScript required for functionality"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 22,
        "question":"How do SPAs handle URL changes during navigation?",
        "options": [
            "Each navigation triggers full server request",
            "Update URLs using History API without reload",
            "They completely hide URLs from users",
            "They always use server-side redirects"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 23,
        "question": "Where does rendering primarily occur in Single Page Applications?",
        "options": [
            "Exclusively on server before sending HTML",
            "Primarily on client using JavaScript",
            "Equally distributed between client and server",
            "On external CDN servers only"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 24,
        "question": "What happens when routing changes the URL in a React SPA?",
        "options": [
            "The browser performs full page reload",
            "The URL change is ignored completely",
            "React updates UI to match new URL",
            "The application restarts execution completely"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 25,
        "question": "What primarily drives content updates in Single Page Applications?",
        "options": [
            "JavaScript manipulating the DOM directly",
            "Server sending new HTML pages",
            "Full browser reloads after each action",
            "CSS-only layout changes without scripts"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 26,
        "question":  "What is a significant SEO challenge for Single Page Applications?",
        "options": [
            "They cannot use secure HTTPS connections",
            "Search engines struggle with dynamic content",
            "They don't support inter-page linking",
            "They're incompatible with modern web standards"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 27,
        "question": "How do client-side and server-side routing differ?",
        "options": [
            "Client-side routing always triggers page reloads",
            "Server-side routing never performs full loads",
            "They function identically in modern browsers",
            "Client updates without reload, server triggers reload"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 28,
        "question":"What approach can improve SEO for Single Page Applications?",
        "options": [
            "Converting to multiple static HTML pages",
            "Completely avoiding routing libraries entirely",
            "Implementing server-side rendering (SSR)",
            "Disabling JavaScript entirely for crawlers"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 29,
        "question":  "What is ESLint's primary function in JavaScript projects?",
        "options": [
            "Managing application state across components",
            "Analyzing code for issues and style problems",
            "Rendering user interface components dynamically",
            "Executing automated unit tests automatically"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 30,
        "question": "When is ESLint typically run during development?",
        "options": [
            "Only during production deployment phase",
            "During the build process with bundlers",
            "During development and before code commits",
            "Only after creating production builds"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 31,
        "question":  "Does ESLint only check for syntax errors?",
        "options": [
            "Yes, it only validates syntax",
            "No, it also enforces style and finds logic issues",
            "Yes, it replaces the JavaScript compiler",
            "No, it only builds production bundles"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 32,
        "question": "Which file is commonly used to configure ESLint rules?",
        "options": [
            ".eslint.config.js for configuration",
            ".eslint for all settings",
            ".eslintrc.json for rules",
            ".linterrc.js for configuration"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 33,
        "question": "What is the purpose of ESLint plugins?",
        "options": [
            "To improve JavaScript runtime performance",
            "To add TypeScript compilation support",
            "To extend ESLint with additional rules",
            "To convert JavaScript to HTML"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 34,
        "question": "Which command runs ESLint from the command line?",
        "options": [
            "eslint-check for running checks",
            "lint-start to begin linting",
            "eslint . for current directory",
            "node run eslint for execution"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 35,
        "question": "How can you exclude files from ESLint analysis?",
        "options": [
            "Add them to .eslint ignore file",
            "Remove them from package.json",
            "Comment them in index.html",
            "Rename files with .skip extension"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 36,
        "question": "What is true about creating custom ESLint rules?",
        "options": [
            "Rules analyze Abstract Syntax Tree structure",
            "Rules can only configure from command line",
            "Rules must be embedded in HTML files",
            "Custom rules only work with Angular projects"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 37,
        "question": "How do you properly configure ESLint for a React project?",
        "options": [
            "Install React plugin and extend recommended rules",
            "Install Redux alongside ESLint configuration",
            "Use Vite instead of ESLint configuration",
            "Install ESLint only without additional plugins"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 38,
        "question": "How do 'rules', 'extends', and 'plugins' differ in ESLint?",
        "options": [
            "Rules configure plugins, extends sets environments",
            "Rules define configs, extends inherits, plugins add",
            "All three properties are completely interchangeable",
            "Only rules matter, others are documentation"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 39,
        "question":"Why are there multiple approaches to styling React components?",
        "options": [
            "Because React enforces one specific method",
            "Because CSS is not supported by default",
            "Because React is unopinionated about styling",
            "Because JSX only supports inline styles"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 40,
        "question": "What is the main advantage of CSS Modules?",
        "options": [
            "They enable CSS-in-JS syntax automatically",
            "They apply styles globally by default",
            "They compile CSS to JavaScript at runtime",
            "They provide locally scoped class names"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 41,
        "question": "What does it mean when CSS is scoped to a component?",
        "options": [
            "The styles apply to the entire page",
            "The styles are reusable across components",
            "The styles only exist in global.css",
            "The styles only affect that specific component"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 42,
        "question": "What is a common problem with global CSS in large applications?",
        "options": [
            "They cannot be used with server-side rendering",
            "They are not supported by modern browsers",
            "They may cause unintended style conflicts",
            "They require special JSX syntax"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 43,
        "question":"Why is storing UI state in the URL beneficial?",
        "options": [
            "To reduce JavaScript bundle size significantly",
            "To improve visual aesthetics of application",
            "To enable sharing and bookmarking states",
            "To prevent unnecessary component re-renders"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 44,
        "question": "Which example demonstrates storing state in the URL?",
        "options": [
            "Using query parameters like ?search=react",
            "Saving theme preferences in localStorage",
            "Managing form input with useState hook",
            "Passing data through component props"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 45,
        "question": "Which React Router hook is used to read URL query parameters?",
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
        "question": "Which approach maintains UI state after a browser refresh?",
        "options": [
            "Storing state in localStorage or URL",
            "Using useState exclusively for state",
            "Using React Context only for sharing",
            "Keeping state in local variables"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 47,
        "question":  "Which hook prevents unnecessary function recreation on re-renders?",
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
            "Caches expensive calculations for performance",
            "Prevents re-render when props haven't changed",
            "Stores component state in memory",
            "Creates new component instances automatically"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 49,
        "question": "When should you use useMemo?",
        "options": [
            "For expensive calculations or object creation",
            "To replace all useState hooks completely",
            "For simple string concatenations only",
            "For every variable in components"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 50,
        "question":  "Which technique helps avoid prop drilling?",
        "options": [
            "Using more useState hooks throughout",
            "Creating additional wrapper components",
            "Using React Context API effectively",
            "Passing more props through components"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 51,
        "question": "What is the key difference between useCallback and useMemo?",
        "options": [
            "useCallback memoizes functions, useMemo memoizes values",
            "useCallback stores values, useMemo stores functions",
            "useMemo is for effects, useCallback is for state",
            "They perform identical functions"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 52,
        "question": "Which practice commonly causes unnecessary re-renders in React?",
        "options": [
            "Using keys properly in list rendering",
            "Creating new objects or functions during render",
            "Applying React.memo correctly to components",
            "Splitting components into smaller pieces"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 53,
        "question": "What is the purpose of the 'key' prop in React lists?",
        "options": [
            "To apply CSS styling to list items",
            "To help React identify and track item changes",
            "To improve component visual design",
            "To pass data between list components"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 54,
        "question": "Which hook is most appropriate for optimizing expensive calculations?",
        "options": [
            "useState",
            "useEffect",
            "useMemo",
            "useReducer"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 55,
        "question": "How can you prevent a component from re-rendering when its parent re-renders?",
        "options": [
            "Wrap the component with React.memo",
            "Use useEffect with an empty dependency array",
            "Move state from props to local state",
            "Add additional props to the component"
        ],
        "correctOption": 0,
        "points": 10
    },

    {
        "id": 57,
        "question": "What is the main benefit of React.lazy with Suspense?",
        "options": [
            "It accelerates rendering performance significantly",
            "It enables code splitting and smaller bundles",
            "It improves SEO ranking automatically",
            "It prevents memory issues in applications"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 58,
        "question": "When does React.memo fail to prevent re-renders?",
        options: [
            "When props remain unchanged between renders",
            "When new object or references are created",
            "When the component has no props",
            "When the component uses internal state"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 59,
        "question":  "What happens when useMemo depends on a value that changes every render?",
        options: [
            "It recalculates every render, losing optimization benefits",
            "React throws an error immediately",
            "It works normally and caches correctly",
            "The value is automatically memoized by React"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 60,
        "question": "Which strategy reduces unnecessary Context re-renders?",
        options: [
            "Using multiple Context providers for everything",
            "Adding more consumer components everywhere",
            "Placing useEffect hooks in Context",
            "Splitting Context by logical data boundaries"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 61,
        "question": "In React Profiler, what does the 'Commit' phase measure?",
        options: [
            "Time spent applying updates to DOM",
            "Time spent calculating what changed",
            "Time spent running useEffect hooks",
            "Total render plus lifecycle time"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 62,
        "question":  "Why can overusing useCallback potentially hurt performance?",
        options: [
            "It always improves performance significantly",
            "For simple functions memoization overhead may overstep benefits",
            "It causes memory leaks in certain cases",
            "It only works with class components"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 63,
        "question": "What is the recommended approach for handling very large lists in React?",
        options: [
            "Wrapping each list item in React.memo",
            "Using useCallback for all event handlers",
            "Implementing list virtualization (windowing)",
            "Adding more useEffect hooks"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 64,
        "question": "Which React hook memoizes computed values between renders?",
        options: [
            "useRef",
            "useState",
            "useEffect",
            "useMemo"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 65,
        question: "What are the main targets of React performance optimization?",
        options: [
            "Writing shorter code and fewer files",
            "Using only the latest React features",
            "Reducing unnecessary re-renders and bundle size",
            "Converting all functions to class components"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 66,
        "question":"When is React.memo not effective for optimization?",
        options: [
            "When props remain stable across renders",
            "When the component has no props",
            "When new object or references are passed as props",
            "When state is managed internally"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 67,
        "question": "Which hook prevents recalculation of expensive values?",
        options: [
            "useRef",
            "useState",
            "useEffect",
            "useMemo"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 68,
        "question": "What does React.StrictMode primarily help developers identify?",
        options: [
            "Application performance bugs and issues",
            "Side effects and component lifecycle issues",
            "Code style violations and patterns",
            "Memory leaks exclusively in components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 69,
        "question": "What is useCallback's primary function?",
        options: [
            "Memoizing function references between renders",
            "Storing state values across renders",
            "Triggering re-renders manually",
            "Completely replacing useMemo functionality"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 70,
        "question": "What is the recommended technique for rendering thousands of list items?",
        options: [
            "Wrapping everything in Context providers",
            "List virtualization or windowing",
            "Adding key props only",
            "Using additional useState hooks",
        ],
        "correctOption":1,
        "points": 20
    },
    {
        "id": 71,
        "question": "What does the React Profiler help you analyze?",
        options: [
            "Node.js memory leaks in server",
            "Component render times and re-render patterns",
            "Network usage and bundle size metrics",
            "Code style and formatting errors"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 72,
        "question":  "What can happen if you overuse useMemo?",
        options: [
            "It adds memoization overhead so decrease performance",
            "It significantly improves SEO rankings",
            "It makes all components pure by default",
            "It eliminates the need for useState"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 73,
        "question": "Which hook maintains a mutable value without triggering re-renders?",
        options: [
            "useState",
            "useEffect",
            "useRef",
            "useMemo"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 74,
        "question": "Why can't you directly use fetch API calls inside Redux reducers?",
        options: [
            "Reducers cannot access browser APIs like fetch",
            "Reducers must be pure functions without side effects",
            "Fetch can only be called from React components",
            "Reducers automatically prevent async operations"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 75,
        "question":  "Why do some effects execute twice in React.StrictMode during development?",
        options: [
            "Because React has an internal bug",
            "To help developers detect side effects and verify cleanup logic",
            "To increase rendering performance in development",
            "To make development identical to production"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 76,
        "question": "What are the primary areas of focus for React performance optimization?",
        options: [
            "Using more hooks and creating additional components",
            "Focusing only on CSS and backend optimizations",
            "Increasing component nesting dept significantly",
            "Preventing wasted renders and reducing bundle size"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 77,
        "question":"Which technique most directly reduces wasted re-renders?",
        options: [
            "Code splitting with React.lazy",
            "Compressing static assets like images",
            "Wrapping components with React.memo",
            "Minifying JavaScript bundles"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 78,
        "question":  "How does React.lazy() help reduce bundle size?",
        options: [
            "It prevents unnecessary component re-renders",
            "It automatically compresses component code",
            "It loads components only when needed",
            "It removes unused CSS rules automatically"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 79,
        "question":  "What technique improves performance when rendering large lists in React?",
        "options": [
            "Adding more event listeners to list items",
            "List virtualization (windowing) technique",
            "Inline styling for each individual list item",
            "Using class components instead of functional components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 80,
        "question": "Which combination addresses the three main React optimization areas?",
        "options": [
            "React.memo, React.lazy, and useMemo hooks",
            "useCallback, React.memo, and useMemo hooks",
            "React.Suspense, useRef, and useReducer hooks",
            "React.Fragment, useContext, and useLayoutEffect hooks"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 84,
        "question": "What defines a wasted render in React?",
        "options": [
            "Any render that takes longer than 16 milliseconds to execute",
            "The initial render when a component first mounts in the tree",
            "A render where the component output is identical to previous render",
            "A render triggered by legitimate state or prop changes"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 85,
        "question": "When does a React component re-render?",
        "options": [
            "Only when its internal state changes through setState calls",
            "When state changes, context changes, or parent component re-renders",
            "Only when incoming props are different from the previous render",
            "Only when useEffect dependencies are updated in the component"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 86,
        "question": "What happens when a React Context value changes?",
        "options": [
            "Only the Provider component re-renders after the value change",
            "All consumer components re-render regardless of which data changed",
            "Only consumers reading the specific changed property will re-render",
            "No consumer re-renders unless explicitly triggered by developer"
        ],
        "correctOption": 1,
        "points": 20
    },

    {
        "id": 88,
        "question":"How can you prevent Context consumers from re-rendering when unrelated data changes?",
        "options": [
            "Apply React.memo to all context consumers in the application",
            "Wrap all context functions with useCallback for stable references",
            "Split the context into multiple focused providers for different data",
            "Move all shared data to component-level state instead of context"
        ],
        "correctOption": 2,
        "points": 30
    },

    {
        "id": 90,
        "question": "Which approach prevents creating new context value objects on every render?",
        "options": [
            "const value = useMemo(() => ({ user, setUser }), [user]);",
            "const value = { user, setUser }; // Direct object creation",
            "const value = useCallback(() => ({ user, setUser }), []);",
            "const value = useState({ user, setUser }); // State approach"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 91,
        "question": "Do prop changes directly cause React components to re-render?",
        "options": [
            "Yes, React monitors all props and triggers re-renders automatically",
            "No, only when props are arrays or objects with new references",
            "Yes, but only for primitive prop values like strings and numbers",
            "No, prop changes occur because the parent component re-rendered"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 92,
        "question": "What does 'render' mean in React terminology?",
        "options": [
            "Updating the actual DOM elements on the page",
            "Painting pixels on the screen for visual display",
            "Executing the component function to create Virtual DOM",
            "Running useEffect hooks inside the component function"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 93,
        "question":  "Does every React render update the actual DOM?",
        "options": [
            "Yes, every render immediately updates the DOM elements",
            "No, only when React finds differences in the Virtual DOM",
            "This behavior is only true for class-based components",
            "Only when state changes occur, not when prop changes"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 94,
        "question": "What defines a wasted render in React performance terms?",
        "options": [
            "A render producing the same Virtual DOM as before",
            "A render taking longer than 16 milliseconds to finish",
            "A render that updates the DOM unnecessarily",
            "Any render triggered by parent component updates"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 95,
        "question": "When do wasted renders become a significant performance problem?",
        "options": [
            "They are always problematic and must be eliminated immediately",
            "Only when they cause unnecessary DOM updates to occur",
            "Never, because React optimizes them automatically in all cases",
            "When they occur frequently in components with expensive operations"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 96,
        "question":  "Why is passing heavy components as children often more efficient than rendering them directly in a stateful parent?",
        "options": [
            "Children are cached permanently and never re-render again",
            "React treats children as stable prop references when unchanged",
            "Children execute in separate threads from parent components",
            "Children bypass Virtual DOM diffing mechanism entirely"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 97,
        "question": "What happens when an expensive component is rendered directly inside a parent with frequent state updates?",
        "options": [
            "The expensive component re-renders with each parent re-render",
            "The component renders once and never re-renders again",
            "It re-renders only when parent state matches its props",
            "It only re-renders when React runs in development mode"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 98,
        "question":"How does React decide whether to re-render child components passed as props?",
        "options": [
            "Always re-renders all children when parent state changes",
            "Applies automatic memoization to every child component",
            "Only if their reference changes from the previous render",
            "Ignores children props completely during reconciliation"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 99,
        "question": "What is the best practice for expensive child components in frequently updating parents?",
        "options": [
            "Wrap with React.memo or pass as children/props",
            "Recreate the child on each render for freshness",
            "Avoid using state in the parent component entirely",
            "Place the child outside the React rendering tree"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 100,
        "question":  "Why doesn't passing children always guarantee better performance?",
        "options": [
            "Children always re-render regardless of prop changes",
            "React doesn't support optimization for children props",
            "Children skip Virtual DOM comparison process entirely",
            "Performance benefit depends on whether children content remains unchanged"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 101,
        "question": "What is the purpose of memoization in React?",
        "options": [
            "To permanently store components in memory for all future renders",
            "To parallelize all component renders automatically across threads",
            "To reuse previous results if inputs haven't changed between renders",
            "To prevent all future component renders from happening again"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 102,
        "question": "What does memoizing a React component primarily affect?",
        "options": [
            "Internal state update mechanisms within the component",
            "DOM update handling processes for the component",
            "React rendering scheduling in concurrent mode execution",
            "How React compares and reuses the component based on props"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 103,
        "question": "When will a memoized component re-render?",
        "options": [
            "Only when its props change from the previous render",
            "Whenever its parent re-renders, regardless of props",
            "Only when React's Virtual DOM decides to recycle it",
            "Never, once memoized it's permanently cached in memory"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 104,
        "question": "When should you use React.memo?",
        "options": [
            "Only for components that manage local state internally",
            "Only when components have no children components",
            "For components with expensive renders that receive stable props",
            "For every component in the application to maximize performance"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 105,
        "question": "When is React.memo ineffective?",
        "options": [
            "When components always receive new props or object references",
            "When components have children components nested inside",
            "When components are wrapped in stateful parent components",
            "When components are functions instead of class components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 106,
        "question": "What is the main difference between React.memo and useMemo?",
        "options": [
            "React.memo is for class components, useMemo is for functions",
            "React.memo memoizes components, useMemo memoizes computed values",
            "React.memo is faster than useMemo in all performance cases",
            "React.memo automatically deep-memoizes all props and state deeply"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 107,
        "question": "Why might React.memo fail with object or array props?",
        "options": [
            "React.memo doesn't support objects and arrays at all",
            "React.memo converts them to strings for comparison purposes",
            "React.memo requires custom hooks for complex prop types",
            "React.memo only does shallow comparison of prop references"
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 108,
        "question": "Which scenario is inappropriate for React.memo?",
        "options": [
            "Small, frequently updated components that render quickly",
            "Heavy components that rarely change their props",
            "Components with expensive recalculations and stable inputs",
            "Components with complex child trees needing optimization"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 109,
        "question": "How can you optimize memoization for object or array props?",
        "options": [
            "Convert props to strings before passing them to components",
            "Use useMemo or useCallback to stabilize prop references",
            "Avoid objects and arrays as props entirely in components",
            "Wrap objects directly in React.memo for automatic optimization"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 110,
        "question": "Why doesn't React.memo improve performance when objects are passed as props?",
        "options": [
            "React.memo ignores object props by default during comparison",
            "Objects are compared by reference, so new objects appear changed",
            "React.memo only works with primitive props like strings and numbers",
            "React.memo clones objects internally, causing unnecessary re-renders"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 111,
        "question": "Why is React.memo ineffective when functions are passed as props?",
        "options": [
            "React.memo ignores function props during component comparison",
            "React.memo only optimizes state variables, not function references",
            "React.memo inlines functions automatically, forcing component re-renders",
            "Functions are recreated on every render unless properly stabilized"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 112,
        "question": "What is the main difference between useMemo and useCallback?",
        "options": [
            "useMemo prevents re-renders, useCallback prevents effect re-execution",
            "useMemo works with primitives, useCallback works with objects",
            "useMemo memoizes computed values, useCallback memoizes functions",
            "useMemo caches component props, useCallback caches state"
        ],
        "correctOption":2,
        "points": 30
    },
    {
        "id": 113,
        "question": "How do React.memo and useMemo/useCallback differ in scope?",
        "options": [
            "React.memo memoizes components, useMemo/useCallback memoize values inside",
            "React.memo caches state, useMemo caches props, useCallback caches context",
            "React.memo prevents all re-renders, useMemo/useCallback only prevent effects",
            "React.memo works with primitives, useMemo/useCallback work with objects"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 114,
        "question": "What role does the dependency array play in useMemo?",
        "options": [
            "It prevents the function from ever running again",
            "It specifies which props should be passed to React.memo",
            "It ensures recalculation happens on every component render",
            "It determines when the memoized value should be recalculated"
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 115,
        "question": "What similarity exists between useMemo dependency arrays and React.memo?",
        "options": [
            "Both automatically stabilize function references without developer effort",
            "Both control when re-computation or re-rendering occurs based on changes",
            "Both prevent re-renders completely regardless of any input changes",
            "Both only work with primitive values and ignore objects or arrays"
        ],
        "correctOption":1,
        "points": 20
    },
    {
        "id": 116,
        "question":"What happens when useMemo's dependency array doesn't change between renders?",
        "options": [
            "A new value is always recalculated regardless of dependencies",
            "The previously cached value is returned instead of recalculating",
            "React removes the memoized value to save memory automatically",
            "The component will never re-render again in the future"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 117,
        "question": "Which tool is primarily used for preventing unnecessary component re-renders?",
        "options": [
            "useState hook for managing component state",
            "useMemo hook for memoizing computed values",
            "useCallback hook for memoizing function references",
            "React.memo higher-order component wrapper"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 118,
        "question": "Which hook prevents expensive recalculations inside components?",
        "options": [
            "useCallback hook for memoizing function references",
            "useMemo hook for memoizing computed values",
            "useEffect hook for handling side effects",
            "React.memo higher-order component wrapper"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 119,
        "question": "Which hook is useful for memoizing values used in dependency arrays of other hooks?",
        "options": [
            "useMemo hook for memoizing computed values",
            "useState hook for managing component state",
            "useRef hook for persisting values across renders",
            "useCallback hook for memoizing function references"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 120,
        "question": "What's the best approach to prevent child component re-renders when props haven't changed?",
        "options": [
            "useMemo in the parent component to memoize props",
            "React.memo wrapping the child component directly",
            "useCallback to memoize the child component function",
            "useEffect to control prop updates in the parent"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 121,
        "question": "What's the best approach for avoiding expensive recalculations that depend on multiple variables?",
        "options": [
            "useMemo with proper dependency array containing all variables",
            "useCallback wrapping the computation function for stability",
            "React.memo wrapping the parent component to prevent updates",
            "useEffect storing computed value in state for persistence"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 122,
        "question": "How should you stabilize expensive values used in other hook dependency arrays?",
        "options": [
            "useCallback for stabilizing the computed value reference",
            "React.memo wrapping the component that contains the value",
            "useRef to persist the value across component renders",
            "useMemo to memoize the value with proper dependencies"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 123,
        "question": "Why does passing arrow functions as props prevent React.memo from working effectively?",
        "options": [
            "Arrow functions cannot access props or state from parent components",
            "React.memo converts arrow functions to regular function declarations",
            "Arrow functions create new references on every render cycle",
            "useCallback recreates arrow functions every render automatically"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 124,
        "question": "When do useMemo and useEffect callbacks execute in the component lifecycle?",
        "options": [
            "useMemo runs after commit, useEffect runs during render phase",
            "useMemo runs during rendering, useEffect runs after rendering phase",
            "Both run during rendering before DOM commit phase",
            "Both run after rendering, asynchronously in the next cycle"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 125,
        "question": "What is the primary difference in purpose between useMemo and useEffect?",
        "options": [
            "Both are used for memoizing values inside component functions",
            "Both are used for managing side effects after rendering",
            "useMemo handles side effects, useEffect memoizes computed values",
            "useMemo memoizes computed values, useEffect handles side effects"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 126,
        "question": "What do useMemo and useEffect return?",
        "options": [
            "useMemo returns functions, useEffect returns computed values",
            "Neither hook returns any value to the component",
            "useMemo returns a memoized value, useEffect returns cleanup function",
            "Both hooks return cleanup functions for memory management"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 127,
        "question": "Why is calling Hooks indirectly through call/apply invalid?",
        "options": [
            "Hooks must be called directly for React to track them properly",
            "Hooks cannot be reused across different function components",
            "call/apply methods break React state scope mechanisms",
            "Indirect calls only work properly in class-based components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 128,
        "question": "Why can't Hooks be called inside conditional statements?",
        "options": [
            "Hooks break automatically when used in loops or conditions",
            "React cannot guarantee consistent Hook order across renders",
            "Hooks can only be used once per component function",
            "Conditionals prevent Hooks from receiving props correctly"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 129,
        "question":"Where are Hooks allowed to be called?",
        "options": [
            "Inside React function components or custom Hook functions",
            "Inside class component methods only",
            "Inside any regular JavaScript function",
            "Inside event handler functions only"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 130,
        "question": "What happens when a dependency used in useEffect is missing from the dependency array?",
        "options": [
            "React automatically adds the missing dependency at runtime",
            "React throws a runtime error immediately when detected",
            "The effect may use stale values, causing unexpected bugs",
            "The effect runs on every render regardless of dependencies"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 131,
        "question": "Why must Hooks be called in the same order every render?",
        options: [
            "React only supports one Hook per component",
            "React identifies Hooks by their call position",
            "Hooks automatically reorder themselves internally",
            "React compares Hooks by their return values"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 132,
        "question": "How does useMemo help with object props in memoized components?",
        options: [
            "It prevents garbage collection of objects",
            "It converts objects to primitive values",
            "It maintains stable object references",
            "It performs deep comparison of objects"
        ],
        correctOption: 2,
        "points": 20
    },
    {
        "id": 133,
        "question":"What is the key difference between useCallback and useMemo?",
        options: [
            "useCallback memoizes functions, useMemo memoizes values",
            "useCallback prevents renders, useMemo prevents effects",
            "useCallback handles async, useMemo handles sync logic",
            "useCallback works with props, useMemo works with state"
        ],
        correctOption: 0,
        "points": 20
    },
    {
        "id": 134,
        "question":  "Why do useState setters have stable identity across renders?",
        options: [
            "React automatically memoizes all functions",
            "Setters are recreated but hidden by React",
            "React guarantees stable references for setters",
            "Setters only work with primitive values"
        ],
        correctOption: 2,
        "points": 20
    },
    {
        "id": 135,
        "question":"What does stable identity mean for useReducer dispatch?",
        options: [
            "The function reference never changes",
            "It produces consistent action results",
            "It handles all action types equally",
            "It works with any reducer function"
        ],
        correctOption: 0,
        "points": 20
    },
    {
        "id": 136,
        "question": "Why can useState setters be omitted from dependency arrays?",
        options: [
            "React adds them automatically at runtime",
            "React guarantees their stable identity",
            "They're compared by value not reference",
            "They only track primitive dependencies"
        ],
        correctOption: 1,
        "points": 30
    },
    {
        "id": 137,
        "question":  "What happens when state variables are missing from useEffect dependencies?",
        options: [
            "React adds the variables automatically",
            "The effect uses the latest values",
            "The effect captures stale values",
            "The effect runs on every render"
        ],
        correctOption: 2,
        "points": 30
    },
    {
        "id": 138,
        "question":  "Why must props be included in useCallback dependency arrays?",
        options: [
            "React freezes props unless included",
            "Props have stable identity like setters",
            "useCallback only works with primitives",
            "Props can change causing stale closures"
        ],
        correctOption: 3,
        "points": 20
    },
    {
        "id": 139,
        "question": "Why include component functions in useEffect dependency arrays?",
        options: [
            "Functions are recreated on every component render cycle",
            "React automatically memoizes all functions in components",
            "Functions have stable references like dispatch from useReducer",
            "Dependency arrays only need to track function calls"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 140,
        "question": "Why can frequently changing Context values cause performance issues?",
        options: [
            "React ignores all context updates for performance reasons",
            "All consumers re-render whenever any context value changes",
            "Context automatically freezes all values to prevent updates",
            "useMemo cannot be used properly with Context values"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 141,
        "question": "How can you optimize Context to prevent unnecessary re-renders?",
        options: [
            "Wrap context values with useMemo for stable references",
            "Always pass new object literals as context values",
            "Use class components instead of functional components",
            "Avoid using React.memo on any consumer components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 142,
        "question": "What strategy helps avoid wasted renders in Context with many consumers?",
        options: [
            "Convert all consumers to class-based components only",
            "Always update entire context on any state change",
            "Use single large context for all application state",
            "Split context into multiple focused smaller providers"
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 143,
        "question":"How does passing children help optimize Context performance?",
        options: [
            "Makes entire component subtree always re-render together",
            "Automatically freezes all context values for performance",
            "Allows only necessary parts to re-render on context value changes",
            "Converts all consumers to use useMemo internally"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 144,
        "question": "Why wrap Context values containing objects in useMemo?",
        options: [
            "Forces all consumers to re-render on every change",
            "Keeps object references stable between component renders",
            "Automatically freezes object values for immutability",
            "Converts complex objects to primitive types automatically"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 145,
        "question": "How does React.memo help Context consumer performance?",
        options: [
            "Prevents re-render unless component props actually change",
            "Automatically memoizes all context values in consumers",
            "Ensures children components never update unnecessarily",
            "Merges multiple context values together for efficiency"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 146,
        "question": "What advantage does children pattern with React.memo provide?",
        options: [
            "Children receive new props without any re-rendering",
            "Only context-dependent components re-render when needed",
            "Entire component subtree renders once per change",
            "Context values automatically become static primitive types"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 147,
        "question":  "Why do inline objects as Context values trigger unnecessary re-renders?",
        options: [
            "React deeply compares all object contents every render",
            "New object references are created on every render",
            "Context always re-renders all consumers regardless of values",
            "Objects are automatically converted to primitives in Context"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 148,
        "question": "What's the recommended way to avoid re-renders with Context objects?",
        options: [
            "Wrap Context.Provider component itself with React.memo",
            "Create new object literals each render for freshness",
            "Wrap object values in useMemo with proper dependencies",
            "Convert all objects to JSON strings before passing"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 149,
        "question": "How does React.memo reduce Context consumer re-renders?",
        options: [
            "Re-renders only when component props change, not context",
            "Forces all consumers to render together for consistency",
            "Automatically memoizes Context values in provider components",
            "Uses shallow comparison for context updates instead"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 150,
        "question": "What combination best reduces Context-related wasted renders?",
        options: [
            "useMemo for values, React.memo for consumers, children pattern",
            "useMemo for values, partial memoization, separate state contexts",
            "useCallback for values, React.memo for consumers, split contexts",
            "useState for values, class consumers, single global contexts"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 151,
        "question": "What does bundle size represent in React applications?",
        options: [
            "Total number of React components in the project",
            "Combined size of all JavaScript and CSS files",
            "Memory consumed by React in browser runtime",
            "Total amount of network requests per page load"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 153,
        "question": "How does larger bundle size affect application performance?",
        options: [
            "Makes web pages load much faster than before",
            "Reduces network bandwidth usage significantly overall",
            "Improves SEO ranking automatically for search engines",
            "Makes applications load slower for end users"
        ],
        "correctOption":3,
        "points": 10
    },
    {
        "id": 154,
        "question":  "What is the main goal of code splitting?",
        options: [
            "Combine all files into one single large bundle",
            "Rewrite components into smaller atomic functions only",
            "Split code into smaller chunks loaded on demand",
            "Reduce total number of React hooks used throughout"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 155,
        "question": "Which React feature enables lazy loading of components?",
        options: [
            "React.StrictMode combined with error boundary components",
            "React.Suspense combined with React.lazy function calls",
            "useMemo combined with useCallback hooks for optimization",
            "React.memo combined with stable props for consistency"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 156,
        "question": "What happens with page-based bundle splitting in Next.js?",
        options: [
            "All pages are still combined into one large bundle",
            "Only components with useEffect hooks get separated automatically",
            "Pages are split but still downloaded together initially",
            "Each page loads as a separate bundle when visited"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 157,
        "question":"What role does React.Suspense play with lazy components?",
        options: [
            "Shows fallback UI until lazy component finishes loading",
            "Prevents unnecessary component re-renders during loading process",
            "Creates separate bundles automatically for each component",
            "Optimizes performance without requiring additional configuration"
        ],
        "correctOption":0,
        "points": 30
    },
    {
        "id": 158,
        question: "What is the main purpose of tree-shaking?",
        options: [
            "Split JavaScript code into multiple smaller chunks",
            "Remove unused code from final production bundles",
            "Improve CSS loading performance significantly for users",
            "Automatically lazy-load images when they become visible"
        ],
        correctOption: 1,
        points: 10
    },
    {
        "id": 159,
        question: "Which feature enables component-based code splitting?",
        options: [
            "React.memo for component memoization and optimization",
            "useCallback for function reference memoization stability",
            "React.lazy with Suspense boundaries for loading states",
            "StrictMode for development debugging and error detection"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 160,
        question: "How does dynamic import() improve performance?",
        options: [
            "Loads JavaScript modules only when actually required",
            "Always reduces bundle size significantly for all applications",
            "Automatically compresses JavaScript files during build process",
            "Preloads all modules at application startup for speed"
        ],
        correctOption: 0,
        points: 10
    },
    {
        "id": 161,
        question: "Which plugin helps analyze Next.js bundle sizes?",
        options: [
            "webpack-bundle-analyzer for build process analysis",
            "eslint-plugin-next for code linting and quality",
            "@next/bundle-analyzer for bundle size visualization",
            "next-optimizer for performance optimization across board"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 162,
        question:"Why use Next.js Image component over regular img?",
        options: [
            "Increases resolution of all images automatically to HD",
            "Converts all image formats to WebP for compression",
            "Automatically lazy-loads and optimizes images for performance",
            "Completely avoids browser caching for fresh content"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 163,
        question: "How does caching help with bundle optimization?",
        options: [
            "Reduces React component re-renders throughout the application",
            "Automatically inlines critical CSS for faster rendering",
            "Prevents downloading unchanged bundles on repeat visits",
            "Forces all JavaScript modules to preload for speed"
        ],
        correctOption: 2,
        points: 20
    },
    {
        "id": 164,
        question: "What's the downside of importing large third-party libraries?",
        options: [
            "They completely disable React hooks throughout application",
            "They significantly increase initial JavaScript load time",
            "They prevent tree-shaking optimization from working properly",
            "They block Suspense fallback rendering during loading"
        ],
        correctOption: 1,
        points: 20
    },
    {
        "id": 165,
        question: "What happens to imported but unused libraries with tree-shaking?",
        options: [
            "Library code will not be included in final bundle",
            "Library code will always remain in bundle regardless",
            "Library code throws runtime error during execution phase",
            "Library code automatically preloads for future potential use"
        ],
        correctOption: 0,
        points: 30
    },
    {
        "id": 166,
        question: "How can unused CSS affect bundle performance?",
        options: [
            "Increases JavaScript execution time throughout the application",
            "Completely disables CSS modules functionality across project",
            "Bloats bundle size unnecessarily without providing value",
            "Forces application to use inline styles only"
        ],
        correctOption: 2,
        points: 20
    },
    {
        "id": 167,
        question:  "In Next.js, what differs preloading from prefetching?",
        options: [
            "Preloading waits for idle time, prefetching happens immediately",
            "Preloading fetches immediately, prefetching waits for idle time",
            "Both techniques have identical behavior in all situations",
            "Both techniques disable cache headers completely for requests"
        ],
        correctOption: 1,
        points:30
    },
    {
        id: 168,
        question:  "What is the main purpose of preload?",
        options: [
            "Download resources only when user clicks on links",
            "Download critical resources as early as possible",
            "Reduce size of JavaScript bundles automatically",
            "Block unused CSS files from loading unnecessarily"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 169,
        question: "How does prefetch improve user experience?",
        options: [
            "Executes JavaScript code faster in browser runtime",
            "Automatically caches all images for offline usage",
            "Loads future page resources during browser idle time",
            "Reduces React component re-renders significantly across application"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 170,
        question: "What's the biggest risk of incorrect preload usage?",
        options: [
            "Increasing bundle splitting unnecessarily throughout application",
            "Blocking lazy-loading of components during runtime",
            "Overloading network with too many high-priority requests",
            "Preventing prefetch functionality from working properly"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 171,
        question:  "Why does Link with prefetch=true improve navigation performance?",
        "options": [
            "It reduces React rendering time for all components",
            "It preloads target page JavaScript during browser idle time",
            "It disables hydration errors throughout the application",
            "It inlines CSS for the target page improving render speed"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 172,
        question: "Which strategy is most effective for optimizing initial page load time?",
        "options": [
            "Disable caching for all resources",
            "Prefetch all images on the page",
            "Prefetch non-critical JavaScript files",
            "Preload critical fonts and above-the-fold CSS"
        ],
        correctOption:3,
        points: 20
    },
    {
        id: 173,
        question: "What defines a reactive value in React?",
        "options": [
            "A value that remains constant during component lifecycle",
            "A value that triggers component updates when it changes",
            "A value stored outside the component scope",
            "A function that executes only once during rendering"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 174,
        question:  "Which hook is designed to create reactive computed values in React?",
        "options": [
            "useState",
            "useEffect",
            "useMemo",
            "useCallback"
        ],
        "correctOption": 2,
        points: 10
    },
    {
        id: 175,
        question:"Why are regular variables in React components not reactive?",
        "options": [
            "React ignores primitive data types",
            "JavaScript doesn't support reactive programming",
            "React doesn't track changes to regular variables",
            "React only monitors Context values"
        ],
        "correctOption": 2,
        points: 20
    },
    {        id: 176,
        question:"What is true about reactive values in React?",
        "options": [
            "They automatically trigger re-renders when changed",
            "They require manual DOM updates after changes",
            "They only work with primitive data types",
            "They cannot be used in functional components"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 177,
        question: "Why must reactive values be included in useEffect dependency arrays?",
        "options": [
            "To prevent stale closures and ensure current values",
            "To reduce the final bundle size significantly",
            "To prevent unnecessary component re-renders",
            "To satisfy ESLint rules and best practices"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 178,
        question:  "Which of these is considered a reactive value in React?",
        "options": [
            "A local variable declared inside render",
            "A literal number inside useEffect",
            "Props passed from a parent component",
            "A module-level constant"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 179,
        question:  "Which value does NOT need to be included in dependency arrays?",
        "options": [
            "State values from useState",
            "Functions returned by useCallback",
            "Setter functions from useState",
            "Props passed from parent components"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 180,
        question: "What happens when a reactive value is missing from a dependency array?",
        "options": [
            "React throws a runtime error immediately",
            "The component fails to mount properly",
            "The code works but may use stale values",
            "Effects or memoized functions use stale values"
        ],
        correctOption: 3,
        points: 30
    },
    {
        id: 181,
        question: "Which tool automatically detects missing dependencies in useEffect?",
        "options": [
            "Prettier code formatter",
            "React DevTools browser extension",
            "ESLint exhaustive-deps rule",
            "TypeScript compiler"
        ],
        correctOption: 2,
        points: 10
    },
    {
        "id": 182,
        "question":  "Why must context values used in useEffect be included in dependency arrays?",
        "options": [
            "React automatically tracks context changes without dependencies",
            "Effects may read outdated context values causing bugs",
            "useEffect ignores context values unless explicitly listed",
            "React serializes context values for comparison"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 183,
        "question": "What is a stale closure in React hooks?",
        "options": [
            "A closure that captures outdated values from previous renders",
            "A closure preserved in memory for deterministic updates",
            "A closure garbage collected after re-rendering",
            "A closure created when multiple effects overlap"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 184,
        "question": "Why should objects not be used directly as dependencies in hooks?",
        "options": [
            "React deeply compares objects causing performance issues",
            "Objects cannot be serialized into dependency arrays",
            "Objects are compared by reference causing unnecessary re-runs",
            "Objects cause memory leaks in React's fiber architecture"
        ],
        "correctOption":2,
        "points": 30
    },
    {
        "id": 185,
        "question": "How can you prevent unnecessary re-runs when a function causes dependency issues?",
        "options": [
            "Declare the function as a global variable",
            "Wrap the function in React.memo",
            "Move the function into the effect or memoize with useCallback",
            "Call the function conditionally to avoid dependencies"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 186,
        "question": "What is the best practice for functions that don't reference reactive values?",
        "options": [
            "Keep them inside components but wrap with useEffect",
            "Move them outside the component to avoid recreation",
            "Memoize them with useMemo for stability",
            "Convert them to static methods in React.memo"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 187,
        "question": "What is a better approach than including entire objects as dependencies?",
        "options": [
            "Include only the specific properties you actually use",
            "Use JSON.stringify on objects for value comparison",
            "Clone objects and memoize with useCallback",
            "Convert objects to primitive values at runtime"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 188,
        "question": "How can you fix objects that don't work correctly as dependencies?",
        "options": [
            "Wrap objects in React.memo to prevent recreation",
            "Place objects inside state variables for deep comparison",
            "Convert objects into functions and call inside useEffect",
            "Move or memoize objects to keep references stable"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 189,
        "question":  "What pattern works better when you have multiple related reactive values?",
        "options": [
            "Store them inside useRef to avoid re-renders",
            "Combine them with useReducer for a single stable dependency",
            "Merge them into one object and stringify for comparison",
            "Wrap them all in useMemo for shorter dependency arrays"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 190,
        "question": "Why is useEffect often described as an 'escape hatch' in React?",
        "options": [
            "It allows side effects when props or state change",
            "It's the primary mechanism for all business logic",
            "It ensures synchronous rendering with immediate DOM updates",
            "It bypasses React's reconciliation algorithm safely"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 191,
        "question":"Why should useEffect be considered a last resort?",
        "options": [
            "useEffect causes memory leaks by default",
            "React discourages side effects entirely",
            "Most effects can be avoided by deriving state or using event handlers",
            "useEffect blocks rendering until completion"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 192,
        "question": "Which is NOT a recommended use case for useEffect?",
        "options": [
            "Synchronizing external systems when props change",
            "Updating state in response to user button clicks",
            "Fetching data on component mount",
            "Subscribing to global events with cleanup"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 193,
        "question": "What is the recommended way to synchronize multiple state variables?",
        "options": [
            "Derive one state from another or use a single reducer",
            "Use multiple useEffect hooks for each state variable",
            "Store related states in a ref object and mutate directly",
            "Use context providers to automatically sync states"
        ],
        "correctOption": 0,
        "points": 30
    },

    {
        "id": 195,
        "question":  "What causes the stale closure problem in effects or callbacks?",
        "options": [
            "Functions automatically rebind to latest state and props",
            "Functions hold snapshots from when they were created",
            "React intentionally freezes state values after initial render",
            "Closures only work with primitive values in JavaScript"
        ],
        "correctOption": 1,
        "points": 20
    },

    {
        "id": 197,
        "question":"What is the best way to prevent the stale closure problem?",
        "options": [
            "Always use global variables instead of state",
            "Freeze objects in state for consistency",
            "Add current state or props as dependencies in hooks",
            "Avoid using closures in React components"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        id: 198,
        question: "What is Redux?",
        options: [
            "A predictable state management library for applications",
            "A library for styling React components",
            "A built-in React API for managing side effects",
            "A tool for minifying JavaScript bundles"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 199,
        question: "Is Redux specific to React applications?",
        "options": [
            "Yes, it only works with React",
            "No, it only works with Angular applications",
            "No, it can be used with any JavaScript application",
            "Yes, Redux is part of React core"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 200,
        question:  "Which rule must Redux reducers always follow?",
        "options": [
            "They can directly mutate the current state",
            "They can include API calls inside the reducer",
            "They can update state asynchronously with async/await",
            "They must be pure functions without side effects"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 201,
        question: "What should a Redux reducer return when it receives an unknown action type?",
        options: [
            "It should throw an error to indicate invalid action",
            "It should return the current state unchanged",
            "It should return null to reset the state",
            "It should return the initial state value"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 202,
        question: "Why must Redux reducers avoid asynchronous operations?",
        options: [
            "Async operations make reducers unpredictable and hard to test",
            "Reducers cannot return promises in JavaScript",
            "Async operations always cause memory leaks",
            "Reducers can only process primitive data types"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 203,
        question:  "What is the primary difference between Redux and useReducer?",
        options: [
            "Redux is synchronous, useReducer is asynchronous",
            "Redux manages global state, useReducer manages local component state",
            "Redux handles styling, useReducer manages state",
            "Redux stores strings, useReducer handles objects"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 204,
        question: "What essential elements must every Redux action contain?",
        options: [
            "A reducer function and current state",
            "An array of middleware functions",
            "A type field and optionally a payload",
            "Only a unique ID number",
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 205,
        question: "What is the primary role of dispatch in Redux?",
        options: [
            "It saves state permanently to local storage",
            "It sends actions to reducers to update state",
            "It merges multiple reducers into one",
            "It automatically refreshes the UI components"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 206,
        question: "What is the main function of the Redux store?",
        options: [
            "Store CSS styles for application components",
            "Execute side effects like API calls",
            "Generate reducers for state management automatically",
            "Hold application state and provide access"
        ],
        correctOption:3,
        points: 10
    },
    {
        id: 207,
        question: "Why use multiple reducers in a Redux application?",
        options: [
            "Manage different parts of state separately",
            "Create duplicate copies of state logic",
            "Reduce total application bundle size significantly",
            "Make all reducers asynchronous by default"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 208,
        question:"What is an action creator in Redux?",
        options: [
            "A reducer that updates state directly",
            "A function returning action objects",
            "A function removing actions from memory",
            "Middleware that delays action execution timing"
        ],
        correctOption: 1,
        points: 10
    },
    {
        id: 209,
        question:  "What advantage does Redux offer over Context API?",
        options: [
            "Context generates reducers automatically for developers",
            "Redux is used only for styling",
            "Redux provides middleware and debugging tools",
            "Context works only with React frameworks"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 210,
        question: "How does Redux differ from useState?",
        options: [
            "Redux handles only async API requests",
            "useState saves to localStorage automatically",
            "useState works only with class components",
            "Redux handles global, useState local state"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 211,
        question: "When is Redux better than Context with useReducer?",
        options: [
            "For large apps needing global state tools",
            "For small apps with minimal requirements",
            "When React isn't part of stack",
            "When avoiding JavaScript is the goal"
        ],
        correctOption: 0,
        points: 30
    },
    {
        id: 212,
        question: "Why don't modern React apps need Redux?",
        options: [
            "Redux cannot work with TypeScript projects",
            "React provides useState, useReducer, Context API",
            "Redux is deprecated and no longer supported",
            "React apps don't need state management"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 213,
        question: "What scenario justifies using Redux in React?",
        options: [
            "Single counter with minimal state changes",
            "Large frequently changing state across components",
            "Styling components with CSS frameworks only",
            "Replacing React with Angular for performance"
        ],
        correctOption: 1,
        points: 30
    },
    {
        id: 214,
        question: "Which state is best managed locally?",
        options: [
            "Remote data from external APIs",
            "Global state shared between applications",
            "UI state like modals and inputs",
            "Server-side database state for users"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 215,
        question: "Which state requires global management tools?",
        options: [
            "UI state like active tab selection",
            "Temporary variables in function scope",
            "CSS class toggles for styling",
            "Remote state like user API data"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 216,
        question: "Best approach for combining UI and remote state?",
        options: [
            "Keep UI local, manage remote globally",
            "Store all state in APIs only",
            "Move everything to Redux without exceptions",
            "Store UI state on server always"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 217,
        question: "Most effective tool for managing remote state?",
        options: [
            "useReducer hook only for state management",
            "Plain Redux without any middleware support",
            "Manual fetch with setInterval polling continuously",
            "React Query or similar data-fetching libraries"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 218,
        question: "Why has Redux adoption decreased recently?",
        options: [
            "React removed Redux support in versions",
            "Redux only works with outdated React",
            "Remote state better handled by specialized libraries",
            "Redux cannot store complex data structures"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 219,
        question: "What defines the ideal Redux use case?",
        options: [
            "Single component with local state only",
            "Styling multiple components with CSS frameworks",
            "Making asynchronous API calls exclusively for data",
            "Frequent state updates across many components"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 220,
        question: "How do UI and remote state differ?",
        options: [
            "UI requires HTTP, remote state static",
            "UI is component-local, remote from servers",
            "UI needs Redux, remote uses Context",
            "UI is permanent, remote is temporary"
        ],
        correctOption: 1,
        points: 20
    },
    {

        id: 221,
        question: "When choose Redux over React Query/Context?",
        options: [
            "When dealing only with UI modals",
            "When using localStorage for all persistence",
            "Complex non-remote state updating frequently across components",
            "When all state originates from endpoints"
        ],
        correctOption: 2,
        points: 30
    },
    {
        id: 222,
        question: "What is a reducer function in Redux?",
        options: [
            "Function for fetching data asynchronously from servers",
            "Pure function taking state/action, returning new state",
            "Function that renders UI components dynamically",
            "Function managing middleware operations and logging"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 223,
        question: "How does Redux differ from useReducer?",
        options: [
            "useReducer provides middleware, Redux handles async",
            "Redux is synchronous, useReducer handles async",
            "Redux global with middleware/DevTools, useReducer local",
            "Both manage state identically without differences"
        ],
        correctOption: 2,
        points: 30
    },
    {
        id: 224,
        question: "Primary purpose of the Redux store?",
        options: [
            "Render components directly to DOM elements",
            "Fetch remote data automatically for components",
            "Generate action creators for state changes",
            "Hold state tree and coordinate reducers"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 225,
        question: "Why might Redux store contain multiple reducers?",
        options: [
            "Enable parallel dispatch execution for performance",
            "Organize state logic into focused slices",
            "Manage React components within store structure",
            "Handle styling and rendering operations separately"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 226,
        question: "What is an action creator function in Redux?",
        "options": [
            "A function that directly modifies state in the store",
            "A function that returns an action object describing a state change",
            "A function that renders UI components based on actions",
            "A function that combines multiple reducers into one"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        id: 227,
        question:"Why do we separate state update logic from components in Redux?",
        "options": [
            "To prevent Redux DevTools from being triggered",
            "To reduce the final bundle size of the application",
            "To make code predictable, maintainable, and easier to debug",
            "To avoid using React components for state updates"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        id: 228,
        question: "Which solution is best suited for handling server state in modern React apps?",
        "options": [
            "Redux with a single global store for all state types",
            "Context API for passing remote data through component tree",
            "React Query for caching, fetching, and syncing server state",
            "useReducer hook for managing local component state"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 229,
        question:"What performance issue can arise when using Context API for frequently changing state?",
        "options": [
            "Context API cannot pass data to deeply nested components",
            "Frequent updates cause unnecessary re-renders across all consumers",
            "Context API is only designed for styling and theming",
            "Context API requires Redux to handle any state properly"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 230,
        question: "Why do many modern React apps no longer need Redux for remote state?",
        "options": [
            "Redux has been deprecated and is no longer supported",
            "Context API fully replaces Redux for all state management",
            "Redux cannot manage remote data in React applications",
            "Libraries like React Query handle server state more effectively"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 231,
        question: "Which type of state is best managed locally within a React component?",
        "options": [
            "UI state like modal visibility or active tabs",
            "Remote state fetched from an API",
            "Global state shared between multiple applications",
            "Server-side state stored in a database"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 232,
        question:"Which type of state typically requires global management tools?",
        "options": [
            "UI state like which tab is currently active",
            "Temporary variables inside a function scope",
            "Remote state like user data from an API",
            "CSS class toggles for styling components"
        ],
        correctOption: 2,
        points: 10
    },
    {
        id: 233,
        question: "What is the main reason Redux adoption has decreased in recent years?",
        "options": [
            "React automatically handles all state management internally",
            "Most global state is remote and better handled by specialized libraries",
            "Redux no longer works with current React versions",
            "UI state requirements have become too complex for Redux"
        ],
        correctOption: 1,
        points: 20
    },
    {
        "id": 234,
        "question": "What is the primary role of middleware in Redux?",
        "options": [
            "To let components update state directly without reducers",
            "To intercept actions and run additional logic like async calls",
            "To replace reducers with custom asynchronous handlers",
            "To make the store update automatically without dispatch"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 235,
        "question":"Where should side effects like API calls be handled in Redux?",
        "options": [
            "Inside reducer functions",
            "Inside middleware functions",
            "Directly in React components only",
            "Inside the store configuration"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 236,
        "question": "What is the main purpose of Redux Thunk?",
        "options": [
            "To defer rendering components until data is ready",
            "To optimize reducers by memoizing state updates",
            "To prevent unnecessary re-renders in functional components",
            "To handle asynchronous logic before dispatching actions"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 237,
        "question": "What enables Redux to handle asynchronous operations before updating state?",
        "options": [
            "Reducer functions",
            "Store configuration",
            "Thunk middleware",
            "Component lifecycle methods"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 238,
        "question": "Which feature is NOT provided by Redux Toolkit?",
        "options": [
            "createSlice for reducing boilerplate code",
            "createAsyncThunk for handling async logic",
            "Built-in support for Immer library",
            "Class-based component lifecycle methods"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 239,
        "question":"Which capability is NOT provided by Redux Toolkit's createSlice?",
        "options": [
            "Automatically generates action creators and types",
            "Allows writing mutable-looking code safely with Immer",
            "Eliminates the need to configure a Redux store",
            "Reduces boilerplate by combining state, reducers, and actions"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 240,
        "question": "Which library in Redux Toolkit allows writing code that appears to mutate state while maintaining immutability?",
        "options": [
            "Thunk",
            "Saga",
            "Selector",
            "Immer",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 241,
        "question": "Which Redux Toolkit API combines reducers and action creators into a single structure?",
        "options": [
            "createSlice",
            "configureStore",
            "combineReducers",
            "applyMiddleware"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 242,
        "question": "Which Redux Toolkit function sets up the store with built-in middleware and DevTools?",
        "options": [
            "createReducer",
            "createStore",
            "configureStore",
            "setupStore"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 243,
        "question": "What is the recommended naming convention for Redux action types?",
        "options": [
            "Single word names only",
            "Event name only",
            "Random strings for uniqueness",
            "Domain/event pattern"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 244,
        "question":  "How are action creators handled in Redux Toolkit's createSlice?",
        "options": [
            "They must be written manually by the developer",
            "They are generated automatically and accept one payload",
            "They require multiple arguments for each action call",
            "They cannot be accessed outside of the slice logic"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 245,
        "question": "What is the primary purpose of createSlice in Redux Toolkit?",
        "options": [
            "It installs external libraries for async handling",
            "It manages routing and navigation inside React apps",
            "It defines reducers and generates actions creators together",
            "It creates global styles for components in the project"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 246,
        "question": "What is true about reducers inside createSlice?",
        "options": [
            "They always return a completely new object",
            "They can write code that appears to mutate state due to Immer",
            "They cannot use payload values from dispatched actions",
            "They only work if written as pure asynchronous functions component"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 247,
        "question": "How are action creators provided when using createSlice?",
        "options": [
            "They are created manually in a separate actions file",
            "They are only available if connected with middleware",
            "They are generated automatically based on reducer names",
            "They must be imported directly from the Redux package",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 248,
        "question": "What is a key advantage of createSlice over traditional Redux?",
        "options": [
            "It reduces boilerplate by combining related logic",
            "It prevents React components from re-rendering",
            "It adds built-in routing and query string support",
            "It eliminates the need for any store or middleware"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 249,
        "question": "What does createSlice return after definition?",
        "options": [
            "A collection of selectors for reading global state",
            "A middleware that listens for dispatched actions",
            "A reducer function and auto-generated actions creators",
            "A hook that manages asynchronous API requests"
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 250,
        "question": "How are reducers inside createSlice typically written?",
        "options": [
            "As JSX components that render data from the store",
            "As lifecycle hooks that are triggered by React updates",
            "As asynchronous functions that always await API responses",
            "As functions that directly modify state using Immer",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 251,
        "question":"What does createSlice automatically generate based on the reducer functions you define?",
        "options": [
            "Middleware functions for handling async operations",
            "Action creators with the same names as the reducers",
            "Component hooks for state management",
            "CSS classes for styling components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 252,
        "question": "How many parameters do action creators generated by createSlice typically accept?",
        "options": [
            "Zero parameters - they are always called without arguments",
            "One parameter - a payload value that becomes action.payload",
            "Two parameters - type and payload separately",
            "Multiple parameters - as many as you define in the reducer"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 253,
        "question": "What does Immer enable you to do inside createSlice reducers?",
        "options": [
            "Automatically fetch data from external APIs",
            "Create multiple store instances for different features category",
            "Write code that appears to mutate state but maintains immutability",
            "Generate TypeScript type definitions automatically",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 254,
        "question": "In createSlice configuration, which property contains the functions that define state updates?",
        "options": [
            "The reducers field containing case reducer functions",
            "The actions field containing action creator definitions",
            "The middleware field containing side effect handlers",
            "The selectors field containing state access functions"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 255,
        "question": "What naming pattern do action types follow when generated by createSlice?",
        "options": [
            "SLICE_NAME_REDUCER_NAME (e.g., 'COUNTER_INCREMENT')",
            "sliceName/reducerName (e.g., 'counter/increment')",
            "reducerName_sliceName (e.g., 'increment_counter')",
            "Random UUID strings for uniqueness"
        ],
        "correctOption":1,
        "points": 20
    },
    {
        "id": 256,
        "question": "How do you export the main reducer function from a createSlice result?",
        "options": [
            "Export slice.reducer from the slice object",
            "Export slice.actions.reducer from the slice",
            "Export createReducer(slice) as the main function",
            "Export slice.store as the complete reducer"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 257,
        "question":  "Which specific Redux boilerplate does createSlice eliminate?",
        "options": [
            "Writing separate action creators and action types manually",
            "Configuring the Redux store and middleware",
            "Creating component-level state management hooks",
            "Defining routing and navigation logic"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 258,
        "question": "What role does initialState serve in createSlice?",
        "options": [
            "It determines the component rendering order",
            "It specifies which middleware to use with the slice",
            "It defines the starting value for the slice's state",
            "It configures the development tools integration"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 259,
        "question": "When would you use the 'prepare' callback in a createSlice reducer?",
        "options": [
            "To customize the action payload before it reaches the reducer logic",
            "To define asynchronous operations that run after state updates",
            "To specify which components can access this slice",
            "To configure Redux DevTools for debugging purposes"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 260,
        "question":  "Which Redux feature is NOT available in React Context API?",
        "options": [
            "State management with useReducer",
            "Middleware support for handling side effects",
            "Passing data through component tree",
            "Integration with React DevTools"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 261,
        "question": "What architectural problem can occur when using multiple Context providers?",
        "options": [
            "Built-in middleware integration",
            "Simplified debugging experience",
            "Automatic asynchronous operation handling",
            "Provider hell with deeply nested wrapper components"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 262,
        "question": "Which scenario is best suited for Redux over Context API?",
        "options": [
            "Passing theme colors through component tree",
            "Managing frequently changing state across many components",
            "Sharing user authentication status",
            "Providing translation strings to many components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 263,
        "question": "What advantage does Redux provide over Context API for debugging?",
        "options": [
            "Automatic error boundary creation with Redux DevTools",
            "Built-in TypeScript support",
            "Time-travel debugging with Redux DevTools",
            "Faster component rendering"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 264,
        "question": "What is a disadvantage of Redux compared to Context API?",
        "options": [
            "It is built into React itself",
            "It requires additional packages and setup overhead",
            "Redux can not handle asynchronous operations",
            "It provides only React DevTools support"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 265,
        "question": "Why can Context API cause performance issues with frequent updates?",
        "options": [
            "Context automatically re-renders all consumer components",
            "Context cannot be split into smaller providers",
            "Context requires manual optimization techniques",
            "Context doesn't support memoization"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 266,
        "question": "Which tool provides the better debugging experience for state management?",
        "options": [
            "Context API with React DevTools",
            "Redux with its dedicated DevTools",
            "useReducer with console logging",
            "Local component state with debugger"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 267,
        "question":"When is Context API the better choice over Redux?",
        "options": [
            "For complex state with nested data structures",
            "For applications requiring middleware functionality",
            "For sharing rarely changing values like theme or locale",
            "For managing shopping cart with frequent item updates",
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 268,
        "question":"What is the most appropriate use case for Context API?",
        "options": [
            "Managing complex application state with frequent updates",
            "Avoiding prop drilling for values passed to many components",
            "Handling asynchronous data fetching operations",
            "Creating time-travel debugging functionality"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 269,
        "question": "When should you choose Redux over Context API?",
        "options": [
            "For passing static configuration data",
            "For simple theme switching functionality",
            "For state that updates frequently",
            "For sharing user preferences"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 270,
        "question":  "Why is Redux suitable for complex state management?",
        "options": [
            "Redux is built into React framework",
            "Redux prevents all re-renders component automatically",
            "Redux provides predictable state updates and debugging tools",
            "Redux eliminates the need for component state"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 271,
        "question": "Which approach is more efficient for local component subtree state?",
        "options": [
            "Redux Toolkit",
            "Redux with middleware",
            "React Context",
            "React DevTools"
        ],
        "correctOption":2,
        "points": 10
    },
    {
        "id": 272,
        "question": "Which tool is most appropriate for rarely changing global values like theme?",
        "options": [
            "React Context",
            "Redux Toolkit",
            "Redux with middleware",
            "Global store libraries"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 273,
        "question": "Which of the following demonstrates DOM traversal?",
        "options": [
            "document.createElement('div')",
            "element.parentNode.nextSibling",
            "fetch('api/data')",
            "JSON.stringify({name: 'Omid'})"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 274,
        "question": "What is the main difference between imperative and declarative programming?",
        "options": [
            "Imperative focuses on what should happen, declarative on how",
            "Declarative focuses on what should happen, imperative on how",
            "Imperative is faster, declarative is more readable",
            "Declarative requires more code, imperative requires less"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 275,
        "question": "Which approach represents declarative programming in React?",
        "options": [
            "Manually updating DOM elements with getElementById",
            "Using JSX to describe what the UI should look like",
            "Writing for loops to create HTML elements",
            "Directly manipulating CSS styles with JavaScript"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 276,
        "question": "What is the primary benefit of declarative programming in React?",
        "options": [
            "You write step-by-step DOM manipulation instructions",
            "You describe what the UI should look like",
            "You manually track all state and DOM changes",
            "You directly use querySelector for DOM updates"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 277,
        "question": "Why is DOM traversing important in front-end development?",
        "options": [
            "Allow to navigate, read, and manipulate of HTML structure",
            "CSS styling replacement with JavaScript calculations",
            "Automatic JavaScript performance optimization",
            "Server-side HTML content generation"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 278,
        "question":  "How does feature-based folder structure improve maintainability?",
        "options": [
            "Files are separated by technical type only",
            "Bundle size reduces through automatic tree-shaking",
            "Related functionality groups together in modules",
            "Global state management enforces across components"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 279,
        "question": "What challenge arises from organizing projects by file type?",
        "options": [
            "Components become impossible to reuse",
            "UI and logic mix in directories",
            "Bundle size increases automatically",
            "Related files spread across folders"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 280,
        "question": "Where should components be placed in feature-based architecture?",
        "options": [
            "Within each feature directory with related files",
            "In centralized components folder for sharing",
            "Inside dedicated pages directory for routing",
            "Mixed with hooks regardless of boundaries"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 281,
        "question":"What does 'data loading waterfall' mean in React applications?",
        "options": [
            "Using advanced caching strategies to completely eliminate the need for repeated network calls",
            "Multiple requests executed sequentially, causing slower loading times",
            "Executing all API requests in parallel regardless of dependencies",
            "Fetching data only for the components currently visible in the viewport",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 282,
        "question": "What is the main purpose of the HTTP PATCH method?",
        "options": [
            "retrieves complete data of a resource without modifications",
            "Replaces entire resource with provided data",
            "Applies partial modifications to existing resource",
            "Creates completely new resource on server"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 283,
        "question": "How does HTTP PUT differ from PATCH?",
        "options": [
            "PUT retrieves resources, PATCH deletes them",
            "PUT replaces full resource, PATCH updates fields",
            "PUT creates new resources, PATCH deletes existing",
            "PUT sends partial data, PATCH requires full"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 284,
        "question": "When should POST be preferred over PUT or PATCH?",
        "options": [
            "Partially updating one property of resource",
            "Replacing entire resource with new data",
            "Creating completely new resource on server",
            "Retrieving current state of existing resource"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 285,
        "question": "Which scenario best fits the PATCH method?",
        "options": [
            "Uploading profile picture without changing other data",
            "Creating new order with customer and items",
            "Replacing entire shopping cart with new items",
            "Fetching order history for specific customer"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 286,
        "question":  "If a user updates only delivery address of existing order, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 287,
        "question": "if system needs to create brand new pizza order, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 288,
        "question":"if a admin replaces entire pizza menu with new list, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 289,
        "question":  "If a customer views specific order details by ID, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 290,
        "question": "If a customer cancels and removes order completely, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 291,
        "question":"What defines a pure function in JavaScript?",
        "options": [
            "Always returns same output for same input",
            "Can modify variables outside its scope",
            "Depends on external states like Date.now()",
            "Causes side effects like DOM manipulation"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 292,
        "question":  "What makes a React component impure?",
        "options": [
            "Using props to render UI",
            "Returning JSX consistently from component",
            "Receiving children elements ",
            "Fetching data directly inside render",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 293,
        "question":  "Why should functions in useMemo be pure?",
        "options": [
            "Impure functions are automatically memoized",
            "Pure functions cannot accept any arguments",
            "Impure functions may return conflicting results",
            "useMemo only works with async functions"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 294,
        "question": "What breaks the purity of a Redux reducer?",
        "options": [
            "Returning new state object from reducer",
            "Spreading previous state into new one",
            "Calculating sum of two numbers",
            "Logging message to console from reducer"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 295,
        "question": "What is the best practice when modeling state in Redux?",
        "options": [
            "Store the entire UI tree directly inside the state",
            "Duplicate entities in multiple parts of the state for faster access",
            "Normalize data and avoid deeply nested structures",
            "Keep derived values permanently stored in state"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 296,
        "question": "Why is normalization recommended in Redux state?",
        "options": [
            "It makes state harder to update consistently",
            "It ensures all data is stored in nested objects",
            "It makes selectors unnecessary in the application",
            "It allows easy updates and avoids data duplication",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 297,
        "question": "Why prefer React Query over fetch with useEffect?",
        "options": [
            "eliminates the need for backend APIs",
            "automatically handles caching, refetching, and background updates",
            "replaces Redux for all state management including local state",
            "converts all API responses into static HTML automatically"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 298,
        "question": "Why do we need frameworks like React?",
        "options": [
            "JavaScript cannot support DOM manipulation",
            "Vanilla JavaScript cannot work with APIs",
            "Frameworks make state management easier in complex apps",
            "Frameworks replace JavaScript with different language"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 299,
        "question": "ٌWhat's a key advantage of React over vanilla JavaScript?",
        "options": [
            "React directly modifies DOM for speed",
            "React removes need for event handling",
            "React introduces Virtual DOM for efficiency",
            "React converts CSS into JavaScript functions"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 300,
        "question": "Why is component-based architecture preferred over vanilla JavaScript?",
        "options": [
            "Components enable reuse, isolation, and easier testing",
            "Components eliminate the need for any JavaScript functions",
            "Vanilla JavaScript cannot handle conditional rendering",
            "Components automatically generate database queries"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 301,
        "question":"What was jQuery primarily designed to do?",
        "options": [
            "Manage server-side database connections",
            "Simplify DOM manipulation and event handling",
            "Replace HTML markup with JavaScript syntax",
            "Compile JavaScript into optimized machine code"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 302,
        "question":  "Which limitation of jQuery led to adoption of modern frameworks?",
        "options": [
            "jQuery prevented DOM manipulation capabilities",
            "jQuery automatically converted code to server-side scripts",
            "jQuery lacked structured state management patterns",
            "jQuery could not run in modern browsers"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 303,
        "question": "How does a web application differ from a regular desktop application?",
        "options": [
            "Web applications run on servers and are accessed via browsers",
            "Web applications execute entirely on local machines",
            "Web applications contain only static HTML content",
            "Web applications do not require a browser to run"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 304,
        "question":  "What is the primary role of React Query in React applications?",
        "options": [
            "Styling React components using CSS-in-JS",
            "Managing server state including fetching and caching",
            "Replacing useState for local state management",
            "Building UI components without JSX syntax"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 305,
        "question": "Why do modern applications rely on front-end frameworks?",
        "options": [
            "To automatically convert HTML into server scripts",
            "To simplify interactive UI and manage application state",
            "To eliminate the need for backend infrastructure",
            "To replace CSS with JavaScript styling solutions"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 306,
        "question": "What differentiates a web application from a web page?",
        "options": [
            "Pages allow interaction, apps are purely static",
            "Pages require servers, apps work offline",
            "Applications enable interaction, pages mainly display content",
            "Applications run offline, pages need internet"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 307,
        "question": "When is React more beneficial than plain HTML/CSS/JS?",
        "options": [
            "React efficiently manages complex UI state and interactions",
            "React automatically converts HTML into server-side scripts",
            "React removes the need for CSS styling",
            "React works only for pages without a server"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 308,
        "question":  "What does keeping the UI synchronized with data mean?",
        "options": [
            "Data should remain static to avoid frequent updates",
            "UI updates occur only during full page refreshes",
            "UI elements need manual updates for data changes",
            "UI automatically reflects the current state of data"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 309,
        "question":"How does React ensure UI stays in sync with data?",
        "options": [
            "By directly manipulating the DOM using vanilla JavaScript",
            "By using state variables and triggering re-renders",
            "By relying solely on global variables without state management",
            "By refreshing the entire page after each data change"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 310,
        "question": "Why is UI-data synchronization crucial in applications?",
        "options": [
            "It ensures users see accurate and up-to-date information",
            "It speeds up applications by preventing updates",
            "It allows avoiding React or similar frameworks",
            "It caches old data without updating the interface"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 311,
        "question":"What does DOM traversal allow developers to do in JavaScript?",
        "options": [
            "Create new elements and attach them to the DOM",
            "Send asynchronous requests to a server",
            "Navigate and access nodes already present in the DOM",
            "Convert JavaScript code into machine instructions"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 312,
        "question": "What made jQuery popular among developers?",
        "options": [
            "Replaced JavaScript as browser language",
            "Automatically optimized web performance",
            "Eliminated need for CSS styling",
            "Provided cross-browser support for common DOM tasks"
        ],
        "correctOption":3,
        "points": 20
    },
    {
        "id": 313,
        "question": "How would you best describe React?",
        "options": [
            "declarative, component-based, state-driven JavaScript library for building UIs",
            "full-featured JavaScript framework with built-in routing and state management",
            "CSS utility framework for creating responsive designs quickly",
            "server-side runtime environment for executing JavaScript outside the browser"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 314,
        "question":"What characterizes declarative programming in React?",
        "options": [
            "You manually update DOM elements step-by-step",
            "You write CSS classes for component styling",
            "You specify what the UI should look like",
            "You use server-side rendering for HTML"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 315,
        "question":  "How does imperative differ from declarative programming?",
        "options": [
            "You provide step-by-step instructions for execution",
            "You only declare what UI should display",
            "You style components using utility-first CSS",
            "You let frameworks handle all DOM updates"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 316,
        "question":"What role do case reducers play in Redux Toolkit?",
        "options": [
            "They replace Redux store with local state",
            "They automatically fetch data from external APIs",
            "They style components using predefined CSS classes",
            "They define how state changes for specific actions",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        id: 317,
        question: "What programming approach does React Router follow?",
        "options": [
            "Imperative programming with manual DOM updates",
            "Declarative programming with component-based routing",
            "Procedural programming with sequential execution",
            "Functional programming with pure function composition"
        ],
        correctOption: 1,
        points: 20,
    },
    {
        id: 318,
        question:  "Which route definition works best for large projects?",
        "options": [
            "Route objects with createBrowserRouter configuration",
            "JSX route definitions inside Routes components",
            "Dynamic routes for all page components",
            "Protected routes for authentication handling"
        ],
        correctOption: 0,
        points: 20,
    },
    {
        id: 319,
        question:"How do Navigate and useNavigate differ?",
        "options": [
            "Navigate works with objects, useNavigate with JSX",
            "Navigate is declarative, useNavigate is imperative",
            "They provide identical functionality and behavior",
            "Neither component is used for navigation"
        ],
        correctOption: 1,
        points: 20,
    },
    {
        id: 320,
        question: "For layouts with fixed header/footer, which feature helps?",
        "options": [
            "Dynamic routes for different content sections",
            "Nested routes for hierarchical layout structure",
            "Protected routes for user authentication",
            "Route guards for access control management"
        ],
        correctOption: 1,
        points: 20,
    },
    {
        "id": 321,
        "question":"What advantage does React Query provide in large apps?",
        "options": [
            "Server state caching and synchronization across components",
            "Prevents re-rendering by removing dependency arrays",
            "Compiles React code into server-side JavaScript",
            "Makes applications independent of REST APIs"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 322,
        "question":  "Why is caching valuable in React Query?",
        "options": [
            "Prevents storing any data in memory",
            "Allows data reuse without repeated server requests",
            "Replaces need for hooks like useState",
            "Automatically generates UI components for display"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 323,
        "question":"How does caching improve performance over plain fetch?",
        "options": [
            "Cached data enables faster UI updates and reduces unnecessary network requests",
            "Caching removes the need for APIs in web applications",
            "Caching only stores styles for components, not data",
            "Cached data replaces the need for useEffect entirely"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 324,
        "question":  "How does React Query caching enhance user experience?",
        "options": [
            "forces the UI to reload from scratch whenever new data is fetched",
            "completely prevents re-renders in all React components",
            "Keeps data instantly available while ensuring freshness",
            "converts API responses into static HTML during build time"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 325,
        "question":  "What does staleTime control in React Query?",
        "options": [
            "How long inactive queries stay in memory",
            "How often React Query clears localStorage",
            "How many components can subscribe to queries",
            "How long data remains fresh before refetching",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 326,
        "question": "What is the difference between 'staleTime' and 'cacheTime' in React Query?",
        "options": [
            "staleTime controls freshness, cacheTime controls memory duration",
            "staleTime controls data freshness, while cacheTime controls cache duration",
            "staleTime deletes data permanently, cacheTime saves it forever",
            "staleTime is for server updates, cacheTime is for local state updates",
            "staleTime only applies to mutations, cacheTime only applies to queries"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 327,
        "question": "When would you increase staleTime for queries?",
        "options": [
            "To reduce unnecessary refetches for stable data",
            "To force React Query to clear queries instantly",
            "To remove queries from cache when unmounting",
            "To automatically generate new API endpoints"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 328,
        "question": "What does useQuery hook return to components?",
        "options": [
            "Only the fetched data from server",
            "A function that must be manually called to fetch data",
            "Query state object with data, loading, error",
            "Only the error object if the request fails"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 329,
        "question":  "Which property is NOT in useQuery return object?",
        "options": [
            "data property containing fetched information",
            "isLoading boolean indicating fetch status",
            "mutate function for triggering updates",
            "isError boolean indicating failure state"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 330,
        "question":"How does useQuery output improve UI responsiveness?",
        "options": [
            "Exposes states like isLoading and isFetching for instant UI reactions",
            "automatically converting all data into static HTML at build time",
            "prevents components from re-rendering after data changes",
            "replacing the need for client-side state management libraries entirely"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 331,
        "question": "What is Strapi's primary function?",
        "options": [
            "Building frontend UI component libraries",
            "Managing content and exposing APIs as CMS",
            "Optimizing bundle size in React applications",
            "Handling client-side routing and navigation"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 332,
        "question": "Which feature distinguishes Strapi from traditional CMS?",
        "options": [
            "Provides automatic API generation with REST/GraphQL",
            "Replaces React state management libraries completely",
            "Works exclusively with serverless databases",
            "Automatically generates frontend components for display"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 333,
        "question":  "Why choose Strapi over WordPress for modern development?",
        "options": [
            "Allows complete backend control while staying frontend-agnostic",
            "comes with a pre-built frontend theme system",
            "requires no authentication for any API requests",
            " only supports static site generation"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 334,
        "question": "What differs between Strapi development and production modes?",
        "options": [
            "Development provides better security than production",
            "Production allows hot-reloading like development mode",
            "Development for local testing, production for live servers",
            "Both modes function identically in all aspects"
        ],
        "correctOption":2,
        "points": 10
    },
    {
        "id": 335,
        "question": "How does React Query maintain server synchronization?",
        "options": [
            "By automatically refetching stale data in background",
            "By manually refreshing page on every request",
            "By storing data permanently in localStorage",
            "By blocking UI updates until calls finish"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 336,
        "question":  "What mechanism keeps React Query cache fresh?",
        "options": [
            "Server-side rendering exclusively for updates",
            "Stale-while-revalidate strategy for background updates",
            "Manual refetching triggered by button clicks",
            "Long polling on every state change",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 337,
        "question":"Why is React Query efficient for server synchronization?",
        "options": [
            "Bypasses the cache and forces a fresh API call",
            "Because it synchronizes data only once when the app starts",
            "Combines cache, refetch, and dependency updates efficiently",
            "Mirrors the server database directly inside the client’s memory"
        ],
        "correctOption":2,
        "points": 30
    },
    {
        "id": 338,
        "question": "What does 'prefetching' data in React Query mean?",
        "options": [
            "Fetching data in advance before the component needs it",
            "Fetching data only after the component renders",
            "Deleting old cached data",
            "Blocking UI until all data is fetched"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 339,
        "question": "Why is prefetching useful in React Query?",
        "options": [
            "Because it reduces perceived loading time and makes the UI more responsive",
            "Because it automatically writes data to localStorage",
            "Because it removes the need for a backend API",
            "Because it disables caching for the fetched data"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 340,
        "question": "Which statement correctly describes how prefetching works in React Query?",
        "options": [
            "Prefetching loads and caches the data in advance, so when a component uses useQuery with the same key, the data is immediately available",
            "Prefetching disables caching and forces a refetch every time the component mounts",
            "Prefetching automatically converts data into static HTML",
            "Prefetching prevents the component from ever re-rendering"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 341,
        "question": "What is event bubbling in the DOM?",
        "options": [
            "Events travel from target element up to document root",
            "Events travel from document root down to target element",
            "Events execute only on the clicked element",
            "Events prevent all other handlers from executing"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 342,
        "question": "What is event capturing in the DOM?",
        "options": [
            "Events execute only on parent elements",
            "Events travel from document root down to target element",
            "Events travel from target element up to ancestors",
            "Events prevent propagation to child elements"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 343,
        "question": "In which order do event phases occur?",
        "options": [
            "Target phase, bubbling phase, capturing phase",
            "Bubbling phase, target phase, capturing phase",
            "Capturing phase, target phase, bubbling phase",
            "Target phase, capturing phase, bubbling phase"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 344,
        "question": "How do you register an event listener for capturing phase?",
        "options": [
            "element.addEventListener('click', handler, true)",
            "element.addEventListener('click', handler, false)",
            "element.addEventListener('click', handler, {bubble: false})",
            "element.addEventListener('click', handler, {capture: false})"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 345,
        "question": "What does event.stopPropagation() accomplish?",
        "options": [
            "Prevents default browser behavior for events",
            "Removes all event listeners from element",
            "Prevents event from continuing through phases",
            "Triggers event on all parent elements"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 346,
        "question": "When would you use event capturing over bubbling?",
        "options": [
            "When you need to handle events before children",
            "When you want events to execute on target only",
            "When you need to prevent all event propagation",
            "When you want to remove event listeners automatically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 347,
        "question": "What happens if you call stopPropagation() during capturing?",
        "options": [
            "Event continues to target and bubbling phases",
            "Event stops and skips target and bubbling phases",
            "Event jumps directly to bubbling phase",
            "Event executes on all elements simultaneously"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 348,
        "question": "How does event delegation utilize event bubbling?",
        "options": [
            "Attaches listeners to each individual child element",
            "Prevents events from reaching parent elements",
            "Uses parent listener to handle child events",
            "Creates separate event phases for each element"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 349,
        "question": "What is event.target in the context of bubbling?",
        "options": [
            "The element currently handling the event",
            "The element where the event originally occurred",
            "The topmost parent element in hierarchy",
            "The element that registered the event listener"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 350,
        "question": "What is event.currentTarget during event propagation?",
        "options": [
            "The document root element for all events",
            "The element where event originally occurred",
            "The element currently executing event handler",
            "The element that will handle event next"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 351,
        "question": "Why is event delegation beneficial for dynamic content?",
        "options": [
            "Eliminates need for event listeners on elements",
            "Handles events for elements added after page load",
            "Prevents events from propagating to children",
            "Automatically removes listeners when elements disappear"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 352,
        "question": "What occurs during the target phase of event propagation?",
        "options": [
            "Event travels from document to target element",
            "Event travels from target element to document",
            "Event executes handlers registered on target element",
            "Event stops propagation automatically after execution"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 353,
        "question": "How can you determine which phase an event is in?",
        "options": [
            "Check event.phase property for current phase",
            "Check event.eventPhase property for current phase",
            "Compare event.target with event.currentTarget values",
            "Use event.stopPropagation() to test behavior"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 354,
        "question": "What happens with multiple listeners on same element?",
        "options": [
            "Only the first registered listener executes",
            "Only the last registered listener executes",
            "All listeners execute in registration order",
            "Listeners execute in reverse registration order"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 355,
        "question": "What is the primary purpose of the useRef hook?",
        "options": [
            "Managing component state that triggers re-renders",
            "Storing mutable values that persist across renders",
            "Creating side effects after component renders",
            "Memoizing expensive calculations between renders"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 356,
        "question": "What happens when you update a ref's current value?",
        "options": [
            "Component re-renders automatically after update",
            "Component re-renders only on next state change",
            "Component does not re-render from ref changes",
            "Component re-renders after short delay period"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 357,
        "question": "How do you access a DOM element using useRef?",
        "options": [
            "Pass ref object to element's ref prop",
            "Call ref.current() method on element",
            "Use ref.getValue() to retrieve element",
            "Access element through ref.element property"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 358,
        "question": "When should you access ref.current in function components?",
        "options": [
            "During component render phase directly",
            "Inside useEffect or event handlers only",
            "Only during component initialization phase",
            "Anytime within component function body"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 359,
        "question": "What value does useRef return initially?",
        "options": [
            "Object with current property set to initial value",
            "Function that returns current reference value",
            "Array containing current value and setter function",
            "Promise that resolves to reference value"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 360,
        "question":  "How does useRef differ from useState when storing values across renders?",
        "options": [
            "useRef updates do not trigger re-renders, while useState updates do",
            "useRef values reset on every render, while useState persists them",
            "useRef only stores DOM nodes, while useState can store any data",
            "useRef is asynchronous, while useState is synchronous"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 361,
        "question":"What is a common use case for using useRef with timers?",
        "options": [
            "Automatically re-rendering the component when the timer completes",
            "Storing a timer ID so it can be cleared later",
            "Synchronizing multiple timers across components",
            "Replacing setTimeout with a synchronous execution"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 362,
        "question": "Why is useRef often used to store previous values in a component?",
        "options": [
            "Because useRef automatically tracks a history of values",
            "Because useRef values trigger updates when they change",
            "Because useRef stores values without causing re-renders",
            "Because useRef has built-in comparison helpers for values"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 363,
        "question": "What happens to a ref when its component unmounts?",
        "options": [
            "The ref value stays in memory until you clear it manually",
            "The ref is reset and its memory can be freed automatically",
            "Accessing the ref after unmount will throw an error",
            "The ref is passed to the parent component automatically"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 364,
        "question": "Can refs be passed to child components as props?",
        "options": [
            "Yes, refs can always be passed like any normal prop",
            "No, refs cannot be shared between components",
            "Yes, but it requires using forwardRef in the child component",
            "No, refs only work in the component where they are declared"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 365,
        "question": "What is the primary purpose of forwardRef in React?",
        "options": [
            "To create multiple refs inside a single component",
            "To allow a parent component to pass a ref to a child component",
            "To convert refs into state variables automatically",
            "To clear a ref when a component unmounts"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 366,
        "question": "When is useRef preferable over using a regular variable in a function component?",
        "options": [
            "When you need a value to persist across re-renders",
            "When you want a change in value to trigger a re-render",
            "When you need to share values between different components",
            "When you want to reset a value every time the component renders"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 367,
        "question": "What types of values can be stored in a useRef?",
        "options": [
            "Only DOM element references for direct manipulation",
            "Only primitive values like numbers and strings",
            "Any mutable value including objects, arrays, or functions",
            "Only values that implement a special React interface"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 368,
        "question":"How can you focus an input element using useRef?",
        "options": [
            "By calling inputRef.current.focus() inside an effect or event handler",
            "By calling inputRef.focus() directly during render",
            "By invoking inputRef.current() with 'focus' as a parameter",
            "By setting a 'focus' property with inputRef.setValue()"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 369,
        "question": "What is the main difference between refs and state in React?",
        "options": [
            "Refs store immutable values, while state stores mutable values",
            "Refs trigger re-renders, while state manages lifecycle events",
            "Refs persist values without re-rendering, while state updates trigger re-renders",
            "Refs only store objects, while state only stores primitive values"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 370,
        "question":"Can you attach both capturing and bubbling event listeners on the same element in React?",
        "options": [
            "Yes, bubbling listeners run before capturing listeners on the same element",
            "No, React allows only one event phase per element",
            "Yes, capturing listeners run before bubbling listeners on the same element",
            "No, attaching both phases causes runtime errors"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 371,
        "question": "What is the primary purpose of a mutation in React Query?",
        "options": [
            "To create, update, or delete server data",
            "To read server data from the cache only",
            "To render React components",
            "To automatically generate CSS styles"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 372,
        "question": "Which React Query hook is used for modifying server data?",
        "options": [
            "useQuery for fetching data",
            "useMutation for modifying server data",
            "useEffect for managing side effects",
            "useState for updating local state"
        ],
        "correctOption": 1,
    "points": 10
    },
    {
        "id": 373,
        "question":"Why use mutation callbacks like onSuccess in React Query?",
        "options": [
            "To update the cache or trigger side effects after a mutation",
            "To transform mutations into query operations",
            "To block UI updates after data changes",
            "To permanently disable caching mechanisms"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 374,
        "question": "What does offline support enable in React Query?",
        "options": [
            "Blocking all server communication permanently",
            "Automatically reloading the entire page when offline",
            "Turning queries into static file operations",
            "Queuing mutations until the network is available"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 375,
        "question": "How does React Query provide a smooth offline experience?",
        "options": [
            "By disabling all UI components",
            "By serving cached data and queuing mutations",
            "By blocking queries from executing again",
            "By converting asynchronous API calls into synchronous ones"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 376,
        "question":"Which combination supports effective offline-first behavior?",
        "options": [
            "Permanently disabling staleTime and cacheTime",
            "Managing server state only with useState",
            "Combining caching, background refetching, and mutation queuing",
            "Clearing the cache whenever the app reconnects"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 377,
        "question":  "Why is React Query valuable for managing server state?",
        "options": [
            "It automates fetching, caching, and synchronization of data",
            "It only replaces React’s useState and useEffect for local state",
            "It automatically generates UI components",
            "It completely disables all network requests"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 378,
        "question": "Which problems does React Query solve in applications?",
        "options": [
            "Automatically applying styles to components without CSS",
            "Preventing duplicate network requests and keeping server data in sync",
            "Eliminating the need for any backend APIs",
            "Allowing React apps to work entirely without state management"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 379,
        "question": "Why is manual server state management challenging?",
        "options": [
            "Because React Query is needed to create components",
            "Because it blocks component rendering completely",
            "Because caching, synchronization, and updates are complex to handle by hand",
            "Because it automatically transforms APIs between REST and GraphQL"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 380,
        "question":"How do useQuery and useMutation differ in purpose?",
        "options": [
            "useQuery styles components, useMutation handles routing",
            "useQuery manages local storage, useMutation controls authentication",
            "useQuery updates the DOM, useMutation adds event listeners",
            "useQuery fetches data, useMutation modifies data",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 381,
        "question": "Which React Query hook is mainly responsible for fetching and caching server data?",
        "options": [
            "useMutation",
            "useReducer",
            "useQuery",
            "useEffect"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 382,
        "question": "In React Query, what occurs when multiple useQuery hooks use the same queryKey?",
        "options": [
            "Each query executes independently without caching",
            "React Query shares and reuses the cached data across them",
            "It throws an error and crashes the application",
            "Only the first query runs while the others are skipped"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 383,
        "question": "Which pattern helps prevent unnecessary network requests when using useQuery?",
        "options": [
            "Use a unique queryKey with caching enabled",
            "Disable caching to always fetch fresh data",
            "Wrap useQuery inside useEffect on every render",
            "Manually trigger refetch on every component mount"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 384,
        "question":"Which practice improves efficiency when using useQuery?",
        "options": [
            "Provide unique queryKeys and leverage caching",
            "Turn off caching completely for faster updates",
            "Call useQuery only inside a useEffect hook",
            "Refetch data manually each time instead of using cache"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 385,
        "question":"Which React Query hook is used for creating, updating, or deleting server data?",
        "options": [
            "useQuery",
            "useMutation",
            "useReducer",
            "useState"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 386,
        "question":  "After a successful mutation, what is the recommended way to update cached queries?",
        "options": [
            "Reload the entire page to get fresh data",
            "Invalidate or update related query keys",
            "Reset local state manually using useState",
            "Run the same mutation again to refresh data"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 387,
        "question": "Which statement about useMutation compared to useQuery is correct?",
        "options": [
            "useMutation executes synchronously by default",
            "useMutation only works with GraphQL APIs",
            "useMutation must be triggered manually and does not run automatically",
            "useMutation cannot handle error states"
        ],
        "correctOption": 2,
        "points": 30
    },
            {
            "id": 388,
            "question": "What is the primary purpose of the queryKey in useQuery?",
                "options": [
                    "Uniquely identify queries for caching and refetching",
                    "Define the API endpoint URL",
                    "Specify the type of loading spinner to show",
                    "Configure mutation success callbacks"
                ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 389,
            "question": "In React Query, what is the difference between staleTime and cacheTime?",
            "options": [
                "staleTime defines retry attempts; cacheTime defines error persistence",
                "Both represent the same concept of cache duration",
                "staleTime determines how long data is considered fresh; cacheTime controls how long inactive data stays in memory",
                "staleTime is only used for mutations; cacheTime only for queries"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 390,
            "question":"How can you prevent a useQuery from automatically running when a component mounts?",
            "options": [
                "Remove the queryKey entirely",
                "Use useMutation instead of useQuery",
                "Disable React StrictMode in the app",
                "Set enabled: false in the query options"
            ],
            "correctOption":3,
            "points": 10
        },
        {
            "id": 391,
            "question":  "Which callback in useMutation is typically used to update the cache after a successful mutation?",
            "options": [
                "onSettled",
                "onMutate",
                "onSuccess",
                "onError"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 392,
            "question":  "Why are optimistic updates useful in useMutation?",
            "options": [
                "They automatically retry failed requests",
                "They update the UI immediately before server response",
                "They prevent memory leaks in components",
                "They enforce unique query keys"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 393,
            "question": "Which React Query function is commonly used inside a mutation's onSuccess callback to refresh relevant queries?",
            "options": [
                "resetQueries",
                "refetchQueries",
                "cancelQueries",
                "invalidateQueries"
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 394,
            "question": "What happens when multiple queries are dependent in React Query?",
            "options": [
                "They run in parallel ignoring dependencies",
                "The next query waits for previous query's data",
                "All queries share the same queryKey",
                "Dependent queries are not supported"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 395,
            "question": "Which tool helps visualize query and mutation states during development?",
            "options": [
                "Redux DevTools",
                "React Query Devtools",
                "React Profiler",
                "Apollo Studio"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 381,
            "question": "What does useQuery return in case of an error?",
            "options": [
                "Only null data",
                "An error object along with isError: true",
                "Throws a JavaScript exception",
                "Nothing is returned"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 396,
            "question": "Which option in useQuery allows background synchronization at intervals?",
            "options": [
                "cacheTime",
                "refetchInterval",
                "retry",
                "keepPreviousData"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 399,
            "question": "Which useQuery option helps with pagination to avoid blank state while fetching new data?",
            "options": [
                "enabled",
                "refetchOnWindowFocus",
                "keepPreviousData",
                "retry"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 400,
            "question": "How does React Query ensure consistency between server and client after a mutation?",
            "options": [
                "Reload the browser window automatically",
                "Automatically invalidate all cached queries",
                "Invalidate specific queries or manually refetch",
                "Clear the entire cache immediately"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 401,
            "question": "What is query invalidation in React Query?",
            "options": [
                "Marking queries stale to trigger refetch",
                "Deleting all cached data permanently",
                "Resetting all query keys globally",
                "Pausing queries until manually enabled"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 402,
            "question": "What does hydrate/dehydrate refer to in React Query?",
            "options": [
                "Saving and restoring query state for SSR",
                "Synchronizing queries with Redux store",
                "Exporting query data to JSON files",
                "Clearing memory leaks during refetch"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 403,
            "question": "What is the primary purpose of React Hook Form?",
            "options": [
                "Managing server-side data fetching",
                "Simplifying form state and validation",
                "Creating component animations",
                "Managing global application state"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 404,
            "question": "Which hook initializes a form in React Hook Form?",
            "options": [
                "useState",
                "useForm",
                "useController",
                "useReducer"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 405,
            "question": "What does the register function do in React Hook Form?",
            "options": [
                "Submits form data to server",
                "Resets all form fields",
                "Connects inputs to form state",
                "Triggers form re-rendering"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 406,
            "question": "Which function handles form submission in React Hook Form?",
            "options": [
                "useSubmit",
                "submitForm",
                "handleSubmit",
                "onSubmitHandler"
            ],
            "correctOption":2,
            "points": 10
        },
        {
            "id": 407,
            "question": "How do you apply validation rules in React Hook Form?",
            "options": [
                "Add attributes directly to input",
                "Wrap input in Validation component",
                "Pass options object to register",
                "Use useValidation hook"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 408,
            "question": "What does the errors object represent in useForm?",
            "options": [
                "List of server-side API errors",
                "Runtime errors during rendering",
                "Validation errors for form fields",
                "React component errors"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 409,
            "question": "Why is React Hook Form performant?",
            "options": [
                "Automatically fetches data from APIs",
                "Reduces re-renders with isolated reactivity",
                "Compiles forms into WebAssembly",
                "Disables validation for speed"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 410,
            "question": "Which hook controls custom components in React Hook Form?",
            "options": [
                "useController",
                "useFormContext",
                "useCustomInput",
                "useReducer"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 411,
            "question": "Which method lets you programmatically update a field’s value?",
            "options": [
                "updateField",
                "setValue",
                "patch",
                "replaceValue"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 412,
            "question": "What problem does useController solve?",
            "options": [
                "Integrating controlled components with React Hook Form",
                "Handling async validation across multiple fields",
                "Improving form styling with custom CSS",
                "Fetching form data from external APIs"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 413,
            "question": "Why does React Hook Form rely primarily on uncontrolled inputs?",
            "options": [
                "Because uncontrolled inputs validate themselves automatically",
                "Because controlled inputs are not React-compatible",
                "Because uncontrolled inputs reduce re-renders significantly",
                "Because uncontrolled inputs are easier to style"
            ],
            "correctOption":2,
            "points": 20
        },
        {
            "id": 414,
            "question": "Which option best describes the role of resolvers?",
            "options": [
                "They provide schema-based validation support",
                "They handle async form submissions automatically",
                "They manage form context across components",
                "They improve rendering performance significantly"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 415,
            "question": "Which hook reads field value without subscribing to updates?",
            "options": [
                "setValue",
                "watch",
                "getValues",
                "trigger"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 416,
            "question": "How can you implement async validation for username?",
            "options": [
                "By using watch with useEffect hook",
                "By wrapping inputs in FormProvider component",
                "By manually calling setValue in onChange",
                "By using async resolver or validate function",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 417,
            "question": "What is one key performance advantage of React Hook Form?",
            "options": [
                "It uses uncontrolled inputs reducing re-renders",
                "It automatically caches all inputs in Redux",
                "It ships smaller bundle but causes re-renders",
                "It doesn't support any validation rules"
            ],
            "correctOption": 0,
            "points": 30
        },
    {
        "id": 418,
        "question": "What is the primary purpose of the useForm hook?",
        "options": [
            "To handle component lifecycle methods",
            "To register inputs and manage form state",
            "To create global state across components",
            "To render conditional UI elements"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 419,
        "question": "Which prop must be applied for React Hook Form tracking?",
        "options": [
            "onChange",
            "value",
            "register",
            "ref"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 420,
        "question":  "What does the handleSubmit function return?",
        "options": [
            "The final form values as object",
            "A reset function for form fields",
            "Nothing, it just triggers re-renders component",
            "A callback validating inputs and triggering handler",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 421,
        "question": "How can you provide default values to a form?",
        "options": [
            "By setting value attribute directly on inputs",
            "By passing defaultValues object to useForm",
            "By calling reset after component rendering",
            "By wrapping inputs in FormProvider component"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 422,
        "question": "Which hook allows subscribing to specific field changes?",
        "options": [
            "useEffect",
            "watch",
            "useFormContext",
            "trigger"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 423,
        "question": "What is the main use of FormProvider and useFormContext?",
        "options": [
            "To style forms globally across application",
            "To share form state across nested components",
            "To reset form values automatically",
            "To connect multiple forms together"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 424,
        "question":  "Which method manually triggers validation for fields?",
        "options": [
            "reset",
            "validate",
            "trigger",
            "checkValidity"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 425,
        "question": "How do you reset all fields to initial values?",
        "options": [
            "resetForm()",
            "reset()",
            "clear()",
            "resetFields()"
        ],
        "correctOption": 1,
        "points": 20
    },
        {
            "id": 426,
            "question":  "Which option prevents query from running on mount?",
            "options": [
                "`enabled`",
                "`refetchOnMount`",
                "`refetchIntervalOnMount`",
                "`retry`"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 427,
            "question":  "Which option controls refetch on window focus?",
            "options": [
                "`enabled`",
                "`refetchOnWindowFocus`",
                "`refetchOnMount`",
                "`refetchInterval`"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 428,
            "question":"How do you poll data every 10 seconds in background?",
            "options": [
                "`refetchInterval: 10000` and `refetchIntervalInBackground: true`",
                "`refetchOnWindowFocus: true` and `refetchInterval: 10000`",
                "`enabled: true` and `refetchOnMount: always`",
                "`retry: 3` and `refetchIntervalOnMount: true`"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 429,
            "question": "What does refetchIntervalOnMount option control?",
            "options": [
                "Whether queries refetch when window regains focus",
                "Whether query starts polling immediately on mount",
                "How many retries attempted on failure",
                "Whether query data is fresh or stale"
            ],
            "correctOption": 1,
            "points": 20
        },
    {
        "id": 430,
        "question": "What happens when cached data becomes stale?",
        "options": [
            "Cached data is deleted from memory automatically",
            "Query state updates to 'stale' allowing custom effects",
            "Query immediately refetches data regardless of settings",
            "All queries in cache are reset"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 431,
        "question":  "Why is TanStack Query considered state management library?",
        "options": [
            "It allows direct modification of component state",
            "It manages server state and keeps UI synchronized",
            "It replaces Redux for all local state",
            "It automatically generates forms from API data"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 432,
        "question":"Which combination allows polling data in background?",
        "options": [
            "refetchInterval: 5000 and refetchIntervalInBackground: true",
            "staleTime: 0 and enabled: true",
            "cacheTime: 10000 and refetchOnWindowFocus: true",
            "retry: 3 and refetchOnMount: false"
        ],
        "correctOption": 0,
        "points": 20
    },
        {
            "id": 433,
            "question": "What does CRUD stand for in application development?",
            "options": [
                "Compute, Render, Upload, Deploy",
                "Create, Read, Update, Delete",
                "Check, Run, Undo, Debug",
                "Connect, Retry, Update, Deliver"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 434,
            "question": "Which of the following represents the 'Read' operation?",
            "options": [
                "Adding a new user to database",
                "Fetching a list of cabins from Supabase",
                "Changing a user's password field",
                "Deleting a cabin from system"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 435,
            "question": "Which hook is most commonly used for 'Update' operation?",
            "options": [
                "useEffect",
                "useQuery",
                "useMutation",
                "useContext"
            ],
            "correctOption": 2,
            "points": 30
        },
    {
            "id": 436,
            "question": "Which CRUD operation inserts new record into database?",
        "options": [
            "Create",
            "Read",
            "Update",
            "Delete"
        ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 437,
            "question": "Which CRUD operation retrieves data from API endpoint?",
            "options": [
                "Create",
                "Read",
                "Update",
                "Delete"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 438,
            "question": "When modifying existing user's email, which CRUD applies?",
            "options": [
                "Create",
                "Read",
                "Update",
                "Delete"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 439,
            "question": "Which CRUD action permanently removes record from database?",
            "options": [
                "Create",
                "Read",
                "Update",
                "Delete"
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 440,
            "question":"Which hook is most suitable for Create, Update, Delete?",
            "options": [
                "useEffect",
                "useState",
                "useMutation",
                "useContext"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 441,
            "question": "Which CRUD operation requires invalidating cached queries?",
            "options": [
                "Only Read",
                "Create/Update/Delete",
                "All of them",
                "None of them"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 442,
            "question":  "Why is Update often more complex than Create?",
            "options": [
                "Because it bypasses state management entirely",
                "Because it does not require validation",
                "Because it must handle existing and new values",
                "Because it always deletes old records first",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 443,
            "question": "What does TypeScript mainly add to JavaScript?",
            "options": [
                "Server-side rendering capabilities",
                "Static type checking",
                "Automatic UI rendering",
                "Database connectivity"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 444,
            "question":"Which of the following will TypeScript flag as error?",
            "options": [
                "let age: number = 30;",
                "age = 40;",
                "age = 'thirty';",
                "console.log(age);"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 445,
            "question":  "Why does TypeScript check function parameter types?",
            "options": [
                "To optimize runtime performance automatically",
                "To prevent passing arguments of incorrect type",
                "To convert JavaScript code to HTML",
                "To automatically fetch data from APIs"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 446,
            "question": "Which of these will TypeScript catch?",
            "options": [
                "Accessing non-existent property on object",
                "Logic errors in sorting algorithms",
                "Network request failures at runtime",
                "CSS styling errors in components"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 447,
            "question": "How does TypeScript handle null in string variable?",
            "options": [
                "It ignores the value completely",
                "It treats undefined as zero value",
                "It automatically converts null to empty string",
                "It throws compile error if strict mode enabled",
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 448,
            "question": "Why is TypeScript helpful in large React projects?",
            "options": [
                "It reduces runtime errors and improves productivity",
                "It automatically styles all React components",
                "It replaces Redux for state management",
                "It converts JSX to HTML directly"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 449,
            "question":  "Which TypeScript feature prevents incorrect object shapes?",
            "options": [
                "Interfaces and type annotations",
                "React hooks for state",
                "Async/await syntax",
                "CSS modules system"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 450,
            "question": "What kind of errors does TypeScript detect before runtime?",
            "options": [
                "Runtime network connection errors",
                "Compile-time type mismatches",
                "CSS styling layout mistakes",
                "User input validation errors"
            ],
            "correctOption": 1,
            "points": 10
        },
    {
        "id": 451,
        "question": "Which of the following will TypeScript catch during development?",
        "options": [
            "Accessing property that doesn't exist on objects",
            "Logic errors in complex sorting algorithms",
            "API response failures during runtime execution",
            "Broken HTML layout and structure issues"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 452,
        "question": "Why is detecting errors at compile-time useful?",
        "options": [
            "Generates CSS styles for components automatically",
            "Prevents runtime crashes improving code reliability",
            "Reduces network latency improving page speed",
            "Automatically fetches data from external APIs",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 453,
        "question": "Which scenario is a compile-time error TypeScript detects?",
        "options": [
            "Server not responding to network requests",
            "Button element not triggering click events",
            "Calling function with incorrect argument types",
            "User entering wrong login credentials"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 454,
        "question": "Which TypeScript feature ensures errors before runtime?",
        "options": [
            "React hooks implementation",
            "Static type checking system",
            "CSS modules integration",
            "Browser developer tools"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 455,
        "question": "At which stage does TypeScript execute type checks?",
        "options": [
            "During runtime execution in browser",
            "During compilation before code runs",
            "After deployment to production server",
            "When user interacts with UI elements"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 456,
        "question": "Why is React Hook Form popular among developers?",
        "options": [
            "Automatically generates CSS for form elements",
            "Provides performant form state management",
            "Replaces Redux for all state management",
            "Converts forms to server-side code"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 457,
        "question": "Why does React Hook Form trigger fewer re-renders?",
        "options": [
            "Uses uncontrolled inputs reducing re-renders",
            "Automatically batches all network requests",
            "Only works with functional components",
            "Converts inputs to server variables"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 458,
        "question": "In React forms, what is a controlled component?",
        "options": [
            "Component managing its own internal state",
            "Component fetching data from APIs automatically",
            "Component where React controls input value",
            "Component that cannot receive any props"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 459,
        "question": "What is best practice for showing validation errors?",
        "options": [
            "Show all error messages on mount",
            "Use touchedFields after user interaction",
            "Display errors only after submission",
            "Manually track blur with useState"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 460,
        "question": "Which is best practice for error messages in forms?",
        "options": [
            "Manually implement blur tracking",
            "Show all errors immediately on mount",
            "Show errors only after form submission",
            "Use touchedFields after user interaction",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 461,
        "question": "Why does using onTouched improve user experience?",
        "options": [
            "Prevents unnecessary component re-renders",
            "Disables inputs until form submission",
            "Shows errors only after user interaction",
            "Automatically fixes all validation rules"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 462,
        "question": "Why use spread operator with register function?",
        "options": [
            "Copies only the input value property",
            "Passes all necessary props automatically",
            "Removes need for validation rules",
            "Prevents React from re-rendering input"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 463,
        "question": "What happens if you use register without spreading?",
        "options": [
            "Nothing changes, form works the same",
            "TypeScript throws error but works fine",
            "Input won't connect to form state",
            "Automatically infers validation rules"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 464,
        "question": "Which best describes what ...register does?",
        "options": [
            "Spreads only validation rules to component",
            "Adds custom hook into component props",
            "Spreads handlers and validation rules",
            "Overrides default HTML element attributes"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 465,
        "question": "What is the main idea of Render Props pattern?",
        "options": [
            "Passing JSX elements as component props",
            "Passing function as prop controlling render",
            "Rendering props automatically inside DOM",
            "Using context API to render props"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 466,
        "question": "Which best demonstrates the Render Props pattern?",
        "options": [
            "<DataProvider><Child /></DataProvider>",
            "<DataProvider render={data => <Child data={data} />} />",
            "<Child data={useData()} />",
            "<Provider><Consumer>{value => <Child value={value} />}</Consumer></Provider>"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 467,
        "question": "Why has Render Props usage decreased in recent years?",
        "options": [
            "No longer supported in React 18 version",
            "Hooks provide simpler way to share logic",
            "Context API completely replaced the pattern",
            "Caused errors in React strict mode"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 468,
        "question": "What is main purpose of Compound Component Pattern?",
        "options": [
            "Bundle multiple components into single file",
            "Allow related components work together unified",
            "Reduce size of final JavaScript bundle",
            "Avoid writing any props in child components"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 469,
        "question": "Which technique shares state in Compound Component Pattern?",
        "options": [
            "Prop drilling through component tree",
            "React Context for state sharing",
            "Redux store for global state",
            "Direct DOM manipulation methods"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 470,
        "question": "Why prefer compound components over single component?",
        "options": [
            "Makes API more flexible and declarative",
            "Reduces need for TypeScript typings",
            "Automatically optimizes rendering performance",
            "Eliminates need for CSS styling"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 471,
        "question": "What problem does Compound Component Pattern solve?",
        "options": [
            "Reduces JSX nesting making UI flat",
            "Avoids hard-coding giving flexibility",
            "Ensures better tree-shaking during build",
            "Automatically memoizes all child components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 472,
        "question": "How do children access parent state in Compound Component pattern?",
        "options": [
            "Calling function exported from parent",
            "Reading from global variables directly",
            "Through React Context and useContext",
            "Importing parent hook directly"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 473,
        "question": "Why is React Portal often used for Modal?",
        "options": [
            "Replaces need for CSS styling modals",
            "Renders modal outside root DOM hierarchy",
            "Improves server-side rendering performance",
            "Automatically closes modal on route changes"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 474,
        "question": "What problem does rendering Modal with Portal solve?",
        "options": [
            "Ensures modal always centered on screen",
            "Avoids z-index and overflow issues",
            "Allows modal to manage own state",
            "Improves performance of large trees"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 475,
        "question": "What is main purpose of React Portal for modals?",
        "options": [
            "Reduces number of modal re-renders",
            "Renders modal outside parent DOM hierarchy",
            "Improves performance of state updates",
            "Automatically adds animations to modal"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 476,
        "question": "Where is modal typically rendered using React Portal?",
        "options": [
            "Inside closest parent component directly",
            "Directly in component tree of App",
            "In separate DOM node like modal-root",
            "In virtual DOM but not real DOM"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 477,
        "question": "Why is Portal beneficial for modals regarding CSS?",
        "options": [
            "Automatically sets modal's z-index property",
            "Avoids overflow hidden and stacking issues",
            "Converts modal styles into inline styles",
            "Removes need for CSS classes entirely"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 478,
        "question": "Which React method is used to render into Portal?",
        "options": [
            "ReactDOM.render()",
            "React.createElement()",
            "ReactDOM.createPortal()",
            "usePortal()"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 479,
        "question": "What is important for accessibility in Portal Modal?",
        "options": [
            "Rendering modal with useEffect hook",
            "Ensuring modal has random ID assigned",
            "Applying inline styles only to elements",
            "Making sure focus trapped inside modal",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 480,
        "question": "What is prefetching in React Query?",
        "options": [
            "Fetching data only after component renders",
            "Fetching data before components need it",
            "Deleting cached data to free memory",
            "Blocking UI updates until data loads"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 481,
        "question": "What is primary benefit of prefetching data?",
        "options": [
            "Automatically writes data to localStorage",
            "Reduces loading time improving responsiveness",
            "Eliminates need for backend API calls",
            "Disables caching for better performance"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 482,
        "question": "How does prefetching work with React Query caching?",
        "options": [
            "Prefetching bypasses cache forcing fresh requests",
            "Prefetching converts data into static HTML",
            "Prefetching loads and caches for instant use",
            "Prefetching prevents components from re-rendering"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 483,
        "question": "Which method is used to prefetch queries manually?",
        "options": [
            "queryClient.prefetchQuery() with query config",
            "useQuery() with prefetch parameter set true",
            "usePrefetch() hook in component body",
            "React.prefetch() with query key and function"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 484,
        "question": "When should you typically implement prefetching?",
        "options": [
            "After user already navigated to page",
            "Before user likely needs data soon",
            "Only when network connection very slow",
            "During component unmounting for cleanup"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 485,
        "question": "What happens when component uses useQuery after prefetch?",
        "options": [
            "useQuery ignores prefetched data and refetches",
            "useQuery throws error if data was prefetched",
            "useQuery immediately returns cached data",
            "useQuery waits for prefetch to complete"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 486,
        "question": "How can you prefetch data on user hover events?",
        "options": [
            "Use onMouseEnter event triggering prefetchQuery",
            "Use onClick event to start prefetching",
            "Use onLoad event when component mounts",
            "Use onScroll event when user scrolls"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 487,
        "question": "What is difference between prefetching and preloading?",
        "options": [
            "Prefetching loads data, preloading components",
            "Prefetching automatic, preloading is manual",
            "Prefetching blocks render, preloading async",
            "Prefetching and preloading are identical"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 488,
        "question": "Can you prefetch queries with different parameters?",
        "options": [
            "No, prefetching works with static queries",
            "Yes, by passing different keys and functions",
            "No, parameters must match original exactly",
            "Yes, but only primitive types work"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 489,
        "question": "What happens to prefetched data that goes unused?",
        "options": [
            "Data remains cached until cacheTime expires",
            "Data immediately deleted after prefetch completes",
            "Data causes memory leaks if unused",
            "Data automatically converts to localStorage"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 490,
        "question": "How does prefetching improve user navigation experience?",
        "options": [
            "Makes pages load instantly when navigating",
            "Prevents users navigating to invalid routes",
            "Automatically updates browser history for users",
            "Reduces server load by caching data"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 491,
        "question": "What is potential downside of excessive prefetching?",
        "options": [
            "Improves performance increasing code complexity",
            "Loads unnecessary data wasting bandwidth",
            "Makes React Query cache unusable",
            "Prevents normal useQuery hooks working"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 492,
        "question": "Can prefetching work with mutations in React Query?",
        "options": [
            "Yes, mutations can prefetch like queries",
            "No, prefetching only applies to reads",
            "Yes, but mutations execute immediately",
            "No, mutations require user interaction"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 493,
        "question": "How do you prefetch data during application startup?",
        "options": [
            "Use prefetchQuery in main useEffect",
            "Call prefetchQuery directly in module",
            "Use prefetchQuery inside render function",
            "Prefetching cannot occur during startup"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 494,
        "question": "What is relationship between prefetching and staleTime?",
        "options": [
            "Prefetching and staleTime work independently",
            "Prefetched data respects staleTime settings",
            "Prefetching ignores staleTime always refetches",
            "Prefetching automatically sets staleTime zero"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 495,
        "question": "How does prefetching improve pagination user experience?",
        "options": [
            "Automatically updates page URLs in history",
            "Loads next page data before clicking",
            "Prevents users navigating to invalid pages",
            "Reduces total number of pages dataset"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 496,
        "question": "When should you prefetch next page in pagination?",
        "options": [
            "Only after user clicks next button",
            "When application startup loading all pages",
            "When current page data finishes loading",
            "Only when user hovers pagination controls"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 497,
        "question": "What is common strategy for pagination prefetching?",
        "options": [
            "Prefetch all pages at application startup",
            "Prefetch only previous pages for navigation",
            "Prefetch next few pages while viewing",
            "Prefetch random pages to improve performance"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 498,
        "question": "How do you prefetch next page data?",
        "options": [
            "queryClient.prefetchQuery with next page parameters",
            "useQuery with prefetch option set true",
            "usePagination hook with automatic prefetching",
            "React.prefetch with page number and data"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 499,
        "question": "What happens when user navigates to prefetched page?",
        "options": [
            "Page loads instantly from cache without loading",
            "Page ignores cache and refetches data",
            "Page throws error if prefetched expired",
            "Page waits for prefetch operation completion"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 500,
        "question": "Should you prefetch all pages in large datasets?",
        "options": [
            "Yes, but only for datasets under pages",
            "No, prefetching only works for singles",
            "Yes, prefetching all pages improves performance",
            "No, this wastes bandwidth and memory"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 500,
        "question": "Should you prefetch all pages in large datasets?",
        "options": [
            "Yes, but only for datasets under pages",
            "No, prefetching only works for singles",
            "Yes, prefetching all pages improves performance",
            "No, this wastes bandwidth and memory"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 501,
        "question": "How can you implement smart pagination prefetching?",
        "options": [
            "Prefetch based on user scrolling patterns",
            "Prefetch all pages when component mounts",
            "Prefetch only when network connection is fast",
            "Prefetch randomly to distribute server load"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 502,
        "question": "What is the benefit of prefetching previous pages?",
        "options": [
            "Allows instant back navigation for users",
            "Prevents data corruption in pagination state",
            "Reduces server load by caching responses",
            "Eliminates need for pagination controls completely"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 503,
        "question": "How do you handle prefetching with dynamic page sizes?",
        "options": [
            "Use fixed page size for all prefetch operations",
            "Calculate correct offset and limit for each page",
            "Disable prefetching when page sizes change",
            "Prefetch entire dataset regardless of page size"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 504,
        "question": "What should you consider when prefetching pagination data?",
        "options": [
            "User's network speed and data usage patterns",
            "Total number of components in application",
            "Browser compatibility with prefetch features",
            "Server response time for authentication requests"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 505,
        "question": "How does infinite scrolling relate to prefetching?",
        "options": [
            "Infinite scroll eliminates need for prefetching",
            "Infinite scroll conflicts with prefetching mechanisms",
            "Infinite scroll automatically prefetches next batch",
            "Infinite scroll only works without prefetching"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 506,
        "question": "What happens to prefetched pagination data when filters change?",
        "options": [
            "Prefetched data remains valid for new filters",
            "Prefetched data automatically updates with filters",
            "Prefetched data prevents filter changes from working",
            "Prefetched data becomes stale and needs refetching",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 507,
        "question": "How can you optimize prefetching for mobile users?",
        "options": [
            "Disable prefetching completely on mobile devices",
            "Prefetch more aggressively on mobile connections",
            "Reduce prefetch amount and respect data usage",
            "Use same prefetching strategy as desktop"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 508,
        "question": "What is background prefetching in paginated data?",
        "options": [
            "Prefetching that occurs without user interaction",
            "Prefetching that changes page background colors",
            "Prefetching that runs on server side",
            "Prefetching that works only in background tabs"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 509,
        "question": "How do you balance prefetching with performance?",
        "options": [
            "Prefetch unlimited pages for best performance",
            "Prefetch strategically based on usage patterns",
            "Disable prefetching to maximize performance",
            "Prefetch only during low network usage"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 510,
        "question": "What does server-side rendering (SSR) mean?",
        "options": [
            "Rendering HTML in the browser after fetching all JavaScript",
            "Rendering the initial HTML on the server before sending it to the client",
            "Loading all data and rendering dynamically on the client only",
            "Using APIs to update content after the page is loaded"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 511,
        "question": "What does client-side rendering (CSR) mean?",
        "options": [
            "The server generates the entire HTML and sends it to the browser",
            "Rendering happens on both server and client at the same time",
            "HTML is generated by CDN before the client request",
            "The browser downloads JavaScript and builds the UI on the client",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 512,
        "question": "What is the main drawback of client-side rendering?",
        "options": [
            "It does not support CSS styling properly",
            "It prevents dynamic interactivity with APIs",
            "It reduces SEO effectiveness and delays first paint",
            "It blocks user input during rendering"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 513,
        "question": "Why is client-side rendering often slower than server-side rendering?",
        "options": [
            "Because JavaScript must be downloaded and executed before rendering",
            "Because HTML is pre-rendered before being sent to the browser",
            "Because all resources are cached locally before first paint",
            "Because server responses arrive faster than assets"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 514,
        "question": "What is a 'request waterfall' in client-side rendering?",
        "options": [
            "A sequence of dependent network requests delaying page render",
            "A series of API requests made one after another instead of in parallel",
            "A rendering issue where resources block each other during load",
            "A browser mechanism that preloads scripts to prevent render delay"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 515,
        "question": "Why is server-side rendering generally faster than client-side rendering?",
        "options": [
            "Because it skips network requests entirely",
            "Because the server sends ready-to-display HTML to the browser",
            "Because it avoids sending JavaScript to the client",
            "Because it caches static pages in the browser"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 516,
        "question": "When does data fetching occur in SSR?",
        "options": [
            "After the browser finishes executing JavaScript",
            "During the hydration phase on the client",
            "Before rendering the HTML on the server",
            "Only after user interaction"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 517,
        "question": "Why is SSR less interactive compared to CSR?",
        "options": [
            "Because it delays JavaScript execution until after HTML load",
            "Because it doesn’t send CSS files with HTML",
            "Because it blocks user input entirely",
            "Because it doesn’t support routing between pages"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 518,
        "question": "What does 'hydration' mean in SSR and CSR context?",
        "options": [
            "Re-rendering static HTML with JavaScript to make it interactive",
            "Caching all static assets before page load",
            "Synchronizing CSS styles between server and client",
            "Removing unused HTML nodes from the DOM",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 519,
        "question": "Why does Next.js hydrate server-rendered content on the client?",
        "options": [
            "To improve SEO by removing dynamic JavaScript",
            "To replace all HTML with new client-side markup",
            "To add interactivity to the pre-rendered HTML",
            "To reset the DOM structure after first paint"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 520,
        "question": "Which rendering approach provides better SEO results?",
        "options": [
            "Client-side rendering (CSR)",
            "Dynamic rendering using APIs",
            "Static site rendering only",
            "Server-side rendering (SSR)",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 521,
        "question": "A content-driven website like a blog is best suited for which rendering approach?",
        "options": [
            "Server-side rendering (SSR)",
            "Client-side rendering (CSR)",
            "Streaming rendering",
            "WebAssembly-based rendering"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 522,
        "question": "Why is SEO especially important for content-driven websites?",
        "options": [
            "Because they rely on client-side routing for navigation",
            "Because their visibility depends on search engine indexing",
            "Because SEO improves JavaScript bundle size",
            "Because SSR reduces interactivity on such sites"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 523,
        "question": "Which rendering method is ideal for building highly interactive web applications?",
        "options": [
            "Server-side rendering (SSR)",
            "Static site generation (SSG)",
            "Client-side rendering (CSR)",
            "Incremental static regeneration (ISR)"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 524,
        "question": "What do SSG and ISR stand for in Next.js?",
        "options": [
            "Server-Side Generation and Internal State Rendering",
            "Static Style Guide and Instant Script Rendering",
            "Static Site Generation and Incremental Static Regeneration",
            "Synchronous Server Generation and Immediate Script Rendering"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 525,
        "question": "What is the difference between static and dynamic rendering?",
        "options": [
            "Static rendering requires APIs, dynamic rendering does not",
            "Static rendering happens at build time, dynamic rendering happens per request",
            "Both occur during client-side hydration",
            "Dynamic rendering generates pages once during build"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 526,
        "question": "What does the Largest Contentful Paint (LCP) metric measure?",
        "options": [
            "The time taken to render the largest visible element on the screen",
            "The total JavaScript execution time",
            "The delay before first user interaction",
            "The number of images loaded in the viewport"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 527,
        "question": "What does the First Paint metric represent?",
        "options": [
            "The time when the main content becomes visible",
            "The time until all images and fonts are loaded",
            "The time when the browser first renders any content to the screen",
            "The time when interactivity becomes available",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 528,
        "question": "In SSR, how are data fetching and rendering performed?",
        "options": [
            "Data is fetched on the client after HTML is rendered",
            "Data is fetched on the server and rendered before sending HTML",
            "Data is embedded as JSON for client rendering only",
            "No data fetching occurs during SSR"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 529,
        "question": "In CSR, when does data fetching occur relative to rendering?",
        "options": [
            "Before HTML generation on the server",
            "During hydration phase after SSR",
            "Immediately when page loads from cache",
            "After the component mounts on the client",
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 530,
        "question": "Why is SSR useful for content-heavy websites with large media?",
        "options": [
            "Because it improves Largest Contentful Paint by sending ready HTML",
            "Because it delays image loading until user scrolls",
            "Because it eliminates JavaScript completely",
            "Because it hides content from crawlers for performance"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 531,
        "question": "How does a website remain interactive for users in SSR?",
        "options": [
            "By re-rendering all pages on the server every second",
            "By keeping all logic in static HTML files",
            "Through client-side hydration that enables JavaScript interactivity",
            "By disabling JavaScript execution entirely"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 532,
        "question": "What makes a web app interactive after loading?",
        "options": [
            "HTML parsing before CSS application",
            "Server-rendered HTML without scripts",
            "Optimized image compression and caching",
            "JavaScript execution that binds events and updates the DOM",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 533,
        "question": "What does hydration do in server-side rendered React applications?",
        "options": [
            "It removes unused HTML elements from the DOM",
            "It reattaches event handlers and interactivity to static HTML",
            "It sends HTML from client to server for validation",
            "It rebuilds the entire UI without using existing markup"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 534,
        "question": "The phrase “watering the dry HTML” refers to what in SSR context?",
        "options": [
            "Reapplying styles after CSS-in-JS rendering",
            "Adding animations after page load",
            "Reconnecting interactivity and event handlers via hydration",
            "Replacing server-rendered content with new markup"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 535,
        "question": "What must React ensure before adopting the server-rendered DOM during hydration?",
        "options": [
            "The client component tree matches the server-rendered HTML structure",
            "The HTML document includes external JavaScript files",
            "The CSS styles are loaded before React initializes",
            "The page uses browser APIs to rebuild the DOM"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 536,
        "question": "What happens if the client-rendered component tree differs from the server-rendered DOM?",
        "options": [
            "Hydration fails and React re-renders the component tree from scratch",
            "React automatically adjusts the DOM to match the server output",
            "The mismatch is ignored, and UI updates normally",
            "The server sends updated HTML to fix the issue"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 537,
        "question": "Which of the following is a common cause of hydration errors?",
        "options": [
            "Correctly nested HTML elements",
            "Using identical data on server and client",
            "Accessing browser-only APIs during server rendering",
            "Disabling JavaScript execution on client"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 538,
        "question": "Why does incorrect HTML nesting lead to hydration mismatches?",
        "options": [
            "Because React cannot attach events to deeply nested elements",
            "Because the actual DOM differs structurally from React’s virtual DOM",
            "Because the browser blocks nested element rendering",
            "Because React skips hydration for child nodes"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 539,
        "question": "How can using different data between server and client affect hydration?",
        "options": [
            "It delays hydration until data matches",
            "It causes React to discard existing HTML and rebuild the DOM",
            "It improves hydration speed",
            "It triggers rehydration of the same content repeatedly"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 540,
        "question": "Which best practice helps avoid hydration errors in Next.js apps?",
        "options": [
            "Wrap all components in useEffect hooks for hydration",
            "Disable JavaScript on the client for static rendering",
            "Render data differently on server and client for flexibility",
            "Avoid using browser-only APIs like window or document during SSR",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
            "id": 541,
            "question": "What best describes Next.js in relation to React?",
            "options": [
                "A standalone JavaScript library for DOM manipulation",
                "A meta-framework built on top of React for web applications",
                "A database engine designed for React components",
                "A CSS preprocessor used with React"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 542,
            "question": "What does it mean that Next.js is an opinionated framework?",
            "options": [
                "It enforces a specific set of conventions for building React apps",
                "It restricts the use of JavaScript and JSX syntax",
                "It prevents developers from using React hooks directly",
                "It automatically converts all React code into static HTML"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 543,
            "question": "Which statement best explains why Next.js is called a meta-framework?",
            "options": [
                "It converts React into a server-only framework",
                "It removes the need for React components entirely",
                "it replaces React's component model with template files",
                "It provides a higher-level structure built around React’s ecosystem",
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 544,
            "question": "Which of the following is NOT a key feature of Next.js?",
            "options": [
                "File-based routing conventions",
                "Server-side rendering and static generation",
                "CSS-only component styling system",
                "Server-side data fetching and mutation"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 545,
            "question": "What advantage does Next.js provide over plain React for full-stack development?",
            "options": [
                "It removes the need to write any server-side code at all",
                "It integrates server-side rendering, routing, and data fetching into one framework",
                "It guarantees no JavaScript will be sent to the client",
                "It automatically generates database schemas from components"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 546,
            "question": "Which of the following React features require framework-level integration provided by Next.js?",
            "options": [
                "Suspense, Server Components, and Server Actions",
                "State management using useState and useEffect",
                "Styling with CSS Modules and inline styles",
                "DOM manipulation with document.querySelector"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 547,
            "question": "What does 'file-based routing' in Next.js refer to?",
            "options": [
                "Manually defining routes in a central routing configuration",
                "Routing structure automatically generated from the filesystem",
                "Routing based on URL query parameters only",
                "Using server middleware for navigation"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 548,
            "question": "Which rendering types are supported by Next.js out of the box?",
            "options": [
                "Only client-side rendering and static generation",
                "Server-side rendering (dynamic and static) and client-side rendering",
                "Only static generation at build time",
                "Server-only rendering without client hydration support"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 549,
            "question": "How does Next.js handle data fetching compared to plain React?",
            "options": [
                "Next.js allows fetching and mutating data directly on the server before rendering",
                "Next.js requires all data fetching to happen on the client only",
                "Next.js uses Redux for all data operations",
                "Next.js prevents using asynchronous operations in components"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 560,
            "question": "What is a major benefit of Next.js optimizations?",
            "options": [
                "Automatically converting JavaScript into a native mobile app",
                "Removing the need to minify or bundle any client assets",
                "Improved performance and SEO through pre-rendering and smart caching",
                "Enforcing a single large client bundle for easier caching"
            ],
            "correctOption": 2,
            "points": 30
        },
    {
        "id": 561,
        "question": "Which approach is recommended for navigating between internal pages in a Next.js application?",
        "options": [
            "Using standard <a> tags for internal links",
            "Using window.location.href assignments for navigation",
            "Using the Next.js <Link> component for client-side transitions",
            "Using only form submissions to change pages"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 562,
        "question": "Why should you generally avoid using the <a> tag for internal navigation in Next.js?",
        "options": [
            "Because <a> prevents server-side rendering from working",
            "Because <a> triggers a full page reload, bypassing Next.js client-side routing",
            "Because <a> cannot include CSS classes for styling",
            "Because <a> automatically disables JavaScript execution",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 563,
        "question": "Why is using the Next.js <Link> component recommended over a standard <a> tag for internal navigation?",
        "options": [
            "It prefetches linked routes and enables fast client-side navigation",
            "It automatically converts HTML into server-rendered pages",
            "It disables JavaScript execution to speed up navigation",
            "It ensures external links are opened in a new browser window"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 564,
        "question": "Do pages in Next.js automatically refetch data when a user revisits them?",
        "options": [
            "Only pages using static generation refetch data automatically",
            "Yes, Next.js always refetches data for every navigation",
            "No, pages served from the client cache",
            "Yes, but only when navigating through the browser’s back button"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 565,
        "question": "What is the main purpose of the layout file in a Next.js application?",
        "options": [
            "To handle API requests and server-side logic for each route",
            "To manage client-side routing and navigation between pages",
            "To define global page structure and shared UI elements across routes",
            "To store metadata and SEO configurations for dynamic routes"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 566,
        "question": "What is the main purpose of page metadata in Next.js?",
        "options": [
            "To manage internal navigation between pages in the application",
            "To store configuration data such as user settings or global variables",
            "To define SEO-related information such as title and description for each page",
            "To handle background data fetching and caching before rendering"
        ],
        "correctOption": 2,
        "points": 30
    },
        {
            "id": 567,
            "question": "Which statement correctly describes a Client Component in Next.js?",
            "options": [
                "To handle user interactions and local state within the component",
                "To fetch data on the server and send pre-rendered HTML to the client",
                "To render static content without JavaScript on the client",
                "To generate page metadata for SEO at build time"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 568,
            "question": "Which statement about Server Components is true?",
            "options": [
                "To fetch data using async/await and render on the server",
                "To manage client-side local state with useState",
                "To handle click events and interactive forms",
                "To require JavaScript for rendering on the client"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 569,
            "question": "Which rule applies when passing props from a Server Component to a Client Component?",
            "options": [
                "To pass only serializable values, avoiding functions or class instances",
                "To pass useState hooks directly to maintain local reactivity",
                "To pass any component references without serialization",
                "To pass client-side event handlers to Server Components"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 570,
            "question": "Which scenario requires lifting state up in Next.js?",
            "options": [
                "To render static Server Components without interactivity",
                "To share local state between multiple Client Components",
                "To fetch data only at build time using SSG",
                "To generate metadata for SEO without user interaction"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 571,
            "question": "Which behavior correctly describes when a Client Component re-renders?",
            "options": [
                "To re-render only when navigation occurs",
                "To re-render when sibling Server Components update",
                "To re-render on every server data fetch automatically",
                "To re-render on local state or prop changes within the component",
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 572,
            "question": "Which of the following is NOT suitable for a Server Component?",
            "options": [
                "To fetch data from an API using async/await function",
                "To manage interactive form inputs and local state",
                "To render static content for SEO",
                "To output pre-rendered HTML to the client"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 573,
            "question": "Which import restriction is true for Client Components?",
            "options": [
                "To import any Server or Client Component without restriction",
                "To import Server Components but not Client Components",
                "To import only static JSON or HTML files",
                "To import only other Client Components ",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 574,
            "question": "Which statement about Server Components and Client Components is NOT true?",
            "options": [
                "To Server Components cannot automatically re-render on Client Component state changes",
                "To Server Components can render both Server and Client Components passed as props",
                "To Client Components can handle local state and interactivity",
                "To Client Components are preferred for pre-rendering SEO content"
            ],
            "correctOption": 3,
            "points": 30
        },
    {
        "id": 575,
        "question": "Which of the following is NOT a common problem with Client-Side Rendering (CSR)?",
        "options": [
            "Slower initial page load due to JavaScript execution",
            "Longer time to interactive on slower devices",
            "Reduced SEO performance because content loads after hydration",
            "Better accessibility for search engine crawlers and static tools",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 576,
        "question": "Which of the following is NOT a common limitation of Server-Side Rendering (SSR)?",
        "options": [
            "Higher server load due to rendering pages on each request",
            "Slower time to first byte for complex pages",
            "Automatic client-side interactivity without hydration",
            "Longer deployment complexity for dynamic applications"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 577,
        "question": "In which rendering method does the UI behave like a function where state changes trigger re-renders?",
        "options": [
            "Server-Side Rendering (SSR), because server sends updated HTML on each state change",
            "Client-Side Rendering (CSR), because state updates directly trigger component re-renders",
            "Static Site Generation (SSG), because pages are pre-built and do not respond to state",
            "Incremental Static Regeneration (ISR), because state is only updated periodically"
        ],
        "correctOption":1,
        "points": 20
    },
    {
        "id": 578,
        "question": "In React or Next.js, what does it mean when we say 'UI behaves like a function'?",
        "options": [
            "The UI executes server-side functions to fetch new HTML each time",
            "The UI stores all application data and acts as a database",
            "The UI is a representation of state and props, automatically updating when data changes",
            "The UI does not change even if state or props update",
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 579,
        "question": "How does UI behave differently in CSR versus SSR regarding state and data?",
        "options": [
            "In CSR, UI updates based on component state; in SSR, UI is generated from server-provided data",
            "In CSR, UI is static and does not react to state; in SSR, UI updates automatically on client",
            "In CSR, UI fetches server data for every render; in SSR, UI relies on local state only",
            "In CSR, UI and server data are identical; in SSR, state drives all interactions"
        ],
        "correctOption": 0,
        "points": 30
    },
        {
            "id": 580,
            "question": "What is the main purpose of React Server Components (RSC)?",
            "options": [
                "To replace all client-side components with server-rendered HTML and eliminate any client-side interactivity entirely, forcing users to rely only on server responses",
                "To allow rendering some components entirely on the server, reducing client bundle size and enabling full-stack patterns",
                "To automatically convert all frontend JavaScript logic into backend APIs without any developer intervention or framework setup",
                "To disable React hooks in client components completely for performance improvements, preventing state and effects from being used in interactive components"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 581,
            "question": "Which of the following best describes a Client Component in React Server Components architecture?",
            "options": [
                "A regular component that runs on the client and is created using the 'use client' directive",
                "A component that only executes on the server and does not appear in the client bundle",
                "A component that automatically fetches data from the server without rendering",
                "A component that disables interactivity and only renders static HTML"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 582,
            "question": "Which statement is TRUE about Server Components in RSC architecture?",
            "options": [
                "They are rendered only on the server and do not increase client bundle size",
                "They are rendered on both client and server simultaneously",
                "They require the 'use client' directive to function",
                "They always include JavaScript in the client bundle for hydration"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 583,
            "question": "Are React Server Components active by default in new React apps like Vite?",
            "options": [
                "Yes, but only if 'use server' directive is added to every component",
                "No, React Server Components are deprecated in modern frameworks",
                "Yes, they are enabled automatically in all React apps",
                "No, they need to be implemented via frameworks like Next.js App Router",
            ],
            "correctOption": 3,
            "points": 20
        },
    {
        "id": 584,
        "question": "Which of the following components in Next.js should be Client Components rather than Server Components?",
        "options": [
            "To a component that handles user interactions like clicks and input forms",
            "To a component that only fetches and displays data from a database",
            "To a component that renders static content with no interactivity",
            "To a component that outputs metadata for SEO purposes"
        ],
        "correctOption": 0,
        "points": 30
    },
        {
            "id": 585,
            "question": "Which behavior correctly describes when a Client Component re-renders in Next.js?",
            "options": [
                "To re-render automatically on server-side data fetch completion",
                "To re-render only when the URL changes due to navigation",
                "To re-render on local state or prop changes inside the component",
                "To re-render when any parent Server Component updates"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 586,
            "question": "Which statement about Server Components is accurate regarding data fetching?",
            "options": [
                "To fetch data and update local state on every user interaction",
                "To fetch data only on the client side using hooks",
                "To fetch data using async/await directly in the component",
                "To prevent fetching data entirely and only render static HTML"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 587,
            "question": "When passing props from a Server Component to a Client Component, which restriction applies?",
            "options": [
                "To pass state hooks directly for automatic reactivity",
                "To pass client-side event handlers for server processing",
                "To pass any component instance without serialization",
                "To pass only serializable data, avoiding functions or classes",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 588,
            "question": "Which situation requires lifting state up to a parent component in Next.js?",
            "options": [
                "To share state only between Server Components for faster rendering",
                "To share state between multiple Client Components for coordinated updates",
                "To pass server-rendered props to static HTML without interactivity",
                "To prevent any client-side re-renders by using Server Components"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 589,
            "question": "Which import rule correctly applies to Client Components in Next.js?",
            "options": [
                "To import only other Client Components and cannot import Server Components back",
                "To import any Server or Client Components without restriction",
                "To import Server Components but not Client Components",
                "To import only static HTML files and JSON data"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 590,
            "question": "Which statement correctly describes rendering capabilities of Server Components?",
            "options": [
                "To render only static HTML without any component nesting",
                "To render only Client Components and ignore server logic",
                "To render both Client and Server Components passed as props",
                "To prevent any nested components from rendering"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 591,
            "question": "Which of the following is NOT allowed when passing props from a Server Component to a Client Component?",
            "options": [
                "To pass a string value for display purposes",
                "To pass a number or boolean for rendering",
                "To pass a function as a prop for event handling",
                "To pass a serializable object like JSON"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 592,
            "question": "Which scenario is NOT suitable for a Client Component in Next.js?",
            "options": [
                "To handle a button click with local state updates",
                "To manage form input fields interactively",
                "To re-render content on state changes",
                "To fetch data using async/await inside a Server Component instead",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 593,
            "question": "Which statement about Server Components is FALSE?",
            "options": [
                "To fetch data using async/await in the component",
                "To render both Server and Client Components passed as props",
                "To improve performance by offloading computation to the server",
                "To re-render automatically on every local state change",
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 594,
            "question": "Which rule about importing components in Next.js is NOT correct?",
            "options": [
                "Allow Server Components to import both Client and Server Components",
                "Allow Client Components to import Server Components and return to client-side logic",
                "Allow Client Components to import other Client Components",
                "Allow circular imports across client-server boundaries"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 595,
            "question": "Which situation does NOT require lifting state up in Next.js?",
            "options": [
                "To propagate a user action from child to parent for centralized handling",
                "To synchronize UI changes across multiple interactive components",
                "To keep local state isolated in a single Client Component with no siblings",
                "To share input values across multiple Client Components",
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 596,
            "question": "Which statement about re-render behavior is NOT true?",
            "options": [
                "To Server Components re-render automatically on local state changes in child Client Components",
                "To Client Components re-render on state or prop changes in child Server Components",
                "To Server Components re-render on navigation or URL change in child Client Components",
                "To Client Components can render Server Components passed as props in child Server Components"
            ],
            "correctOption": 0,
            "points": 30
        },
    {
        "id": 597,
        "question": "How does a Page Component behave by default in Next.js?",
        "options": [
            "To run on the server unless marked with 'use client'",
            "To always execute on the client for every route",
            "To render both server and client content automatically",
            "To generate only static HTML without interactivity"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 598,
        "question": "What is the purpose of a loading.js file in a Next.js App Router project?",
        "options": [
            "To render a temporary loading state or skeleton UI while a server component is fetching data",
            "To fetch data on the client side using hooks like useEffect",
            "To replace the page component entirely with static HTML for SEO",
            "To automatically convert server components to client components when state changes"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 599,
        "question": "What happens if JavaScript is disabled in the browser while a loading.js component is used in Next.js?",
        "options": [
            "To convert server components into client components automatically",
            "To run the loading.js component with full interactivity",
            "To prevent the server from rendering the page",
            "To show only the server-rendered content without interactive loading",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 600,
        "question": "Why does a child component in Next.js not always need to be marked with 'use client'?",
        "options": [
            "To force the child to always execute on the client regardless of state",
            "To allow server components to render it without requiring client-side state or hooks",
            "To prevent server components from being able to render it at all",
            "To automatically convert the child into a server component"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 601,
        "question": "In Next.js, where is a Server Component subtree executed by default?",
        "options": [
            "To execute entirely on the client regardless of state",
            "To switch execution between server and client automatically",
            "To run on the server unless a Client Component is inside",
            "To render only static HTML without server processing"
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 602,
        "question": "What does serialization mean in the context of Server Components in Next.js?",
        "options": [
            "To execute JavaScript functions before sending data to the client",
            "To convert data structures into a transferable format like JSON",
            "To encrypt props to secure them during server-side rendering",
            "To compile server code into a client-compatible bundle"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 603,
        "question": "Which type of prop can be safely used in a Server Component in Next.js?",
        "options": [
            "To pass functions or class instances directly as component props",
            "To include browser-only objects like window or document in props",
            "To share React hooks or event handlers as props between components",
            "To use serializable props such as strings, numbers, and plain objects",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 604,
        "question": "Why can't functions or class instances be passed as props in Server Components in Next.js?",
        "options": [
            "To avoid serialization errors since functions and classes cannot be converted to JSON",
            "To prevent duplicate rendering of components during client hydration proses",
            "To reduce bundle size by skipping complex objects in server rendering",
            "To keep server components isolated from client-side state and events"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 605,
        "question": "What is the main difference between using async/await in Server Components and Client Components in Next.js?",
        "options": [
            "To only support async/await when combined with useEffect in both server and client components",
            "To execute async/await automatically on both server and client without any restriction",
            "To allow direct async/await usage in Server Components but require external effects in Client Components",
            "To restrict async/await usage entirely in Server Components for performance reasons",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 606,
        "question": "When does a Server Component render in a Next.js application?",
        "options": [
            "To render only once during the initial build process of the application",
            "To render continuously whenever client-side state changes occur",
            "To render on every navigation or URL change that triggers a new request",
            "To render automatically after all client components finish hydrating",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 607,
        "question": "What does streaming mean in the context of Server-Side Rendering in Next.js?",
        "options": [
            "To buffer the entire HTML output on the server before sending it to the client browse",
            "To send HTML chunks to the browser as soon as they are ready instead of waiting for the full page",
            "To prefetch all client assets before rendering any server content",
            "To synchronize client and server states before starting the rendering process"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 608,
        "question": "Which of the following is NOT an advantage of streaming in Next.js Server-Side Rendering?",
        "options": [
            "To improve the time to first render by sending partial HTML early",
            "To enhance user experience through faster perceived loading",
            "To delay the first byte of HTML until all server components are ready",
            "To allow the browser to progressively render available content"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 609,
        "question": "Why can't React hooks be used inside Server Components?",
        "options": [
            "Because hooks require client-side reactivity and state",
            "Because hooks are deprecated in modern React",
            "Because hooks only work with class components",
            "Because hooks increase server load significantly"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 610,
        "question": "What happens if you try to use useState in a Server Component?",
        "options": [
            "The component automatically converts to client",
            "React throws an error during rendering",
            "The state works but doesn't update",
            "The hook is ignored silently"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 611,
        "question": "Which React feature requires client-side execution and cannot work in Server Components?",
        "options": [
            "Component composition and nesting",
            "Props passing between components",
            "State management with hooks",
            "JSX syntax for rendering"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 612,
        "question": "Why does useEffect not work in Server Components?",
        "options": [
            "Because it runs after rendering on client",
            "Because it's too slow for server",
            "Because it only works with async data",
            "Because it requires special configuration"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 613,
        "question": "What is the fundamental reason hooks don't work in Server Components?",
        "options": [
            "Hooks depend on component lifecycle and re-renders",
            "Hooks are not compatible with async/await",
            "Hooks require browser APIs to function",
            "Hooks are only for class components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 614,
        "question": "What information does the server need to render a Client Component?",
        "options": [
            "Only the component's props with serialized values",
            "Props, code reference, and client execution placeholder",
            "Complete JavaScript bundle including all dependencies",
            "Only the component name with its CSS styles"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 615,
        "question": "What is RSC Payload in React Server Components?",
        "options": [
            "The complete JavaScript bundle sent to client",
            "Serialized Server Component tree with Client placeholders",
            "Only the HTML output from server rendering",
            "The database query results for all components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 616,
        "question": "What does RSC Payload contain for Client Components?",
        "options": [
            "Full component code with implementation details",
            "Component location reference with serialized props",
            "Only the component's rendered HTML structure",
            "Complete source code including all comments"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 617,
        "question": "Why is it called 'RSC Payload' instead of just 'data'?",
        "options": [
            "Because it's based on random naming convention",
            "Because it carries structured component tree data",
            "Because it only contains external API responses",
            "Because it's compressed for network transmission"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 618,
        "question": "What happens to Client Component code in RSC Payload?",
        "options": [
            "The code is fully included in the payload",
            "Only reference sent, code loads separately later",
            "The code is converted to plain HTML strings",
            "The code is executed on the server first"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 619,
        "question": "How does RSC Payload handle Server Component output?",
        "options": [
            "Sends complete component source code to client",
            "Includes rendered HTML with all serialized data",
            "Converts everything to standard JSON format only",
            "Skips Server Components entirely from payload"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 620,
        "question": "Why can't functions be included in RSC Payload?",
        "options": [
            "Because functions are too large for network transfer",
            "Because functions cannot be serialized into JSON",
            "Because functions only work on the server side",
            "Because functions are deprecated in modern React"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 621,
        "question": "What is the purpose of component references in RSC Payload?",
        "options": [
            "To indicate where client should load component code",
            "To store all component state data permanently",
            "To generate complete component documentation",
            "To optimize server-side memory usage patterns"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 622,
        "question": "How does the client use RSC Payload to render the page?",
        "options": [
            "Executes all code from payload directly on mount",
            "Reconstructs tree using references and passed props",
            "Converts payload to static HTML without JavaScript",
            "Sends payload back to server for further processing"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 623,
        "question": "What makes RSC Payload efficient for performance?",
        "options": [
            "It includes all JavaScript upfront for better caching",
            "It sends minimal data using component references",
            "It eliminates need for any client-side JavaScript",
            "It compresses everything into optimized binary format"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 624,
        "question": "What is the main difference between SSR and RSC?",
        "options": [
            "SSR renders on server, RSC on client only",
            "SSR sends HTML, RSC sends component instructions",
            "SSR is faster, RSC is more interactive",
            "SSR uses React, RSC uses plain JavaScript"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 625,
        "question": "How do SSR and RSC handle component rendering?",
        "options": [
            "SSR renders all components, RSC splits server and client",
            "SSR only renders client, RSC only renders server",
            "Both render everything on server before sending",
            "Both render everything on client after downloading"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 626,
        "question": "What do SSR and RSC have in common?",
        "options": [
            "Both eliminate need for client JavaScript entirely",
            "Both render initial content on the server",
            "Both require 'use server' directive for components",
            "Both prevent any component interactivity on client"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 627,
        "question": "How does data fetching differ between SSR and RSC?",
        "options": [
            "Both fetch data exactly the same way",
            "Neither supports data fetching at all",
            "SSR fetches on client, RSC fetches on server",
            "SSR fetches before render, RSC fetches during render",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 628,
        "question": "What is sent to the client in SSR vs RSC?",
        "options": [
            "SSR sends JSON, RSC sends complete HTML markup",
            "SSR sends HTML, RSC sends serialized tree payload",
            "Both send identical HTML without any differences",
            "SSR sends nothing, RSC sends full JavaScript bundle"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 629,
        "question": "How do SSR and RSC handle JavaScript bundles?",
        "options": [
            "SSR includes all components, RSC only client ones",
            "SSR excludes all code, RSC includes everything",
            "Both include identical JavaScript in final bundle",
            "Neither sends any JavaScript to the browser"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 630,
        "question": "Can SSR and RSC be used together?",
        "options": [
            "No, they are mutually exclusive rendering methods",
            "Yes, RSC can render first then SSR hydrates",
            "Yes, modern frameworks combine both for optimization",
            "No, RSC completely replaces SSR in all cases"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 631,
        "question": "How does hydration differ between SSR and RSC?",
        "options": [
            "SSR hydrates all components, RSC only client ones",
            "SSR skips hydration, RSC requires full hydration",
            "Both hydrate components in exactly same way",
            "Neither requires hydration for any components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 632,
        "question": "What advantage does RSC have over traditional SSR?",
        "options": [
            "RSC eliminates need for any server rendering",
            "RSC reduces client bundle by keeping code server-side",
            "RSC makes all components interactive without JavaScript",
            "RSC renders everything faster than SSR always"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 633,
        "question": "How do SSR and RSC affect SEO?",
        "options": [
            "Both provide server-rendered content for better indexing",
            "SSR improves SEO, RSC completely breaks indexing",
            "RSC improves SEO, SSR prevents crawler access",
            "Neither has any impact on search rankings"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 634,
        "question": "Which statement about SSR and RSC is correct?",
        "options": [
            "SSR is newer technology replacing older RSC",
            "RSC is evolution of SSR with better optimization",
            "Both are identical with different naming only",
            "SSR works only with React, RSC with all frameworks"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 635,
        "question": "How do SSR and RSC handle component state?",
        "options": [
            "SSR preserves all state, RSC loses state completely",
            "Both require client-side state management for interactivity",
            "RSC manages state, SSR cannot handle any state",
            "Neither can manage component state at all"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 636,
        "question": "What happens on navigation in SSR vs RSC?",
        "options": [
            "SSR refetches everything, RSC updates only changed parts",
            "Both reload entire page from server completely",
            "SSR updates partially, RSC always does full reload",
            "Neither supports navigation between different pages"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 637,
        "question": "Which rendering approach requires more server resources?",
        "options": [
            "Traditional SSR due to complete page rendering",
            "RSC due to component-level streaming and logic",
            "Both require exactly same server resource amounts",
            "Neither requires any server resources at all"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 638,
        "question": "How do SSR and RSC impact Time to Interactive?",
        "options": [
            "SSR faster always, RSC slower in all scenarios",
            "RSC can be faster by reducing client JavaScript",
            "Both have identical Time to Interactive metrics",
            "Neither affects Time to Interactive at all"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 639,
        "question": "What does the '@' symbol represent in Next.js import paths?",
        "options": [
            "A special decorator for component styling",
            "An alias for the project root directory",
            "A prefix for external npm package imports",
            "A marker for server-only component imports"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 640,
        "question": "Why is '@' used instead of relative paths in Next.js?",
        "options": [
            "To automatically optimize component bundle size",
            "To enable TypeScript type checking automatically",
            "To avoid long relative paths like '../../../components'",
            "To make imports work only on server",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 641,
        "question": "Where is the '@' alias configured in Next.js?",
        "options": [
            "In package.json under dependencies section only",
            "In tsconfig.json or jsconfig.json paths configuration",
            "In next.config.js webpack externals section only",
            "In .env file as environment variable"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 642,
        "question": "What path does '@/app/_components/Logo' typically resolve to?",
        "options": [
            "The node_modules folder with app namespace",
            "The project root then app/_components/Logo path",
            "A CDN URL for external component libraries",
            "The public folder for static asset files"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 643,
        "question": "Can you customize the '@' alias in Next.js?",
        "options": [
            "Yes, by modifying paths in tsconfig.json file",
            "No, '@' is hardcoded and cannot change",
            "Yes, but only in production build environment",
            "No, changing it breaks all Next.js features"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 644,
        "question": "What is the benefit of using '@' over relative paths?",
        "options": [
            "It makes imports work faster at runtime",
            "It automatically tree-shakes unused component code",
            "It prevents deep nesting with cleaner syntax",
            "It enables server-side rendering for components"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 645,
        "question": "Is '@' alias specific to Next.js only?",
        "options": [
            "Yes, it only works in Next.js apps",
            "Yes, but can be polyfilled for other tools",
            "No, it's a native JavaScript ES6 feature",
            "No, it's common in many modern frameworks",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 646,
        "question": "What happens if '@' is not configured properly?",
        "options": [
            "Next.js will throw module not found errors",
            "Imports will work but run slower than normal",
            "The app will build but crash at runtime",
            "TypeScript will auto-fix the configuration"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 647,
        "question": "Can you use multiple custom aliases besides '@'?",
        "options": [
            "No, Next.js only allows single alias configuration",
            "Yes, but maximum three aliases are allowed",
            "Yes, by defining multiple paths in config",
            "No, only '@' and '~' are permitted"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 648,
        "question": "Does '@' alias work in both JavaScript and TypeScript?",
        "options": [
            "Yes, but requires additional Babel plugin setup",
            "No, it only works with TypeScript projects",
            "Yes, when configured in jsconfig or tsconfig",
            "No, it's exclusive to JavaScript ES modules"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 649,
        "question": "What is the purpose of next/font in Next.js?",
        "options": [
            "To automatically optimize and load fonts efficiently",
            "To convert all fonts to web-safe formats",
            "To generate custom fonts from templates",
            "To compress images alongside font files"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 650,
        "question": "Which module is used to load Google Fonts in Next.js?",
        "options": [
            "next/font/adobe",
            "next/font/google",
            "next/font/cdn",
            "next/font/remote"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 651,
        "question": "What happens when you use next/font/google?",
        "options": [
            "Fonts are loaded from Google CDN at runtime",
            "Fonts are self-hosted and bundled at build time",
            "Fonts require manual CDN link in HTML",
            "Fonts are downloaded only when user scrolls",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 652,
        "question": "Why does Next.js self-host Google Fonts?",
        "options": [
            "To eliminate external requests and improve privacy",
            "To reduce font file size automatically",
            "To enable offline font editing features",
            "To convert fonts to proprietary format"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 653,
        "question": "How do you apply a font loaded with next/font?",
        "options": [
            "By using the className property from font",
            "By manually linking CSS file in head",
            "By importing font directly in global CSS",
            "By adding font URL to next.config.js"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 654,
        "question": "What is font subsetting in Next.js?",
        "options": [
            "Loading only specific font weights and styles",
            "Converting fonts to smaller file formats",
            "Including only used characters in font files",
            "Splitting fonts across multiple CDN servers"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 655,
        "question": "Which property specifies font subsets to load?",
        "options": [
            "characters: ['latin']",
            "include: ['latin']",
            "subsets: ['latin']",
            "languages: ['latin']"
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 656,
        "question": "How do you load custom local fonts in Next.js?",
        "options": [
            "Using next/font/google with custom URL",
            "Using next/font/local with font file path",
            "Using standard CSS @font-face rules only",
            "Using import statement in global styles"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 657,
        "question": "What is the benefit of font display swap?",
        "options": [
            "It prevents layout shift during font loading",
            "It shows fallback text until font loads",
            "It preloads all font variants at once",
            "It disables font loading on slow connections"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 658,
        "question": "How do you set font display behavior in Next.js?",
        "options": [
            "Using fontDisplay: 'swap' in next.config.js",
            "Using display: 'swap' in font configuration",
            "Using CSS font-display property manually",
            "Using preload: true in font options"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 659,
        "question": "Can you use multiple fonts in a Next.js app?",
        "options": [
            "Yes, by importing multiple font instances",
            "No, only one font per application",
            "Yes, but maximum three fonts allowed",
            "No, mixing fonts breaks optimization"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 660,
        "question": "What does preload option do for fonts?",
        "options": [
            "It loads font before any other resources",
            "It caches font permanently in browser",
            "It converts font to inline base64",
            "It downloads font only when visible"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 661,
        "question": "How does Next.js prevent layout shift with fonts?",
        "options": [
            "By using CSS size-adjust property automatically",
            "By loading fonts before HTML rendering",
            "By setting fixed heights for text",
            "By disabling font loading on mobile"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 662,
        "question": "What is the advantage of variable fonts in Next.js?",
        "options": [
            "They load faster than standard fonts",
            "They include multiple weights in one file",
            "They automatically adjust to screen size",
            "They work without JavaScript enabled"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 663,
        "question": "How do you load a variable font in Next.js?",
        "options": [
            "Using next/font/google with variable: true",
            "Using next/font/variable with font name",
            "Same as regular fonts, Next.js detects it",
            "Using CSS @font-face with font-variation"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 664,
        "question": "Can fonts be applied globally in Next.js?",
        "options": [
            "Yes, but only in _app.js file",
            "No, fonts must be applied per component",
            "Yes, by applying className to body in layout",
            "No, global fonts are not supported",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 665,
        "question": "What happens to unused font weights with next/font?",
        "options": [
            "They are included in bundle for consistency",
            "They are automatically excluded from build",
            "They are loaded on demand when needed",
            "They are converted to lighter formats"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 666,
        "question": "How does next/font improve Core Web Vitals?",
        "options": [
            "By reducing Cumulative Layout Shift with font optimization",
            "By eliminating all JavaScript from pages",
            "By compressing images alongside fonts",
            "By loading fonts only on fast connections"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 667,
        "question": "Can you use next/font with Tailwind CSS?",
        "options": [
            "Yes, by adding font variable to Tailwind config",
            "No, Tailwind requires manual font loading",
            "Yes, but only with CDN fonts",
            "No, they are incompatible technologies"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 668,
        "question": "What is the fallback font strategy in next/font?",
        "options": [
            "It automatically generates system font fallbacks",
            "It loads generic sans-serif as backup",
            "It displays blank space until font loads",
            "It converts text to images temporarily"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 669,
        "question": "What is the primary purpose of Next.js Image component?",
        "options": [
            "To automatically optimize and lazy-load images",
            "To convert all images to SVG format",
            "To generate images from text descriptions",
            "To compress videos alongside image files"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 670,
        "question": `Which component should you use instead of '<img>' tag?`,
        "options": [
            "<Picture> from next/image",
            "<Image> from next/image",
            "<Img> from next/component",
            "<OptimizedImage> from next/core"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 671,
        "question": "What does Next.js Image component do automatically?",
        "options": [
            "Removes all metadata from image files automatically",
            "Converts images to WebP format and lazy-loads",
            "Uploads images to CDN automatically",
            "Generates alt text using AI"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 672,
        "question": "Why is lazy loading important for images?",
        "options": [
            "It improves SEO ranking significantly",
            "It loads images only when entering viewport",
            "It prevents users from downloading images",
            "It converts images to smaller formats"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 673,
        "question": "Which property is required for static image imports?",
        "options": [
            "url with file path string",
            "source with image location",
            "src with imported image object",
            "path with relative directory"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 674,
        "question": "How do you specify image dimensions for remote images?",
        "options": [
            "Next.js detects dimensions automatically",
            "Using width and height props explicitly",
            "Using size prop with single value",
            "Using dimensions prop with object",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 675,
        "question": "What is the purpose of the fill property?",
        "options": [
            "It fills empty space with background color",
            "It makes image fill parent container",
            "It adds padding around the image",
            "It duplicates image to fill grid"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 676,
        "question": "Which property controls how image fits in container?",
        "options": [
            "fit property with CSS values",
            "resize property with custom values",
            "scale property with numeric values",
            "objectFit property with CSS values",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 677,
        "question": "What does priority property do for images?",
        "options": [
            "It disables lazy loading for above-fold images",
            "It increases image quality significantly",
            "It loads image before HTML parsing",
            "It caches image permanently in browser"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 678,
        "question": "When should you use priority property?",
        "options": [
            "For all images to improve performance",
            "For largest contentful paint (LCP) images",
            "For background images in components",
            "For thumbnail images in galleries"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 679,
        "question": "How does Next.js handle different screen sizes?",
        "options": [
            "It generates multiple image sizes automatically",
            "It crops images based on viewport",
            "It uses same size for all devices",
            "It converts images to vector format"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 680,
        "question": "What is the purpose of sizes property?",
        "options": [
            "It defines exact image dimensions in pixels",
            "It tells browser which size to download",
            "It sets maximum file size limit",
            "It configures compression quality level"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 681,
        "question": "Which image formats does Next.js optimize to?",
        "options": [
            "WebP and AVIF for modern browsers",
            "JPEG and PNG for all browsers",
            "SVG and GIF for animations",
            "BMP and TIFF for quality"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 682,
        "question": "How do you allow external image domains?",
        "options": [
            "Add domains to images.domains in next.config.js",
            "Add URLs to allowedSources in package.json",
            "Add hosts to imageHosts in tsconfig.json",
            "Add origins to externalImages in .env"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 683,
        "question": "What happens without configuring remote domains?",
        "options": [
            "Images load but without optimization",
            "Next.js throws error and blocks image",
            "Images are downloaded to local server",
            "Images load with default placeholder"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 684,
        "question": "What is the purpose of placeholder property?",
        "options": [
            "It replaces broken images automatically",
            "It sets background color for transparency",
            "It shows blurred preview while loading",
            "It adds caption text below image",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 685,
        "question": "Which placeholder value creates blur effect?",
        "options": [
            "placeholder='blur'",
            "placeholder='loading'",
            "placeholder='skeleton'",
            "placeholder='preview'"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 686,
        "question": "How do you provide custom blur placeholder?",
        "options": [
            "Using blurDataURL prop with base64 string",
            "Using blurImage prop with file path",
            "Using placeholder prop with image URL",
            "Using loading prop with preview data"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 687,
        "question": "What is the quality property range for images?",
        "options": [
            "0 to 100, where 0 is highest",
            "1 to 100, where 100 is highest",
            "0 to 10, where 10 is highest",
            "1 to 10, where 1 is highest",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 688,
        "question": "What is the default quality value in Next.js?",
        "options": [
            "100 for maximum image quality",
            "90 for high quality output",
            "75 for balanced size and quality",
            "50 for smallest file size",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 689,
        "question": "How does Image component prevent layout shift?",
        "options": [
            "By reserving space using width and height",
            "By loading all images before render",
            "By using fixed container dimensions",
            "By disabling image loading initially"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 690,
        "question": "What happens when you omit width and height?",
        "options": [
            "Next.js calculates them from file",
            "Image loads without optimization",
            "Component throws runtime error",
            "You must use fill property instead",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 691,
        "question": "Can you style Next.js Image component?",
        "options": [
            "Yes, using className or style props",
            "No, styling is not supported",
            "Yes, but only inline styles",
            "No, only Tailwind classes work"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 692,
        "question": "What is the purpose of loader property?",
        "options": [
            "It customizes image optimization service URL",
            "It converts images to different formats",
            "It shows loading spinner during fetch",
            "It preloads images before rendering",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 693,
        "question": "How does Next.js handle image caching?",
        "options": [
            "It disables caching for dynamic images",
            "It caches optimized images automatically",
            "It requires manual cache configuration",
            "It stores images only in memory"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 694,
        "question": "What is the benefit of automatic image optimization?",
        "options": [
            "It reduces bandwidth and improves load times",
            "It removes need for image editing",
            "It generates alt text automatically",
            "It converts all images to vectors"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 695,
        "question": "Can Image component work with SVG files?",
        "options": [
            "Yes, but SVGs are not optimized",
            "No, only raster formats supported",
            "Yes, and they are converted to PNG",
            "No, use regular img tag instead"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 696,
        "question": "What does unoptimized property do?",
        "options": [
            "It reduces image quality to minimum",
            "It serves original image without processing",
            "It removes all image metadata",
            "It disables lazy loading feature"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 697,
        "question": "How does Image component improve Core Web Vitals?",
        "options": [
            "By optimizing LCP, CLS, and loading performance",
            "By removing all JavaScript from pages",
            "By compressing HTML alongside images",
            "By loading images only on WiFi"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 698,
        "question": "What is responsive image loading in Next.js?",
        "options": [
            "It rotates images based on orientation",
            "It adjusts image aspect ratio automatically",
            "It serves appropriately sized images per device",
            "It changes image format by browser"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 699,
        "question": "What does fill property do in Next.js Image component?",
        "options": [
            "Makes image fill entire parent container",
            "Fills empty space with background color",
            "Adds padding around image element",
            "Duplicates image to fill grid layout"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 700,
        "question": "When using fill, what must the parent container have?",
        "options": [
            "display: flex with align-items center",
            "position: relative or absolute styling",
            "overflow: hidden with max-width set",
            "width: 100% with height: auto"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 701,
        "question": "What does object-cover class do for fill images?",
        "options": [
            "Covers container maintaining aspect ratio",
            "Converts image to cover entire page",
            "Adds overlay cover on top of image",
            "Covers only visible viewport area"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 702,
        "question": "What is the difference between object-cover and object-contain?",
        "options": [
            "object-cover stretches, object-contain maintains size",
            "object-cover fills width, object-contain fills height",
            "object-cover crops, object-contain shows full image",
            "object-cover zooms in, object-contain zooms out"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 703,
        "question": "What does object-top class control in Image component?",
        "options": [
            "Z-index stacking order of image",
            "Vertical alignment of text around image",
            "Position of image within container",
            "Top margin spacing for image"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 704,
        "question": "Can you use width and height props with fill?",
        "options": [
            "Yes, they work together for aspect ratio",
            "No, fill and dimensions are mutually exclusive",
            "Yes, but only in development mode",
            "No, Next.js throws compilation error"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 705,
        "question": "How do you create square image container with fill?",
        "options": [
            "Using ratio='1:1' on parent element",
            "Using width and height equal values",
            "Using square property on Image component",
            "Using aspect-square class on parent container",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 706,
        "question": "What does aspect-video class create for image container?",
        "options": [
            "4:3 aspect ratio for standard format",
            "16:9 aspect ratio for video format",
            "Square aspect ratio for videos",
            "21:9 aspect ratio for ultra wide format"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 707,
        "question": "How does aspect-square work with fill images?",
        "options": [
            "Container maintains square shape while image fills",
            "Image is cropped to square automatically",
            "Image is stretched to perfect square",
            "Container and image both become circles"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 708,
        "question": "What happens without relative class on fill image parent?",
        "options": [
            "Image loads but without optimization",
            "Image will not load at all",
            "Image may not position correctly",
            "Image appears in top-left corner"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 709,
        "question": "Can you use object-center with fill images?",
        "options": [
            "Yes, but only for square containers",
            "No, centering requires flexbox instead",
            "Yes, it centers image within container",
            "No, fill images are always centered"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 710,
        "question": "What does object-fit: contain show compared to cover?",
        "options": [
            "Full image with possible empty space",
            "Cropped image filling entire container",
            "Stretched image to fit exactly",
            "Tiled image repeating in container"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 711,
        "question": "How do you make fill image responsive across breakpoints?",
        "options": [
            "Using responsive property on Image component",
            "Using responsive classes like md:aspect-video",
            "Using breakpoint prop with array values",
            "Using sizes with media query strings"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 712,
        "question": "What is the purpose of sizes prop with fill images?",
        "options": [
            "Tells browser which image size to download",
            "Sets container size at different breakpoints",
            "Defines aspect ratio for containers",
            "Controls image quality per viewport"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 713,
        "question": "Can you use col-span with fill images for grid layouts?",
        "options": [
            "No, fill images require flexbox only",
            "Yes, it controls grid column spanning",
            "Yes, but maximum 3 columns allowed",
            "No, use grid-column property instead"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 714,
        "question": "What does object-left-top do for fill images?",
        "options": [
            "Aligns image to top-left corner",
            "Moves image outside container bounds",
            "Rotates image to left orientation",
            "Crops image from left-top area"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 715,
        "question": "How can you use fill without making the image look stretched?",
        "options": [
            "Using object-cover or object-contain classes",
            "Using preserve-aspect property on Image",
            "Using fixed width and height values",
            "Using ratio property with fraction"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 716,
        "question": "Can you animate fill images with Tailwind transitions?",
        "options": [
            "Yes, but only opacity animations work",
            "No, fill images cannot be animated",
            "Yes, using transition and hover classes",
            "No, use CSS keyframes instead"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 717,
        "question": "What is best practice for hero images with fill?",
        "options": [
            "Use responsive with multiple source sets",
            "Use fixed dimensions without fill property",
            "Use fill with object-contain for full view",
            "Use fill with object-cover and sizes='100vw'",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 718,
        "question": "How does fill affect image loading performance?",
        "options": [
            "Loads full resolution image always",
            "Still optimizes based on container size",
            "Disables lazy loading automatically",
            "Increases bundle size significantly"
        ],
        "correctOption": 1,
        "points": 30
    },{
        "id": 719,
        "question": "What is the purpose of environment variables in Next.js?",
        "options": [
            "Store configuration data outside source code",
            "Improve application runtime performance",
            "Generate dynamic routes automatically",
            "Optimize images during build process"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 720,
        "question": "Which file is used to define environment variables?",
        "options": [
            "config.js for all environments",
            "settings.json for configuration",
            ".env.local for local development",
            "variables.env for production"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 721,
        "question": "How do you access environment variables in Next.js?",
        "options": [
            "Using env.get('VARIABLE_NAME') method",
            "Using process.env.VARIABLE_NAME syntax",
            "Using getEnv('VARIABLE_NAME') function",
            "Using config.VARIABLE_NAME notation"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 722,
        "question": "What prefix exposes env variables to the browser?",
        "options": [
            "BROWSER_ prefix for client side",
            "PUBLIC_ prefix for frontend usage",
            "CLIENT_ prefix for browser exposure",
            "NEXT_PUBLIC_ prefix for client access",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 723,
        "question": "Can you access server-only env variables in browser?",
        "options": [
            "Yes, all variables available everywhere",
            "No, only NEXT_PUBLIC_ variables accessible",
            "Yes, but only in production mode",
            "No, unless explicitly configured"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 724,
        "question": "What happens to env variables without NEXT_PUBLIC_ prefix?",
        "options": [
            "They remain server-side only for security",
            "They become public automatically",
            "They are ignored during build process",
            "They throw error in production"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 725,
        "question": "Which env file has highest priority in Next.js?",
        "options": [
            ".env.production takes highest priority",
            ".env.development has most precedence",
            ".env.local overrides other env files",
            ".env is always prioritized first"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 726,
        "question": "What is the purpose of .env.production file?",
        "options": [
            "Variables specific to production builds",
            "Backup variables for all environments",
            "Testing variables before deployment",
            "Development variables for staging"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 727,
        "question": "Should .env.local be committed to git repository?",
        "options": [
            "Yes, for team collaboration purposes",
            "No, it contains sensitive local data",
            "Yes, but only for public projects",
            "No, unless encrypted properly first"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 728,
        "question": "How do you provide default values for env variables?",
        "options": [
            "Using config.defaults object",
            "Using fallback.env for defaults",
            "Using .env file for default values",
            "Using defaults.json configuration file",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 729,
        "question": "Can you use env variables in next.config.js?",
        "options": [
            "Yes, but only NEXT_PUBLIC_ variables",
            "No, config runs before env loading",
            "Yes, using process.env directly",
            "No, requires separate config file"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 730,
        "question": "What is the purpose of .env.example file?",
        "options": [
            "Backup of production environment variables",
            "Template showing required env variables",
            "Example values for testing purposes",
            "Default fallback for missing variables"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 731,
        "question": "How are env variables loaded in Next.js?",
        "options": [
            "Automatically at build and runtime",
            "Manually using loadEnv() function",
            "Only during initial server startup",
            "Through external configuration service"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 732,
        "question": "Can you override env variables at runtime?",
        "options": [
            "No, unless using serverless functions",
            "Yes, using runtime configuration API",
            "Yes, but only in development mode",
            "No, they are set at build time",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 733,
        "question": "What happens when env variable is undefined?",
        "options": [
            "Variable gets empty string as default",
            "Next.js throws build error immediately",
            "process.env.VAR returns undefined value",
            "Application crashes at runtime"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 734,
        "question": "How do you use env variables in API routes?",
        "options": [
            "Access via process.env like server code",
            "Import from special env module",
            "Use getEnv() helper function",
            "Pass through request headers"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 735,
        "question": "Can you use env variables in client components?",
        "options": [
            "Yes, all variables available automatically",
            "No, client components cannot access env",
            "Only if prefixed with NEXT_PUBLIC_",
            "Yes, but requires special import"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 736,
        "question": "What is the risk of exposing env variables to browser?",
        "options": [
            "Sensitive data visible in client code",
            "Increases bundle size significantly",
            "Slows down page load performance",
            "Breaks server-side rendering"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 737,
        "question": "How do you validate required env variables?",
        "options": [
            "Next.js validates automatically at build",
            "Check at runtime or use validation library",
            "Use validateEnv() built-in function",
            "Define in env.schema.json file"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 738,
        "question": "Can you use multiline values in env files?",
        "options": [
            "Yes, using quotes and newline characters",
            "No, env values must be single line",
            "Yes, but only in .env.local file",
            "No, requires JSON format instead"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 739,
        "question": "What is the purpose of .env.development.local?",
        "options": [
            "Local overrides for development environment",
            "Shared development variables for team",
            "Production testing before deployment",
            "Backup of development configurations"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 740,
        "question": "How do env variables work in Docker containers?",
        "options": [
            "Automatically copied from host system",
            "Cannot use env variables in containers",
            "Pass via docker run -e or compose file",
            "Must rebuild image for each change",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 741,
        "question": "Can you use env variables for database connection strings?",
        "options": [
            "Yes, but only in development",
            "No, use config files instead",
            "Yes, common practice for security",
            "No, hardcode for better performance"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 742,
        "question": "What is best practice for API keys in Next.js?",
        "options": [
            "Store in NEXT_PUBLIC_ for easy access",
            "Store in server-side env variables only",
            "Hardcode directly in source code",
            "Store in public constants file"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 743,
        "question": "How do you handle env variables in Vercel deployment?",
        "options": [
            "Commit all env files to repository",
            "Add through Vercel dashboard or CLI",
            "Upload .env.local file to server",
            "Configure in vercel.json file"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 744,
        "question": "Can you use env variables in middleware?",
        "options": [
            "No, middleware cannot access env",
            "Yes, all variables available",
            "No, requires separate configuration",
            "Yes, but only non-NEXT_PUBLIC_ variables",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 745,
        "question": "What happens to NEXT_PUBLIC_ variables in build output?",
        "options": [
            "Inlined into JavaScript bundle code",
            "Kept separate in env file",
            "Encrypted for security purposes",
            "Removed from production build"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 746,
        "question": "How do you use different API URLs per environment?",
        "options": [
            "Use different env files per environment",
            "Use if statements checking NODE_ENV",
            "Use switch case for each environment",
            "Use separate config.js per environment"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 747,
        "question": "Can you access env variables in getStaticProps?",
        "options": [
            "Yes, but only NEXT_PUBLIC_ variables",
            "No, only available in API routes",
            "Yes, runs on server with full access",
            "No, use runtime configuration instead"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 748,
        "question": "What is the recommended way to type env variables?",
        "options": [
            "Create TypeScript declaration file for process.env",
            "Use any type for all variables",
            "Next.js types them automatically",
            "No typing needed for env variables"
        ],
        "correctOption": 0,
        "points": 30
    },{
        "id": 749,
        "question": "What is streaming in React and Next.js?",
        "options": [
            "Sending HTML chunks to browser progressively",
            "Playing video content in components",
            "Real-time data updates via WebSocket",
            "Continuous data flow from database"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 750,
        "question": "What is the purpose of React Suspense?",
        "options": [
            "Pauses component rendering permanently",
            "Delays JavaScript execution temporarily",
            "Shows fallback UI while content loads",
            "Suspends user interactions until ready"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 751,
        "question": "How does Suspense work with streaming?",
        "options": [
            "Stops streaming until data is ready",
            "Converts streaming to static rendering",
            "Disables streaming for better performance",
            "Shows fallback while streaming component content",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 752,
        "question": "What does fallback prop specify in Suspense?",
        "options": [
            "Backup component for rendering",
            "UI to show while content loading",
            "Default data when fetch fails",
            "Alternative route on error",
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 753,
        "question": "Can you nest multiple Suspense boundaries?",
        "options": [
            "Yes, but maximum three levels",
            "No, only one per page allowed",
            "Yes, for granular loading states",
            "No, causes infinite loading loops"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 754,
        "question": "What triggers Suspense boundary in components?",
        "options": [
            "Async operations like data fetching",
            "State updates in child components",
            "Props changes from parent component",
            "CSS animations and transitions"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 755,
        "question": "How does streaming improve Time to First Byte?",
        "options": [
            "Caches responses on CDN edge",
            "Sends initial HTML faster without waiting",
            "Compresses data before sending response",
            "Reduces server processing time significantly"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 756,
        "question": "What is the difference between streaming and SSR?",
        "options": [
            "Streaming works offline, SSR needs server",
            "Streaming is faster, SSR is slower",
            "Streaming sends chunks, SSR waits for all",
            "Streaming for client, SSR for server"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 757,
        "question": "Can Server Components use Suspense boundaries?",
        "options": [
            "No, Server Components render synchronously",
            "Yes, for async data fetching operations",
            "No, only Client Components support it",
            "Yes, but only in development mode",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 758,
        "question": "What happens when Suspense boundary catches promise?",
        "options": [
            "Shows fallback until promise resolves",
            "Throws error stopping component render",
            "Cancels promise and retries fetch",
            "Converts promise to synchronous code"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 759,
        "question": "How does loading.js relate to Suspense?",
        "options": [
            "It's automatic Suspense boundary for routes",
            "It replaces Suspense in Next.js completely",
            "It loads files before Suspense renders",
            "It defines loading speed for Suspense"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 760,
        "question": "Can you use Suspense with React.lazy?",
        "options": [
            "No, lazy requires different loading method",
            "Yes, for code-splitting components lazily",
            "Yes, but only for small components",
            "No, lazy and Suspense are incompatible"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 761,
        "question": "What is progressive rendering in streaming?",
        "options": [
            "Rendering components as data becomes available",
            "Gradually improving image quality over time",
            "Slowly loading page from top to bottom",
            "Rendering based on user scroll position"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 762,
        "question": "How does Suspense improve perceived performance?",
        "options": [
            "Actually makes code run faster",
            "Caches everything in browser memory",
            "Prefetches all data before rendering",
            "Shows content immediately reducing wait time",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 763,
        "question": "Can Suspense work with error boundaries?",
        "options": [
            "No, they serve completely different purposes",
            "Yes, error boundaries catch Suspense errors",
            "Yes, but only in production builds",
            "No, Suspense replaces error boundaries"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 764,
        "question": "What is selective hydration with Suspense?",
        "options": [
            "Choosing which components to hydrate manually",
            "Hydrating components independently when ready",
            "Hydrating only visible components on screen",
            "Partial hydration based on user interaction"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 765,
        "question": "How does streaming affect SEO?",
        "options": [
            "Content still indexed but loads progressively",
            "Completely breaks search engine crawling",
            "Improves SEO by loading faster",
            "No effect on SEO whatsoever"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 766,
        "question": "Can you use Suspense with client-side data fetching?",
        "options": [
            "Yes, but requires manual configuration",
            "No, only server-side fetching works",
            "Yes, with libraries supporting Suspense",
            "No, Suspense is server-only feature"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 767,
        "question": "What is the purpose of startTransition with Suspense?",
        "options": [
            "Marks updates as non-urgent allowing interruption",
            "Initiates streaming from server immediately",
            "Starts CSS transitions during loading",
            "Begins data fetching before rendering",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 768,
        "question": "How does Suspense handle concurrent requests?",
        "options": [
            "Renders whichever resolves first independently",
            "Cancels slower requests automatically",
            "Waits for all requests to finish",
            "Queues requests in order received"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 769,
        "question": "Can you show different fallbacks for different sections?",
        "options": [
            "No, fallback is global configuration",
            "Yes, but requires custom hook",
            "No, only one fallback per page",
            "Yes, using multiple Suspense boundaries",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 770,
        "question": "What happens if fallback component also suspends?",
        "options": [
            "Automatically retries rendering fallback",
            "Application crashes with error",
            "Shows blank screen indefinitely",
            "Parent Suspense boundary catches it",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 771,
        "question": "How does Suspense improve user experience?",
        "options": [
            "Prevents users from leaving page",
            "Makes application load twice as fast",
            "Eliminates all loading states completely",
            "Shows meaningful loading states reducing frustration",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 772,
        "question": "Can Suspense be used for non-data operations?",
        "options": [
            "Yes, any async operation throwing promise",
            "No, only data fetching supported",
            "Yes, but only image loading",
            "No, strictly for API calls"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 773,
        "question": "What is the relationship between Suspense and loading states?",
        "options": [
            "Suspense declaratively manages loading states",
            "Suspense eliminates need for loading states",
            "Suspense converts loading to error states",
            "Suspense and loading states are unrelated"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 774,
        "question": "How does streaming affect bandwidth usage?",
        "options": [
            "Reduces bandwidth by compressing streams",
            "Same total data sent more efficiently",
            "Increases bandwidth due to chunking",
            "No effect on bandwidth whatsoever"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 775,
        "question": "Can you cancel Suspense loading programmatically?",
        "options": [
            "Yes, but only during development",
            "Yes, using cancelSuspense() method",
            "No, Suspense resolves when promise settles",
            "No, requires page refresh to cancel"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 776,
        "question": "What is Out-of-Order Streaming in React?",
        "options": [
            "Streaming data in reverse chronological order",
            "Components stream in priority order not sequential",
            "Random component rendering for performance",
            "Streaming only non-critical components late"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 777,
        "question": "How does Suspense work with React Server Components?",
        "options": [
            "Converts Server Components to Client Components",
            "Suspense doesn't work with Server Components",
            "Allows async Server Components to suspend",
            "Disables Server Components during loading",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 778,
        "question": "What is the best practice for Suspense boundaries?",
        "options": [
            "Wrap every single component individually",
            "Only use one boundary per application",
            "Place where loading states make sense",
            "Avoid Suspense in production builds"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 779,
        "question": "How do you create a dynamic route in Next.js App Router?",
        "options": [
            "Using :param syntax in route configuration",
            "Using [param] bracket folder naming convention",
            "Using {param} curly brace in file names",
            "Using <param> angle bracket folder structure"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 780,
        "question": "How do you access dynamic route parameters in page component?",
        "options": [
            "Using useParams() hook from React Router",
            "Using getParams() helper function from Next",
            "Through params prop passed to component",
            "Through query prop in component props"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 781,
        "question": "What is the structure for dynamic route folder?",
        "options": [
            "app/posts/:id/page.js for single parameter route",
            "app/posts/{id}/page.js for single parameter route",
            "app/posts/<id>/page.js for single parameter route",
            "app/posts/[id]/page.js for single parameter route"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 782,
        "question": "How do you create catch-all dynamic routes?",
        "options": [
            "Using [...slug] bracket folder naming",
            "Using [*slug] asterisk for catch-all",
            "Using [slug*] suffix for multiple",
            "Using [slug...] suffix for paths"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 783,
        "question": "What does [...slug] match in routes?",
        "options": [
            "Only single segment in the URL",
            "All segments after the base path",
            "Exactly two segments in the path",
            "Optional single segment in URL"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 784,
        "question": "How do you create optional catch-all routes?",
        "options": [
            "Using [...slug]? with question mark suffix",
            "Using [slug...]? optional bracket syntax",
            "Using [[...slug]] double bracket notation",
            "Using [...slug|optional] pipe notation"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 785,
        "question": "What is difference between [...slug] and [[...slug]]?",
        "options": [
            "[...slug] matches base route automatically",
            "[[...slug]] matches base route too",
            "[[...slug]] requires minimum two segments",
            "[...slug] matches optional parameters"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 786,
        "question": "How do you access catch-all route parameters?",
        "options": [
            "params.slug returns array of segments",
            "params.slug returns single string value",
            "params.slug returns object with keys",
            "params.slug returns comma-separated string"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 787,
        "question": "Can you have multiple dynamic segments in one route?",
        "options": [
            "No, only one dynamic segment allowed",
            "Yes, but maximum three segments only",
            "No, requires separate route definitions",
            "Yes, like [category]/[id]/page.js structure"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 788,
        "question": "How do you generate static paths for dynamic routes?",
        "options": [
            "Using getStaticPaths in page component",
            "Using generateMetadata exported function",
            "Using generateStaticParams exported function",
            "Using getServerSideProps for paths"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 789,
        "question": "What does generateStaticParams return for dynamic routes?",
        "options": [
            "Array of parameter objects for routes",
            "Object with route configuration settings",
            "String array of valid route paths",
            "Promise resolving to route mappings"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 790,
        "question": "When is generateStaticParams executed in Next.js?",
        "options": [
            "During runtime when user visits route",
            "During build time for static generation",
            "After page loads in browser client",
            "Before server starts in development"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 791,
        "question": "Can dynamic routes be Server Components by default?",
        "options": [
            "No, they must be Client Components",
            "Yes, unless marked with 'use client'",
            "No, dynamic routes always run client-side",
            "Yes, but only for static generation"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 792,
        "question": "How do you handle 404 for invalid dynamic routes?",
        "options": [
            "Using custom error.js in route folder",
            "Using not-found.js file in route folder",
            "Using notFound() function from next/navigation",
            "Using return null in page component"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 793,
        "question": "What is the priority order for route matching?",
        "options": [
            "Dynamic routes match before static routes",
            "Catch-all routes have highest priority always",
            "Static routes match before dynamic routes",
            "All routes have equal matching priority"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 794,
        "question": "Can you use params in layout components?",
        "options": [
            "No, params only available in pages",
            "Yes, params passed to layout components",
            "No, layouts don't receive any props",
            "Yes, but only for root layouts"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 795,
        "question": "How do you create nested dynamic routes?",
        "options": [
            "Using separate configuration file for nesting",
            "Using [param1]/[param2] folder structure nesting",
            "Using nested brackets like [[param1][param2]]",
            "Using comma-separated params in single bracket"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 796,
        "question": "What happens when dynamic route doesn't match?",
        "options": [
            "Shows custom not-found.js component UI",
            "Redirects to home page automatically",
            "Shows blank screen without errors",
            "Throws 500 server error immediately"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 797,
        "question": "Can you use searchParams with dynamic routes?",
        "options": [
            "Yes, alongside params in page props",
            "No, params and searchParams conflict",
            "Yes, but only in Client Components",
            "No, use useSearchParams hook instead"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 798,
        "question": "How do you validate dynamic route parameters?",
        "options": [
            "Using validateParams in page component",
            "Using Zod schema in route handler",
            "In page component before fetching data",
            "Using middleware for parameter validation"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 799,
        "question": "What is dynamicParams configuration option for?",
        "options": [
            "Controls behavior for non-generated params",
            "Enables dynamic parameter validation rules",
            "Sets maximum number of dynamic segments",
            "Configures parameter encoding format"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 800,
        "question": "Can you use dynamic routes with parallel routes?",
        "options": [
            "No, parallel routes cannot be dynamic",
            "Yes, but requires special configuration",
            "No, they serve different purposes entirely",
            "Yes, using @folder/[param] structure combination"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 801,
        "question": "How do you generate metadata for dynamic routes?",
        "options": [
            "Using metadata object with dynamic values",
            "Using generateMetadata function with params",
            "Using getMetadata exported async function",
            "Using metadataParams in page configuration"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 802,
        "question": "What does revalidate option do for dynamic routes?",
        "options": [
            "Validates parameter format before rendering",
            "Controls ISR regeneration time interval",
            "Revalidates user authentication tokens",
            "Checks parameter values against schema"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 803,
        "question": "Can catch-all routes coexist with static routes?",
        "options": [
            "Yes, static routes take higher priority",
            "No, catch-all overrides all other routes",
            "Yes, but requires manual configuration",
            "No, they cause routing conflicts always"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 804,
        "question": "How do you handle loading states for dynamic routes?",
        "options": [
            "Using loading.js in the route folder",
            "Using isLoading prop in page component",
            "Using Suspense boundary around page",
            "Using useLoading hook in component"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 805,
        "question": "What is the difference between params and searchParams?",
        "options": [
            "params from URL path, searchParams from query",
            "params for client, searchParams for server",
            "params are strings, searchParams are objects",
            "params are optional, searchParams required"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 806,
        "question": "Can you use dynamic routes with route groups?",
        "options": [
            "No, route groups don't support dynamics",
            "Yes, like (group)/[param]/page.js structure",
            "Yes, but only with catch-all routes",
            "No, they have different purposes entirely"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 807,
        "question": "How do you redirect from dynamic route based on param?",
        "options": [
            "Using redirect() function from next/navigation",
            "Using return redirect in page component",
            "Using Router.push in useEffect hook",
            "Using <Redirect> component in JSX"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 808,
        "question": "What happens with special characters in dynamic params?",
        "options": [
            "Next.js URL encodes them automatically",
            "They cause routing errors immediately",
            "They are stripped from parameters",
            "They must be manually encoded first"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 809,
        "question": "How do you generate dynamic metadata in Next.js pages?",
        "options": [
            "Export generateMetadata function from page",
            "Use metadata object with dynamic values",
            "Call setMetadata hook in component body",
            "Import getMetadata from next/metadata"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 810,
        "question": "What parameters does generateMetadata function receive?",
        "options": [
            "Only params object from route segments",
            "Only searchParams from URL query string",
            "Both params and searchParams as objects",
            "Only request object with full details"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 811,
        "question": "Can generateMetadata be an async function?",
        "options": [
            "No, metadata must be synchronous always",
            "Yes, it can fetch data asynchronously",
            "No, async causes hydration errors",
            "Yes, but only in production mode"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 812,
        "question": "What does generateMetadata function return?",
        "options": [
            "Promise resolving to metadata object",
            "String containing page title only",
            "Array of meta tags for head",
            "Metadata object with title and description"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 813,
        "question": "How do you set dynamic Open Graph images?",
        "options": [
            "Using openGraph.images array in metadata",
            "Using og:image meta tag in head",
            "Using setOGImage function from Next",
            "Using dynamicOG property in config"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 814,
        "question": "Can you access parent metadata in generateMetadata?",
        "options": [
            "Yes, but only in root layout",
            "No, each route generates independently",
            "Yes, through third parameter parent",
            "No, metadata doesn't support inheritance"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 815,
        "question": "What is the purpose of parent parameter?",
        "options": [
            "Access parent component props directly",
            "Get metadata from parent route segments",
            "Reference parent layout configuration",
            "Inherit styles from parent components"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 816,
        "question": "How do you set dynamic page title with params?",
        "options": [
            "Using title property with template string",
            "Using setTitle hook in component body",
            "Using dynamicTitle in route config",
            "Using <title> tag in page JSX"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 817,
        "question": "Can you fetch data inside generateMetadata function?",
        "options": [
            "Yes, using async/await for API calls",
            "No, fetching must happen in page",
            "Yes, but only from static files",
            "No, metadata must be synchronous"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 818,
        "question": "What happens when generateMetadata throws an error?",
        "options": [
            "Shows custom error page to user",
            "Falls back to static metadata object",
            "Page renders without any metadata",
            "Next.js shows 500 error page"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 819,
        "question": "How do you set dynamic canonical URLs?",
        "options": [
            "Using alternates.canonical in metadata",
            "Using <link rel='canonical'> in JSX",
            "Using setCanonical from next/head",
            "Using canonical property in config"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 820,
        "question": "Can static metadata and generateMetadata coexist?",
        "options": [
            "Yes, but static takes priority always",
            "No, only one method allowed per route",
            "Yes, but generateMetadata takes priority",
            "No, Next.js throws build error"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 821,
        "question": "How do you set different metadata per locale?",
        "options": [
            "Check locale in generateMetadata params",
            "Use separate metadata per language file",
            "Import translations in metadata object",
            "Use i18n config in next.config.js"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 822,
        "question": "What is title.template used for in metadata?",
        "options": [
            "Defines title format for child routes",
            "Creates dynamic title from database",
            "Validates title length and format",
            "Generates SEO-friendly title strings"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 823,
        "question": "How do you override parent title template?",
        "options": [
            "Use title.default in child metadata",
            "Use title.absolute in child metadata",
            "Use title.override in child metadata",
            "Use title.custom in child metadata"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 824,
        "question": "Can you use environment variables in generateMetadata?",
        "options": [
            "No, env variables unavailable there",
            "Yes, using process.env like usual",
            "No, only in page components",
            "Yes, but only NEXT_PUBLIC_ variables"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 825,
        "question": "How do you set dynamic Twitter Card metadata?",
        "options": [
            "Using <meta> tags in page JSX",
            "Using twitter property in metadata object",
            "Using setTwitterCard from next/head",
            "Using socialMedia.twitter in config"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 826,
        "question": "What does metadataBase property define?",
        "options": [
            "Base URL for relative metadata URLs",
            "Default metadata for all pages",
            "Primary language for content",
            "Root directory for metadata files"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 827,
        "question": "Can you conditionally return different metadata?",
        "options": [
            "Yes, based on params or conditions",
            "No, metadata must be static always",
            "Yes, but only in development mode",
            "No, causes hydration mismatches"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 828,
        "question": "How do you set dynamic meta description?",
        "options": [
            "Using description property in metadata",
            "Using <meta name='description'> tag",
            "Using setDescription hook in component",
            "Using desc property in route config"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 829,
        "question": "What is robots property used for in metadata?",
        "options": [
            "Control search engine crawling behavior",
            "Validate bot traffic to website",
            "Generate robots.txt file automatically",
            "Block malicious bots from site"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 830,
        "question": "Can you merge parent and child metadata objects?",
        "options": [
            "No, child completely overrides parent",
            "Yes, Next.js merges them automatically",
            "Yes, but requires manual spread operator",
            "No, each route is independent"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 831,
        "question": "How do you set dynamic alternate language URLs?",
        "options": [
            "Using alternates.languages in metadata",
            "Using <link hreflang> tags in JSX",
            "Using i18n config in next.config",
            "Using setLanguages from next/head"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 832,
        "question": "What happens when both metadata and generateMetadata exist?",
        "options": [
            "Metadata object takes priority always",
            "Next.js throws compilation error",
            "generateMetadata takes priority",
            "Both merge into single metadata"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 833,
        "question": "Can you use React hooks in generateMetadata?",
        "options": [
            "Yes, all React hooks work normally",
            "No, it's not a React component",
            "Yes, but only useState and useEffect",
            "No, causes server-side errors"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 834,
        "question": "How do you set dynamic viewport metadata?",
        "options": [
            "Using viewport property in metadata",
            "Using <meta viewport> tag in JSX",
            "Using setViewport from next/head",
            "Using screen property in config"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 835,
        "question": "What is icons property used for in metadata?",
        "options": [
            "Generate icon sprites automatically",
            "Define favicon and app icons paths",
            "Optimize icon loading performance",
            "Convert images to icon formats"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 836,
        "question": "Can you cache results of generateMetadata function?",
        "options": [
            "No, metadata generates on every request",
            "Yes, but only in production builds",
            "No, caching causes stale metadata",
            "Yes, Next.js caches automatically"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 837,
        "question": "How do you set dynamic author metadata?",
        "options": [
            "Using <meta name='author'> tag",
            "Using authors array in metadata object",
            "Using setAuthor hook in component",
            "Using author property in config"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 838,
        "question": "What is manifest property for in metadata?",
        "options": [
            "Link to web app manifest file",
            "Generate manifest.json automatically",
            "Configure PWA settings directly",
            "Define app configuration manifest"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 839,
        "question": "What is static rendering in Next.js?",
        "options": [
            "Pages rendered at build time once",
            "Pages rendered on every user request",
            "Pages cached in browser memory only",
            "Pages generated by client JavaScript"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 840,
        "question": "What is dynamic rendering in Next.js?",
        "options": [
            "Pages built once during deployment",
            "Pages cached permanently on server",
            "Pages generated on client side only",
            "Pages rendered on each request individually"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 841,
        "question": "When does Next.js automatically choose dynamic rendering?",
        "options": [
            "When using dynamic functions like cookies",
            "When page has too many components",
            "When images are used in page",
            "When CSS modules are imported"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 842,
        "question": "What are dynamic functions in Next.js?",
        "options": [
            "Functions that run only on client",
            "Functions that change component behavior",
            "Functions like cookies, headers, searchParams",
            "Functions that optimize bundle size"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 843,
        "question": "How do you force static rendering?",
        "options": [
            "Export const dynamic = 'force-static'",
            "Use static property in page config",
            "Add staticMode to next.config.js",
            "Wrap page with StaticRender component"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 844,
        "question": "How do you force dynamic rendering?",
        "options": [
            "Add dynamicMode to route config",
            "Use force dynamic in page settings",
            "Wrap component with DynamicRender",
            "Export const dynamic = 'force-dynamic'"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 845,
        "question": "What does ISR stand for in Next.js?",
        "options": [
            "Instant Server Rendering for pages",
            "Incremental Static Regeneration technique",
            "Internal State Revalidation process",
            "Indexed Server Response caching"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 846,
        "question": "How do you enable ISR for a page?",
        "options": [
            "Export const revalidate with time seconds",
            "Use ISR property in page config",
            "Add revalidate to next.config.js file",
            "Wrap page with ISRProvider component"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 847,
        "question": "What does revalidate: 60 mean in ISR?",
        "options": [
            "Page rebuilds every 60 milliseconds",
            "Page regenerates after 60 user visits",
            "Page revalidates at most every minute",
            "Page caches for exactly 60 hours"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 848,
        "question": "What is the benefit of ISR over static?",
        "options": [
            "ISR pages load faster than static",
            "ISR updates content without full rebuild",
            "ISR reduces server costs significantly",
            "ISR works offline without internet"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 849,
        "question": "What does revalidate: false do in Next.js?",
        "options": [
            "Disables page rendering completely",
            "Makes page fully dynamic rendering",
            "Caches page indefinitely until rebuild",
            "Throws error during build process"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 850,
        "question": "Can you mix static and dynamic rendering?",
        "options": [
            "No, entire app uses one method",
            "Yes, per route basis configuration",
            "No, causes hydration errors always",
            "Yes, but only in production mode"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 851,
        "question": "What is on-demand revalidation in Next.js?",
        "options": [
            "Automatic revalidation every hour daily",
            "User-triggered page refresh manually",
            "Manual revalidation via API call",
            "Browser-based cache clearing method"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 852,
        "question": "How do you trigger on-demand revalidation?",
        "options": [
            "Using revalidatePath or revalidateTag functions",
            "Using refresh button in browser",
            "Using clearCache from next/cache",
            "Using invalidate method on page"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 853,
        "question": "What is the difference between SSR and ISR?",
        "options": [
            "SSR renders per request, ISR regenerates periodically",
            "SSR is slower, ISR is faster",
            "SSR for server, ISR for client",
            "SSR static, ISR is dynamic always"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 854,
        "question": "When should you use static rendering?",
        "options": [
            "For pages with user-specific data",
            "For real-time dashboards with updates",
            "For content that rarely changes",
            "For pages requiring authentication"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 855,
        "question": "When should you use dynamic rendering?",
        "options": [
            "For blog posts that never change",
            "For landing pages with static content",
            "For documentation sites without updates",
            "For personalized user dashboards"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 856,
        "question": "What does dynamicParams option control?",
        "options": [
            "Behavior for non-preRendered dynamic routes",
            "Maximum number of dynamic parameters",
            "Parameter validation rules for routes",
            "Dynamic import loading behavior"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 857,
        "question": "What is the default rendering strategy?",
        "options": [
            "Always dynamic rendering for all pages",
            "Always static rendering for all pages",
            "Mixed based on route requirements",
            "Static with automatic ISR enabled"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 858,
        "question": "Can you use cookies in static rendering?",
        "options": [
            "Yes, cookies work in static pages",
            "No, it forces dynamic rendering automatically",
            "Yes, but only in Client Components",
            "No, causes build time errors"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 859,
        "question": "What happens during ISR regeneration?",
        "options": [
            "Old page shown while new generates",
            "Page shows loading state to users",
            "Users wait for regeneration completion",
            "Page returns 503 error temporarily"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 860,
        "question": "How do you revalidate specific pages only?",
        "options": [
            "Using revalidatePath with page path",
            "Using revalidateAll with page filter",
            "Using updatePage from next/cache",
            "Using refreshPage with page ID"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 861,
        "question": "What is cache tagging in Next.js?",
        "options": [
            "Labeling cache entries for targeted revalidation",
            "Tagging pages with SEO metadata",
            "Marking components for code splitting",
            "Organizing routes in folder structure"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 862,
        "question": "How do you add cache tags?",
        "options": [
            "Using tags option in fetch requests",
            "Using cacheTag property in config",
            "Using setTag from next/cache",
            "Using tag attribute on components"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 863,
        "question": "What does revalidateTag function do?",
        "options": [
            "Validates tag format and syntax",
            "Revalidates all pages with that tag",
            "Tags pages for future revalidation",
            "Removes tags from cache entries"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 864,
        "question": "Can you use headers in static rendering?",
        "options": [
            "Yes, headers available in static pages",
            "No, forces switch to dynamic rendering",
            "Yes, but only response headers",
            "No, throws compilation errors"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 865,
        "question": "What is the purpose of unstable_cache?",
        "options": [
            "Cache function results with custom logic",
            "Clear unstable cache entries manually",
            "Validate cache before using data",
            "Debug caching issues in development"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 866,
        "question": "How does static rendering improve performance?",
        "options": [
            "Reduces server load with pre-rendering",
            "Eliminates JavaScript from pages",
            "Compresses HTML automatically",
            "Removes unused CSS from bundles"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 867,
        "question": "What is the trade-off of dynamic rendering?",
        "options": [
            "Increases build time significantly",
            "Reduces SEO ranking potential",
            "Slower response time per request",
            "Larger JavaScript bundle sizes"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 868,
        "question": "Can you use searchParams in static pages?",
        "options": [
            "Yes, searchParams work in static",
            "No, forces dynamic rendering mode",
            "Yes, but only with generateStaticParams",
            "No, causes build errors"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 869,
        "question": "What does export const dynamic = 'error' do?",
        "options": [
            "Throws error if dynamic rendering needed",
            "Enables error boundaries for page",
            "Catches dynamic errors automatically",
            "Shows error page to users"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 870,
        "question": "How do you check rendering type in development?",
        "options": [
            "Check console logs during build",
            "Use Next.js DevTools browser extension",
            "Check page source HTML comments",
            "Look at network request timing"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 871,
        "question": "What is partial pre-rendering in Next.js?",
        "options": [
            "Rendering only visible viewport content",
            "Mix static shell with dynamic content",
            "Pre-rendering half of page components",
            "Building pages in multiple stages"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 872,
        "question": "Can you use ISR with dynamic routes?",
        "options": [
            "Yes, with generateStaticParams and revalidate",
            "No, dynamic routes always render dynamically",
            "Yes, but only with catch-all routes",
            "No, causes build configuration errors"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 873,
        "question": "What happens when revalidate time expires?",
        "options": [
            "Page deletes from cache immediately",
            "Next request triggers background regeneration",
            "Users see loading state always",
            "Server returns 404 error"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 874,
        "question": "How do you opt out of caching?",
        "options": [
            "Use cache: 'no-store' in fetch",
            "Use noCache property in config",
            "Use disableCache from next/cache",
            "Use cache: false in request"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 875,
        "question": "What is the benefit of static over dynamic?",
        "options": [
            "Faster response time and lower costs",
            "Better personalization per user",
            "More flexibility with real-time data",
            "Easier authentication implementation"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 876,
        "question": "Can you use dynamic rendering in Server Components?",
        "options": [
            "No, Server Components always static",
            "Yes, Server Components support both modes",
            "No, only Client Components support it",
            "Yes, but loses Server Component benefits"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 877,
        "question": "What does fetch cache option 'force-cache' do?",
        "options": [
            "Forces caching even for dynamic data",
            "Clears cache before fetching data",
            "Validates cache before using it",
            "Forces fresh fetch ignoring cache"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 878,
        "question": "How do you debug rendering issues?",
        "options": [
            "Check build output and page indicators",
            "Use debugRender from next/debug",
            "Add debug: true to config",
            "Enable verbose mode in browser"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 879,
        "question": "What is the default caching behavior in Next.js?",
        "options": [
            "No caching by default for requests",
            "Aggressive caching for all requests automatically",
            "Caching only for static assets files",
            "Manual caching configuration required always"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 880,
        "question": "Which layers does Next.js cache data?",
        "options": [
            "Request Memoization, Data Cache, Full Route",
            "Browser Cache, Server Cache, CDN Cache",
            "Memory Cache, Disk Cache, Network Cache",
            "Component Cache, API Cache, Image Cache"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 881,
        "question": "What is Request Memoization in Next.js?",
        "options": [
            "Caching duplicate requests during single render",
            "Storing requests in browser localStorage",
            "Memoizing component render results only",
            "Caching API responses across pages"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 882,
        "question": "How long does Request Memoization last?",
        "options": [
            "Permanently until manual cache clear",
            "Across entire user session duration",
            "Only during single server render",
            "For 60 seconds after request"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 883,
        "question": "What is the Data Cache in Next.js?",
        "options": [
            "Temporary memory cache for components",
            "Persistent storage for fetch requests",
            "Browser cache for static assets",
            "Database query result caching"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 884,
        "question": "How do you opt out of Data Cache?",
        "options": [
            "Using cache: 'no-store' in fetch",
            "Using noCache: true in config",
            "Using disableCache from next/cache",
            "Using skipCache property in request"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 885,
        "question": "What does Full Route Cache store?",
        "options": [
            "User session data per route",
            "API responses for route handlers",
            "Only JavaScript bundles for routes",
            "Complete rendered HTML and RSC payload",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 886,
        "question": "When is Full Route Cache created?",
        "options": [
            "During build time for static routes",
            "On first user request dynamically",
            "After page loads in browser",
            "When user navigates between pages"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 887,
        "question": "What does cache: 'force-cache' do in fetch?",
        "options": [
            "Clears cache before fetching data",
            "Uses cached data or fetches fresh",
            "Forces new fetch ignoring cache",
            "Validates cache before using it"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 888,
        "question": "What does cache: 'no-store' do in fetch?",
        "options": [
            "Stores data without caching metadata",
            "Caches only on client not server",
            "Always fetches fresh data skipping cache",
            "Temporarily stores data in memory"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 889,
        "question": "How do you set custom cache duration?",
        "options": [
            "Using next.revalidate option in fetch",
            "Using cacheTime property in request",
            "Using duration from next/cache",
            "Using ttl property in config"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 890,
        "question": "What does revalidate: 3600 mean?",
        "options": [
            "Cache expires after 3600 milliseconds",
            "Cache revalidates every 3600 seconds",
            "Cache stores 3600 entries maximum",
            "Cache clears after 3600 requests"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 891,
        "question": "Can you revalidate cache programmatically?",
        "options": [
            "Yes, using revalidatePath or revalidateTag",
            "No, only automatic revalidation works",
            "Yes, using clearCache from next/cache",
            "No, requires server restart always"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 892,
        "question": "What is the Router Cache in Next.js?",
        "options": [
            "Server-side cache for route handlers",
            "Client-side cache for route segments",
            "Browser cache for router library",
            "Memory cache for navigation history"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 893,
        "question": "How long does Router Cache persist?",
        "options": [
            "Permanently until browser closes completely",
            "For current session or time-based",
            "Only during single page navigation",
            "Until user clicks refresh button"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 894,
        "question": "What happens when you navigate back in Next.js?",
        "options": [
            "Page always fetches fresh data",
            "Page reloads from server completely",
            "Router Cache provides instant navigation",
            "Browser cache serves the page"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 895,
        "question": "How do you invalidate Router Cache?",
        "options": [
            "Use resetRouter from next/router",
            "Use clearRouter from next/cache",
            "Use invalidateCache on router object",
            "Use router.refresh() from next/navigation",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 896,
        "question": "What is cache tagging used for?",
        "options": [
            "Grouping related cache entries together",
            "Marking cache priority levels",
            "Labeling cache with metadata",
            "Organizing cache by file type"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 897,
        "question": "How do you add tags to fetch cache?",
        "options": [
            "Using cacheTag property in request",
            "Using tags attribute on function",
            "Using next.tags array in fetch",
            "Using setTag from next/cache",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 898,
        "question": "What does revalidateTag function do?",
        "options": [
            "Validates tag format and syntax",
            "Revalidates all cache entries with tag",
            "Tags cache for future revalidation",
            "Removes specific tags from cache"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 899,
        "question": "Can you use multiple tags per fetch?",
        "options": [
            "Yes, pass array of tag strings",
            "No, only one tag allowed per fetch",
            "Yes, but maximum three tags",
            "No, causes cache conflicts"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 900,
        "question": "What is unstable_cache function for?",
        "options": [
            "Caching function results with custom keys",
            "Clearing unstable cache entries manually",
            "Validating cache before using data",
            "Debugging cache issues in development"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 901,
        "question": "How does unstable_cache differ from fetch cache?",
        "options": [
            "Works with non-fetch async functions",
            "Only caches fetch API requests",
            "Stores data in browser only",
            "Requires manual cache invalidation"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 902,
        "question": "What does cache: 'reload' do in fetch?",
        "options": [
            "Reloads page after fetching data",
            "Fetches fresh data and updates cache",
            "Clears cache before each request",
            "Revalidates cache before using it"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 903,
        "question": "Can you cache POST requests in Next.js?",
        "options": [
            "No, only GET requests are cached",
            "Yes, all HTTP methods cache automatically",
            "No, POST always bypasses cache",
            "Yes, with special cache configuration"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 904,
        "question": "What happens when cache becomes stale?",
        "options": [
            "Cache deletes automatically from storage",
            "Stale data served, revalidation happens background",
            "Request blocks until fresh data fetched",
            "Error thrown to user immediately"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 905,
        "question": "How do you disable all caching?",
        "options": [
            "Set export const dynamic = 'force-dynamic'",
            "Use noCache: true in config",
            "Add disableCache to next.config.js",
            "Use cache: false in all fetches"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 906,
        "question": "What is the purpose of cache headers?",
        "options": [
            "Control browser and CDN caching behavior",
            "Define cache storage location path",
            "Set maximum cache entry size",
            "Configure cache encryption settings"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 907,
        "question": "Can you cache third-party API responses?",
        "options": [
            "Yes, using fetch with cache options",
            "No, only internal APIs cache",
            "Yes, but requires proxy setup",
            "No, third-party blocks caching"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 908,
        "question": "What does fetch next.revalidate: false do?",
        "options": [
            "Disables caching for this request",
            "Caches indefinitely until rebuild",
            "Validates data before caching it",
            "Revalidates on every request"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 909,
        "question": "How does caching affect dynamic routes?",
        "options": [
            "Each param value cached separately",
            "All params share single cache",
            "Dynamic routes never use cache",
            "Cache only works with static params"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 910,
        "question": "What is the benefit of Request Memoization?",
        "options": [
            "Eliminates duplicate requests per render",
            "Caches requests across page reloads",
            "Reduces server memory usage significantly",
            "Speeds up network request timing"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 911,
        "question": "Can you cache errors in Next.js?",
        "options": [
            "No, only successful responses cache",
            "Yes, error responses can cache",
            "No, errors bypass cache completely",
            "Yes, but only 404 errors"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 912,
        "question": "What does cache: 'no-cache' do in fetch?",
        "options": [
            "Skips cache completely for request",
            "Revalidates cache before using data",
            "Caches only in memory temporarily",
            "Disables browser cache for request"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 913,
        "question": "How do you check if data is cached?",
        "options": [
            "Check response headers for cache status",
            "Use isCached from next/cache",
            "Check build output logs only",
            "Use cacheCheck helper function"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 914,
        "question": "What is the cache hierarchy in Next.js?",
        "options": [
            "Request Memo → Data Cache → Full Route",
            "Full Route → Data Cache → Request Memo",
            "Data Cache → Request Memo → Full Route",
            "All caches work independently"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 915,
        "question": "Can you customize cache storage location?",
        "options": [
            "No, Next.js controls storage internally",
            "Yes, using cacheDirectory in config",
            "No, cache uses fixed .next folder",
            "Yes, with custom cache adapter"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 916,
        "question": "What happens to cache on deployment?",
        "options": [
            "Cache persists across deployments automatically",
            "Cache clears on every deployment",
            "Cache transfers to new deployment",
            "Cache rebuilds during deployment"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 917,
        "question": "How do you cache database queries?",
        "options": [
            "Using unstable_cache around query function",
            "Using cacheQuery from database library",
            "Using queryCache in database config",
            "Database queries auto-cache by default"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 918,
        "question": "What is stale-while-revalidate strategy?",
        "options": [
            "Serve stale data while fetching fresh",
            "Block request until validation completes",
            "Serve fresh data or nothing",
            "Validate then serve cached data"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 919,
        "question": "What is knitting in React Server Components?",
        "options": [
            "Optimizing component bundle size automatically",
            "Combining Server and Client Components together",
            "Connecting components with shared state",
            "Merging multiple layouts into one"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 920,
        "question": "What is the traditional React rendering paradigm?",
        "options": [
            "Server renders HTML then client hydrates",
            "Everything renders on client side only",
            "Server sends static HTML without JavaScript",
            "Client requests data then renders components"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 921,
        "question": "How does RSC paradigm differ from traditional React?",
        "options": [
            "RSC eliminates client-side JavaScript completely",
            "RSC only works with static generation",
            "RSC allows server and client rendering",
            "RSC requires full page reloads"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 922,
        "question": "What is the dependency tree in RSC?",
        "options": [
            "Tree showing component render order visually",
            "Hierarchy of Server and Client Components",
            "NPM package dependencies for project",
            "Database relationship structure diagram"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 923,
        "question": "Can Server Components import Client Components?",
        "options": [
            "Yes, Server can import Client Components",
            "No, only Client imports Server allowed",
            "Yes, but causes hydration errors",
            "No, they must be separate"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 924,
        "question": "Can Client Components import Server Components?",
        "options": [
            "Yes, with special import syntax",
            "No, it breaks component boundary rules",
            "Yes, but only in development",
            "No, causes infinite render loops"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 925,
        "question": "What is hybrid composition in Next.js?",
        "options": [
            "Mixing Server and Client Components strategically",
            "Combining multiple rendering strategies together",
            "Using both React and Vue",
            "Merging CSS and JavaScript files"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 926,
        "question": "How can Client Components access Server Components?",
        "options": [
            "Import them directly using standard import",
            "Via context API shared between both",
            "Through props as children or slots",
            "Using useServer hook from React",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 927,
        "question": "What is the children pattern in RSC composition?",
        "options": [
            "Inheriting props from parent components",
            "Nesting components in folder structure",
            "Passing Server Components as children prop",
            "Creating child routes in routing",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 928,
        "question": "Why use children pattern over direct import?",
        "options": [
            "Allows Client wrapping Server Components safely",
            "Improves performance by lazy loading",
            "Reduces bundle size significantly always",
            "Enables better TypeScript type checking"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 929,
        "question": "What is the composition boundary in RSC?",
        "options": [
            "Limit on component nesting depth",
            "Border between different route segments",
            "Maximum props that can pass",
            "Line between Server and Client Components",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 930,
        "question": "Can you pass functions through composition boundary?",
        "options": [
            "Yes, all functions serialize automatically",
            "No, unless wrapped in useCallback",
            "Yes, but only arrow functions",
            "No, functions cannot cross boundary",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 931,
        "question": "What data types can cross Server-Client boundary?",
        "options": [
            "Only primitive types like strings",
            "Serializable data excluding functions classes",
            "All JavaScript types including symbols",
            "Only JSON-compatible data structures"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 932,
        "question": "What is the slots pattern in RSC?",
        "options": [
            "Passing multiple Server Components as props",
            "Time slots for rendering components",
            "Memory slots for component caching",
            "Route slots for parallel rendering"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 933,
        "question": "How does the dependency tree affect bundle size?",
        "options": [
            "More Client Components increase bundle size",
            "Server Components always increase bundle",
            "Tree structure doesn't affect size",
            "Deeper trees always reduce bundle"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 934,
        "question": "What happens when Client Component wraps Server Component?",
        "options": [
            "Server Component becomes Client Component automatically",
            "Server Component executes on client side",
            "Server Component maintains server execution boundary",
            "Causes hydration mismatch errors always"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 935,
        "question": "Can you use context across Server-Client boundary?",
        "options": [
            "No, context doesn't cross boundaries",
            "Yes, but only for static values",
            "No, unless using special provider",
            "Yes, context works everywhere seamlessly"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 936,
        "question": "What is the interleaving pattern in RSC?",
        "options": [
            "Alternating Server and Client Components",
            "Interleaving data fetching with rendering",
            "Mixing static and dynamic rendering",
            "Combining multiple data sources together"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 937,
        "question": "Why keep components as Server Components when possible?",
        "options": [
            "Server Components render faster always",
            "Reduces client bundle and improves performance",
            "Server Components have more features",
            "Client Components cause security issues"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 938,
        "question": "What determines if component should be Server or Client?",
        "options": [
            "Need for interactivity and browser APIs",
            "Component file size and complexity",
            "Number of props component receives",
            "Position in component tree structure"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 939,
        "question": "Can Server Components access browser APIs?",
        "options": [
            "Yes, all browser APIs available",
            "No, they run on server only",
            "Yes, but only window object",
            "No, unless using polyfills"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 940,
        "question": "Can Client Components fetch data on server?",
        "options": [
            "No, Client Components always fetch client-side",
            "Yes, during initial server render only",
            "No, fetching requires Server Components",
            "Yes, using special fetch configuration"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 941,
        "question": "What is the recommended composition strategy?",
        "options": [
            "Use Client Components for everything",
            "Use Server Components by default",
            "Mix both equally throughout app",
            "Separate Server and Client completely"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 942,
        "question": "How do you share state between Server and Client?",
        "options": [
            "Pass state through props boundary",
            "Use shared context provider",
            "Store in global variable",
            "Cannot share state between them"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 943,
        "question": "What is component tree colocation in RSC?",
        "options": [
            "Placing related Server and Client together",
            "Storing components in same folder",
            "Rendering components at same time",
            "Sharing component logic between types"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 944,
        "question": "Can you conditionally render Server Components?",
        "options": [
            "Yes, using standard conditional logic",
            "No, Server Components always render",
            "Yes, but only in Client Components",
            "No, causes streaming errors"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 945,
        "question": "What is the lifting content pattern in RSC?",
        "options": [
            "Moving Client Components higher in tree",
            "Lifting Server Components into Client slots",
            "Hoisting state to parent components",
            "Promoting components to root level"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 946,
        "question": "How does RSC improve initial page load?",
        "options": [
            "Reduces JavaScript sent to browser",
            "Compresses HTML more efficiently",
            "Preloads all components upfront",
            "Eliminates CSS from bundle"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 947,
        "question": "What is the component payload in RSC?",
        "options": [
            "Serialized component tree from server",
            "JavaScript bundle for components",
            "Component props and state data",
            "CSS styles for components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 948,
        "question": "Can you use hooks in Server Components?",
        "options": [
            "Yes, all React hooks work",
            "No, hooks are Client-only features",
            "Yes, but only useEffect hook",
            "No, unless using async hooks"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 949,
        "question": "What is the main benefit of hybrid composition?",
        "options": [
            "Simplifies component architecture design",
            "Optimizes both performance and interactivity",
            "Eliminates need for state management",
            "Reduces total number of components"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 950,
        "question": "How do you pass event handlers to Server Components?",
        "options": [
            "Wrap handler in serializable format",
            "Use special serverAction helper function",
            "Cannot pass handlers to Server Components",
            "Pass through context provider instead"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 951,
        "question": "What is the component split strategy in RSC?",
        "options": [
            "Separating interactive from static parts",
            "Splitting large files into smaller",
            "Dividing components by route segments",
            "Breaking components into atoms"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 952,
        "question": "Can Server Components re-render without page reload?",
        "options": [
            "Yes, through server actions or navigation",
            "No, requires full page refresh",
            "Yes, but only with client state",
            "No, Server Components are static"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 953,
        "question": "What is the recommended pattern for forms in RSC?",
        "options": [
            "Use Client Component for entire form",
            "Use Server Component with Server Actions",
            "Use Client wrapper with Server children",
            "Use only Server Components throughout"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 954,
        "question": "How does composition affect Time to Interactive?",
        "options": [
            "More Server Components reduce TTI time",
            "More Client Components reduce TTI time",
            "Composition has no effect on TTI",
            "Only static components affect TTI"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 955,
        "question": "What is the main challenge of RSC composition?",
        "options": [
            "Deciding component placement in tree",
            "Managing component file organization",
            "Handling CSS-in-JS styling",
            "Debugging component render issues"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 956,
        "question": "Can you use third-party Client libraries in Server Components?",
        "options": [
            "Yes, with special import syntax",
            "No, they violate server boundary",
            "Yes, but only pure libraries",
            "No, unless they support RSC"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 957,
        "question": "What is the wrapper pattern in RSC?",
        "options": [
            "Client Component wrapping Server children",
            "Server Component wrapping Client children",
            "HOC pattern for component composition",
            "Layout wrapping all page components"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 958,
        "question": "How do you optimize the dependency tree?",
        "options": [
            "Minimize Client Components and push down",
            "Use only Server Components throughout",
            "Flatten tree structure completely",
            "Increase component nesting depth"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 959,
        "question": "Where should filter state be stored in Next.js?",
        "options": [
            "In localStorage for persistence across sessions",
            "In URL searchParams for share-ability",
            "In global Redux store for access",
            "In component state using useState"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 960,
        "question": "Why store filter values in URL searchParams?",
        "options": [
            "Improves component render performance significantly",
            "Reduces server load and bandwidth",
            "Allows sharing and bookmarking filtered state",
            "Enables offline functionality without network"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 961,
        "question": "How do you read searchParams in Server Components?",
        "options": [
            "Through searchParams prop passed to page",
            "Using useSearchParams hook from next/navigation",
            "Through query prop in component",
            "Using getSearchParams helper from next/server"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 962,
        "question": "How do you update searchParams in Client Components?",
        "options": [
            "Using setSearchParams from next/navigation",
            "Using updateParams from next/router",
            "Using useRouter and router.replace method",
            "Using window.location.search directly"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 963,
        "question": "Should filter component be Server or Client Component?",
        "options": [
            "Server Component for better SEO",
            "Client Component for interactivity handling",
            "Server Component for performance always",
            "Either works depending on requirements"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 964,
        "question": "How do you preserve other searchParams when updating?",
        "options": [
            "Merge new params with existing URLSearchParams",
            "Clear all params then set new",
            "Use preserveParams option in router",
            "Next.js preserves them automatically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 965,
        "question": "What triggers re-render when searchParams change?",
        "options": [
            "Manual refresh required by user",
            "Navigation updates page automatically",
            "setState call in component",
            "Browser reload after URL change"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 966,
        "question": "How do you create filter buttons with searchParams?",
        "options": [
            "Use form with GET method",
            "Use Link component with updated href",
            "Use <a> tag with new URL",
            "Use onClick updating window.location"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 967,
        "question": "How do you clear all filters from URL?",
        "options": [
            "Set searchParams to empty object",
            "Navigate to pathname without search",
            "Use clearFilters from next/navigation",
            "Call resetParams on router object"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 968,
        "question": "Can you use multiple filter criteria simultaneously?",
        "options": [
            "Yes, using multiple searchParams keys",
            "No, only one filter allowed",
            "Yes, but maximum three filters",
            "No, causes URL parsing errors"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 969,
        "question": "How do you handle filter with pagination?",
        "options": [
            "Use separate state for each",
            "Use different routes per page",
            "Store pagination in cookies only",
            "Combine both in searchParams with keys",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 970,
        "question": "What happens to filters on page navigation?",
        "options": [
            "Filters reset to default values",
            "Filters lost unless manually saved",
            "Filters persist in URL automatically",
            "Filters save to localStorage",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 971,
        "question": "How do you set default filter values?",
        "options": [
            "Use defaultParams in router config",
            "Check if searchParam exists or use default",
            "Set in component initial state",
            "Define in next.config.js file"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 972,
        "question": "Should you debounce filter input updates?",
        "options": [
            "No, update URL on every keystroke",
            "Yes, to reduce navigation and renders",
            "No, Next.js debounce&#8217;s automatically",
            "Yes, but only in production"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 973,
        "question": "How do you style active filter button?",
        "options": [
            "Next.js adds active class automatically",
            "Use activeClassName prop on Link",
            "Compare searchParam with button value",
            "Use CSS :active pseudo-class"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 974,
        "question": "Can filters work with Server Components?",
        "options": [
            "No, filters require client interactivity",
            "Yes, searchParams passed to Server Components",
            "Yes, but only with forms",
            "No, Server Components are static"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 975,
        "question": "How do you create a search filter component?",
        "options": [
            "Use input with onChange updating searchParams",
            "Use form with POST method",
            "Use searchBox from next/ui",
            "Use filter prop on data array"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 976,
        "question": "What is best practice for filter URL structure?",
        "options": [
            "Use encoded keys like ?filter=encoded",
            "Use short keys like ?c=b",
            "Use numbered keys like ?f1=value",
            "Use descriptive keys like ?category=books",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 977,
        "question": "How do you handle multiple values for one filter?",
        "options": [
            "Use JSON encoded string",
            "Use array notation in URL",
            "Use separate keys for each value",
            "Use comma-separated string in searchParam",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 978,
        "question": "Should you validate filter values from URL?",
        "options": [
            "No, validation causes performance issues",
            "Yes, but only in production",
            "No, Next.js validates automatically",
            "Yes, users can manipulate URL params",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 979,
        "question": "How do you create a dropdown filter?",
        "options": [
            "Use select with onChange updating URL",
            "Use dropdown from next/components",
            "Use menu with static options",
            "Use radio buttons with forms"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 980,
        "question": "Can you use filter with static generation?",
        "options": [
            "Yes, using generateStaticParams but limited to three filters",
            "No, filtering requires dynamic rendering",
            "Yes, using generateStaticParams for combinations",
            "No, static pages cannot have params",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 981,
        "question": "How do you reset single filter while keeping others?",
        "options": [
            "Set filter key value to empty string",
            "Delete specific key from URLSearchParams",
            "Use resetFilter with filter name",
            "Navigate to base URL manually"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 982,
        "question": "What is the benefit of URL-based filters over state?",
        "options": [
            "Faster component rendering performance overall",
            "Smaller JavaScript bundle size reduction",
            "Shareable links and browser navigation support",
            "Better TypeScript type safety"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 983,
        "question": "How do you handle filter loading states?",
        "options": [
            "Use Suspense boundary around filtered content",
            "Use isLoading from useSearchParams hook",
            "Use loading prop on filter component",
            "Next.js shows loading automatically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 984,
        "question": "Should filters be accessible via keyboard?",
        "options": [
            "No, increases complexity unnecessarily",
            "No, mouse interaction sufficient",
            "Yes, for accessibility and usability",
            "Yes, but only in forms",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 985,
        "question": "How do you create a range filter (min-max)?",
        "options": [
            "Use single param with dash separator",
            "Use two searchParams for min and max",
            "Use range component from next/ui",
            "Use slider with single value"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 986,
        "question": "Can you animate filter transitions in Next.js?",
        "options": [
            "No, routing prevents animations",
            "Yes, but only with framer-motion",
            "No, breaks navigation behavior",
            "Yes, using CSS transitions on elements",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 987,
        "question": "How do you show active filter count?",
        "options": [
            "Use filterCount from useRouter hook",
            "Count non-empty searchParams keys",
            "Next.js tracks count automatically",
            "Use global state counter variable"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 988,
        "question": "What is best pattern for complex filter logic?",
        "options": [
            "Extract filter logic into helper function",
            "Inline all logic in component",
            "Use external filter library always",
            "Create separate filter page route"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 989,
        "question": "How do you handle filter conflicts?",
        "options": [
            "Use filterResolver from next/navigation",
            "Validate and resolve in filter logic",
            "Allow all conflicts to pass through",
            "Disable conflicting filter options"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 990,
        "question": "Should you show filter results count?",
        "options": [
            "No, increases server load unnecessarily",
            "Yes, improves user experience feedback",
            "No, users can count themselves",
            "Yes, but only for small datasets",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 991,
        "question": "How do you create mobile-friendly filters?",
        "options": [
            "Use responsive design with drawer or modal",
            "Create separate mobile filter page",
            "Hide filters on mobile completely",
            "Use horizontal scroll for options"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 992,
        "question": "Can filters affect SEO in Next.js?",
        "options": [
            "No, searchParams ignored by crawlers",
            "Yes, but only with robots meta",
            "No, filters are client-only",
            "Yes, filtered pages can be indexed",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 993,
        "question": "How do you implement Apply Filters button pattern?",
        "options": [
            "Update URL on each selection immediately",
            "Use form submission to apply filters",
            "Store temp state then batch update URL",
            "Next.js handles batch updates automatically"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 994,
        "question": "What is the performance impact of many filters?",
        "options": [
            "More filters increase URL complexity minimally",
            "More filters slow rendering significantly",
            "Filter count doesn't affect performance",
            "More filters reduce server response time"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 995,
        "question": "How do you handle filter with sorting?",
        "options": [
            "Combine both in single param value",
            "Use separate searchParam keys for each",
            "Use different routes for sorting",
            "Store sorting in separate state"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 996,
        "question": "Should you preserve filters across different pages?",
        "options": [
            "Always preserve for consistency",
            "Never preserve to avoid confusion",
            "Only preserve on same route",
            "Depends on user experience requirements",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 997,
        "question": "How do you test filter functionality?",
        "options": [
            "Next.js tests filters automatically",
            "Test URL updates and rendered results",
            "Use filterTest from testing library",
            "Only test UI interaction visually",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 998,
        "question": "What accessibility features should filters have?",
        "options": [
            "Accessibility handled by Next.js automatically",
            "ARIA labels, keyboard nav, screen reader support",
            "Only color contrast and font size",
            "Just keyboard navigation is sufficient",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 999,
        "question": "Where should UI state like modal visibility be stored?",
        "options": [
            "On server for consistency across requests",
            "In client component state with useState",
            "In cookies for server access",
            "In URL searchParams for sharing"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1000,
        "question": "Where should user authentication state be managed in web apps?",
        "options": [
            "In client localStorage for convenience",
            "In URL searchParams for tracking",
            "On server with cookies or sessions",
            "In client Context for access"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1001,
        "question": "Where should filter state be stored in Next.js?",
        "options": [
            "On server in database always",
            "In client component state only",
            "In URL searchParams readable by both",
            "In cookies for persistence"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1002,
        "question": "Where should shopping cart state be stored?",
        "options": [
            "On server database for persistence",
            "In client localStorage temporarily",
            "In URL for sharing capability",
            "Both client storage and server sync"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1003,
        "question": "Where should form validation state be stored?",
        "options": [
            "On server only for security",
            "In client for UX and server for security",
            "In URL searchParams for tracking",
            "In cookies for persistence"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1004,
        "question": "Where should temporary loading states be stored?",
        "options": [
            "In client component state only",
            "On server for consistency",
            "In URL for tracking progress",
            "In cookies for persistence"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1005,
        "question": "Where should theme preferences be stored in Next.js?",
        "options": [
            "In client localStorage for speed",
            "On server database for sync",
            "In cookies accessible by both sides",
            "In URL searchParams for sharing"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1006,
        "question": "Where should cached API responses be stored?",
        "options": [
            "On server with data cache",
            "In client with caching library",
            "Both server cache and client cache",
            "In URL for debugging"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1007,
        "question": "Where should sensitive data like tokens be stored?",
        "options": [
            "In client localStorage for access",
            "In URL searchParams for convenience",
            "On server in httpOnly cookies",
            "In client sessionStorage temporary"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1008,
        "question": "Where should pagination state be stored in Next.js?",
        "options": [
            "On server in database always",
            "In client component state only",
            "In URL searchParams for navigation",
            "In cookies for remembering"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1009,
        "question": "Where should real-time notifications be stored?",
        "options": [
            "On server pushed to client",
            "In client polled from server",
            "In URL for tracking updates",
            "In cookies for persistence"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1010,
        "question": "Where should form input state during typing be stored?",
        "options": [
            "Send to server on every keystroke",
            "In client state until submission",
            "In URL for real-time sharing",
            "In cookies for auto-save"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1011,
        "question": "Where should user session data be stored in web apps?",
        "options": [
            "In client localStorage for speed",
            "In URL searchParams for access",
            "On server with session management",
            "In client Context for sharing"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1012,
        "question": "What is the main advantage of server-side state?",
        "options": [
            "Faster client-side rendering always",
            "Better security and data consistency",
            "Easier state management code",
            "Works offline without network"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1013,
        "question": "What is the main advantage of client-side state?",
        "options": [
            "Better security for sensitive data",
            "Automatic sync across devices",
            "Instant updates without server round-trip",
            "Data persists after browser close"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1014,
        "question": "Where should state that needs SEO indexing be stored?",
        "options": [
            "In client localStorage for speed",
            "On server or URL searchParams",
            "In client Context for access",
            "In cookies for persistence"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1015,
        "question": "Where should state shared across pages be stored?",
        "options": [
            "In URL searchParams for navigation",
            "In client Context for access",
            "On server database for persistence",
            "Depends on state type and requirements"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1016,
        "question": "Can Client Components access server-side state directly in Next.js?",
        "options": [
            "Yes, through automatic state sync",
            "No, must pass via props or API",
            "Yes, using special server hooks",
            "No, unless using Context"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1017,
        "question": "Can Server Components access client-side state directly in Next.js?",
        "options": [
            "Yes, through cookies or headers",
            "No, client state unavailable on server",
            "Yes, using special client functions",
            "No, unless passed via props"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1018,
        "question": "Where should optimistic UI updates be stored?",
        "options": [
            "On server immediately for consistency",
            "In client state before server confirmation",
            "In URL for tracking changes",
            "In cookies for rollback capability"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1019,
        "question": "Where should draft content be stored?",
        "options": [
            "On server auto-saved periodically",
            "In client localStorage temporarily",
            "Both client and server for safety",
            "In URL for sharing drafts"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1020,
        "question": "Where should analytics tracking state be stored?",
        "options": [
            "In client and sent to server",
            "On server only for privacy",
            "In URL for debugging issues",
            "In cookies for persistence"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1021,
        "question": "Where should feature flags be stored in Next.js?",
        "options": [
            "In client for instant toggles",
            "On server for controlled rollout",
            "In URL for testing features",
            "In cookies for user targeting"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1022,
        "question": "What state requires server-side storage for security?",
        "options": [
            "UI theme and appearance preferences",
            "Temporary loading and error states",
            "Authentication tokens and user roles",
            "Modal open/close toggle state"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1023,
        "question": "What state is best kept client-side for performance?",
        "options": [
            "User authentication and authorization",
            "User preferences synced across devices",
            "Shopping cart with checkout data",
            "Temporary UI interactions and animations",
        ],
        "correctOption":3,
        "points": 20
    },
    {
        "id": 1024,
        "question": "How do you sync state between client and server in Next.js?",
        "options": [
            "Using Server Actions, revalidation, or polling",
            "Using automatic state sync library",
            "Using built-in framework sync methods",
            "Framework syncs automatically always"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1025,
        "question": "Where should A/B test variant state be stored?",
        "options": [
            "In client for instant switching",
            "On server for consistent experience",
            "In URL for testing variants",
            "In localStorage for persistence"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1026,
        "question": "Where should scroll position state be stored?",
        "options": [
            "On server for consistency",
            "In client state or sessionStorage",
            "In URL searchParams always",
            "In cookies for persistence"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1027,
        "question": "Where should multi-step form progress be stored?",
        "options": [
            "In client state until submission form",
            "On server after each step",
            "In URL for navigation support",
            "Depends on form complexity and requirements"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1028,
        "question": "What is the trade-off of client-side state?",
        "options": [
            "Better performance but potential data loss",
            "Worse security but easier access",
            "Faster updates but no persistence",
            "All of the above considerations"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1029,
        "question": "What is the trade-off of server-side state?",
        "options": [
            "Better security but slower updates",
            "More persistence but complex code",
            "Easier sync but higher costs",
            "All of the above considerations"
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1030,
        "question": "Where should WebSocket connection state be stored?",
        "options": [
            "On server for connection management",
            "In client for real-time updates",
            "Both client and server coordination",
            "In URL for connection tracking"
        ],
        "correctOption": 2,
        "points": 30
    },
        {
            "id": 1031,
            "question": "What is a Route Handler in Next.js App Router?",
            "options": [
                "A component that renders UI pages",
                "A function handling HTTP requests",
                "A middleware for authentication only",
                "A configuration file for routing"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1032,
            "question": "What does the HTTP GET method represent in REST APIs?",
            "options": [
                "Creating new resources on server",
                "Deleting existing resources from server",
                "Retrieving data from the server",
                "Updating existing resources on server"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1033,
            "question": "What is the purpose of HTTP POST method?",
            "options": [
                "To retrieve data from server",
                "To delete resources from server",
                "To create new resources server",
                "To replace entire resource completely"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1034,
            "question": "What does an API endpoint represent in web development?",
            "options": [
                "A URL for accessing resources",
                "A database connection string only",
                "A React component for forms",
                "A CSS styling configuration file"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1035,
            "question": "What is the main difference between PUT and PATCH methods?",
            "options": [
                "PUT is faster than PATCH",
                "PUT replaces all, PATCH updates partially",
                "PUT creates, PATCH deletes resources",
                "PUT is public, PATCH is private"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1036,
            "question": "What does the HTTP DELETE method do?",
            "options": [
                "Removes resources from the server",
                "Updates existing resources on server",
                "Creates backup of server data",
                "Retrieves deleted items from server"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1037,
            "question": "What is a RESTFul API in web development?",
            "options": [
                "A database management system only",
                "Architecture using HTTP methods standards",
                "A frontend framework for React",
                "A styling library for CSS"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1038,
            "question": "What is the correct filename for creating a Route Handler in Next.js?",
            "options": [
                "api.js or api.ts file",
                "handler.js or handler.ts file",
                "route.js or route.ts file",
                "endpoint.js or endpoint.ts file"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1039,
            "question": "Why can't route.js and page.js exist in the same folder?",
            "options": [
                "They serve different URL paths",
                "They conflict on same route",
                "Next.js doesn't support route files",
                "Page files have higher priority"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1040,
            "question": "What does HTTP status code 201 indicate?",
            "options": [
                "Resource successfully created on server",
                "Request was successfully deleted completely",
                "Server error occurred during request",
                "Resource not found on server"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1041,
            "question": "What is the purpose of HTTP status codes?",
            "options": [
                "To style API responses properly",
                "To indicate request outcome status",
                "To encrypt data during transmission",
                "To compress response data size"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1042,
            "question": "What does idempotent mean for HTTP methods like PUT?",
            "options": [
                "Multiple identical requests same result",
                "Faster response time for requests",
                "Requires authentication for every request",
                "Only works with JSON data"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1043,
            "question": "What is the request object in Route Handlers?",
            "options": [
                "Contains incoming HTTP request data",
                "A configuration for database connection",
                "A React component state object",
                "A styling object for responses"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1044,
            "question": "What is the difference between App Router and Pages Router API routes?",
            "options": [
                "App uses route.js, Pages uses api folder",
                "No difference, they are identical",
                "Pages doesn't support API routes",
                "App Router is slower overall"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1045,
            "question": "What does HTTP verb mean in web development?",
            "options": [
                "A database query language syntax",
                "Methods defining request type action",
                "A JavaScript function for APIs",
                "A CSS property for styling"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1046,
            "question": "What is the purpose of NextResponse.json() in Route Handlers?",
            "options": [
                "To parse incoming JSON data",
                "To return JSON response easily",
                "To validate JSON schema structure",
                "To compress JSON file size"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1047,
            "question": "What does CRUD stand for in API development?",
            "options": [
                "Create, Read, Update, Delete operations",
                "Connect, Request, Upload, Download operations",
                "Cache, Render, Upload, Display operations",
                "Compile, Run, Update, Debug operations"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1048,
            "question": "What is dynamic routing in Route Handlers?",
            "options": [
                "Routes created automatically at build",
                "Routes with variable path segments",
                "Routes that change every request",
                "Routes only for authenticated users"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
        "id": 1049,
        "question": "How do you export a POST handler in a Route Handler file?",
        "options": [
            "export default function POST(request)",
            "export const POST = (request)",
            "export async function POST(request)",
            "export handler POST = (request)"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1050,
        "question": "What URL path would access a Route Handler at app/api/users/route.js?",
        "options": [
            "http://localhost:3000/users endpoint path",
            "http://localhost:3000/api/users endpoint path",
            "http://localhost:3000/route/users endpoint path",
            "http://localhost:3000/api/route/users endpoint path"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1051,
        "question": "How do you return JSON data from a Route Handler?",
        "options": [
            "return Response.json(data) or NextResponse.json(data)",
            "return JSON.stringify(data) as string",
            "return { json: data } object",
            "return new JsonResponse(data) constructor"
        ],
        "correctOption": 0,
        "points": 20
    },
   {
        "id": 1052,
        "question": "Which HTTP method is used to delete a resource in REST APIs?",
        "options": [
            "REMOVE method for resource deletion",
            "DELETE method for resource deletion",
            "DESTROY method for resource deletion",
            "DROP method for resource deletion"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1053,
        "question": "How do you access request body data in a POST Route Handler?",
        "options": [
            "const data = request.body.json()",
            "const data = await request.json()",
            "const data = request.getBody()",
            "const data = await request.body()"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1054,
        "question": "Where should you create a Route Handler for API endpoints in Next.js?",
        "options": [
            "Inside pages directory with api prefix",
            "Inside app directory following folder structure",
            "Inside public directory for api routes",
            "Inside src/api directory with route files"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1055,
        "question": "Can you export multiple HTTP methods from a single route.js file?",
        "options": [
            "No, only one method allowed",
            "Yes, export GET, POST, etc.",
            "Only GET and POST together",
            "Only with middleware configuration enabled"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1056,
        "question": "How do you access URL parameters in a Route Handler?",
        "options": [
            "Through request.query.get() method available",
            "Through request.params object directly accessible",
            "Through context.params in second argument",
            "Through request.url.params object property"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1057,
        "question": "What is authentication in web applications?",
        "options": [
            "Verifying user identity and credentials",
            "Determining user access permissions level",
            "Encrypting data during network transmission",
            "Storing user data in database"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1058,
        "question": "What is authorization in web applications?",
        "options": [
            "Creating new user account registration",
            "Logging user into the system",
            "Checking what user can access",
            "Validating user email address format"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1059,
        "question": "What is the main difference between authentication and authorization?",
        "options": [
            "Authorization comes before authentication always",
            "Both are exactly the same",
            "Authentication verifies identity, authorization checks permissions",
            "Authentication is for APIs only"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1060,
        "question": "What is middleware in Next.js applications?",
        "options": [
            "A database connection layer only",
            "Code running before request completion",
            "A styling library for components",
            "A testing framework for apps"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1061,
        "question": "What is the correct filename for Next.js middleware?",
        "options": [
            "handler.js or handler.ts file",
            "auth.js or auth.ts file",
            "middleware.js or middleware.ts file",
            "guard.js or guard.ts file"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1062,
        "question": "Where should the middleware.js file be placed in Next.js?",
        "options": [
            "Inside app directory with routes",
            "Inside pages directory with API",
            "Inside public folder for access",
            "At project root or src",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 1063,
        "question": "When does Next.js middleware execute during a request?",
        "options": [
            "After response is sent back",
            "Only during build time process",
            "Before route handler runs completely",
            "After component renders on page"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1064,
        "question": "What can middleware be used for in Next.js?",
        "options": [
            "Only for styling components properly",
            "Authentication, redirects, and request modification",
            "Only for database queries execution",
            "Only for static file serving"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1065,
        "question": "What does a typical authentication flow verify?",
        "options": [
            "User permissions for specific resources",
            "Username and password are correct",
            "User's internet connection speed level",
            "User's browser version compatibility info"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1066,
        "question": "What is a common example of authorization?",
        "options": [
            "User logging into the system",
            "Validating email format structure correctly",
            "Checking if user is admin",
            "Hashing user password for security"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1067,
        "question": "What does the middleware matcher config do?",
        "options": [
            "Defines which routes middleware applies",
            "Matches user credentials with database",
            "Connects to external API services",
            "Validates form input data types"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1068,
        "question": "What is a JWT in authentication context?",
        "options": [
            "JavaScript Testing Tool for apps",
            "JSON Web Token for auth",
            "Java Web Technology for servers",
            "Joint Web Transport protocol standard"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1069,
        "question": "What happens if middleware returns NextResponse.redirect()?",
        "options": [
            "Request continues to original destination",
            "User redirected to different URL",
            "Middleware throws an error immediately",
            "Response is cached permanently forever"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1070,
        "question": "Can middleware run on all routes by default?",
        "options": [
            "No, must specify routes explicitly",
            "Yes, except static files explicitly",
            "Only on API routes specifically",
            "Only on dynamic routes only"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1071,
        "question": "What is session-based authentication?",
        "options": [
            "Storing auth state on server",
            "Using only cookies for auth",
            "Authentication without any password required",
            "Only for mobile app authentication"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1072,
        "question": "What is token-based authentication?",
        "options": [
            "Using session cookies for storage",
            "Client stores token after login",
            "Server stores all user data",
            "No authentication is required ever"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1073,
        "question": "What is role-based access control (RBAC)?",
        "options": [
            "Permissions based on user roles",
            "Authentication using email only verification",
            "Database backup strategy for security",
            "Encryption method for sensitive data"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1074,
        "question": "What does NextResponse.next() do in middleware?",
        "options": [
            "Stops request processing completely now",
            "Continues to next middleware layer",
            "Redirects to home page immediately",
            "Throws authentication error to user"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1075,
        "question": "What is protected route in Next.js?",
        "options": [
            "Route requiring authentication to access",
            "Route encrypted with SSL certificate",
            "Route only for admin users",
            "Route with faster loading speed"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1076,
        "question": "Where are cookies typically checked for authentication?",
        "options": [
            "In React component state only",
            "In middleware or server components",
            "In CSS files for styling",
            "In package.json configuration file"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1077,
        "question": "How does middleware access request headers in Next.js?",
        "options": [
            "request.headers.get('header-name') method call",
            "request.getHeader('header-name') function call",
            "request.header['header-name'] array access",
            "headers('header-name') global function call"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1078,
        "question": "What is the security risk of storing JWT in localStorage?",
        "options": [
            "Vulnerable to XSS attacks completely",
            "Takes too much storage space",
            "Cannot be accessed by JavaScript",
            "Automatically expires after one hour"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1079,
        "question": "How can you implement conditional middleware execution based on path?",
        "options": [
            "Use multiple middleware.js files structure",
            "Use matcher config or conditional logic",
            "Middleware always runs on paths",
            "Create separate auth.js for conditions"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1080,
        "question": "What is the purpose of httpOnly flag in authentication cookies?",
        "options": [
            "Makes cookie accessible via JavaScript",
            "Increases cookie expiration time significantly",
            "Prevents JavaScript access to cookie",
            "Compresses cookie data for performance"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1081,
        "question": "How do you pass data from middleware to route handlers?",
        "options": [
            "Through request headers modification carefully",
            "Using global variables for sharing",
            "Cannot pass data between them",
            "Through URL query parameters only"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1082,
        "question": "What happens when middleware modifies request URL in Next.js?",
        "options": [
            "Browser URL changes immediately visible",
            "Causes infinite redirect loop error",
            "Middleware crashes with error message",
            "Internal rewrite without browser change",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1083,
        "question": "How does Next.js middleware handle Server Components authentication?",
        "options": [
            "Runs before components render entirely",
            "Runs after components render completely",
            "Cannot interact with components ever",
            "Only works with client components"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1084,
        "question": "What is the difference between rewrite and redirect in middleware?",
        "options": [
            "Rewrite changes URL, redirect internal",
            "No difference between them functionally",
            "Redirect changes URL, rewrite internal",
            "Both change browser URL visibly",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1085,
        "question": "How can you implement rate limiting in Next.js middleware?",
        "options": [
            "Track requests using headers storage",
            "Next.js handles it automatically always",
            "Impossible in middleware layer currently",
            "Only possible with external services"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1086,
        "question": "What is the recommended way to verify JWT tokens in middleware?",
        "options": [
            "Store secret in environment variables",
            "Hardcode secret in middleware file",
            "Use client-side validation only approach",
            "No verification needed for JWTs"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1087,
        "question": "How does middleware interact with Edge Runtime in Next.js?",
        "options": [
            "Middleware only runs in Node",
            "Must specify Edge explicitly always",
            "Middleware runs in Edge automatically",
            "Edge Runtime doesn't support middleware"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1088,
        "question": "What is the security benefit of using SameSite cookie attribute?",
        "options": [
            "Encrypts cookie data automatically always",
            "Increases cookie storage size limit",
            "Makes cookies accessible cross-origin freely",
            "Prevents CSRF attacks effectively now",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1089,
        "question": "How can you implement multi-factor authentication flow in middleware?",
        "options": [
            "Check for MFA token presence",
            "Middleware cannot handle MFA ever",
            "Only possible in client components",
            "Requires separate server for MFA"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1090,
        "question": "What is the impact of middleware on static page generation?",
        "options": [
            "Static pages ignore middleware completely",
            "Middleware runs on every request",
            "Middleware only runs at build",
            "Causes static pages to fail"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1091,
        "question": "What is a Server Action in Next.js?",
        "options": [
            "Asynchronous functions running on server",
            "Client-side event handler for forms",
            "CSS animation for server components",
            "Database query builder for APIs"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1092,
        "question": "What directive marks a function as Server Action?",
        "options": [
            "'use action' at function top",
            "'server only' at function top",
            "'use server' at function top",
            "'async server' at function top"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1093,
        "question": "Where can you define Server Actions in Next.js?",
        "options": [
            "Only in API route files",
            "In Server Components or files",
            "Only in client component files",
            "Only in middleware.js configuration file"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1094,
        "question": "What is a standalone Server Action file?",
        "options": [
            "File with only CSS styles",
            "File inside public folder only",
            "File with 'use server' directive",
            "File for environment variables config"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1095,
        "question": "Where can Server Actions be invoked from?",
        "options": [
            "Only from server components always",
            "Only from middleware.js configuration file",
            "Only from API route handlers",
            "Server/Client Components and forms too",
        ],
        "correctOption": 3,
        "points": 20
    },

    {
        "id": 1096,
        "question": "Can Server Actions be called from Client Components?",
        "options": [
            "No, only from servers",
            "Yes, by importing them properly",
            "Only with special middleware setup",
            "Only during build time phase"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1097,
        "question": "What is the main difference between Server Actions and API endpoints?",
        "options": [
            "Server Actions simpler, no routes",
            "API endpoints are always faster",
            "Server Actions only for databases",
            "No difference between them functionally"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1098,
        "question": "What happens during the Server Action execution flow?",
        "options": [
            "Requires manual API endpoint creation",
            "Everything runs on client side",
            "Only executes during build time",
            "Client calls, server executes, returns",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 1099,
        "question": "Can you use Server Actions in form submissions?",
        "options": [
            "No, only API routes",
            "Only with JavaScript enabled always",
            "Yes, with action prop directly",
            "Only in client components specifically"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1100,
        "question": "What do Server Actions automatically handle?",
        "options": [
            "Only CSS styling for forms",
            "POST requests and serialization",
            "Only database connection pooling tasks",
            "Only frontend state management logic"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1101,
        "question": "How does Next.js create endpoints for Server Actions?",
        "options": [
            "You must manually create them",
            "Automatically generates POST endpoints internally",
            "Only works with GET requests",
            "Requires external server configuration setup"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1102,
        "question": "What is the relationship between Server Actions and caching?",
        "options": [
            "Server Actions revalidate cache automatically",
            "Server Actions cannot affect cache",
            "Cache only works with APIs",
            "Server Actions disable all caching"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1103,
        "question": "Can Server Actions be used for data mutations?",
        "options": [
            "No, only for reading",
            "Yes, for create, update, delete",
            "Only for deletion operations specifically",
            "Only with external database services"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1104,
        "question": "What does 'use server' inside a function do?",
        "options": [
            "Marks single function as action",
            "Marks entire file as server",
            "Creates API endpoint automatically always",
            "Enables server-side rendering only mode"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1106,
        "question": "Do Server Actions work without JavaScript enabled?",
        "options": [
            "No, JavaScript is required always",
            "Yes, with progressive enhancement support",
            "Only on modern browsers specifically",
            "Only with external libraries installed"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1107,
        "question": "How do you pass data to Server Actions?",
        "options": [
            "Through function parameters or FormData",
            "Through global variables storage",
            "Through URL query strings only",
            "Through localStorage in browser only"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1108,
        "question": "What is the security benefit of Server Actions?",
        "options": [
            "Faster than API endpoints always",
            "Automatically encrypts all data fully",
            "Prevents all SQL injection attacks",
            "Code never sent to client",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1109,
        "question": "Can you return JSX from Server Actions?",
        "options": [
            "No, only JSON data",
            "Yes, for optimistic updates support",
            "Only in client components specifically",
            "Only with special configuration setup"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1110,
        "question": "How do Server Actions trigger cache revalidation?",
        "options": [
            "Using revalidatePath or revalidateTag functions",
            "Automatically without any code needed",
            "Cache never revalidates with actions",
            "Only through manual page refresh"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1111,
        "question": "What is the execution context of Server Actions?",
        "options": [
            "Runs on both simultaneously always",
            "Runs on client browser side",
            "Always runs on server environment",
            "Runs only during build process"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1112,
        "question": "Can you use Server Actions with useTransition hook?",
        "options": [
            "No, incompatible with React hooks",
            "Yes, for pending states handling",
            "Only with useEffect hook together",
            "Only in class components specifically"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1113,
        "question": "What happens when Server Action throws an error?",
        "options": [
            "Application immediately crashes completely ",
            "Caught by error boundaries properly",
            "Error is silently ignored always",
            "Automatically retries three times always"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1114,
        "question": "How do Server Actions differ from traditional form submissions?",
        "options": [
            "Server Actions don't require routing",
            "Traditional forms are always faster",
            "Server Actions only work offline",
            "No difference between them ever"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1115,
        "question": "Can Server Actions access cookies and headers?",
        "options": [
            "No, security prevents this access",
            "Yes, using Next.js helper functions",
            "Only cookies, not headers ever",
            "Only in production environment mode"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1116,
        "question": "What is closure in Server Actions context?",
        "options": [
            "Closure is not supported here",
            "Actions are always isolated completely",
            "Actions can access outer scope",
            "Only global variables are accessible",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1117,
        "question": "How do you handle validation in Server Actions?",
        "options": [
            "Validation happens automatically always on client",
            "Validate data before processing logic",
            "Server Actions skip validation entirely",
            "Only client-side validation is possible"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1118,
        "question": "Can Server Actions be used with TypeScript?",
        "options": [
            "No, JavaScript only support available",
            "Yes, with full type safety",
            "Only with custom configuration setup",
            "Only in development mode usage"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1119,
        "question": "What is binding in Server Actions?",
        "options": [
            "Connecting to database systems only",
            "Creating event listeners for forms",
            "Passing arguments with bind method",
            "Styling components with CSS rules"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1120,
        "question": "How do Server Actions integrate with React&apos;s Suspense?",
        "options": [
            "Requires special Suspense configuration always",
            "Actions work with Suspense boundaries",
            "Suspense is incompatible with actions",
            "Only client actions support Suspense",
        ],
        "correctOption": 1,
        "points": 30
    },
        {
            "id": 1121,
            "question": "What is useFormStatus hook in React?",
            "options": [
                "Hook for form validation rules",
                "Hook for form pending state",
                "Hook for form styling options",
                "Hook for form data storage"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1122,
            "question": "Where must useFormStatus be called from?",
            "options": [
                "From parent form component directly",
                "From child component of form",
                "From any component in app",
                "From Server Action function only"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1123,
            "question": "Can React Hook Form work with Server Actions?",
            "options": [
                "Yes, using action prop integration",
                "No, they are incompatible together",
                "Only with additional middleware setup",
                "Only in production mode only"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1124,
            "question": "What does useFormStatus return?",
            "options": [
                "Only boolean pending state value",
                "Object with pending and data",
                "Array with state and setter",
                "String with form status message"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1125,
            "question": "How do you integrate React Hook Form with Server Actions?",
            "options": [
                "Requires external library for integration",
                "Cannot integrate them together ever",
                "Pass Server Action to handleSubmit",
                "Only through API endpoints route",
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 1126,
            "question": "What is the main benefit of useFormStatus?",
            "options": [
                "Automatic form validation handling logic",
                "Prevents form submission errors always",
                "Automatically saves form data locally",
                "Shows loading state during submission",
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 1127,
            "question": "Can you use useFormStatus outside a form context?",
            "options": [
                "Yes, anywhere in application code",
                "Only in Server Components specifically",
                "No, must be form child",
                "Only with special configuration setup"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 1128,
            "question": "How does React Hook Form handle validation with Server Actions?",
            "options": [
                "Client validates, then Server Action",
                "Only server-side validation happens always",
                "No validation is possible ever",
                "Validation only during build time"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1129,
            "question": "What is the pending property in useFormStatus?",
            "options": [
                "Boolean indicating form submission state",
                "Number of pending form fields",
                "Array of validation errors found",
                "String with current form status"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1130,
            "question": "Can you disable submit button using useFormStatus?",
            "options": [
                "No, requires custom state logic",
                "Yes, using pending property value",
                "Only with React Hook Form",
                "Only in Client Components specifically"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1131,
            "question": "How do you get form data in Server Action with React Hook Form?",
            "options": [
                "Through function parameters or FormData",
                "Only through global state storage",
                "Through localStorage in browser only",
                "Server Actions cannot access data"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1132,
            "question": "What is the data property in useFormStatus?",
            "options": [
                "Contains submitted FormData object values",
                "Contains validation error messages only",
                "Contains form component reference object",
                "Contains user authentication token data"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1133,
            "question": "Can React Hook Form trigger Server Action revalidation?",
            "options": [
                "Yes, Server Action handles it",
                "No, revalidation is impossible here",
                "Only with special hook configuration",
                "Only during page navigation events"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 1134,
            "question": "What happens when Server Action is executing?",
            "options": [
                "useFormStatus pending becomes true immediately",
                "Form automatically resets all fields",
                "Page refreshes completely automatically always",
                "Nothing changes in UI state"
            ],
            "correctOption": 0,
            "points": 10
        },
    {
        "id": 1135,
        "question": "How do you show loading spinner with useFormStatus?",
        "options": [
            "useFormStatus provides built-in spinner component",
            "Check pending and render conditionally",
            "Cannot show loading state ever",
            "Only with external library support"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1136,
        "question": "Can you use multiple useFormStatus in same form?",
        "options": [
            "No, only one per form",
            "Only in Server Components specifically",
            "Only with nested forms structure",
            "Yes, in different child components",
        ],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 1137,
        "question": "What is progressive enhancement with Server Actions and forms?",
        "options": [
            "Forms work without JavaScript enabled",
            "Forms only work with JavaScript",
            "Forms automatically validate all data",
            "Forms submit faster than normal"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1138,
        "question": "How does React Hook Form's handleSubmit work with Server Actions?",
        "options": [
            "Validates then calls Server Action",
            "Skips validation completely for speed",
            "Only works with API endpoints",
            "Prevents Server Action execution always"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1139,
        "question": "Can useFormStatus track multiple form submissions?",
        "options": [
            "Yes, tracks all nested forms",
            "No, only tracks parent form",
            "Only with special configuration setup",
            "Only in development mode usage"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1140,
        "question": "What is the method property in useFormStatus?",
        "options": [
            "Post method for form fields",
            "HTTP method of form submission",
            "Component rendering method reference object",
            "Database query method for data"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1141,
        "question": "How do you handle errors from Server Actions in forms?",
        "options": [
            "With try-catch in Client component",
            "Errors automatically appear in console",
            "Return error from Server Action",
            "Cannot handle errors from actions",
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1142,
        "question": "Can React Hook Form reset after Server Action success?",
        "options": [
            "No cannot reset with Server Actions",
            "Automatically resets always by default",
            "Yes, call reset method manually",
            "Only resets on page refresh"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1143,
        "question": "What is optimistic UI update with Server Actions?",
        "options": [
            "Update UI before server confirms",
            "Update UI after server confirms",
            "Only for read operations usage",
            "Automatic feature requiring no code"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1144,
        "question": "How do you pass additional data to Server Action with React Hook Form?",
        "options": [
            "Through global state storage",
            "Through URL parameters route",
            "Use bind method or hidden fields",
            "Cannot pass additional data ever",
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1145,
        "question": "Can useFormStatus access form validation errors?",
        "options": [
            "Yes, through errors property always",
            "No, only pending and data",
            "Only with React Hook Form",
            "Only in Server Components specifically"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1146,
        "question": "What is the action property in useFormStatus?",
        "options": [
            "Validation action for form fields",
            "Array of all form actions",
            "Reference to current form action",
            "CSS action for form styling"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1147,
        "question": "How does Server Action affect form submission flow?",
        "options": [
            "Submits without page refresh automatically",
            "Always causes full page reload",
            "Prevents form submission completely always",
            "Only works with page navigation"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1148,
        "question": "Can you use useFormState with Server Actions?",
        "options": [
            "Yes, for form state management",
            "No, useFormStatus only for actions",
            "Only with API endpoints route",
            "Only in Server Components specifically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1149,
        "question": "What is the relationship between useTransition and form submission?",
        "options": [
            "useTransition prevents form submission",
            "No relationship between them ever",
            "useTransition shows pending UI state",
            "Only works with API endpoints"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1150,
        "question": "How do you validate Server Action response in React Hook Form?",
        "options": [
            "Validation always happens automatically",
            "Check returned data and setError",
            "Cannot validate server responses ever",
            "Only through middleware validation layer"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1151,
        "question": "What is Optimistic UI in web development?",
        "options": [
            "Wait for server response always",
            "Update UI before server confirms",
            "Only update UI after validation",
            "Automatically cache all UI changes"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1152,
        "question": "What is the main benefit of Optimistic UI?",
        "options": [
            "Reduces server load significantly always",
            "Improves perceived app performance speed",
            "Eliminates all network requests completely",
            "Prevents all error scenarios entirely"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1153,
        "question": "When should you use Optimistic UI updates?",
        "options": [
            "For actions likely to succeed",
            "For all server requests always",
            "Only for read operations usage",
            "Never with Server Actions usage"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1154,
        "question": "What happens if an Optimistic update fails?",
        "options": [
            "Application crashes completely immediately always",
            "Keep optimistic changes showing forever",
            "Nothing, ignore the error silently",
            "Revert UI to previous state",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 1155,
        "question": "Which React hook is commonly used for Optimistic UI?",
        "options": [
            "useEffect for side effects only",
            "useOptimistic for optimistic updates directly",
            "useState for state management only",
            "useRef for DOM references only"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1156,
        "question": "What does useOptimistic hook return?",
        "options": [
            "Array with optimistic state, update function",
            "Only the optimistic state value",
            "Object with state and methods",
            "Promise resolving to state value"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1157,
        "question": "Can you use Optimistic UI with Server Actions?",
        "options": [
            "No, incompatible with Server Actions",
            "Yes, perfect combination for UX",
            "Only with API endpoints route",
            "Only in Client Components specifically"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1158,
        "question": "What is rollback in Optimistic UI context?",
        "options": [
            "Refreshing entire page completely always",
            "Moving forward with new state",
            "Reverting to previous UI state",
            "Deleting all cached data entirely"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1159,
        "question": "How do you handle errors in Optimistic updates?",
        "options": [
            "Show error and revert state",
            "Ignore errors and continue forward",
            "Errors cannot occur with optimistic",
            "Automatically retry infinite times always"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1160,
        "question": "What is the trade-off of using Optimistic UI?",
        "options": [
            "Complexity vs perceived performance gain",
            "No trade-offs, always better approach",
            "Slower performance in all cases",
            "Cannot use with modern frameworks"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1161,
        "question": "How does useOptimistic work with Server Actions?",
        "options": [
            "Prevents Server Action execution completely",
            "Waits for action then updates",
            "Only updates after successful action",
            "Updates UI, action runs, confirms/reverts",
        ],
        "correctOption":3,
        "points": 30
    },
    {
        "id": 1162,
        "question": "What should you consider before implementing Optimistic UI?",
        "options": [
            "Action success rate and rollback complexity",
            "Only the UI design aesthetics",
            "Server performance and speed only",
            "Browser compatibility with CSS only"
        ],
        "correctOption": 0,
        "points": 30
    },
        {
            "id": 1163,
            "question": "What is the App Router in Next.js?",
            "options": [
                "New routing system using app directory",
                "Old routing system with pages folder",
                "External routing library for React",
                "Database routing configuration system"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1164,
            "question": "What is the Pages Router in Next.js?",
            "options": [
                "New routing system introduced recently",
                "API routing system only specifically",
                "Legacy routing using pages directory",
                "Third-party routing solution for apps",
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1165,
            "question": "Which router supports React Server Components?",
            "options": [
                "Both support them equally well",
                "Pages Router supports them natively",
                "App Router supports them natively",
                "Neither router supports them ever"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1166,
            "question": "What is the file convention in App Router?",
            "options": [
                "route.js for all pages rendering",
                "index.js for all routes always",
                "page.js for routes and pages",
                "app.js for routing configuration only"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1167,
            "question": "What is the file convention in Pages Router?",
            "options": [
                "page.js defines all routes always",
                "Files in pages directory routes",
                "route.js creates all pages rendering",
                "Only index.js works for routing"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1168,
            "question": "Which router introduced layouts feature?",
            "options": [
                "Pages Router with _app.js only",
                "App Router with layout.js natively",
                "Both have identical layout support",
                "Neither supports layouts at all"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 1169,
            "question": "How does App Router handle loading states?",
            "options": [
                "Using loading.js file convention specifically",
                "Only with custom React components",
                "No built-in loading support available",
                "Only through external libraries usage"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1170,
            "question": "How does Pages Router handle loading states?",
            "options": [
                "Not possible in Pages Router",
                "Using loading.js file automatically always",
                "Automatic loading states built-in always",
                "Manual implementation with custom code",
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 1171,
            "question": "Which router supports streaming by default?",
            "options": [
                "Pages Router streams automatically always",
                "App Router supports streaming natively",
                "Both support streaming equally well",
                "Neither supports streaming at all"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1172,
            "question": "What is the error handling file in App Router?",
            "options": [
                "error.js handles all errors always",
                "errors.js for global error handling",
                "error.js creates error boundaries automatically",
                "No error handling files available",
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1173,
            "question": "What is the error handling file in Pages Router?",
            "options": [
                "error.js handles all errors automatically",
                "No error handling available ever",
                "errors.js for error boundary creation",
                "error.js for custom error pages",
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 1174,
            "question": "How does App Router define API routes?",
            "options": [
                "route.js file in app directory",
                "api folder inside pages directory",
                "Cannot create API routes ever",
                "Only with external server setup"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 1175,
            "question": "How does Pages Router define API routes?",
            "options": [
                "route.js in pages directory structure",
                "with middleware configuration setup",
                "Files in pages/api directory structure",
                "Cannot create API routes ever",
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 1176,
            "question": "Which router supports nested layouts natively?",
            "options": [
                "Pages Router with custom implementation",
                "App Router with native support",
                "Both support nested layouts equally",
                "Neither supports nested layouts ever"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 1177,
            "question": "What is the default rendering in App Router?",
            "options": [
                "Static generation by default always",
                "Incremental static regeneration by default",
                "Client-side rendering by default always",
                "Server-side rendering by default always",
            ],
            "correctOption": 3,
            "points": 20
        },
    {
        "id": 1178,
        "question": "What is the default rendering in Pages Router?",
        "options": [
            "Server Components by default always",
            "Depends on data fetching method",
            "Always client-side rendering only mode",
            "Only static generation supported ever"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1179,
        "question": "How does App Router handle data fetching?",
        "options": [
            "Only with getServerSideProps function always",
            "Only with getStaticProps function always",
            "Using fetch with caching automatically",
            "Cannot fetch data in components"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1180,
        "question": "How does Pages Router handle data fetching?",
        "options": [
            "Using fetch API directly only",
            "getServerSideProps, getStaticProps, and getInitialProps",
            "Only with external libraries support",
            "Cannot fetch data in pages"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1181,
        "question": "Which router supports Server Actions?",
        "options": [
            "Pages Router with special config",
            "App Router supports them natively",
            "Both support Server Actions equally",
            "Neither supports Server Actions ever"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1182,
        "question": "What is template.js in App Router?",
        "options": [
            "Similar to layout but remounts",
            "Identical to layout.js functionality exactly",
            "Only for styling templates configuration",
            "Not a valid file convention"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1183,
        "question": "Does Pages Router have template.js?",
        "options": [
            "Yes, identical to App Router",
            "No, not available in Pages",
            "Only with custom configuration setup",
            "Only in production mode available"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1184,
        "question": "How does App Router handle metadata?",
        "options": [
            "Using Head component from next/head",
            "Using metadata export or generateMetadata",
            "Only with external SEO libraries",
            "Cannot add metadata in routes"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1185,
        "question": "How does Pages Router handle metadata?",
        "options": [
            "Using metadata export from file",
            "Using Head component from next/head",
            "Automatic metadata generation always available",
            "Cannot add metadata in pages"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1186,
        "question": "Which router supports parallel routes?",
        "options": [
            "Pages Router with custom setup",
            "App Router with @ convention",
            "Both support parallel routes equally",
            "Neither supports parallel routes ever"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1187,
        "question": "Which router supports intercepting routes?",
        "options": [
            "Both support intercepting routes equally",
            "Pages Router with middleware only",
            "App Router with (..) convention",
            "Neither supports intercepting routes ever"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1188,
        "question": "What is the _app.js file in Pages Router?",
        "options": [
            "Configuration file for Next.js",
            "API route for authentication only",
            "Error handling component for pages",
            "Custom App component wrapper globally",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 1189,
        "question": "What replaces _app.js in App Router?",
        "options": [
            "app.js in app directory structure",
            "Root layout.js in app directory",
            "_app.js still used in App",
            "No replacement exists at all"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1190,
        "question": "What is _document.js in Pages Router?",
        "options": [
            "Custom HTML document structure wrapper",
            "Page component for documentation routes",
            "API route for documents only",
            "Styling configuration file for CSS"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1191,
        "question": "Does App Router have _document.js?",
        "options": [
            "Yes, identical to Pages Router",
            "No, uses layout.js instead mainly",
            "Only with special configuration enabled",
            "Only in production build mode"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1192,
        "question": "How does App Router handle dynamic routes?",
        "options": [
            "[...param] for all routes always",
            "[param] folder naming convention exactly",
            "No dynamic routes supported ever",
            "With middleware configuration setup"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1193,
        "question": "How does Pages Router handle dynamic routes?",
        "options": [
            "Using folder naming convention only",
            "[param].js file naming convention exactly",
            "No dynamic routes supported ever",
            "Only with external libraries usage"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1194,
        "question": "Which router supports route groups?",
        "options": [
            "Both support route groups equally",
            "Neither supports route groups ever",
            "Pages Router with folders only",
            "App Router with (group) convention",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 1195,
        "question": "What is the purpose of route groups in App Router?",
        "options": [
            "Organization without affecting URL path",
            "Grouping API endpoints together",
            "Creating protected routes automatically always",
            "No practical purpose at all"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1196,
        "question": "Can you use both routers in same project?",
        "options": [
            "No, must choose one only",
            "Yes, during incremental migration phase",
            "Only in development mode usage",
            "Only with special Next.js version"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1197,
        "question": "Which router is recommended for new projects?",
        "options": [
            "Pages Router for stability always",
            "App Router for modern features",
            "Both are equally recommended always",
            "Neither, use external router instead"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1198,
        "question": "What is not-found.js in App Router?",
        "options": [
            "Custom 404 page for routes",
            "Error boundary for all errors",
            "Loading state component for pages",
            "API route for missing data"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1199,
        "question": "What is 404.js in Pages Router?",
        "options": [
            "not-found.js alternative file naming convention",
            "No 404 pages supported ever",
            "Custom 404 error page exactly",
            "Only works with middleware setup"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1200,
        "question": "Which router supports Suspense boundaries better?",
        "options": [
            "Pages Router with custom boundaries",
            "App Router with native integration",
            "Both support Suspense equally well",
            "Neither supports Suspense at all"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1201,
        "question": "How does App Router handle client components?",
        "options": [
            "'use client' directive at top",
            "All components client by default",
            "Cannot use client components ever",
            "Only with special configuration setup"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1202,
        "question": "How does Pages Router handle client components?",
        "options": [
            "All components client by default",
            "Using 'use client' directive always",
            "Cannot use client components ever",
            "Only Server Components are supported"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1203,
        "question": "Which router supports middleware better?",
        "options": [
            "Pages Router with middleware.js only",
            "Both support middleware equally well",
            "App Router with enhanced features",
            "Neither supports middleware at all"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1204,
        "question": "What is the caching behavior in App Router?",
        "options": [
            "Aggressive caching by default automatically",
            "No caching by default ever",
            "Only manual caching is possible",
            "Caching only for static pages"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1205,
        "question": "What is the caching behavior in Pages Router?",
        "options": [
            "Aggressive caching like App Router",
            "Depends on rendering method chosen",
            "No caching supported at all",
            "Only for API routes caching"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1206,
        "question": "How does App Router handle catch-all routes?",
        "options": [
            "[...slug] folder naming convention exactly",
            "[...slug].js file naming convention exactly",
            "No catch-all routes supported ever",
            "Only with middleware configuration setup"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1207,
        "question": "How does Pages Router handle catch-all routes?",
        "options": [
            "[...slug] folder naming convention exactly",
            "[...slug].js file naming convention exactly",
            "No catch-all routes supported ever",
            "Only with custom implementation code"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1208,
        "question": "Which router supports route handlers?",
        "options": [
            "Pages Router with route.js files",
            "App Router with route.js files",
            "Both support route handlers equally",
            "Neither supports route handlers ever"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1209,
        "question": "What is getServerSideProps in Pages Router?",
        "options": [
            "API route handler function only",
            "Static generation function for builds",
            "Client-side data fetching function only",
            "Function for server-side rendering data",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 1210,
        "question": "Does App Router have getServerSideProps?",
        "options": [
            "Yes, identical to Pages Router",
            "No, uses async components instead",
            "Only with special configuration enabled",
            "Only in production mode available"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1211,
        "question": "What is getStaticProps in Pages Router?",
        "options": [
            "Server-side rendering function for data",
            "Client-side data fetching function only",
            "Function for static generation data",
            "API route handler function only"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1212,
        "question": "Does App Router have getStaticProps?",
        "options": [
            "Yes, identical to Pages Router",
            "Only with ISR enabled specifically",
            "No, uses fetch with cache",
            "Only in development mode usage"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 1213,
        "question": "Which router supports ISR (Incremental Static Regeneration)?",
        "options": [
            "Only Pages Router supports ISR",
            "Both support ISR with revalidate",
            "Only App Router supports ISR",
            "Neither supports ISR at all"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1214,
        "question": "How does App Router implement ISR?",
        "options": [
            "Using revalidate in fetch options",
            "Using getStaticProps with revalidate property",
            "ISR not supported in App",
            "Only manual revalidation is possible"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1215,
        "question": "How does Pages Router implement ISR?",
        "options": [
            "Using fetch with revalidate option",
            "Using revalidate in getStaticProps return",
            "ISR not supported in Pages",
            "Only with middleware configuration setup"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1216,
        "question": "Which router has better TypeScript support?",
        "options": [
            "Both have identical TypeScript support",
            "Pages Router with better types",
            "App Router with enhanced types",
            "Neither has TypeScript support ever"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1217,
        "question": "What is the main advantage of App Router?",
        "options": [
            "Server Components and modern features",
            "Simpler learning curve for beginners",
            "Better backwards compatibility always guaranteed",
            "Faster build times in production"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1218,
        "question": "What is the main advantage of Pages Router?",
        "options": [
            "Server Components support built-in always",
            "Maturity and ecosystem stability established",
            "Better performance in all cases",
            "More modern features than App"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1219,
        "question": "Can App Router use getInitialProps?",
        "options": [
            "Yes, fully supported function always",
            "No, not recommended in App",
            "Only in Client Components specifically",
            "Only with special configuration setup"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1220,
        "question": "Which router supports font optimization better?",
        "options": [
            "Pages Router with next/font only",
            "App Router with next/font integration",
            "Both optimize fonts equally well",
            "Neither optimizes fonts at all"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1221,
        "question": "How does App Router handle image optimization?",
        "options": [
            "Using next/image component with features",
            "No image optimization supported ever",
            "Only with external CDN services",
            "Manual optimization required always for images"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1222,
        "question": "How does Pages Router handle image optimization?",
        "options": [
            "No image optimization available ever",
            "Using next/image component with features",
            "Only with external libraries support",
            "Automatic optimization without configuration always"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1223,
        "question": "Which router supports static exports better?",
        "options": [
            "Pages Router with easier setup",
            "Both support static exports equally",
            "App Router with limitations noted",
            "Neither supports static exports ever"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1224,
        "question": "What is the performance difference between routers?",
        "options": [
            "App Router significantly always fast ",
            "App Router generally faster with RSC",
            "Pages Router always faster overall",
            "No performance difference between them",
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1225,
        "question": "How does App Router handle redirects?",
        "options": [
            "Using redirect() function from next/navigation",
            "Only with middleware configuration setup",
            "Using useRouter hook push method",
            "Redirects not supported in App"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 1226,
        "question": "How does Pages Router handle redirects?",
        "options": [
            "Using redirect() function from navigation",
            "Using router.push or getServerSideProps redirect",
            "Only with middleware configuration setup",
            "Redirects not supported in Pages"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 1227,
        "question": "Which router supports granular caching control?",
        "options": [
            "Both have identical caching control",
            "Pages Router with cache control",
            "App Router with segment config",
            "Neither supports caching control ever"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1228,
        "question": "Can you mix Server and Client Components in App Router?",
        "options": [
            "No, must choose one type",
            "Yes, with 'use client' directive",
            "Only with middleware configuration setup",
            "Only in development mode usage"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1229,
        "question": "Which router supports partial pre-rendering better?",
        "options": [
            "Pages Router with manual implementation",
            "App Router with experimental PPR",
            "Both support PPR equally well",
            "Neither supports PPR at all"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 1230,
        "question": "How does App Router handle navigation?",
        "options": [
            "Using useRouter from next/navigation exactly",
            "Using useRouter from next/router exactly",
            "No programmatic navigation supported ever",
            "Only with Link component usage"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 1231,
        "question": "How does Pages Router handle navigation?",
        "options": [
            "Using useRouter from next/navigation exactly",
            "Using useRouter from next/router exactly",
            "No programmatic navigation supported ever",
            "Only with Link component usage"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 1232,
        "question": "Which router supports automatic code splitting better?",
        "options": [
            "Pages Router with better splitting",
            "Both have automatic code splitting",
            "App Router with improved splitting",
            "Neither has code splitting support"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 1233,
        "question": "What is the bundle size difference?",
        "options": [
            "Pages Router always smaller bundles",
            "No bundle size difference ever",
            "App Router significantly larger always",
            "App Router typically smaller bundles",
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 1234,
        "question": "Which router is better for SEO?",
        "options": [
            "Pages Router with better SEO",
            "Both equal for SEO optimization",
            "App Router with metadata API",
            "Neither is good for SEO"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 1235,
        "question": "Can you mix Server and Client Components in Pages Router?",
        "options": [
            "Yes, with 'use client' directive",
            "No, all are client components",
            "Only with special configuration setup",
            "Only in production mode available"
        ],
        "correctOption": 1,
        "points": 20
    },


]
