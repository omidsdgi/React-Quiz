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
        "id": 56,
        "question":"What is the primary benefit of React.lazy combined with Suspense?",
        options: [
            "It accelerates rendering performance",
            "It enables code splitting and reduces initial bundle size",
            "It improves SEO rankings",
            "It prevents memory leaks"
        ],
        "correctOption": 2,
        "points": 10
    },
    {
        "id": 57,
        "question": "What is the main benefit of React.lazy with Suspense?",
        "options": [
            "It speeds up rendering",
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
        "id": 65,
        "question":  "What performance issue exists in this code?\n\nconst MyComponent = () => {\n  const [items, setItems] = useState([]);\n  const filtered = items.filter(i => i.active);\n  return <List items={filtered} />;\n}",
        options: [
            "Filter creates a new array on each render",
            "The code is fully optimized",
            "useState is used incorrectly",
            "The List component will never update"
        ],
        "correctOption": 0,
        "points": 30
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
        "id": 82,
        "question":  "What performance issue occurs in this code?\n\nconst Component = () => {\n  const [items, setItems] = useState([]);\n  const filtered = items.filter(i => i.active);\n  return <List items={filtered} />;\n}",
        "options": [
            "The filter method creates a new array on every render",
            "The useState hook is implemented incorrectly in this context",
            "The List component cannot receive filtered data as props",
            "The component will never re-render when items change"
        ],
        "correctOption": 0,
        "points": 30
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
        "id": 87,
        "question": "What causes unnecessary re-renders in this Context pattern?\n\nconst Provider = ({ children }) => {\n  const [user, setUser] = useState(null);\n  const [theme, setTheme] = useState('light');\n  const value = { user, setUser, theme, setTheme };\n  return <Context.Provider value={value}>{children}</Context.Provider>;\n}",
        "options": [
            "Using multiple state variables in the same provider component",
            "Creating a new object reference for value during every render",
            "Including both user and theme inside the same context provider",
            "Using useState instead of useReducer for context state management"
        ],
        "correctOption": 1,
        "points": 30
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
        "points": 10
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
    },
    {
        id: 198,
        question: "What is Redux?",
        options: [
            "A predictable state management library for web apps",
            "A library for styling components",
            "A built-in React API for managing side effects",
            "A tool for minifying JavaScript bundles"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 199,
        question: "Is Redux a React-specific library?",
        options: [
            "Yes, it only works with React",
            "No, it’s a standalone library that is only used with Angular",
            "No, it’s a standalone library that can be used with web app",
            "Yes, Redux is part of React",
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 200,
        question: "Which rule must reducers always follow?",
        options: [
            "They can directly mutate the current state",
            "They can include API calls inside the reducer",
            "They can update state asynchronously with async/await",
            "They must be pure functions without side effects",
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 201,
        question: "What should a reducer return when it receives an unknown action?",
        options: [
            "It should throw an error immediately",
            "It should return the current state unchanged",
            "It should return null as the default value",
            "It should reset the state back to initial"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 202,
        question: "Why are reducers required to avoid asynchronous logic?",
        options: [
            "Async logic makes reducers non-deterministic and hard to test",
            "Reducers are not allowed to return promises in JavaScript",
            "Async logic will always cause memory leaks in React",
            "Reducers can only process numbers and strings synchronously"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 203,
        question: "What is the difference between Redux and useReducer?",
        options: [
            "Redux works across the app, while useReducer is limited to a component",
            "Redux is only for styling, while useReducer manages state",
            "Redux is synchronous, while useReducer is asynchronous",
            "Redux can only store strings, while useReducer handles objects"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 204,
        question: "What does an action in Redux contain?",
        options: [
            "A type field and optionally a payload",
            "A reducer function and state",
            "Only an ID number",
            "An array of middleware functions"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 205,
        question: "What is the role of dispatch in Redux?",
        options: [
            "It sends actions to the reducer to update the state",
            "It saves the state permanently to local storage",
            "It merges two reducers into one",
            "It automatically refreshes the UI every second"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 206,
        question: "What is the function of the Redux store?",
        options: [
            "It holds the application state and allows access via methods",
            "It only stores CSS styles for components",
            "It executes side effects like fetching APIs",
            "It automatically creates reducers without configuration"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 207,
        question: "Why might there be multiple reducers in a Redux store?",
        options: [
            "To manage different slices of application state independently",
            "To create duplicate copies of the same logic",
            "To reduce the file size of the application",
            "To make reducers asynchronous by default"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 208,
        question: "What is an action creator function?",
        options: [
            "A function that returns an action object to be dispatched",
            "A reducer that directly updates the state",
            "A function that deletes actions from memory",
            "A middleware that delays action execution"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 201,
        question: "What is one key difference between Redux and the Context API?",
        options: [
            "Redux has middleware and DevTools for debugging",
            "Context API generates reducers automatically",
            "Redux is only used for styling components",
            "Context API exists only inReact and Angular",
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 202,
        question: "How does Redux differ from using useState in React?",
        options: [
            "Redux is meant only for async API requests",
            "Redux handles global state, while useState is local",
            "useState always saves values to localStorage",
            "useState works only inside class components"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 203,
        question: "When is Redux better than Context + useReducer?",
        options: [
            "In very small apps with just a few states",
            "When React is not part of the stack",
            "In large apps needing global state and DevTools",
            "When the goal is to avoid writing JavaScript",
        ],
        correctOption: 2,
        points: 30
    },
    {
        id: 204,
        question: "Why do many modern React apps no longer need Redux?",
        options: [
            "Because Redux cannot be used with TypeScript or modern bundlers",
            "Because React already provides hooks like useState, useReducer, and Context API",
            "Because Redux is now deprecated and no longer supported",
            "Because React apps no longer require any state management at all"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 205,
        question: "What is an ideal use case for Redux in a React application?",
        options: [
            "When there is a large amount of state that updates frequently across many components",
            "When the app has only a single counter and minimal state changes",
            "When styling components with CSS or Tailwind",
            "When React is replaced entirely by Angular"
        ],
        correctOption: 0,
        points: 30
    },
    {
        id: 206,
        question: "Which type of state is best managed locally in a React component?",
        options: [
            "Remote state fetched from an API",
            "Global state shared between apps",
            "Server-side state stored in a database",
            "UI state, like modal visibility or active tabs",
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 207,
        question: "Which type of state often requires tools like Redux, React Query, or Context API?",
        options: [
            "UI state, like which tab is active",
            "Temporary variables inside a function",
            "Remote state, like user data from an API",
            "CSS class toggles"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 208,
        question: "When combining UI state and remote state in a component, which practice is recommended?",
        options: [
            "Avoid using useState or Context; fetch everything from API",
            "Keep UI state local and remote state global using a state manager",
            "Move all state to Redux regardless of size",
            "Store UI state in the server to simplify components",
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 209,
        question: "Which state management is best for remote state?",
        options: [
            "React Query or similar data-fetching libraries",
            "useReducer only",
            "Vanilla Redux without middleware",
            "Manual fetch with setInterval"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 210,
        question: "Why do many apps not need Redux anymore?",
        options: [
            "Most global state is actually remote and handled better with dedicated libraries",
            "React removed support for Redux",
            "Redux only works with old versions of React",
            "Redux cannot store complex objects"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 211,
        question: "What is the ideal use case for Redux?",
        options: [
            "When there is a lot of state that updates frequently across the app",
            "When only one component has local state",
            "When styling multiple components with CSS",
            "When you only need asynchronous API calls"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 212,
        question: "What is the difference between UI state and remote state?",
        options: [
            "UI state is local to components, while remote state comes from a server",
            "UI state is fetched via HTTP, while remote state is always static",
            "UI state must use Redux, while remote state uses Context",
            "UI state is stored permanently, while remote state is temporary"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 213,
        question: "When is Redux a better choice than React Query or Context API?",
        options: [
            "When the app has only UI state like modals and tabs",
            "When the app uses only localStorage for state persistence",
            "When the app has a lot of non-remote state that updates frequently across many components",
            "When all state comes from APIs that update frequently across many components"
        ],
        correctOption: 2,
        points: 30
    },
    {
        id: 214,
        question: "What is a reducer function in Redux?",
        options: [
            "A pure function that receives current state and an action and returns a new state",
            "A function responsible for fetching data asynchronously from APIs",
            "A function that renders and updates user interface components",
            "A function that manages middleware and logging operations"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 215,
        question: "What is the difference between Redux and useReducer?",
        options: [
            "useReducer provides middleware capabilities; Redux can handle asynchronous actions to a component or context",
            "Redux manages global state and provides middleware and DevTools; useReducer is local to a component or context",
            "Redux operations are synchronous; useReducer automatically handles asynchronous logic",
            "There is no difference; both manage state in the exact same way"
        ],
        correctOption: 1,
        points: 30
    },
    {
        id: 216,
        question: "What is the function of the store in Redux?",
        options: [
            "To hold the entire application state tree and manage all reducers centrally",
            "To directly render components to the DOM whenever state changes",
            "To automatically fetch remote data from APIs for components",
            "To generate action creators for every possible state change"
        ],
        correctOption: 0,
        points: 20
    },
    {
        id: 217,
        question: "Why might a Redux store have multiple reducers?",
        options: [
            "To allow multiple dispatch functions to run in parallel automatically",
            "To manage React components directly within the store",
            "To divide the state logic into smaller, focused slices",
            "To handle styling and UI rendering in separate modules"
        ],
        correctOption: 2,
        points: 15
    },
    {
        id: 218,
        question: "What is an action creator function in Redux?",
        options: [
            "A function that directly modifies state inside the store of application",
            "A function that returns an action object to describe a change in state",
            "A function that renders UI components based on actions",
            "A function that merges multiple reducers into one"
        ],
        correctOption: 1,
        points: 15
    },
    {
        id: 219,
        question: "Why do we separate state update logic from the rest of the application in Redux?",
        options: [
            "To prevent the Redux DevTools from being triggered accidentally",
            "To reduce the final bundle size of the application",
            "To make code predictable, maintainable, and easier to debug over time",
            "To avoid using React components for state updates entirely"
        ],
        correctOption: 2,
        points: 15
    },
    {
        id: 220,
        question: "Which state management solution is considered the best for handling remote state in modern React apps?",
        options: [
            "Redux, because it provides a single global store for all kinds of state and DevTools support",
            "Context API, because it allows passing remote data deeply into the component tree",
            "React Query, because it is designed for caching, fetching, and syncing server state",
            "useReducer hook, because it manages local state updates within a component"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 221,
        question: "Why is Context API not ideal for managing large amounts of remote state?",
        options: [
            "Because Context API cannot technically pass data to deeply nested components",
            "Because frequent updates in Context cause unnecessary re-renders, which impacts performance",
            "Because Context API is only designed for styling and theming, not state management",
            "Because Context API requires Redux in order to handle any state properly"
        ],
        correctOption: 1,
        points: 20
    },
    {
        id: 222,
        question: "Why do many apps no longer need Redux for remote state?",
        options: [
            "Because Redux has been deprecated and is no longer supported in React applications",
            "Because Context API fully replaces Redux and handles all remote state automatically",
            "Because Redux can only manage UI state and cannot manage remote data in React applications at all",
            "Because modern libraries like React Query handle fetching, caching, and syncing server state more effectively"
        ],
        correctOption: 3,
        points: 20
    },
    {
        id: 223,
        question: "Which type of state is best managed locally in a React component?",
        options: [
            "UI state, like modal visibility or active tabs",
            "Remote state fetched from an API",
            "Global state shared between apps",
            "Server-side state stored in a database"
        ],
        correctOption: 0,
        points: 10
    },
    {
        id: 224,
        question: "Which type of state often requires tools like Redux, React Query, or Context API?",
        options: [
            "UI state, like which tab is active",
            "Temporary variables inside a function",
            "Remote state, like user data from an API",
            "CSS class toggles"
        ],
        correctOption: 2,
        points: 20
    },
    {
        id: 225,
        question: "Why do many modern React apps not use Redux anymore?",
        options: [
            "Because React automatically handles all state internally",
            "Because most global state in apps is remote and can be managed with tools like React Query",
            "Because Redux no longer works with React",
            "Because UI state is always too small to matter"
        ],
        correctOption: 1,
        points: 20
    },
    {
        "id": 226,
        "question": "What is the main role of middleware in Redux?",
        "options": [
            "To let components update state directly without reducers",
            "To intercept actions and run extra logic like async calls or logging",
            "To replace reducers with custom asynchronous state handlers",
            "To make the store update itself automatically without dispatch"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 230,
        "question": "In the Redux cycle, where is the recommended place to handle side effects such as API calls or logging?",
        "options": [
            "Inside reducers",
            "Inside middleware",
            "Directly in React components",
            "Inside the store configuration"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 231,
        "question": "What is the main purpose of using Redux Thunk?",
        "options": [
            "To defer rendering of a component until data is ready",
            "To optimize reducers by memoizing state updates",
            "To prevent unnecessary re-renders in functional components",
            "To handle asynchronous logic before dispatching an action",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 232,
        "question": "What allows Redux to wait before dispatching fetched data into the store?",
        "options": [
            "Reducer",
            "Store",
            "Thunk",
            "Component"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 233,
        "question": "Which of the following is NOT a feature of Redux Toolkit?",
        "options": [
            "createSlice for reducing boilerplate",
            "createAsyncThunk for async logic",
            "Built-in support for Immer",
            "Class-based component lifecycle methods"
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 234,
        "question": "Which of the following is NOT a feature of Redux Toolkit's createSlice?",
        "options": [
            "It automatically generates action creators and action types",
            "It reducers to write mutable-looking code safely using Immer",
            "It allows eliminates the need to configure a Redux store",
            "It reduces boilerplate by combining state, reducers, and actions in one place"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 235,
        "question": "In Redux Toolkit, which library allows writing logic that looks like direct state mutation while ensuring immutability internally?",
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
        "id": 236,
        "question": "Which Redux Toolkit API simplifies reducer and action creation by combining them into one structure?",
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
        "id": 237,
        "question": "Which Redux Toolkit function sets up the store with good defaults like middleware and DevTools integration?",
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
        "id": 238,
        "question": "What is the recommended naming convention for action types in Redux?",
        "options": [
            "Single word names only",
            "Only event name",
            "Random strings for uniqueness",
            "Two-part names,domain and event",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 239,
        "question": "Which statement correctly describes action creators in Redux Toolkit's createSlice?",
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
        "id": 240,
        "question": "What is the main purpose of createSlice in Redux Toolkit?",
        "options": [
            "It installs external libraries for async handling",
            "It manages routing and navigation inside React apps",
            "It defines reducers and generates actions together",
            "It creates global styles for components in the project"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 241,
        "question": "Which statement about reducers inside createSlice is correct?",
        "options": [
            "They always return a completely new object",
            "They are allowed to mutate state because of Immer",
            "They cannot use payload values from dispatched actions",
            "They only work if written as pure asynchronous functions"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 242,
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
        "id": 243,
        "question": "What is a key benefit of using createSlice over plain Redux?",
        "options": [
            "It reduces boilerplate by combining logic in one place",
            "It prevents React from re-rendering during state updates",
            "It adds built-in support for routing and query strings",
            "It replaces the need for using any store or middleware"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 244,
        "question": "What does createSlice return after definition?",
        "options": [
            "A collection of selectors for reading global state",
            "A middleware that listens for dispatched actions",
            "A reducer function and auto-generated actions",
            "A hook that manages asynchronous API requests"
        ],
        "correctOption":2,
        "points": 20
    },
    {
        "id": 245,
        "question": "How are reducers inside createSlice typically written?",
        "options": [
            "As JSX components that render data from the store",
            "As lifecycle hooks that are triggered by React updates",
            "As asynchronous functions that always await API responses",
            "As functions that can write directly to state using Immer",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 246,
        "question": "Which of the following is automatically created by createSlice?",
        "options": [
            "A default middleware for handling promises",
            "Action creators for each reducer case",
            "Hooks for managing component side effects",
            "Global variables for application constants",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 247,
        "question": "What argument does an action creator from createSlice usually accept?",
        "options": [
            "A single payload value passed when dispatching",
            "Multiple positional arguments of any type",
            "No arguments since they are always constant",
            "A configuration object with reducer options"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 248,
        "question": "What role does Immer play inside createSlice reducers?",
        "options": [
            "It automatically merges reducers into a single function",
            "It delays reducer execution until after the dispatch cycle",
            "It allows writing mutations that are converted to immutable updates",
            "It provides hooks for React to subscribe to store updates"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 249,
        "question": "Which property inside createSlice defines how state is updated?",
        "options": [
            "The reducers field inside the slice configuration",
            "The config field declared in store initialization",
            "The middleware field imported from Redux core",
            "The template field defined at the root project",
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 250,
        "question": "What naming convention is used for action types from createSlice?",
        "options": [
            "They are namespaced as sliceName/reducerName",
            "They are written as numeric identifiers for reducers",
            "They are always prefixed with the string redux-",
            "They are defined in HTML meta tags for the app"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 251,
        "question": "How can you export the reducer generated by createSlice?",
        "options": [
            "By exporting createStore with slice.actions directly",
            "By exporting slice.reducer from the slice object",
            "By exporting reducer from Redux core package",
            "By exporting a manual switch statement in store"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 252,
        "question": "Why does createSlice reduce boilerplate code in Redux?",
        "options": [
            "Because it combines action creators and reducers together",
            "Because it removes action from using React components",
            "Because it combines the Redux store with local states",
            "Because it combines middleware and devtools by default"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 253,
        "question": "Which statement about initialState in createSlice is correct?",
        "options": [
            "It is optional because Redux automatically generates state",
            "It defines the default shape of state managed by the slice",
            "It must always be imported from an external JSON file",
            "It cannot contain nested objects or arrays of values",
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 254,
        "question": "What is the purpose of the 'prepare' callback in Redux Toolkit?",
        "options": [
            "It modifies payload before it reaches the reducer",
            "It schedules asynchronous actions in middleware",
            "It automatically generates slice names",
            "It validates reducer return types"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 255,
        "question": "Which of the following is a limitation of using React Context API compared to Redux?",
        "options": [
            "It is built into React and easy to set up a single context",
            "It doesn't provide middleware support for async operations",
            "It allows state management with useReducer",
            "It offers integration with React DevTools"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 256,
        "question": "What problem can occur when adding multiple contexts in a React application?",
        "options": [
            "Simplified DevTools integration",
            "Improved global state performance",
            "Automatic asynchronous operation handling",
            "Provider hell with deeply nested wrappers",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 257,
        "question": "Which feature is missing in React Context API but available in Redux?",
        "options": [
            "Ability to create additional state slices easily",
            "Optimization built into state updates",
            "Support for async logic via middleware",
            "Excellent DevTools for debugging"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 258,
        "question": "Which of the following is an advantage of Redux compared to Context API?",
        "options": [
            "Built directly into React core",
            "Requires no additional setup or packages",
            "Optimizes performance out of the box",
            "Simpler for a single state context"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 259,
        "question": "What is one of the disadvantages Redux compared to React Context API?",
        "options": [
            "It is built into React itself",
            "It requires additional packages and setup",
            "It has no mechanism for async logic",
            "It provides only React DevTools support"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 260,
        "question": "Why might performance optimization be harder with React Context API?",
        "options": [
            "Context re-renders all consumers on update",
            "Context does not support state slices",
            "Context automatically batches updates",
            "Context integrates with middleware by default"
        ],
        "correctOption": 0,
        "points": 20
    },
    {
        "id": 261,
        "question": "Which tool provides better debugging experience for global state?",
        "options": [
            "useReducer inside Context API",
            "React Context with React DevTools",
            "Redux with its dedicated DevTools",
            "Provider nesting in App.js"
        ],
        "correctOption": 2,
        "points": 20
    },
    {
        "id": 262,
        "question": "Which situation is best suited for React Context API?",
        "options": [
            "When you need to share a rarely changing value",
            "When you have a shopping cart with frequent updates",
            "When you need middleware for async operations",
            "When you have complex nested state with arrays"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 263,
        "question": "What is a common use case of Context API?",
        "options": [
            "Managing small global UI state",
            "Solving simple prop drilling",
            "Handling deeply nested reducers",
            "Debugging with Redux DevTools"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 264,
        "question": "When is Redux a better choice than Context API?",
        "options": [
            "When you just want to pass a color theme",
            "When state updates happen very frequently",
            "When you need to share static data",
            "When state is limited to a single subtree"
        ],
        "correctOption": 1,
        "points": 20
    },
    {
        "id": 265,
        "question": "Why is Redux suitable for managing complex state structures?",
        "options": [
            "Because it is built into React",
            "Because it has only one global provider",
            "Because it avoids prop drilling automatically",
            "Because Redux Toolkit allows state mutation",
        ],
        "correctOption": 3,
        "points": 20
    },
    {
        "id": 266,
        "question": "Which state management tool is more efficient for local subtree state?",
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
        "id": 277,
        "question": "Which state management tool is more efficient for changing values like theme or language?",
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
        "id": 278,
        "question": "What is the main purpose of a feature-based folder structure in React applications?",
        "options": [
            "It organizes files strictly by type such as components, hooks, and styles",
            "It groups related code (UI, logic, tests) by feature for better maintainability",
            "It automatically optimizes bundle size without extra configuration",
            "It enforces global state management across all features by default"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 279,
        "question": "What is a common disadvantage  of using files only by type (components, hooks, styles) in large React projects?",
        "options": [
            "It makes reusing components across projects impossible",
            "It mixes UI and logic in the same folder without separation",
            "It makes testing features more difficult due to spread files",
            "It automatically increases bundle size and slows down the app"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 280,
        "question": "In a feature-based folder structure, where would you typically place components?",
        "options": [
            "Inside a global 'components' folder shared across the entire app",
            "Inside each feature folder, grouped with related logic and styles",
            "Inside a single 'pages' directory that holds all UI code",
            "Inside a 'hooks' folder regardless of feature boundaries"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 281,
        "question": "What does 'data loading waterfall' mean in the context of React applications?",
        "options": [
            "Using advanced caching strategies to completely eliminate the need for repeated network calls",
            "Multiple requests executed sequentially, causing slower loading-omid",
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
            "It retrieves the complete data of a resource without modifications",
            "It replaces the entire resource with the provided data",
            "It applies partial modifications to an existing resource",
            "It creates a completely new resource on the server"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 283,
        "question": "How does the HTTP PUT method differ from PATCH?",
        "options": [
            "PUT retrieves an existing resource while PATCH deletes it",
            "PUT replaces the full resource while PATCH updates only specific fields",
            "PUT is only used for creating new resources while PATCH is for deleting",
            "PUT sends partial data while PATCH requires the full object"
        ],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 284,
        "question": "When should the POST method be preferred over PUT or PATCH?",
        "options": [
            "When partially updating only one property of an existing resource",
            "When replacing an entire resource with new data",
            "When creating a completely new resource on the server",
            "When retrieving the current state of a resource"
        ],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 285,
        "question": "Which scenario best fits the PATCH method?",
        "options": [
            "Uploading a new user profile picture without modifying other user data",
            "Creating a new order with customer information details and list of items",
            "Replacing an entire shopping cart with a new list of items",
            "Fetching the order history for a customer"
        ],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 286,
        "question": "A user updates only the delivery address of an existing order without touching other fields. Which HTTP method is most appropriate?",
        "options": ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "correctOption": 3,
        "points": 30
    },
    {
        "id": 287,
        "question": "The system needs to create a brand new pizza order on the server. Which HTTP method should be used?",
        "options": ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "correctOption": 1,
        "points": 30
    },
    {
        "id": 288,
        "question": "An admin replaces the entire pizza menu with a new list of items. Which HTTP method best fits this action?",
        "options": ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "correctOption": 2,
        "points": 30
    },
    {
        "id": 289,
        "question": "A customer wants to view the details of a specific order by its ID. Which HTTP method should be used?",
        "options": ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "correctOption": 0,
        "points": 30
    },
    {
        "id": 290,
        "question": "A customer decides to cancel their order and remove it completely from the system. Which HTTP method should be used?",
        "options": ["GET", "POST", "PUT", "PATCH", "DELETE"],
        "correctOption": 4,
        "points": 30
    },
    {
        "id": 291,
        "question": "What defines a pure function in JavaScript?",
        "options": [
            "It always returns the same output for the same input",
            "It can modify variables outside its scope",
            "It depends on external states like Date or Math.random",
            "It causes side effects such as DOM manipulation"
        ],
        "correctOption": 0,
        "points": 10
    },
    {
        "id": 292,
        "question": "Which of the following makes a React component impure?",
        "options": [
            "Using props to render UI",
            "Returning JSX consistently",
            "Receiving children elements",
            "Fetching data directly inside render",
        ],
        "correctOption": 3,
        "points": 10
    },
    {
        "id": 293,
        "question": "Why is it important for functions passed to useMemo or useCallback to be pure?",
        "options": [
            "Because impure functions are automatically memoized",
            "Because impure functions may return inconsistent results",
            "Because pure functions cannot accept arguments",
            "Because useMemo only works with asynchronous functions"
        ],
        "correctOption": 1,
        "points": 10
    },
    {
        "id": 294,
        "question": "Which action would break the purity of a React reducer?",
        "options": [
            "Returning a new state object",
            "Logging a message to the console",
            "Spreading the previous state into a new one",
            "Calculating the sum of two numbers"
        ],
        "correctOption": 1,
        "points": 10
    }

]
