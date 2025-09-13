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
            "A connection between a URL and a component",
            "A global state object",
            "A reference to a DOM element"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 18,
        "question": "What capability does routing provide to users in React applications?",
        "options": [
            "Navigation between screens using URLs",
            "Automatic global styling",
            "Built-in API response caching",
            "Persistent component state"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 19,
        "question": "What is React Router's main responsibility?",
        "options": [
            "Managing global application state",
            "Handling navigation and component rendering",
            "Providing CSS-in-JS utilities",
            "Coordinating API data fetching"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 20,
        "question": "What defines a Single Page Application (SPA)?",
        "options": [
            "An app that works on only one device",
            "A web app that loads once and updates content dynamically",
            "A website that reloads on each navigation",
            "An app with exactly one route"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 21,
        "question":"What is a primary benefit of Single Page Applications?",
        "options": [
            "Faster page reloads on navigation",
            "Reduced server computational load",
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
            "Each navigation triggers a full server request",
            "They update URLs using the History API without page reloads",
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
            "Exclusively on the server before sending HTML",
            "Primarily on the client using JavaScript",
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
            "The browser performs a full page reload",
            "The URL change is ignored completely",
            "React updates the UI to match the new URL",
            "The application restarts execution"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 25,
        "question": "What primarily drives content updates in Single Page Applications?",
        "options": [
            "JavaScript manipulating the DOM",
            "Server sending new HTML pages",
            "Full browser reloads",
            "CSS-only layout changes"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 26,
        "question":  "What is a significant SEO challenge for Single Page Applications?",
        "options": [
            "They cannot use secure HTTPS connections",
            "Search engines may struggle with dynamic content indexing",
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
            "Server-side routing never performs full page loads",
            "They function identically in modern browsers",
            "Client-side updates views without reloading; server-side triggers full page loads"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 28,
        "question":"What approach can improve SEO for Single Page Applications?",
        "options": [
            "Converting to multiple static HTML pages only",
            "Completely avoiding routing libraries",
            "Implementing server-side rendering (SSR)",
            "Disabling JavaScript entirely"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 29,
        "question":  "What is ESLint's primary function in JavaScript projects?",
        "options": [
            "Managing application state",
            "Analyzing code for potential issues and style problems",
            "Rendering user interface components",
            "Executing automated unit tests"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 30,
        "question": "When is ESLint typically run during development?",
        "options": [
            "Only during production deployment",
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
            "No, it also enforces code style and finds logic issues",
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
            ".eslint.config.js",
            ".eslint",
            ".eslintrc.json",
            ".linterrc.js"
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
            "eslint-check",
            "lint-start",
            "eslint .",
            "node run eslint"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 35,
        "question": "How can you exclude files from ESLint analysis?",
        "options": [
            "Add them to .eslintignore",
            "Remove them from package.json",
            "Comment them in index.html",
            "Rename the files with .skip extension"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 36,
        "question": "What is true about creating custom ESLint rules?",
        "options": [
            "Rules can be written as functions that analyze the Abstract Syntax Tree",
            "Rules can only be configured from command line",
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
            "Install React plugin and extend recommended React rules",
            "Install Redux alongside ESLint",
            "Use Vite instead of ESLint configuration",
            "Install ESLint only without additional plugins"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 38,
        "question": "How do 'rules', 'extends', and 'plugins' differ in ESLint configuration?",
        "options": [
            "'rules' configure plugins, 'extends' sets environments, 'plugins' add globals",
            "'rules' define specific configurations, 'extends' inherit preset configurations, 'plugins' add new rule definitions",
            "All three properties are interchangeable",
            "Only 'rules' matter; others are just documentation"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 39,
        "question":"Why are there multiple approaches to styling React components?",
        "options": [
            "Because React enforces one specific method",
            "Because CSS is not supported by default in React",
            "Because React is unopinionated about styling approaches",
            "Because JSX only supports inline styles"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 40,
        "question": "What is the main advantage of CSS Modules?",
        "options": [
            "They enable CSS-in-JS syntax",
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
            "They may cause unintended style conflicts between components",
            "They require special JSX syntax"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 43,
        "question":"Why is storing UI state in the URL beneficial?",
        "options": [
            "To reduce JavaScript bundle size",
            "To improve visual aesthetics",
            "To enable sharing and bookmarking of application states",
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
            "Managing form input with useState",
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
            "Storing state in localStorage or URL parameters",
            "Using useState exclusively",
            "Using React Context only",
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
            "Caches expensive calculations",
            "Prevents component re-render when props haven't changed",
            "Stores component state in memory",
            "Creates new component instances"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 49,
        "question": "When should you use useMemo?",
        "options": [
            "For expensive calculations or object creation",
            "To replace all useState hooks",
            "For simple string concatenations",
            "For every variable in components"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 50,
        "question":  "Which technique helps avoid prop drilling?",
        "options": [
            "Using more useState hooks",
            "Creating additional wrapper components",
            "Using React Context API",
            "Passing more props through intermediary components"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 51,
        "question": "What is the key difference between useCallback and useMemo?",
        "options": [
            "useCallback memoizes functions, useMemo memoizes computed values",
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
            "Using keys properly in lists",
            "Creating new objects or functions inside render methods",
            "Applying React.memo correctly",
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
            "To help React identify and track list item changes",
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
            "It accelerates rendering performance",
            "It enables code splitting and smaller bundle size",
            "It improves SEO ranking",
            "It prevents memory issues"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 58,
        "question": "When does React.memo fail to prevent re-renders?",
        options: [
            "When props remain unchanged between renders",
            "When new object or function references are created each render",
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
            "Adding more consumer components",
            "Placing useEffect hooks in the Context",
            "Splitting Context by logical data boundaries"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 61,
        "question": "In React Profiler, what does the 'Commit' phase measure?",
        options: [
            "Time spent applying updates to the DOM",
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
            "Memoization overhead may overstep benefits for simple functions",
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
        "id": 66,
        "question":"Why do effects run twice in StrictMode during development?",
        options: [
            "Because of a React framework bug",
            "To help detect side effects and test cleanup logic",
            "To make rendering faster in development",
            "To match production behavior exactly"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 67,
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
        "id": 68,
        "question":"When is React.memo not effective for optimization?",
        options: [
            "When props remain stable across renders",
            "When the component has no props",
            "When new object references are passed as props each render",
            "When state is managed internally"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 69,
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
        "id": 70,
        "question": "What does React.StrictMode primarily help developers identify?",
        options: [
            "Application performance bugs",
            "Side effects and component lifecycle issues",
            "Code style violations",
            "Memory leaks exclusively"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 71,
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
        "id": 72,
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
        "id": 73,
        "question": "What does the React Profiler help you analyze?",
        options: [
            "Node.js memory leaks",
            "Component render times and re-render patterns",
            "Network usage and bundle size",
            "Code style and formatting errors"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 74,
        "question":  "What can happen if you overuse useMemo?",
        options: [
            "It adds memoization overhead that may decrease performance",
            "It significantly improves SEO rankings",
            "It makes all components pure by default",
            "It eliminates the need for useState"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 75,
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
        "id": 76,
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
        "id": 77,
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
        "id": 78,
        "question": "What are the primary areas of focus for React performance optimization?",
        options: [
            "Using more hooks and creating additional components",
            "Focusing only on CSS and backend optimizations",
            "Increasing component nesting depth",
            "Preventing wasted renders and reducing bundle size"
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 79,
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
        "id": 80,
        "question":  "How does React.lazy() help reduce bundle size?",
        options: [
            "It prevents unnecessary component re-renders",
            "It automatically compresses component code",
            "It loads components only when they are needed",
            "It removes unused CSS rules automatically"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 81,
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
        "id": 83,
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
        "id": 89,
        "question": "What is the performance impact when a component uses Context?\n\nconst Component = () => {\n  const { theme } = useContext(AppContext);\n  return <div className={theme}>Content</div>;\n}",
        "options": [
            "No performance issues exist in this implementation",
            "Component re-renders when any context value changes",
            "Component only re-renders when theme specifically changes",
            "Component never re-renders due to context updates"
        ],
        "correctOption": 1,
        "points": 20
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
        "question": "Why prefer component-based architecture over vanilla JavaScript?",
        "options": [
            "Components allow reuse, isolation, and testing",
            "Components remove need for JavaScript functions",
            "Vanilla JavaScript cannot handle conditional rendering",
            "Components automatically generate database queries"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 301,
        "question": "What was jQuery primarily used for in front-end development?",
        "options": [
            "To manage server-side state in databases",
            "To simplify DOM manipulation, event handling, and AJAX requests",
            "To replace HTML and CSS entirely",
            "To compile JavaScript into machine code"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 302,
        "question": "Which of the following best describes a limitation of jQuery that led to the rise of modern frameworks like React?",
        "options": [
            "jQuery did not allow DOM manipulation or event handling",
            "jQuery lacked structured state management and component-based architecture",
            "jQuery could not run in modern browsers",
            "jQuery automatically converted JavaScript into server-side code"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 303,
        "question": "What is a web application?",
        "options": [
            "A software program that runs entirely on a user’s local machine without internet",
            "A software application that runs on a web server and is accessed through a browser",
            "A static website with only HTML and CSS",
            "A desktop application that does not require a browser"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 304,
        "question": "What is React Query mainly used for?",
        "options": [
            "To style React components with CSS-in-JS",
            "To manage server state like fetching, caching, and synchronizing data",
            "To replace React’s useState and useReducer for local state management",
            "To build UI components without writing JSX"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 305,
        "question": "Why do modern web applications often use front-end frameworks like React or Vue?",
        "options": [
            "To convert all HTML into server-side scripts automatically",
            "To simplify building interactive UIs, managing state, and optimizing performance",
            "To remove the need for any backend server",
            "To replace CSS with JavaScript for styling"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 306,
        "question": "What is the main difference between a web page and a web application?",
        "options": [
            "Web pages allow full user interaction while web applications are static",
            "Web pages require a server, but web applications do not",
            "Web applications allow user interaction and dynamic behavior, while web pages are mostly static",
            "Web applications are always offline, web pages are always online"
        ],
        "correctOption": 2,
        "points": 10
    },

    {
        "id": 308,
        "question": "Why would you use a front-end framework like React for a web application but not necessarily for a simple web page?",
        "options": [
            "Because React helps manage dynamic UI, state, and user interactions efficiently in complex applications",
            "Because React converts static HTML into server-side scripts automatically",
            "Because React removes the need for CSS and HTML entirely",
            "Because React is only needed for web pages without server communication"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 309,
        "question": "What does it mean that the user interface needs to stay in sync with data?",
        "options": [
            "The data should never change to avoid UI updates",
            "The UI should only update when the page reloads",
            "The UI should be manually updated by modifying HTML elements directly",
            "The UI should automatically reflect changes in the underlying data or state",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 310,
        "question": "Which of the following ensures that the UI stays in sync with the underlying data in React?",
        "options": [
            "Directly manipulating DOM elements with vanilla JavaScript",
            "Using state variables and re-rendering components when state changes",
            "Using global variables without state management",
            "Refreshing the page after every data change"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 311,
        "question": "Why is it important for a user interface to stay in sync with data in modern web applications?",
        "options": [
            "To ensure the UI always displays accurate and up-to-date information to the user",
            "To make the application load faster by preventing any state updates",
            "To avoid using React or other frameworks entirely",
            "To cache all previous data states permanently without updating the UI"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 312,
        "question": "What is DOM traversing in JavaScript?",
        "options": [
            "Creating new DOM elements from scratch",
            "Sending HTTP requests to the server",
            "Navigating and accessing existing elements in the DOM tree",
            "Compiling JavaScript code to machine code"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 313,
        "question": "Why did developers widely adopt jQuery in the past?",
        "options": [
            "It replaced JavaScript as the programming language in browsers",
            "It automatically optimized web performance without coding",
            "It removed the need for CSS styling in web pages",
            "It provided cross-browser compatibility and simplified common JavaScript tasks",
        ],
        "correctOption":3,
        "points": 20
    },
    {
        "id": 314,
        "question": "What is React?",
        "options": [
            "A declarative, component-based, state-driven JavaScript library for building user interfaces",
            "A full-featured JavaScript framework with built-in routing and state management",
            "A CSS utility framework for creating responsive designs quickly",
            "A server-side runtime environment for executing JavaScript outside the browser"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 315,
        "question": "What does 'declarative' mean in the context of React?",
        "options": [
            "You specify *what* the UI should look like, not *how* to update it",
            "You manually update the DOM step by step for every change",
            "You write CSS classes to style the components",
            "You use server-side rendering to generate HTML before sending it to the client"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 316,
        "question": "What does 'imperative' mean in programming, especially compared to declarative in React?",
        "options": [
            "You give step-by-step instructions on *how* to perform tasks",
            "You only declare *what* the UI should look like",
            "You style components using utility-first CSS classes",
            "You let the framework automatically handle all DOM updates"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 317,
        "question": "In Redux Toolkit, what is the role of case reducers in a slice?",
        "options": [
            "They define how the state should change in response to specific actions",
            "They automatically fetch data from APIs",
            "They style components using CSS classes",
            "They replace the Redux store with a local state"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        id: 318,
        question: "Which approach does React Router primarily use to define routes?",
        options: ["Imperative", "Declarative", "Procedural", "Functional"],
        correctOption: 1,
        points: 20,
    },
    {
        id: 319,
        question: "For a large project with multiple layouts, which route definition method is most appropriate?",
        options: [
            "Defining routes with JSX inside <Routes>",
            "Using Route Objects (createBrowserRouter)",
            "Using Dynamic Routes",
            "Using Protected Routes",
        ],
        correctOption: 1,
        points: 20,
    },
    {
        id: 320,
        question: "What is the main difference between <Navigate> and useNavigate()?",
        options: [
            "<Navigate> is declarative, useNavigate() is imperative",
            "<Navigate> only works with route objects, useNavigate() only works with JSX",
            "They behave exactly the same",
            "Neither is used for navigation",
        ],
        correctOption: 0,
        points: 20,
    },
    {
        id: 321,
        question: "If you have a layout with a fixed Header and Footer where the content in the middle changes, which React Router feature should you use?",
        options: ["Dynamic Routes", "Nested Routes", "Protected Routes", "Route Guards"],
        correctOption: 1,
        points: 20,
    },
    {
        "id": 322,
        "question": "Which of the following describes a key advantage of React Query in large applications?",
        "options": [
            "It ensures server state is cached, synchronized, and kept up-to-date across multiple components",
            "It prevents components from re-rendering by removing dependency arrays",
            "It compiles React code into server-side JavaScript automatically",
            "It makes React applications independent of REST or GraphQL APIs"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 323,
        "question": "Why is caching important in React Query?",
        "options": [
            "Because it prevents storing any data in memory",
            "Because it allows data to be reused without refetching from the server every time",
            "Because it replaces the need for state hooks like useState",
            "Because it automatically generates UI components"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 324,
        "question": "What is one main advantage of caching in React Query compared to using plain fetch calls?",
        "options": [
            "Cached data allows faster UI updates and reduces unnecessary network requests",
            "Caching removes the need for APIs in web applications",
            "Caching only stores styles for components, not data",
            "Cached data replaces the need for useEffect entirely"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 325,
        "question": "How does caching in React Query improve both performance and user experience?",
        "options": [
            "By keeping previously fetched data available instantly, while background refetch ensures data freshness",
            "By forcing the UI to reload from scratch whenever new data is fetched",
            "By completely preventing re-renders in all React components",
            "By converting API responses into static HTML during build time"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 326,
        "question": "In React Query, what does 'staleTime' define?",
        "options": [
            "How long cached data is considered fresh before React Query refetches it",
            "How long React Query keeps inactive queries in memory",
            "How often React Query clears localStorage",
            "How many components can subscribe to the same query"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 327,
        "question": "What is the difference between 'staleTime' and 'cacheTime' in React Query?",
        "options": [
            "staleTime controls freshness of data, cacheTime controls how long unused data stays in memory",
            "staleTime deletes data permanently, cacheTime saves it forever",
            "staleTime is for server updates, cacheTime is for local state updates",
            "staleTime only applies to mutations, cacheTime only applies to queries"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 328,
        "question": "Why would you increase the 'staleTime' value for certain queries in a React Query app?",
        "options": [
            "To reduce unnecessary background refetches when the data is unlikely to change frequently",
            "To force React Query to clear all queries instantly after fetching",
            "To ensure queries are removed from the cache as soon as a component unmounts",
            "To automatically generate new API endpoints without developer input"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 329,
        "question": "What does the useQuery hook from React Query return?",
        "options": [
            "Only the fetched data",
            "An object containing the query state like data, isLoading, isError, and more",
            "A function that must be manually called to fetch data",
            "Only the error object if the request fails"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 330,
        "question": "Which of the following is NOT typically included in the object returned by useQuery?",
        "options": [
            "data",
            "isLoading",
            "mutate",
            "isError"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 331,
        "question": "How does React Query’s useQuery output help improve UI responsiveness?",
        "options": [
            "By exposing query states like isLoading and isFetching, allowing the UI to react instantly to data-fetching changes",
            "By automatically converting all data into static HTML at build time",
            "By preventing components from re-rendering after data changes",
            "By replacing the need for client-side state management libraries entirely"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 332,
        "question": "What is Strapi primarily used for?",
        "options": [
            "Building frontend UI components",
            "Managing and exposing content through APIs as a headless CMS",
            "Optimizing bundle size in React applications",
            "Handling client-side routing"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 333,
        "question": "Which of the following is a key feature of Strapi?",
        "options": [
            "It provides built-in API generation with REST and GraphQL support",
            "It replaces React state management libraries like Redux",
            "It only works with serverless databases",
            "It automatically generates frontend components"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 334,
        "question": "Why is Strapi often preferred over traditional CMS platforms like WordPress in modern web development?",
        "options": [
            "Because it allows complete control over backend and API customization while remaining frontend-agnostic",
            "Because it comes with a pre-built frontend theme system",
            "Because it does not require authentication for any API requests",
            "Because it only supports static site generation"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 335,
        "question": "What is the main difference between running Strapi in development mode vs production mode?",
        "options": [
            "Development mode is for building and testing locally, while production mode is for running on a live server",
            "Development mode provides better security than production mode",
            "Production mode allows hot-reloading just like development mode",
            "There is no real difference; both modes work the same"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 336,
        "question": "Which of the following is TRUE about Strapi in production?",
        "options": [
            "It typically uses a persistent database like PostgreSQL or MySQL instead of SQLite",
            "It always runs with hot-reload enabled",
            "It does not require authentication for admin users",
            "It can only run on localhost"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 337,
        "question": "Why is it important to configure environment variables and reverse proxies (e.g., Nginx) when deploying Strapi to production?",
        "options": [
            "To ensure security, scalability, and proper performance handling for real-world traffic",
            "To enable Strapi to automatically generate frontend components",
            "To allow Strapi to run without a database connection",
            "To bypass the need for user authentication in the admin panel"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 338,
        "question": "Which feature of Strapi allows you to define data models visually without writing SQL?",
        "options": [
            "Content-Type Builder",
            "GraphQL Playground",
            "Database Seeding",
            "Role Manager"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 339,
        "question": "Which of the following can be managed through Strapi’s built-in Admin Panel?",
        "options": [
            "Content entries, user roles, and permissions",
            "React component styling",
            "Webpack configuration",
            "Bundle size optimization"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 340,
        "question": "How does Strapi expose content to be consumed by frontend applications?",
        "options": [
            "Through automatically generated REST and GraphQL APIs",
            "By rendering static HTML pages",
            "By exporting JSON files directly to the filesystem",
            "Through WebSockets only"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 341,
        "question": "In production, why is it recommended to replace the default SQLite database in Strapi?",
        "options": [
            "Because SQLite is not optimized for concurrency and scaling with high traffic",
            "Because SQLite does not allow authentication",
            "Because SQLite automatically deletes old records",
            "Because SQLite is only supported in Windows OS"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 342,
        "question": "Which method can be used to extend Strapi’s functionality beyond its core features?",
        "options": [
            "By creating custom plugins",
            "By installing Redux middleware",
            "By writing CSS modules",
            "By using only environment variables"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 343,
        "question": "Why is Strapi considered 'frontend-agnostic'?",
        "options": [
            "Because it provides data via APIs that can be consumed by any frontend framework or library",
            "Because it comes with built-in frontend templates",
            "Because it can only be used with React and Next.js",
            "Because it does not support backend customization"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 344,
        "question": "How does Strapi handle user authentication and role-based permissions?",
        "options": [
            "It has a built-in authentication system with customizable roles and policies",
            "It requires third-party services like Auth0 to be installed by default",
            "It uses only frontend session cookies with no backend validation",
            "It stores all roles directly inside localStorage"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 345,
        "question": "Why is using environment variables critical when deploying Strapi to production?",
        "options": [
            "To keep sensitive information like database credentials and API keys secure",
            "To automatically generate GraphQL queries",
            "To control React component rendering",
            "To enable hot-reloading in production"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 346,
        "question": "Why do we run Strapi in production mode instead of development mode?",
        "options": [
            "Because production mode is optimized for performance, security, and stability in live environments",
            "Because production mode allows hot-reloading of content types during development",
            "Because production mode uses a local SQLite database by default",
            "Because production mode removes the need for any authentication"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 347,
        "question": "Which of the following is a key benefit of using Strapi in production mode?",
        "options": [
            "Better scalability and the ability to handle concurrent requests more reliably",
            "Automatic creation of frontend UI components",
            "Unlimited admin accounts without authentication",
            "Skipping database configuration entirely"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 348,
        "question": "Why is it risky to keep Strapi running in development mode on a live server?",
        "options": [
            "Because development mode includes hot-reloading and weaker security settings that are unsuitable for production traffic",
            "Because development mode prevents any content creation",
            "Because development mode only supports GraphQL but not REST",
            "Because development mode deletes all environment variables automatically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 349,
        "question": "Why is it risky to keep Strapi running in development mode on a live server?",
        "options": [
            "Because development mode includes hot-reloading and weaker security settings that are unsuitable for production traffic",
            "Because development mode prevents any content creation",
            "Because development mode only supports GraphQL but not REST",
            "Because development mode deletes all environment variables automatically"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 350,
        "question": "How does React Query keep data in sync with the server?",
        "options": [
            "By automatically refetching data in the background when queries become stale",
            "By manually refreshing the page on every request",
            "By storing data permanently in localStorage",
            "By blocking UI updates until all API calls are finished"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 351,
        "question": "Which mechanism allows React Query to keep cached data fresh without blocking the UI?",
        "options": [
            "Stale-while-revalidate strategy (show cached data, then refetch in background)",
            "Server-side rendering only",
            "Long polling on every state change",
            "Manual refetching triggered by a button click"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 352,
        "question": "Why is React Query considered efficient in synchronizing data with the server?",
        "options": [
            "Because it combines cache states, background refetching, and dependency-based updates to avoid unnecessary network requests",
            "Because it always bypasses the cache and forces a fresh API call",
            "Because it synchronizes data only once when the app starts",
            "Because it mirrors the server database directly inside the client’s memory"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 353,
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
        "id": 354,
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
        "id": 355,
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
        "id": 356,
        "question": "What is the primary purpose of a mutation in React Query?",
        "options": [
            "To create, update, or delete server data",
            "To read cached server data only",
            "To render React components",
            "To automatically generate CSS styles"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 357,
        "question": "Which React Query hook is used to perform mutations?",
        "options": [
            "useMutation",
            "useQuery",
            "useEffect",
            "useState"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 358,
        "question": "Why is it recommended to use mutation callbacks like onSuccess or onError in React Query?",
        "options": [
            "To update the cache or trigger side effects after the mutation succeeds or fails",
            "To automatically convert mutations into queries",
            "To prevent any UI updates after mutation",
            "To disable caching permanently"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 359,
        "question": "What does offline support in React Query allow?",
        "options": [
            "Queuing mutations and applying them once the network is available",
            "Preventing any server communication permanently",
            "Automatically reloading the page when offline",
            "Converting all queries into static files"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 360,
        "question": "How can React Query ensure a smooth user experience when the app is offline?",
        "options": [
            "By showing cached data and queuing mutations to run later",
            "By disabling the UI completely",
            "By preventing any query from being fetched again",
            "By converting API calls into synchronous calls"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 361,
        "question": "Which combination makes offline-first behavior effective in React Query?",
        "options": [
            "Caching, background refetching, and queuing mutations until network is available",
            "Disabling staleTime and cacheTime permanently",
            "Only using useState for server state",
            "Deleting all cache whenever the app reconnects"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 362,
        "question": "Why is React Query important for managing server data in React apps?",
        "options": [
            "Because it simplifies fetching, caching, and keeping server data in sync automatically",
            "Because it replaces React’s useState and useEffect for local state only",
            "Because it automatically generates frontend components",
            "Because it disables network requests entirely"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 363,
        "question": "Which of the following problems does React Query help solve in React applications?",
        "options": [
            "Avoiding redundant network requests and keeping multiple components synchronized with server data",
            "Automatically styling components without CSS",
            "Replacing the need for all backend APIs",
            "Making React apps run without state management"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 364,
        "question": "Why might a complex React app be difficult to manage without React Query?",
        "options": [
            "Because manually handling caching, background refetch, and synchronization across multiple components is error-prone and cumbersome",
            "Because React Query is required to write JSX",
            "Because it prevents any component from re-rendering",
            "Because it automatically converts REST APIs to GraphQL"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 365,
        "question": "What is the main difference between useQuery and useMutation in React Query?",
        "options": [
            "useQuery is used for data fetching, while useMutation is used for creating/updating/deleting data",
            "useQuery only works with GraphQL, while useMutation only works with REST APIs",
            "useQuery updates data automatically without cache, while useMutation only stores data locally",
            "useQuery requires Redux, while useMutation works without state management"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 366,
        "question": "Which hook in React Query is primarily used for fetching and caching server data?",
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
        "id": 367,
        "question": "In React Query, what happens if you provide the same queryKey to multiple useQuery hooks?",
        "options": [
            "Each query runs separately without caching",
            "React Query shares the cached data between them",
            "It causes an error and crashes the app",
            "Only the first query executes, others are ignored"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 368,
        "question": "Which of the following is a recommended pattern when using useQuery to prevent unnecessary network requests?",
        "options": [
            "Use a unique queryKey for each query and enable caching",
            "Disable caching entirely for better performance",
            "Wrap useQuery inside useEffect",
            "Always refetch data manually instead of relying on cache"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 369,
        "question": "Which of the following is a recommended pattern when using useQuery to prevent unnecessary network requests?",
        "options": [
            "Use a unique queryKey for each query and enable caching",
            "Disable caching entirely for better performance",
            "Wrap useQuery inside useEffect",
            "Always refetch data manually instead of relying on cache"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 370,
        "question": "Which hook is used in React Query to handle creating, updating, or deleting data on the server?",
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
        "id": 371,
        "question": "After a successful mutation, what is the recommended way to update cached queries in React Query?",
        "options": [
            "Manually reloading the page",
            "Invalidating or updating relevant query keys",
            "Resetting React state with useState",
            "Running the same mutation again"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 372,
        "question": "Which of the following is TRUE about useMutation compared to useQuery?",
        "options": [
            "useMutation is synchronous while useQuery is asynchronous",
            "useMutation can only be used with GraphQL APIs",
            "useMutation does not run automatically, it must be triggered manually",
            "useMutation cannot handle error states"
        ],
        "correctOption": 2,
        "points": 30
    },
            {
            "id": 373,
            "question": "What is the primary purpose of the queryKey in useQuery?",
            "options": [
                "To provide a unique identifier for caching and refetching",
                "To define the API endpoint URL",
                "To specify the loading spinner type",
                "To determine the mutation success callback"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 374,
            "question": "In React Query, what is the difference between staleTime and cacheTime?",
            "options": [
                "staleTime controls how long data is considered fresh, while cacheTime controls how long inactive data stays in memory",
                "staleTime defines retry attempts, while cacheTime defines error persistence",
                "Both represent the same concept of cache duration",
                "staleTime is only used in mutations, cacheTime only in queries"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 375,
            "question": "How can you prevent a useQuery from automatically running when the component mounts?",
            "options": [
                "By removing queryKey",
                "By using useMutation instead",
                "By disabling React StrictMode",
                "By setting enabled: false in the query options",
            ],
            "correctOption":3,
            "points": 10
        },
        {
            "id": 376,
            "question": "Which callback in useMutation is best suited for updating the cache after a successful mutation?",
            "options": ["onSettled", "onMutate", "onSuccess", "onError"],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 377,
            "question": "Why are optimistic updates useful in useMutation?",
            "options": [
                "They retry failed requests automatically",
                "They update the UI immediately before receiving a server response",
                "They prevent memory leaks",
                "They keep query keys unique"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 378,
            "question": "Which React Query function is commonly used inside a mutation's onSuccess callback to refresh relevant queries?",
            "options": ["resetQueries", "refetchQueries", "cancelQueries", "invalidateQueries"],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 379,
            "question": "What happens when multiple queries are dependent in React Query?",
            "options": [
                "They run in parallel regardless of dependency",
                "The next query waits until the previous one has data",
                "All queries are cached under the same queryKey",
                "Dependent queries are not supported in React Query"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 380,
            "question": "Which tool helps visualize query and mutation states during development in React Query?",
            "options": ["Redux DevTools", "React Query Devtools", "React Profiler", "Apollo Studio"],
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
            "id": 382,
            "question": "Which option in useQuery allows background data synchronization at regular intervals?",
            "options": ["cacheTime", "refetchInterval", "retry", "keepPreviousData"],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 383,
            "question": "What is the purpose of the onMutate callback in useMutation?",
            "options": [
                "It rolls back the optimistic update if mutation fails",
                "It is called before the mutation function and is useful for optimistic updates",
                "It clears the query cache",
                "It retries the mutation on network failure"
            ],
            "correctOption": 1,
            "points": 25
        },
        {
            "id": 384,
            "question": "How can you roll back an optimistic update if a mutation fails?",
            "options": [
                "By returning a rollback function from onMutate and calling it inside onError",
                "By using invalidateQueries",
                "By disabling cacheTime",
                "By catching the error in useQuery"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 385,
            "question": "Which option in useQuery is helpful when implementing pagination to avoid showing a blank state while fetching new data?",
            "options": ["enabled", "refetchOnWindowFocus", "keepPreviousData", "retry"],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 386,
            "question": "How does React Query ensure consistency between server and client after a mutation?",
            "options": [
                "By reloading the browser window",
                "By automatically invalidating all queries",
                "By using invalidateQueries or manually refetching affected queries",
                "By clearing the entire cache"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 387,
            "question": "What is query invalidation in React Query?",
            "options": [
                "Marking queries as stale so they refetch fresh data",
                "Deleting all cached data permanently",
                "Resetting query keys",
                "Pausing queries until enabled again"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 388,
            "question": "In React Query, what does hydrate/dehydrate refer to?",
            "options": [
                "Saving and restoring cached query state for server-side rendering",
                "Synchronizing queries with Redux",
                "Exporting query data to JSON files",
                "Clearing memory leaks during refetch"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 389,
            "question": "What is the primary purpose of React Hook Form?",
            "options": [
                "To manage server-side data fetching",
                "To simplify form state management and validation",
                "To create animations in React",
                "To manage global application state"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 390,
            "question": "Which hook is used to initialize a form in React Hook Form?",
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
            "id": 391,
            "question": "In React Hook Form, what does the 'register' function do?",
            "options": [
                "It submits the form data to the server",
                "It resets all form fields",
                "It connects input fields to the form state and validation",
                "It triggers re-rendering of the form"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 392,
            "question": "Which function in React Hook Form is responsible for handling form submission?",
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
            "id": 393,
            "question": "How can you apply validation rules such as 'required' or 'minLength' in React Hook Form?",
            "options": [
                "By adding attributes directly to the input element",
                "By wrapping input in a Validation component",
                "By passing an options object to the register function",
                "By using useValidation hook"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 394,
            "question": "What does the 'errors' object returned by useForm represent?",
            "options": [
                "A list of server-side API errors",
                "Runtime errors during form rendering",
                "Validation errors for form fields",
                "React component errors"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 395,
            "question": "Why is React Hook Form considered performant compared to other form libraries?",
            "options": [
                "It automatically fetches data from APIs",
                "It reduces re-renders by isolating component reactivity",
                "It compiles forms into WebAssembly",
                "It disables validation to improve speed"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 396,
            "question": "Which hook should you use to control custom components (like a date picker) in React Hook Form?",
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
            "id": 397,
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
            "id": 398,
            "question": "What problem does useController solve?",
            "options": [
                "Integrating controlled components with React Hook Form",
                "Handling async validation",
                "Improving form styling",
                "Fetching form data from APIs"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 399,
            "question": "Why does React Hook Form rely primarily on uncontrolled inputs?",
            "options": [
                "Because uncontrolled inputs reduce re-renders and improve performance",
                "Because controlled inputs are not supported in React",
                "Because uncontrolled inputs automatically validate themselves",
                "Because uncontrolled inputs are easier to style"
            ],
            "correctOption": 0,
            "points": 25
        },
        {
            "id": 400,
            "question": "Which option best describes the role of resolvers in React Hook Form?",
            "options": [
                "They provide schema-based validation (e.g., Yup, Zod)",
                "They handle async form submissions",
                "They manage form context across components",
                "They improve rendering performance"
            ],
            "correctOption": 0,
            "points": 25
        },
        {
            "id": 401,
            "question": "Which hook would you use to read the current value of a field without subscribing to its updates?",
            "options": [
                "getValues",
                "watch",
                "setValue",
                "trigger"
            ],
            "correctOption": 0,
            "points": 25
        },
        {
            "id": 402,
            "question": "How can you implement async validation, such as checking if a username already exists?",
            "options": [
                "By using an async resolver or providing an async validate function in register",
                "By using watch with a useEffect",
                "By wrapping inputs in FormProvider",
                "By manually calling setValue in onChange"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 403,
            "question": "What is one key performance advantage of React Hook Form compared to Formik?",
            "options": [
                "React Hook Form uses uncontrolled inputs and refs, leading to fewer re-renders",
                "Formik automatically caches all inputs in Redux",
                "React Hook Form ships smaller bundle size but causes more re-renders",
                "Formik doesn’t support validation"
            ],
            "correctOption": 0,
            "points": 30
        },
    {
        "id": 404,
        "question": "What is the primary purpose of the useForm hook in React Hook Form?",
        "options": [
            "To handle component lifecycle methods",
            "To register input fields and manage form state",
            "To create global state across components",
            "To render conditional UI"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 405,
        "question": "Which prop must be applied to an input field for React Hook Form to track its value?",
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
        "id": 406,
        "question": "What does the handleSubmit function return?",
        "options": [
            "A callback that validates form inputs and triggers your submit handler",
            "The final form values as an object",
            "A reset function",
            "Nothing, it just re-renders"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 407,
        "question": "How can you provide default values to a form?",
        "options": [
            "By passing a defaultValues object to useForm",
            "By setting the value attribute directly on inputs",
            "By calling reset after rendering",
            "By wrapping inputs in FormProvider"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 408,
        "question": "Which hook allows you to subscribe to changes in specific form fields?",
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
        "id": 409,
        "question": "What is the main use of FormProvider and useFormContext?",
        "options": [
            "To style forms globally",
            "To share form state across deeply nested components",
            "To reset form values",
            "To connect multiple forms together"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 410,
        "question": "Which method is used to manually trigger validation for one or more fields?",
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
        "id": 411,
        "question": "How do you reset all fields in a form to their initial values?",
        "options": [
            "resetForm()",
            "reset()",
            "clear()",
            "resetFields()"
        ],
        "correctOption": 1,
        "points": 20
    },



]
