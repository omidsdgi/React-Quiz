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
            "id": 16,
            "question": "What is the main role of routing in a web application?",
            "options": [
                "Loading scripts and styles on demand",
                "Connecting frontend logic with backend services",
                "Mapping URLs to corresponding views or components",
                "Managing client-side form validation"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 17,
            "question": "In React, what does a route usually represent?",
            "options": [
                "A function that fetches remote data",
                "A mapping between a URL path and a React component",
                "A global state object shared across components",
                "A reference to a DOM element in the tree"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 18,
            "question": "What does routing allow users to do in a React app?",
            "options": [
                "Navigate between different screens using links and URLs",
                "Apply global styles across many components",
                "Cache API responses automatically in the browser",
                "Persist component state to local storage"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 19,
            "question": "What is React Router mainly used for?",
            "options": [
                "Managing global application state",
                "Handling navigation and rendering matching components",
                "Providing CSS utilities for components",
                "Coordinating data fetching for pages"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 20,
            "question": "What best describes a Single Page Application (SPA)?",
            "options": [
                "An app that runs only on a single device type",
                "A web app that loads one HTML page and updates the UI dynamically",
                "A site that reloads the browser on each navigation",
                "An application that supports only one route"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 21,
            "question": "What is a key advantage of an SPA?",
            "options": [
                "Pages always reload faster on each click",
                "Server load becomes significantly higher",
                "Navigation feels smoother and more responsive",
                "No JavaScript is required for interactivity"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 22,
            "question": "How do SPAs usually manage browser URLs?",
            "options": [
                "Each navigation triggers a full server request",
                "They change the URL via the History API without reloads",
                "They hide the URL from the user interface",
                "They always use server-side redirects for navigation"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 23,
            "question": "Where is rendering usually handled in a Single Page Application?",
            "options": [
                "Only on the server before sending HTML to the client",
                "Primarily on the client using JavaScript to update the UI",
                "Equally on client and server at the same time",
                "Exclusively on external CDN servers"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 24,
            "question": "What happens in React when routing changes the URL?",
            "options": [
                "The browser performs a full page reload from the server",
                "The URL change is ignored and the page stays the same",
                "The DOM updates to render the component matching the new URL",
                "The application stops and restarts execution"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 25,
            "question": "In an SPA, what mainly updates the page content?",
            "options": [
                "JavaScript executing in the browser to modify the DOM",
                "The server sending a new HTML file for each page",
                "A full browser reload on each navigation event",
                "Only CSS rules changing the page layout"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 26,
            "question": "What is a common SEO challenge for SPAs?",
            "options": [
                "They cannot be hosted on secure servers",
                "Search engines may struggle to index dynamically rendered content",
                "They do not allow linking between pages",
                "They are incompatible with HTTPS protocols"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 27,
            "question": "What is a key difference between client-side and server-side routing?",
            "options": [
                "Client-side always reloads the page on navigation",
                "Server-side never performs a full page load",
                "They are functionally identical in modern browsers",
                "Client-side updates views without full reload; server-side reloads the page"
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 28,
            "question": "Which approach improves SEO for a Single Page Application?",
            "options": [
                "Switching back to many static HTML pages only",
                "Avoiding modern routing libraries entirely",
                "Using server-side rendering (SSR) or pre-rendering techniques",
                "Disabling JavaScript so pages are static"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 29,
            "question": "What is ESLint mainly used for in JavaScript projects?",
            "options": [
                "Managing application state between components",
                "Linting code and identifying problematic patterns",
                "Rendering UI elements on the client",
                "Running unit tests automatically"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 30,
            "question": "When is ESLint typically run during development?",
            "options": [
                "Only during deployment to production",
                "While bundling assets with Webpack",
                "During development or before committing changes",
                "Only after creating the production build"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 31,
            "question": "Does ESLint only check for syntax errors?",
            "options": [
                "Yes, it only checks syntax",
                "No, it also enforces style and finds logic issues",
                "Yes, it replaces the compiler",
                "No, it builds production bundles"
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
            "question": "What is the purpose of plugins in ESLint?",
            "options": [
                "To boost runtime speed",
                "To add TypeScript support",
                "To extend ESLint with custom rules",
                "To convert JS into HTML"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 34,
            "question": "Which command runs ESLint from the CLI?",
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
            "question": "How can you exclude files or folders from being linted?",
            "options": [
                "Add them to .eslintignore",
                "Remove them from package.json",
                "Comment them in index.html",
                "Rename the files"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 36,
            "question": "Which statement about custom ESLint rules is true?",
            "options": [
                "You can write rules as functions that inspect the AST",
                "Rules can only be set from the CLI",
                "Rules must be in index.html",
                "Custom rules work only in Angular"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 37,
            "question": "How do you enable ESLint for React projects?",
            "options": [
                "Add 'react' plugin and 'plugin:react/recommended' in extends",
                "Install Redux with ESLint",
                "Use vite instead of eslint",
                "Install eslint only, no plugins"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 38,
            "question": "What is the difference between 'rules', 'extends', and 'plugins' in ESLint?",
            "options": [
                "'rules' is for plugins, 'extends' sets environments, 'plugins' adds globals",
                "'rules' define rule configs, 'extends' inherit presets, 'plugins' add more rules",
                "All three are the same and interchangeable",
                "Only 'rules' matters; others are just comments"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 39,
            "question": "Why are there many ways of styling React apps?",
            "options": [
                "Because React enforces one method",
                "Because CSS is not supported by default",
                "Because React is flexible and unopinionated",
                "Because JSX only allows inline styles"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 40,
            "question": "What is the main benefit of CSS Modules?",
            "options": [
                "They allow CSS in JSX strings",
                "They apply styles globally",
                "They compile CSS to JS at runtime",
                "They scope class names locally to components"
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 41,
            "question": "What does it mean when CSS is scoped to a component?",
            "options": [
                "The styles apply to the whole page",
                "The styles are reusable across all components",
                "The styles only exist in global.css",
                "The styles affect only that component"
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 42,
            "question": "What is a problem with global CSS styles?",
            "options": [
                "They can't be used in SSR",
                "They are not supported by browsers",
                "They may cause conflicts between components",
                "They require special JSX syntax"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 43,
            "question": "Why store UI state in the URL?",
            "options": [
                "To reduce file size",
                "To make the UI look cleaner",
                "To allow sharing and bookmarking states",
                "To stop components from re-rendering"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 44,
            "question": "Which is an example of storing state in the URL?",
            "options": [
                "Using ?search=react in the URL",
                "Saving theme in localStorage",
                "Managing input with useState",
                "Passing props to children"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 45,
            "question": "Which hook reads query params in React Router?",
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
            "question": "Which approach preserves UI state after refresh?",
            "options": [
                "Store state in localStorage",
                "Use useState only",
                "Use React context only",
                "Keep state in a local variable"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 47,
            "question": "Which hook prevents unnecessary re-renders?",
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
                "Caches heavy calculations",
                "Skips re-render if props don't change",
                "Stores state in memory",
                "Creates a new component instance"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 49,
            "question": "When should you use useMemo?",
            "options": [
                "For heavy calculations or object creation",
                "To replace all useState hooks",
                "For simple string concatenations",
                "For every variable in components"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 50,
            "question": "Which technique avoids prop drilling?",
            "options": [
                "Use more useState hooks",
                "Create extra components",
                "Use React Context API",
                "Pass more props to children"
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
                "useMemo is only for effects, useCallback is for state",
                "They both do the exact same thing"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 52,
            "question": "Which approach may cause unnecessary re-renders in React?",
            "options": [
                "Using keys in lists",
                "Creating new objects or functions inside render",
                "Using React.memo correctly",
                "Splitting code into small components"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 53,
            "question": "What is the purpose of the 'key' prop in React lists?",
            "options": [
                "To apply CSS styles",
                "To help React track list item changes",
                "To improve component design",
                "To send data between components"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 54,
            "question": "Which hook is best for optimizing expensive calculations?",
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
            "question": "How can you stop a component from re-rendering with its parent?",
            "options": [
                "Wrap it with React.memo",
                "Use useEffect with empty array",
                "Move state from props to local state",
                "Add extra props to the component"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 56,
            "question": "What happens if no dependency array is provided to useEffect?",
            "options": [
                "It runs only once",
                "It never runs",
                "It runs on every render",
                "React shows a warning"
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
            "options": [
                "When props remain unchanged",
                "When new object or array props are created every render",
                "When component has no props",
                "When component uses internal state"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 59,
            "question": "What happens if useMemo depends on a function recreated each render?",
            "options": [
                "It recalculates every render, losing optimization",
                "React throws an error",
                "It works normally and caches correctly",
                "The function is auto-memoized by React"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 60,
            "question": "Which method reduces unnecessary Context re-renders?",
            "options": [
                "Using multiple Context providers",
                "Adding more consumers",
                "Placing useEffect in the Context",
                "Splitting Context by data responsibility"
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 61,
            "question": "In React Profiler, what does the 'Committed' phase measure?",
            "options": [
                "Time applying updates to the DOM",
                "Time calculating what changed",
                "Time running useEffect",
                "Total render plus lifecycle time"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 62,
            "question": "Why can overusing useCallback hurt performance?",
            "options": [
                "It always speeds up performance",
                "Memoization overhead may outweigh benefits for simple functions",
                "It leaks memory in some cases",
                "It only works with class components"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 63,
            "question": "What is the best way to handle very large lists in React?",
            "options": [
                "Wrap each item in React.memo",
                "Use useCallback for all handlers",
                "Apply list virtualization (windowing)",
                "Add extra useEffect hooks"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 64,
            "question": "Which hook keeps computed values between renders?",
            "options": [
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
            "question": "What is inefficient in this code?\n\nconst MyComponent = () => {\n  const [items, setItems] = useState([]);\n  const filtered = items.filter(i => i.active);\n  return <List items={filtered} />;\n}",
            "options": [
                "Filter creates a new array each render",
                "The code is fully optimized",
                "useState is misused",
                "List will never update correctly"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 66,
            "question": "Why do effects run twice under StrictMode in dev?",
            "options": [
                "Because of a React bug",
                "To check cleanup of side effects",
                "To make rendering faster",
                "To match production exactly"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 67,
            "question": "What does optimization mainly target in React apps?",
            "options": [
                "Shorter code and fewer files",
                "Using only latest React hooks",
                "Avoiding extra re-renders and reducing bundle size",
                "Turning all functions into classes"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 68,
            "question": "When is React.memo not effective?",
            "options": [
                "When props are stable across renders",
                "When the component has no props",
                "When new object references are passed as props",
                "When state is managed internally"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 69,
            "question": "Which technique avoids recalculating heavy values?",
            "options": [
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
            "question": "What does React.StrictMode primarily test?",
            "options": [
                "App speed",
                "Side effect cleanup and warnings",
                "Code style",
                "Memory leaks only"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 71,
            "question": "What is the main role of useCallback?",
            "options": [
                "Memoize function references between renders",
                "Store state across renders",
                "Trigger re-renders manually",
                "Replace useMemo completely"
            ],
            "correctOption": 0,
            "points": 10
        },
        {
            "id": 72,
            "question": "What is the recommended way to render thousands of items?",
            "options": [
                "Virtualization or windowing",
                "Adding keys only",
                "Using extra useState hooks",
                "Wrapping everything in Context"
            ],
            "correctOption": 0,
            "points": 20
        },
        {
            "id": 73,
            "question": "What does the React Profiler help you measure?",
            "options": [
                "Memory leaks in Node.js",
                "Render times and re-renders",
                "Bundle size and network usage",
                "Code style errors"
            ],
            "correctOption": 1,
            "points": 10
        },
        {
            "id": 74,
            "question": "What happens if you overuse useMemo?",
            "options": [
                "It adds overhead that may slow performance",
                "It improves SEO significantly",
                "It makes components pure by default",
                "It replaces need for useState"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 75,
            "question": "Which hook keeps a mutable value across renders without causing re-renders?",
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
        "question": "Why can't we directly use fetch API calls inside a Redux reducer?",
        "options": [
            "Because reducers must be pure functions without asynchronous side effects",
            "Because Redux reducers cannot access global browser APIs such as fetch",
            "Because fetch can only be called from React components, not Redux code",
            "Because reducers are automatically optimized and block async operations"
        ],
        "correctOption": 0,
        "points": 30
    },
        {
            "id": 77,
            "question": "When using React.StrictMode in development, why are some effects executed twice?",
            "options": [
                "Because React has an internal bug that repeats effects",
                "To help developers detect side effects and confirm cleanup logic",
                "To increase application rendering performance in development",
                "To make development environment identical to production"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 78,
            "question": "Which areas are the primary focus for performance optimization in React applications?",
            "options": [
                "Using more hooks, creating additional components, writing longer functions",
                "Concentrating only on CSS, database queries, and backend responses",
                "Increasing component nesting depth and switching to class components",
                "Preventing wasted renders, improving runtime speed, reducing bundle size"
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 79,
            "question": "Which technique directly reduces wasted re-renders in React?",
            "options": [
                "Splitting code with React.lazy",
                "Compressing static assets such as images",
                "Wrapping components with React.memo ",
                "Minifying the JavaScript bundle before deployment"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 80,
            "question": "How does React.lazy() contribute to reducing bundle size?",
            "options": [
                "It prevents repeated component rendering",
                "It automatically compresses component code",
                "It loads components only when they are needed",
                "It removes unused CSS rules from the project"
            ],
            "correctOption": 2,
            "points": 20
        },
        {
            "id": 81,
            "question": "Which approach best improves application speed by optimizing DOM usage?",
            "options": [
                "Applying inline styles to all React components",
                "Using virtual scrolling for large lists",
                "Attaching additional global event listeners",
                "Adding more nested wrapper div elements"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 82,
            "question": "What performance impact occurs if an expensive calculation is executed directly during render? const Parent = () => { const [count, setCount] = useState(0); const expensiveValue = heavyCalculation(count); return <Child value={expensiveValue} />; }",
            "options": [
                "It only increases the size of the JavaScript bundle",
                "It leads to unnecessary re-renders of the Child component",
                "It causes expensive recalculation on every render",
                "It produces no measurable performance overhead"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 83,
            "question": "Which combination of tools addresses all three React optimization areas at once?",
            "options": [
                "React.memo together with React.lazy and useMemo",
                "useCallback in combination with React.Suspense and React.memo",
                "useMemo along with useEffect and useState",
                "React.lazy combined with useCallback and React.Fragment"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 84,
            "question": "What are wasted renders in a React application?",
            "options": [
                "Renders that take longer than 16 milliseconds to execute",
                "Initial renders that happen when a component first mounts",
                "Renders triggered when state or props legitimately change",
                "Re-renders where the component output remains identical to the previous result"
            ],
            "correctOption": 3,
            "points": 10
        },
        {
            "id": 85,
            "question": "When does a React component instance re-render?",
            "options": [
                "when its internal state changes, or its parent re-renders",
                "When state changes, context values change, or its parent re-renders",
                "Only if incoming props differ from the previous render",
                "Only if useEffect dependencies are updated"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 86,
            "question": "What happens when a React Context value changes?",
            "options": [
                "Only the Provider component re-renders after the change",
                "All consumer components re-render",
                "Only consumers reading the changed property re-render",
                "No consumer re-renders unless explicitly forced"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 87,
            "question": "Which pattern causes unnecessary re-renders when using Context? const MyProvider = ({ children }) => { const [user, setUser] = useState(null); const [theme, setTheme] = useState('light'); const value = { user, setUser, theme, setTheme }; return <MyContext.Provider value={value}>{children}</MyContext.Provider>; }",
            "options": [
                "Defining multiple state variables in the provider",
                "Creating a new object reference for value during every render",
                "Including both user and theme inside the same context",
                "Using useState instead of useReducer for context state"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 88,
            "question": "How can Context consumers be prevented from re-rendering when only unrelated data changes?",
            "options": [
                "Applying React.memo on all context consumers",
                "Wrapping all context functions with useCallback",
                "Splitting the context into multiple providers",
                "Keeping all shared data inside component-level state instead"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 89,
            "question": "What is the performance impact of this Context usage? const ExpensiveComponent = () => { const { theme } = useContext(AppContext); return <div className={theme}>Content</div>; }",
            "options": [
                "It introduces no performance issues at all",
                "The component re-renders when unrelated context values change",
                "The component only re-renders when the theme value itself changes",
                "The component never re-renders automatically because of context"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 90,
            "question": "Which solution avoids creating a new context value object on every render?",
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
            "question": "Do prop changes directly trigger a React component to re-render?",
            "options": [
                "Yes, React monitors all props and re-renders automatically",
                "No, only if props are arrays or objects with new references",
                "Yes, but only when the props are primitive values",
                "No, props changes occur because the parent re-rendered"
            ],
            "correctOption": 3,
            "points": 20
        },
        {
            "id": 92,
            "question": "What does the term 'render' mean in React?",
            "options": [
                "Applying updates directly to the DOM elements",
                "Painting the pixels on the screen canvas",
                "Executing the component function to create a Virtual DOM tree",
                "Running all useEffect hooks inside the component"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 93,
            "question": "Does a React render always update the actual DOM?",
            "options": [
                "Yes, every render immediately changes the DOM",
                "No, only updates the real DOM if differences are found",
                "This is true only for class-based components",
                "Only when state changes but not when props change"
            ],
            "correctOption": 1,
            "points": 20
        },
        {
            "id": 94,
            "question": "What exactly defines a wasted render in React?",
            "options": [
                "A render that results in the same Virtual DOM tree as before",
                "A render that takes longer than sixteen milliseconds to finish",
                "A render that unnecessarily updates the real DOM",
                "Any render triggered because the parent component updated"
            ],
            "correctOption": 2,
            "points": 10
        },
        {
            "id": 95,
            "question": "When do wasted renders actually become a performance issue?",
            "options": [
                "They are always problematic and must be avoided",
                "Only when they lead to unnecessary DOM updates",
                "Never, because React automatically optimizes them",
                "When they occur frequently in components with expensive calculations or many children"
            ],
            "correctOption": 3,
            "points": 30
        },
        {
            "id": 96,
            "question": "Why is passing a heavy component as children often more efficient than rendering it directly in a stateful parent?",
            "options": [
                "Because children are cached permanently and never re-render",
                "Because React treats children as a stable prop reference and reuses it when unchanged",
                "Because children execute in a separate rendering thread from parents",
                "Because children bypass the Virtual DOM diffing mechanism"
            ],
            "correctOption": 1,
            "points": 30
        },
        {
            "id": 97,
            "question": "What happens if a heavy component is rendered directly inside a parent that frequently updates state?",
            "options": [
                "The heavy component re-renders each time the parent re-renders",
                "The component renders only once and never re-renders again",
                "It re-renders only if the parent’s state matches its props exactly",
                "It re-renders only when React runs in development mode"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 98,
            "question": "How does React decide whether to re-render child components passed as props?",
            "options": [
                "always re-renders all children whenever parent state changes",
                "applies memoization automatically to every child component",
                " if their reference changes compared to the previous render",
                "ignores children props completely during reconciliation"
            ],
            "correctOption": 2,
            "points": 30
        },
        {
            "id": 99,
            "question": "What is the best practice for handling expensive child components inside a parent with frequent updates?",
            "options": [
                "Wrap the child component with React.memo or pass it as children/prop",
                "Recreate the child on each render to always refresh it",
                "Avoid using state in the parent component entirely",
                "Place the heavy child outside of the React rendering tree"
            ],
            "correctOption": 0,
            "points": 30
        },
        {
            "id": 100,
            "question": "Why does passing children not always guarantee better performance?",
            "options": [
                "Because children always re-render regardless of prop changes",
                "Because React does not support optimization for children props",
                "Because children completely skip the Virtual DOM comparison process",
                "Because performance benefit depends on whether the children’s content remains unchanged"
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
        "question": "What is the main purpose of redux-thunk in Redux?",
        "options": [
            "It automatically batches multiple state updates in reducers",
            "It replaces Redux store with a new state management library",
            "It memoizes selectors to prevent unnecessary React re-renders",
            "It allows dispatching functions to handle asynchronous actions",
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
    }


]
