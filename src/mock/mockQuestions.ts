// data/mockQuestionsCopy.ts
import { Question } from "@/type/QuizTypes";

export const mockQuestions: Question[] = [
    {
        id: 1,
        question:"In React's data flow model, how does data typically move between components?",
        options: [
            "From parents to children",
            "From children to parents",
            "Both ways",
            "The developers decides",
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• React از الگوی Unidirectional Data Flow استفاده می‌کند\n" +
            "- داده‌ها از طریق props از والد به فرزند منتقل می‌شوند\n" +
            "- این الگو قابلیت پیش‌بینی و دیباگ کردن را افزایش می‌دهد\n" +
            "- برای انتقال داده از فرزند به والد از callback functions استفاده می‌شود"
    },
    {
        id: 2,
        question:"In React applications, when should you directly manipulate the DOM?",
        options: [
            "When adding event listeners",
            "When updating component content",
            "When applying dynamic styles",
            "Almost never - React manages the DOM"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• React از Virtual DOM برای مدیریت DOM واقعی استفاده می‌کند\n" +
            "- دستکاری مستقیم DOM می‌تواند با سیستم React تداخل داشته باشد\n" +
            "- فقط در موارد خاص مثل focus، scroll یا اندازه‌گیری المان‌ها از ref استفاده کنید\n" +
            "- React بهترین راه برای به‌روزرسانی UI را خودکار مدیریت می‌کند"
    },
    {
        "id": 3,
        "question": "What is the Virtual DOM in React?",
        "options": [
            "A copy of actual DOM kept in memory",
            "A database for storing component data",
            "A styling system for React components",
            "A routing mechanism for navigation"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• Virtual DOM یک نسخه سبک و در حافظه از DOM واقعی است\n" +
            "- React ابتدا Virtual DOM را به‌روزرسانی می‌کند، سپس آن را با DOM واقعی مقایسه می‌کند\n" +
            "- فقط تفاوت‌ها به DOM واقعی اعمال می‌شود (Reconciliation)\n" +
            "- این روش عملکرد را به‌طور قابل توجهی بهبود می‌بخشد"
    },
    {
        "id": 4,
        "question": "What is the main difference between Controlled and Uncontrolled Components?",
        "options": [
            "Controlled components are faster than uncontrolled",
            "Controlled components manage form state through React state",
            "Uncontrolled components cannot have event handlers",
            "Uncontrolled components require special imports"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• در Controlled Components مقدار input از طریق state مدیریت می‌شود\n" +
            "- هر تغییری در input باید از طریق setState انجام شود\n" +
            "- در Uncontrolled Components مقدار input توسط خود DOM نگهداری می‌شود\n" +
            "- Controlled روش توصیه شده React است چون کنترل بیشتری به ما می‌دهد"
    },
    {
        "id": 5,
        "question": "What is the fundamental difference between props and state?",
        "options": [
            "Props are mutable, state is immutable",
            "Props are passed from parent, state is managed internally",
            "Props are for styling, state is for data",
            "Props cannot be objects, state can be"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Props از کامپوننت والد به فرزند ارسال می‌شوند و read-only هستند\n" +
            "- State داده‌ای است که داخل خود کامپوننت مدیریت می‌شود و می‌تواند تغییر کند\n" +
            "- تغییر state باعث رندر مجدد کامپوننت می‌شود\n" +
            "- تغییر props فقط از طرف والد صورت می‌گیرد"
    },
    {
        "id": 6,
        "question": "What happens during the Mounting phase of component lifecycle?",
        "options": [
            "Component is created and inserted into DOM",
            "Component updates its state values",
            "Component is removed from the DOM",
            "Component re-renders with new props"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• Mounting مرحله اولیه چرخه حیات کامپوننت است\n" +
            "- کامپوننت برای اولین بار ساخته و به DOM اضافه می‌شود\n" +
            "- constructor، render و componentDidMount اجرا می‌شوند\n" +
            "- state و props اولیه تنظیم می‌شوند\n" +
            "- useEffect با dependency array خالی در این مرحله اجرا می‌شود"
    },
    {
        "id": 7,
        "question": "What is prop drilling in React?",
        "options": [
            "Validating props before using them",
            "Passing props through multiple component layers",
            "Creating dynamic props at runtime",
            "Optimizing prop performance with memoization"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• Prop drilling انتقال props از چندین لایه کامپوننت است\n" +
            "- props از والد به نوه‌ها و فراتر منتقل می‌شود\n" +
            "- کامپوننت‌های میانی props را فقط برای انتقال دریافت می‌کنند\n" +
            "- باعث پیچیدگی و سختی نگهداری کد می‌شود\n" +
            "- Context API راه‌حل بهتری برای جلوگیری از آن است"
    },
    {
        "id": 8,
        "question": "Why are keys important when rendering lists in React?",
        "options": [
            "Keys help React identify which items changed",
            "Keys are required for CSS styling",
            "Keys improve API response time",
            "Keys enable component lazy loading"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• keys به React کمک می‌کنند تشخیص دهد کدام آیتم تغییر کرده\n" +
            "- بدون key، React همه لیست را دوباره render می‌کند\n" +
            "- key باید یکتا و پایدار باشد (نه index آرایه)\n" +
            "- به بهبود performance و حفظ state کامپوننت‌ها کمک می‌کند\n" +
            "- استفاده از index به عنوان key می‌تواند مشکل ایجاد کند"
    },
    {
        "id": 9,
        "question": "How does React's Reconciliation Algorithm optimize rendering?",
        "options": [
            "By always re-rendering entire component tree",
            "By comparing Virtual DOM trees and updating only differences",
            "By caching all components permanently",
            "By disabling re-renders for unchanged components"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• Reconciliation الگوریتم مقایسه Virtual DOM قدیم و جدید است\n" +
            "- React تفاوت‌ها را شناسایی و فقط آن‌ها را به DOM اعمال می‌کند\n" +
            "- از diffing algorithm برای بهینه‌سازی استفاده می‌کند\n" +
            "- keys به React کمک می‌کنند elements را track کنند\n" +
            "- این فرآیند باعث افزایش کارایی rendering می‌شود"
    },
    {
        "id": 10,
        "question": "What changed about batching in React 18?",
        "options": [
            "Batching was removed completely",
            "Batching only works in event handlers",
            "Batching works in async functions and promises",
            "Batching requires manual configuration"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• در React 18، automatic batching در همه جا فعال است\n" +
            "- قبلاً batching فقط در event handlers کار می‌کرد\n" +
            "- حالا در promises، setTimeout و async functions هم کار می‌کند\n" +
            "- تعداد re-renders را کاهش می‌دهد\n" +
            "- می‌توانید با flushSync از batching جلوگیری کنید"
    },
    {
        "id": 11,
        "question": "What is the purpose of React.StrictMode?",
        "options": [
            "To enforce TypeScript in all components",
            "To highlight potential problems in application",
            "To prevent all runtime errors",
            "To optimize production bundle size"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• StrictMode مشکلات احتمالی برنامه را برجسته می‌کند\n" +
            "- فقط در development mode فعال است\n" +
            "- کامپوننت‌ها را دو بار render می‌کند برای یافتن side effects\n" +
            "- الگوهای deprecated و unsafe را شناسایی می‌کند\n" +
            "- به نوشتن کد بهتر و پایدارتر کمک می‌کند"
    },
    {
        "id": 12,
        "question": "What happens during the Unmounting phase?",
        "options": [
            "Component state is saved to localStorage",
            "Component is removed from DOM and cleanup runs",
            "Component re-renders one final time",
            "Component props are reset to defaults"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• Unmounting مرحله حذف کامپوننت از DOM است\n" +
            "- cleanup functions در useEffect اجرا می‌شوند\n" +
            "- subscriptions لغو و timers پاک می‌شوند\n" +
            "- state و refs از بین می‌روند\n" +
            "- componentWillUnmount در class components اجرا می‌شود"
    },
    {
        "id": 13,
        "question":  "Does a useEffect hook always run on the component's initial render?",
        "options": [
            "Yes, regardless of the dependency array",
            "It depends on the dependency array contents",
            "No, it only runs on subsequent renders",
            "It depends on the effect's cleanup function"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• useEffect همیشه در رندر اولیه کامپوننت اجرا می‌شود\n" +
            "- dependency array فقط رفتار اجراهای بعدی را کنترل می‌کند\n" +
            "- برای جلوگیری از اجرا در mount می‌توانید از ref برای track کردن استفاده کنید\n" +
            "- این رفتار مستقل از محتوای dependency array است"
    },
    {
        id: 14,
        question: "How often will a useEffect run if no dependency array is provided?",
        options: [
            "Only when the component mounts",
            "Only when the component unmounts",
            "Only on the first re-render",
            "On every render of the component"
        ],
        correctOption: 3,
        points: 20,
        "explanation":" • بدون dependency array، effect در هر رندر کامپوننت اجرا می‌شود\n" +
            "- این می‌تواند مشکلات performance ایجاد کند\n" +
            "- همیشه dependency array مناسب را مشخص کنید\n" +
            "- برای اجرای یک‌بار از آرایه خالی [] استفاده کنید"
    },
    {
        "id": 15,
        "question":  "Does ESLint only check for syntax errors?",
        "options": [
            "Yes, it only validates syntax",
            "No, it also enforces style and finds logic issues",
            "Yes, it replaces the JavaScript compiler",
            "No, it only builds production bundles"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• ESLint علاوه بر syntax، style guide و logic issues را بررسی می‌کند\n" +
            "- می‌تواند مشکلات احتمالی مثل متغیرهای استفاده نشده را شناسایی کند\n" +
            "- rules قابل تنظیم هستند و می‌توانید custom rules بنویسید\n" +
            "- در React پروژه‌ها، eslint-plugin-react-hooks مفید است"
    },
    {
        "id": 16,
        "question": "What is the main advantage of CSS Modules?",
        "options": [
            "They enable CSS-in-JS syntax automatically",
            "They apply styles globally by default",
            "They compile CSS to JavaScript at runtime",
            "They provide locally scoped class names"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• CSS Modules از name collision جلوگیری می‌کند\n" +
            "- هر class name به صورت خودکار unique می‌شود\n" +
            "- styles فقط به کامپوننتی که import کرده محدود می‌شوند\n" +
            "- در Next.js به صورت پیش‌فرض پشتیبانی می‌شود"
    },
    {
        "id": 17,
        "question": "What is a DOM Element in react's context?",
        "options": [
            "A React component rendered to the virtual DOM",
            "A JavaScript object representing component structure",
            "An actual HTML element in the browser DOM",
            "A fiber node tracking component state changes"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• DOM Element یک عنصر واقعی HTML در مرورگر است\n" +
            "- React Element نمایش JavaScript از آن است\n" +
            "- در Commit Phase، React Elements به DOM Elements تبدیل می‌شوند\n" +
            "- می‌توانید با ref به DOM Element دسترسی مستقیم داشته باشید"
    },
    {
        "id": 18,
        "question": "What is the relationship between Component Instance and React Element?",
        "options": [
            "Component instances create React elements when rendered",
            "React elements create component instances automatically",
            "Both are identical and interchangeable in React",
            "Component instances replace React elements during rendering"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• Component Instance زمانی ایجاد می‌شود که کامپوننت در JSX استفاده شود\n" +
            "- هر Instance می‌تواند React Elements بسازد\n" +
            "- React Element توضیح‌دهنده آن چیزی است که باید رندر شود\n" +
            "- یک کامپوننت می‌تواند چندین Instance داشته باشد"
    },
    {
        "id": 19,
        "question": "When is a render triggered in React applications?",
        "options": [
            "When state updates, props change, or parent re-renders",
            "Only when user interacts with UI elements",
            "Only during initial component mount phase",
            "When DOM elements are clicked by users"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• تغییر state در کامپوننت باعث رندر می‌شود\n" +
            "- رندر مجدد والد باعث رندر فرزندان می‌شود\n" +
            "- تغییر context value تمام consumers را رندر می‌کند\n" +
            "- رندر به معنی DOM update نیست، بلکه فراخوانی component function است"
    },
    {
        "id": 20,
        "question": "What happens during the Render Phase in React?",
        "options": [
            "React updates the actual browser DOM immediately",
            "React paints pixels to the screen for users",
            "React calls component functions and builds virtual DOM",
            "React commits changes to DOM and executes effects"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• در Render Phase، React component functions را فراخوانی می‌کند\n" +
            "- Virtual DOM tree جدید ساخته می‌شود\n" +
            "- هیچ side effect یا DOM update در این مرحله انجام نمی‌شود\n" +
            "- این مرحله می‌تواند وقفه داشته باشد (interruptible)"
    },
    {
        "id": 21,
        "question": "What happens during the Commit Phase in React?",
        "options": [
            "React calls component functions to create elements",
            "React compares new virtual DOM with previous one",
            "React pauses to prioritize more urgent updates",
            "React writes changes to the actual browser DOM",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• در Commit Phase، React تغییرات را به DOM واقعی اعمال می‌کند\n" +
            "- این مرحله synchronous و غیرقابل وقفه است\n" +
            "- بعد از commit، layout effects و سپس useEffect اجرا می‌شوند\n" +
            "- Browser Paint بعد از این مرحله اتفاق می‌افتد"
    },
    {
        "id": 22,
        "question": "What is Browser Paint in react's rendering process?",
        "options": [
            "The phase where React builds virtual DOM tree",
            "The phase where React commits changes to DOM",
            "The browser rendering pixels to screen after DOM updates",
            "The phase where React reconciles component differences"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• Browser Paint توسط مرورگر انجام می‌شود، نه React\n" +
            "- بعد از Commit Phase اتفاق می‌افتد\n" +
            "- مرورگر DOM را به pixels روی صفحه تبدیل می‌کند\n" +
            "- React هیچ کنترلی روی این مرحله ندارد"
    },
    {
        "id": 23,
        "question": "Does rendering always mean updating the DOM in React?",
        "options": [
            "Yes, every render always updates DOM elements",
            "No, rendering only is calling functions",
            "Yes, render and DOM update happen simultaneously",
            "No, rendering only happens during initial mount"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• Render به معنی فراخوانی component function است\n" +
            "- اگر Virtual DOM تغییری نداشته باشد، DOM update نمی‌شود\n" +
            "- Reconciliation تعیین می‌کند کدام بخش‌ها نیاز به update دارند\n" +
            "- می‌توانید با React.memo از render‌های غیرضروری جلوگیری کنید"
    },
    {
        "id": 24,
        "question": "Why doesn't React completely discard the old view on re-render?",
        "options": [
            "Complete discard would prevent state from persisting",
            "Discarding old view would cause memory leaks",
            "React cannot access the previous view tree",
            "React compares and reuses unchanged parts efficiently",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• React از Reconciliation برای مقایسه استفاده می‌کند\n" +
            "- بخش‌های تغییر نکرده دوباره استفاده می‌شوند\n" +
            "- این کار performance را بهبود می‌بخشد\n" +
            "- keys به React کمک می‌کنند المان‌ها را track کند"
    },
    {
        "id": 25,
        "question": "What is the Fiber Tree in react's architecture?",
        "options": [
            "A tree of actual DOM elements in browser",
            "A tree of component class definitions component instances",
            "react's internal data structure tracking component instances",
            "A visualization tool for React DevTools only"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• Fiber Tree ساختار داده داخلی React برای track کردن کامپوننت‌هاست\n" +
            "- هر Fiber نشان‌دهنده یک component instance یا DOM node است\n" +
            "- Fiber امکان قطع و ادامه کار rendering را فراهم می‌کند\n" +
            "- state، props و DOM reference در هر Fiber ذخیره می‌شود"
    },
    {
        "id": 26,
        "question": "What is Reconciliation in react's rendering process?",
        "options": [
            "The process of comparing old and new virtual DOM",
            "The process of painting pixels to screen",
            "The process of triggering component state updates",
            "The process of mounting components initially"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• Reconciliation فرآیند مقایسه Virtual DOM قدیم و جدید است\n" +
            "- React تعیین می‌کند چه تغییراتی لازم است\n" +
            "- از diffing algorithm برای optimization استفاده می‌شود\n" +
            "- نتیجه آن لیستی از تغییرات برای Commit Phase است"
    },
    {
        "id": 27,
        "question": "How does React split rendering work into chunks?",
        "options": [
            "React cannot split rendering into smaller pieces",
            "React divides rendering into 'units of work' that can pause",
            "React renders all components simultaneously in parallel",
            "React splits rendering based on component file size"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• React کار را به units of work تقسیم می‌کند\n" +
            "- هر unit معمولا یک component یا fiber node است\n" +
            "- React می‌تواند بین units کار را متوقف و ادامه دهد\n" +
            "- این امکان prioritization را فراهم می‌کند"
    },
    {
        "id": 28,
        "question": "Can React prioritize certain rendering tasks over others?",
        "options": [
            "No, all renders have equal priority always",
            "Only if developer explicitly sets priority values",
            "Yes, React can prioritize urgent updates over others",
            "Only during initial application mount phase"
        ],
        "correctOption": 2,
        "points": 2,
        "explanation": "• React می‌تواند updates را بر اساس urgency اولویت‌بندی کند\n" +
            "- user interactions معمولا priority بالاتری دارند\n" +
            "- می‌توانید با useTransition updates را non-urgent علامت بزنید\n" +
            "- این ویژگی Concurrent React است"
    },
    {
        "id": 29,
        "question": "Can React pause, reuse or throw away work during rendering?",
        "options": [
            "No, once started, rendering must complete entirely",
            "Yes, react's fiber architecture enables work interruption",
            "Only work can be paused but never reused",
            "Only work can be reused but never paused"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• Fiber architecture امکان pause، reuse و throw away work را می‌دهد\n" +
            "- اگر update با priority بالاتر بیاید، کار فعلی متوقف می‌شود\n" +
            "- React می‌تواند بخش‌های unchanged را reuse کند\n" +
            "- اگر نتیجه دیگر valid نباشد، کار discard می‌شود"
    },
    {
        "id": 30,
        "question": "Why does React write to DOM during Commit Phase?",
        "options": [
            "To test if changes work before displaying them",
            "To apply the calculated changes to browser DOM",
            "To create backup of previous DOM state",
            "To validate virtual DOM against actual DOM"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Commit Phase مرحله اعمال تغییرات به DOM واقعی است\n" +
            "- تمام تغییرات محاسبه شده در Render Phase اعمال می‌شوند\n" +
            "- این مرحله باید سریع و synchronous باشد\n" +
            "- بعد از آن Browser Paint اتفاق می‌افتد"
    },
    {
        "id": 31,
        "question": "What is Render Logic in React components?",
        "options": [
            "Code that runs when user clicks buttons",
            "Code in component body that calculates JSX output",
            "Code that directly manipulates DOM elements",
            "Code that fetches data from external APIs"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Render Logic کدی است که JSX را محاسبه می‌کند\n" +
            "- باید pure باشد و side effect نداشته باشد\n" +
            "- در بدنه component function نوشته می‌شود\n" +
            "- فقط بر اساس props و state تصمیم می‌گیرد"
    },
    {
        "id": 32,
        "question": "What are Event Handler Functions in React?",
        "options": [
            "Functions that run during component render phase",
            "Functions that calculate component state automatically",
            "Functions that respond to user interactions like clicks",
            "Functions that build virtual DOM tree structure"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• Event Handlers به تعاملات کاربر پاسخ می‌دهند\n" +
            "- می‌توانند side effects داشته باشند\n" +
            "- معمولا با onClick، onChange و ... به elements متصل می‌شوند\n" +
            "- در آن‌ها می‌توانید state update و API call داشته باشید"
    },
    {
        "id": 33,
        "question": "Should Render Logic contain side effects in React?",
        "options": [
            "Yes, side effects make components more powerful",
            "Yes, but only for data fetching operations",
            "No, render logic must be pure without side effects",
            "No, unless wrapped in try-catch blocks"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• Render Logic باید pure باشد و side effect نداشته باشد\n" +
            "- React ممکن است component را چندین بار render کند\n" +
            "- side effects باید در useEffect یا event handlers باشند\n" +
            "- pure functions نتایج قابل پیش‌بینی دارند"
    },
    {
        "id": 34,
        "question": "Are side effects inherently bad in React applications?",
        "options": [
            "No, side effects are necessary but must be handled properly",
            "Yes, side effects always cause bugs and errors",
            "Yes, React prevents all side effects automatically",
            "No, side effects can be placed anywhere freely"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• side effects ضروری هستند (مثل API calls، subscriptions)\n" +
            "- باید در جای مناسب (useEffect، event handlers) قرار گیرند\n" +
            "- نباید در render logic باشند\n" +
            "- React ابزارهایی برای مدیریت ایمن side effects دارد"
    },
    {
        "id": 35,
        "question": "Which hook is specifically designed to register side effects in React?",
        "options": [
            "useState for managing side effect state",
            "useReducer for complex side effect logic",
            "useEffect for registering side effects safely",
            "useMemo for memoizing side effect results"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• useEffect مخصوص side effects طراحی شده است\n" +
            "- بعد از render اجرا می‌شود\n" +
            "- می‌تواند cleanup function برگرداند\n" +
            "- dependency array رفتار اجرا را کنترل می‌کند"
    },
    {
        "id": 36,
        "question": "How are state updates batched in React?",
        "options": [
            "React groups multiple setState calls into single re-render",
            "Each setState always causes immediate separate re-render",
            "State updates are never batched in React",
            "Only setState calls in loops are batched"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• React چندین setState را در یک re-render گروه‌بندی می‌کند\n" +
            "- در React 18 این batching برای همه جا فعال است\n" +
            "- performance را بهبود می‌بخشد\n" +
            "- می‌توانید با flushSync batching را غیرفعال کنید"
    },
    {
        "id": 37,
        "question": "Why does React batch state updates together?",
        "options": [
            "To make code easier to read and maintain",
            "To improve performance by reducing re-renders",
            "To prevent state from changing too quickly",
            "To ensure state updates happen in order"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• کاهش تعداد re-renders باعث بهبود performance می‌شود\n" +
            "- چندین update به یک update ترکیب می‌شوند\n" +
            "- UI فقط یک بار به‌روز می‌شود\n" +
            "- از renders غیرضروری جلوگیری می‌کند"
    },
    {
        "id": 39,
        "question": "What is the difference between Render Phase and Commit Phase?",
        "options": [
            "Render calls functions, Commit updates DOM",
            "Render updates DOM, Commit calls functions",
            "Both phases update DOM simultaneously",
            "Render is synchronous, Commit is asynchronous"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• Render Phase: فراخوانی component functions و ساخت Virtual DOM\n" +
            "- Commit Phase: اعمال تغییرات به DOM واقعی\n" +
            "- Render می‌تواند متوقف شود، اما Commit باید synchronous باشد\n" +
            "- هر دو توسط React مدیریت می‌شوند"
    },
    {
        "id": 41,
        "question": "Can the Commit Phase be interrupted in React?",
        "options": [
            "Yes, commits can be paused mid-execution",
            "Yes, but only for low-priority updates",
            "No, commits must complete synchronously",
            "No, unless user navigates away from page"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• Commit Phase باید به صورت synchronous کامل شود\n" +
            "- وقفه در این مرحله باعث inconsistency در UI می‌شود\n" +
            "- تمام DOM updates در یک باره اعمال می‌شوند\n" +
            "- بعد از آن Browser Paint اتفاق می‌افتد"
    },
    {
        "id": 42,
        "question": "What creates a new Component Instance in React?",
        "options": [
            "Using a component in JSX creates new instance",
            "Importing component file creates instance automatically",
            "Defining component function creates instance",
            "Mounting app to DOM creates all instances"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• استفاده از کامپوننت در JSX باعث ایجاد instance می‌شود\n" +
            "- هر بار که <Component /> می‌نویسید، instance جدید ساخته می‌شود\n" +
            "- import کردن فقط تعریف component را می‌آورد\n" +
            "- instance زمانی ایجاد می‌شود که کامپوننت render شود"
    },
    {
        "id": 43,
        "question": "How many Component Instances exist for multiple uses of same component?",
        "options": [
            "Only one instance shared across all uses",
            "One instance per component definition file",
            "Separate instance for each use in tree",
            "Two instances: one for logic, one for UI"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• هر استفاده از کامپوننت یک instance مجزا ایجاد می‌کند\n" +
            "- هر instance state و props مستقل دارد\n" +
            "- تغییر یک instance روی دیگری تاثیر ندارد\n" +
            "- این امکان reusability را فراهم می‌کند"
    },
    {
        "id": 44,
        "question": "Do Component Instances have their own state and props?",
        "options": [
            "Yes, each instance has independent state and props",
            "No, all instances share same state and props",
            "Only state is independent, props are shared",
            "Only props are independent, state is shared"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• هر instance state و props مستقل دارد\n" +
            "- تغییر state یک instance روی دیگری تاثیر ندارد\n" +
            "- props از والد به هر instance جداگانه پاس داده می‌شود\n" +
            "- این یکی از اصول component-based architecture است"
    },
    {
        "id": 45,
        "question": "What happens to Component Instance when it unmounts?",
        "options": [
            "Instance moves to different position in tree",
            "Instance is destroyed and state is lost",
            "Instance remains in memory for potential reuse",
            "Instance converts to DOM element permanently"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• unmount شدن باعث destroy شدن instance می‌شود\n" +
            "- تمام state از بین می‌رود\n" +
            "- cleanup functions در useEffect اجرا می‌شوند\n" +
            "- DOM elements مرتبط هم حذف می‌شوند"
    },
    {
        "id": 46,
        "question": "How does React Element differ from Component Instance?",
        "options": [
            "Element is object describing what to render",
            "Element has state and lifecycle methods",
            "Element is actual DOM node in browser",
            "Element and instance are exactly identical"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• React Element یک object توضیح‌دهنده است\n" +
            "- Component Instance نمونه واقعی component با state و lifecycle است\n" +
            "- Element ساده‌تر است و فقط اطلاعات ساختاری دارد\n" +
            "- Instance از Element ساخته می‌شود"
    },
    {
        "id": 47,
        "question": "Are React Elements mutable or immutable?",
        "options": [
            "Mutable, can be changed after creation",
            "Immutable, cannot be changed once created",
            "Sometimes mutable depending on component type",
            "Mutable in development, immutable in production"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• React Elements immutable هستند\n" +
            "- بعد از ساخته شدن نمی‌توانید آن‌ها را تغییر دهید\n" +
            "- برای تغییر باید element جدید بسازید\n" +
            "- این رفتار به predictability کمک می‌کند"
    },
    {
        "id": 48,
        "question": "What creates React Elements in applications?",
        "options": [
            "JSX syntax or React.createElement function calls",
            "Importing component files automatically creates elements",
            "Browser converts HTML to React elements",
            "React DevTools generate elements during debugging"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• JSX به React.createElement تبدیل می‌شود\n" +
            "- می‌توانید مستقیما React.createElement صدا بزنید\n" +
            "- JSX syntax sugar برای ساخت elements است\n" +
            "- Babel یا TypeScript JSX را transpile می‌کنند"
    },
    {
        "id": 49,
        "question": "How do React Elements become DOM Elements?",
        "options": [
            "React elements directly convert to DOM automatically",
            "During Commit Phase, React creates actual DOM nodes",
            "Browser converts React elements to DOM automatically",
            "React elements are DOM elements with different names"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• در Commit Phase، React به DOM می‌نویسد\n" +
            "- React Elements به DOM API calls تبدیل می‌شوند\n" +
            "- مثلا document.createElement برای ساخت node استفاده می‌شود\n" +
            "- این فرآیند توسط React DOM انجام می‌شود"
    },
    {
        "id": 50,
        "question": "What information does a React Element contain?",
        "options": [
            "Type, props, and children information only",
            "Complete state and lifecycle method implementations",
            "Direct references to actual DOM nodes",
            "Event handlers and browser event objects"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• React Element شامل type (نوع کامپوننت یا tag)، props و children است\n" +
            "- هیچ state یا lifecycle method ندارد\n" +
            "- فقط یک توضیح ساده از UI است\n" +
            "- مثل یک نقشه برای ساخت UI عمل می‌کند"
    },
    {
        "id": 51,
        "question": "Can React Elements be reused across renders?",
        "options": [
            "No, new elements created on every render",
            "Yes, React caches and reuses all elements",
            "Only functional component elements can reuse",
            "Only class component elements can reuse"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• در هر render، elements جدید ساخته می‌شوند\n" +
            "- immutability این رفتار را الزامی می‌کند\n" +
            "- اما React از Reconciliation برای optimize کردن استفاده می‌کند\n" +
            "- component instances ممکن است reuse شوند"
    },
    {
        "id": 52,
        "question": "What triggers a render in React besides state changes?",
        "options": [
            "Parent re-rendering or context value changes",
            "Only explicit render() method calls",
            "Only when developer refreshes browser",
            "Only when component mounts initially"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• تغییر state فقط یکی از دلایل render است\n" +
            "- re-render شدن parent باعث render فرزندان می‌شود\n" +
            "- تغییر Context value تمام consumers را render می‌کند\n" +
            "- تغییر props نیز باعث render می‌شود (در واقع به خاطر parent re-render)"
    },
    {
        "id": 53,
        "question": "Does changing props directly trigger a render?",
        "options": [
            "Yes, prop changes always trigger re-renders",
            "No, prop changes occur because parent re-rendered",
            "Only primitive prop changes trigger renders",
            "Only object prop changes trigger renders"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• props را نمی‌توان مستقیماً تغییر داد (read-only هستند)\n" +
            "- تغییر props در واقع به معنای re-render شدن parent است\n" +
            "- parent جدید props را به child می‌دهد\n" +
            "- child به خاطر re-render parent دوباره render می‌شود\n" +
            "- props خود trigger نیستند، بلکه نتیجه parent render هستند"
    },
    {
        "id": 54,
        "question": "What happens between Render Phase and Commit Phase?",
        "options": [
            "React paints pixels to the screen",
            "React compares new virtual DOM with previous",
            "React executes all useEffect cleanup functions",
            "React updates component state automatically"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• بین Render و Commit، Reconciliation انجام می‌شود\n" +
            "- React Virtual DOM جدید را با قدیمی مقایسه می‌کند\n" +
            "- تفاوت‌ها (differences) شناسایی می‌شوند\n" +
            "- لیستی از تغییرات لازم برای DOM ساخته می‌شود\n" +
            "- این فرآیند به Diffing Algorithm معروف است"
    },
    {
        "id": 55,
        "question": "What happens after the Commit Phase completes?",
        "options": [
            "Browser Paint occurs, rendering pixels to screen",
            "React immediately starts next render cycle",
            "Component unmounts and state is destroyed",
            "Virtual DOM is discarded from memory"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• بعد از Commit Phase، Browser Paint شروع می‌شود\n" +
            "- مرورگر DOM را به pixels روی صفحه تبدیل می‌کند\n" +
            "- این مرحله توسط browser engine انجام می‌شود نه React\n" +
            "- layout effects (useLayoutEffect) قبل از paint اجرا می‌شوند\n" +
            "- useEffect بعد از paint به صورت async اجرا می‌شود"
    },
    {
        "id": 56,
        "question": "What is a Fiber in react's Fiber Tree?",
        "options": [
            "A JavaScript object tracking component instance",
            "A visual representation for React DevTools",
            "A thread running component code in parallel",
            "A DOM node reference stored by React"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• Fiber یک JavaScript object است که component instance را track می‌کند\n" +
            "- هر component یک Fiber node در Fiber Tree دارد\n" +
            "- اطلاعات state، props، effects و DOM reference را نگه می‌دارد\n" +
            "- امکان pause، resume و prioritize کردن کار را می‌دهد\n" +
            "- پایه معماری Concurrent React است"
    },
    {
        "id": 57,
        "question": "What information does a Fiber node contain?",
        "options": [
            "Component type, props, state, and DOM references",
            "Only the component function or class definition",
            "Only the rendered JSX output structure",
            "Only references to child components"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• Fiber node شامل type (نوع کامپوننت یا element) است\n" +
            "- props و state فعلی کامپوننت را نگه می‌دارد\n" +
            "- reference به DOM node واقعی دارد\n" +
            "- لیست effects (useEffect، useLayoutEffect) را دارد\n" +
            "- اطلاعات child، sibling و parent fibers را نیز دارد"
    },
    {
        "id": 58,
        "question": "How does Fiber Tree differ from Virtual DOM?",
        "options": [
            "Fiber is react's internal structure, Virtual DOM is concept",
            "Fiber and Virtual DOM are identical terms",
            "Fiber is for class components, Virtual DOM for functions",
            "Fiber is deprecated, Virtual DOM is modern approach"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• Fiber Tree پیاده‌سازی واقعی Virtual DOM در React است\n" +
            "- Virtual DOM یک مفهوم کلی است\n" +
            "- Fiber امکانات بیشتری مثل prioritization دارد\n" +
            "- Fiber از React 16 به بعد استفاده می‌شود"
    },
    {
        "id": 59,
        "question": "Does React create new Fiber Tree on every render?",
        "options": [
            "Yes, completely new tree on every render",
            "No, React updates existing Fiber Tree in place",
            "Only on initial mount is Fiber Tree created",
            "Only when state changes is new tree created"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• React Fiber Tree موجود را update می‌کند\n" +
            "- work-in-progress tree ساخته می‌شود و با current tree swap می‌شود\n" +
            "- این کار memory efficient است\n" +
            "- Fiber nodes می‌توانند reuse شوند"
    },
    {
        "id": 60,
        "question": "What is the purpose of Reconciliation in React?",
        "options": [
            "To determine minimal DOM updates needed efficiently",
            "To resolve conflicts in concurrent state updates",
            "To reconcile differences between props and state",
            "To fix bugs in component render logic"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• Reconciliation کمترین تغییرات DOM را تعیین می‌کند\n" +
            "- Virtual DOM قدیم و جدید را مقایسه می‌کند\n" +
            "- از diffing algorithm استفاده می‌کند\n" +
            "- performance را با کاهش DOM operations بهبود می‌دهد"
    },
    {
        "id": 61,
        "question": "What algorithm does React use for Reconciliation?",
        "options": [
            "Depth-first search through entire component tree",
            "Breadth-first search comparing sibling components",
            "Diffing algorithm comparing old and new trees",
            "Sorting algorithm prioritizing component updates"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• React از diffing algorithm استفاده می‌کند\n" +
            "- مقایسه level by level انجام می‌شود\n" +
            "- از heuristics برای O(n) complexity استفاده می‌کند\n" +
            "- keys به بهبود این الگوریتم کمک می‌کنند"
    },
    {
        "id": 62,
        "question": "How does React optimize Reconciliation performance?",
        "options": [
            "React compares all components on every render",
            "React uses keys and component types for optimization",
            "React skips reconciliation in production mode",
            "React only reconciles components with state"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• keys به React کمک می‌کنند elements را track کنند\n" +
            "- component type تغییر کند، subtree کامل replace می‌شود\n" +
            "- React فرض می‌کند elements با type مختلف، UI متفاوت دارند\n" +
            "- shouldComponentUpdate و React.memo برای optimization اضافی"
    },
    {
        "id": 63,
        "question": "What happens if Reconciliation finds no differences?",
        "options": [
            "React skips Commit Phase entirely for component",
            "React still commits changes to ensure consistency",
            "React discards both old and new trees",
            "React forces re-render to verify correctness"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• اگر تفاوتی نباشد، Commit Phase skip می‌شود\n" +
            "- هیچ DOM update انجام نمی‌شود\n" +
            "- این optimization مهمی است\n" +
            "- React.memo می‌تواند از render هم جلوگیری کند"
    },
    {
        "id": 64,
        "question": "Can React reuse DOM nodes during Reconciliation?",
        "options": [
            "No, React always creates new DOM nodes",
            "Yes, React updates existing DOM nodes when possible",
            "Only for text nodes, not element nodes",
            "Only during initial mount phase rendering"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• React تا جای ممکن DOM nodes موجود را reuse می‌کند\n" +
            "- فقط attributes و content update می‌شود\n" +
            "- create و destroy کردن node هزینه‌بر است\n" +
            "- این یکی از دلایل سرعت React است"
    },
    {
        "id": 65,
        "question": "Why does React split rendering into units of work?",
        "options": [
            "To enable pausing, prioritizing and resuming rendering",
            "To reduce memory usage during rendering phase time",
            "To improve compatibility with older browsers",
            "To split work across multiple CPU cores",
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• unit of work امکان pause و resume را می‌دهد\n" +
            "- React می‌تواند کارهای مهم‌تر را prioritize کند\n" +
            "- از blocking main thread جلوگیری می‌کند\n" +
            "- این ویژگی Concurrent React است"
    },
    {
        "id": 66,
        "question": "What is a unit of work in react's rendering?",
        "options": [
            "Processing one component or fiber node",
            "Rendering entire component tree at once",
            "Executing all event handlers in queue",
            "Updating all DOM nodes simultaneously"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• هر unit معمولا یک component یا fiber node است\n" +
            "- React می‌تواند بعد از هر unit کار را pause کند\n" +
            "- این امکان interruptible rendering را فراهم می‌کند\n" +
            "- scheduler تصمیم می‌گیرد چه زمانی کار ادامه یابد"
    },
    {
        "id": 67,
        "question": "Can React throw away work during rendering?",
        "options": [
            "No, all started work must complete eventually",
            "Yes, if higher priority work arrives",
            "Only if errors occur during rendering",
            "Only during initial mount can work discard"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• اگر update با priority بالاتر بیاید، کار فعلی discard می‌شود\n" +
            "- React کار جدید را با priority بالاتر شروع می‌کند\n" +
            "- این از wasted work جلوگیری می‌کند\n" +
            "- Concurrent React این قابلیت را دارد"
    },
    {
        "id": 68,
        "question": "How does React prioritize rendering work?",
        "options": [
            "All renders have equal priority always",
            "User interactions have higher priority than background",
            "Components higher in tree have higher priority",
            "Smaller components always render first"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• user interactions (clicks, typing) priority بالاتر دارند\n" +
            "- data fetching و animations priority پایین‌تر دارند\n" +
            "- useTransition برای mark کردن low-priority updates\n" +
            "- React خودکار بعضی priorities را تشخیص می‌دهد"
    },
    {
        "id": 69,
        "question": "What determines whether DOM updates are necessary?",
        "options": [
            "React always updates DOM on every render",
            "Reconciliation determines if DOM updates needed",
            "Developer must specify when to update DOM",
            "Browser decides when DOM updates occur"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• Reconciliation تصمیم می‌گیرد\n" +
            "- Virtual DOM قدیم و جدید مقایسه می‌شوند\n" +
            "- اگر تفاوتی نباشد، DOM update نمی‌شود\n" +
            "- این optimization باعث بهبود performance می‌شود"
    },
    {
        "id": 70,
        "question": "Why is Commit Phase synchronous in React?",
        "options": [
            "To prevent visual inconsistencies in UI updates",
            "To improve performance by batching commits",
            "To allow interrupting commits for urgent work",
            "To enable concurrent DOM updates across components"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• باید تمام تغییرات یکجا اعمال شوند\n" +
            "- وقفه باعث inconsistent UI می‌شود\n" +
            "- کاربر نباید UI نیمه‌کاره ببیند\n" +
            "- بعد از commit، Browser Paint یکباره اتفاق می‌افتد"
    },
    {
        "id": 71,
        "question": "What is Render Logic NOT allowed to do?",
        "options": [
            "Calculate values and return JSX structure",
            "Read props and state for rendering",
            "Mutate objects or update state directly",
            "Call pure functions for computations"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• نباید objects را mutate کند\n" +
            "- نباید مستقیم state را update کند\n" +
            "- نباید side effects (API calls) داشته باشد\n" +
            "- باید pure function باشد"
    },
    {
        "id": 72,
        "question": "Why must Render Logic be pure in React?",
        "options": [
            "Pure functions are faster than impure functions",
            "React may call render logic multiple times",
            "Impure logic prevents components from mounting",
            "Pure logic reduces component file size"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• React ممکن است چندین بار component را render کند\n" +
            "- pure functions نتایج قابل پیش‌بینی دارند\n" +
            "- امکان optimization و concurrent rendering را فراهم می‌کند\n" +
            "- debugging و testing راحت‌تر می‌شود"
    },
    {
        "id": 73,
        "question": "Where should side effects be placed in React components?",
        "options": [
            "In render logic for immediate execution",
            "In event handlers or useEffect hook",
            "Directly in component function body",
            "In component constructor or initialization"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• در useEffect برای side effects بعد از render\n" +
            "- در event handlers برای user interactions\n" +
            "- نه در render logic که هر render اجرا می‌شود"
    },
    {
        "id": 74,
        "question": "What makes Event Handler Functions different from Render Logic?",
        "options": [
            "Handlers can contain side effects and mutations",
            "Handlers are pure and cannot have effects",
            "Handlers run during render phase only",
            "Handlers cannot access component state"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• handlers می‌توانند side effects داشته باشند\n" +
            "- handlers فقط در پاسخ به events اجرا می‌شوند\n" +
            "- render logic در هر render اجرا می‌شود و باید pure باشد\n" +
            "- handlers می‌توانند async باشند و API call کنند"
    },
    {
        "id": 75,
        "question": "When do Event Handler Functions execute?",
        "options": [
            "During component render phase automatically",
            "In response to user interactions with UI",
            "Before component mounts to DOM tree",
            "After component unmounts from tree"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• فقط زمانی که event مربوطه رخ می‌دهد\n" +
            "- مثلا onClick وقتی کاربر کلیک می‌کند\n" +
            "- onChange وقتی input تغییر می‌کند\n" +
            "- نه در هنگام render شدن component"
    },
    {
        "id": 76,
        "question": "Why does React need a special hook for side effects?",
        "options": [
            "Side effects in render logic cause unpredictable behavior",
            "Hooks make side effects run faster than normal",
            "Side effects cannot be written in JavaScript",
            "Hooks prevent all bugs in side effects"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• side effects در render logic مشکل ایجاد می‌کنند\n" +
            "- useEffect بعد از render و commit اجرا می‌شود\n" +
            "- امکان cleanup برای جلوگیری از memory leaks\n" +
            "- dependency array رفتار اجرا را کنترل می‌کند"
    },
    {
        "id": 77,
        "question": "What is useEffect's primary purpose in React?",
        "options": [
            "To memoize expensive calculation results efficiently",
            "To register side effects that run after render",
            "To update component state on every render",
            "To prevent component from re-rendering unnecessarily"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• ثبت side effects که بعد از render اجرا شوند\n" +
            "- مثل data fetching، subscriptions، DOM manipulation\n" +
            "- جایگزین lifecycle methods در functional components\n" +
            "- با dependency array می‌توان رفتار را کنترل کرد"
    },
    {
        "id": 78,
        "question": "How does state update batching improve performance?",
        "options": [
            "By reducing number of re-renders significantly",
            "By making state updates happen faster",
            "By preventing state from changing at all",
            "By storing state in more efficient format"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• چندین setState به یک re-render تبدیل می‌شود\n" +
            "- از renders غیرضروری جلوگیری می‌کند\n" +
            "- UI فقط یک بار به‌روز می‌شود\n" +
            "- CPU و browser resources کمتر مصرف می‌شود"
    },
    {
        "id": 79,
        "question": "Are state updates always batched in React?",
        "options": [
            "Yes, always in all scenarios automatically",
            "No, only in event handlers are batched",
            "Yes, in React 18+ for all updates",
            "No, batching is deprecated in modern React"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• در React 18+ همه updates batch می‌شوند\n" +
            "- حتی در promises، setTimeout و async functions\n" +
            "- در React 17 فقط در event handlers batch بود\n" +
            "- می‌توان با flushSync batching را غیرفعال کرد"
    },
    {
        "id": 80,
        "question": "What happens if you call setState multiple times synchronously?",
        "options": [
            "Each call causes immediate separate re-render",
            "Only the last setState call takes effect",
            "React batches them into single re-render",
            "React throws error for multiple calls"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• React آن‌ها را batch می‌کند\n" +
            "- فقط یک re-render اتفاق می‌افتد\n" +
            "- state نهایی بعد از اعمال همه updates محاسبه می‌شود\n" +
            "- می‌توان از functional updates برای اطمینان استفاده کرد"
    },

    {
        "id": 82,
        "question": "What is the order of phases in react's rendering?",
        "options": [
            "Commit Phase, Render Phase, Browser Paint",
            "Browser Paint, Render Phase, Commit Phase",
            "Render Phase, Commit Phase, Browser Paint",
            "Commit Phase, Browser Paint, Render Phase"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• Render Phase: محاسبه Virtual DOM جدید\n" +
            "- Commit Phase: اعمال تغییرات به DOM\n" +
            "- Browser Paint: رسم pixels توسط مرورگر\n" +
            "- این ترتیب همیشه رعایت می‌شود"
    },
    {
        "id": 83,
        "question": "Which phase is responsible for calling component functions?",
        "options": [
            "Commit Phase calls all component functions",
            "Browser Paint phase renders component functions",
            "Render Phase calls component functions to build tree",
            "None, components are called before phases start"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• Render Phase component functions را صدا می‌زند\n" +
            "- Virtual DOM tree ساخته می‌شود\n" +
            "- هیچ DOM update در این مرحله نیست\n" +
            "- می‌تواند چندین بار برای یک component اجرا شود"
    },
    {
        "id": 84,
        "question": "Which phase is responsible for applying DOM changes?",
        "options": [
            "Render Phase applies all DOM changes",
            "Commit Phase applies calculated DOM changes",
            "Browser Paint applies DOM changes automatically",
            "None, DOM changes happen outside phases"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Commit Phase تغییرات را به DOM اعمال می‌کند\n" +
            "- React DOM API calls را اجرا می‌کند\n" +
            "- این مرحله synchronous و غیرقابل وقفه است\n" +
            "- بعد از آن useEffect و useLayoutEffect اجرا می‌شوند"
    },
    {
        "id": 85,
        "question": "Can components render without committing changes to DOM?",
        "options": [
            "Yes, if Reconciliation finds no differences",
            "No, render always causes DOM updates",
            "Only during initial mount can this happen",
            "Only in production mode is this possible"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• بله، اگر Reconciliation تفاوتی پیدا نکند\n" +
            "- Commit Phase skip می‌شود\n" +
            "- component render شد اما DOM update نشد\n" +
            "- این optimization مهمی است"
    },
    {
        "id": 86,
        "question": "What information flows from Component Instance to React Element?",
        "options": [
            "Element provides props and children to instance",
            "Instance returns element describing what to render",
            "Both contain identical information always",
            "No information flows between them ever"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• Instance با render شدن React Element برمی‌گرداند\n" +
            "- Element توضیح می‌دهد UI چگونه باید باشد\n" +
            "- شامل type، props و children است\n" +
            "- این Element بعدا به DOM تبدیل می‌شود"
    },
    {
        "id": 87,
        "question": "What information flows from React Element to DOM Element?",
        "options": [
            "Element type, props, and children structure information",
            "DOM element sends events to React element",
            "State and lifecycle methods from React element",
            "No information flows between them ever"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• type مشخص می‌کند چه نوع DOM node ساخته شود\n" +
            "- props به attributes و properties تبدیل می‌شوند\n" +
            "- children به child nodes تبدیل می‌شوند\n" +
            "- React DOM این تبدیل را انجام می‌دهد"
    },
    {
        "id": 88,
        "question": "What is a common problem with global CSS in large applications?",
        "options": [
            "They cannot be used with server-side rendering",
            "They are not supported by modern browsers",
            "They may cause unintended style conflicts",
            "They require special JSX syntax"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• class names می‌توانند با هم conflict داشته باشند\n" +
            "- تغییر یک style می‌تواند جاهای دیگر را خراب کند\n" +
            "- hard to maintain و debug است\n" +
            "- CSS Modules یا CSS-in-JS این مشکل را حل می‌کنند"
    },
    {
        "id": 89,
        "question": "Which React Router hook is used to read URL query parameters?",
        "options": [
            "useState",
            "useEffect",
            "useSearchParams",
            "useMemo"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• useSearchParams برای خواندن و تنظیم query strings\n" +
            "- مثل useState کار می‌کند اما با URL sync است\n" +
            "- تغییرات URL را track می‌کند\n" +
            "- برای filters، pagination و search مفید است"
    },
    {
        "id": 90,
        "question": "Which approach maintains UI state after a browser refresh?",
        "options": [
            "Storing state in localStorage or URL",
            "Using useState exclusively for state",
            "Using React Context only for sharing",
            "Keeping state in local variables"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• localStorage یا sessionStorage برای persist کردن\n" +
            "- URL searchParams برای state قابل share\n" +
            "- cookies برای server-side accessible state\n" +
            "- useState و Context بعد از refresh از بین می‌روند"
    },
    {
        "id": 91,
        "question": "What does React.memo() do?",
        "options": [
            "Caches expensive calculations for performance",
            "Prevents re-render when props haven't changed",
            "Stores component state in memory",
            "Creates new component instances automatically"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• از re-render جلوگیری می‌کند اگر props تغییر نکرده باشند\n" +
            "- shallow comparison روی props انجام می‌دهد\n" +
            "- برای components پرهزینه مفید است\n" +
            "- می‌توان custom comparison function داد"
    },
    {
        "id": 92,
        "question":  "Which technique helps avoid prop drilling?",
        "options": [
            "Using more useState hooks throughout",
            "Creating additional wrapper components",
            "Using React Context API effectively",
            "Passing more props through components"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• Context API برای sharing state بدون prop drilling\n" +
            "- composition pattern با children\n" +
            "- state management libraries مثل Redux\n" +
            "- custom hooks برای logic reuse"
    },
    {
        "id": 93,
        "question": "What is the key difference between useCallback and useMemo?",
        "options": [
            "useCallback memoizes functions, useMemo memoizes values",
            "useCallback stores values, useMemo stores functions",
            "useMemo is for effects, useCallback is for state",
            "They perform identical functions"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• useCallback: memoize کردن functions\n" +
            "- useMemo: memoize کردن computed values\n" +
            "- هر دو از re-creation جلوگیری می‌کنند\n" +
            "- dependency array رفتار را کنترل می‌کند"
    },
    {
        "id": 94,
        "question": "Which practice commonly causes unnecessary re-renders in React?",
        "options": [
            "Using keys properly in list rendering",
            "Creating new objects or functions during render",
            "Applying React.memo correctly to components",
            "Splitting components into smaller pieces"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• ساخت objects یا functions جدید در render\n" +
            "- reference جدید باعث re-render می‌شود\n" +
            "- باید از useMemo یا useCallback استفاده کرد\n" +
            "- یا objects را بیرون از component تعریف کرد"
    },
    {
        "id": 95,
        "question": "What is the purpose of the 'key' prop in React lists?",
        "options": [
            "To apply CSS styling to list items",
            "To help React identify and track item changes",
            "To improve component visual design",
            "To pass data between list components"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• به React کمک می‌کند items را track کند\n" +
            "- در reconciliation برای identify کردن تغییرات\n" +
            "- باید stable و unique باشد\n" +
            "- از index به عنوان key اجتناب کنید"
    },
    {
        "id": 96,
        "question": "Which hook is most appropriate for optimizing expensive calculations?",
        "options": [
            "useState",
            "useEffect",
            "useMemo",
            "useReducer"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• useMemo برای memoize کردن نتیجه محاسبات\n" +
            "- فقط وقتی dependencies تغییر کنند، دوباره محاسبه می‌شود\n" +
            "- برای محاسبات پرهزینه مفید است\n" +
            "- نباید برای همه چیز استفاده شود"
    },
    {
        "id": 97,
        "question": "How can you prevent a component from re-rendering when its parent re-renders?",
        "options": [
            "Wrap the component with React.memo",
            "Use useEffect with an empty dependency array",
            "Move state from props to local state",
            "Add additional props to the component"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• با React.memo component را wrap کنید\n" +
            "- shallow comparison روی props انجام می‌دهد\n" +
            "- اگر props تغییر نکرده باشد، re-render نمی‌شود\n" +
            "- برای optimization استفاده می‌شود"
    },
    {
        "id": 98,
        "question": "What is the main benefit of React.lazy with Suspense?",
        "options": [
            "It accelerates rendering performance significantly",
            "It enables code splitting and smaller bundles",
            "It improves SEO ranking automatically",
            "It prevents memory issues in applications"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• code splitting و lazy loading components\n" +
            "- bundle size کوچک‌تر برای initial load\n" +
            "- components فقط وقت نیاز load می‌شوند\n" +
            "- Suspense fallback در زمان loading نشان می‌دهد"
    },
    {
        "id": 99,
        "question": "When does React.memo fail to prevent re-renders?",
        options: [
            "When props remain unchanged between renders",
            "When new object or references are created",
            "When the component has no props",
            "When the component uses internal state"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• وقتی props جدید objects یا functions هستند\n" +
            "- reference تغییر می‌کند حتی اگر محتوا یکسان باشد\n" +
            "- باید با useMemo یا useCallback ترکیب شود\n" +
            "- shallow comparison محدودیت دارد"
    },
    {
        "id": 100,
        "question": "In React Profiler, what does the 'Commit' phase measure?",
        options: [
            "Time spent applying updates to DOM",
            "Time spent calculating what changed",
            "Time spent running useEffect hooks",
            "Total render plus lifecycle time"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• زمان صرف شده برای اعمال updates به DOM\n" +
            "- شامل lifecycle methods و effects است\n" +
            "- بعد از Render phase اتفاق می‌افتد\n" +
            "- برای identify کردن performance bottlenecks مفید است"
    },
    {
        "id": 101,
        "question": "What is the recommended approach for handling very large lists in React?",
        options: [
            "Wrapping each list item in React.memo",
            "Using useCallback for all event handlers",
            "Implementing list virtualization (windowing)",
            "Adding more useEffect hooks"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• virtualization یا windowing با react-window\n" +
            "- فقط items قابل مشاهده render می‌شوند\n" +
            "- performance را برای هزاران item بهبود می‌دهد\n" +
            "- از render کردن تمام items جلوگیری می‌کند"
    },
    {
        "id": 102,
        "question": "Which React hook memoizes computed values between renders?",
        options: [
            "useRef",
            "useState",
            "useEffect",
            "useMemo"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• useMemo برای memoize کردن values\n" +
            "- محاسبه فقط وقتی dependencies تغییر کنند\n" +
            "- از محاسبات غیرضروری جلوگیری می‌کند\n" +
            "- برای expensive operations مفید است"
    },
    {
        "id": 103,
        question: "What are the main targets of React performance optimization?",
        options: [
            "Writing shorter code and fewer files",
            "Using only the latest React features",
            "Reducing unnecessary re-renders and bundle size",
            "Converting all functions to class components"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• کاهش تعداد re-renders غیرضروری\n" +
            "- کاهش bundle size با code splitting\n" +
            "- optimize کردن reconciliation با keys\n" +
            "- memoization برای محاسبات گران"
    },
    {
        "id": 104,
        "question":"When is React.memo not effective for optimization?",
        options: [
            "When props remain stable across renders",
            "When the component has no props",
            "When new object or references are passed as props",
            "When state is managed internally"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• وقتی props objects یا arrays با reference جدید هستند\n" +
            "- وقتی component state داخلی تغییر می‌کند\n" +
            "- وقتی context value تغییر می‌کند\n" +
            "- shallow comparison تغییر را detect می‌کند"
    },
    {
        "id": 105,
        "question": "Which hook prevents recalculation of expensive values?",
        options: [
            "useRef",
            "useState",
            "useEffect",
            "useMemo"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• useMemo value را cache می‌کند\n" +
            "- فقط با تغییر dependencies دوباره محاسبه می‌شود\n" +
            "- برای filtering، sorting یا processing data مفید است\n" +
            "- باید فقط برای expensive operations استفاده شود"
    },
    {
        "id": 106,
        "question": "What does React.StrictMode primarily help developers identify?",
        options: [
            "Application performance bugs and issues",
            "Side effects and component lifecycle issues",
            "Code style violations and patterns",
            "Memory leaks exclusively in components"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• unsafe lifecycle methods و side effects\n" +
            "- component render می‌شود دوبار در development\n" +
            "- warnings برای deprecated APIs\n" +
            "- به production build اثری ندارد"
    },
    {
        "id": 107,
        "question": "What is useCallback's primary function?",
        options: [
            "Memoizing function references between renders",
            "Storing state values across renders",
            "Triggering re-renders manually",
            "Completely replacing useMemo functionality"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• memoize کردن function references\n" +
            "- از re-creation function در هر render جلوگیری می‌کند\n" +
            "- برای passing callbacks به memoized components\n" +
            "- dependency array تعیین می‌کند کی function جدید ساخته شود "
    },
    {
        "id": 108,
        "question": "What is the recommended technique for rendering thousands of list items?",
        options: [
            "Wrapping everything in Context providers",
            "List virtualization or windowing",
            "Adding key props only",
            "Using additional useState hooks",
        ],
        "correctOption":1,
        "points": 20,
        "explanation":"• برای رندر کردن لیست‌های بزرگ در React از تکنیک 'virtualization' یا 'windowing' استفاده می‌شود\n" +
            "- این روش فقط آیتم‌های قابل مشاهده در viewport را رندر می‌کند و بقیه را در صورت نیاز بارگذاری می‌کند\n" +
            "- استفاده از Context یا useState تأثیری در بهینه‌سازی عملکرد لیست ندارد\n" +
            "- key prop برای شناسایی آیتم‌ها لازم است اما مشکل عملکردی را حل نمی‌کند"
    },
    {
        "id": 109,
        "question": "What does the React Profiler help you analyze?",
        options: [
            "Node.js memory leaks in server",
            "Component render times and re-render patterns",
            "Network usage and bundle size metrics",
            "Code style and formatting errors"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• React Profiler ابزاری برای تحلیل عملکرد کامپوننت‌ها در زمان رندر است\n" +
            "- زمان رندر هر کامپوننت و دفعات re-render را نمایش می‌دهد\n" +
            "- به شناسایی کامپوننت‌هایی که بی‌دلیل دوباره رندر می‌شوند کمک می‌کند\n" +
            "- این ابزار ارتباطی با شبکه، حافظه Node.js یا فرمت کد ندارد"
    },
    {
        "id": 110,
        "question": "Which hook maintains a mutable value without triggering re-renders?",
        options: [
            "useState",
            "useEffect",
            "useRef",
            "useMemo"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• هوک useRef برای نگهداری مقدار متغیر قابل تغییر استفاده می‌شود بدون آنکه باعث re-render شود\n" +
            "- مقدار ذخیره‌شده در useRef در بین رندرها پایدار باقی می‌ماند\n" +
            "- useState در صورت تغییر مقدار باعث re-render می‌شود\n" +
            "- useEffect برای مدیریت side effect  و useMemo برای memoization محاسبات استفاده می‌شوند"
    },
    {
        "id": 111,
        "question": "What are the primary areas of focus for React performance optimization?",
        options: [
            "Using more hooks and creating additional components",
            "Focusing only on CSS and backend optimizations",
            "Increasing component nesting dept significantly",
            "Preventing wasted renders and reducing bundle size"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• در بهینه‌سازی عملکرد React تمرکز اصلی بر جلوگیری از رندرهای غیرضروری و کاهش حجم bundle است\n" +
            "- این کار شامل استفاده از memoization، code-splitting و lazy loading می‌شود\n" +
            "- افزودن هوک یا افزایش عمق کامپوننت‌ها معمولاً باعث کاهش عملکرد می‌شود\n" +
            "- بهینه‌سازی CSS یا بک‌اند بر عملکرد مستقیم React تأثیری ندارد"
    },
    {
        "id": 112,
        "question":"Which technique most directly reduces wasted re-renders?",
        options: [
            "Code splitting with React.lazy",
            "Compressing static assets like images",
            "Wrapping components with React.memo",
            "Minifying JavaScript bundles"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• استفاده از React.memo باعث جلوگیری از رندر مجدد کامپوننت‌هایی می‌شود که props آن‌ها تغییری نکرده است\n" +
            "- این تکنیک با مقایسه سطحی props از رندرهای غیرضروری جلوگیری می‌کند\n" +
            "- React.lazy برای تقسیم کد در سطح فایل استفاده می‌شود نه کنترل رندر\n" +
            "- فشرده‌سازی فایل‌ها یا minify کردن کد فقط بر زمان بارگذاری تأثیر دارد، نه رفتار رندر"
    },
    {
        "id": 113,
        "question": "What defines a wasted render in React?",
        "options": [
            "Any render that takes longer than 16 ms to execute",
            "The initial render when a component first mounts in the tree",
            "A render where output is identical to previous render",
            "A render triggered by legitimate state or prop changes"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• رندر بی‌هوده (wasted render) زمانی رخ می‌دهد که خروجی کامپوننت در مقایسه با رندر قبلی هیچ تغییری نکند\n" +
            "- در این حالت، منابع محاسباتی صرف عملی می‌شوند که تأثیری در UI ندارد\n" +
            "- رندر اولیه همیشه ضروری است و بی‌هوده محسوب نمی‌شود\n" +
            "- زمان اجرای طولانی یا تغییرات واقعی در props/state دلیل منطقی برای رندر است"
    },
    {
        "id": 114,
        "question": "When does a React component re-render?",
        "options": [
            "Only when its internal state changes through setState calls",
            "When state changes, context changes, or parent component re-renders",
            "Only when incoming props are different from the previous render",
            "Only when useEffect dependencies are updated in the component"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• یک کامپوننت React زمانی دوباره رندر می‌شود که state داخلی، مقدار context یا والد آن تغییر کند\n" +
            "- تغییر در props معمولاً ناشی از رندر مجدد والد است\n" +
            "- useEffect پس از رندر اجرا می‌شود و علت رندر نیست\n" +
            "- setState یکی از دلایل رندر است اما تنها دلیل نیست"
    },
    {
        "id": 115,
        "question": "What happens when a React Context value changes?",
        "options": [
            "Only the Provider component re-renders after the value change",
            "Only consumers reading the specific changed property will re-render",
            "All consumer components re-render regardless of which data changed",
            "No consumer re-renders unless explicitly triggered by developer"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• وقتی مقدار Context تغییر می‌کند، تمام کامپوننت‌هایی که از آن Context استفاده می‌کنند دوباره رندر می‌شوند\n" +
            "- این اتفاق حتی اگر فقط بخشی از داده تغییر کرده باشد نیز می‌افتد\n" +
            "- Provider خودش معمولاً منبع تغییر است و re-render به‌صورت خودکار در consumers انجام می‌شود\n" +
            "- برای جلوگیری از رندر غیرضروری می‌توان از memoization یا تقسیم Context استفاده کرد"
    },
    {
        "id": 116,
        "question": "Which approach prevents creating new context value objects on every render?",
        "options": [
            "const value = useMemo(() => ({ user, setUser }), [user]);",
            "const value = { user, setUser }; // Direct object creation",
            "const value = useCallback(() => ({ user, setUser }), []);",
            "const value = useState({ user, setUser }); // State approach"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• استفاده از useMemo باعث می‌شود شیء context فقط زمانی که وابستگی‌های آن تغییر می‌کند، دوباره ساخته شود\n" +
            "- در غیر این صورت، در هر رندر شیء جدید ساخته شده و تمام consumers بی‌دلیل رندر می‌شوند\n" +
            "- useCallback برای memoization توابع است نه اشیاء\n" +
            "- استفاده مستقیم از شیء یا useState در این حالت منجر به ایجاد مقدار جدید در هر رندر می‌شود"
    },
    {
        "id": 117,
        "question": "Do prop changes directly cause React components to re-render?",
        "options": [
            "Yes, React monitors all props and triggers re-renders automatically",
            "No, only when props are arrays or objects with new references",
            "Yes, but only for primitive prop values like strings and numbers",
            "No, prop changes occur because the parent component re-rendered"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• تغییر props باعث re-render مستقیم کامپوننت نمی‌شود، بلکه رندر شدن والد باعث ارسال props جدید و re-render فرزند می‌شود\n" +
            "- React صرفاً props را به عنوان ورودی دریافت می‌کند، رندر خودکار به تغییرات داخلی props نیست\n" +
            "- تفاوت بین primitive و object/array مهم است برای مقایسه در memoization، اما علت اصلی re-render والد است"
    },
    {
        "id": 118,
        "question": "What does 'render' mean in React terminology?",
        "options": [
            "Updating the actual DOM elements on the page",
            "Painting pixels on the screen for visual display",
            "Executing the component function to create Virtual DOM",
            "Running useEffect hooks inside the component function"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":""
    },
    {
        "id": 119,
        "question":  "Does every React render update the actual DOM?",
        "options": [
            "Yes, every render immediately updates the DOM elements",
            "No, only when React finds differences in the Virtual DOM",
            "This behavior is only true for class-based components",
            "Only when state changes occur, not when prop changes"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• React از الگوریتم Reconciliation برای مقایسه Virtual DOM قبلی و جدید استفاده می‌کند\n" +
            "- فقط در صورت یافتن تفاوت، DOM واقعی به‌روزرسانی می‌شود\n" +
            "- این رویکرد باعث بهینه‌سازی عملکرد می‌شود"
    },
    {
        "id": 120,
        "question": "What defines a wasted render in React performance terms?",
        "options": [
            "A render producing same Virtual DOM",
            "A render taking longer than 16ms",
            "A render updating DOM unnecessarily",
            "Any render triggered by parent updates"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• Wasted render زمانی است که Virtual DOM تغییری نداشته باشد ولی DOM واقعی بی‌دلیل به‌روزرسانی شود\n" +
            "- این renders اتلاف منابع محسوب می‌شوند\n" +
            "- با Memoization می‌توان از آنها جلوگیری کرد"
    },
    {
        "id": 121,
        "question": "What is the purpose of memoization in React?",
        "options": [
            "To permanently store components in memory",
            "To parallelize all component renders automatically",
            "To reuse previous results if inputs unchanged",
            "To prevent all future component renders"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• Memoization تکنیکی برای کش کردن نتایج محاسبات است\n" +
            "- اگر ورودی‌ها تغییر نکرده باشند، نتیجه قبلی استفاده می‌شود\n" +
            "- باعث کاهش محاسبات تکراری و بهبود عملکرد می‌شود"
    },
    {
        "id": 122,
        "question": "When is React.memo ineffective?",
        "options": [
            "When components always receive new props or object references",
            "When components have children components nested inside",
            "When components are wrapped in stateful parent components",
            "When components are functions instead of class components"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• React.memo با مقایسه shallow props کار می‌کند\n" +
            "- اگر props همیشه reference جدید داشته باشند، memoization بی‌اثر است\n" +
            "- برای حل این مشکل باید از useMemo یا useCallback استفاده کرد"
    },
    {
        "id": 123,
        "question": "What is the main difference between React.memo and useMemo?",
        "options": [
            "React.memo is for class components, useMemo is for functions",
            "React.memo memoizes components, useMemo memoizes computed values",
            "React.memo is faster than useMemo in all performance cases",
            "React.memo automatically deep-memoizes all props and state deeply"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• React.memo یک HOC برای memoize کردن کل کامپوننت است\n" +
            "- useMemo یک hook برای memoize کردن مقادیر محاسباتی داخل کامپوننت است\n" +
            "- هر کدام کاربرد خاص خود را دارند"
    },
    {
        "id": 124,
        "question": "What is the main difference between useMemo and useCallback?",
        "options": [
            "useMemo prevents re-renders, useCallback prevents effect re-execution",
            "useMemo works with primitives, useCallback works with objects",
            "useMemo memoizes computed values, useCallback memoizes functions",
            "useMemo caches component props, useCallback caches state"
        ],
        "correctOption":2,
        "points": 30,
        "explanation":"• useMemo برای memoize کردن نتیجه محاسبات استفاده می‌شود\n" +
            "- useCallback برای memoize کردن خود تابع استفاده می‌شود\n" +
            "- useCallback معادل useMemo(() => fn, deps) است"
    },
    {
        "id": 125,
        "question": "How do React.memo and useMemo/useCallback differ in scope?",
        "options": [
            "React.memo memoizes components, useMemo/useCallback memoize values inside",
            "React.memo caches state, useMemo caches props, useCallback caches context",
            "React.memo prevents all re-renders, useMemo/useCallback only prevent effects",
            "React.memo works with primitives, useMemo/useCallback work with objects"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• React.memo در سطح کامپوننت کار می‌کند و از re-render جلوگیری می‌کند\n" +
            "- useMemo و useCallback در داخل کامپوننت کار می‌کنند\n" +
            "- React.memo برای optimization بین کامپوننت‌ها، useMemo/useCallback برای optimization داخل کامپوننت"
    },
    {
        "id": 126,
        "question": "What role does the dependency array play in useMemo?",
        "options": [
            "It prevents the function from ever running again",
            "It specifies which props should be passed to React.memo",
            "It ensures recalculation happens on every component render",
            "It determines when the memoized value should be recalculated"
        ],
        "correctOption":3,
        "points": 30,
        "explanation":"• آرایه dependency مشخص می‌کند چه زمانی مقدار دوباره محاسبه شود\n" +
            "- اگر هیچ یک از dependency ها تغییر نکرده باشند، مقدار cache شده برگردانده می‌شود\n" +
            "- تغییر هر یک از dependency ها باعث اجرای مجدد تابع می‌شود"
    },
    {
        "id": 127,
        "question": "What similarity exists between useMemo dependency arrays and React.memo?",
        "options": [
            "Both automatically stabilize function references without developer effort",
            "Both control when re-computation or re-rendering occurs based on changes",
            "Both prevent re-renders completely regardless of any input changes",
            "Both only work with primitive values and ignore objects or arrays"
        ],
        "correctOption":1,
        "points": 20,
        "explanation":"• هر دو براساس تغییرات ورودی تصمیم می‌گیرند\n" +
            "- React.memo props را مقایسه می‌کند، useMemo dependencies را\n" +
            "- هر دو از shallow comparison استفاده می‌کنند"
    },
    {
        "id": 128,
        "question":"What happens when useMemo's dependency array doesn't change between renders?",
        "options": [
            "A new value is always recalculated",
            "The previously cached value is returned",
            "React removes memoized value to save memory",
            "The component will never re-render again"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• اگر dependency ها تغییر نکرده باشند، مقدار قبلی از cache برگردانده می‌شود\n" +
            "- محاسبه مجدد انجام نمی‌شود و از منابع صرفه‌جویی می‌شود\n" +
            "- این رفتار اصل اساسی memoization است"
    },
    {
        "id": 129,
        "question": "Which tool is primarily used for preventing unnecessary component re-renders?",
        "options": [
            "useState hook for managing component state",
            "useMemo hook for memoizing computed values",
            "useCallback hook for memoizing function references",
            "React.memo higher-order component wrapper"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• React.memo ابزار اصلی برای جلوگیری از re-render غیرضروری کامپوننت است\n" +
            "- کل کامپوننت را wrap می‌کند و props را مقایسه می‌کند\n" +
            "- اگر props تغییر نکرده باشند، از re-render جلوگیری می‌کند"
    },
    {
        "id": 130,
        "question": "Which hook prevents expensive recalculations inside components?",
        "options": [
            "useCallback hook for memoizing function references",
            "useMemo hook for memoizing computed values",
            "useEffect hook for handling side effects",
            "React.memo higher-order component wrapper"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• useMemo برای جلوگیری از محاسبات پرهزینه استفاده می‌شود\n" +
            "- نتیجه محاسبات را cache می‌کند و در renderهای بعدی استفاده می‌کند\n" +
            "- فقط زمانی دوباره محاسبه می‌کند که dependencies تغییر کنند"
    },
    {
        "id": 131,
        "question": "Which hook is useful for memoizing values used in dependency arrays of other hooks?",
        "options": [
            "useMemo hook for memoizing computed values",
            "useState hook for managing component state",
            "useRef hook for persisting values across renders",
            "useCallback hook for memoizing function references"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• useMemo برای پایدار کردن مقادیر در dependency arrays استفاده می‌شود\n" +
            "- مانع از re-run شدن غیرضروری hookهای دیگر می‌شود\n" +
            "- به خصوص برای objects و arrays که reference جدید می‌گیرند مفید است"
    },
    {
        "id": 132,
        "question": "What's the best approach to prevent child component re-renders when props haven't changed?",
        "options": [
            "useMemo in the parent component to memoize props",
            "React.memo wrapping the child component directly",
            "useCallback to memoize the child component function",
            "useEffect to control prop updates in the parent"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• React.memo بهترین روش برای جلوگیری از re-render فرزند است\n" +
            "- مستقیماً child component را wrap می‌کند\n" +
            "- props را shallow compare می‌کند و در صورت عدم تغییر از re-render جلوگیری می‌کند"
    },
    {
        "id": 133,
        "question": "What's the best approach for avoiding expensive recalculations depending on multiple variables?",
        "options": [
            "useMemo with proper dependency array containing all variables",
            "useCallback wrapping the computation function for stability",
            "React.memo wrapping the parent component to prevent updates",
            "useEffect storing computed value in state for persistence"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• useMemo با dependency array کامل بهترین راه‌حل است\n" +
            "- تمام متغیرهای مؤثر در محاسبه باید در dependency array باشند\n" +
            "- فقط زمانی محاسبه مجدد می‌شود که یکی از dependencies تغییر کند"
    },
    {
        "id": 134,
        "question": "How should you stabilize expensive values used in other hook dependency arrays?",
        "options": [
            "useCallback for stabilizing the computed value reference",
            "React.memo wrapping the component that contains the value",
            "useRef to persist the value across renders",
            "useMemo to memoize the value with dependencies"
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• useMemo برای پایدار کردن مقادیر پرهزینه در dependency arrays استفاده می‌شود\n" +
            "- reference ثابت برای مقدار ایجاد می‌کند\n" +
            "- از اجرای مکرر hookهای وابسته جلوگیری می‌کند"
    },
    {
        "id": 135,
        "question": "Why does passing arrow functions as props prevent React.memo from working effectively?",
        "options": [
            "Arrow functions cannot access props or state from parent components",
            "React.memo converts arrow functions to regular function declarations",
            "Arrow functions create new references on every render cycle",
            "useCallback recreates arrow functions every render automatically"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• هر بار render، arrow function جدیدی با reference متفاوت ساخته می‌شود\n" +
            "- React.memo با shallow comparison reference ها را مقایسه می‌کند\n" +
            "- برای حل این مشکل باید از useCallback استفاده کرد"
    },
    {
        "id": 136,
        "question": "When do useMemo and useEffect callbacks execute in the component lifecycle?",
        "options": [
            "useMemo runs after commit, useEffect runs during render phase",
            "useMemo runs during rendering, useEffect runs after rendering phase",
            "Both run during rendering before DOM commit phase",
            "Both run after rendering, asynchronously in the next cycle"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• useMemo در حین rendering و به صورت synchronous اجرا می‌شود\n" +
            "- useEffect بعد از rendering و commit به DOM اجرا می‌شود\n" +
            "- این تفاوت timing برای use case های متفاوت است"
    },
    {
        "id": 137,
        "question": "What is the primary difference in purpose between useMemo and useEffect?",
        "options": [
            "Both are used for memoizing values inside component functions",
            "Both are used for managing side effects after rendering",
            "useMemo handles side effects, useEffect memoizes computed values",
            "useMemo memoizes computed values, useEffect handles side effects"
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• useMemo برای memoize کردن محاسبات و جلوگیری از محاسبات تکراری است\n" +
            "- useEffect برای side effects مثل API calls، subscriptions است\n" +
            "- useMemo مقدار برمی‌گرداند، useEffect فقط side effect اجرا می‌کند"
    },
    {
        "id": 138,
        "question": "What do useMemo and useEffect return?",
        "options": [
            "useMemo returns functions, useEffect returns computed values",
            "Neither hook returns any value to the component",
            "useMemo returns a memoized value, useEffect returns cleanup function",
            "Both hooks return cleanup functions for memory management"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• useMemo مقدار memoize شده را برمی‌گرداند\n" +
            "- useEffect یک cleanup function اختیاری برمی‌گرداند\n" +
            "- cleanup function برای پاکسازی side effects مثل unsubscribe استفاده می‌شود"
    },
    {
        "id": 139,
        "question": "Why is calling Hooks indirectly through call/apply invalid?",
        "options": [
            "Hooks must be called directly for React to track them properly",
            "Hooks cannot be reused across different function components",
            "call/apply methods break React state scope mechanisms",
            "Indirect calls only work properly in class-based components"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• Hooks باید مستقیماً فراخوانی شوند تا React بتواند آن‌ها را track کند\n" +
            "- React به ترتیب فراخوانی Hooks برای شناسایی آن‌ها وابسته است\n" +
            "- استفاده از call/apply این ترتیب را مختل می‌کند\n" +
            "- Hooks باید در سطح بالای function component فراخوانی شوند\n" +
            "- این یکی از قوانین اساسی Hooks در React است"
    },
    {
        "id": 140,
        "question":"Where are Hooks allowed to be called?",
        "options": [
            "Inside React function components or custom Hooks",
            "Inside class component methods only",
            "Inside any regular JavaScript function",
            "Inside event handler functions only"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• Hooks فقط در function components یا custom Hooks قابل استفاده هستند\n" +
            "- نمی‌توانید Hooks را در class components استفاده کنید\n" +
            "- Hooks را در توابع معمولی JavaScript فراخوانی نکنید\n" +
            "- custom Hooks باید با 'use' شروع شوند\n" +
            "- این محدودیت‌ها به React کمک می‌کنند state را صحیح مدیریت کند"
    },
    {
        "id": 141,
        "question": "Why must Hooks be called in the same order every render?",
        options: [
            "React only supports one Hook per component",
            "React identifies Hooks by their call position",
            "Hooks automatically reorder themselves internally",
            "React compares Hooks by their return values"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• React از ترتیب فراخوانی Hooks برای شناسایی آن‌ها استفاده می‌کند\n" +
            "- اگر ترتیب تغییر کند، React نمی‌تواند state را به Hook صحیح متصل کند\n" +
            "- به همین دلیل نباید Hooks را در شرط یا حلقه قرار دهید\n" +
            "- ESLint با قانون rules-of-hooks این موارد را بررسی می‌کند\n" +
            "- حفظ ترتیب ثابت برای عملکرد صحیح React ضروری است"
    },
// {
//     "id": 142,
//     "question": "What defines a Custom Hook in React?",
//     "options": [
//         "Any function that starts with 'use' prefix",
//         "A function using other React hooks",
//         "Both: starts with 'use' and uses React hooks",
//         "A function exported from a hooks file"
//     ],
//     "correctOption": 2,
//     "points": 10,
//             "explanation":""
// },
// {
//     "id": 143,
//     "question": "When should you create a Custom Hook?",
//     "options": [
//         "For every component you create",
//         "When logic is reused across components",
//         "Only for API calls and data fetching",
//         "Never, use built-in hooks only"
//     ],
//     "correctOption": 1,
//     "points": 10,
//             "explanation":""
// },
// {
//     "id": 144,
//     "question": "What is the naming convention for Custom Hooks?",
//     "options": [
//         "Must start with 'use' followed by descriptive name",
//         "Must end with 'Hook' suffix",
//         "Must be in camelCase only",
//         "No specific naming convention required"
//     ],
//     "correctOption": 0,
//     "points": 10,
//             "explanation":""
// },
// {
//     "id": 145,
//     "question": "Can Custom Hooks use other React hooks like useState?",
//     "options": [
//         "No, Custom Hooks cannot use other hooks",
//         "Yes, that's the main purpose of Custom Hooks",
//         "Only useState, not other hooks",
//         "Only in Class Components"
//     ],
//     "correctOption": 1,
//     "points": 10,
//             "explanation":""
// },
// {
//     "id": 146,
//     "question": "How do you handle errors in a Custom Hook for API fetching?",
//     "options": [
//         "Errors cannot be handled in Custom Hooks",
//         "Use try-catch and return error state",
//         "Let errors bubble to parent component always",
//         "Use error boundaries inside the hook"
//     ],
//     "correctOption": 1,
//     "points": 20,
//             "explanation":""
// },
// {
//     "id": 147,
//     "question": "What should a Custom Hook for form handling return?",
//     "options": [
//         "Only the form values object",
//         "JSX for the entire form",
//         "Values, handlers, and validation state",
//         "Nothing, it should mutate props directly"
//     ],
//     "correctOption": 2,
//     "points": 20,
//             "explanation":""
// },
//     {
//         "id": 148,
//         "question": "Can Custom Hooks call other Custom Hooks?",
//         "options": [
//             "No, only built-in hooks allowed",
//             "Yes, Custom Hooks can compose other hooks",
//             "Only if they're in the same file",
//             "Only with special configuration"
//         ],
//         "correctOption": 1,
//         "points": 20,
//                 "explanation":""
//     },
//     {
//         "id": 149,
//         "question": "How do you type a Custom Hook in TypeScript?",
//         "options": [
//             "Custom Hooks cannot use TypeScript",
//             "Define return type and parameter types",
//             "TypeScript infers everything automatically",
//             "Use 'any' type for all hooks"
//         ],
//         "correctOption": 1,
//         "points": 30,
//                 "explanation":""
//     },
//     {
//         "id": 150,
//         "question": "What is a common pattern for Custom Hooks with cleanup?",
//         "options": [
//             "Return cleanup function from useEffect inside hook",
//             "Cleanup is automatic, no code needed",
//             "Use try-finally block for cleanup",
//             "Call cleanup manually from component"
//         ],
//         "correctOption": 0,
//         "points": 30,
//                 "explanation":""
//     },
//     {
//         "id": 151,
//         "question": "Can Custom Hooks have parameters?",
//         "options": [
//             "No, Custom Hooks cannot accept parameters",
//             "Yes, like any JavaScript function",
//             "Only primitive types as parameters",
//             "Only with TypeScript enabled"
//         ],
//         "correctOption": 1,
//         "points": 10,
//                 "explanation":""
//     },
    {
        "id": 152,
        "question": "How does useMemo help with object props in memoized components?",
        options: [
            "It prevents garbage collection of objects",
            "It converts objects to primitive values",
            "It maintains stable object references",
            "It performs deep comparison of objects"
        ],
        correctOption: 2,
        "points": 20,
        "explanation":"• useMemo reference ثابتی از object ایجاد می‌کند\n" +
            "- بدون useMemo، object جدید در هر render ساخته می‌شود\n" +
            "- React.memo با reference جدید، component را دوباره render می‌کند\n" +
            "- useMemo فقط زمانی object جدید می‌سازد که dependencies تغییر کنند\n" +
            "- این به جلوگیری از re-renders غیرضروری کمک می‌کند"
    },
    {
        "id": 153,
        "question":"What is the key difference between useCallback and useMemo?",
        options: [
            "useCallback memoizes functions, useMemo memoizes values",
            "useCallback prevents renders, useMemo prevents effects",
            "useCallback handles async, useMemo handles sync logic",
            "useCallback works with props, useMemo works with state"
        ],
        correctOption: 0,
        "points": 20,
        "explanation":"• useCallback برای memoize کردن functions استفاده می‌شود\n" +
            "- useMemo برای memoize کردن مقادیر محاسبه شده استفاده می‌شود\n" +
            "- useCallback معادل useMemo(() => fn, deps) است\n" +
            "- هر دو از re-creation غیرضروری جلوگیری می‌کنند\n" +
            "- برای استفاده صحیح، نوع داده را در نظر بگیرید"
    },
    {
        "id": 154,
        "question":  "Why do useState setters have stable identity across renders?",
        options: [
            "React automatically memoizes all functions",
            "Setters are recreated but hidden by React",
            "React guarantees stable references for setters",
            "Setters only work with primitive values"
        ],
        correctOption: 2,
        "points": 20,
        "explanation":"• React تضمین می‌کند که setter functions همیشه reference ثابت دارند\n" +
            "- نیازی به اضافه کردن آن‌ها به dependency arrays نیست\n" +
            "- این رفتار برای useState و useReducer dispatch صادق است\n" +
            "- کمک به جلوگیری از re-runs غیرضروری effects می‌کند\n" +
            "- یکی از optimizations داخلی React است"
    },
    {
        "id": 155,
        "question":"What does stable identity mean for useReducer dispatch?",
        options: [
            "The function reference never changes",
            "It produces consistent action results",
            "It handles all action types equally",
            "It works with any reducer function"
        ],
        correctOption: 0,
        "points": 20,
        "explanation":"• dispatch function همیشه reference یکسانی دارد\n" +
            "- مانند useState setters، نیازی به dependency array ندارد\n" +
            "- React این stability را تضمین می‌کند\n" +
            "- باعث سادگی در نوشتن effects و callbacks می‌شود\n" +
            "- می‌توانید با اطمینان از dispatch در useEffect استفاده کنید"
    },
    {
        "id": 156,
        "question": "Why can useState setters be omitted from dependency arrays?",
        options: [
            "React adds them automatically at runtime",
            "React guarantees their stable identity",
            "They're compared by value not reference",
            "They only track primitive dependencies"
        ],
        correctOption: 1,
        "points": 30,
        "explanation":"• React تضمین می‌کند setter functions هرگز تغییر نمی‌کنند\n" +
            "- این یعنی اضافه کردن آن‌ها به deps تاثیری ندارد\n" +
            "- ESLint به طور خودکار این موضوع را می‌داند\n" +
            "- تنها برای useState و useReducer dispatch صادق است\n" +
            "- سایر functions باید در dependency array قرار گیرند"
    },
    {
        "id": 157,
        "question":  "What happens when state variables are missing from useEffect dependencies?",
        options: [
            "React adds the variables automatically",
            "The effect uses the latest values",
            "The effect captures stale values",
            "The effect runs on every render"
        ],
        correctOption: 2,
        "points": 30,
        "explanation":"• وقتی state از dependencies حذف شود، effect مقدار قدیمی را می‌بیند\n" +
            "- این به stale closure معروف است\n" +
            "- effect فقط زمانی مقادیر capture می‌کند که ایجاد می‌شود\n" +
            "- همیشه تمام reactive values را در deps قرار دهید\n" +
            "- ESLint exhaustive-deps این مشکل را تشخیص می‌دهد"
    },
    {
        "id": 158,
        "question":  "Why must props be included in useCallback dependency arrays?",
        options: [
            "React freezes props unless included",
            "Props have stable identity like setters",
            "useCallback only works with primitives",
            "Props can change causing stale closures"
        ],
        correctOption: 3,
        "points": 20,
        "explanation":"• props می‌توانند در هر render تغییر کنند\n" +
            "- بدون اضافه کردن به deps، function مقدار قدیمی prop را می‌بیند\n" +
            "- این باعث bugs پنهان و رفتار غیرمنتظره می‌شود\n" +
            "- همیشه props استفاده شده را در dependency array قرار دهید\n" +
            "- ESLint به شناسایی این موارد کمک می‌کند"
    },
    {
        "id": 159,
        "question": "Why should functions defined inside a React component be added to the dependency array of useEffect?",
        options: [
            "Functions are recreated on every component render cycle",
            "React automatically memoizes all functions in components",
            "Functions have stable references like dispatch from useReducer",
            "Dependency arrays only need to track function calls"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• functions در هر render دوباره ساخته می‌شوند\n" +
            "- reference جدید باعث re-run شدن effect می‌شود\n" +
            "- باید function را با useCallback wrap کنید یا داخل effect بیاورید\n" +
            "- یا function را خارج از component تعریف کنید\n" +
            "- این یکی از دلایل اصلی re-renders غیرضروری است"
    },
    {
        "id": 160,
        "question": "Why can frequently changing Context values cause performance issues?",
        options: [
            "React ignores all context updates for performance reasons",
            "All consumers re-render whenever any context value changes",
            "Context automatically freezes all values to prevent updates",
            "useMemo cannot be used properly with Context values"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• هر تغییر در Context باعث re-render همه consumers می‌شود\n" +
            "- حتی اگر consumer فقط بخشی از value را استفاده کند\n" +
            "- برای optimization، Context را به چند قسمت کوچک تقسیم کنید\n" +
            "- یا از useMemo برای wrap کردن value استفاده کنید\n" +
            "- pattern children به کاهش re-renders کمک می‌کند"
    },
    {
        "id": 161,
        "question": "How can you optimize Context to prevent unnecessary re-renders?",
        options: [
            "Wrap context values with useMemo for stable references",
            "Always pass new object literals as context values",
            "Use class components instead of functional components",
            "Avoid using React.memo on any consumer components"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• useMemo reference ثابت برای Context value ایجاد می‌کند\n" +
            "- بدون useMemo، object جدید در هر render ساخته می‌شود\n" +
            "- این باعث re-render همه consumers حتی بدون تغییر واقعی می‌شود\n" +
            "- dependencies را دقیق مشخص کنید تا فقط زمان نیاز update شود\n" +
            "- ترکیب با React.memo در consumers بسیار موثر است"
    },
    {
        "id": 162,
        "question": "What strategy helps avoid wasted renders in Context with many consumers?",
        options: [
            "Convert all consumers to class-based components only",
            "Always update entire context on any state change",
            "Use single large context for all application state",
            "Split context into multiple focused smaller providers"
        ],
        "correctOption":3,
        "points": 30,
        "explanation":"• تقسیم Context به چند Provider کوچک‌تر بسیار موثر است\n" +
            "- هر consumer فقط به Context مورد نیاز خود subscribe می‌شود\n" +
            "- تغییر در یک Context، consumers دیگر را تحت تاثیر قرار نمی‌دهد\n" +
            "- مثلاً User Context و Theme Context را جدا نگه دارید\n" +
            "- این pattern به scalability برنامه کمک می‌کند"
    },
    {
        "id": 163,
        "question":"How does passing children help optimize Context performance?",
        options: [
            "Makes entire subtree always re-render together",
            "Automatically freezes all context values",
            "Allows only necessary parts to re-render",
            "Converts all consumers to use useMemo"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• با استفاده از children pattern، فقط Provider دوباره render می‌شود\n" +
            "- children که از بیرون pass شده‌اند، re-render نمی‌شوند\n" +
            "- این technique به نام 'children as props' معروف است\n" +
            "- باعث کاهش چشمگیر re-renders غیرضروری می‌شود\n" +
            "- یکی از بهترین روش‌های optimization در React است"
    },
    {
        "id": 164,
        "question": "Why wrap Context values containing objects in useMemo?",
        options: [
            "Forces all consumers to re-render",
            "Keeps object references stable between renders",
            "Automatically freezes object values for immutability",
            "Converts complex objects to primitive types"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• objects در هر render reference جدید می‌گیرند\n" +
            "- React با === مقایسه می‌کند نه deep equality\n" +
            "- useMemo object را تا زمان تغییر dependencies حفظ می‌کند\n" +
            "- این از re-render غیرضروری تمام consumers جلوگیری می‌کند\n" +
            "- همیشه برای Context values از useMemo استفاده کنید"
    },
    {
        "id": 165,
        "question": "How does React.memo help Context consumer performance?",
        options: [
            "Prevents re-render unless component props actually change",
            "Automatically memoizes all context values in consumers",
            "Ensures children components never update unnecessarily",
            "Merges multiple context values together for efficiency"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• React.memo component را wrap می‌کند و props را check می‌کند\n" +
            "- اگر props تغییر نکرده باشد، re-render نمی‌شود\n" +
            "- حتی اگر parent (Provider) re-render شود\n" +
            "- ترکیب React.memo با useMemo در value بسیار قدرتمند است\n" +
            "- برای consumers با UI سنگین توصیه می‌شود"
    },
    {
        "id": 166,
        "question": "What advantage does children pattern with React.memo provide?",
        options: [
            "Children receive new props without any re-rendering",
            "Only context-dependent components re-render when needed",
            "Entire component subtree renders once per change",
            "Context values automatically become static primitive types"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• با ترکیب children و React.memo، کنترل دقیق روی re-renders دارید\n" +
            "- فقط کامپوننت‌هایی که واقعاً به Context نیاز دارند re-render می‌شوند\n" +
            "- بقیه tree بدون تغییر باقی می‌ماند\n" +
            "- این pattern برای برنامه‌های بزرگ بسیار مفید است\n" +
            "- performance را به طور قابل توجهی بهبود می‌بخشد"
    },
    {
        "id": 147,
        "question":  "Why do inline objects as Context values trigger unnecessary re-renders?",
        options: [
            "React deeply compares all object contents every render",
            "New object references are created on every render",
            "Context always re-renders all consumers",
            "Objects are automatically converted to primitives "
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• هر بار که component render می‌شود، object جدیدی ساخته می‌شود\n" +
            "- حتی اگر محتوای object یکسان باشد، reference متفاوت است\n" +
            "- React فقط reference را بررسی می‌کند نه محتوا\n" +
            "- همین باعث re-render همه consumers می‌شود\n" +
            "- همیشه از useMemo برای inline objects استفاده کنید"
    },
    {
        "id": 168,
        "question": "What's the recommended way to avoid re-renders with Context objects?",
        options: [
            "Wrap Context.Provider component itself with React.memo",
            "Create new object literals each render for freshness",
            "Wrap object values in useMemo with proper dependencies",
            "Convert all objects to JSON strings before passing"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• useMemo object را memoize می‌کند و reference را ثابت نگه می‌دارد\n" +
            "- dependencies مشخص می‌کنند چه زمانی object باید update شود\n" +
            "- این بهترین و ساده‌ترین راه برای optimization است\n" +
            "- JSON.stringify یا memo کردن Provider کار نمی‌کند\n" +
            "- همیشه این pattern را برای Context values دنبال کنید"
    },
    {
        "id": 169,
        "question": "How does React.memo reduce Context consumer re-renders?",
        options: [
            "Re-renders only when component props change, not context",
            "Forces all consumers to render together for consistency",
            "Automatically memoizes Context values in provider components",
            "Uses shallow comparison for context updates instead"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• React.memo props را check می‌کند نه Context\n" +
            "- اگر props تغییر نکرده باشد، component re-render نمی‌شود\n" +
            "- اما اگر Context تغییر کند، باز هم re-render می‌شود\n" +
            "- برای جلوگیری کامل، Context را نیز optimize کنید\n" +
            "- ترکیب هر دو technique بهترین نتیجه را می‌دهد"
    },
    {
        "id": 170,
        "question": "What combination best reduces Context-related wasted renders?",
        options: [
            "useMemo for values, React.memo for consumers, children pattern",
            "useMemo for values, partial memoization, separate state contexts",
            "useCallback for values, React.memo for consumers, split contexts",
            "useState for values, class consumers, single global contexts"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• ترکیب useMemo (برای values) + React.memo (برای consumers) + children pattern بهترین است\n" +
            "- useMemo از re-creation غیرضروری value جلوگیری می‌کند\n" +
            "- React.memo از re-render غیرضروری consumers جلوگیری می‌کند\n" +
            "- children pattern فقط قسمت‌های لازم را re-render می‌کند\n" +
            "- این سه تکنیک با هم، بهترین performance را می‌دهند"
    },
    {
        "id": 171,
        "question": "What does bundle size represent in React applications?",
        options: [
            "Total number of React components in the project",
            "Combined size of all JavaScript and CSS files",
            "Memory consumed by React in browser runtime",
            "Total amount of network requests per page load"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• bundle size مجموع حجم تمام فایل‌های JavaScript و CSS است\n" +
            "- شامل کد خود برنامه، کتابخانه‌ها و dependencies می‌شود\n" +
            "- bundle بزرگ‌تر یعنی زمان بارگذاری بیشتر برای کاربر\n" +
            "- با tools مثل webpack-bundle-analyzer قابل بررسی است\n" +
            "- کاهش bundle size یکی از اهداف اصلی optimization است"
    },
    {
        "id": 172,
        "question": "How does larger bundle size affect application performance?",
        options: [
            "Makes web pages load much faster than before",
            "Reduces network bandwidth usage significantly",
            "Improves SEO ranking for search engines",
            "Makes applications load slower for users"
        ],
        "correctOption":3,
        "points": 10,
        "explanation":"• bundle بزرگ‌تر زمان download و parse را افزایش می‌دهد\n" +
            "- کاربران با اینترنت کند تاثیر بیشتری می‌بینند\n" +
            "- زمان Time to Interactive (TTI) افزایش می‌یابد\n" +
            "- مصرف data موبایل بیشتری دارد\n" +
            "- تجربه کاربری ضعیف‌تر و نرخ bounce بالاتر می‌شود"
    },
    {
        "id": 173,
        "question":  "What is the main goal of code splitting?",
        options: [
            "Combine all files into one single large bundle",
            "Rewrite components into smaller atomic functions",
            "Split code into smaller chunks loaded on demand",
            "Reduce total number of React hooks used throughout"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• code splitting کد را به چند بخش کوچک‌تر تقسیم می‌کند\n" +
            "- فقط کدی که الان نیاز است بارگذاری می‌شود\n" +
            "- بقیه کد زمانی که لازم شد load می‌شود (lazy loading)\n" +
            "- initial bundle size کاهش می‌یابد\n" +
            "- سرعت بارگذاری اولیه بهبود پیدا می‌کند"
    },
    {
        "id": 174,
        "question": "Which React feature enables lazy loading of components?",
        options: [
            "React.StrictMode combined with error boundary components",
            "React.Suspense combined with React.lazy function calls",
            "useMemo combined with useCallback hooks for optimization",
            "React.memo combined with stable props for consistency"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• React.lazy برای lazy loading کامپوننت‌ها استفاده می‌شود\n" +
            "- باید با React.Suspense ترکیب شود\n" +
            "- Suspense fallback UI را تا load شدن نشان می‌دهد\n" +
            "- فقط با dynamic import() کار می‌کند\n" +
            "- مناسب برای route-based splitting است"
    },
    {
        "id": 175,
        "question": "What happens with page-based bundle splitting in Next.js?",
        options: [
            "All pages are still combined into one large bundle",
            "Only components with useEffect hooks get separated",
            "Pages are split but still downloaded together",
            "Each page loads as a separate bundle"
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• Next.js به صورت خودکار هر page را جدا می‌کند\n" +
            "- هر صفحه bundle مستقل خود را دارد\n" +
            "- فقط کد صفحه فعلی بارگذاری می‌شود\n" +
            "- navigation بین صفحات سریع‌تر می‌شود\n" +
            "- یکی از مزایای بزرگ Next.js نسبت به CRA است"
    },
    {
        "id": 176,
        "question":"What role does React.Suspense play with lazy components?",
        options: [
            "Shows fallback UI until lazy component loading",
            "Prevents unnecessary component re-renders during loading",
            "Creates separate bundles automatically for each component",
            "Optimizes performance without requiring additional configuration"
        ],
        "correctOption":0,
        "points": 30,
        "explanation":"• Suspense یک wrapper برای lazy components است\n" +
            "- fallback prop محتوای loading را مشخص می‌کند\n" +
            "- تا component load شود، fallback نمایش داده می‌شود\n" +
            "- می‌تواند چند lazy component را wrap کند\n" +
            "- تجربه کاربری بهتری نسبت به loading خالی ایجاد می‌کند"
    },
    {
        "id": 177,
        question: "What is the main purpose of tree-shaking?",
        options: [
            "Split JavaScript code into multiple chunks",
            "Remove unused code from final bundles",
            "Improve CSS loading performance significantly",
            "Automatically lazy-load images when they become visible"
        ],
        correctOption: 1,
        points: 10,
        "explanation": "• tree-shaking کد استفاده نشده را از bundle حذف می‌کند\n" +
            "- در زمان build توسط bundler انجام می‌شود\n" +
            "- فقط با ES modules (import/export) کار می‌کند\n" +
            "- کتابخانه‌های بزرگ را کوچک‌تر می‌کند\n" +
            "- webpack و Rollup به خوبی این کار را انجام می‌دهند"
    },
    {
        "id": 178,
        question: "Which feature enables component-based code splitting?",
        options: [
            "React.memo for component memoization and optimization",
            "useCallback for function reference memoization stability",
            "React.lazy with Suspense boundaries for loading states",
            "StrictMode for development debugging and error detection"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• React.lazy امکان تقسیم کد بر اساس کامپوننت را می‌دهد\n" +
            "- هر کامپوننت می‌تواند bundle جداگانه داشته باشد\n" +
            "- با Suspense برای مدیریت loading state ترکیب می‌شود\n" +
            "- مناسب برای کامپوننت‌های سنگین یا کم استفاده است\n" +
            "- performance برنامه را بهبود می‌بخشد"
    },
    {
        "id": 179,
        question: "How does dynamic import() improve performance?",
        options: [
            "Loads JavaScript modules only when actually required",
            "Always reduces bundle size significantly for all applications",
            "Automatically compresses JavaScript files during build process",
            "Preloads all modules at application startup for speed"
        ],
        correctOption: 0,
        points: 10,
        "explanation": "• import() ماژول‌ها را به صورت asynchronous بارگذاری می‌کند\n" +
            "- فقط زمانی که واقعاً نیاز است اجرا می‌شود\n" +
            "- bundle اولیه کوچک‌تر می‌شود\n" +
            "- Promise برمی‌گرداند که resolve به module می‌شود\n" +
            "- پایه React.lazy و code splitting است"
    },
    {
        "id": 180,
        question: "Which plugin helps analyze Next.js bundle sizes?",
        options: [
            "webpack-bundle-analyzer for build process analysis",
            "eslint-plugin-next for code linting and quality",
            "@next/bundle-analyzer for bundle size visualization",
            "next-optimizer for performance optimization across board"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• Image component تصاویر را به صورت خودکار optimize می‌کند\n" +
            "- lazy loading پیش‌فرض برای تصاویر\n" +
            "- تبدیل خودکار به فرمت‌های مدرن مثل WebP\n" +
            "- resize و optimization بر اساس device\n" +
            "- جلوگیری از layout shift با تعیین ابعاد"
    },
    {
        "id": 181,
        question:"Why use Next.js Image component over regular img?",
        options: [
            "Increases resolution of all images to HD",
            "Converts all image formats to WebP",
            "Automatically lazy-loads and optimizes images",
            "Completely avoids browser caching for freshness"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• Image component تصاویر را به صورت خودکار optimize می‌کند\n" +
            "- lazy loading پیش‌فرض برای تصاویر\n" +
            "- تبدیل خودکار به فرمت‌های مدرن مثل WebP\n" +
            "- resize و optimization بر اساس device\n" +
            "- جلوگیری از layout shift با تعیین ابعاد"
    },
    {
        "id": 182,
        question: "How does caching help with bundle optimization?",
        options: [
            "Reduces React component re-renders",
            "Automatically inlines critical CSS for faster rendering",
            "Prevents downloading unchanged bundles on repeat visits",
            "Forces all JavaScript modules to preload for speed"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• caching از دانلود مجدد فایل‌های unchanged جلوگیری می‌کند\n" +
            "- browser فایل‌ها را در cache ذخیره می‌کند\n" +
            "- با content hashing فایل‌ها versioning می‌شوند\n" +
            "- فقط فایل‌های تغییر یافته دوباره download می‌شوند\n" +
            "- سرعت بارگذاری در بازدیدهای بعدی بسیار بهتر است"
    },
    {
        "id": 183,
        question: "What's the downside of importing large third-party libraries?",
        options: [
            "They completely disable React hooks throughout application",
            "They significantly increase initial JavaScript load time",
            "They prevent tree-shaking optimization from working properly",
            "They block Suspense fallback rendering during loading"
        ],
        correctOption: 1,
        points: 20,
        "explanation": "• کتابخانه‌های بزرگ bundle size را قابل توجه افزایش می‌دهند\n" +
            "- زمان parsing و execution بیشتری نیاز است\n" +
            "- ممکن است بخش‌های زیادی استفاده نشود\n" +
            "- بهتر است از tree-shakable libraries استفاده کنید\n" +
            "- یا فقط بخش مورد نیاز را import کنید"
    },
    {
        "id": 184,
        question: "What happens to imported but unused libraries with tree-shaking?",
        options: [
            "Library code will not be included in final bundle",
            "Library code will always remain in bundle regardless",
            "Library code throws runtime error during execution phase",
            "Library code preloads for future potential use"
        ],
        correctOption: 0,
        points: 30,
        "explanation": "• tree-shaking کد استفاده نشده را حذف می‌کند\n" +
            "- اگر چیزی از library استفاده نشود، در bundle نمی‌آید\n" +
            "- فقط با ES modules (import/export) کار می‌کند\n" +
            "- CommonJS (require) قابل tree-shake نیست\n" +
            "- کتابخانه‌ها باید side-effect free باشند"
    },
    {
        "id": 185,
        question: "How can unused CSS affect bundle performance?",
        options: [
            "Increases JavaScript execution time throughout the application",
            "Completely disables CSS modules functionality across project",
            "increases the bundle size without offering meaningful functionality",
            "Forces application to use inline styles only"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• CSS استفاده نشده حجم bundle را بیهوده افزایش می‌دهد\n" +
            "- browser باید همه CSS را parse و apply کند\n" +
            "- زمان rendering را کند می‌کند\n" +
            "- از tools مثل PurgeCSS برای حذف استفاده کنید\n" +
            "- CSS Modules و Tailwind این مشکل را کاهش می‌دهند"
    },
    {
        "id": 186,
        question:  "In Next.js, what differs preloading from prefetching?",
        options: [
            "Preloading waits for idle time, prefetching happens immediately",
            "Preloading fetches immediately, prefetching waits for idle time",
            "Both techniques have identical behavior in all situations",
            "Both techniques disable cache headers completely for requests"
        ],
        correctOption: 1,
        points:30,
        "explanation": "• preload منابع critical را فوراً بارگذاری می‌کند\n" +
            "- prefetch منابع را در زمان idle بارگذاری می‌کند\n" +
            "- preload برای fonts، critical CSS استفاده می‌شود\n" +
            "- prefetch برای صفحات بعدی استفاده می‌شود\n" +
            "- استفاده نادرست preload می‌تواند مضر باشد"
    },
    {
        id: 187,
        question:  "What is the main purpose of preload?",
        options: [
            "Download resources only when user clicks on links",
            "Download critical resources as early as possible",
            "Reduce size of JavaScript bundles automatically",
            "Block unused CSS files from loading unnecessarily"
        ],
        correctOption: 1,
        points: 10,
        "explanation": "• preload به browser می‌گوید منابع مهم را زودتر دانلود کند\n" +
            "- برای منابعی که حتماً نیاز است استفاده می‌شود\n" +
            "- مثل fonts، critical CSS یا hero images\n" +
            "- priority بالایی دارد و بلافاصله شروع می‌شود\n" +
            "- باید با دقت استفاده شود تا bandwidth هدر نرود"
    },
    {
        id: 188,
        question: "How does prefetch improve user experience?",
        options: [
            "Executes JavaScript code faster in browser runtime",
            "Automatically caches all images for offline usage",
            "Loads future page resources during browser idle time",
            "Reduces React component re-renders significantly"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• prefetch صفحات احتمالی بعدی را پیش‌بارگذاری می‌کند\n" +
            "- در زمان idle browser انجام می‌شود\n" +
            "- navigation فوری و بدون تاخیر می‌شود\n" +
            "- Next.js به صورت خودکار links را prefetch می‌کند\n" +
            "- تجربه کاربری نزدیک به native apps"
    },
    {
        id: 189,
        question: "What's the biggest risk of incorrect preload usage?",
        options: [
            "Increasing bundle splitting unnecessarily throughout application",
            "Blocking lazy-loading of components during runtime",
            "Overloading network with too many high-priority requests",
            "Preventing prefetch functionality from working properly"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• استفاده بیش از حد preload bandwidth را مصرف می‌کند\n" +
            "- منابع واقعاً مهم دیرتر بارگذاری می‌شوند\n" +
            "- بر روی کاربران با اینترنت کند تاثیر منفی دارد\n" +
            "- فقط برای منابع critical استفاده کنید\n" +
            "- معمولاً 2-3 preload کافی است"
    },
    {
        id: 191,
        question: "Which strategy is most effective for optimizing initial page load time?",
        "options": [
            "Disable caching for all resources",
            "Prefetch all images on the page",
            "Prefetch non-critical JavaScript files",
            "Preload critical fonts and above-the-fold CSS"
        ],
        correctOption:3,
        points: 20,
        "explanation": "• preload کردن منابع critical مثل fonts و CSS اولویت اول است\n" +
            "- above-the-fold content باید سریع نمایش داده شود\n" +
            "- lazy load کردن تصاویر و کامپوننت‌های غیرضروری\n" +
            "- code splitting برای کاهش initial bundle\n" +
            "- ترکیب این تکنیک‌ها بهترین نتیجه را می‌دهد"
    },
    {
        id: 192,
        question: "What defines a reactive value in React?",
        "options": [
            "A value that remains constant during component lifecycle",
            "A value that triggers component updates when it changes",
            "A value stored outside the component scope",
            "A function that executes only once during rendering"
        ],
        correctOption: 1,
        points: 10,
        "explanation": "• reactive value مقداری است که تغییر آن باعث re-render می‌شود\n" +
            "- مثل state، props، context values\n" +
            "- React به صورت خودکار آن‌ها را track می‌کند\n" +
            "- متغیرهای معمولی reactive نیستند\n" +
            "- باید در dependency arrays قرار گیرند"
    },
    {
        id: 193,
        question:  "Which hook is designed to create reactive computed values in React?",
        "options": [
            "useState",
            "useEffect",
            "useMemo",
            "useCallback"
        ],
        "correctOption": 2,
        points: 10,
        "explanation": "• useMemo برای ساخت مقادیر محاسبه شده reactive است\n" +
            "- مقدار را فقط زمان تغییر dependencies دوباره محاسبه می‌کند\n" +
            "- از محاسبات گران قیمت غیرضروری جلوگیری می‌کند\n" +
            "- مقدار برگشتی reactive است\n" +
            "- برای derived state مناسب است"
    },
    {
        id: 194,
        question:"Why are regular variables in React components not reactive?",
        "options": [
            "React ignores primitive data types",
            "JavaScript doesn't support reactive programming",
            "React doesn't track changes to regular variables",
            "React only monitors Context values"
        ],
        "correctOption": 2,
        points: 20,
        "explanation": "• متغیرهای معمولی هیچ ارتباطی با rendering system ندارند\n" +
            "- React تغییرات آن‌ها را track نمی‌کند\n" +
            "- تغییر آن‌ها باعث re-render نمی‌شود\n" +
            "- در هر render مقدار اولیه می‌گیرند\n" +
            "- برای reactive values از useState استفاده کنید"
    },
    {        id: 195,
        question:"What is true about reactive values in React?",
        "options": [
            "They automatically trigger re-renders when changed",
            "They require manual DOM updates after changes",
            "They only work with primitive data types",
            "They cannot be used in functional components"
        ],
        correctOption: 0,
        points: 20,
        "explanation": ""
    },
    {
        id: 196,
        question: "Why must reactive values be included in useEffect dependency arrays?",
        "options": [
            "To prevent stale closures and ensure current values",
            "To reduce the final bundle size significantly",
            "To prevent unnecessary component re-renders",
            "To satisfy ESLint rules and best practices"
        ],
        correctOption: 0,
        points: 20,
        "explanation": "• تغییر reactive values به صورت خودکار باعث re-render می‌شود\n" +
            "- React آن‌ها را monitor می‌کند\n" +
            "- شامل state، props، context می‌شوند\n" +
            "- باید در useEffect dependencies قرار گیرند\n" +
            "- پایه سیستم reactivity در React هستند"
    },
    {
        id: 197,
        question:  "Which of these is considered a reactive value in React?",
        "options": [
            "A local variable declared inside render",
            "A literal number inside useEffect",
            "Props passed from a parent component",
            "A module-level constant"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• props از والد به فرزند pass می‌شوند و reactive هستند\n" +
            "- تغییر props باعث re-render کامپوننت می‌شود\n" +
            "- باید در dependency arrays قرار گیرند\n" +
            "- متغیرهای local و constants reactive نیستند\n" +
            "- state و context values نیز reactive هستند"
    },
    {
        id: 198,
        question:  "Which value does NOT need to be included in dependency arrays?",
        "options": [
            "State values from useState",
            "Functions returned by useCallback",
            "Setter functions from useState",
            "Props passed from parent components"
        ],
        correctOption: 2,
        points: 10,
        "explanation": "• setter functions از useState reference ثابت دارند\n" +
            "- React تضمین می‌کند هرگز تغییر نمی‌کنند\n" +
            "- نیازی به اضافه کردن به deps نیست\n" +
            "- dispatch از useReducer نیز همین رفتار را دارد\n" +
            "- بقیه reactive values باید اضافه شوند"
    },
    {
        id: 199,
        question: "What happens when a reactive value is missing from a dependency array?",
        "options": [
            "React throws a runtime error immediately",
            "The component fails to mount properly",
            "The code works but may use stale values",
            "Effects or memoized functions use stale values"
        ],
        correctOption: 3,
        points: 30,
        "explanation": "• effect یا callback مقدار قدیمی (stale) را می‌بیند\n" +
            "- این به stale closure معروف است\n" +
            "- باعث bugs پنهان و رفتار نادرست می‌شود\n" +
            "- ESLint warnings را جدی بگیرید\n" +
            "- همیشه تمام dependencies را اضافه کنید"
    },
    {
        id: 200,
        question: "Which tool automatically detects missing dependencies in useEffect?",
        "options": [
            "Prettier code formatter",
            "React DevTools browser extension",
            "TypeScript compiler",
            "ESLint exhaustive-deps rule",
        ],
        correctOption: 3,
        points: 10,
        "explanation": "• ESLint با قانون exhaustive-deps این کار را انجام می‌دهد\n" +
            "- بخشی از eslint-plugin-react-hooks است\n" +
            "- warnings قرمز رنگ در editor نشان می‌دهد\n" +
            "- به جلوگیری از stale closure کمک می‌کند\n" +
            "- حتماً آن را در پروژه نصب و فعال کنید"
    },
    {
        "id": 201,
        "question":  "Why must context values used in useEffect be included in dependency arrays?",
        "options": [
            "React automatically tracks context changes",
            "Effects may read outdated context values",
            "useEffect ignores context values unless explicitly listed",
            "React serializes context values for comparison"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• context values می‌توانند تغییر کنند\n" +
            "- بدون اضافه کردن به deps، effect مقدار قدیمی را می‌بیند\n" +
            "- مانند props و state، reactive هستند\n" +
            "- ESLint آن‌ها را شناسایی می‌کند\n" +
            "- همیشه context values استفاده شده را اضافه کنید"
    },
    {
        "id": 202,
        "question": "What is a stale closure in React hooks?",
        "options": [
            "A closure that captures outdated values from previous renders",
            "A closure preserved in memory for deterministic updates",
            "A closure garbage collected after re-rendering",
            "A closure created when multiple effects overlap"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• closure ای که مقادیر قدیمی از renders قبلی را capture کرده\n" +
            "- زمانی اتفاق می‌افتد که dependencies کامل نباشند\n" +
            "- function مقدار فعلی reactive values را نمی‌بیند\n" +
            "- باعث bugs پنهان و رفتار غیرمنتظره می‌شود\n" +
            "- با اضافه کردن صحیح dependencies حل می‌شود"
    },
    {
        "id": 203,
        "question": "Why should objects not be used directly as dependencies in hooks?",
        "options": [
            "React deeply compares objects causing performance issues",
            "Objects cannot be serialized into dependency arrays",
            "Objects are compared by reference causing unnecessary re-runs",
            "Objects cause memory leaks in react's fiber architecture"
        ],
        "correctOption":2,
        "points": 30,
        "explanation":"• objects در هر render reference جدید می‌گیرند\n" +
            "- React با === مقایسه می‌کند نه deep equality\n" +
            "- باعث re-run غیرضروری effect یا callback می‌شود\n" +
            "- باید object را memoize کنید یا properties خاص را استفاده کنید\n" +
            "- این یکی از مشکلات رایج در React است"
    },
    {
        "id": 204,
        "question": "How can you prevent unnecessary re-runs when a function causes dependency issues?",
        "options": [
            "Declare the function as a global variable",
            "Wrap the function in React.memo",
            "Move the function into the effect or memoize with useCallback",
            "Call the function conditionally to avoid dependencies"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• function را با useCallback wrap کنید\n" +
            "- یا function را داخل effect بیاورید\n" +
            "- یا function را خارج از component تعریف کنید\n" +
            "- functions در هر render دوباره ساخته می‌شوند\n" +
            "- useCallback reference ثابت ایجاد می‌کند"
    },
    {
        "id": 205,
        "question": "What is the best practice for functions that don't reference reactive values?",
        "options": [
            "Keep them inside components but wrap with useEffect",
            "Move them outside the component to avoid recreation",
            "Memoize them with useMemo for stability",
            "Convert them to static methods in React.memo"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• functions بدون reactive values را خارج از component ببرید\n" +
            "- دیگر نیازی به dependency array یا useCallback نیست\n" +
            "- performance بهتر و کد ساده‌تر می‌شود\n" +
            "- فقط زمانی داخل component بمانند که به props/state نیاز دارند\n" +
            "- این بهترین و ساده‌ترین راه است"
    },
    {
        "id": 206,
        "question": "Instead of adding entire objects as dependencies in React hooks, what is the better practice?",
        "options": [
            "Include only specific properties of the object that code actually uses.",
            "Use JSON.stringify on objects for value comparison",
            "Clone objects and memoize with useCallback",
            "Convert objects to primitive values at runtime"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• فقط properties خاصی که استفاده می‌شود را اضافه کنید\n" +
            "- مثلاً به جای user، فقط user.id اضافه کنید\n" +
            "- از re-runs غیرضروری جلوگیری می‌کند\n" +
            "- کد واضح‌تر و dependency list خواناتر می‌شود\n" +
            "- یکی از بهترین practices در React است"
    },
    {
        "id": 207,
        "question": "How can you fix objects that don't work correctly as dependencies?",
        "options": [
            "Wrap objects in React.memo to prevent recreation",
            "Place objects inside state variables for deep comparison",
            "Convert objects into functions and call inside useEffect",
            "Move or memoize objects to keep references stable"
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• object را با useMemo wrap کنید تا reference ثابت شود\n" +
            "- یا object را خارج از component ببرید\n" +
            "- یا فقط properties لازم را در deps بگذارید\n" +
            "- useMemo فقط زمان تغییر dependencies object جدید می‌سازد\n" +
            "- مشکل reference equality حل می‌شود"
    },
    {
        "id": 208,
        "question":  "What pattern works better when you have multiple related reactive values?",
        "options": [
            "Store them inside useRef to avoid re-renders",
            "Combine them with useReducer for stability",
            "Merge them into one object and stringify for comparison",
            "Wrap them all in useMemo for shorter dependency arrays"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• useReducer برای state مرتبط بهتر از useState جداگانه است\n" +
            "- همه state در یک object می‌آید\n" +
            "- dispatch function stable است و نیاز به deps ندارد\n" +
            "- logic به reducer منتقل می‌شود\n" +
            "- dependency arrays ساده‌تر و کوتاه‌تر می‌شوند"
    },
    {
        "id": 209,
        "question": "Why is useEffect often described as an 'escape hatch' in React?",
        "options": [
            "It allows side effects when props or state change",
            "It's the primary mechanism for all business logic",
            "It ensures synchronous rendering with immediate DOM updates",
            "It bypasses react's reconciliation algorithm safely"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• useEffect برای synchronization با سیستم‌های خارج از React است\n" +
            "- مثل APIs، DOM، subscriptions\n" +
            "- نباید برای orchestration بین state ها استفاده شود\n" +
            "- اکثر موارد با derived state یا event handlers حل می‌شود\n" +
            "- فقط زمانی که واقعاً نیاز است استفاده کنید"
    },
    {
        "id": 210,
        "question":"Why should useEffect be considered a last resort?",
        "options": [
            "useEffect causes memory leaks by default",
            "React discourages side effects entirely",
            "Most effects can be avoided by deriving state or using event handlers",
            "useEffect blocks rendering until completion"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• اغلب می‌توان از useEffect اجتناب کرد\n" +
            "- derived state بهتر از effect برای محاسبات است\n" +
            "- event handlers بهتر از effect برای user actions هستند\n" +
            "- effects باعث پیچیدگی و bugs می‌شوند\n" +
            "- ابتدا راه‌های دیگر را بررسی کنید"
    },
    {
        "id": 211,
        "question": "Which is NOT a recommended use case for useEffect?",
        "options": [
            "Synchronizing external systems when props change",
            "Updating state in response to user button clicks",
            "Fetching data on component mount",
            "Subscribing to global events with cleanup"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• برای response به user interactions از event handlers استفاده کنید\n" +
            "- useEffect برای side effects پس از render است\n" +
            "- onClick بهتر از useEffect برای button clicks است\n" +
            "- effect نباید جایگزین event handlers شود\n" +
            "- هر کدام use case خاص خود را دارند"
    },
    {
        "id": 211,
        "question": "What is the recommended way to synchronize multiple state variables?",
        "options": [
            "Derive one state from another or use a single reducer",
            "Use multiple useEffect hooks for each state variable",
            "Store related states in a ref object and mutate directly",
            "Use context providers to automatically sync states"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• یک state را از دیگری derive کنید\n" +
            "- یا از useReducer برای state مرتبط استفاده کنید\n" +
            "- نیازی به useEffect برای sync کردن نیست\n" +
            "- این ساده‌تر و کم bug تر است\n" +
            "- از ایجاد infinite loops جلوگیری می‌کند"
    },
//{
//     "id": 212,
//     "question": "What is lifting state up in React?",
//     "options": [
//         "Moving state to higher component in tree",
//         "Optimizing state for performance",
//         "Converting state to props",
//         "Removing state from components"
//     ],
//     "correctOption": 0,
//     "points": 10,
//                 "explanation":""
// },
// {
//     "id": 213,
//     "question": "When should you lift state up?",
//     "options": [
//         "Always lift all state to root",
//         "When multiple components need same state",
//         "Never lift state, use Context instead",
//         "Only for performance optimization"
//     ],
//     "correctOption": 1,
//     "points": 20,
//                 "explanation":""
// },
// {
//     "id": 214,
//     "question": "What is derived state in React?",
//     "options": [
//         "State inherited from parent component",
//         "State calculated from existing state or props",
//         "State fetched from external API",
//         "State stored in localStorage"
//     ],
//     "correctOption": 1,
//     "points": 20,
//                 "explanation":""
// },
// {
//     "id": 215,
//     "question": "Why should you avoid storing derived state?",
//     "options": [
//         "Derived state is slower to access",
//         "It can become out of sync with source",
//         "React doesn't support derived state",
//         "It increases bundle size significantly"
//     ],
//     "correctOption": 1,
//     "points": 30,
//                 "explanation":""
// },
// {
//     "id": 216,
//     "question": "What is the single source of truth principle?",
//     "options": [
//         "Using only one state management library",
//         "One component controls all application state",
//         "Each piece of state has one authoritative source",
//         "Truth values must be boolean type"
//     ],
//     "correctOption": 2,
//     "points": 20,
//                 "explanation":""
// },
// {
//     "id": 217,
//     "question": "What is state colocation in React?",
//     "options": [
//         "Placing all state in root component",
//         "Keeping state close to where it's used",
//         "Storing state in external database",
//         "Combining multiple states into one"
//     ],
//     "correctOption": 1,
//     "points": 20,
//                 "explanation":""
// },
// {
//     "id": 218,
//     "question": "When should you use useReducer instead of useState?",
//     "options": [
//         "Always use useReducer for better performance",
//         "For complex state logic with multiple sub-values",
//         "Never, useState is always sufficient",
//         "Only in Class Components"
//     ],
//     "correctOption": 1,
//     "points": 30,
//                 "explanation":""
// },
// {
//     "id": 219,
//     "question": "What is state normalization in React?",
//     "options": [
//         "Converting state to normal distribution",
//         "Flattening nested state structure with IDs",
//         "Validating state before updates",
//         "Synchronizing state with server"
//     ],
//     "correctOption": 1,
//     "points": 30,
//                 "explanation":""
// },
    {
        "id": 220,
        "question":  "What causes the stale closure problem in effects or callbacks?",
        "options": [
            "Functions automatically rebind to latest state and props",
            "Functions hold snapshots from when they were created",
            "React intentionally freezes state values after initial render",
            "Closures only work with primitive values in JavaScript"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• functions snapshot از مقادیر زمان ایجاد را نگه می‌دارند\n" +
            "- اگر reactive values در deps نباشند، مقادیر قدیمی را می‌بینند\n" +
            "- JavaScript closure چنین رفتار می‌کند\n" +
            "- React این مشکل را با dependency arrays حل می‌کند\n" +
            "- همیشه تمام reactive values را اضافه کنید"
    },
    {
        "id": 221,
        "question":"What is the best way to prevent the stale closure problem?",
        "options": [
            "Always use global variables instead of state",
            "Freeze objects in state for consistency",
            "Add current state or props as dependencies",
            "Avoid using closures in React components"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• همه reactive values را در dependency array قرار دهید\n" +
            "- ESLint warnings را جدی بگیرید و رفع کنید\n" +
            "- از useCallback/useMemo برای stability استفاده کنید\n" +
            "- یا functions را داخل effect بیاورید\n" +
            "- testing به شناسایی این bugs کمک می‌کند"
    },
    {
        id: 222,
        question: "What is Redux?",
        options: [
            "A predictable state management library",
            "A library for styling React components",
            "A built-in React API for managing side effects",
            "A tool for minifying JavaScript bundles"
        ],
        correctOption: 0,
        points: 10,
        "explanation": "• Redux یک کتابخانه state management پیش‌بینی‌پذیر است\n" +
            "- state را در یک store مرکزی نگه می‌دارد\n" +
            "- با actions و reducers state را update می‌کند\n" +
            "- مستقل از React است اما با آن کار می‌کند\n" +
            "- برای state management پیچیده مناسب است"
    },
    {
        id: 223,
        question: "Is Redux specific to React applications?",
        "options": [
            "Yes, it only works with React",
            "No, it only works with Angular applications",
            "No, it can be used with any JavaScript application",
            "Yes, Redux is part of React core"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• Redux مستقل از React است\n" +
            "- می‌تواند با Angular، Vue یا vanilla JS استفاده شود\n" +
            "- react-redux برای اتصال به React استفاده می‌شود\n" +
            "- Redux یک الگوی architecture است نه React-specific\n" +
            "- اما بیشتر در اکوسیستم React استفاده می‌شود"
    },
    {
        id: 224,
        question: "Why must Redux reducers avoid asynchronous operations?",
        options: [
            "Async operations make reducers unpredictable",
            "Reducers cannot return promises in JavaScript",
            "Async operations always cause memory leaks",
            "Reducers can only process primitive data types"
        ],
        correctOption: 0,
        points: 20,
        "explanation": "• reducers باید pure functions باشند\n" +
            "- async operations نتایج غیرقابل پیش‌بینی دارند\n" +
            "- Redux به synchronous updates متکی است\n" +
            "- برای async از middleware مثل Redux Thunk استفاده کنید\n" +
            "- purity باعث قابلیت test و debug می‌شود"
    },
    {
        id: 225,
        question:  "What is the primary difference between Redux and useReducer?",
        options: [
            "Redux is synchronous, useReducer is asynchronous",
            "Redux manages global state, useReducer manages local state",
            "Redux handles styling, useReducer manages state",
            "Redux stores strings, useReducer handles objects"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• Redux برای global state در کل برنامه است\n" +
            "- useReducer برای local state در یک کامپوننت است\n" +
            "- Redux middleware، DevTools و ecosystem دارد\n" +
            "- useReducer ساده‌تر و بدون dependency اضافی است\n" +
            "- Redux برای state پیچیده shared بهتر است"
    },
    {
        id: 226,
        question: "Why use multiple reducers in a Redux application?",
        options: [
            "Manage different parts of state separately",
            "Create duplicate copies of state logic",
            "Reduce total application bundle size significantly",
            "Make all reducers asynchronous by default"
        ],
        correctOption: 0,
        points: 20,
        "explanation": "• هر reducer بخش مشخصی از state را مدیریت می‌کند\n" +
            "- کد سازمان‌یافته‌تر و قابل نگهداری‌تر می‌شود\n" +
            "- combineReducers آن‌ها را به یک root reducer ترکیب می‌کند\n" +
            "- هر تیم می‌تواند روی reducer خود کار کند\n" +
            "- testing و debugging ساده‌تر می‌شود"
    },
    {
        id: 227,
        question:"What is an action creator in Redux?",
        options: [
            "A reducer that updates state directly",
            "A function returning action objects",
            "A function removing actions from memory",
            "Middleware that delays action execution timing"
        ],
        correctOption: 1,
        points: 10,
        "explanation": "• action creator تابعی است که action object برمی‌گرداند\n" +
            "- از hard-coding action types جلوگیری می‌کند\n" +
            "- می‌تواند payload را به عنوان argument بگیرد\n" +
            "- کد را خواناتر و قابل استفاده مجدد می‌کند\n" +
            "- در Redux Toolkit به صورت خودکار ساخته می‌شوند"
    },
    {
        id: 228,
        question:  "What advantage does Redux offer over Context API?",
        options: [
            "Context generates reducers automatically for developers",
            "Redux is used only for styling",
            "Redux provides middleware and debugging tools",
            "Context works only with React frameworks"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• Redux middleware برای side effects و async logic دارد\n" +
            "- DevTools قدرتمند برای debugging و time-travel\n" +
            "- Performance بهتر برای updates مکرر\n" +
            "- Ecosystem غنی از کتابخانه‌ها و tools\n" +
            "- الگوهای استاندارد برای state management پیچیده"
    },
    {
        id: 229,
        question: "How does Redux differ from useState?",
        options: [
            "Redux handles only async API requests",
            "useState saves to localStorage automatically",
            "useState works only with class components",
            "Redux handles global, useState local state"
        ],
        correctOption: 3,
        points: 20,
        "explanation" : "• Redux برای global state در سراسر برنامه است\n" +
            "- useState برای local state در یک کامپوننت است\n" +
            "- Redux state قابل اشتراک بین همه کامپوننت‌ها\n" +
            "- useState ساده‌تر برای state ساده است\n" +
            "- Redux برای state پیچیده و shared مناسب‌تر است"
    },
    {
        id: 230,
        question: "Why don't modern React apps need Redux?",
        options: [
            "Redux cannot work with TypeScript projects",
            "React provides useState, useReducer, Context API",
            "Redux is deprecated and no longer supported",
            "React apps don't need state management"
        ],
        correctOption: 1,
        points: 20,
        "explanation": "• React حالا useState، useReducer و Context API دارد\n" +
            "- کتابخانه‌های مثل React Query برای server state بهترند\n" +
            "- بیشتر برنامه‌ها state پیچیده global ندارند\n" +
            "- Redux complexity اضافی برای پروژه‌های کوچک است\n" +
            "- اما برای state management پیچیده هنوز مفید است"
    },
    {
        id: 231,
        question: "Which state is best managed locally?",
        options: [
            "Remote data from external APIs",
            "Global state shared between applications",
            "UI state like modals and inputs",
            "Server-side database state for users"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• UI state مثل modals، tabs، forms بهتر است local باشد\n" +
            "- state که فقط یک کامپوننت نیاز دارد\n" +
            "- temporary state مثل input values\n" +
            "- loading و error states خاص یک feature\n" +
            "- state که نیازی به sharing ندارد"
    },
    {
        id: 232,
        question: "Which state requires global management tools?",
        options: [
            "UI state like active tab selection",
            "Temporary variables in function scope",
            "CSS class toggles for styling",
            "Remote state like user API data"
        ],
        correctOption: 3,
        points: 20,
        "explanation": "• remote state (server data) با React Query بهتر مدیریت می‌شود\n" +
            "- authentication state که در همه جا نیاز است\n" +
            "- theme، language و user preferences\n" +
            "- shopping cart و checkout state\n" +
            "- هر state که بین صفحات مختلف share می‌شود"
    },
    {
        id: 233,
        question: "Best approach for combining UI and remote state?",
        options: [
            "Keep UI local, manage remote globally",
            "Store all state in APIs only",
            "Move everything to Redux without exceptions",
            "Store UI state on server always"
        ],
        correctOption: 0,
        points: 20,
        "explanation": "• UI state را local (useState/useReducer) نگه دارید\n" +
            "- remote state را با React Query یا SWR مدیریت کنید\n" +
            "- هر کدام ابزار مناسب خود را دارند\n" +
            "- mixing آن‌ها باعث پیچیدگی می‌شود\n" +
            "- separation of concerns را رعایت کنید"
    },
    {
        id: 234,
        question: "Most effective tool for managing remote state?",
        options: [
            "useReducer hook only for state management",
            "Plain Redux without any middleware support",
            "Manual fetch with setInterval polling continuously",
            "React Query or similar data-fetching libraries"
        ],
        correctOption: 3,
        points: 20,
        "explanation": "• React Query یا SWR برای server state طراحی شده‌اند\n" +
            "- caching، refetching و synchronization خودکار\n" +
            "- loading و error states را مدیریت می‌کنند\n" +
            "- optimistic updates و mutations\n" +
            "- بهتر از Redux + manual fetch هستند"
    },
    {
        id: 235,
        question: "Why has Redux adoption decreased recently?",
        options: [
            "React removed Redux support in versions",
            "Redux only works with outdated React",
            "Remote state better handled by specialized libraries",
            "Redux cannot store complex data structures"
        ],
        correctOption: 2,
        points: 20,
        "explanation": "• کتابخانه‌های specialized مثل React Query بهترند\n" +
            "- Context API برای state ساده کافی است\n" +
            "- Redux boilerplate زیاد برای پروژه‌های کوچک\n" +
            "- بیشتر state در برنامه‌ها server state است\n" +
            "- tools مدرن‌تر و ساده‌تر وجود دارند"
    },
    {
        id: 236,
        question: "What defines the ideal Redux use case?",
        options: [
            "Single component with local state only",
            "Styling multiple components with CSS frameworks",
            "Making asynchronous API calls exclusively for data",
            "Frequent state updates across many components"
        ],
        correctOption: 3,
        points: 20,
        "explanation": "• state پیچیده که در بسیاری از کامپوننت‌ها نیاز است\n" +
            "- updates مکرر و frequent از جاهای مختلف\n" +
            "- نیاز به middleware برای async logic\n" +
            "- debugging پیشرفته با DevTools\n" +
            "- برنامه‌های بزرگ با تیم‌های متعدد"
    },
    {
        id: 237,
        question: "What is the key difference between UI state and remote state?",
        options: [
            "UI state requires HTTP requests, remote state is static",
            "UI state is local to components, remote state comes from servers",
            "UI state needs Redux, remote state needs Context API",
            "UI state persists forever, remote state is temporary"
        ],
        correctOption: 1,
        points: 20,
        "explanation": "• UI state local به کامپوننت است (modals، forms)\n" +
            "- remote state از server می‌آید و sync نیاز دارد\n" +
            "- UI state با useState/useReducer خوب است\n" +
            "- remote state با React Query بهتر مدیریت می‌شود\n" +
            "- هر کدام challenges و solutions متفاوت دارند"
    },
    {

        id: 238,
        question: "When should you choose Redux over Context API with useReducer?",
        options: [
            "For complex state with frequent updates across many components",
            "For small applications with minimal state needs",
            "When all updates happen within single component tree",
            "When avoiding external dependencies is priority"
        ],
        correctOption: 0,
        points: 30,
        "explanation": "• وقتی state پیچیده و در همه جا نیاز است\n" +
            "- updates بسیار مکرر که performance مهم است\n" +
            "- نیاز به middleware برای async logic\n" +
            "- debugging پیشرفته و time-travel لازم است\n" +
            "- تیم بزرگ و نیاز به structure استاندارد"
    },
    {
        id: 239,
        question: "What is the key difference between Redux and useReducer?",
        options: [
            "useReducer has middleware, Redux handles async",
            "Redux is synchronous, useReducer is asynchronous",
            "Redux is global with middleware, useReducer is local",
            "They function identically with no differences"
        ],
        correctOption: 2,
        points: 30,
        "explanation": "• Redux global store با middleware support دارد\n" +
            "- useReducer local state در یک کامپوننت است\n" +
            "- Redux DevTools و ecosystem قدرتمند دارد\n" +
            "- useReducer ساده‌تر و built-in React است\n" +
            "- Redux برای sharing state بین کامپوننت‌ها بهتر است"
    },
    {   id: 240,
        question: "What is the main responsibility of the Redux store?",
        options: [
            "Directly render UI components into the DOM",
            "Automatically fetch and manage remote data for components",
            "Generate and dispatch action creators for updating state",
            "Hold state tree and manage updates via  reducers"
        ],
        correctOption: 3,
        points: 20,
        "explanation": "• store تمام state tree برنامه را نگه می‌دارد\n" +
            "- actions را دریافت و به reducers ارسال می‌کند\n" +
            "- state updates را از طریق reducers مدیریت می‌کند\n" +
            "- به کامپوننت‌ها اجازه subscribe کردن می‌دهد\n" +
            "- middleware pipeline را اجرا می‌کند"
    },
    {
        id: 241,
        question: "Why use multiple reducers in a Redux store?",
        options: [
            "Enable parallel execution of actions",
            "Organize state into focused, manageable slices",
            "Manage React component lifecycle",
            "Handle styling and rendering separately"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• state را به slices منطقی تقسیم می‌کند\n" +
            "- هر reducer مسئولیت مشخصی دارد\n" +
            "- کد سازمان‌یافته‌تر و قابل maintenance است\n" +
            "- team members می‌توانند مستقل کار کنند\n" +
            "- combineReducers آن‌ها را merge می‌کند"
    },
    {
        id: 242,
        question: "What is the purpose of an action creator in Redux?",
        options: [
            "Directly modify state in the store",
            "Return an action object describing state change",
            "Render UI based on dispatched actions",
            "Combine multiple reducers into one"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• تابعی که action object می‌سازد و return می‌کند\n" +
            "- از hard-coding action types جلوگیری می‌کند\n" +
            "- payload را به صورت parameter می‌گیرد\n" +
            "- consistency و reusability را تضمین می‌کند\n" +
            "- در Redux Toolkit خودکار generate می‌شوند"
    },
    {
        id: 243,
        question: "Why separate state logic from components in Redux?",
        "options": [
            "To prevent Redux DevTools from being triggered",
            "To reduce the final bundle size of the application",
            "To make code predictable, maintainable, and debuggable",
            "To avoid using React components for state updates"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• separation of concerns را رعایت می‌کند\n" +
            "- logic قابل test بدون UI می‌شود\n" +
            "- کامپوننت‌ها ساده‌تر و focused می‌شوند\n" +
            "- state logic قابل reuse در جاهای مختلف است\n" +
            "- debugging و maintenance آسان‌تر می‌شود"
    },
    {
        id: 244,
        question: "Which tool best handles server state in modern React apps?",
        "options": [
            "Redux with a single global store for all state types",
            "Context API for passing remote data through component tree",
            "React Query for caching, fetching, and syncing server state",
            "useReducer hook for managing local component state"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• React Query برای server state optimization شده\n" +
            "- caching، refetching و synchronization خودکار\n" +
            "- loading، error و success states\n" +
            "- optimistic updates و mutations\n" +
            "- بهتر از Redux برای این use case است"

    },
    {
        id: 245,
        question: "What performance issue arises with Context for frequently changing state?",
        "options": [
            "Context API cannot pass data to deeply nested components",
            "Frequent updates cause unnecessary re-renders in all consumers",
            "Context API is only designed for styling and theming",
            "Context API requires Redux to handle any state properly"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• تغییر Context باعث re-render همه consumers می‌شود\n" +
            "- حتی اگر consumer فقط بخشی از data را بخواهد\n" +
            "- برای frequent updates performance problem ایجاد می‌کند\n" +
            "- باید Context را split کنید یا از useMemo استفاده کنید\n" +
            "- Redux برای این موارد بهتر optimize شده"

    },
    {
        id: 246,
        question: "Why do modern React apps often not need Redux for remote state?",
        "options": [
            "Redux has been deprecated and is no longer supported",
            "Context API fully replaces Redux for all state management",
            "Redux cannot manage remote data in React applications",
            "Libraries like React Query handle server state more effectively"
        ],
        correctOption: 3,
        points: 20,
        "explanation":"• React Query و SWR برای server state بهتر هستند\n" +
            "- caching، invalidation و refetching خودکار\n" +
            "- code کمتر و ساده‌تر نسبت به Redux\n" +
            "- focus روی server state challenges است\n" +
            "- Redux برای UI state global هنوز مفید است"

    },
    {
        id: 247,
        question: "Why has Redux adoption decreased recently?",
        "options": [
            "React automatically handles all state management internally",
            "Most global state is remote and better handled by specialized libraries",
            "Redux no longer works with current React versions",
            "UI state requirements have become too complex for Redux"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• اکثر global state در واقع remote state است\n" +
            "- tools مثل React Query این کار را بهتر انجام می‌دهند\n" +
            "- Context API برای UI state ساده کافی است\n" +
            "- Redux Toolkit boilerplate را کاهش داد اما هنوز پیچیده است\n" +
            "- ecosystem React به ابزارهای specialized رفته"

    },
    {
        "id": 248,
        "question": "What is the primary role of middleware in Redux?",
        "options": [
            "To let components update state directly without reducers",
            "To intercept actions and run additional logic",
            "To replace reducers with custom asynchronous handlers",
            "To make the store update automatically without dispatch"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• middleware بین dispatch و reducer قرار می‌گیرد\n" +
            "- actions را intercept و modify می‌کند\n" +
            "- امکان async logic و side effects را می‌دهد\n" +
            "- logging، error reporting و analytics\n" +
            "- Redux Thunk و Saga examples از middleware هستند"
    },
    {
        "id": 249,
        "question":"Where should side effects like API calls be handled in Redux?",
        "options": [
            "Inside reducer functions",
            "Inside middleware or thunks",
            "Directly in React components only",
            "Inside the store configuration"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• در middleware مثل Redux Thunk یا Saga\n" +
            "- reducers باید pure و بدون side effects باشند\n" +
            "- thunks به store و dispatch دسترسی دارند\n" +
            "- می‌توانند async operations انجام دهند\n" +
            "- بعد از completion، action dispatch می‌کنند"
    },
    {
        "id": 250,
        "question": "What is the main purpose of Redux Thunk?",
        "options": [
            "Defer rendering until data is ready",
            "Optimize reducers by memoizing updates",
            "Prevent unnecessary component re-renders",
            "Handle async logic before dispatching actions"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• Thunk امکان dispatch کردن functions را می‌دهد\n" +
            "- functions می‌توانند async logic داشته باشند\n" +
            "- API calls و side effects در thunks انجام می‌شوند\n" +
            "- بعد از completion، actions dispatch می‌کنند\n" +
            "- ساده‌ترین middleware برای async است"
    },
    {
        "id": 251,
        "question": "What enables Redux to handle asynchronous operations before updating state?",
        "options": [
            "Reducer functions",
            "Store configuration",
            "Thunk middleware",
            "Component lifecycle methods"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• middleware مثل Thunk این امکان را می‌دهد\n" +
            "- action creators می‌توانند functions return کنند\n" +
            "- functions می‌توانند async باشند\n" +
            "- بعد از async work، action واقعی dispatch می‌شود\n" +
            "- reducer سپس state را update می‌کند"
    },
    {
        "id": 252,
        "question": "Which feature is NOT provided by Redux Toolkit?",
        "options": [
            "createSlice for reducing boilerplate code",
            "createAsyncThunk for handling async logic",
            "Built-in support for Immer library",
            "Class-based component lifecycle methods"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• Redux Toolkit برای simplifying Redux است\n" +
            "- createSlice، configureStore و createAsyncThunk دارد\n" +
            "- Immer برای immutable updates built-in است\n" +
            "- اما lifecycle methods مربوط به class components است\n" +
            "- Redux Toolkit با function components و hooks کار می‌کند"
    },
    {
        "id": 253,
        "question":"Which capability is NOT provided by createSlice?",
        "options": [
            "Automatically generates action creators and types",
            "Allows writing mutable-looking code safely with Immer",
            "Eliminates the need to configure a Redux store",
            "Reduces boilerplate by combining state, reducers, and actions"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• createSlice reducer، actions و types می‌سازد\n" +
            "- Immer برای mutable-looking code دارد\n" +
            "- boilerplate را کاهش می‌دهد\n" +
            "- اما store configuration را انجام نمی‌دهد\n" +
            "- برای store از configureStore استفاده کنید"
    },
    {
        "id": 254,
        "question":"Which library lets you write mutable-looking code in Redux Toolkit?",
        "options": [
            "Thunk for async operations",
            "Saga for side effects",
            "Selector for derived state",
            "Immer for state updates"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• Immer به صورت خودکار در Redux Toolkit است\n" +
            "- می‌توانید state را مستقیماً modify کنید\n" +
            "- Immer آن را به immutable updates تبدیل می‌کند\n" +
            "- کد ساده‌تر و خواناتر می‌شود\n" +
            "- در پشت صحنه draft state استفاده می‌کند"
    },
    {
        "id": 255,
        "question": "Which Redux Toolkit API combines reducers and action creators?",
        "options": [
            "createSlice",
            "configureStore",
            "combineReducers",
            "applyMiddleware"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• createSlice هم reducers و هم actions می‌سازد\n" +
            "- یک object با name، initialState و reducers می‌گیرد\n" +
            "- action creators را خودکار generate می‌کند\n" +
            "- action types را خودکار می‌سازد\n" +
            "- boilerplate Redux را به شدت کاهش می‌دهد"
    },
    {
        "id": 256,
        "question": "Which function sets up the store with built-in middleware and DevTools?",
        "options": [
            "createReducer",
            "createStore",
            "configureStore",
            "setupStore"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• configureStore تنظیم store را ساده می‌کند\n" +
            "- Redux DevTools به صورت خودکار setup می‌شود\n" +
            "- Thunk middleware پیش‌فرض اضافه می‌شود\n" +
            "- development checks برای common mistakes\n" +
            "- جایگزین createStore + applyMiddleware است"
    },
    {
        "id": 257,
        "question": "What is the recommended naming convention for Redux action types?",
        "options": [
            "Single word names only",
            "Event name only",
            "Random strings for uniqueness",
            "Domain/event pattern"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• pattern 'domain/eventName' توصیه می‌شود\n" +
            "- مثل 'todos/todoAdded' یا 'users/userLoggedIn'\n" +
            "- واضح می‌کند action به کدام بخش مربوط است\n" +
            "- در Redux Toolkit خودکار این pattern استفاده می‌شود\n" +
            "- DevTools و debugging را بهتر می‌کند"
    },
    {
        "id": 258,
        "question":  "How are action creators handled in createSlice?",
        "options": [
            "Must be written manually by the developer",
            "Auto-generated, accept one payload argument",
            "Require multiple arguments for each action call",
            "Cannot be accessed outside of the slice logic"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• createSlice خودکار action creators می‌سازد\n" +
            "- برای هر reducer یک action creator ساخته می‌شود\n" +
            "- فقط یک argument (payload) می‌گیرند\n" +
            "- نیازی به نوشتن دستی نیست\n" +
            "- در slice.actions در دسترس هستند"
    },
    {
        "id": 259,
        "question": "What is the primary purpose of createSlice?",
        "options": [
            "Installs external libraries for async handling",
            "Manages routing and navigation inside React apps",
            "Defines reducers and generates actions creators together",
            "Creates global styles for components in the project"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• ساده‌سازی ساخت Redux logic است\n" +
            "- reducers و action creators را با هم می‌سازد\n" +
            "- action types را خودکار generate می‌کند\n" +
            "- از Immer برای immutability استفاده می‌کند\n" +
            "- boilerplate را به شدت کاهش می‌دهد"
    },
    {
        "id": 260,
        "question": "What is true about reducers inside createSlice?",
        "options": [
            "Always return a completely new object",
            "Can write code that appears to mutate state due to Immer",
            "Cannot use payload values from dispatched actions",
            "Only work if written as pure asynchronous functions component"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• می‌توانید state را مستقیماً modify کنید\n" +
            "- Immer این کار را به immutable تبدیل می‌کند\n" +
            "- کد ساده‌تر و خواناتر می‌شود\n" +
            "- در واقع draft state را modify می‌کنید\n" +
            "- نیازی به spread operator نیست"
    },
    {
        "id": 261,
        "question": "How are action creators provided in createSlice?",
        "options": [
            "Created manually in separate file",
            "Only available with middleware",
            "Auto-generated based on reducer names",
            "Must be imported from Redux"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• بر اساس نام reducers خودکار ساخته می‌شوند\n" +
            "- در slice.actions در دسترس هستند\n" +
            "- همان نام reducer را دارند\n" +
            "- argument آن‌ها به payload تبدیل می‌شود\n" +
            "- نیازی به نوشتن manual نیست"
    },
    {
        "id": 262,
        "question": "What is a key advantage of createSlice over traditional Redux?",
        "options": [
            "Reduces boilerplate by combining related logic",
            "Prevents React components from re-rendering",
            "Adds built-in routing and query string support",
            "Eliminates the need for any store or middleware"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• تمام logic مرتبط در یک جا است\n" +
            "- کد کمتر و خواناتر\n" +
            "- action types، creators و reducers خودکار\n" +
            "- از اشتباهات رایج جلوگیری می‌کند\n" +
            "- maintenance و refactoring آسان‌تر است"
    },
    {
        "id": 263,
        "question": "What does createSlice return?",
        "options": [
            "collection of selectors for reading global state",
            "Middleware that listens for dispatched actions",
            "Reducer function and auto-generated actions creators",
            "Hook that manages asynchronous API requests"
        ],
        "correctOption":2,
        "points": 20,
        "explanation":"• یک object با reducer و actions برمی‌گرداند\n" +
            "- slice.reducer برای store استفاده می‌شود\n" +
            "- slice.actions شامل action creators است\n" +
            "- slice.name نام slice است\n" +
            "- slice.caseReducers reducers داخلی هستند"
    },
    {
        "id": 264,
        "question":  "How are reducers typically written inside createSlice?",
        "options": [
            "As JSX components that render data from the store",
            "As lifecycle hooks that are triggered by React updates",
            "As asynchronous functions that always await API responses",
            "As functions that directly modify state using Immer",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• به صورت مستقیم state را modify می‌کنید\n" +
            "- مثل state.value += 1 یا state.items.push(item)\n" +
            "- Immer این را به immutable updates تبدیل می‌کند\n" +
            "- خیلی ساده‌تر از spread operators است\n" +
            "- کد مثل mutating معمولی است"
    },
    {
        "id": 265,
        "question":"What does createSlice automatically generate based on the reducer functions you define?",
        "options": [
            "Middleware functions for handling async operations",
            "Action creators with the same names as the reducers",
            "Component hooks for state management",
            "CSS classes for styling components"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• action creators با همان نام reducers ساخته می‌شوند\n" +
            "- action types به صورت 'sliceName/reducerName'\n" +
            "- argument به action.payload تبدیل می‌شود\n" +
            "- نیازی به define کردن جداگانه نیست\n" +
            "- consistency و کاهش اشتباه تضمین می‌شود"
    },
    {
        id: 266,
        question: "How many parameters do createSlice action creators accept?",
        options: [
            "Zero - always called without arguments",
            "One - payload value becoming action.payload",
            "Two - type and payload separately",
            "Multiple - as many as defined in reducer"
        ],
        correctOption: 1,
        points: 10,
        "explanation":"• فقط یک parameter که به payload تبدیل می‌شود\n" +
            "- برای چند parameter از object استفاده کنید\n" +
            "- یا از prepare callback استفاده کنید\n" +
            "- API ساده و consistent است\n" +
            "- بیشتر use cases را cover می‌کند"

    },
    {
        id: 267,
        question: "What does Immer enable in createSlice reducers?",
        options: [
            "Automatically fetch data from APIs",
            "Create multiple store instances",
            "Write mutable-looking code while maintaining immutability",
            "Generate TypeScript types automatically"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• نوشتن کد mutable-looking اما immutable واقعی\n" +
            "- Immer draft state ایجاد می‌کند\n" +
            "- تغییرات را track و immutable copy می‌سازد\n" +
            "- کد خیلی ساده‌تر از spread operators\n" +
            "- در Redux Toolkit built-in است"

    },
    {
        id: 268,
        question: "Which property in createSlice contains state update functions?",
        options: [
            "reducers field with case reducer functions",
            "actions field with action creator definitions",
            "middleware field with side effect handlers",
            "selectors field with state access functions"
        ],
        correctOption: 0,
        points: 20,
        "explanation":"• reducers field شامل case reducer functions است\n" +
            "- هر reducer یک action type را handle می‌کند\n" +
            "- state و action را می‌گیرند\n" +
            "- می‌توانند state را modify کنند (با Immer)\n" +
            "- خودکار action creators ساخته می‌شوند"
    },
    {
        id: 269,
        question: "What naming pattern do createSlice action types follow?",
        options: [
            "SLICE_NAME_REDUCER_NAME (e.g., 'COUNTER_INCREMENT')",
            "sliceName/reducerName (e.g., 'counter/increment')",
            "reducerName_sliceName (e.g., 'increment_counter')",
            "Random UUID strings for uniqueness"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• pattern 'sliceName/reducerName' استفاده می‌شود\n" +
            "- مثل 'counter/increment' یا 'todos/add'\n" +
            "- خودکار generate می‌شوند\n" +
            "- واضح و descriptive هستند\n" +
            "- در DevTools و debugging مفید است"

    },
    {
        id: 270,
        question: "How do you export the main reducer from createSlice?",
        options: [
            "Export slice.reducer from slice object",
            "Export slice.actions.reducer from slice",
            "Export createReducer(slice) as function",
            "Export slice.store as complete reducer"
        ],
        correctOption: 0,
        points: 10,
        "explanation":"• slice.reducer را export می‌کنید\n" +
            "- این reducer در configureStore استفاده می‌شود\n" +
            "- معمولاً به صورت default export\n" +
            "- slice.actions را هم export می‌کنید\n" +
            "- برای استفاده در کامپوننت‌ها"
    },
    {
        id: 271,
        question: "Which Redux boilerplate does createSlice eliminate?",
        options: [
            "Writing separate action creators and types manually",
            "Configuring store and middleware setup",
            "Creating component-level state hooks",
            "Defining routing and navigation logic"
        ],
        correctOption: 0,
        points: 20,
        "explanation":"• نوشتن جداگانه action types، creators و reducers\n" +
            "- switch statements در reducers\n" +
            "- spread operators برای immutability\n" +
            "- تکرار action type strings\n" +
            "- همه این‌ها خودکار handle می‌شوند"

    },
    {
        id: 272,
        question: "What role does initialState serve in createSlice?",
        options: [
            "Determines component rendering order",
            "Specifies which middleware to use",
            "Defines starting value for slice's state",
            "Configures development tools integration"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• مقدار اولیه state slice را مشخص می‌کند\n" +
            "- می‌تواند object، array یا primitive باشد\n" +
            "- در اولین render استفاده می‌شود\n" +
            "- structure state را define می‌کند\n" +
            "- معمولاً با TypeScript type می‌شود"

    },
    {
        id: 273,
        question: "When would you use the 'prepare' callback in createSlice?",
        options: [
            "Customize action payload before reaching reducer",
            "Define async operations after state updates",
            "Specify which components access this slice",
            "Configure Redux DevTools for debugging"
        ],
        correctOption: 0,
        points: 20,
        "explanation":"• برای customize کردن payload قبل از reducer\n" +
            "- وقتی نیاز به چند parameter دارید\n" +
            "- برای generate کردن unique IDs\n" +
            "- برای validation یا transformation\n" +
            "- object با payload و meta return می‌کند"

    },
    {
        id: 274,
        question: "Which Redux feature is NOT available in Context API?",
        options: [
            "State management with useReducer",
            "Middleware support for side effects",
            "Passing data through component tree",
            "Integration with React DevTools"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• middleware support برای async و side effects\n" +
            "- Redux DevTools برای debugging\n" +
            "- time-travel debugging\n" +
            "- centralized state management structure\n" +
            "- Context فقط برای passing data است"

    },
    {
        id: 275,
        question: "What problem occurs with multiple Context providers?",
        options: [
            "Built-in middleware becomes impossible",
            "Debugging experience is lost",
            "Async operations fail",
            "Provider hell with deeply nested wrappers"
        ],
        correctOption: 3,
        points: 20,
        "explanation":"• provider hell با nested wrappers عمیق\n" +
            "- کد خوانایی کمتری دارد\n" +
            "- refactoring سخت‌تر می‌شود\n" +
            "- performance issues با re-renders\n" +
            "- Redux این مشکل را با single store حل می‌کند"

    },
    {
        id: 276,
        question: "Which scenario best suits Redux over Context API?",
        options: [
            "Passing theme colors through tree",
            "Managing frequently changing state across many components",
            "Sharing auth status between pages",
            "Providing translations to components"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• state پیچیده که frequently update می‌شود\n" +
            "- بسیاری از کامپوننت‌ها به آن نیاز دارند\n" +
            "- نیاز به middleware برای async logic\n" +
            "- debugging پیشرفته لازم است\n" +
            "- Context برای frequent updates slow است"

    },
    {
        id: 277,
        question: "What debugging advantage does Redux provide over Context?",
        options: [
            "Automatic error boundary creation",
            "Built-in TypeScript support",
            "Time-travel debugging with DevTools",
            "Faster component rendering"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• Redux DevTools قدرتمند برای inspect کردن state\n" +
            "- time-travel debugging برای undo/redo\n" +
            "- action history و state changes قابل مشاهده\n" +
            "- state diff بین actions\n" +
            "- Context چنین ابزارهایی ندارد"

    },
    {
        id: 278,
        question: "What is a disadvantage of Redux compared to Context?",
        options: [
            "Built into React natively",
            "Requires additional packages and setup",
            "Cannot handle async operations",
            "Only provides DevTools support"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• نیاز به نصب packages اضافی (redux، react-redux)\n" +
            "- learning curve بالاتر\n" +
            "- boilerplate بیشتر (حتی با Redux Toolkit)\n" +
            "- setup پیچیده‌تر\n" +
            "- Context built-in React است"

    },
    {
        id: 279,
        question: "Why can Context cause performance issues with frequent updates?",
        options: [
            "Automatically re-renders all consumers",
            "Cannot be split into smaller providers",
            "Requires manual optimization",
            "Doesn't support memoization"
        ],
        correctOption: 0,
        points: 20,
        "explanation":"• هر تغییر Context همه consumers را re-render می‌کند\n" +
            "- حتی اگر consumer فقط بخشی از data بخواهد\n" +
            "- optimization سخت است\n" +
            "- برای frequent updates مناسب نیست\n" +
            "- Redux با selectors این مشکل را حل می‌کند"

    },
    {
        id: 280,
        question: "Which tool provides better debugging for state management?",
        options: [
            "Context API with React DevTools",
            "Redux with dedicated DevTools extension",
            "useReducer with console logging",
            "Local state with debugger"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• Redux DevTools امکانات debugging پیشرفته دارد\n" +
            "- مشاهده تمام actions و state changes\n" +
            "- time-travel برای undo/redo\n" +
            "- state diff و action payload\n" +
            "- React DevTools فقط Context value را نشان می‌دهد\n" +
            "- Redux برای debugging بسیار بهتر است"

    },
    {
        id: 281,
        question: "When is Context API the better choice over Redux?",
        options: [
            "For complex state with nested structures",
            "For apps requiring middleware",
            "For sharing rarely changing values like theme",
            "For shopping cart with frequent updates"
        ],
        correctOption: 2,
        points: 10,
        "explanation":"• برای state ساده که کم تغییر می‌کند (theme، language)\n" +
            "- تعداد consumers محدود است\n" +
            "- نیازی به middleware نیست\n" +
            "- پروژه کوچک یا متوسط\n" +
            "- می‌خواهید از dependencies اضافی اجتناب کنید"
    },
    {
        id: 282,
        question: "What is the most appropriate use case for Context API?",
        options: [
            "Managing complex state with frequent updates",
            "Avoiding prop drilling for shared values",
            "Handling async data fetching",
            "Creating time-travel debugging"
        ],
        correctOption: 1,
        points: 10,
        "explanation":"• جلوگیری از prop drilling برای shared values\n" +
            "- theme، language و user preferences\n" +
            "- authentication state ساده\n" +
            "- values که rarely تغییر می‌کنند\n" +
            "- state که نیاز به middleware ندارد"
    },
    {
        id: 283,
        question: "When should you choose Redux over Context?",
        options: [
            "For passing static config data",
            "For simple theme switching",
            "For frequently updating state across components",
            "For sharing user preferences"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• state پیچیده با frequent updates\n" +
            "- بسیاری از کامپوننت‌ها به state نیاز دارند\n" +
            "- نیاز به async logic و middleware\n" +
            "- debugging پیشرفته لازم است\n" +
            "- تیم بزرگ و نیاز به structure"
    },
    {
        id: 284,
        question: "Why is Redux suitable for complex state management?",
        options: [
            "Built into React framework",
            "Prevents all re-renders automatically",
            "Provides predictable updates and debugging tools",
            "Eliminates need for component state"
        ],
        correctOption: 2,
        points: 20,
        "explanation":"• predictable state updates با actions و reducers\n" +
            "- middleware برای async و side effects\n" +
            "- DevTools قدرتمند برای debugging\n" +
            "- patterns استاندارد برای scaling\n" +
            "- testing آسان‌تر با pure functions"
    },
    {
        "id": 285,
        "question": "Which approach is more efficient for local component state?",
        "options": [
            "Redux Toolkit with createSlice",
            "Redux with middleware",
            "React Context API",
            "React DevTools management"
        ],
        "correctOption":2,
        "points": 10,
        "explanation":"• Context API یا useState/useReducer برای local state\n" +
            "- Redux overhead اضافی برای local state دارد\n" +
            "- Context built-in و ساده است\n" +
            "- performance بهتر برای state محلی\n" +
            "- Redux فقط برای shared state لازم است"
    },
    {
        "id": 287,
        "question": "What is the main purpose of React Context?",
        "options": [
            "Replace all state management libraries",
            "Share data without prop drilling",
            "Improve component render performance",
            "Handle all API requests centrally"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Context برای sharing data بین components بدون prop drilling\n" +
            "- جلوگیری از pass کردن props در چند لایه\n" +
            "- برای global-ish data مثل theme، user، language\n" +
            "- built-in React و نیازی به library نیست\n" +
            "- اما جایگزین Redux برای همه موارد نیست"
    },
    {
        "id": 288,
        "question": "How do you create a Context in React?",
        "options": [
            "Using createContext() function from React",
            "Using new Context() constructor",
            "Using useContext hook directly",
            "Context is created automatically"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• از React.createContext() استفاده می‌شود\n" +
            "- یک Context object برمی‌گرداند\n" +
            "- می‌تواند default value بگیرد\n" +
            "- Provider و Consumer components دارد\n" +
            "- معمولاً در فایل جداگانه define می‌شود"
    },
    {
        "id": 289,
        "question": "What is the purpose of Context Provider?",
        "options": [
            "To consume context values only",
            "To supply context value to descendant components",
            "To create multiple contexts simultaneously",
            "To validate context data types"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Provider مقدار Context را به children می‌دهد\n" +
            "- value prop برای set کردن data\n" +
            "- همه descendants می‌توانند access داشته باشند\n" +
            "- تغییر value باعث re-render consumers می‌شود\n" +
            "- معمولاً در بالای component tree"
    },
    {
        "id": 290,
        "question": "Can you have nested Context Providers of the same Context?",
        "options": [
            "No, causes infinite loops",
            "Yes, inner Provider overrides outer value",
            "Only with different context names",
            "Only in production mode"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• بله، می‌توانید Providers را nest کنید\n" +
            "- Provider داخلی مقدار بیرونی را override می‌کند\n" +
            "- consumers نزدیک‌ترین Provider را می‌خوانند\n" +
            "- برای scoped values مفید است\n" +
            "- مثل theme override در بخش خاص"
    },
    {
        "id": 291,
        "question": "What happens when Context value changes?",
        "options": [
            "Only Provider re-renders",
            "All consumers re-render automatically",
            "No components re-render",
            "Only direct children re-render"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• تمام consumers به صورت خودکار re-render می‌شوند\n" +
            "- حتی اگر فقط بخشی از value نیاز باشد\n" +
            "- React.memo نمی‌تواند این را جلوگیری کند\n" +
            "- برای optimization باید Context را split کنید\n" +
            "- این یکی از performance considerations است"
    },
    {
        "id": 292,
        "question": "How do you prevent unnecessary re-renders with Context?",
        "options": [
            "Split contexts and memoize values",
            "Use global variables instead",
            "Disable Context updates",
            "Use only primitive values"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• Context را به چند Context کوچک‌تر تقسیم کنید\n" +
            "- value را با useMemo wrap کنید\n" +
            "- از children pattern استفاده کنید\n" +
            "- consumers را با React.memo wrap کنید\n" +
            "- ترکیب این techniques بهترین نتیجه را می‌دهد"
    },
    {
        "id": 293,
        "question": "Can you use multiple Contexts in one component?",
        "options": [
            "No, only one context per component",
            "Yes, using multiple useContext calls",
            "Only with Context composition pattern",
            "Only in Class Components"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• بله، می‌توانید چندین useContext استفاده کنید\n" +
            "- هر useContext یک Context جداگانه\n" +
            "- const theme = useContext(ThemeContext)\n" +
            "- const user = useContext(UserContext)\n" +
            "- هیچ محدودیتی در تعداد نیست"
    },
    {
        "id": 294,
        "question": "What is the default value in createContext used for?",
        "options": [
            "When no Provider is found in tree",
            "As initial value for all consumers",
            "For TypeScript type inference only",
            "To reset context to defaults"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• default value زمانی استفاده می‌شود که Provider نباشد\n" +
            "- اگر component خارج از Provider باشد\n" +
            "- برای testing بدون Provider مفید است\n" +
            "- معمولاً null یا undefined قرار می‌دهند\n" +
            "- با Provider، default value ignore می‌شود"
    },
    {
        "id": 295,
        "question": "Which example demonstrates DOM traversal?",
        "options": [
            "document.createElement('div')",
            "element.parentNode.nextSibling",
            "fetch('api/data')",
            "JSON.stringify({name: 'Omid'})"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• parentNode و nextSibling برای حرکت در DOM tree\n" +
            "- traversal یعنی navigate کردن بین nodes\n" +
            "- برای دسترسی به elements مرتبط استفاده می‌شود\n" +
            "- در React معمولاً نیازی به DOM traversal نیست\n" +
            "- React declarative است و DOM را خودش مدیریت می‌کند"
    },
    {
        "id": 296,
        "question":"What distinguishes imperative from declarative programming?",
        "options": [
            "Imperative focuses on what should happen, declarative on how",
            "Declarative focuses on what should happen, imperative on how",
            "Imperative is faster, declarative is more readable",
            "Declarative requires more code, imperative requires less"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• imperative: چگونه کاری انجام شود (HOW)\n" +
            "- declarative: چه کاری انجام شود (WHAT)\n" +
            "- imperative: step-by-step instructions\n" +
            "- declarative: describe کردن نتیجه مورد نظر\n" +
            "- React declarative است"
    },
    {
        "id": 297,
        "question": "Which approach represents declarative programming in React?",
        "options": [
            "Manually updating DOM elements with getElementById",
            "Using JSX to describe what the UI should look like",
            "Writing for loops to create HTML elements",
            "Directly manipulating CSS styles with JavaScript"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• JSX توصیف می‌کند UI چگونه باید باشد\n" +
            "- نه اینکه چگونه ساخته شود\n" +
            "- React خودش DOM را update می‌کند\n" +
            "- شما فقط desired state را declare می‌کنید\n" +
            "- این declarative programming است"
    },
    {
        "id": 298,
        "question": "What is the primary benefit of declarative programming in React?",
        "options": [
            "Write step-by-step DOM manipulation instructions",
            "Describe what UI should be, not how to build it",
            "Manually track all state and DOM changes",
            "Directly use querySelector for updates"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• کد ساده‌تر و خواناتر\n" +
            "- شما چه می‌خواهید describe می‌کنید نه چگونه\n" +
            "- React implementation details را handle می‌کند\n" +
            "- کمتر bug و آسان‌تر maintenance\n" +
            "- focus روی UI است نه DOM manipulation"
    },
    {
        "id": 299,
        "question": "Why is DOM traversing important in front-end development?",
        "options": [
            "Allows navigation and manipulation of HTML structure",
            "CSS styling replacement with JavaScript calculations",
            "Automatic JavaScript performance optimization",
            "Server-side HTML content generation"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• برای navigate و manipulate کردن HTML structure\n" +
            "- دسترسی به elements مرتبط\n" +
            "- برای event delegation مفید است\n" +
            "- در vanilla JavaScript ضروری است\n" +
            "- اما در React کمتر نیاز است"
    },
    {
        "id": 300,
        "question":  "How does feature-based folder structure improve maintainability?",
        "options": [
            "Files are separated by technical type only",
            "Bundle size reduces through automatic tree-shaking",
            "Related functionality groups together in modules",
            "Global state management enforces across components"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• فایل‌های مرتبط در یک folder هستند\n" +
            "- راحت‌تر پیدا کردن و تغییر دادن\n" +
            "- هر feature مستقل است\n" +
            "- scaling و team collaboration بهتر\n" +
            "- بهتر از تفکیک بر اساس نوع فایل"
    },
    {
        "id": 301,
        "question": "What challenge arises from organizing projects by file type?",
        "options": [
            "Components become impossible to reuse",
            "UI and logic mix in directories",
            "Bundle size increases automatically",
            "Related files spread across folders"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• فایل‌های مرتبط در folders مختلف پراکنده می‌شوند\n" +
            "- پیدا کردن همه قسمت‌های یک feature سخت است\n" +
            "- refactoring پیچیده‌تر می‌شود\n" +
            "- scaling مشکل دارد\n" +
            "- feature-based بهتر است"
    },
    {
        "id": 302,
        "question": "Where should components be placed in feature-based architecture?",
        "options": [
            "Within each feature directory with related files",
            "In centralized components folder for sharing",
            "Inside dedicated pages directory for routing",
            "Mixed with hooks regardless of boundaries"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• در folder مربوط به feature خود\n" +
            "- با related files (hooks، utils، styles)\n" +
            "- shared components در folder جداگانه\n" +
            "- هر feature self-contained است\n" +
            "- modularity و reusability بهتر"
    },
    {
        "id": 303,
        "question":"What does 'data loading waterfall' mean in React?",
        "options": [
            "Advanced caching strategies to completely eliminate the need for repeated network calls",
            "Multiple requests executed sequentially, causing slower loading times",
            "Executing all API requests in parallel regardless of dependencies",
            "Fetching data only for the components currently visible in the viewport",
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• requests به صورت sequential اجرا می‌شوند\n" +
            "- هر request منتظر قبلی است\n" +
            "- loading time کل افزایش می‌یابد\n" +
            "- باید requests را parallel کنید\n" +
            "- React Query و Suspense کمک می‌کنند"
    },
    {
        "id": 304,
        "question": "What is the main purpose of the HTTP PATCH method?",
        "options": [
            "retrieves complete data of a resource without modifications",
            "Replaces entire resource with provided data",
            "Applies partial modifications to existing resource",
            "Creates completely new resource on server"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• برای partial update یک resource\n" +
            "- فقط فیلدهای تغییر یافته ارسال می‌شود\n" +
            "- کم‌حجم‌تر از PUT\n" +
            "- برای update جزئی مناسب است\n" +
            "- مثل تغییر فقط email کاربر"
    },
    {
        "id": 305,
        "question": "How does HTTP PUT differ from PATCH?",
        "options": [
            "PUT retrieves resources, PATCH deletes them",
            "PUT replaces full resource, PATCH updates fields",
            "PUT creates new resources, PATCH deletes existing",
            "PUT sends partial data, PATCH requires full"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• PUT کل resource را replace می‌کند\n" +
            "- PATCH فقط بخش‌هایی را update می‌کند\n" +
            "- PUT نیاز به تمام فیلدها دارد\n" +
            "- PATCH فقط تغییرات را می‌فرستد\n" +
            "- PATCH efficient تر برای updates جزئی"
    },
    {
        "id": 306,
        "question": "When should POST be preferred over PUT or PATCH?",
        "options": [
            "Partially updating one property of resource",
            "Replacing entire resource with new data",
            "Creating completely new resource on server",
            "Retrieving current state of existing resource"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• برای ساخت resource کاملاً جدید\n" +
            "- وقتی ID توسط server generate می‌شود\n" +
            "- برای actions که resource جدید ایجاد می‌کنند\n" +
            "- PUT/PATCH برای update resources موجود\n" +
            "- POST برای create، PUT/PATCH برای update"
    },
    {
        "id": 307,
        "question": "Which scenario best fits the PATCH method?",
        "options": [
            "Uploading profile picture without changing other data",
            "Creating new order with customer and items",
            "Replacing entire shopping cart with new items",
            "Fetching order history for specific customer"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• update کردن profile picture بدون تغییر بقیه\n" +
            "- فقط فیلدهای خاص update می‌شوند\n" +
            "- data کمتری ارسال می‌شود\n" +
            "- efficient برای updates جزئی\n" +
            "- بهتر از PUT که همه را می‌خواهد"
    },
    {
        "id": 308,
        question: "To update only delivery address of existing order, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• PATCH برای partial update مناسب است\n" +
            "- فقط address field ارسال می‌شود\n" +
            "- بقیه order تغییر نمی‌کند\n" +
            "- efficient و targeted update\n" +
            "- بهترین انتخاب برای این scenario"
    },
    {
        "id": 309,
        question: "To create a brand new pizza order, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• POST برای ایجاد resource جدید\n" +
            "- order جدید در database ساخته می‌شود\n" +
            "- server معمولاً ID generate می‌کند\n" +
            "- استاندارد RESTFUL برای create\n" +
            "- response شامل order ساخته شده"
    },
    {
        "id": 310,
        question: "To replace entire pizza menu with new list, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• PUT برای replace کردن کامل resource\n" +
            "- تمام menu جدید ارسال می‌شود\n" +
            "- menu قدیمی کاملاً replace می‌شود\n" +
            "- idempotent است (تکرار نتیجه یکسان)\n" +
            "- برای replacement کامل مناسب"
    },
    {
        "id": 311,
        "question":  "To view specific order details by ID, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "PATCH"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• GET برای خواندن/دریافت data\n" +
            "- فقط retrieve می‌کند، تغییر نمی‌دهد\n" +
            "- safe و idempotent است\n" +
            "- برای read operations استاندارد\n" +
            "- معمولاً با ID در URL"
    },
    {
        "id": 312,
        "question": "To cancel and remove order completely, which HTTP method should be used?",
        "options": [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• DELETE برای حذف resource\n" +
            "- order کاملاً از database حذف می‌شود\n" +
            "- idempotent است\n" +
            "- استاندارد RESTFUL برای deletion\n" +
            "- معمولاً 204 No Content return می‌کند"
    },
    {
        "id": 313,
        "question":"What defines a pure function in JavaScript?",
        "options": [
            "Always returns same output for same input",
            "Can modify variables outside its scope",
            "Depends on external states like Date.now()",
            "Causes side effects like DOM manipulation"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• همیشه با input یکسان، output یکسان\n" +
            "- بدون side effects (تغییر external state)\n" +
            "- نتیجه فقط به arguments بستگی دارد\n" +
            "- deterministic و predictable\n" +
            "- Redux reducers باید pure باشند"
    },
    {
        "id": 314,
        "question":  "What makes a React component impure?",
        "options": [
            "Using props to render UI",
            "Returning JSX consistently from component",
            "Receiving children elements ",
            "Fetching data directly inside render",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• fetch کردن data مستقیماً در render\n" +
            "- تغییر دادن متغیرهای external\n" +
            "- تکیه بر Date.now() یا Math.random()\n" +
            "- mutating props یا state\n" +
            "- side effects باید در useEffect باشند"
    },
    {
        "id": 315,
        "question":  "Why should functions in useMemo be pure?",
        "options": [
            "Impure functions are automatically memoized",
            "Pure functions cannot accept any arguments",
            "Impure functions may return conflicting results",
            "useMemo only works with async functions"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• useMemo نتیجه را cache می‌کند\n" +
            "- با dependencies یکسان، نتیجه باید یکسان باشد\n" +
            "- impure functions نتایج inconsistent دارند\n" +
            "- caching با impurity کار نمی‌کند\n" +
            "- باعث bugs پنهان می‌شود"
    },
    {
        "id": 316,
        "question": "What breaks the purity of a Redux reducer?",
        "options": [
            "Returning new state object from reducer",
            "Spreading previous state into new one",
            "Calculating sum of two numbers",
            "Logging message to console from reducer"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• logging به console یا calling APIs\n" +
            "- mutating state مستقیماً\n" +
            "- استفاده از Date.now() یا Math.random()\n" +
            "- reading/writing external variables\n" +
            "- reducers باید فقط state جدید return کنند"
    },
    {
        "id": 317,
        "question": "What is the best practice when modeling Redux state?",
        "options": [
            "Store the entire UI tree directly inside the state",
            "Duplicate entities in multiple parts of the state for faster access",
            "Normalize data and avoid deep nesting structures",
            "Keep derived values permanently stored in state"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• normalize کردن data برای جلوگیری از duplication\n" +
            "- از deep nesting اجتناب کنید\n" +
            "- flat structure بهتر از nested است\n" +
            "- استفاده از IDs برای relations\n" +
            "- derived values را در state ذخیره نکنید"
    },
    {
        "id": 318,
        "question": "Why is normalization recommended in Redux?",
        "options": [
            "Makes state harder to update consistently",
            "Ensures all data is stored in nested objects",
            "Makes selectors unnecessary in the application",
            "Allows easy updates and avoids data duplication",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• updates آسان‌تر و consistent تر\n" +
            "- از data duplication جلوگیری می‌کند\n" +
            "- performance بهتر برای lookups\n" +
            "- relationships واضح‌تر با IDs\n" +
            "- شبیه database normalization"
    },
    {
        "id": 319,
        "question": "Why prefer React Query over fetch with useEffect?",
        "options": [
            "eliminates the need for backend APIs",
            "Handles caching, refetching, and background updates",
            "replaces Redux for all state management including local state",
            "converts all API responses into static HTML automatically"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• caching خودکار برای performance\n" +
            "- background refetching برای freshness\n" +
            "- loading و error states built-in\n" +
            "- optimistic updates و mutations\n" +
            "- کد کمتر و ساده‌تر از manual fetch"
    },
    {
        "id": 320,
        "question": "Why do we need frameworks like React?",
        "options": [
            "JavaScript cannot support DOM manipulation",
            "Vanilla JavaScript cannot work with APIs",
            "Frameworks make state management easier in complex apps",
            "Frameworks replace JavaScript with different language"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• state management پیچیده را ساده می‌کند\n" +
            "- DOM manipulation خودکار و optimized\n" +
            "- component-based architecture برای reusability\n" +
            "- declarative programming برای readability\n" +
            "- vanilla JavaScript برای apps بزرگ سخت است"
    },
    {
        "id": 321,
        "question": "What's a key advantage of React over vanilla JavaScript?",
        "options": [
            "React directly modifies DOM for speed",
            "React removes need for event handling",
            "React introduces Virtual DOM for efficiency",
            "React converts CSS into JavaScript functions"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• Virtual DOM برای efficient updates\n" +
            "- declarative UI به جای imperative\n" +
            "- component reusability و composition\n" +
            "- state management built-in\n" +
            "- ecosystem غنی از libraries و tools"
    },
    {
        "id": 322,
        "question": "Why is component-based architecture preferred over vanilla JavaScript?",
        "options": [
            "Components enable reuse, isolation, and easier testing",
            "Components eliminate the need for any JavaScript functions",
            "Vanilla JavaScript cannot handle conditional rendering",
            "Components automatically generate database queries"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• components قابل reuse در جاهای مختلف\n" +
            "- isolation و encapsulation بهتر\n" +
            "- testing آسان‌تر به صورت جداگانه\n" +
            "- maintenance و scaling ساده‌تر\n" +
            "- team collaboration بهتر"
    },
    {
        "id": 323,
        "question":"What was jQuery primarily designed to do?",
        "options": [
            "Manage server-side database connections",
            "Simplify DOM manipulation and event handling",
            "Replace HTML markup with JavaScript syntax",
            "Compile JavaScript into optimized machine code"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• jQuery برای ساده‌سازی DOM manipulation\n" +
            "- cross-browser compatibility را حل می‌کرد\n" +
            "- AJAX requests را آسان می‌کرد\n" +
            "- animations و effects built-in\n" +
            "- قبل از frameworks مدرن بسیار محبوب بود"
    },
    {
        "id": 324,
        "question":  "Which limitation of jQuery led to adoption of modern frameworks?",
        "options": [
            "jQuery prevented DOM manipulation capabilities",
            "jQuery automatically converted code to server-side scripts",
            "jQuery lacked structured state management patterns",
            "jQuery could not run in modern browsers"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• jQuery structure و state management نداشت\n" +
            "- برای SPAs پیچیده کافی نبود\n" +
            "- component-based architecture نداشت\n" +
            "- data binding و reactivity نداشت\n" +
            "- React و Vue این مشکلات را حل کردند"
    },
    {
        "id": 325,
        "question": "How does a web application differ from a regular desktop application?",
        "options": [
            "Web applications run on servers and are accessed via browsers",
            "Web applications execute entirely on local machines",
            "Web applications contain only static HTML content",
            "Web applications do not require a browser to run"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• web application در browser اجرا می‌شود\n" +
            "- از server data می‌گیرد\n" +
            "- نیازی به installation ندارد\n" +
            "- cross-platform است\n" +
            "- desktop app روی OS مستقیماً اجرا می‌شود"
    },
    {
        "id": 326,
        "question":  "What is the primary role of React Query in React applications?",
        "options": [
            "Styling React components using CSS-in-JS",
            "Managing server state including fetching and caching",
            "Replacing useState for local state management",
            "Building UI components without JSX syntax"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• React Query server state را مدیریت می‌کند\n" +
            "- fetching، caching و synchronization\n" +
            "- loading و error states خودکار\n" +
            "- background refetching\n" +
            "- alternative به Redux برای server data"
    },
    {
        "id": 327,
        "question": "Why do modern applications rely on front-end frameworks?",
        "options": [
            "To automatically convert HTML into server scripts",
            "To simplify interactive UI and manage application state",
            "To eliminate the need for backend infrastructure",
            "To replace CSS with JavaScript styling solutions"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• frameworks state management را ساده می‌کنند\n" +
            "- component-based architecture\n" +
            "- reactivity و data binding\n" +
            "- routing و navigation\n" +
            "- vanilla JS برای apps پیچیده سخت است"
    },
    {
        "id": 328,
        "question": "What differentiates a web application from a web page?",
        "options": [
            "Pages allow interaction, apps are purely static",
            "Pages require servers, apps work offline",
            "Applications enable interaction, pages mainly display content",
            "Applications run offline, pages need internet"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• web page بیشتر static و informational\n" +
            "- web application interactive و functional\n" +
            "- app دارای user actions و state\n" +
            "- app مثل Gmail، page مثل blog\n" +
            "- app معمولاً نیاز به backend دارد"
    },
    {
        "id": 329,
        "question": "When is React more beneficial than plain HTML/CSS/JS?",
        "options": [
            "React efficiently manages complex UI state and interactions",
            "React automatically converts HTML into server-side scripts",
            "React removes the need for CSS styling",
            "React works only for pages without a server"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• React برای UI پیچیده با state زیاد\n" +
            "- data که frequently تغییر می‌کند\n" +
            "- reusable components لازم است\n" +
            "- single page applications\n" +
            "- plain JS برای static sites کافی است"
    },
    {
        "id": 330,
        "question":  "What does keeping the UI synchronized with data mean?",
        "options": [
            "Data should remain static to avoid frequent updates",
            "UI updates occur only during full page refreshes",
            "UI elements need manual updates for data changes",
            "UI automatically reflects the current state of data"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• UI همیشه آخرین data را نشان می‌دهد\n" +
            "- وقتی data تغییر کند، UI update شود\n" +
            "- بدون manual DOM manipulation\n" +
            "- React این کار را خودکار انجام می‌دهد\n" +
            "- consistency بین state و view"
    },
    {
        "id": 331,
        "question":"How does React ensure UI stays in sync with data?",
        "options": [
            "By directly manipulating the DOM using vanilla JavaScript",
            "By using state variables and triggering re-renders",
            "By relying solely on global variables without state management",
            "By refreshing the entire page after each data change"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• React از state و re-rendering استفاده می‌کند\n" +
            "- تغییر state باعث re-render می‌شود\n" +
            "- Virtual DOM برای efficient updates\n" +
            "- declarative approach\n" +
            "- developer فقط state را update می‌کند"
    },
    {
        "id": 332,
        "question": "Why is UI-data synchronization crucial in applications?",
        "options": [
            "It ensures users see accurate and up-to-date information",
            "It speeds up applications by preventing updates",
            "It allows avoiding React or similar frameworks",
            "It caches old data without updating the interface"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• کاربر باید accurate information ببیند\n" +
            "- جلوگیری از stale data\n" +
            "- user experience بهتر\n" +
            "- trust و reliability\n" +
            "- real-time updates مهم هستند"
    },
    {
        "id": 333,
        "question":"What does DOM traversal allow developers to do in JavaScript?",
        "options": [
            "Create new elements and attach them to the DOM",
            "Send asynchronous requests to a server",
            "Navigate and access nodes already present in the DOM",
            "Convert JavaScript code into machine instructions"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• حرکت بین nodes در DOM tree\n" +
            "- دسترسی به parent، children، siblings\n" +
            "- parentNode، childNodes، nextSibling\n" +
            "- برای navigation در HTML structure\n" +
            "- در React کمتر نیاز است"
    },
    {
        "id": 334,
        "question": "What made jQuery popular among developers?",
        "options": [
            "Replaced JavaScript as browser language",
            "Automatically optimized web performance",
            "Eliminated need for CSS styling",
            "Provided cross-browser support for common DOM tasks"
        ],
        "correctOption":3,
        "points": 20,
        "explanation": "• cross-browser compatibility آسان\n" +
            "- syntax ساده و readable\n" +
            "- DOM manipulation راحت\n" +
            "- AJAX built-in\n" +
            "- زمانی که browsers inconsistent بودند"
    },
    {
        "id": 335,
        "question": "How would you best describe React?",
        "options": [
            "declarative, component-based, state-driven JavaScript library for building UIs",
            "full-featured JavaScript framework with built-in routing and state management",
            "CSS utility framework for creating responsive designs quickly",
            "server-side runtime environment for executing JavaScript outside the browser"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• declarative: چه می‌خواهید نه چگونه\n" +
            "- component-based: reusable pieces\n" +
            "- state-driven: UI از state می‌آید\n" +
            "- JavaScript library نه framework کامل\n" +
            "- برای building UIs طراحی شده"
    },
    {
        "id": 336,
        "question":"What characterizes declarative programming in React?",
        "options": [
            "You manually update DOM elements step-by-step",
            "You write CSS classes for component styling",
            "You specify what the UI should look like",
            "You use server-side rendering for HTML"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• شما describe می‌کنید UI چگونه باید باشد\n" +
            "- نه step-by-step چگونه بسازید\n" +
            "- React implementation را handle می‌کند\n" +
            "- مثل HTML declarative است\n" +
            "- opposite از imperative"
    },
    {
        "id": 337,
        "question":  "How does imperative differ from declarative programming?",
        "options": [
            "You provide step-by-step instructions for execution",
            "You only declare what UI should display",
            "You style components using utility-first CSS",
            "You let frameworks handle all DOM updates"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• imperative: چگونه کاری انجام شود (HOW)\n" +
            "- step-by-step instructions\n" +
            "- declarative: چه کاری انجام شود (WHAT)\n" +
            "- result را describe می‌کنید\n" +
            "- imperative: DOM manipulation manual"
    },
    {
        "id": 338,
        "question":"What role do case reducers play in Redux Toolkit?",
        "options": [
            "They replace Redux store with local state",
            "They automatically fetch data from external APIs",
            "They style components using predefined CSS classes",
            "They define how state changes for specific actions",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• case reducers هر action type را handle می‌کنند\n" +
            "- مثل cases در switch statement\n" +
            "- state و action می‌گیرند\n" +
            "- state جدید return می‌کنند\n" +
            "- در createSlice define می‌شوند"
    },
    {
        id: 339,
        question: "What programming approach does React Router follow?",
        "options": [
            "Imperative programming with manual DOM updates",
            "Declarative programming with component-based routing",
            "Procedural programming with sequential execution",
            "Functional programming with pure function composition"
        ],
        correctOption: 1,
        points: 20,
        "explanation": "• React Router از رویکرد declarative برای تعریف مسیرها استفاده می‌کند\n" +
            "- مسیرها به صورت کامپوننت‌های JSX تعریف می‌شوند نه کدهای imperative\n" +
            "- این رویکرد با فلسفه React هماهنگ است و خوانایی کد را افزایش می‌دهد"
    },
    {
        id: 340,
        question:  "Which route definition works best for large projects?",
        "options": [
            "Route objects with createBrowserRouter configuration",
            "JSX route definitions inside Routes components",
            "Dynamic routes for all page components",
            "Protected routes for authentication handling"
        ],
        correctOption: 0,
        points: 20,
        "explanation":"• createBrowserRouter با route objects\n" +
            "- centralized route configuration\n" +
            "- data loading با loaders\n" +
            "- error handling بهتر\n" +
            "- nested routes ساده‌تر"
    },
    {
        id: 341,
        question:"How do Navigate and useNavigate differ?",
        "options": [
            "Navigate works with objects, useNavigate with JSX",
            "Navigate is declarative, useNavigate is imperative",
            "They provide identical functionality and behavior",
            "Neither component is used for navigation"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• Navigate component declarative است\n" +
            "- در JSX استفاده می‌شود: <Navigate to='/home' />\n" +
            "- useNavigate hook imperative است\n" +
            "- در event handlers: navigate('/home')\n" +
            "- هر کدام use case خاص دارند"

    },
    {
        id: 342,
        question: "For layouts with fixed header/footer, which feature helps?",
        "options": [
            "Dynamic routes for different content sections",
            "Nested routes for hierarchical layout structure",
            "Protected routes for user authentication",
            "Route guards for access control management"
        ],
        correctOption: 1,
        points: 20,
        "explanation":"• nested routes برای layouts مشترک\n" +
            "- parent route با Outlet\n" +
            "- header/footer در parent\n" +
            "- children در Outlet render می‌شوند\n" +
            "- DRY principle"

    },
    {
        "id": 343,
        "question":"What advantage does React Query provide in large apps?",
        "options": [
            "Server state caching and synchronization across components",
            "Prevents re-rendering by removing dependency arrays",
            "Compiles React code into server-side JavaScript",
            "Makes applications independent of REST APIs"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• server state caching در سراسر app\n" +
            "- automatic background refetching\n" +
            "- data بین components share می‌شود\n" +
            "- loading و error states unified\n" +
            "- کاهش boilerplate code"
    },
    {
        "id": 344,
        "question":  "Why is caching valuable in React Query?",
        "options": [
            "Prevents storing any data in memory",
            "Allows data reuse without repeated server requests",
            "Replaces need for hooks like useState",
            "Automatically generates UI components for display"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• data reuse بدون API calls مجدد\n" +
            "- سرعت بالاتر و UX بهتر\n" +
            "- کاهش server load\n" +
            "- کاهش bandwidth usage\n" +
            "- instant navigation بین صفحات"
    },
    {
        "id": 345,
        "question":"How does caching improve performance over plain fetch?",
        "options": [
            "Cached data enables faster UI updates and reduces unnecessary network requests",
            "Caching removes the need for APIs in web applications",
            "Caching only stores styles for components, not data",
            "Cached data replaces the need for useEffect entirely"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• cached data فوراً available است\n" +
            "- no loading spinners برای cached data\n" +
            "- کمتر network requests\n" +
            "- background updates برای freshness\n" +
            "- perceived performance بسیار بهتر"
    },
    {
        "id": 346,
        "question":  "How does React Query caching enhance user experience?",
        "options": [
            "forces the UI to reload from scratch whenever new data is fetched",
            "completely prevents re-renders in all React components",
            "Keeps data instantly available while ensuring freshness",
            "converts API responses into static HTML during build time"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• instant page loads با cached data\n" +
            "- در background fresh data می‌آورد\n" +
            "- stale-while-revalidate strategy\n" +
            "- no blank screens\n" +
            "- smooth و responsive UI"
    },
    {
        "id": 347,
        "question":  "What does staleTime control in React Query?",
        "options": [
            "How long inactive queries stay in memory",
            "How often React Query clears localStorage",
            "How many components can subscribe to queries",
            "How long data remains fresh before refetching",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• staleTime مدت زمان fresh بودن data\n" +
            "- تا این مدت refetch نمی‌شود\n" +
            "- staleTime: 60000 یعنی 1 دقیقه fresh\n" +
            "- پیش‌فرض 0 (بلافاصله stale)\n" +
            "- برای static data بالا set کنید"
    },
    {
        "id": 348,
        "question": "What is the difference between 'staleTime' and 'cacheTime' in React Query?",
        "options": [
            "staleTime controls freshness, cacheTime controls memory duration",
            "staleTime controls data freshness, while cacheTime controls cache duration",
            "staleTime deletes data permanently, cacheTime saves it forever",
            "staleTime is for server updates, cacheTime is for local state updates",
            "staleTime only applies to mutations, cacheTime only applies to queries"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• staleTime: مدت fresh بودن data\n" +
            "- cacheTime: مدت ماندن در memory\n" +
            "- staleTime برای refetch timing\n" +
            "- cacheTime برای garbage collection\n" +
            "- staleTime معمولاً کوتاه‌تر"
    },
    {
        "id": 349,
        "question": "When would you increase staleTime for queries?",
        "options": [
            "To reduce unnecessary refetches for stable data",
            "To force React Query to clear queries instantly",
            "To remove queries from cache when unmounting",
            "To automatically generate new API endpoints"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• برای data که کم تغییر می‌کند\n" +
            "- مثل user profile، settings\n" +
            "- کاهش unnecessary refetches\n" +
            "- بهبود performance\n" +
            "- کاهش server load"
    },
    {
        "id": 350,
        "question": "What does useQuery hook return to components?",
        "options": [
            "Only the fetched data from server",
            "A function that must be manually called to fetch data",
            "Query state object with data, loading, error",
            "Only the error object if the request fails"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• object با data، isLoading، error\n" +
            "- isSuccess، isFetching، isError\n" +
            "- refetch function\n" +
            "- status: 'loading' | 'error' | 'success'\n" +
            "- همه چیز برای UI state management"
    },
    {
        "id": 351,
        "question":  "Which property is NOT in useQuery return object?",
        "options": [
            "data property containing fetched information",
            "isLoading boolean indicating fetch status",
            "mutate function for triggering updates",
            "isError boolean indicating failure state"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• mutate برای useMutation است نه useQuery\n" +
            "- useQuery فقط برای reading\n" +
            "- useMutation برای creating/updating/deleting\n" +
            "- data، isLoading، error در useQuery\n" +
            "- mutate، mutateAsync در useMutation"
    },
    {
        "id": 352,
        "question":"How does useQuery output improve UI responsiveness?",
        "options": [
            "Exposes states like isLoading and isFetching for instant UI reactions",
            "automatically converting all data into static HTML at build time",
            "prevents components from re-rendering after data changes",
            "replacing the need for client-side state management libraries entirely"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• isLoading برای showing spinners\n" +
            "- isError برای error messages\n" +
            "- isFetching برای background updates\n" +
            "- instant feedback به user\n" +
            "- professional UX"
    },
    {
        "id": 353,
        "question": "What is Strapi's primary function?",
        "options": [
            "Building frontend UI component libraries",
            "Managing content and exposing APIs as CMS",
            "Optimizing bundle size in React applications",
            "Handling client-side routing and navigation"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Strapi headless CMS است\n" +
            "- content management با admin panel\n" +
            "- auto-generate REST/GraphQL APIs\n" +
            "- backend بدون coding زیاد\n" +
            "- برای content-heavy apps"
    },
    {
        "id": 354,
        "question": "Which feature distinguishes Strapi from traditional CMS?",
        "options": [
            "Provides automatic API generation with REST/GraphQL",
            "Replaces React state management libraries completely",
            "Works exclusively with serverless databases",
            "Automatically generates frontend components for display"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• headless: frontend-agnostic\n" +
            "- API-first approach\n" +
            "- customizable با code\n" +
            "- modern tech stack (Node.js)\n" +
            "- WordPress monolithic است"
    },
    {
        "id": 355,
        "question":  "Why choose Strapi over WordPress for modern development?",
        "options": [
            "Allows complete backend control while staying frontend-agnostic",
            "comes with a pre-built frontend theme system",
            "requires no authentication for any API requests",
            " only supports static site generation"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• API-first برای any frontend\n" +
            "- JavaScript/TypeScript stack\n" +
            "- customization بیشتر\n" +
            "- modern architecture\n" +
            "- WordPress PHP-based و legacy"
    },
    {
        "id": 356,
        "question": "What differs between Strapi development and production modes?",
        "options": [
            "Development provides better security than production",
            "Production allows hot-reloading like development mode",
            "Development for local testing, production for live servers",
            "Both modes function identically in all aspects"
        ],
        "correctOption":2,
        "points": 10,
        "explanation": "• development: admin panel enabled\n" +
            "- hot-reloading و debugging\n" +
            "- production: optimized و secure\n" +
            "- admin panel معمولاً disabled\n" +
            "- environment variables متفاوت"
    },
    {
        "id": 357,
        "question": "How does React Query maintain server synchronization?",
        "options": [
            "By automatically refetching stale data in background",
            "By manually refreshing page on every request",
            "By storing data permanently in localStorage",
            "By blocking UI updates until calls finish"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• automatic background refetching\n" +
            "- refetchOnWindowFocus: true\n" +
            "- refetchOnReconnect\n" +
            "- stale-while-revalidate\n" +
            "- data همیشه تا حد ممکن fresh"
    },
    {
        "id": 358,
        "question":  "What mechanism keeps React Query cache fresh?",
        "options": [
            "Server-side rendering exclusively for updates",
            "Stale-while-revalidate strategy for background updates",
            "Manual refetching triggered by button clicks",
            "Long polling on every state change",
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• stale-while-revalidate strategy\n" +
            "- cached data سریع نشان می‌دهد\n" +
            "- در background refetch می‌کند\n" +
            "- UI با fresh data update می‌شود\n" +
            "- best of both worlds"
    },
    {
        "id": 359,
        "question":"Why is React Query efficient for server synchronization?",
        "options": [
            "Bypasses the cache and forces a fresh API call",
            "Because it synchronizes data only once when the app starts",
            "Combines cache, refetch, and dependency updates efficiently",
            "Mirrors the server database directly inside the client’s memory"
        ],
        "correctOption":2,
        "points": 30,
        "explanation": "• caching کاهش network requests\n" +
            "- background updates بدون blocking UI\n" +
            "- smart refetch strategies\n" +
            "- deduplication از duplicate requests\n" +
            "- ترکیب performance و freshness"
    },
    {
        "id": 360,
        "question": "What does 'prefetching' data in React Query mean?",
        "options": [
            "Fetching data in advance before the component needs it",
            "Fetching data only after the component renders",
            "Deleting old cached data",
            "Blocking UI until all data is fetched"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• loading data قبل از نیاز واقعی\n" +
            "- در background و silent\n" +
            "- data در cache ready\n" +
            "- instant navigation\n" +
            "- predictive data loading"
    },
    {
        "id": 361,
        "question": "Why is prefetching useful in React Query?",
        "options": [
            "Because it reduces perceived loading time and makes the UI more responsive",
            "Because it automatically writes data to localStorage",
            "Because it removes the need for a backend API",
            "Because it disables caching for the fetched data"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• کاهش perceived loading time\n" +
            "- instant page transitions\n" +
            "- بهتر UX\n" +
            "- data از قبل آماده\n" +
            "- مثل native apps"
    },
    {
        "id": 362,
        "question": "Which statement correctly describes how prefetching works in React Query?",
        "options": [
            "Prefetching loads and caches the data in advance, so when a component uses useQuery with the same key, the data is immediately available",
            "Prefetching disables caching and forces a refetch every time the component mounts",
            "Prefetching automatically converts data into static HTML",
            "Prefetching prevents the component from ever re-rendering"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• prefetch data را در cache می‌گذارد\n" +
            "- useQuery با همان key فوراً data دارد\n" +
            "- no loading state\n" +
            "- background refetch اگر stale\n" +
            "- seamless experience"
    },
    {
        "id": 363,
        "question": "What is event bubbling in the DOM?",
        "options": [
            "Events travel from target element up to document root",
            "Events travel from document root down to target element",
            "Events execute only on the clicked element",
            "Events prevent all other handlers from executing"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• events از child به parent travel می‌کنند\n" +
            "- از target element به document\n" +
            "- به ترتیب ancestors\n" +
            "- default behavior در DOM\n" +
            "- می‌توان با stopPropagation جلوگیری کرد"
    },
    {
        "id": 364,
        "question": "What is event capturing in the DOM?",
        "options": [
            "Events execute only on parent elements",
            "Events travel from document root down to target element",
            "Events travel from target element up to ancestors",
            "Events prevent propagation to child elements"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• events از parent به child travel می‌کنند\n" +
            "- از document به target element\n" +
            "- قبل از bubbling\n" +
            "- addEventListener(event, handler, true)\n" +
            "- کمتر استفاده می‌شود"
    },
    {
        "id": 365,
        "question": "In which order do event phases occur?",
        "options": [
            "Target phase, bubbling phase, capturing phase",
            "Bubbling phase, target phase, capturing phase",
            "Capturing phase, target phase, bubbling phase",
            "Target phase, capturing phase, bubbling phase"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• 1. Capturing: document → target\n" +
            "- 2. Target: روی element خود\n" +
            "- 3. Bubbling: target → document\n" +
            "- capturing → target → bubbling\n" +
            "- همیشه این ترتیب"
    },
    {
        "id": 366,
        "question": "How do you register an event listener for capturing phase?",
        "options": [
            "element.addEventListener('click', handler, true)",
            "element.addEventListener('click', handler, false)",
            "element.addEventListener('click', handler, {bubble: false})",
            "element.addEventListener('click', handler, {capture: false})"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• addEventListener با third argument: true\n" +
            "- element.addEventListener('click', handler, true)\n" +
            "- یا { capture: true }\n" +
            "- false یا omit برای bubbling\n" +
            "- پیش‌فرض bubbling است"
    },
    {
        "id": 367,
        "question": "What does event.stopPropagation() accomplish?",
        "options": [
            "Prevents default browser behavior for events",
            "Removes all event listeners from element",
            "Prevents event from continuing through phases",
            "Triggers event on all parent elements"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• جلوگیری از continue کردن event\n" +
            "- در bubbling یا capturing\n" +
            "- parent handlers اجرا نمی‌شوند\n" +
            "- فقط current element\n" +
            "- preventDefault متفاوت است"
    },
    {
        "id": 368,
        "question": "When would you use event capturing over bubbling?",
        "options": [
            "When you need to handle events before children",
            "When you want events to execute on target only",
            "When you need to prevent all event propagation",
            "When you want to remove event listeners automatically"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• وقتی می‌خواهید parent زودتر handle کند\n" +
            "- قبل از child elements\n" +
            "- برای global handlers\n" +
            "- event delegation خاص\n" +
            "- کمتر common است"
    },
    {
        "id": 369,
        "question": "What happens if you call stopPropagation() during capturing?",
        "options": [
            "Event continues to target and bubbling phases",
            "Event stops and skips target and bubbling phases",
            "Event jumps directly to bubbling phase",
            "Event executes on all elements simultaneously"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• event متوقف می‌شود\n" +
            "- به target نمی‌رسد\n" +
            "- bubbling هم اتفاق نمی‌افتد\n" +
            "- فقط handlers تا آن نقطه اجرا شده‌اند\n" +
            "- complete stop"
    },
    {
        "id": 370,
        "question": "How does event delegation utilize event bubbling?",
        "options": [
            "Attaches listeners to each individual child element",
            "Prevents events from reaching parent elements",
            "Uses parent listener to handle child events",
            "Creates separate event phases for each element"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• یک listener روی parent\n" +
            "- children events به parent bubble می‌کنند\n" +
            "- event.target برای تشخیص child\n" +
            "- efficient برای many children\n" +
            "- کمتر memory usage"
    },
    {
        "id": 371,
        "question": "What is event.target in the context of bubbling?",
        "options": [
            "The element currently handling the event",
            "The element where the event originally occurred",
            "The topmost parent element in hierarchy",
            "The element that registered the event listener"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• element که event روی آن شروع شد\n" +
            "- original target\n" +
            "- در bubbling تغییر نمی‌کند\n" +
            "- currentTarget متفاوت است\n" +
            "- برای event delegation"
    },
    {
        "id": 372,
        "question": "What is event.currentTarget during event propagation?",
        "options": [
            "The document root element for all events",
            "The element where event originally occurred",
            "The element currently executing event handler",
            "The element that will handle event next"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• element که handler روی آن است\n" +
            "- در bubbling تغییر می‌کند\n" +
            "- همیشه element با listener\n" +
            "- target ثابت است\n" +
            "- this نیز currentTarget است"
    },
    {
        "id": 373,
        "question": "Why is event delegation beneficial for dynamic content?",
        "options": [
            "Eliminates need for event listeners on elements",
            "Handles events for elements added after page load",
            "Prevents events from propagating to children",
            "Automatically removes listeners when elements disappear"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• elements جدید نیازی به listener ندارند\n" +
            "- parent listener handle می‌کند\n" +
            "- کار با dynamically added elements\n" +
            "- کمتر listeners\n" +
            "- better performance"
    },
    {
        "id": 374,
        "question": "What occurs during the target phase of event propagation?",
        "options": [
            "Event travels from document to target element",
            "Event travels from target element to document",
            "Event executes handlers registered on target element",
            "Event stops propagation automatically after execution"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• handlers روی target element اجرا می‌شوند\n" +
            "- بعد از capturing\n" +
            "- قبل از bubbling\n" +
            "- event.target === event.currentTarget\n" +
            "- middle phase"
    },
    {
        "id": 375,
        "question": "How can you determine which phase an event is in?",
        "options": [
            "Check event.phase property for current phase",
            "Check event.eventPhase property for current phase",
            "Compare event.target with event.currentTarget values",
            "Use event.stopPropagation() to test behavior"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• event.eventPhase property\n" +
            "- 1: CAPTURING_PHASE\n" +
            "- 2: AT_TARGET\n" +
            "- 3: BUBBLING_PHASE\n" +
            "- numeric constants"
    },
    {
        "id": 376,
        "question": "What happens with multiple listeners on same element?",
        "options": [
            "Only the first registered listener executes",
            "Only the last registered listener executes",
            "All listeners execute in registration order",
            "Listeners execute in reverse registration order"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• همه listeners به ترتیب registration اجرا می‌شوند\n" +
            "- اولین registered، اولین executed\n" +
            "- مگر stopImmediatePropagation\n" +
            "- همه در همان phase\n" +
            "- deterministic order"
    },
    {
        "id": 377,
        "question": "What happens when you update a ref's current value?",
        "options": [
            "Component re-renders automatically after update",
            "Component re-renders only on next state change",
            "Component does not re-render from ref changes",
            "Component re-renders after short delay period"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• ref تغییر می‌کند اما re-render نمی‌شود\n" +
            "- mutable value\n" +
            "- state نیست\n" +
            "- برای values که UI affect نمی‌کنند\n" +
            "- synchronous update"
    },
    {
        "id": 378,
        "question": "How do you access a DOM element using useRef?",
        "options": [
            "Pass ref object to element's ref prop",
            "Call ref.current() method on element",
            "Use ref.getValue() to retrieve element",
            "Access element through ref.element property"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• برای دسترسی به DOM element باید ref object را به prop مخصوص ref المنت پاس داد\n" +
            "- React به صورت خودکار المنت DOM را در ref.current ذخیره می‌کند\n" +
            "- بعد از mount شدن کامپوننت می‌توان از ref.current برای دسترسی مستقیم به المنت استفاده کرد"
    },
    {
        "id": 379,
        "question": "When should you access ref.current in function components?",
        "options": [
            "During component render phase directly",
            "Inside useEffect or event handlers only",
            "Only during component initialization phase",
            "Anytime within component function body"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• فقط در useEffect یا event handlers\n" +
            "- نه در render body\n" +
            "- render phase باید pure باشد\n" +
            "- بعد از mount قابل دسترس\n" +
            "- side effect محسوب می‌شود"
    },
    {
        "id": 380,
        "question": "What value does useRef return initially?",
        "options": [
            "Object with current property set to initial value",
            "Function that returns current reference value",
            "Array containing current value and setter function",
            "Promise that resolves to reference value"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• object با property به نام current\n" +
            "- { current: initialValue }\n" +
            "- current mutable است\n" +
            "- همان object در renders\n" +
            "- stable reference"
    },
    {
        "id": 381,
        "question":  "How does useRef differ from useState when storing values across renders?",
        "options": [
            "useRef updates do not trigger re-renders, while useState updates do",
            "useRef values reset on every render, while useState persists them",
            "useRef only stores DOM nodes, while useState can store any data",
            "useRef is asynchronous, while useState is synchronous"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• useRef تغییر بدون re-render\n" +
            "- useState تغییر با re-render\n" +
            "- ref برای non-UI values\n" +
            "- state برای UI-affecting values\n" +
            "- useRef synchronous، useState asynchronous"
    },
    {
        "id": 382,
        "question": "What is the difference between useRef and createRef?",
        "options": [
            "No difference, they are identical",
            "useRef persists across renders, createRef creates new each time",
            "createRef is for functional components only",
            "useRef is deprecated, use createRef"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• useRef همان object را در renders نگه می‌دارد\n" +
            "- createRef هر بار object جدید می‌سازد\n" +
            "- useRef برای function components\n" +
            "- createRef برای class components\n" +
            "- در function components حتماً useRef"
    },
    {
        "id": 383,
        "question": "Can you pass refs between components?",
        "options": [
            "Yes, refs can be passed like props",
            "No, refs are component-private only",
            "Yes, using forwardRef wrapper",
            "Only in Class Components"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• با React.forwardRef می‌توانید ref را forward کنید\n" +
            "- ref به عنوان prop pass نمی‌شود (reserved)\n" +
            "- forwardRef component را wrap می‌کند\n" +
            "- ref به عنوان argument دوم می‌آید\n" +
            "- برای library components مفید است"
    },
    {
        "id": 384,
        "question": "What is the useImperativeHandle hook used for?",
        "options": [
            "To expose custom instance methods to parent via ref",
            "To handle imperative animations",
            "To manage component lifecycle imperatively",
            "To replace useEffect with imperative code"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• useImperativeHandle متدهای custom را از طریق ref expose می‌کند\n" +
            "- با forwardRef استفاده می‌شود\n" +
            "- parent می‌تواند این متدها را صدا بزند\n" +
            "- برای control کردن child از parent\n" +
            "- مثل focus()، play()، pause() custom"
    },
    {
        "id": 385,
        "question": "When should you use refs instead of state?",
        "options": [
            "Always use refs for better performance",
            "When value doesn't affect render output",
            "Never, state is always better",
            "Only for DOM manipulation"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• refs برای values که render را trigger نمی‌کنند\n" +
            "- مثل timer IDs، previous values\n" +
            "- DOM references برای focus یا scroll\n" +
            "- mutable values که UI effect ندارند\n" +
            "- state برای data که UI را affect می‌کند"
    },
    {
        "id": 386,
        "question": "Can you store interval or timeout IDs in refs?",
        "options": [
            "No, use state instead",
            "Yes, refs are perfect for this",
            "Only with special configuration",
            "Intervals don't work with React"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• refs عالی برای storing timer IDs هستند\n" +
            "- تغییر ref re-render نمی‌کند\n" +
            "- می‌توانید در cleanup آن را clear کنید\n" +
            "- const timerRef = useRef()\n" +
            "- timerRef.current = setInterval(...)"
    },
    {
        "id": 387,
        "question": "What happens if you update ref.current during render?",
        "options": [
            "It's fine, no side effects",
            "Causes component to re-render immediately",
            "Should be avoided, may cause issues",
            "Ref updates are ignored during render"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• updating ref.current در render phase باید avoided شود\n" +
            "- می‌تواند باعث inconsistency شود\n" +
            "- render باید pure باشد\n" +
            "- در useEffect یا event handlers update کنید\n" +
            "- exception: اولین render برای initialize"
    },
    {
        "id": 388,
        "question": "Can refs be used in Server Components?",
        "options": [
            "Yes, refs work everywhere",
            "No, refs require client-side interactivity",
            "Only with special server-refs",
            "Only for reading, not writing"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• refs در Server Components کار نمی‌کنند\n" +
            "- نیاز به client-side interactivity دارند\n" +
            "- DOM reference در server وجود ندارد\n" +
            "- باید component را 'use client' کنید\n" +
            "- refs فقط در Client Components"
    },
    {
        "id": 389,
        "question": "How do you access child component methods from parent?",
        "options": [
            "Direct access through props",
            "Using forwardRef and useImperativeHandle",
            "Child methods are always accessible",
            "Use global event emitters"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation": "• با forwardRef + useImperativeHandle\n" +
            "- child با forwardRef wrap می‌شود\n" +
            "- useImperativeHandle متدها را expose می‌کند\n" +
            "- parent با ref.current.method() صدا می‌زند\n" +
            "- encapsulation را حفظ می‌کند"
    },
    {
        "id": 390,
        "question":"What is a common use case for using useRef with timers?",
        "options": [
            "Automatically re-rendering the component when the timer completes",
            "Storing a timer ID so it can be cleared later",
            "Synchronizing multiple timers across components",
            "Replacing setTimeout with a synchronous execution"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• storing timer ID برای clearInterval/clearTimeout\n" +
            "- timerRef.current = setInterval(...)\n" +
            "- در cleanup: clearInterval(timerRef.current)\n" +
            "- بدون re-render\n" +
            "- persistent بین renders"
    },
    {
        "id": 391,
        "question": "Why is useRef often used to store previous values in a component?",
        "options": [
            "Because useRef automatically tracks a history of values",
            "Because useRef values trigger updates when they change",
            "Because useRef stores values without causing re-renders",
            "Because useRef has built-in comparison helpers for values"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• ذخیره value قبلی بدون re-render\n" +
            "- comparison با value فعلی\n" +
            "- usePrevious custom hook\n" +
            "- state قبلی در memory\n" +
            "- برای detecting changes"
    },
    {
        "id": 392,
        "question": "What happens to a ref when its component unmounts?",
        "options": [
            "The ref value stays in memory until you clear it manually",
            "The ref is reset and its memory can be freed automatically",
            "Accessing the ref after unmount will throw an error",
            "The ref is passed to the parent component automatically"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• ref garbage collected می‌شود\n" +
            "- memory آزاد می‌شود\n" +
            "- automatic cleanup\n" +
            "- DOM references نیز cleared\n" +
            "- memory leak نمی‌کند"
    },
    {
        "id": 393,
        "question": "Can refs be passed to child components as props?",
        "options": [
            "Yes, refs can always be passed like any normal prop",
            "No, refs cannot be shared between components",
            "Yes, but it requires using forwardRef in the child component",
            "No, refs only work in the component where they are declared"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "Can refs be passed to child components as props?\",\n" +
            "\"explanation\": \"• نه به صورت مستقیم، ref reserved است\\n\" +\n" +
            "    \"- باید از forwardRef استفاده کنید\\n\" +\n" +
            "    \"- یا نام دیگری بدهید\\n\" +\n" +
            "    \"- React.forwardRef wrapper\\n\" +\n" +
            "    \"- special handling لازم"
    },
    {
        "id": 394,
        "question": "What is the primary purpose of forwardRef in React?",
        "options": [
            "To create multiple refs inside a single component",
            "To allow a parent component to pass a ref to a child component",
            "To convert refs into state variables automatically",
            "To clear a ref when a component unmounts"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• passing ref از parent به child component\n" +
            "- child می‌تواند DOM element را expose کند\n" +
            "- ref در props نیست\n" +
            "- argument دوم در component function\n" +
            "- برای library components"
    },
    {
        "id": 395,
        "question": "When is useRef preferable over using a regular variable in a function component?",
        "options": [
            "When you need a value to persist across re-renders",
            "When you want a change in value to trigger a re-render",
            "When you need to share values between different components",
            "When you want to reset a value every time the component renders"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• وقتی value باید persist بین renders\n" +
            "- let variable هر render reset می‌شود\n" +
            "- ref.current نگه داشته می‌شود\n" +
            "- برای mutable values\n" +
            "- stable reference"
    },
    {
        "id": 396,
        "question": "What types of values can be stored in a useRef?",
        "options": [
            "Only DOM element references for direct manipulation",
            "Only primitive values like numbers and strings",
            "Any mutable value including objects, arrays, or functions",
            "Only values that implement a special React interface"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• هر type: primitives، objects، arrays، functions\n" +
            "- DOM references\n" +
            "- timer IDs\n" +
            "- previous values\n" +
            "- any mutable value"
    },
    {
        "id": 397,
        "question":"How can you focus an input element using useRef?",
        "options": [
            "By calling inputRef.current.focus() inside an effect or event handler",
            "By calling inputRef.focus() directly during render",
            "By invoking inputRef.current() with 'focus' as a parameter",
            "By setting a 'focus' property with inputRef.setValue()"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• برای focus کردن input باید inputRef.current.focus() را در useEffect یا event handler فراخوانی کنیم\n" +
            "- ref.current به المنت DOM واقعی اشاره می‌کند و تمام متدهای DOM مثل focus() را دارد\n" +
            "- نباید در حین render مستقیماً DOM را دستکاری کرد، بلکه باید در effect یا event handler انجام شود"
    },
    {
        "id": 398,
        "question": "What is the main difference between refs and state in React?",
        "options": [
            "Refs store immutable values, while state stores mutable values",
            "Refs trigger re-renders, while state manages lifecycle events",
            "Refs persist values without re-rendering, while state updates trigger re-renders",
            "Refs only store objects, while state only stores primitive values"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• refs: persist بدون re-render\n" +
            "- state: persist با re-render\n" +
            "- refs: mutable directly\n" +
            "- state: immutable updates\n" +
            "- use cases متفاوت"
    },
    {
        "id": 399,
        "question":"Can you attach both capturing and bubbling event listeners on the same element in React?",
        "options": [
            "Yes, bubbling listeners run before capturing listeners on the same element",
            "No, React allows only one event phase per element",
            "Yes, capturing listeners run before bubbling listeners on the same element",
            "No, attaching both phases causes runtime errors"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• بله، با addEventListener دو بار\n" +
            "- یکی با capture: true\n" +
            "- یکی با capture: false\n" +
            "- capturing اول اجرا می‌شود\n" +
            "- هر دو handlers execute می‌شوند"
    },
    {
        "id": 400,
        "question": "What is the primary purpose of a mutation in React Query?",
        "options": [
            "To create, update, or delete server data",
            "To read server data from the cache only",
            "To render React components",
            "To automatically generate CSS styles"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• تغییر دادن server data\n" +
            "- POST، PUT، PATCH، DELETE\n" +
            "- create، update، delete operations\n" +
            "- side effects روی server\n" +
            "- opposite از queries (read-only)"
    },
    {
        "id": 401,
        "question": "Which React Query hook is used for modifying server data?",
        "options": [
            "useQuery for fetching data",
            "useMutation for modifying server data",
            "useEffect for managing side effects",
            "useState for updating local state"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• useMutation برای CUD operations\n" +
            "- create، update، delete\n" +
            "- useQuery فقط برای read\n" +
            "- mutate function برای trigger\n" +
            "- callbacks برای side effects"
    },
    {
        "id": 402,
        "question":"Why use mutation callbacks like onSuccess in React Query?",
        "options": [
            "To update the cache or trigger side effects after a mutation",
            "To transform mutations into query operations",
            "To block UI updates after data changes",
            "To permanently disable caching mechanisms"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation": "• اجرای code بعد از successful mutation\n" +
            "- invalidate کردن queries\n" +
            "- showing success messages\n" +
            "- navigation به صفحه دیگر\n" +
            "- side effects management"
    },
    {
        "id": 403,
        "question": "What does offline support enable in React Query?",
        "options": [
            "Blocking all server communication permanently",
            "Automatically reloading the entire page when offline",
            "Turning queries into static file operations",
            "Queuing mutations until the network is available"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• ذخیره mutations در queue وقتی offline\n" +
            "- وقتی online شد، اجرا می‌شوند\n" +
            "- seamless user experience\n" +
            "- automatic retry mechanism\n" +
            "- persistence بین page refreshes"
    },
    {
        "id": 404,
        "question": "How does React Query provide a smooth offline experience?",
        "options": [
            "By disabling all UI components",
            "By serving cached data and queuing mutations",
            "By blocking queries from executing again",
            "By converting asynchronous API calls into synchronous ones"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• cached data فوراً نشان داده می‌شود\n" +
            "- mutations در queue ذخیره می‌شوند\n" +
            "- optimistic updates\n" +
            "- automatic sync وقتی reconnect\n" +
            "- user می‌تواند کار کند offline"
    },
    {
        "id": 405,
        "question":"Which combination supports effective offline-first behavior?",
        "options": [
            "Permanently disabling staleTime and cacheTime",
            "Managing server state only with useState",
            "Combining caching, background refetching, and mutation queuing",
            "Clearing the cache whenever the app reconnects"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• caching: instant data access\n" +
            "- background refetching: freshness\n" +
            "- mutation queuing: offline operations\n" +
            "- persistence: survive page refresh\n" +
            "- ترکیب همه برای best experience"
    },
    {
        "id": 406,
        "question":  "Why is React Query valuable for managing server state?",
        "options": [
            "It automates fetching, caching, and synchronization of data",
            "It only replaces react's useState and useEffect for local state",
            "It automatically generates UI components",
            "It completely disables all network requests"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• automating fetching، caching، synchronization\n" +
            "- کاهش boilerplate code\n" +
            "- loading و error states automatic\n" +
            "- background updates\n" +
            "- alternative به Redux برای server data"
    },
    {
        "id": 407,
        "question": "Which problems does React Query solve in applications?",
        "options": [
            "Automatically applying styles to components without CSS",
            "Preventing duplicate network requests and keeping server data in sync",
            "Eliminating the need for any backend APIs",
            "Allowing React apps to work entirely without state management"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• جلوگیری از duplicate requests\n" +
            "- keeping data synchronized\n" +
            "- caching برای performance\n" +
            "- background refetching\n" +
            "- ساده‌سازی async state management"
    },
    {
        "id": 408,
        "question": "Why is manual server state management challenging?",
        "options": [
            "Because React Query is needed to create components",
            "Because it blocks component rendering completely",
            "Because caching, synchronization, and updates are complex to handle by hand",
            "Because it automatically transforms APIs between REST and GraphQL"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation": "• caching پیچیده برای implement\n" +
            "- synchronization بین components\n" +
            "- handling loading/error states\n" +
            "- avoiding duplicate requests\n" +
            "- React Query این مشکلات را حل می‌کند"
    },
    {
        "id": 409,
        "question":"How do useQuery and useMutation differ in purpose?",
        "options": [
            "useQuery styles components, useMutation handles routing",
            "useQuery manages local storage, useMutation controls authentication",
            "useQuery updates the DOM, useMutation adds event listeners",
            "useQuery fetches data, useMutation modifies data",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• useQuery برای reading/fetching data\n" +
            "- GET requests\n" +
            "- useMutation برای modifying data\n" +
            "- POST، PUT، DELETE requests\n" +
            "- read vs write operations"
    },
    {
        "id": 410,
        "question": "Which React Query hook is mainly responsible for fetching and caching server data?",
        "options": [
            "useMutation",
            "useReducer",
            "useQuery",
            "useEffect"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• useQuery برای data fetching\n" +
            "- automatic caching\n" +
            "- background refetching\n" +
            "- stale-while-revalidate\n" +
            "- primary hook برای GET operations"
    },
    {
        "id": 411,
        "question": "Where should images be stored in a React project to achieve better optimization and performance?",
        "options": [
            "In the public folder for faster serving",
            "In the src folder and imported in components",
            "Inside a CSS file as base64 strings",
            "On a remote server without compression"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• تصاویر در فولدر src هنگام build بهینه‌سازی می‌شوند\n" +
            "• ابزارهایی مانند Webpack یا Vite آن‌ها را فشرده و با نام هش ذخیره می‌کنند\n" +
            "• این روش موجب بهبود سرعت بارگذاری و مدیریت بهتر کش مرورگر می‌شود"
    },
    {
        "id": 412,
        "question": "What is the default behavior of images stored inside the public folder in a React project?",
        "options": [
            "They are automatically optimized during build",
            "They are bundled together with JavaScript code",
            "They are served directly without build-time optimization",
            "They are converted into WebP format automatically"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• تصاویر در فولدر public بدون فشرده‌سازی و بهینه‌سازی ارائه می‌شوند\n" +
            "• فایل‌ها مستقیماً از سرور برای مرورگر ارسال می‌شوند\n" +
            "• مناسب برای فایل‌های عمومی مانند favicon یا robots.txt هستند"
    },
    {
        "id": 413,
        "question": "Which feature in Next.js provides automatic image optimization, resizing, and lazy loading?",
        "options": [
            "React.StrictMode for image validation",
            "Next.js <Image> component for optimized images",
            "Webpack DevServer for live reloading",
            "React.lazy for component-level optimization"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• کامپوننت <Image> در Next.js به‌طور خودکار اندازه‌ی تصاویر را مدیریت می‌کند\n" +
            "• تصاویر را به فرمت‌های مدرن مانند WebP تبدیل می‌نماید\n" +
            "• lazy loading را فعال کرده و عملکرد صفحه را بهبود می‌دهد"
    },
    {
        "id": 414,
        "question": "What is a major disadvantage of storing images inside the public folder?",
        "options": [
            "They skip optimization and remain uncompressed",
            "They cause errors during component rendering",
            "They are converted to different formats automatically",
            "They cannot be accessed from environment variables"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• تصاویر در فولدر public در مرحله‌ی build پردازش نمی‌شوند\n" +
            "• هیچ فشرده‌سازی یا تغییر اندازه‌ای روی آن‌ها انجام نمی‌شود\n" +
            "• این موضوع می‌تواند باعث افزایش حجم و کاهش سرعت بارگذاری شود"
    },
    {
        "id": 415,
        "question": "Why is importing images from the src folder considered a better practice in React?",
        "options": [
            "Because it allows auto-optimization and cache busting",
            "Because it avoids the need for static assets",
            "Because it disables code splitting for images",
            "Because it removes them from the final build output"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• ایمپورت تصاویر از src باعث وارد شدن آن‌ها به فرایند build می‌شود\n" +
            "• ابزارهای build آن‌ها را فشرده و نام فایل‌ها را هش می‌کنند\n" +
            "• نتیجه: عملکرد بهتر، کش مؤثرتر و حجم کمتر فایل‌ها"
    },
    {
        "id": 416,
        "question": "In React Query, what occurs when multiple useQuery hooks use the same queryKey?",
        "options": [
            "Each query executes independently without caching",
            "React Query shares and reuses the cached data across them",
            "It throws an error and crashes the application",
            "Only the first query runs while the others are skipped"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• data sharing بین hooks\n" +
            "- فقط یک request\n" +
            "- همه از cache یکسان استفاده می‌کنند\n" +
            "- automatic deduplication\n" +
            "- efficient data management"
    },
    {
        "id": 417,
        "question": "Which pattern helps prevent unnecessary network requests when using useQuery?",
        "options": [
            "Use a unique queryKey with caching enabled",
            "Disable caching to always fetch fresh data",
            "Wrap useQuery inside useEffect on every render",
            "Manually trigger refetch on every component mount"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• unique queryKey با caching enabled\n" +
            "- staleTime برای control کردن freshness\n" +
            "- cache hit به جای network request\n" +
            "- refetchOnWindowFocus کنترل شده\n" +
            "- smart defaults"
    },
    {
        "id": 418,
        "question":"Which practice improves efficiency when using useQuery?",
        "options": [
            "Provide unique queryKeys and leverage caching",
            "Turn off caching completely for faster updates",
            "Call useQuery only inside a useEffect hook",
            "Refetch data manually each time instead of using cache"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• providing unique queryKeys\n" +
            "- leveraging caching mechanism\n" +
            "- appropriate staleTime values\n" +
            "- avoiding unnecessary refetches\n" +
            "- proper dependency arrays"
    },
    {
        "id": 419,
        "question":"Which React Query hook is used for creating, updating, or deleting server data?",
        "options": [
            "useQuery",
            "useMutation",
            "useReducer",
            "useState"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• useMutation برای CUD operations\n" +
            "- POST: create\n" +
            "- PUT/PATCH: update\n" +
            "- DELETE: remove\n" +
            "- side effects روی server"
    },
    {
        "id": 420,
        "question":  "After a successful mutation, what is the recommended way to update cached queries?",
        "options": [
            "Reload the entire page to get fresh data",
            "Invalidate or update related query keys",
            "Reset local state manually using useState",
            "Run the same mutation again to refresh data"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• invalidate کردن related query keys\n" +
            "- queryClient.invalidateQueries\n" +
            "- باعث refetch می‌شود\n" +
            "- یا manual update با setQueryData\n" +
            "- sync کردن cache با server"
    },
    {
        "id": 421,
        "question": "Which statement about useMutation compared to useQuery is correct?",
        "options": [
            "useMutation executes synchronously by default",
            "useMutation only works with GraphQL APIs",
            "useMutation must be triggered manually and does not run automatically",
            "useMutation cannot handle error states"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• useMutation باید manually trigger شود\n" +
            "- mutate() function را call می‌کنید\n" +
            "- useQuery automatic run می‌شود\n" +
            "- mutations on-demand هستند\n" +
            "- queries eager loading"
    },
    {
        "id": 422,
        "question": "What is the primary purpose of the queryKey in useQuery?",
        "options": [
            "Uniquely identify queries for caching and refetching",
            "Define the API endpoint URL",
            "Specify the type of loading spinner to show",
            "Configure mutation success callbacks"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• unique identification برای query\n" +
            "- caching mechanism\n" +
            "- refetching control\n" +
            "- invalidation targeting\n" +
            "- array از identifiers"
    },
    {
        "id": 423,
        "question": "In React Query, what is the difference between staleTime and cacheTime?",
        "options": [
            "staleTime defines retry attempts; cacheTime defines error persistence",
            "Both represent the same concept of cache duration",
            "staleTime determines how long data is considered fresh; cacheTime controls how long inactive data stays in memory",
            "staleTime is only used for mutations; cacheTime only for queries"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• staleTime: مدت fresh بودن\n" +
            "- تا این مدت refetch نمی‌شود\n" +
            "- cacheTime: مدت ماندن inactive data\n" +
            "- garbage collection timing\n" +
            "- دو concept متفاوت"
    },
    {
        "id": 424,
        "question":"How can you prevent a useQuery from automatically running when a component mounts?",
        "options": [
            "Remove the queryKey entirely",
            "Use useMutation instead of useQuery",
            "Disable React StrictMode in the app",
            "Set enabled: false in the query options"
        ],
        "correctOption":3,
        "points": 10,
        "explanation":"• enabled: false در options\n" +
            "- query run نمی‌شود تا true شود\n" +
            "- conditional fetching\n" +
            "- manual control\n" +
            "- refetch() برای manual trigger"
    },
    {
        "id": 425,
        "question":  "Which callback in useMutation is typically used to update the cache after a successful mutation?",
        "options": [
            "onSettled",
            "onMutate",
            "onSuccess",
            "onError"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• onSuccess callback\n" +
            "- دریافت mutation result\n" +
            "- invalidate queries\n" +
            "- setQueryData برای optimistic updates\n" +
            "- sync cache with server"
    },
    {
        "id": 426,
        "question":  "Why are optimistic updates useful in useMutation?",
        "options": [
            "They automatically retry failed requests",
            "They update the UI immediately before server response",
            "They prevent memory leaks in components",
            "They enforce unique query keys"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• UI بلافاصله update می‌شود\n" +
            "- قبل از server response\n" +
            "- instant feedback\n" +
            "- اگر fail شود rollback\n" +
            "- بهتر UX"
    },
    {
        "id": 427,
        "question": "Which React Query function is commonly used inside a mutation's onSuccess callback to refresh relevant queries?",
        "options": [
            "resetQueries",
            "refetchQueries",
            "cancelQueries",
            "invalidateQueries"
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• queryClient.invalidateQueries(['queryKey'])\n" +
            "- marking queries as stale\n" +
            "- trigger refetch\n" +
            "- sync کردن cache\n" +
            "- fresh data بعد از mutation"
    },
    {
        "id": 428,
        "question": "What happens when multiple queries are dependent in React Query?",
        "options": [
            "They run in parallel ignoring dependencies",
            "The next query waits for previous query's data",
            "All queries share the same queryKey",
            "Dependent queries are not supported"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• enabled option برای wait کردن\n" +
            "- query دوم منتظر data اولی\n" +
            "- enabled: !!previousData\n" +
            "- sequential fetching\n" +
            "- dependency chain"
    },
    {
        "id": 429,
        "question": "Which tool helps visualize query and mutation states during development?",
        "options": [
            "Redux DevTools",
            "React Query Devtools",
            "React Profiler",
            "Apollo Studio"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• React Query Devtools\n" +
            "- showing query states\n" +
            "- cache contents\n" +
            "- mutation status\n" +
            "- debugging tool powerful"
    },
    {
        "id": 430,
        "question": "Which option in useQuery allows background synchronization at intervals?",
        "options": [
            "cacheTime",
            "refetchInterval",
            "retry",
            "keepPreviousData"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• refetchInterval: milliseconds\n" +
            "- polling data\n" +
            "- refetchInterval: 5000 // هر 5 ثانیه\n" +
            "- real-time like behavior\n" +
            "- automatic periodic updates"
    },
    {
        "id": 431,
        "question": "Which useQuery option helps with pagination to avoid blank state while fetching new data?",
        "options": [
            "enabled",
            "refetchOnWindowFocus",
            "keepPreviousData",
            "retry"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• keepPreviousData: true\n" +
            "- previous page data نشان داده می‌شود\n" +
            "- تا new page load شود\n" +
            "- no blank screens\n" +
            "- smooth pagination"
    },
    {
        "id": 432,
        "question": "How does React Query ensure consistency between server and client after a mutation?",
        "options": [
            "Reload the browser window automatically",
            "Automatically invalidate all cached queries",
            "Invalidate specific queries or manually refetch",
            "Clear the entire cache immediately"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• invalidation و refetching strategies\n" +
            "- queryClient.invalidateQueries\n" +
            "- automatic refetch of stale queries\n" +
            "- optimistic updates با rollback\n" +
            "- cache synchronization"
    },
    {
        "id": 433,
        "question": "What is query invalidation in React Query?",
        "options": [
            "Marking queries stale to trigger refetch",
            "Deleting all cached data permanently",
            "Resetting all query keys globally",
            "Pausing queries until manually enabled"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• invalidation یعنی marking کردن query به عنوان stale\n" +
            "- باعث refetch خودکار می‌شود\n" +
            "- معمولاً بعد از mutations استفاده می‌شود\n" +
            "- با queryClient.invalidateQueries انجام می‌شود\n" +
            "- data را fresh و synchronized نگه می‌دارد"
    },
    {
        "id": 434,
        "question": "What does hydrate/dehydrate refer to in React Query?",
        "options": [
            "Saving and restoring query state for SSR",
            "Synchronizing queries with Redux store",
            "Exporting query data to JSON files",
            "Clearing memory leaks during refetch"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• dehydrate: ذخیره کردن query state برای SSR\n" +
            "- hydrate: بازگردانی query state در client\n" +
            "- برای server-side rendering استفاده می‌شود\n" +
            "- data از server به client منتقل می‌شود\n" +
            "- جلوگیری از refetch غیرضروری در client"
    },
    {
        "id": 435,
        "question": "What is the primary purpose of React Hook Form?",
        "options": [
            "Managing server-side data fetching",
            "Simplifying form state and validation",
            "Creating component animations",
            "Managing global application state"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• ساده‌سازی form state و validation management\n" +
            "- performance بالا با uncontrolled inputs\n" +
            "- کد کمتر نسبت به راه‌های سنتی\n" +
            "- built-in validation و error handling\n" +
            "- integration آسان با UI libraries"
    },
    {
        "id": 436,
        "question": "Which hook initializes a form in React Hook Form?",
        "options": [
            "useState",
            "useForm",
            "useController",
            "useReducer"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• useForm برای initialize کردن form\n" +
            "- register، handleSubmit و formState return می‌کند\n" +
            "- options مثل defaultValues و validation mode\n" +
            "- تمام form logic را مدیریت می‌کند\n" +
            "- یک بار در component صدا زده می‌شود"
    },
    {
        "id": 437,
        "question": "What does the register function do in React Hook Form?",
        "options": [
            "Submits form data to server",
            "Resets all form fields",
            "Connects inputs to form state",
            "Triggers form re-rendering"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• inputs را به form state متصل می‌کند\n" +
            "- validation rules را اضافه می‌کند\n" +
            "- با spread operator به input pass می‌شود\n" +
            "- onChange، onBlur و ref را set می‌کند\n" +
            "- tracking خودکار input values"
    },
    {
        "id": 438,
        "question": "Which function handles form submission in React Hook Form?",
        "options": [
            "useSubmit",
            "submitForm",
            "handleSubmit",
            "onSubmitHandler"
        ],
        "correctOption":2,
        "points": 10,
        "explanation":"• handleSubmit validation و submission را مدیریت می‌کند\n" +
            "- validation را قبل از submit اجرا می‌کند\n" +
            "- در صورت موفقیت، callback را صدا می‌زند\n" +
            "- data را به صورت object می‌دهد\n" +
            "- preventDefault خودکار"
    },
    {
        "id": 439,
        "question": "How do you apply validation rules in React Hook Form?",
        "options": [
            "Add attributes directly to input",
            "Wrap input in Validation component",
            "Pass options object to register",
            "Use useValidation hook"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• options object را به register pass می‌کنید\n" +
            "- مثل { required: true, minLength: 3 }\n" +
            "- pattern، validate و custom rules\n" +
            "- error messages قابل customize\n" +
            "- validation مثل HTML5 اما قدرتمندتر"
    },
    {
        "id": 440,
        "question": "What does the errors object represent in useForm?",
        "options": [
            "List of server-side API errors",
            "Runtime errors during rendering",
            "Validation errors for form fields",
            "React component errors"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• شامل validation errors برای هر field\n" +
            "- از formState.errors دریافت می‌شود\n" +
            "- type و message برای هر error\n" +
            "- برای نمایش error messages استفاده می‌شود\n" +
            "- به صورت real-time update می‌شود"
    },
    {
        "id": 441,
        "question": "Why is React Hook Form performant?",
        "options": [
            "Automatically fetches data from APIs",
            "Reduces re-renders with isolated reactivity",
            "Compiles forms into WebAssembly",
            "Disables validation for speed"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• از uncontrolled inputs استفاده می‌کند\n" +
            "- re-renders را به minimum می‌رساند\n" +
            "- isolated re-rendering فقط برای changed fields\n" +
            "- بدون dependencies سنگین\n" +
            "- native HTML validation هم support می‌کند"
    },
    {
        "id": 442,
        "question": "Which hook controls custom components in React Hook Form?",
        "options": [
            "useController",
            "useFormContext",
            "useCustomInput",
            "useReducer"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• useController برای controlled components\n" +
            "- field object با value، onChange و onBlur\n" +
            "- برای third-party UI libraries مفید\n" +
            "- مثل Material-UI یا Ant Design\n" +
            "- Controller component هم همین کار را می‌کند"
    },
    {
        "id": 443,
        "question": "Which method lets you programmatically update a field’s value?",
        "options": [
            "updateField",
            "setValue",
            "patch",
            "replaceValue"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• setValue برای تغییر مقدار field به صورت برنامه‌نویسی\n" +
            "- fieldName و value را می‌گیرد\n" +
            "- options برای validation و touched\n" +
            "- مفید برای dynamic updates\n" +
            "- مثل auto-fill یا reset کردن fields"
    },
    {
        "id": 444,
        "question": "What problem does useController solve?",
        "options": [
            "Integrating controlled components with React Hook Form",
            "Handling async validation across multiple fields",
            "Improving form styling with custom CSS",
            "Fetching form data from external APIs"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• integration با controlled components\n" +
            "- third-party libraries که controlled هستند\n" +
            "- access به field state و methods\n" +
            "- consistency با React Hook Form\n" +
            "- alternative به Controller component"
    },
    {
        "id": 445,
        "question": "Why does React Hook Form rely primarily on uncontrolled inputs?",
        "options": [
            "Because uncontrolled inputs validate themselves automatically",
            "Because controlled inputs are not React-compatible",
            "Because uncontrolled inputs reduce re-renders significantly",
            "Because uncontrolled inputs are easier to style"
        ],
        "correctOption":2,
        "points": 20,
        "explanation":"• uncontrolled inputs re-renders کمتری دارند\n" +
            "- performance بهتر برای forms بزرگ\n" +
            "- React state را برای هر keystroke update نمی‌کند\n" +
            "- DOM خودش value را نگه می‌دارد\n" +
            "- فقط در submit مقادیر خوانده می‌شوند"
    },
    {
        "id": 446,
        "question": "Which option best describes the role of resolvers?",
        "options": [
            "They provide schema-based validation support",
            "They handle async form submissions automatically",
            "They manage form context across components",
            "They improve rendering performance significantly"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• resolvers برای schema-based validation\n" +
            "- integration با Yup، Zod، Joi\n" +
            "- validation rules centralized\n" +
            "- type safety با TypeScript\n" +
            "- reusable validation schemas"
    },
    {
        "id": 447,
        "question": "Which hook reads field value without subscribing to updates?",
        "options": [
            "setValue",
            "watch",
            "getValues",
            "trigger"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• getValues مقدار field را بدون subscription می‌خواند\n" +
            "- re-render نمی‌کند\n" +
            "- برای read-only access مناسب\n" +
            "- watch برای subscription استفاده می‌شود\n" +
            "- performance بهتر برای simple reads"
    },
    {
        "id": 448,
        "question": "How can you implement async validation for username?",
        "options": [
            "By using watch with useEffect hook",
            "By wrapping inputs in FormProvider component",
            "By manually calling setValue in onChange",
            "By using async resolver or validate function",
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• validate function با async/await\n" +
            "- API call برای check کردن availability\n" +
            "- return true/false یا error message\n" +
            "- در register options قرار می‌گیرد\n" +
            "- debounce برای کاهش API calls"
    },
    {
        "id": 449,
        "question": "What is one key performance advantage of React Hook Form?",
        "options": [
            "It uses uncontrolled inputs reducing re-renders",
            "It automatically caches all inputs in Redux",
            "It ships smaller bundle but causes re-renders",
            "It doesn't support any validation rules"
        ],
        "correctOption": 0,
        "points": 30,
        "explanation":"• uncontrolled inputs باعث کاهش re-renders\n" +
            "- isolated field updates\n" +
            "- تنها changed fields re-render می‌شوند\n" +
            "- bundle size کوچک\n" +
            "- native validation support"
    },
    {
        "id": 450,
        "question": "What is the primary purpose of the useForm hook?",
        "options": [
            "To handle component lifecycle methods",
            "To register inputs and manage form state",
            "To create global state across components",
            "To render conditional UI elements"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• مدیریت کامل form state و behavior\n" +
            "- register برای inputs، handleSubmit برای submission\n" +
            "- formState برای errors و touched\n" +
            "- validation و error handling\n" +
            "- core hook در React Hook Form"
    },
    {
        "id": 451,
        "question": "Which prop must be applied for React Hook Form tracking?",
        "options": [
            "onChange",
            "value",
            "register",
            "ref"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• register باید به input apply شود\n" +
            "- با spread operator: {...register('name')}\n" +
            "- بدون register، tracking نمی‌شود\n" +
            "- validation rules در register\n" +
            "- onChange و ref خودکار set می‌شوند"
    },
    {
        "id": 452,
        "question":  "What does the handleSubmit function return?",
        "options": [
            "The final form values as object",
            "A reset function for form fields",
            "Nothing, it just triggers re-renders component",
            "A callback validating inputs and triggering handler",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• callback که validation و submission را handle می‌کند\n" +
            "- به onSubmit در form pass می‌شود\n" +
            "- validation قبل از callback\n" +
            "- preventDefault خودکار\n" +
            "- data به صورت object در callback"
    },
    {
        "id": 453,
        "question": "How can you provide default values to a form?",
        "options": [
            "By setting value attribute directly on inputs",
            "By passing defaultValues object to useForm",
            "By calling reset after component rendering",
            "By wrapping inputs in FormProvider component"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• defaultValues در useForm options\n" +
            "- object با field names و values\n" +
            "- برای edit forms مفید\n" +
            "- async defaultValues هم support می‌شود\n" +
            "- reset() می‌تواند به defaultValues برگردد"
    },
    {
        "id": 454,
        "question": "Which hook allows subscribing to specific field changes?",
        "options": [
            "useEffect",
            "watch",
            "useFormContext",
            "trigger"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• watch برای subscribe به field changes\n" +
            "- می‌تواند یک یا چند field را watch کند\n" +
            "- re-render می‌کند وقتی value تغییر کند\n" +
            "- برای conditional rendering مفید\n" +
            "- getValues برای بدون re-render"
    },
    {
        "id": 455,
        "question": "What is the main use of FormProvider and useFormContext?",
        "options": [
            "To style forms globally across application",
            "To share form state across nested components",
            "To reset form values automatically",
            "To connect multiple forms together"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• sharing form methods بین nested components\n" +
            "- بدون prop drilling\n" +
            "- FormProvider در بالا، useFormContext در children\n" +
            "- برای forms پیچیده با deeply nested fields\n" +
            "- Context API pattern"
    },
    {
        "id": 456,
        "question":  "Which method manually triggers validation for fields?",
        "options": [
            "reset",
            "validate",
            "trigger",
            "checkValidity"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• trigger برای manual validation\n" +
            "- می‌تواند یک یا همه fields را validate کند\n" +
            "- async است و boolean return می‌کند\n" +
            "- برای custom validation timing\n" +
            "- مثل onBlur یا button click"
    },
    {
        "id": 457,
        "question": "How do you reset all fields to initial values?",
        "options": [
            "resetForm()",
            "reset()",
            "clear()",
            "resetFields()"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• reset() همه fields را به default برمی‌گرداند\n" +
            "- errors و touched را clear می‌کند\n" +
            "- می‌تواند values جدید بگیرد\n" +
            "- مفید بعد از successful submission\n" +
            "- state کامل form را reset می‌کند"
    },
    {
        "id": 458,
        "question":  "Which option prevents query from running on mount?",
        "options": [
            "`enabled`",
            "`refetchOnMount`",
            "`refetchIntervalOnMount`",
            "`retry`"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• enabled: false در useQuery options\n" +
            "- query تا true شدن اجرا نمی‌شود\n" +
            "- برای conditional fetching\n" +
            "- مثل منتظر ماندن برای user input\n" +
            "- manual refetch با refetch() همیشه کار می‌کند"
    },
    {
        "id": 459,
        "question":  "Which option controls refetch on window focus?",
        "options": [
            "`enabled`",
            "`refetchOnWindowFocus`",
            "`refetchOnMount`",
            "`refetchInterval`"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• refetchOnWindowFocus در query options\n" +
            "- پیش‌فرض true است\n" +
            "- وقتی tab دوباره focus شود، refetch می‌کند\n" +
            "- برای keeping data fresh\n" +
            "- می‌توانید false کنید برای disable"
    },
    {
        "id": 460,
        "question":"How do you poll data every 10 seconds in background?",
        "options": [
            "`refetchInterval: 10000` and `refetchIntervalInBackground: true`",
            "`refetchOnWindowFocus: true` and `refetchInterval: 10000`",
            "`enabled: true` and `refetchOnMount: always`",
            "`retry: 3` and `refetchIntervalOnMount: true`"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• refetchInterval: 10000 برای polling\n" +
            "- refetchIntervalInBackground: true برای background\n" +
            "- حتی وقتی tab focus ندارد\n" +
            "- برای real-time data مفید\n" +
            "- automatic cleanup وقتی component unmount شود"
    },
    {
        "id": 461,
        "question": "What does refetchIntervalOnMount option control?",
        "options": [
            "Whether queries refetch when window regains focus",
            "Whether query starts polling immediately on mount",
            "How many retries attempted on failure",
            "Whether query data is fresh or stale"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• آیا interval بلافاصله در mount شروع شود\n" +
            "- یا منتظر اولین interval بماند\n" +
            "- پیش‌فرض true است\n" +
            "- برای timing دقیق polling\n" +
            "- با refetchInterval کار می‌کند"
    },
    {
        "id": 462,
        "question": "What happens when cached data becomes stale?",
        "options": [
            "Cached data is deleted from memory automatically",
            "Query state updates to 'stale' allowing custom effects",
            "Query immediately refetches data regardless of settings",
            "All queries in cache are reset"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• query state به 'stale' تغییر می‌کند\n" +
            "- اما data هنوز در cache است و قابل استفاده\n" +
            "- در background refetch می‌شود\n" +
            "- staleTime مدت زمان fresh بودن را کنترل می‌کند\n" +
            "- این behavior مطلوب برای UX است"
    },
    {
        "id": 463,
        "question":  "Why is TanStack Query considered state management library?",
        "options": [
            "It allows direct modification of component state",
            "It manages server state and keeps UI synchronized",
            "It replaces Redux for all local state",
            "It automatically generates forms from API data"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• server state را manage می‌کند\n" +
            "- caching، synchronization و updates\n" +
            "- state بین components share می‌شود\n" +
            "- lifecycle management برای async data\n" +
            "- alternative برای Redux برای server state"
    },
    {
        "id": 464,
        "question":"Which combination allows polling data in background?",
        "options": [
            "refetchInterval: 5000 and refetchIntervalInBackground: true",
            "staleTime: 0 and enabled: true",
            "cacheTime: 10000 and refetchOnWindowFocus: true",
            "retry: 3 and refetchOnMount: false"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• refetchInterval + refetchIntervalInBackground: true\n" +
            "- حتی وقتی window focus ندارد\n" +
            "- برای real-time updates\n" +
            "- مثل notifications یا live scores\n" +
            "- باید با احتیاط استفاده شود (battery/bandwidth)"
    },
    {
        "id": 465,
        "question": "What does CRUD stand for in application development?",
        "options": [
            "Compute, Render, Upload, Deploy",
            "Create, Read, Update, Delete",
            "Check, Run, Undo, Debug",
            "Connect, Retry, Update, Deliver"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Create: ساخت record جدید\n" +
            "- Read: خواندن/دریافت data\n" +
            "- Update: تغییر دادن existing data\n" +
            "- Delete: حذف کردن record\n" +
            "- چهار عملیات اصلی database"
    },
    {
        "id": 466,
        "question": "Which of the following represents the 'Read' operation?",
        "options": [
            "Adding a new user to database",
            "Fetching a list of cabins from Supabase",
            "Changing a user's password field",
            "Deleting a cabin from system"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• fetching یا retrieving data از database\n" +
            "- HTTP GET method\n" +
            "- useQuery در React Query\n" +
            "- نمایش data به user\n" +
            "- بدون تغییر در server"
    },
    {
        "id": 467,
        "question": "Which hook is most commonly used for 'Update' operation?",
        "options": [
            "useEffect",
            "useQuery",
            "useMutation",
            "useContext"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• useMutation برای update operations\n" +
            "- HTTP PUT یا PATCH\n" +
            "- تغییر existing records\n" +
            "- invalidation برای sync کردن cache\n" +
            "- onSuccess برای UI updates"
    },
    {
        "id": 468,
        "question": "Which CRUD operation inserts new record into database?",
        "options": [
            "Create",
            "Read",
            "Update",
            "Delete"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• Create با HTTP POST\n" +
            "- record جدید در database\n" +
            "- useMutation در React Query\n" +
            "- server معمولاً ID generate می‌کند\n" +
            "- بعد از success، cache invalidation"
    },
    {
        "id": 469,
        "question": "Which CRUD operation retrieves data from API endpoint?",
        "options": [
            "Create",
            "Read",
            "Update",
            "Delete"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Read با HTTP GET\n" +
            "- useQuery در React Query\n" +
            "- فقط retrieve، بدون modification\n" +
            "- caching برای performance\n" +
            "- safe و idempotent"
    },
    {
        "id": 470,
        "question": "When modifying existing user's email, which CRUD applies?",
        "options": [
            "Create",
            "Read",
            "Update",
            "Delete"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• Update با PUT یا PATCH\n" +
            "- تغییر existing data\n" +
            "- useMutation در React Query\n" +
            "- PATCH اگر فقط email\n" +
            "- PUT اگر تمام user object"
    },
    {
        "id": 471,
        "question": "Which CRUD action permanently removes record from database?",
        "options": [
            "Create",
            "Read",
            "Update",
            "Delete"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation":"• Delete با HTTP DELETE\n" +
            "- حذف permanent از database\n" +
            "- useMutation برای این operation\n" +
            "- معمولاً confirmation لازم است\n" +
            "- cache invalidation بعد از success"
    },
    {
        "id": 472,
        "question":"Which hook is most suitable for Create, Update, Delete?",
        "options": [
            "useEffect",
            "useState",
            "useMutation",
            "useContext"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• useMutation برای همه CUD operations\n" +
            "- useQuery فقط برای Read\n" +
            "- mutations state را تغییر می‌دهند\n" +
            "- callbacks برای side effects\n" +
            "- optimistic updates support"
    },
    {
        "id": 473,
        "question": "Which CRUD operation requires invalidating cached queries?",
        "options": [
            "Only Read",
            "Create/Update/Delete",
            "All of them",
            "None of them"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• Create، Update، Delete همه نیاز به invalidation\n" +
            "- چون server state را تغییر می‌دهند\n" +
            "- cache باید sync شود\n" +
            "- Read نیازی به invalidation ندارد\n" +
            "- queryClient.invalidateQueries بعد از mutations"
    },
    {
        "id": 474,
        "question":  "Why is Update often more complex than Create?",
        "options": [
            "Because it bypasses state management entirely",
            "Because it does not require validation",
            "Because it must handle existing and new values",
            "Because it always deletes old records first",
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• باید existing values را handle کند\n" +
            "- merge کردن new و old data\n" +
            "- partial updates (PATCH) vs full (PUT)\n" +
            "- optimistic updates پیچیده‌تر\n" +
            "- validation برای هر دو حالت"
    },
    {
        "id": 475,
        "question": "What does TypeScript mainly add to JavaScript?",
        "options": [
            "Server-side rendering capabilities",
            "Static type checking",
            "Automatic UI rendering",
            "Database connectivity"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• static type checking در compile time\n" +
            "- errors را قبل از runtime می‌گیرد\n" +
            "- autocomplete و IntelliSense\n" +
            "- documentation از طریق types\n" +
            "- refactoring ایمن‌تر"
    },
    {
        "id": 476,
        "question":"Which of the following will TypeScript flag as error?",
        "options": [
            "let age: number = 30;",
            "age = 40;",
            "age = 'thirty';",
            "console.log(age);"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• age = 'thirty' چون age تایپ number است\n" +
            "- type mismatch خطا می‌دهد\n" +
            "- در compile time catch می‌شود\n" +
            "- از bugs runtime جلوگیری می‌کند\n" +
            "- type safety enforcement"
    },
    {
        "id": 477,
        "question":  "Why does TypeScript check function parameter types?",
        "options": [
            "To optimize runtime performance automatically",
            "To prevent passing arguments of incorrect type",
            "To convert JavaScript code to HTML",
            "To automatically fetch data from APIs"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• جلوگیری از passing wrong argument types\n" +
            "- function signature را enforce می‌کند\n" +
            "- compile time errors به جای runtime\n" +
            "- self-documenting code\n" +
            "- IDE support برای autocomplete"
    },
    {
        "id": 478,
        "question": "Which of these will TypeScript catch?",
        "options": [
            "Accessing non-existent property on object",
            "Logic errors in sorting algorithms",
            "Network request failures at runtime",
            "CSS styling errors in components"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• دسترسی به property که وجود ندارد\n" +
            "- object.nonExistentProperty\n" +
            "- typos در property names\n" +
            "- type safety برای objects\n" +
            "- logic errors را نمی‌گیرد"
    },
    {
        "id": 479,
        "question": "How does TypeScript handle null in string variable?",
        "options": [
            "It ignores the value completely",
            "It treats undefined as zero value",
            "It automatically converts null to empty string",
            "It throws compile error if strict mode enabled",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• در strict mode، null به string assign نمی‌شود\n" +
            "- compile error می‌دهد\n" +
            "- باید type را string | null کنید\n" +
            "- null safety enforcement\n" +
            "- از null reference errors جلوگیری"
    },
    {
        "id": 480,
        "question": "Why is TypeScript helpful in large React projects?",
        "options": [
            "It reduces runtime errors and improves productivity",
            "It automatically styles all React components",
            "It replaces Redux for state management",
            "It converts JSX to HTML directly"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• type safety برای props و state\n" +
            "- refactoring ایمن‌تر\n" +
            "- autocomplete برای productivity\n" +
            "- catch کردن errors در development\n" +
            "- documentation خودکار از types"
    },
    {
        "id": 481,
        "question":  "Which TypeScript feature prevents incorrect object shapes?",
        "options": [
            "Interfaces and type annotations",
            "React hooks for state",
            "Async/await syntax",
            "CSS modules system"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• interfaces و type annotations\n" +
            "- object structure را define می‌کنند\n" +
            "- required و optional properties\n" +
            "- compile time validation\n" +
            "- consistency در codebase"
    },
    {
        "id": 482,
        "question": "What kind of errors does TypeScript detect before runtime?",
        "options": [
            "Runtime network connection errors",
            "Compile-time type mismatches",
            "CSS styling layout mistakes",
            "User input validation errors"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• type mismatches و type errors\n" +
            "- undefined properties\n" +
            "- wrong function arguments\n" +
            "- در compile time catch می‌شود\n" +
            "- logic errors را نمی‌گیرد"
    },
    {
        "id": 483,
        "question": "Which of the following will TypeScript catch during development?",
        "options": [
            "Accessing property that doesn't exist on objects",
            "Logic errors in complex sorting algorithms",
            "API response failures during runtime execution",
            "Broken HTML layout and structure issues"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• accessing non-existent properties\n" +
            "- typos در property یا method names\n" +
            "- type mismatches\n" +
            "- در editor با red underline\n" +
            "- قبل از run کردن code"
    },
    {
        "id": 484,
        "question": "Why is detecting errors at compile-time useful?",
        "options": [
            "Generates CSS styles for components automatically",
            "Prevents runtime crashes improving code reliability",
            "Reduces network latency improving page speed",
            "Automatically fetches data from external APIs",
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• bugs را قبل از production می‌گیرد\n" +
            "- debugging آسان‌تر در development\n" +
            "- runtime crashes کمتر\n" +
            "- confidence بیشتر در refactoring\n" +
            "- user experience بهتر"
    },
    {
        "id": 485,
        "question": "Which scenario is a compile-time error TypeScript detects?",
        "options": [
            "Server not responding to network requests",
            "Button element not triggering click events",
            "Calling function with incorrect argument types",
            "User entering wrong login credentials"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation":"• calling function با wrong argument types\n" +
            "- myFunc(123) اگر string می‌خواهد\n" +
            "- در compile time error می‌دهد\n" +
            "- IDE قبل از run نشان می‌دهد\n" +
            "- network errors runtime هستند"
    },
    {
        "id": 486,
        "question": "Which TypeScript feature ensures errors before runtime?",
        "options": [
            "React hooks implementation",
            "Static type checking system",
            "CSS modules integration",
            "Browser developer tools"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• static type checking system\n" +
            "- analysis در compile time\n" +
            "- type inference و annotations\n" +
            "- strict mode برای safety بیشتر\n" +
            "- compiler errors قبل از execution"
    },
    {
        "id": 487,
        "question": "At which stage does TypeScript execute type checks?",
        "options": [
            "During runtime execution in browser",
            "During compilation before code runs",
            "After deployment to production server",
            "When user interacts with UI elements"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• during compilation قبل از run\n" +
            "- TypeScript به JavaScript compile می‌شود\n" +
            "- type checking در این مرحله\n" +
            "- runtime فقط JavaScript اجرا می‌شود\n" +
            "- types در compiled code نیستند"
    },
    {
        "id": 488,
        "question": "Why is React Hook Form popular among developers?",
        "options": [
            "Automatically generates CSS for form elements",
            "Provides performant form state management",
            "Replaces Redux for all state management",
            "Converts forms to server-side code"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• performance عالی با uncontrolled inputs\n" +
            "- API ساده و intuitive\n" +
            "- bundle size کوچک\n" +
            "- validation قدرتمند built-in\n" +
            "- DevEx خوب با TypeScript"
    },
    {
        "id": 489,
        "question": "Why does React Hook Form trigger fewer re-renders?",
        "options": [
            "Uses uncontrolled inputs reducing re-renders",
            "Automatically batches all network requests",
            "Only works with functional components",
            "Converts inputs to server variables"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• از uncontrolled inputs استفاده می‌کند\n" +
            "- DOM خودش values را نگه می‌دارد\n" +
            "- React state برای هر keystroke update نمی‌شود\n" +
            "- isolated re-rendering فقط لازم\n" +
            "- performance بهتر از Formik"
    },
    {
        "id": 490,
        "question": "In React forms, what is a controlled component?",
        "options": [
            "Component managing its own internal state",
            "Component fetching data from APIs automatically",
            "Component where React controls input value",
            "Component that cannot receive any props"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• component که React value را control می‌کند\n" +
            "- value از state می‌آید\n" +
            "- onChange state را update می‌کند\n" +
            "- React single source of truth است\n" +
            "- re-render در هر keystroke"
    },
    {
        "id": 491,
        "question": "What is best practice for showing validation errors?",
        "options": [
            "Show all error messages on mount",
            "Use touchedFields after user interaction",
            "Display errors only after submission",
            "Manually track blur with useState"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• استفاده از touchedFields بعد از interaction\n" +
            "- errors فقط برای touched fields\n" +
            "- بهتر از showing همه errors در mount\n" +
            "- UX بهتر برای user\n" +
            "- onBlur یا onChange برای timing"
    },
    {
        "id": 492,
        "question": "Which is best practice for error messages in forms?",
        "options": [
            "Manually implement blur tracking",
            "Show all errors immediately on mount",
            "Show errors only after form submission",
            "Use touchedFields after user interaction",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation":"• نمایش errors بعد از user interaction\n" +
            "- با touchedFields check کردن\n" +
            "- نه بلافاصله در mount\n" +
            "- progressive validation\n" +
            "- UX friendly approach"
    },
    {
        "id": 493,
        "question": "Why does using onTouched improve user experience?",
        "options": [
            "Prevents unnecessary component re-renders",
            "Disables inputs until form submission",
            "Shows errors only after user interaction",
            "Automatically fixes all validation rules"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• errors فقط بعد از interaction نشان داده می‌شوند\n" +
            "- نه بلافاصله وقتی form باز می‌شود\n" +
            "- کمتر overwhelming برای user\n" +
            "- natural validation flow\n" +
            "- مانند native forms"
    },
    {
        "id": 494,
        "question": "Why use spread operator with register function?",
        "options": [
            "Copies only the input value property",
            "Passes all necessary props automatically",
            "Removes need for validation rules",
            "Prevents React from re-rendering input"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• تمام props لازم را به input pass می‌کند\n" +
            "- onChange، onBlur، ref، name\n" +
            "- {...register('email')} ساده‌تر از manual\n" +
            "- validation rules هم included\n" +
            "- cleaner و readable code"
    },
    {
        "id": 495,
        "question": "What happens if you use register without spreading?",
        "options": [
            "Nothing changes, form works the same",
            "TypeScript throws error but works fine",
            "Input won't connect to form state",
            "Automatically infers validation rules"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• input به form state connect نمی‌شود\n" +
            "- values track نمی‌شوند\n" +
            "- validation کار نمی‌کند\n" +
            "- spread operator ضروری است\n" +
            "- بدون آن form broken است"
    },
    {
        "id": 496,
        "question": "Which best describes what ...register does?",
        "options": [
            "Spreads only validation rules to component",
            "Adds custom hook into component props",
            "Spreads handlers and validation rules",
            "Overrides default HTML element attributes"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• handlers (onChange، onBlur) و ref را spread می‌کند\n" +
            "- validation rules را apply می‌کند\n" +
            "- name attribute را set می‌کند\n" +
            "- input را به form متصل می‌کند\n" +
            "- all-in-one connection"
    },
    {
        "id": 497,
        "question": "What is the main idea of Render Props pattern?",
        "options": [
            "Passing JSX elements as component props",
            "Passing function as prop controlling render",
            "Rendering props automatically inside DOM",
            "Using context API to render props"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• passing function به عنوان prop که render logic دارد\n" +
            "- child function به جای JSX\n" +
            "- sharing logic بین components\n" +
            "- flexibility در rendering\n" +
            "- قبل از hooks رایج بود"
    },
    {
        "id": 498,
        "question": "Why has Render Props usage decreased in recent years?",
        "options": [
            "No longer supported in React 18 version",
            "Hooks provide simpler way to share logic",
            "Context API completely replaced the pattern",
            "Caused errors in React strict mode"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• Hooks راه ساده‌تری برای logic sharing\n" +
            "- custom hooks جایگزین render props\n" +
            "- کد خواناتر با hooks\n" +
            "- کمتر nesting و complexity\n" +
            "- Hooks modern approach هستند"
    },
    {
        "id": 499,
        "question": "What is main purpose of Compound Component Pattern?",
        "options": [
            "Bundle multiple components into single file",
            "Allow related components work together unified",
            "Reduce size of final JavaScript bundle",
            "Avoid writing any props in child components"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• components مرتبط با هم کار می‌کنند\n" +
            "- state implicitly share می‌شود\n" +
            "- flexible API برای composition\n" +
            "- مثل Select.Option یا Tabs.Panel\n" +
            "- readability و reusability"
    },
    {
        "id": 500,
        "question": "Which technique shares state in Compound Component Pattern?",
        "options": [
            "Prop drilling through component tree",
            "React Context for state sharing",
            "Redux store for global state",
            "Direct DOM manipulation methods"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• React Context برای implicit state sharing\n" +
            "- parent context provide می‌کند\n" +
            "- children با useContext مصرف می‌کنند\n" +
            "- بدون prop drilling\n" +
            "- clean و flexible API"
    },
    {
        "id": 501,
        "question": "Why prefer compound components over single component?",
        "options": [
            "Makes API more flexible and declarative",
            "Reduces need for TypeScript typings",
            "Automatically optimizes rendering performance",
            "Eliminates need for CSS styling"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• API flexible و declarative است\n" +
            "- user کنترل بیشتر روی structure\n" +
            "- composition بهتر از configuration\n" +
            "- extensible و customizable\n" +
            "- readability کد بالاتر"
    },
    {
        "id": 502,
        "question": "What problem does Compound Component Pattern solve?",
        "options": [
            "Reduces JSX nesting making UI flat",
            "Avoids hard-coding giving flexibility",
            "Ensures better tree-shaking during build",
            "Automatically memoizes all child components"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• از hard-coding structure جلوگیری می‌کند\n" +
            "- flexibility در چیدمان components\n" +
            "- user می‌تواند ترتیب را تغییر دهد\n" +
            "- بدون props drilling زیاد\n" +
            "- مثل HTML native elements"
    },
    {
        "id": 503,
        "question": "How do children access parent state in Compound Component pattern?",
        "options": [
            "Calling function exported from parent",
            "Reading from global variables directly",
            "Through React Context and useContext",
            "Importing parent hook directly"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• از React Context و useContext\n" +
            "- parent Provider است\n" +
            "- children Consumer هستند\n" +
            "- implicit connection بدون props\n" +
            "- clean و maintainable code"
    },
    {
        "id": 504,
        "question": "Why is React Portal often used for Modal?",
        "options": [
            "Replaces need for CSS styling modals",
            "Renders modal outside root DOM hierarchy",
            "Improves server-side rendering performance",
            "Automatically closes modal on route changes"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• modal را خارج از parent DOM render می‌کند\n" +
            "- از stacking context issues جلوگیری\n" +
            "- از overflow: hidden مشکلات فرار\n" +
            "- z-index management آسان‌تر\n" +
            "- semantically در document.body"
    },
    {
        "id": 505,
        "question": "What is main purpose of React Portal for modals?",
        "options": [
            "Reduces number of modal re-renders",
            "Renders modal outside parent DOM hierarchy",
            "Improves performance of state updates",
            "Automatically adds animations to modal"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• rendering خارج از parent DOM hierarchy\n" +
            "- در document.body یا modal-root\n" +
            "- از CSS constraints فرار\n" +
            "- full-screen overlays راحت‌تر\n" +
            "- event bubbling همچنان کار می‌کند"
    },
    {
        "id": 506,
        "question": "What problem do React Portals solve?",
        "options": [
            "Slow component rendering performance",
            "Rendering children outside parent DOM hierarchy",
            "Managing global application state",
            "Handling asynchronous operations"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Portal rendering خارج از parent DOM tree\n" +
            "- مفید برای modals، tooltips، overlays\n" +
            "- از CSS stacking context فرار می‌کند\n" +
            "- اما در React tree همچنان child است\n" +
            "- event bubbling عادی کار می‌کند"
    },
    {
        "id": 507,
        "question": "How do you create a Portal in React?",
        "options": [
            "Using ReactDOM.createPortal(child, container)",
            "Using new Portal(child, container)",
            "Using usePortal hook from React",
            "Portals are created automatically"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation":"• ReactDOM.createPortal(children, domNode)\n" +
            "- children: JSX که می‌خواهید render کنید\n" +
            "- domNode: DOM element هدف (مثل document.body)\n" +
            "- در component return می‌شود\n" +
            "- مثل JSX عادی اما در DOM دیگر"
    },
    {
        "id": 508,
        "question": "Do events bubble through Portals?",
        "options": [
            "No, events are trapped in portal",
            "Yes, events bubble through React tree despite DOM location",
            "Only synthetic events bubble",
            "Events must be manually forwarded"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• events در React tree bubble می‌کنند نه DOM tree\n" +
            "- حتی اگر Portal در DOM جای دیگر باشد\n" +
            "- parent می‌تواند events Portal را بگیرد\n" +
            "- React event system این را handle می‌کند\n" +
            "- برای event delegation مفید است"
    },
    {
        "id": 509,
        "question": "What is a common use case for Portals?",
        "options": [
            "Optimizing component performance",
            "Modals, tooltips, and overlays",
            "Managing form validation state",
            "Implementing dark mode themes"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• Portals برای UI elements که باید خارج از parent باشند\n" +
            "- Modals که full-screen هستند\n" +
            "- Tooltips که از overflow فرار می‌کنند\n" +
            "- Dropdown menus با positioning پیچیده\n" +
            "- هر چیزی که z-index issues دارد"
    },
    {
        "id": 510,
        "question": "Can context work through Portals?",
        "options": [
            "No, context is broken by portals",
            "Yes, context works based on React tree",
            "Only with special portal context",
            "Context must be manually passed"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• بله، Context بر اساس React tree است نه DOM\n" +
            "- Portal child همچنان در React tree است\n" +
            "- می‌تواند Context از ancestors بخواند\n" +
            "- DOM location مهم نیست\n" +
            "- React relationship را حفظ می‌کند"
    },
    {
        "id": 511,
        "question": "What happens when a Portal's target container doesn't exist?",
        "options": [
            "React creates it automatically",
            "Error is thrown during render",
            "Portal is rendered in parent instead",
            "Component doesn't render anything"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• اگر container وجود نداشته باشد، error می‌دهد\n" +
            "- باید container قبلاً در DOM باشد\n" +
            "- معمولاً در index.html تعریف می‌شود\n" +
            "- یا با useEffect ایجاد می‌شود\n" +
            "- check کردن existence توصیه می‌شود"
    },
    {
        "id": 512,
        "question": "Where is modal typically rendered using React Portal?",
        "options": [
            "Inside closest parent component directly",
            "Directly in component tree of App",
            "In separate DOM node like modal-root",
            "In virtual DOM but not real DOM"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• در DOM node جداگانه مثل modal-root\n" +
            "- معمولاً در document.body\n" +
            "- خارج از app root element\n" +
            "- مستقل از parent component\n" +
            "- accessibility بهتر"
    },
    {
        "id": 513,
        "question": "Why is Portal beneficial for modals regarding CSS?",
        "options": [
            "Automatically sets modal's z-index property",
            "Avoids overflow hidden and stacking issues",
            "Converts modal styles into inline styles",
            "Removes need for CSS classes entirely"
        ],
        "correctOption": 1,
        "points": 30,
        "explanation":"• از overflow: hidden در parent فرار می‌کند\n" +
            "- stacking context مشکلات حل می‌شود\n" +
            "- z-index management ساده‌تر\n" +
            "- full viewport coverage راحت\n" +
            "- CSS isolation بهتر"
    },
    {
        "id": 514,
        "question": "Which React method is used to render into Portal?",
        "options": [
            "ReactDOM.render()",
            "React.createElement()",
            "ReactDOM.createPortal()",
            "usePortal()"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation":"• ReactDOM.createPortal(child, container)\n" +
            "- child: JSX برای render\n" +
            "- container: DOM node هدف\n" +
            "- return value در component tree\n" +
            "- اما DOM در جای دیگر"
    },
    {
        "id": 515,
        "question": "What is important for accessibility in Portal Modal?",
        "options": [
            "Rendering modal with useEffect hook",
            "Ensuring modal has random ID assigned",
            "Applying inline styles only to elements",
            "Making sure focus trapped inside modal",
        ],
        "correctOption": 3,
        "points": 30,
        "explanation":"• focus management و trap کردن focus\n" +
            "- keyboard navigation (ESC برای close)\n" +
            "- aria-modal و role attributes\n" +
            "- focus return بعد از close\n" +
            "- screen reader announcements"
    },
    {
        "id": 516,
        "question": "What is prefetching in React Query?",
        "options": [
            "Fetching data only after component renders",
            "Fetching data before components need it",
            "Deleting cached data to free memory",
            "Blocking UI updates until data loads"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation":"• loading data قبل از نیاز واقعی\n" +
            "- در background و silent\n" +
            "- data در cache ready می‌شود\n" +
            "- instant navigation experience\n" +
            "- بهبود perceived performance"
    },
    {
        "id": 517,
        "question": "What is primary benefit of prefetching data?",
        "options": [
            "Automatically writes data to localStorage",
            "Reduces loading time improving responsiveness",
            "Eliminates need for backend API calls",
            "Disables caching for better performance"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• کاهش loading time و بهبود UX\n" +
            "- data از قبل در cache است\n" +
            "- navigation instant به نظر می‌رسد\n" +
            "- کاربر منتظر نمی‌ماند\n" +
            "- perceived performance بالا"
    },
    {
        "id": 518,
        "question": "How does prefetching work with React Query caching?",
        "options": [
            "Prefetching bypasses cache forcing fresh requests",
            "Prefetching converts data into static HTML",
            "Prefetching loads and caches for instant use",
            "Prefetching prevents components from re-rendering"
        ],
        "correctOption": 2,
        "points": 30,
        "explanation":"• data را prefetch و در cache می‌گذارد\n" +
            "- وقتی useQuery صدا زده شود، instant available\n" +
            "- staleTime و cacheTime عادی\n" +
            "- refetch در background اگر stale\n" +
            "- seamless integration با cache system"
    },
    {
        "id": 519,
        "question": "Which method is used to prefetch queries manually?",
        "options": [
            "queryClient.prefetchQuery() with query config",
            "useQuery() with prefetch parameter set true",
            "usePrefetch() hook in component body",
            "React.prefetch() with query key and function"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation":"• queryClient.prefetchQuery({ queryKey، queryFn })\n" +
            "- مثل useQuery اما manual\n" +
            "- معمولاً در event handlers\n" +
            "- onMouseEnter برای hover prefetch\n" +
            "- Promise return می‌کند"
    },
    {
        "id": 520,
        "question": "When should you typically implement prefetching?",
        "options": [
            "After user already navigated to page",
            "Before user likely needs data soon",
            "Only when network connection very slow",
            "During component unmounting for cleanup"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation":"• قبل از اینکه user احتمالاً نیاز داشته باشد\n" +
            "- onHover روی links\n" +
            "- در idle time\n" +
            "- pagination: next page\n" +
            "- predictive based on user behavior"
    },
//     {
//         "id": 485,
//         "question": "What happens when component uses useQuery after prefetch?",
//         "options": [
//             "useQuery ignores prefetched data and refetches",
//             "useQuery throws error if data was prefetched",
//             "useQuery immediately returns cached data",
//             "useQuery waits for prefetch to complete"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 486,
//         "question": "How can you prefetch data on user hover events?",
//         "options": [
//             "Use onMouseEnter event triggering prefetchQuery",
//             "Use onClick event to start prefetching",
//             "Use onLoad event when component mounts",
//             "Use onScroll event when user scrolls"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 487,
//         "question": "What is difference between prefetching and preloading?",
//         "options": [
//             "Prefetching loads data, preloading components",
//             "Prefetching automatic, preloading is manual",
//             "Prefetching blocks render, preloading async",
//             "Prefetching and preloading are identical"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 488,
//         "question": "Can you prefetch queries with different parameters?",
//         "options": [
//             "No, prefetching works with static queries",
//             "Yes, by passing different keys and functions",
//             "No, parameters must match original exactly",
//             "Yes, but only primitive types work"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 489,
//         "question": "What happens to prefetched data that goes unused?",
//         "options": [
//             "Data remains cached until cacheTime expires",
//             "Data immediately deleted after prefetch completes",
//             "Data causes memory leaks if unused",
//             "Data automatically converts to localStorage"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 490,
//         "question": "How does prefetching improve user navigation experience?",
//         "options": [
//             "Makes pages load instantly when navigating",
//             "Prevents users navigating to invalid routes",
//             "Automatically updates browser history for users",
//             "Reduces server load by caching data"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 491,
//         "question": "What is potential downside of excessive prefetching?",
//         "options": [
//             "Improves performance increasing code complexity",
//             "Loads unnecessary data wasting bandwidth",
//             "Makes React Query cache unusable",
//             "Prevents normal useQuery hooks working"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 492,
//         "question": "Can prefetching work with mutations in React Query?",
//         "options": [
//             "Yes, mutations can prefetch like queries",
//             "No, prefetching only applies to reads",
//             "Yes, but mutations execute immediately",
//             "No, mutations require user interaction"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 493,
//         "question": "How do you prefetch data during application startup?",
//         "options": [
//             "Use prefetchQuery in main useEffect",
//             "Call prefetchQuery directly in module",
//             "Use prefetchQuery inside render function",
//             "Prefetching cannot occur during startup"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 494,
//         "question": "What is relationship between prefetching and staleTime?",
//         "options": [
//             "Prefetching and staleTime work independently",
//             "Prefetched data respects staleTime settings",
//             "Prefetching ignores staleTime always refetches",
//             "Prefetching automatically sets staleTime zero"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 495,
//         "question": "How does prefetching improve pagination user experience?",
//         "options": [
//             "Automatically updates page URLs in history",
//             "Loads next page data before clicking",
//             "Prevents users navigating to invalid pages",
//             "Reduces total number of pages dataset"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 496,
//         "question": "When should you prefetch next page in pagination?",
//         "options": [
//             "Only after user clicks next button",
//             "When application startup loading all pages",
//             "When current page data finishes loading",
//             "Only when user hovers pagination controls"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 497,
//         "question": "What is common strategy for pagination prefetching?",
//         "options": [
//             "Prefetch all pages at application startup",
//             "Prefetch only previous pages for navigation",
//             "Prefetch next few pages while viewing",
//             "Prefetch random pages to improve performance"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 498,
//         "question": "How do you prefetch next page data?",
//         "options": [
//             "queryClient.prefetchQuery with next page parameters",
//             "useQuery with prefetch option set true",
//             "usePagination hook with automatic prefetching",
//             "React.prefetch with page number and data"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 499,
//         "question": "What happens when user navigates to prefetched page?",
//         "options": [
//             "Page loads instantly from cache without loading",
//             "Page ignores cache and refetches data",
//             "Page throws error if prefetched expired",
//             "Page waits for prefetch operation completion"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 500,
//         "question": "Should you prefetch all pages in large datasets?",
//         "options": [
//             "Yes, but only for datasets under pages",
//             "No, prefetching only works for singles",
//             "Yes, prefetching all pages improves performance",
//             "No, this wastes bandwidth and memory"
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 500,
//         "question": "Should you prefetch all pages in large datasets?",
//         "options": [
//             "Yes, but only for datasets under pages",
//             "No, prefetching only works for singles",
//             "Yes, prefetching all pages improves performance",
//             "No, this wastes bandwidth and memory"
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//         {
//             "id": 381,
//             "question": "What does useQuery return in case of an error?",
//             "options": [
//                 "Only null data",
//                 "An error object along with isError: true",
//                 "Throws a JavaScript exception",
//                 "Nothing is returned"
//             ],
//             "correctOption": 1,
//             "points": 20,,
//  "explanation":""
//          "explanation":""
//         },
//     {
//         "id": 501,
//         "question": "How can you implement smart pagination prefetching?",
//         "options": [
//             "Prefetch based on user scrolling patterns",
//             "Prefetch all pages when component mounts",
//             "Prefetch only when network connection is fast",
//             "Prefetch randomly to distribute server load"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 502,
//         "question": "What is the benefit of prefetching previous pages?",
//         "options": [
//             "Allows instant back navigation for users",
//             "Prevents data corruption in pagination state",
//             "Reduces server load by caching responses",
//             "Eliminates need for pagination controls completely"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 503,
//         "question": "How do you handle prefetching with dynamic page sizes?",
//         "options": [
//             "Use fixed page size for all prefetch operations",
//             "Calculate correct offset and limit for each page",
//             "Disable prefetching when page sizes change",
//             "Prefetch entire dataset regardless of page size"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 504,
//         "question": "What should you consider when prefetching pagination data?",
//         "options": [
//             "User's network speed and data usage patterns",
//             "Total number of components in application",
//             "Browser compatibility with prefetch features",
//             "Server response time for authentication requests"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 505,
//         "question": "How does infinite scrolling relate to prefetching?",
//         "options": [
//             "Infinite scroll eliminates need for prefetching",
//             "Infinite scroll conflicts with prefetching mechanisms",
//             "Infinite scroll automatically prefetches next batch",
//             "Infinite scroll only works without prefetching"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 506,
//         "question": "What happens to prefetched pagination data when filters change?",
//         "options": [
//             "Prefetched data remains valid for new filters",
//             "Prefetched data automatically updates with filters",
//             "Prefetched data prevents filter changes from working",
//             "Prefetched data becomes stale and needs refetching",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 507,
//         "question": "How can you optimize prefetching for mobile users?",
//         "options": [
//             "Disable prefetching completely on mobile devices",
//             "Prefetch more aggressively on mobile connections",
//             "Reduce prefetch amount and respect data usage",
//             "Use same prefetching strategy as desktop"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 508,
//         "question": "What is background prefetching in paginated data?",
//         "options": [
//             "Prefetching that occurs without user interaction",
//             "Prefetching that changes page background colors",
//             "Prefetching that runs on server side",
//             "Prefetching that works only in background tabs"
//         ],
//         "correctOption": 0,
//         "points": 10,
//  "explanation":""
//     },
//     {
//         "id": 509,
//         "question": "How do you balance prefetching with performance?",
//         "options": [
//             "Prefetch unlimited pages for best performance",
//             "Prefetch strategically based on usage patterns",
//             "Disable prefetching to maximize performance",
//             "Prefetch only during low network usage"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 514,
//         "question": "What is a 'request waterfall' in client-side rendering?",
//         "options": [
//             "A sequence of dependent network requests delaying page render",
//             "A series of API requests made one after another instead of in parallel",
//             "A rendering issue where resources block each other during load",
//             "A browser mechanism that preloads scripts to prevent render delay"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 516,
//         "question": "When does data fetching occur in SSR?",
//         "options": [
//             "After the browser finishes executing JavaScript",
//             "During the hydration phase on the client",
//             "Before rendering the HTML on the server",
//             "Only after user interaction"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 518,
//         "question": "What does 'hydration' mean in SSR and CSR context?",
//         "options": [
//             "Re-rendering static HTML with JavaScript to make it interactive",
//             "Caching all static assets before page load",
//             "Synchronizing CSS styles between server and client",
//             "Removing unused HTML nodes from the DOM",
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 519,
//         "question": "Why does Next.js hydrate server-rendered content on the client?",
//         "options": [
//             "To improve SEO by removing dynamic JavaScript",
//             "To replace all HTML with new client-side markup",
//             "To add interactivity to the pre-rendered HTML",
//             "To reset the DOM structure after first paint"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 520,
//         "question": "Which rendering approach provides better SEO results?",
//         "options": [
//             "Client-side rendering (CSR)",
//             "Dynamic rendering using APIs",
//             "Static site rendering only",
//             "Server-side rendering (SSR)",
//         ],
//         "correctOption": 3,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 521,
//         "question": "A content-driven website like a blog is best suited for which rendering approach?",
//         "options": [
//             "Server-side rendering (SSR)",
//             "Client-side rendering (CSR)",
//             "Streaming rendering",
//             "WebAssembly-based rendering"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 522,
//         "question": "Why is SEO especially important for content-driven websites?",
//         "options": [
//             "Because they rely on client-side routing for navigation",
//             "Because their visibility depends on search engine indexing",
//             "Because SEO improves JavaScript bundle size",
//             "Because SSR reduces interactivity on such sites"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 523,
//         "question": "Which rendering method is ideal for building highly interactive web applications?",
//         "options": [
//             "Server-side rendering (SSR)",
//             "Static site generation (SSG)",
//             "Client-side rendering (CSR)",
//             "Incremental static regeneration (ISR)"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 524,
//         "question": "What do SSG and ISR stand for in Next.js?",
//         "options": [
//             "Server-Side Generation and Internal State Rendering",
//             "Static Style Guide and Instant Script Rendering",
//             "Static Site Generation and Incremental Static Regeneration",
//             "Synchronous Server Generation and Immediate Script Rendering"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 525,
//         "question": "What is the difference between static and dynamic rendering?",
//         "options": [
//             "Static rendering requires APIs, dynamic rendering does not",
//             "Static rendering happens at build time, dynamic rendering happens per request",
//             "Both occur during client-side hydration",
//             "Dynamic rendering generates pages once during build"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 526,
//         "question": "What does the Largest Contentful Paint (LCP) metric measure?",
//         "options": [
//             "The time taken to render the largest visible element on the screen",
//             "The total JavaScript execution time",
//             "The delay before first user interaction",
//             "The number of images loaded in the viewport"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 529,
//         "question": "In CSR, when does data fetching occur relative to rendering?",
//         "options": [
//             "Before HTML generation on the server",
//             "During hydration phase after SSR",
//             "Immediately when page loads from cache",
//             "After the component mounts on the client",
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 530,
//         "question": "Why is SSR useful for content-heavy websites with large media?",
//         "options": [
//             "Because it improves Largest Contentful Paint by sending ready HTML",
//             "Because it delays image loading until user scrolls",
//             "Because it eliminates JavaScript completely",
//             "Because it hides content from crawlers for performance"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 531,
//         "question": "How does a website remain interactive for users in SSR?",
//         "options": [
//             "By re-rendering all pages on the server every second",
//             "By keeping all logic in static HTML files",
//             "Through client-side hydration that enables JavaScript interactivity",
//             "By disabling JavaScript execution entirely"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 532,
//         "question": "What makes a web app interactive after loading?",
//         "options": [
//             "HTML parsing before CSS application",
//             "Server-rendered HTML without scripts",
//             "Optimized image compression and caching",
//             "JavaScript execution that binds events and updates the DOM",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 533,
//         "question": "What does hydration do in server-side rendered React applications?",
//         "options": [
//             "It removes unused HTML elements from the DOM",
//             "It reattaches event handlers and interactivity to static HTML",
//             "It sends HTML from client to server for validation",
//             "It rebuilds the entire UI without using existing markup"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 534,
//         "question": "The phrase “watering the dry HTML” refers to what in SSR context?",
//         "options": [
//             "Reapplying styles after CSS-in-JS rendering",
//             "Adding animations after page load",
//             "Reconnecting interactivity and event handlers via hydration",
//             "Replacing server-rendered content with new markup"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 535,
//         "question": "What must React ensure before adopting the server-rendered DOM during hydration?",
//         "options": [
//             "The client component tree matches the server-rendered HTML structure",
//             "The HTML document includes external JavaScript files",
//             "The CSS styles are loaded before React initializes",
//             "The page uses browser APIs to rebuild the DOM"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 536,
//         "question": "What happens if the client-rendered component tree differs from the server-rendered DOM?",
//         "options": [
//             "Hydration fails and React re-renders the component tree from scratch",
//             "React automatically adjusts the DOM to match the server output",
//             "The mismatch is ignored, and UI updates normally",
//             "The server sends updated HTML to fix the issue"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 537,
//         "question": "Which of the following is a common cause of hydration errors?",
//         "options": [
//             "Correctly nested HTML elements",
//             "Using identical data on server and client",
//             "Accessing browser-only APIs during server rendering",
//             "Disabling JavaScript execution on client"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 538,
//         "question": "Why does incorrect HTML nesting lead to hydration mismatches?",
//         "options": [
//             "Because React cannot attach events to deeply nested elements",
//             "Because the actual DOM differs structurally from react's virtual DOM",
//             "Because the browser blocks nested element rendering",
//             "Because React skips hydration for child nodes"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 539,
//         "question": "How can using different data between server and client affect hydration?",
//         "options": [
//             "It delays hydration until data matches",
//             "It causes React to discard existing HTML and rebuild the DOM",
//             "It improves hydration speed",
//             "It triggers rehydration of the same content repeatedly"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 540,
//         "question": "Which best practice helps avoid hydration errors in Next.js apps?",
//         "options": [
//             "Wrap all components in useEffect hooks for hydration",
//             "Disable JavaScript on the client for static rendering",
//             "Render data differently on server and client for flexibility",
//             "Avoid using browser-only APIs like window or document during SSR",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//             "id": 541,
//             "question": "What best describes Next.js in relation to React?",
//             "options": [
//                 "A standalone JavaScript library for DOM manipulation",
//                 "A meta-framework built on top of React for web applications",
//                 "A database engine designed for React components",
//                 "A CSS preprocessor used with React"
//             ],
//             "correctOption": 1,
//             "points": 10,
//  "explanation":""
//         },
//         {
//             "id": 542,
//             "question": "What does it mean that Next.js is an opinionated framework?",
//             "options": [
//                 "It enforces a specific set of conventions for building React apps",
//                 "It restricts the use of JavaScript and JSX syntax",
//                 "It prevents developers from using React hooks directly",
//                 "It automatically converts all React code into static HTML"
//             ],
//             "correctOption": 0,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 543,
//             "question": "Which statement best explains why Next.js is called a meta-framework?",
//             "options": [
//                 "It converts React into a server-only framework",
//                 "It removes the need for React components entirely",
//                 "it replaces react's component model with template files",
//                 "It provides a higher-level structure built around react's ecosystem",
//             ],
//             "correctOption": 3,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 544,
//             "question": "Which of the following is NOT a key feature of Next.js?",
//             "options": [
//                 "File-based routing conventions",
//                 "Server-side rendering and static generation",
//                 "CSS-only component styling system",
//                 "Server-side data fetching and mutation"
//             ],
//             "correctOption": 2,
//             "points": 10,
//  "explanation":""
//         },
//         {
//             "id": 545,
//             "question": "What advantage does Next.js provide over plain React for full-stack development?",
//             "options": [
//                 "It removes the need to write any server-side code at all",
//                 "It integrates server-side rendering, routing, and data fetching into one framework",
//                 "It guarantees no JavaScript will be sent to the client",
//                 "It automatically generates database schemas from components"
//             ],
//             "correctOption": 1,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 546,
//             "question": "Which of the following React features require framework-level integration provided by Next.js?",
//             "options": [
//                 "Suspense, Server Components, and Server Actions",
//                 "State management using useState and useEffect",
//                 "Styling with CSS Modules and inline styles",
//                 "DOM manipulation with document.querySelector"
//             ],
//             "correctOption": 0,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 547,
//             "question": "What does 'file-based routing' in Next.js refer to?",
//             "options": [
//                 "Manually defining routes in a central routing configuration",
//                 "Routing structure automatically generated from the filesystem",
//                 "Routing based on URL query parameters only",
//                 "Using server middleware for navigation"
//             ],
//             "correctOption": 1,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 548,
//             "question": "Which rendering types are supported by Next.js out of the box?",
//             "options": [
//                 "Only client-side rendering and static generation",
//                 "Server-side rendering (dynamic and static) and client-side rendering",
//                 "Only static generation at build time",
//                 "Server-only rendering without client hydration support"
//             ],
//             "correctOption": 1,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 549,
//             "question": "How does Next.js handle data fetching compared to plain React?",
//             "options": [
//                 "Next.js allows fetching and mutating data directly on the server before rendering",
//                 "Next.js requires all data fetching to happen on the client only",
//                 "Next.js uses Redux for all data operations",
//                 "Next.js prevents using asynchronous operations in components"
//             ],
//             "correctOption": 0,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 560,
//             "question": "What is a major benefit of Next.js optimizations?",
//             "options": [
//                 "Automatically converting JavaScript into a native mobile app",
//                 "Removing the need to minify or bundle any client assets",
//                 "Improved performance and SEO through pre-rendering and smart caching",
//                 "Enforcing a single large client bundle for easier caching"
//             ],
//             "correctOption": 2,
//             "points": 30,
//  "explanation":""
//         },
//     {
//         "id": 561,
//         "question": "Which approach is recommended for navigating between internal pages in a Next.js application?",
//         "options": [
//             "Using standard <a> tags for internal links",
//             "Using window.location.href assignments for navigation",
//             "Using the Next.js <Link> component for client-side transitions",
//             "Using only form submissions to change pages"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 562,
//         "question": "Why should you generally avoid using the <a> tag for internal navigation in Next.js?",
//         "options": [
//             "Because <a> prevents server-side rendering from working",
//             "Because <a> triggers a full page reload, bypassing Next.js client-side routing",
//             "Because <a> cannot include CSS classes for styling",
//             "Because <a> automatically disables JavaScript execution",
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 563,
//         "question": "Why is using the Next.js <Link> component recommended over a standard <a> tag for internal navigation?",
//         "options": [
//             "It prefetches linked routes and enables fast client-side navigation",
//             "It automatically converts HTML into server-rendered pages",
//             "It disables JavaScript execution to speed up navigation",
//             "It ensures external links are opened in a new browser window"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 564,
//         "question": "Do pages in Next.js automatically refetch data when a user revisits them?",
//         "options": [
//             "Only pages using static generation refetch data automatically",
//             "Yes, Next.js always refetches data for every navigation",
//             "No, pages served from the client cache",
//             "Yes, but only when navigating through the browser’s back button"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 565,
//         "question": "What is the main purpose of the layout file in a Next.js application?",
//         "options": [
//             "To handle API requests and server-side logic for each route",
//             "To manage client-side routing and navigation between pages",
//             "To define global page structure and shared UI elements across routes",
//             "To store metadata and SEO configurations for dynamic routes"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 566,
//         "question": "What is the main purpose of page metadata in Next.js?",
//         "options": [
//             "To manage internal navigation between pages in the application",
//             "To store configuration data such as user settings or global variables",
//             "To define SEO-related information such as title and description for each page",
//             "To handle background data fetching and caching before rendering"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//         {
//             "id": 567,
//             "question": "Which statement correctly describes a Client Component in Next.js?",
//             "options": [
//                 "To handle user interactions and local state within the component",
//                 "To fetch data on the server and send pre-rendered HTML to the client",
//                 "To render static content without JavaScript on the client",
//                 "To generate page metadata for SEO at build time"
//             ],
//             "correctOption": 0,
//             "points": 10,
//  "explanation":""
//         },
//         {
//             "id": 568,
//             "question": "Which statement about Server Components is true?",
//             "options": [
//                 "To fetch data using async/await and render on the server",
//                 "To manage client-side local state with useState",
//                 "To handle click events and interactive forms",
//                 "To require JavaScript for rendering on the client"
//             ],
//             "correctOption": 0,
//             "points": 10,
//  "explanation":""
//         },
//         {
//             "id": 569,
//             "question": "Which rule applies when passing props from a Server Component to a Client Component?",
//             "options": [
//                 "To pass only serializable values, avoiding functions or class instances",
//                 "To pass useState hooks directly to maintain local reactivity",
//                 "To pass any component references without serialization",
//                 "To pass client-side event handlers to Server Components"
//             ],
//             "correctOption": 0,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 570,
//             "question": "Which scenario requires lifting state up in Next.js?",
//             "options": [
//                 "To render static Server Components without interactivity",
//                 "To share local state between multiple Client Components",
//                 "To fetch data only at build time using SSG",
//                 "To generate metadata for SEO without user interaction"
//             ],
//             "correctOption": 1,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 571,
//             "question": "Which behavior correctly describes when a Client Component re-renders?",
//             "options": [
//                 "To re-render only when navigation occurs",
//                 "To re-render when sibling Server Components update",
//                 "To re-render on every server data fetch automatically",
//                 "To re-render on local state or prop changes within the component",
//             ],
//             "correctOption": 3,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 572,
//             "question": "Which of the following is NOT suitable for a Server Component?",
//             "options": [
//                 "To fetch data from an API using async/await function",
//                 "To manage interactive form inputs and local state",
//                 "To render static content for SEO",
//                 "To output pre-rendered HTML to the client"
//             ],
//             "correctOption": 1,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 573,
//             "question": "Which import restriction is true for Client Components?",
//             "options": [
//                 "To import any Server or Client Component without restriction",
//                 "To import Server Components but not Client Components",
//                 "To import only static JSON or HTML files",
//                 "To import only other Client Components ",
//             ],
//             "correctOption": 3,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 574,
//             "question": "Which statement about Server Components and Client Components is NOT true?",
//             "options": [
//                 "To Server Components cannot automatically re-render on Client Component state changes",
//                 "To Server Components can render both Server and Client Components passed as props",
//                 "To Client Components can handle local state and interactivity",
//                 "To Client Components are preferred for pre-rendering SEO content"
//             ],
//             "correctOption": 3,
//             "points": 30,
//  "explanation":""
//         },
//     {
//         "id": 575,
//         "question": "Which of the following is NOT a common problem with Client-Side Rendering (CSR)?",
//         "options": [
//             "Slower initial page load due to JavaScript execution",
//             "Longer time to interactive on slower devices",
//             "Reduced SEO performance because content loads after hydration",
//             "Better accessibility for search engine crawlers and static tools",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 576,
//         "question": "Which of the following is NOT a common limitation of Server-Side Rendering (SSR)?",
//         "options": [
//             "Higher server load due to rendering pages on each request",
//             "Slower time to first byte for complex pages",
//             "Automatic client-side interactivity without hydration",
//             "Longer deployment complexity for dynamic applications"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 577,
//         "question": "In which rendering method does the UI behave like a function where state changes trigger re-renders?",
//         "options": [
//             "Server-Side Rendering (SSR), because server sends updated HTML on each state change",
//             "Client-Side Rendering (CSR), because state updates directly trigger component re-renders",
//             "Static Site Generation (SSG), because pages are pre-built and do not respond to state",
//             "Incremental Static Regeneration (ISR), because state is only updated periodically"
//         ],
//         "correctOption":1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 578,
//         "question": "In React or Next.js, what does it mean when we say 'UI behaves like a function'?",
//         "options": [
//             "The UI executes server-side functions to fetch new HTML each time",
//             "The UI stores all application data and acts as a database",
//             "The UI is a representation of state and props, automatically updating when data changes",
//             "The UI does not change even if state or props update",
//         ],
//         "correctOption":2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 579,
//         "question": "How does UI behave differently in CSR versus SSR regarding state and data?",
//         "options": [
//             "In CSR, UI updates based on component state; in SSR, UI is generated from server-provided data",
//             "In CSR, UI is static and does not react to state; in SSR, UI updates automatically on client",
//             "In CSR, UI fetches server data for every render; in SSR, UI relies on local state only",
//             "In CSR, UI and server data are identical; in SSR, state drives all interactions"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//         {
//             "id": 580,
//             "question": "What is the main purpose of React Server Components (RSC)?",
//             "options": [
//                 "To replace all client-side components with server-rendered HTML and eliminate any client-side interactivity entirely, forcing users to rely only on server responses",
//                 "To allow rendering some components entirely on the server, reducing client bundle size and enabling full-stack patterns",
//                 "To automatically convert all frontend JavaScript logic into backend APIs without any developer intervention or framework setup",
//                 "To disable React hooks in client components completely for performance improvements, preventing state and effects from being used in interactive components"
//             ],
//             "correctOption": 1,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 581,
//             "question": "Which of the following best describes a Client Component in React Server Components architecture?",
//             "options": [
//                 "A regular component that runs on the client and is created using the 'use client' directive",
//                 "A component that only executes on the server and does not appear in the client bundle",
//                 "A component that automatically fetches data from the server without rendering",
//                 "A component that disables interactivity and only renders static HTML"
//             ],
//             "correctOption": 0,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 582,
//             "question": "Which statement is TRUE about Server Components in RSC architecture?",
//             "options": [
//                 "They are rendered only on the server and do not increase client bundle size",
//                 "They are rendered on both client and server simultaneously",
//                 "They require the 'use client' directive to function",
//                 "They always include JavaScript in the client bundle for hydration"
//             ],
//             "correctOption": 0,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 583,
//             "question": "Are React Server Components active by default in new React apps like Vite?",
//             "options": [
//                 "Yes, but only if 'use server' directive is added to every component",
//                 "No, React Server Components are deprecated in modern frameworks",
//                 "Yes, they are enabled automatically in all React apps",
//                 "No, they need to be implemented via frameworks like Next.js App Router",
//             ],
//             "correctOption": 3,
//             "points": 20,
//  "explanation":""
//         },
//     {
//         "id": 584,
//         "question": "Which of the following components in Next.js should be Client Components rather than Server Components?",
//         "options": [
//             "To a component that handles user interactions like clicks and input forms",
//             "To a component that only fetches and displays data from a database",
//             "To a component that renders static content with no interactivity",
//             "To a component that outputs metadata for SEO purposes"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//         {
//             "id": 585,
//             "question": "Which behavior correctly describes when a Client Component re-renders in Next.js?",
//             "options": [
//                 "To re-render automatically on server-side data fetch completion",
//                 "To re-render only when the URL changes due to navigation",
//                 "To re-render on local state or prop changes inside the component",
//                 "To re-render when any parent Server Component updates"
//             ],
//             "correctOption": 0,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 586,
//             "question": "Which statement about Server Components is accurate regarding data fetching?",
//             "options": [
//                 "To fetch data and update local state on every user interaction",
//                 "To fetch data only on the client side using hooks",
//                 "To fetch data using async/await directly in the component",
//                 "To prevent fetching data entirely and only render static HTML"
//             ],
//             "correctOption": 2,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 587,
//             "question": "When passing props from a Server Component to a Client Component, which restriction applies?",
//             "options": [
//                 "To pass state hooks directly for automatic reactivity",
//                 "To pass client-side event handlers for server processing",
//                 "To pass any component instance without serialization",
//                 "To pass only serializable data, avoiding functions or classes",
//             ],
//             "correctOption": 3,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 588,
//             "question": "Which situation requires lifting state up to a parent component in Next.js?",
//             "options": [
//                 "To share state only between Server Components for faster rendering",
//                 "To share state between multiple Client Components for coordinated updates",
//                 "To pass server-rendered props to static HTML without interactivity",
//                 "To prevent any client-side re-renders by using Server Components"
//             ],
//             "correctOption": 1,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 589,
//             "question": "Which import rule correctly applies to Client Components in Next.js?",
//             "options": [
//                 "To import only other Client Components and cannot import Server Components back",
//                 "To import any Server or Client Components without restriction",
//                 "To import Server Components but not Client Components",
//                 "To import only static HTML files and JSON data"
//             ],
//             "correctOption": 0,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 590,
//             "question": "Which statement correctly describes rendering capabilities of Server Components?",
//             "options": [
//                 "To render only static HTML without any component nesting",
//                 "To render only Client Components and ignore server logic",
//                 "To render both Client and Server Components passed as props",
//                 "To prevent any nested components from rendering"
//             ],
//             "correctOption": 2,
//             "points": 20,
//  "explanation":""
//         },
//         {
//             "id": 591,
//             "question": "Which of the following is NOT allowed when passing props from a Server Component to a Client Component?",
//             "options": [
//                 "To pass a string value for display purposes",
//                 "To pass a number or boolean for rendering",
//                 "To pass a function as a prop for event handling",
//                 "To pass a serializable object like JSON"
//             ],
//             "correctOption": 2,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 592,
//             "question": "Which scenario is NOT suitable for a Client Component in Next.js?",
//             "options": [
//                 "To handle a button click with local state updates",
//                 "To manage form input fields interactively",
//                 "To re-render content on state changes",
//                 "To fetch data using async/await inside a Server Component instead",
//             ],
//             "correctOption": 3,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 593,
//             "question": "Which statement about Server Components is FALSE?",
//             "options": [
//                 "To fetch data using async/await in the component",
//                 "To render both Server and Client Components passed as props",
//                 "To improve performance by offloading computation to the server",
//                 "To re-render automatically on every local state change",
//             ],
//             "correctOption": 3,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 594,
//             "question": "Which rule about importing components in Next.js is NOT correct?",
//             "options": [
//                 "Allow Server Components to import both Client and Server Components",
//                 "Allow Client Components to import Server Components and return to client-side logic",
//                 "Allow Client Components to import other Client Components",
//                 "Allow circular imports across client-server boundaries"
//             ],
//             "correctOption": 1,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 595,
//             "question": "Which situation does NOT require lifting state up in Next.js?",
//             "options": [
//                 "To propagate a user action from child to parent for centralized handling",
//                 "To synchronize UI changes across multiple interactive components",
//                 "To keep local state isolated in a single Client Component with no siblings",
//                 "To share input values across multiple Client Components",
//             ],
//             "correctOption": 2,
//             "points": 30,
//  "explanation":""
//         },
//         {
//             "id": 596,
//             "question": "Which statement about re-render behavior is NOT true?",
//             "options": [
//                 "To Server Components re-render automatically on local state changes in child Client Components",
//                 "To Client Components re-render on state or prop changes in child Server Components",
//                 "To Server Components re-render on navigation or URL change in child Client Components",
//                 "To Client Components can render Server Components passed as props in child Server Components"
//             ],
//             "correctOption": 0,
//             "points": 30,
//  "explanation":""
//         },
//     {
//         "id": 597,
//         "question": "How does a Page Component behave by default in Next.js?",
//         "options": [
//             "To run on the server unless marked with 'use client'",
//             "To always execute on the client for every route",
//             "To render both server and client content automatically",
//             "To generate only static HTML without interactivity"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 598,
//         "question": "What is the purpose of a loading.js file in a Next.js App Router project?",
//         "options": [
//             "To render a temporary loading state or skeleton UI while a server component is fetching data",
//             "To fetch data on the client side using hooks like useEffect",
//             "To replace the page component entirely with static HTML for SEO",
//             "To automatically convert server components to client components when state changes"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 599,
//         "question": "What happens if JavaScript is disabled in the browser while a loading.js component is used in Next.js?",
//         "options": [
//             "To convert server components into client components automatically",
//             "To run the loading.js component with full interactivity",
//             "To prevent the server from rendering the page",
//             "To show only the server-rendered content without interactive loading",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 600,
//         "question": "Why does a child component in Next.js not always need to be marked with 'use client'?",
//         "options": [
//             "To force the child to always execute on the client regardless of state",
//             "To allow server components to render it without requiring client-side state or hooks",
//             "To prevent server components from being able to render it at all",
//             "To automatically convert the child into a server component"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 601,
//         "question": "In Next.js, where is a Server Component subtree executed by default?",
//         "options": [
//             "To execute entirely on the client regardless of state",
//             "To switch execution between server and client automatically",
//             "To run on the server unless a Client Component is inside",
//             "To render only static HTML without server processing"
//         ],
//         "correctOption":2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 602,
//         "question": "What does serialization mean in the context of Server Components in Next.js?",
//         "options": [
//             "To execute JavaScript functions before sending data to the client",
//             "To convert data structures into a transferable format like JSON",
//             "To encrypt props to secure them during server-side rendering",
//             "To compile server code into a client-compatible bundle"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 603,
//         "question": "Which type of prop can be safely used in a Server Component in Next.js?",
//         "options": [
//             "To pass functions or class instances directly as component props",
//             "To include browser-only objects like window or document in props",
//             "To share React hooks or event handlers as props between components",
//             "To use serializable props such as strings, numbers, and plain objects",
//         ],
//         "correctOption": 3,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 604,
//         "question": "Why can't functions or class instances be passed as props in Server Components in Next.js?",
//         "options": [
//             "To avoid serialization errors since functions and classes cannot be converted to JSON",
//             "To prevent duplicate rendering of components during client hydration proses",
//             "To reduce bundle size by skipping complex objects in server rendering",
//             "To keep server components isolated from client-side state and events"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 605,
//         "question": "What is the main difference between using async/await in Server Components and Client Components in Next.js?",
//         "options": [
//             "To only support async/await when combined with useEffect in both server and client components",
//             "To execute async/await automatically on both server and client without any restriction",
//             "To allow direct async/await usage in Server Components but require external effects in Client Components",
//             "To restrict async/await usage entirely in Server Components for performance reasons",
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 606,
//         "question": "When does a Server Component render in a Next.js application?",
//         "options": [
//             "To render only once during the initial build process of the application",
//             "To render continuously whenever client-side state changes occur",
//             "To render on every navigation or URL change that triggers a new request",
//             "To render automatically after all client components finish hydrating",
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 607,
//         "question": "What does streaming mean in the context of Server-Side Rendering in Next.js?",
//         "options": [
//             "To buffer the entire HTML output on the server before sending it to the client browse",
//             "To send HTML chunks to the browser as soon as they are ready instead of waiting for the full page",
//             "To prefetch all client assets before rendering any server content",
//             "To synchronize client and server states before starting the rendering process"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 608,
//         "question": "Which of the following is NOT an advantage of streaming in Next.js Server-Side Rendering?",
//         "options": [
//             "To improve the time to first render by sending partial HTML early",
//             "To enhance user experience through faster perceived loading",
//             "To delay the first byte of HTML until all server components are ready",
//             "To allow the browser to progressively render available content"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 609,
//         "question": "Why can't React hooks be used inside Server Components?",
//         "options": [
//             "Because hooks require client-side reactivity and state",
//             "Because hooks are deprecated in modern React",
//             "Because hooks only work with class components",
//             "Because hooks increase server load significantly"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 610,
//         "question": "What happens if you try to use useState in a Server Component?",
//         "options": [
//             "The component automatically converts to client",
//             "React throws an error during rendering",
//             "The state works but doesn't update",
//             "The hook is ignored silently"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 611,
//         "question": "Which React feature requires client-side execution and cannot work in Server Components?",
//         "options": [
//             "Component composition and nesting",
//             "Props passing between components",
//             "State management with hooks",
//             "JSX syntax for rendering"
//         ],
//         "correctOption": 2,
//         "points": 10,
//  "explanation":""
//     },
//     {
//         "id": 612,
//         "question": "Why does useEffect not work in Server Components?",
//         "options": [
//             "Because it runs after rendering on client",
//             "Because it's too slow for server",
//             "Because it only works with async data",
//             "Because it requires special configuration"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 613,
//         "question": "What is the fundamental reason hooks don't work in Server Components?",
//         "options": [
//             "Hooks depend on component lifecycle and re-renders",
//             "Hooks are not compatible with async/await",
//             "Hooks require browser APIs to function",
//             "Hooks are only for class components"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 614,
//         "question": "What information does the server need to render a Client Component?",
//         "options": [
//             "Only the component's props with serialized values",
//             "Props, code reference, and client execution placeholder",
//             "Complete JavaScript bundle including all dependencies",
//             "Only the component name with its CSS styles"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 615,
//         "question": "What is RSC Payload in React Server Components?",
//         "options": [
//             "The complete JavaScript bundle sent to client",
//             "Serialized Server Component tree with Client placeholders",
//             "Only the HTML output from server rendering",
//             "The database query results for all components"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 616,
//         "question": "What does RSC Payload contain for Client Components?",
//         "options": [
//             "Full component code with implementation details",
//             "Component location reference with serialized props",
//             "Only the component's rendered HTML structure",
//             "Complete source code including all comments"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 617,
//         "question": "Why is it called 'RSC Payload' instead of just 'data'?",
//         "options": [
//             "Because it's based on random naming convention",
//             "Because it carries structured component tree data",
//             "Because it only contains external API responses",
//             "Because it's compressed for network transmission"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 618,
//         "question": "What happens to Client Component code in RSC Payload?",
//         "options": [
//             "The code is fully included in the payload",
//             "Only reference sent, code loads separately later",
//             "The code is converted to plain HTML strings",
//             "The code is executed on the server first"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 619,
//         "question": "How does RSC Payload handle Server Component output?",
//         "options": [
//             "Sends complete component source code to client",
//             "Includes rendered HTML with all serialized data",
//             "Converts everything to standard JSON format only",
//             "Skips Server Components entirely from payload"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 620,
//         "question": "Why can't functions be included in RSC Payload?",
//         "options": [
//             "Because functions are too large for network transfer",
//             "Because functions cannot be serialized into JSON",
//             "Because functions only work on the server side",
//             "Because functions are deprecated in modern React"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 621,
//         "question": "What is the purpose of component references in RSC Payload?",
//         "options": [
//             "To indicate where client should load component code",
//             "To store all component state data permanently",
//             "To generate complete component documentation",
//             "To optimize server-side memory usage patterns"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 622,
//         "question": "How does the client use RSC Payload to render the page?",
//         "options": [
//             "Executes all code from payload directly on mount",
//             "Reconstructs tree using references and passed props",
//             "Converts payload to static HTML without JavaScript",
//             "Sends payload back to server for further processing"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 623,
//         "question": "What makes RSC Payload efficient for performance?",
//         "options": [
//             "It includes all JavaScript upfront for better caching",
//             "It sends minimal data using component references",
//             "It eliminates need for any client-side JavaScript",
//             "It compresses everything into optimized binary format"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 624,
//         "question": "What is the main difference between SSR and RSC?",
//         "options": [
//             "SSR renders on server, RSC on client only",
//             "SSR sends HTML, RSC sends component instructions",
//             "SSR is faster, RSC is more interactive",
//             "SSR uses React, RSC uses plain JavaScript"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 625,
//         "question": "How do SSR and RSC handle component rendering?",
//         "options": [
//             "SSR renders all components, RSC splits server and client",
//             "SSR only renders client, RSC only renders server",
//             "Both render everything on server before sending",
//             "Both render everything on client after downloading"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 626,
//         "question": "What do SSR and RSC have in common?",
//         "options": [
//             "Both eliminate need for client JavaScript entirely",
//             "Both render initial content on the server",
//             "Both require 'use server' directive for components",
//             "Both prevent any component interactivity on client"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 627,
//         "question": "How does data fetching differ between SSR and RSC?",
//         "options": [
//             "Both fetch data exactly the same way",
//             "Neither supports data fetching at all",
//             "SSR fetches on client, RSC fetches on server",
//             "SSR fetches before render, RSC fetches during render",
//         ],
//         "correctOption": 3,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 628,
//         "question": "What is sent to the client in SSR vs RSC?",
//         "options": [
//             "SSR sends JSON, RSC sends complete HTML markup",
//             "SSR sends HTML, RSC sends serialized tree payload",
//             "Both send identical HTML without any differences",
//             "SSR sends nothing, RSC sends full JavaScript bundle"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 629,
//         "question": "How do SSR and RSC handle JavaScript bundles?",
//         "options": [
//             "SSR includes all components, RSC only client ones",
//             "SSR excludes all code, RSC includes everything",
//             "Both include identical JavaScript in final bundle",
//             "Neither sends any JavaScript to the browser"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 630,
//         "question": "Can SSR and RSC be used together?",
//         "options": [
//             "No, they are mutually exclusive rendering methods",
//             "Yes, RSC can render first then SSR hydrates",
//             "Yes, modern frameworks combine both for optimization",
//             "No, RSC completely replaces SSR in all cases"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 631,
//         "question": "How does hydration differ between SSR and RSC?",
//         "options": [
//             "SSR hydrates all components, RSC only client ones",
//             "SSR skips hydration, RSC requires full hydration",
//             "Both hydrate components in exactly same way",
//             "Neither requires hydration for any components"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 632,
//         "question": "What advantage does RSC have over traditional SSR?",
//         "options": [
//             "RSC eliminates need for any server rendering",
//             "RSC reduces client bundle by keeping code server-side",
//             "RSC makes all components interactive without JavaScript",
//             "RSC renders everything faster than SSR always"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 633,
//         "question": "How do SSR and RSC affect SEO?",
//         "options": [
//             "Both provide server-rendered content for better indexing",
//             "SSR improves SEO, RSC completely breaks indexing",
//             "RSC improves SEO, SSR prevents crawler access",
//             "Neither has any impact on search rankings"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 634,
//         "question": "Which statement about SSR and RSC is correct?",
//         "options": [
//             "SSR is newer technology replacing older RSC",
//             "RSC is evolution of SSR with better optimization",
//             "Both are identical with different naming only",
//             "SSR works only with React, RSC with all frameworks"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 635,
//         "question": "How do SSR and RSC handle component state?",
//         "options": [
//             "SSR preserves all state, RSC loses state completely",
//             "Both require client-side state management for interactivity",
//             "RSC manages state, SSR cannot handle any state",
//             "Neither can manage component state at all"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 636,
//         "question": "What happens on navigation in SSR vs RSC?",
//         "options": [
//             "SSR refetches everything, RSC updates only changed parts",
//             "Both reload entire page from server completely",
//             "SSR updates partially, RSC always does full reload",
//             "Neither supports navigation between different pages"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 637,
//         "question": "Which rendering approach requires more server resources?",
//         "options": [
//             "Traditional SSR due to complete page rendering",
//             "RSC due to component-level streaming and logic",
//             "Both require exactly same server resource amounts",
//             "Neither requires any server resources at all"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 638,
//         "question": "How do SSR and RSC impact Time to Interactive?",
//         "options": [
//             "SSR faster always, RSC slower in all scenarios",
//             "RSC can be faster by reducing client JavaScript",
//             "Both have identical Time to Interactive metrics",
//             "Neither affects Time to Interactive at all"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 639,
//         "question": "What does the '@' symbol represent in Next.js import paths?",
//         "options": [
//             "A special decorator for component styling",
//             "An alias for the project root directory",
//             "A prefix for external npm package imports",
//             "A marker for server-only component imports"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 640,
//         "question": "Why is '@' used instead of relative paths in Next.js?",
//         "options": [
//             "To automatically optimize component bundle size",
//             "To enable TypeScript type checking automatically",
//             "To avoid long relative paths like '../../../components'",
//             "To make imports work only on server",
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 641,
//         "question": "Where is the '@' alias configured in Next.js?",
//         "options": [
//             "In package.json under dependencies section only",
//             "In tsconfig.json or jsconfig.json paths configuration",
//             "In next.config.js webpack externals section only",
//             "In .env file as environment variable"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 642,
//         "question": "What path does '@/app/_components/Logo' typically resolve to?",
//         "options": [
//             "The node_modules folder with app namespace",
//             "The project root then app/_components/Logo path",
//             "A CDN URL for external component libraries",
//             "The public folder for static asset files"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 643,
//         "question": "Can you customize the '@' alias in Next.js?",
//         "options": [
//             "Yes, by modifying paths in tsconfig.json file",
//             "No, '@' is hardcoded and cannot change",
//             "Yes, but only in production build environment",
//             "No, changing it breaks all Next.js features"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 644,
//         "question": "What is the benefit of using '@' over relative paths?",
//         "options": [
//             "It makes imports work faster at runtime",
//             "It automatically tree-shakes unused component code",
//             "It prevents deep nesting with cleaner syntax",
//             "It enables server-side rendering for components"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 645,
//         "question": "Is '@' alias specific to Next.js only?",
//         "options": [
//             "Yes, it only works in Next.js apps",
//             "Yes, but can be poly filled for other tools",
//             "No, it's a native JavaScript ES6 feature",
//             "No, it's common in many modern frameworks",
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 646,
//         "question": "What happens if '@' is not configured properly?",
//         "options": [
//             "Next.js will throw module not found errors",
//             "Imports will work but run slower than normal",
//             "The app will build but crash at runtime",
//             "TypeScript will auto-fix the configuration"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 647,
//         "question": "Can you use multiple custom aliases besides '@'?",
//         "options": [
//             "No, Next.js only allows single alias configuration",
//             "Yes, but maximum three aliases are allowed",
//             "Yes, by defining multiple paths in config",
//             "No, only '@' and '~' are permitted"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 648,
//         "question": "Does '@' alias work in both JavaScript and TypeScript?",
//         "options": [
//             "Yes, but requires additional Babel plugin setup",
//             "No, it only works with TypeScript projects",
//             "Yes, when configured in jsconfig or tsconfig",
//             "No, it's exclusive to JavaScript ES modules"
//         ],
//         "correctOption": 2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 652,
//         "question": "Why does Next.js self-host Google Fonts?",
//         "options": [
//             "To eliminate external requests and improve privacy",
//             "To reduce font file size automatically",
//             "To enable offline font editing features",
//             "To convert fonts to proprietary format"
//         ],
//         "correctOption": 0,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 653,
//         "question": "How do you apply a font loaded with next/font?",
//         "options": [
//             "By using the className property from font",
//             "By manually linking CSS file in head",
//             "By importing font directly in global CSS",
//             "By adding font URL to next.config.js"
//         ],
//         "correctOption": 0,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 654,
//         "question": "What is font sub setting in Next.js?",
//         "options": [
//             "Loading only specific font weights and styles",
//             "Converting fonts to smaller file formats",
//             "Including only used characters in font files",
//             "Splitting fonts across multiple CDN servers"
//         ],
//         "correctOption": 2,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 655,
//         "question": "Which property specifies font subsets to load?",
//         "options": [
//             "characters: ['latin']",
//             "include: ['latin']",
//             "subsets: ['latin']",
//             "languages: ['latin']"
//         ],
//         "correctOption":2,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 656,
//         "question": "How do you load custom local fonts in Next.js?",
//         "options": [
//             "Using next/font/google with custom URL",
//             "Using next/font/local with font file path",
//             "Using standard CSS @font-face rules only",
//             "Using import statement in global styles"
//         ],
//         "correctOption": 1,
//         "points": 20,
//  "explanation":""
//     },
//     {
//         "id": 657,
//         "question": "What is the benefit of font display swap?",
//         "options": [
//             "It prevents layout shift during font loading",
//             "It shows fallback text until font loads",
//             "It preloads all font variants at once",
//             "It disables font loading on slow connections"
//         ],
//         "correctOption": 1,
//         "points": 30,
//  "explanation":""
//     },
//     {
//         "id": 658,
//         "question": "How do you set font display behavior in Next.js?",
//         "options": [
//             "Using fontDisplay: 'swap' in next.config.js",
//             "Using display: 'swap' in font configuration",
//             "Using CSS font-display property manually",
//             "Using preload: true in font options"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 659,
//         "question": "Can you use multiple fonts in a Next.js app?",
//         "options": [
//             "Yes, by importing multiple font instances",
//             "No, only one font per application",
//             "Yes, but maximum three fonts allowed",
//             "No, mixing fonts breaks optimization"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 660,
//         "question": "What does preload option do for fonts?",
//         "options": [
//             "It loads font before any other resources",
//             "It caches font permanently in browser",
//             "It converts font to inline base64",
//             "It downloads font only when visible"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 661,
//         "question": "How does Next.js prevent layout shift with fonts?",
//         "options": [
//             "By using CSS size-adjust property automatically",
//             "By loading fonts before HTML rendering",
//             "By setting fixed heights for text",
//             "By disabling font loading on mobile"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 662,
//         "question": "What is the advantage of variable fonts in Next.js?",
//         "options": [
//             "They load faster than standard fonts",
//             "They include multiple weights in one file",
//             "They automatically adjust to screen size",
//             "They work without JavaScript enabled"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 663,
//         "question": "How do you load a variable font in Next.js?",
//         "options": [
//             "Using next/font/google with variable: true",
//             "Using next/font/variable with font name",
//             "Same as regular fonts, Next.js detects it",
//             "Using CSS @font-face with font-variation"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 664,
//         "question": "Can fonts be applied globally in Next.js?",
//         "options": [
//             "Yes, but only in _app.js file",
//             "No, fonts must be applied per component",
//             "Yes, by applying className to body in layout",
//             "No, global fonts are not supported",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 665,
//         "question": "What happens to unused font weights with next/font?",
//         "options": [
//             "They are included in bundle for consistency",
//             "They are automatically excluded from build",
//             "They are loaded on demand when needed",
//             "They are converted to lighter formats"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 666,
//         "question": "How does next/font improve Core Web Vitals?",
//         "options": [
//             "By reducing Cumulative Layout Shift with font optimization",
//             "By eliminating all JavaScript from pages",
//             "By compressing images alongside fonts",
//             "By loading fonts only on fast connections"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 667,
//         "question": "Can you use next/font with Tailwind CSS?",
//         "options": [
//             "Yes, by adding font variable to Tailwind config",
//             "No, Tailwind requires manual font loading",
//             "Yes, but only with CDN fonts",
//             "No, they are incompatible technologies"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 668,
//         "question": "What is the fallback font strategy in next/font?",
//         "options": [
//             "It automatically generates system font fallbacks",
//             "It loads generic sans-serif as backup",
//             "It displays blank space until font loads",
//             "It converts text to images temporarily"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 670,
//         "question": `Which component should you use instead of '<img>' tag?`,
//         "options": [
//             "<Picture> from next/image",
//             "<Image> from next/image",
//             "<Img> from next/component",
//             "<OptimizedImage> from next/core"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 671,
//         "question": "What does Next.js Image component do automatically?",
//         "options": [
//             "Removes all metadata from image files automatically",
//             "Converts images to WebP format and lazy-loads",
//             "Uploads images to CDN automatically",
//             "Generates alt text using AI"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 672,
//         "question": "Why is lazy loading important for images?",
//         "options": [
//             "It improves SEO ranking significantly",
//             "It loads images only when entering viewport",
//             "It prevents users from downloading images",
//             "It converts images to smaller formats"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 673,
//         "question": "Which property is required for static image imports?",
//         "options": [
//             "url with file path string",
//             "source with image location",
//             "src with imported image object",
//             "path with relative directory"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 674,
//         "question": "How do you specify image dimensions for remote images?",
//         "options": [
//             "Next.js detects dimensions automatically",
//             "Using width and height props explicitly",
//             "Using size prop with single value",
//             "Using dimensions prop with object",
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 675,
//         "question": "What is the purpose of the fill property?",
//         "options": [
//             "It fills empty space with background color",
//             "It makes image fill parent container",
//             "It adds padding around the image",
//             "It duplicates image to fill grid"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 676,
//         "question": "Which property controls how image fits in container?",
//         "options": [
//             "fit property with CSS values",
//             "resize property with custom values",
//             "scale property with numeric values",
//             "objectFit property with CSS values",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 677,
//         "question": "What does priority property do for images?",
//         "options": [
//             "It disables lazy loading for above-fold images",
//             "It increases image quality significantly",
//             "It loads image before HTML parsing",
//             "It caches image permanently in browser"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 678,
//         "question": "When should you use priority property?",
//         "options": [
//             "For all images to improve performance",
//             "For largest contentful paint (LCP) images",
//             "For background images in components",
//             "For thumbnail images in galleries"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 679,
//         "question": "How does Next.js handle different screen sizes?",
//         "options": [
//             "It generates multiple image sizes automatically",
//             "It crops images based on viewport",
//             "It uses same size for all devices",
//             "It converts images to vector format"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 680,
//         "question": "What is the purpose of sizes property?",
//         "options": [
//             "It defines exact image dimensions in pixels",
//             "It tells browser which size to download",
//             "It sets maximum file size limit",
//             "It configures compression quality level"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 681,
//         "question": "Which image formats does Next.js optimize to?",
//         "options": [
//             "WebP and AVIF for modern browsers",
//             "JPEG and PNG for all browsers",
//             "SVG and GIF for animations",
//             "BMP and TIFF for quality"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 682,
//         "question": "How do you allow external image domains?",
//         "options": [
//             "Add domains to images.domains in next.config.js",
//             "Add URLs to allowedSources in package.json",
//             "Add hosts to imageHosts in tsconfig.json",
//             "Add origins to externalImages in .env"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 683,
//         "question": "What happens without configuring remote domains?",
//         "options": [
//             "Images load but without optimization",
//             "Next.js throws error and blocks image",
//             "Images are downloaded to local server",
//             "Images load with default placeholder"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 684,
//         "question": "What is the purpose of placeholder property?",
//         "options": [
//             "It replaces broken images automatically",
//             "It sets background color for transparency",
//             "It shows blurred preview while loading",
//             "It adds caption text below image",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 685,
//         "question": "Which placeholder value creates blur effect?",
//         "options": [
//             "placeholder='blur'",
//             "placeholder='loading'",
//             "placeholder='skeleton'",
//             "placeholder='preview'"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 686,
//         "question": "How do you provide custom blur placeholder?",
//         "options": [
//             "Using blurDataURL prop with base64 string",
//             "Using blurImage prop with file path",
//             "Using placeholder prop with image URL",
//             "Using loading prop with preview data"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 687,
//         "question": "What is the quality property range for images?",
//         "options": [
//             "0 to 100, where 0 is highest",
//             "1 to 100, where 100 is highest",
//             "0 to 10, where 10 is highest",
//             "1 to 10, where 1 is highest",
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 688,
//         "question": "What is the default quality value in Next.js?",
//         "options": [
//             "100 for maximum image quality",
//             "90 for high quality output",
//             "75 for balanced size and quality",
//             "50 for smallest file size",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 689,
//         "question": "How does Image component prevent layout shift?",
//         "options": [
//             "By reserving space using width and height",
//             "By loading all images before render",
//             "By using fixed container dimensions",
//             "By disabling image loading initially"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 690,
//         "question": "What should you use instead of width and height attribute when using the<image> in Next.js?",
//         "options": [
//             "Next.js calculates them from file",
//             "Image loads without optimization",
//             "Component throws runtime error",
//             "You must use fill property instead",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 691,
//         "question": "Can you style Next.js Image component?",
//         "options": [
//             "Yes, using className or style props",
//             "No, styling is not supported",
//             "Yes, but only inline styles",
//             "No, only Tailwind classes work"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 692,
//         "question": "What is the purpose of loader property?",
//         "options": [
//             "It customizes image optimization service URL",
//             "It converts images to different formats",
//             "It shows loading spinner during fetch",
//             "It preloads images before rendering",
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 693,
//         "question": "How does Next.js handle image caching?",
//         "options": [
//             "It disables caching for dynamic images",
//             "It caches optimized images automatically",
//             "It requires manual cache configuration",
//             "It stores images only in memory"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 694,
//         "question": "What is the benefit of automatic image optimization?",
//         "options": [
//             "It reduces bandwidth and improves load times",
//             "It removes need for image editing",
//             "It generates alt text automatically",
//             "It converts all images to vectors"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 695,
//         "question": "Can Image component work with SVG files?",
//         "options": [
//             "Yes, but SVGs are not optimized",
//             "No, only raster formats supported",
//             "Yes, and they are converted to PNG",
//             "No, use regular img tag instead"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 696,
//         "question": "What does unoptimized property do?",
//         "options": [
//             "It reduces image quality to minimum",
//             "It serves original image without processing",
//             "It removes all image metadata",
//             "It disables lazy loading feature"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 697,
//         "question": "How does Image component improve Core Web Vitals?",
//         "options": [
//             "By optimizing LCP, CLS, and loading performance",
//             "By removing all JavaScript from pages",
//             "By compressing HTML alongside images",
//             "By loading images only on WiFi"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 698,
//         "question": "What is responsive image loading in Next.js?",
//         "options": [
//             "It rotates images based on orientation",
//             "It adjusts image aspect ratio automatically",
//             "It serves appropriately sized images per device",
//             "It changes image format by browser"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 699,
//         "question": "What does fill property do in Next.js Image component?",
//         "options": [
//             "Makes image fill entire parent container",
//             "Fills empty space with background color",
//             "Adds padding around image element",
//             "Duplicates image to fill grid layout"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 700,
//         "question": "When using fill, what must the parent container have?",
//         "options": [
//             "display: flex with align-items center",
//             "position: relative or absolute styling",
//             "overflow: hidden with max-width set",
//             "width: 100% with height: auto"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 701,
//         "question": "What does object-cover class do for fill images?",
//         "options": [
//             "Covers container maintaining aspect ratio",
//             "Converts image to cover entire page",
//             "Adds overlay cover on top of image",
//             "Covers only visible viewport area"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 702,
//         "question": "What is the difference between object-cover and object-contain?",
//         "options": [
//             "object-cover stretches, object-contain maintains size",
//             "object-cover fills width, object-contain fills height",
//             "object-cover crops, object-contain shows full image",
//             "object-cover zooms in, object-contain zooms out"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 703,
//         "question": "What does object-top class control in Image component?",
//         "options": [
//             "Z-index stacking order of image",
//             "Vertical alignment of text around image",
//             "Position of image within container",
//             "Top margin spacing for image"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 704,
//         "question": "Can you use width and height props with fill?",
//         "options": [
//             "Yes, they work together for aspect ratio",
//             "No, fill and dimensions are mutually exclusive",
//             "Yes, but only in development mode",
//             "No, Next.js throws compilation error"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 705,
//         "question": "How do you create square image container with fill?",
//         "options": [
//             "Using ratio='1:1' on parent element",
//             "Using width and height equal values",
//             "Using square property on Image component",
//             "Using aspect-square class on parent container",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 706,
//         "question": "What does aspect-video class create for image container?",
//         "options": [
//             "4:3 aspect ratio for standard format",
//             "16:9 aspect ratio for video format",
//             "Square aspect ratio for videos",
//             "21:9 aspect ratio for ultra wide format"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 707,
//         "question": "How does aspect-square work with fill images?",
//         "options": [
//             "Container maintains square shape while image fills",
//             "Image is cropped to square automatically",
//             "Image is stretched to perfect square",
//             "Container and image both become circles"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 708,
//         "question": "What happens without relative class on fill image parent?",
//         "options": [
//             "Image loads but without optimization",
//             "Image will not load at all",
//             "Image may not position correctly",
//             "Image appears in top-left corner"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 709,
//         "question": "Can you use object-center with fill images?",
//         "options": [
//             "Yes, but only for square containers",
//             "No, centering requires flexbox instead",
//             "Yes, it centers image within container",
//             "No, fill images are always centered"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 710,
//         "question": "What does object-fit: contain show compared to cover?",
//         "options": [
//             "Full image with possible empty space",
//             "Cropped image filling entire container",
//             "Stretched image to fit exactly",
//             "Tiled image repeating in container"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 711,
//         "question": "How do you make fill image responsive across breakpoints?",
//         "options": [
//             "Using responsive property on Image component",
//             "Using responsive classes like md:aspect-video",
//             "Using breakpoint prop with array values",
//             "Using sizes with media query strings"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 712,
//         "question": "What is the purpose of sizes prop with fill images?",
//         "options": [
//             "Tells browser which image size to download",
//             "Sets container size at different breakpoints",
//             "Defines aspect ratio for containers",
//             "Controls image quality per viewport"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 713,
//         "question": "Can you use col-span with fill images for grid layouts?",
//         "options": [
//             "No, fill images require flexbox only",
//             "Yes, it controls grid column spanning",
//             "Yes, but maximum 3 columns allowed",
//             "No, use grid-column property instead"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 714,
//         "question": "What does object-left-top do for fill images?",
//         "options": [
//             "Aligns image to top-left corner",
//             "Moves image outside container bounds",
//             "Rotates image to left orientation",
//             "Crops image from left-top area"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 715,
//         "question": "How can you use fill without making the image look stretched?",
//         "options": [
//             "Using object-cover or object-contain classes",
//             "Using preserve-aspect property on Image",
//             "Using fixed width and height values",
//             "Using ratio property with fraction"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 716,
//         "question": "Can you animate fill images with Tailwind transitions?",
//         "options": [
//             "Yes, but only opacity animations work",
//             "No, fill images cannot be animated",
//             "Yes, using transition and hover classes",
//             "No, use CSS keyframes instead"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 717,
//         "question": "What is best practice for hero images with fill?",
//         "options": [
//             "Use responsive with multiple source sets",
//             "Use fixed dimensions without fill property",
//             "Use fill with object-contain for full view",
//             "Use fill with object-cover and sizes='100vw'",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 718,
//         "question": "How does fill affect image loading performance?",
//         "options": [
//             "Loads full resolution image always",
//             "Still optimizes based on container size",
//             "Disables lazy loading automatically",
//             "Increases bundle size significantly"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 721,
//         "question": "How do you access environment variables in Next.js?",
//         "options": [
//             "Using env.get('VARIABLE_NAME') method",
//             "Using process.env.VARIABLE_NAME syntax",
//             "Using getEnv('VARIABLE_NAME') function",
//             "Using config.VARIABLE_NAME notation"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 722,
//         "question": "What prefix exposes env variables to the browser?",
//         "options": [
//             "BROWSER_ prefix for client side",
//             "PUBLIC_ prefix for frontend usage",
//             "CLIENT_ prefix for browser exposure",
//             "NEXT_PUBLIC_ prefix for client access",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 723,
//         "question": "Can you access server-only env variables in browser?",
//         "options": [
//             "Yes, all variables available everywhere",
//             "No, only NEXT_PUBLIC_ variables accessible",
//             "Yes, but only in production mode",
//             "No, unless explicitly configured"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 724,
//         "question": "What happens to env variables without NEXT_PUBLIC_ prefix?",
//         "options": [
//             "They remain server-side only for security",
//             "They become public automatically",
//             "They are ignored during build process",
//             "They throw error in production"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 725,
//         "question": "Which env file has highest priority in Next.js?",
//         "options": [
//             ".env.production takes highest priority",
//             ".env.development has most precedence",
//             ".env.local overrides other env files",
//             ".env is always prioritized first"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 726,
//         "question": "What is the purpose of .env.production file?",
//         "options": [
//             "Variables specific to production builds",
//             "Backup variables for all environments",
//             "Testing variables before deployment",
//             "Development variables for staging"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 727,
//         "question": "Should .env.local be committed to git repository?",
//         "options": [
//             "Yes, for team collaboration purposes",
//             "No, it contains sensitive local data",
//             "Yes, but only for public projects",
//             "No, unless encrypted properly first"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 728,
//         "question": "How do you provide default values for env variables?",
//         "options": [
//             "Using config.defaults object",
//             "Using fallback.env for defaults",
//             "Using .env file for default values",
//             "Using defaults.json configuration file",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 729,
//         "question": "Can you use env variables in next.config.js?",
//         "options": [
//             "Yes, but only NEXT_PUBLIC_ variables",
//             "No, config runs before env loading",
//             "Yes, using process.env directly",
//             "No, requires separate config file"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 730,
//         "question": "What is the purpose of .env.example file?",
//         "options": [
//             "Backup of production environment variables",
//             "Template showing required env variables",
//             "Example values for testing purposes",
//             "Default fallback for missing variables"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 731,
//         "question": "How are env variables loaded in Next.js?",
//         "options": [
//             "Automatically at build and runtime",
//             "Manually using loadEnv() function",
//             "Only during initial server startup",
//             "Through external configuration service"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 732,
//         "question": "Can you override env variables at runtime?",
//         "options": [
//             "No, unless using serverless functions",
//             "Yes, using runtime configuration API",
//             "Yes, but only in development mode",
//             "No, they are set at build time",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 733,
//         "question": "What happens when env variable is undefined?",
//         "options": [
//             "Variable gets empty string as default",
//             "Next.js throws build error immediately",
//             "process.env.VAR returns undefined value",
//             "Application crashes at runtime"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 734,
//         "question": "How do you use env variables in API routes?",
//         "options": [
//             "Access via process.env like server code",
//             "Import from special env module",
//             "Use getEnv() helper function",
//             "Pass through request headers"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 735,
//         "question": "Can you use env variables in client components?",
//         "options": [
//             "Yes, all variables available automatically",
//             "No, client components cannot access env",
//             "Only if prefixed with NEXT_PUBLIC_",
//             "Yes, but requires special import"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 736,
//         "question": "What is the risk of exposing env variables to browser?",
//         "options": [
//             "Sensitive data visible in client code",
//             "Increases bundle size significantly",
//             "Slows down page load performance",
//             "Breaks server-side rendering"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 737,
//         "question": "How do you validate required env variables?",
//         "options": [
//             "Next.js validates automatically at build",
//             "Check at runtime or use validation library",
//             "Use validateEnv() built-in function",
//             "Define in env.schema.json file"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 738,
//         "question": "Can you use multiline values in env files?",
//         "options": [
//             "Yes, using quotes and newline characters",
//             "No, env values must be single line",
//             "Yes, but only in .env.local file",
//             "No, requires JSON format instead"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 739,
//         "question": "What is the purpose of .env.development.local?",
//         "options": [
//             "Local overrides for development environment",
//             "Shared development variables for team",
//             "Production testing before deployment",
//             "Backup of development configurations"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 740,
//         "question": "How do env variables work in Docker containers?",
//         "options": [
//             "Automatically copied from host system",
//             "Cannot use env variables in containers",
//             "Pass via docker run -e or compose file",
//             "Must rebuild image for each change",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 741,
//         "question": "Can you use env variables for database connection strings?",
//         "options": [
//             "Yes, but only in development",
//             "No, use config files instead",
//             "Yes, common practice for security",
//             "No, hardcode for better performance"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 742,
//         "question": "What is best practice for API keys in Next.js?",
//         "options": [
//             "Store in NEXT_PUBLIC_ for easy access",
//             "Store in server-side env variables only",
//             "Hardcode directly in source code",
//             "Store in public constants file"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 743,
//         "question": "How do you handle env variables in Vercel deployment?",
//         "options": [
//             "Commit all env files to repository",
//             "Add through Vercel dashboard or CLI",
//             "Upload .env.local file to server",
//             "Configure in vercel.json file"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 744,
//         "question": "Can you use env variables in middleware?",
//         "options": [
//             "No, middleware cannot access env",
//             "Yes, all variables available",
//             "No, requires separate configuration",
//             "Yes, but only non-NEXT_PUBLIC_ variables",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 745,
//         "question": "What happens to NEXT_PUBLIC_ variables in build output?",
//         "options": [
//             "Inlined into JavaScript bundle code",
//             "Kept separate in env file",
//             "Encrypted for security purposes",
//             "Removed from production build"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 746,
//         "question": "How do you use different API URLs per environment?",
//         "options": [
//             "Use different env files per environment",
//             "Use if statements checking NODE_ENV",
//             "Use switch case for each environment",
//             "Use separate config.js per environment"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 747,
//         "question": "Can you access env variables in getStaticProps?",
//         "options": [
//             "Yes, but only NEXT_PUBLIC_ variables",
//             "No, only available in API routes",
//             "Yes, runs on server with full access",
//             "No, use runtime configuration instead"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 748,
//         "question": "What is the recommended way to type env variables?",
//         "options": [
//             "Create TypeScript declaration file for process.env",
//             "Use any type for all variables",
//             "Next.js types them automatically",
//             "No typing needed for env variables"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },{
//         "id": 749,
//         "question": "What is streaming in React and Next.js?",
//         "options": [
//             "Sending HTML chunks to browser progressively",
//             "Playing video content in components",
//             "Real-time data updates via WebSocket",
//             "Continuous data flow from database"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 750,
//         "question": "What is the purpose of React Suspense?",
//         "options": [
//             "Pauses component rendering permanently",
//             "Delays JavaScript execution temporarily",
//             "Shows fallback UI while content loads",
//             "Suspends user interactions until ready"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 751,
//         "question": "How does Suspense work with streaming?",
//         "options": [
//             "Stops streaming until data is ready",
//             "Converts streaming to static rendering",
//             "Disables streaming for better performance",
//             "Shows fallback while streaming component content",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 752,
//         "question": "What does fallback prop specify in Suspense?",
//         "options": [
//             "Backup component for rendering",
//             "UI to show while content loading",
//             "Default data when fetch fails",
//             "Alternative route on error",
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 753,
//         "question": "Can you nest multiple Suspense boundaries?",
//         "options": [
//             "Yes, but maximum three levels",
//             "No, only one per page allowed",
//             "Yes, for granular loading states",
//             "No, causes infinite loading loops"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 754,
//         "question": "What triggers Suspense boundary in components?",
//         "options": [
//             "Async operations like data fetching",
//             "State updates in child components",
//             "Props changes from parent component",
//             "CSS animations and transitions"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 755,
//         "question": "How does streaming improve Time to First Byte?",
//         "options": [
//             "Caches responses on CDN edge",
//             "Sends initial HTML faster without waiting",
//             "Compresses data before sending response",
//             "Reduces server processing time significantly"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 756,
//         "question": "What is the difference between streaming and SSR?",
//         "options": [
//             "Streaming works offline, SSR needs server",
//             "Streaming is faster, SSR is slower",
//             "Streaming sends chunks, SSR waits for all",
//             "Streaming for client, SSR for server"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 757,
//         "question": "Can Server Components use Suspense boundaries?",
//         "options": [
//             "No, Server Components render synchronously",
//             "Yes, for async data fetching operations",
//             "No, only Client Components support it",
//             "Yes, but only in development mode",
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 758,
//         "question": "What happens when Suspense boundary catches promise?",
//         "options": [
//             "Shows fallback until promise resolves",
//             "Throws error stopping component render",
//             "Cancels promise and retries fetch",
//             "Converts promise to synchronous code"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 759,
//         "question": "How does loading.js relate to Suspense?",
//         "options": [
//             "It's automatic Suspense boundary for routes",
//             "It replaces Suspense in Next.js completely",
//             "It loads files before Suspense renders",
//             "It defines loading speed for Suspense"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 760,
//         "question": "Can you use Suspense with React.lazy?",
//         "options": [
//             "No, lazy requires different loading method",
//             "Yes, for code-splitting components lazily",
//             "Yes, but only for small components",
//             "No, lazy and Suspense are incompatible"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 761,
//         "question": "What is progressive rendering in streaming?",
//         "options": [
//             "Rendering components as data becomes available",
//             "Gradually improving image quality over time",
//             "Slowly loading page from top to bottom",
//             "Rendering based on user scroll position"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 762,
//         "question": "How does Suspense improve perceived performance?",
//         "options": [
//             "Actually makes code run faster",
//             "Caches everything in browser memory",
//             "Prefetches all data before rendering",
//             "Shows content immediately reducing wait time",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1361,
//         "question": "What is an Error Boundary in React?",
//         "options": [
//             "A component that catches JavaScript errors in child tree",
//             "A validation library for forms",
//             "A debugging tool in DevTools",
//             "A type of React Router guard"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1362,
//         "question": "Which lifecycle method is used to catch errors in Error Boundaries?",
//         "options": [
//             "componentDidCatch and getDerivedStateFromError",
//             "componentWillCatch and handleError",
//             "onError and catchError",
//             "useErrorBoundary hook"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1363,
//         "question": "Can functional components be Error Boundaries?",
//         "options": [
//             "Yes, using useErrorBoundary hook",
//             "No, only class components currently",
//             "Yes, with special wrapper function",
//             "No, Error Boundaries are deprecated"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1364,
//         "question": "What errors do Error Boundaries NOT catch?",
//         "options": [
//             "Errors in child component render",
//             "Event handlers, async code, and SSR errors",
//             "Errors in lifecycle methods",
//             "Errors in constructor functions"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1365,
//         "question": "How do you handle errors in event handlers?",
//         "options": [
//             "Error Boundaries catch them automatically",
//             "Use try-catch blocks in handlers",
//             "Event errors cannot be caught",
//             "Use global error handler only"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1366,
//         "question": "Where should Error Boundaries be placed?",
//         "options": [
//             "Only at root level of application",
//             "Around every single component",
//             "Strategically around key sections for granular handling",
//             "Error Boundaries are automatic"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1367,
//         "question": "What should an Error Boundary render on error?",
//         "options": [
//             "Nothing, just log the error",
//             "Fallback UI with error message",
//             "Redirect to home page automatically",
//             "The original component again"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1368,
//         "question": "Can you reset an Error Boundary after an error?",
//         "options": [
//             "No, page must be refreshed manually",
//             "Yes, by updating state to reset boundary",
//             "Automatic reset after 5 seconds",
//             "Error Boundaries cannot be reset"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 763,
//         "question": "Can Suspense work with error boundaries?",
//         "options": [
//             "No, they serve completely different purposes",
//             "Yes, error boundaries catch Suspense errors",
//             "Yes, but only in production builds",
//             "No, Suspense replaces error boundaries"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 764,
//         "question": "What is selective hydration with Suspense?",
//         "options": [
//             "Choosing which components to hydrate manually",
//             "Hydrating components independently when ready",
//             "Hydrating only visible components on screen",
//             "Partial hydration based on user interaction"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 765,
//         "question": "How does streaming affect SEO?",
//         "options": [
//             "Content still indexed but loads progressively",
//             "Completely breaks search engine crawling",
//             "Improves SEO by loading faster",
//             "No effect on SEO whatsoever"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 766,
//         "question": "Can you use Suspense with client-side data fetching?",
//         "options": [
//             "Yes, but requires manual configuration",
//             "No, only server-side fetching works",
//             "Yes, with libraries supporting Suspense",
//             "No, Suspense is server-only feature"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 767,
//         "question": "What is the purpose of startTransition with Suspense?",
//         "options": [
//             "Marks updates as non-urgent allowing interruption",
//             "Initiates streaming from server immediately",
//             "Starts CSS transitions during loading",
//             "Begins data fetching before rendering",
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 768,
//         "question": "How does Suspense handle concurrent requests?",
//         "options": [
//             "Renders whichever resolves first independently",
//             "Cancels slower requests automatically",
//             "Waits for all requests to finish",
//             "Queues requests in order received"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 769,
//         "question": "Can you show different fallbacks for different sections?",
//         "options": [
//             "No, fallback is global configuration",
//             "Yes, but requires custom hook",
//             "No, only one fallback per page",
//             "Yes, using multiple Suspense boundaries",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 770,
//         "question": "What happens if fallback component also suspends?",
//         "options": [
//             "Automatically retries rendering fallback",
//             "Application crashes with error",
//             "Shows blank screen indefinitely",
//             "Parent Suspense boundary catches it",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 771,
//         "question": "How does Suspense improve user experience?",
//         "options": [
//             "Prevents users from leaving page",
//             "Makes application load twice as fast",
//             "Eliminates all loading states completely",
//             "Shows meaningful loading states reducing frustration",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 772,
//         "question": "Can Suspense be used for non-data operations?",
//         "options": [
//             "Yes, any async operation throwing promise",
//             "No, only data fetching supported",
//             "Yes, but only image loading",
//             "No, strictly for API calls"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 773,
//         "question": "What is the relationship between Suspense and loading states?",
//         "options": [
//             "Suspense declaratively manages loading states",
//             "Suspense eliminates need for loading states",
//             "Suspense converts loading to error states",
//             "Suspense and loading states are unrelated"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 774,
//         "question": "How does streaming affect bandwidth usage?",
//         "options": [
//             "Reduces bandwidth by compressing streams",
//             "Same total data sent more efficiently",
//             "Increases bandwidth due to chunking",
//             "No effect on bandwidth whatsoever"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 775,
//         "question": "Can you cancel Suspense loading programmatically?",
//         "options": [
//             "Yes, but only during development",
//             "Yes, using cancelSuspense() method",
//             "No, Suspense resolves when promise settles",
//             "No, requires page refresh to cancel"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 776,
//         "question": "What is Out-of-Order Streaming in React?",
//         "options": [
//             "Streaming data in reverse chronological order",
//             "Components stream in priority order not sequential",
//             "Random component rendering for performance",
//             "Streaming only non-critical components late"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 777,
//         "question": "How does Suspense work with React Server Components?",
//         "options": [
//             "Converts Server Components to Client Components",
//             "Suspense doesn't work with Server Components",
//             "Allows async Server Components to suspend",
//             "Disables Server Components during loading",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 778,
//         "question": "What is the best practice for Suspense boundaries?",
//         "options": [
//             "Wrap every single component individually",
//             "Only use one boundary per application",
//             "Place where loading states make sense",
//             "Avoid Suspense in production builds"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 781,
//         "question": "What is the structure for dynamic route folder?",
//         "options": [
//             "app/posts/:id/page.js for single parameter route",
//             "app/posts/{id}/page.js for single parameter route",
//             "app/posts/<id>/page.js for single parameter route",
//             "app/posts/[id]/page.js for single parameter route"
//         ],
//         "correctOption": 3,
//         "points": 10
//     },
//     {
//         "id": 782,
//         "question": "How do you create catch-all dynamic routes?",
//         "options": [
//             "Using [...slug] bracket folder naming",
//             "Using [*slug] asterisk for catch-all",
//             "Using [slug*] suffix for multiple",
//             "Using [slug...] suffix for paths"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 783,
//         "question": "What does [...slug] match in routes?",
//         "options": [
//             "Only single segment in the URL",
//             "All segments after the base path",
//             "Exactly two segments in the path",
//             "Optional single segment in URL"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 784,
//         "question": "How do you create optional catch-all routes?",
//         "options": [
//             "Using [...slug]? with question mark suffix",
//             "Using [slug...]? optional bracket syntax",
//             "Using [[...slug]] double bracket notation",
//             "Using [...slug|optional] pipe notation"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 785,
//         "question": "What is difference between [...slug] and [[...slug]]?",
//         "options": [
//             "[...slug] matches base route automatically",
//             "[[...slug]] matches base route too",
//             "[[...slug]] requires minimum two segments",
//             "[...slug] matches optional parameters"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 786,
//         "question": "How do you access catch-all route parameters?",
//         "options": [
//             "params.slug returns array of segments",
//             "params.slug returns single string value",
//             "params.slug returns object with keys",
//             "params.slug returns comma-separated string"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 787,
//         "question": "Can you have multiple dynamic segments in one route?",
//         "options": [
//             "No, only one dynamic segment allowed",
//             "Yes, but maximum three segments only",
//             "No, requires separate route definitions",
//             "Yes, like [category]/[id]/page.js structure"
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 788,
//         "question": "How do you generate static paths for dynamic routes?",
//         "options": [
//             "Using getStaticPaths in page component",
//             "Using generateMetadata exported function",
//             "Using generateStaticParams exported function",
//             "Using getServerSideProps for paths"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 789,
//         "question": "What does generateStaticParams return for dynamic routes?",
//         "options": [
//             "Array of parameter objects for routes",
//             "Object with route configuration settings",
//             "String array of valid route paths",
//             "Promise resolving to route mappings"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 790,
//         "question": "When is generateStaticParams executed in Next.js?",
//         "options": [
//             "During runtime when user visits route",
//             "During build time for static generation",
//             "After page loads in browser client",
//             "Before server starts in development"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 791,
//         "question": "Can dynamic routes be Server Components by default?",
//         "options": [
//             "No, they must be Client Components",
//             "Yes, unless marked with 'use client'",
//             "No, dynamic routes always run client-side",
//             "Yes, but only for static generation"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 792,
//         "question": "How do you handle 404 for invalid dynamic routes?",
//         "options": [
//             "Using custom error.js in route folder",
//             "Using not-found.js file in route folder",
//             "Using notFound() function from next/navigation",
//             "Using return null in page component"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 793,
//         "question": "What is the priority order for route matching?",
//         "options": [
//             "Dynamic routes match before static routes",
//             "Catch-all routes have highest priority always",
//             "Static routes match before dynamic routes",
//             "All routes have equal matching priority"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 794,
//         "question": "Can you use params in layout components?",
//         "options": [
//             "No, params only available in pages",
//             "Yes, params passed to layout components",
//             "No, layouts don't receive any props",
//             "Yes, but only for root layouts"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 795,
//         "question": "How do you create nested dynamic routes?",
//         "options": [
//             "Using separate configuration file for nesting",
//             "Using [param1]/[param2] folder structure nesting",
//             "Using nested brackets like [[param1][param2]]",
//             "Using comma-separated params in single bracket"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 796,
//         "question": "What happens when dynamic route doesn't match?",
//         "options": [
//             "Shows custom not-found.js component UI",
//             "Redirects to home page automatically",
//             "Shows blank screen without errors",
//             "Throws 500 server error immediately"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 797,
//         "question": "Can you use searchParams with dynamic routes?",
//         "options": [
//             "Yes, alongside params in page props",
//             "No, params and searchParams conflict",
//             "Yes, but only in Client Components",
//             "No, use useSearchParams hook instead"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 798,
//         "question": "How do you validate dynamic route parameters?",
//         "options": [
//             "Using validateParams in page component",
//             "Using Zod schema in route handler",
//             "In page component before fetching data",
//             "Using middleware for parameter validation"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 799,
//         "question": "What is dynamicParams configuration option for?",
//         "options": [
//             "Controls behavior for non-generated params",
//             "Enables dynamic parameter validation rules",
//             "Sets maximum number of dynamic segments",
//             "Configures parameter encoding format"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 800,
//         "question": "Can you use dynamic routes with parallel routes?",
//         "options": [
//             "No, parallel routes cannot be dynamic",
//             "Yes, but requires special configuration",
//             "No, they serve different purposes entirely",
//             "Yes, using @folder/[param] structure combination"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 801,
//         "question": "How do you generate metadata for dynamic routes?",
//         "options": [
//             "Using metadata object with dynamic values",
//             "Using generateMetadata function with params",
//             "Using getMetadata exported async function",
//             "Using metadataParams in page configuration"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 802,
//         "question": "What does revalidate option do for dynamic routes?",
//         "options": [
//             "Validates parameter format before rendering",
//             "Controls ISR regeneration time interval",
//             "Revalidates user authentication tokens",
//             "Checks parameter values against schema"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 803,
//         "question": "Can catch-all routes coexist with static routes?",
//         "options": [
//             "Yes, static routes take higher priority",
//             "No, catch-all overrides all other routes",
//             "Yes, but requires manual configuration",
//             "No, they cause routing conflicts always"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 804,
//         "question": "How do you handle loading states for dynamic routes?",
//         "options": [
//             "Using loading.js in the route folder",
//             "Using isLoading prop in page component",
//             "Using Suspense boundary around page",
//             "Using useLoading hook in component"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 805,
//         "question": "What is the difference between params and searchParams?",
//         "options": [
//             "params from URL path, searchParams from query",
//             "params for client, searchParams for server",
//             "params are strings, searchParams are objects",
//             "params are optional, searchParams required"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 806,
//         "question": "Can you use dynamic routes with route groups?",
//         "options": [
//             "No, route groups don't support dynamics",
//             "Yes, like (group)/[param]/page.js structure",
//             "Yes, but only with catch-all routes",
//             "No, they have different purposes entirely"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 807,
//         "question": "How do you redirect from dynamic route based on param?",
//         "options": [
//             "Using redirect() function from next/navigation",
//             "Using return redirect in page component",
//             "Using Router.push in useEffect hook",
//             "Using <Redirect> component in JSX"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 808,
//         "question": "What happens with special characters in dynamic params?",
//         "options": [
//             "Next.js URL encodes them automatically",
//             "They cause routing errors immediately",
//             "They are stripped from parameters",
//             "They must be manually encoded first"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 809,
//         "question": "How do you generate dynamic metadata in Next.js pages?",
//         "options": [
//             "Export generateMetadata function from page",
//             "Use metadata object with dynamic values",
//             "Call setMetadata hook in component body",
//             "Import getMetadata from next/metadata"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 810,
//         "question": "What parameters does generateMetadata function receive?",
//         "options": [
//             "Only params object from route segments",
//             "Only searchParams from URL query string",
//             "Both params and searchParams as objects",
//             "Only request object with full details"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 811,
//         "question": "Can generateMetadata be an async function?",
//         "options": [
//             "No, metadata must be synchronous always",
//             "Yes, it can fetch data asynchronously",
//             "No, async causes hydration errors",
//             "Yes, but only in production mode"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 812,
//         "question": "What does generateMetadata function return?",
//         "options": [
//             "Promise resolving to metadata object",
//             "String containing page title only",
//             "Array of meta tags for head",
//             "Metadata object with title and description"
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 813,
//         "question": "How do you set dynamic Open Graph images?",
//         "options": [
//             "Using openGraph.images array in metadata",
//             "Using og:image meta tag in head",
//             "Using setOGImage function from Next",
//             "Using dynamicOG property in config"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 814,
//         "question": "Can you access parent metadata in generateMetadata?",
//         "options": [
//             "Yes, but only in root layout",
//             "No, each route generates independently",
//             "Yes, through third parameter parent",
//             "No, metadata doesn't support inheritance"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 815,
//         "question": "What is the purpose of parent parameter?",
//         "options": [
//             "Access parent component props directly",
//             "Get metadata from parent route segments",
//             "Reference parent layout configuration",
//             "Inherit styles from parent components"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 816,
//         "question": "How do you set dynamic page title with params?",
//         "options": [
//             "Using title property with template string",
//             "Using setTitle hook in component body",
//             "Using dynamicTitle in route config",
//             "Using <title> tag in page JSX"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 817,
//         "question": "Can you fetch data inside generateMetadata function?",
//         "options": [
//             "Yes, using async/await for API calls",
//             "No, fetching must happen in page",
//             "Yes, but only from static files",
//             "No, metadata must be synchronous"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 818,
//         "question": "What happens when generateMetadata throws an error?",
//         "options": [
//             "Shows custom error page to user",
//             "Falls back to static metadata object",
//             "Page renders without any metadata",
//             "Next.js shows 500 error page"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 819,
//         "question": "How do you set dynamic canonical URLs?",
//         "options": [
//             "Using alternates.canonical in metadata",
//             "Using <link rel='canonical'> in JSX",
//             "Using setCanonical from next/head",
//             "Using canonical property in config"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 820,
//         "question": "Can static metadata and generateMetadata coexist?",
//         "options": [
//             "Yes, but static takes priority always",
//             "No, only one method allowed per route",
//             "Yes, but generateMetadata takes priority",
//             "No, Next.js throws build error"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 821,
//         "question": "How do you set different metadata per locale?",
//         "options": [
//             "Check locale in generateMetadata params",
//             "Use separate metadata per language file",
//             "Import translations in metadata object",
//             "Use i18n config in next.config.js"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 822,
//         "question": "What is title.template used for in metadata?",
//         "options": [
//             "Defines title format for child routes",
//             "Creates dynamic title from database",
//             "Validates title length and format",
//             "Generates SEO-friendly title strings"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 823,
//         "question": "How do you override parent title template?",
//         "options": [
//             "Use title.default in child metadata",
//             "Use title.absolute in child metadata",
//             "Use title.override in child metadata",
//             "Use title.custom in child metadata"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 824,
//         "question": "Can you use environment variables in generateMetadata?",
//         "options": [
//             "No, env variables unavailable there",
//             "Yes, using process.env like usual",
//             "No, only in page components",
//             "Yes, but only NEXT_PUBLIC_ variables"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 825,
//         "question": "How do you set dynamic Twitter Card metadata?",
//         "options": [
//             "Using <meta> tags in page JSX",
//             "Using twitter property in metadata object",
//             "Using setTwitterCard from next/head",
//             "Using socialMedia.twitter in config"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 826,
//         "question": "What does metadataBase property define?",
//         "options": [
//             "Base URL for relative metadata URLs",
//             "Default metadata for all pages",
//             "Primary language for content",
//             "Root directory for metadata files"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 827,
//         "question": "Can you conditionally return different metadata?",
//         "options": [
//             "Yes, based on params or conditions",
//             "No, metadata must be static always",
//             "Yes, but only in development mode",
//             "No, causes hydration mismatches"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 828,
//         "question": "How do you set dynamic meta description?",
//         "options": [
//             "Using description property in metadata",
//             "Using <meta name='description'> tag",
//             "Using setDescription hook in component",
//             "Using desc property in route config"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 829,
//         "question": "What is robots property used for in metadata?",
//         "options": [
//             "Control search engine crawling behavior",
//             "Validate bot traffic to website",
//             "Generate robots.txt file automatically",
//             "Block malicious bots from site"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 830,
//         "question": "Can you merge parent and child metadata objects?",
//         "options": [
//             "No, child completely overrides parent",
//             "Yes, Next.js merges them automatically",
//             "Yes, but requires manual spread operator",
//             "No, each route is independent"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 831,
//         "question": "How do you set dynamic alternate language URLs?",
//         "options": [
//             "Using alternates.languages in metadata",
//             "Using <link hreflang> tags in JSX",
//             "Using i18n config in next.config",
//             "Using setLanguages from next/head"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 832,
//         "question": "What happens when both metadata and generateMetadata exist?",
//         "options": [
//             "Metadata object takes priority always",
//             "Next.js throws compilation error",
//             "generateMetadata takes priority",
//             "Both merge into single metadata"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 833,
//         "question": "Can you use React hooks in generateMetadata?",
//         "options": [
//             "Yes, all React hooks work normally",
//             "No, it's not a React component",
//             "Yes, but only useState and useEffect",
//             "No, causes server-side errors"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 834,
//         "question": "How do you set dynamic viewport metadata?",
//         "options": [
//             "Using viewport property in metadata",
//             "Using <meta viewport> tag in JSX",
//             "Using setViewport from next/head",
//             "Using screen property in config"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 835,
//         "question": "What is icons property used for in metadata?",
//         "options": [
//             "Generate icon sprites automatically",
//             "Define favicon and app icons paths",
//             "Optimize icon loading performance",
//             "Convert images to icon formats"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 836,
//         "question": "Can you cache results of generateMetadata function?",
//         "options": [
//             "No, metadata generates on every request",
//             "Yes, but only in production builds",
//             "No, caching causes stale metadata",
//             "Yes, Next.js caches automatically"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 837,
//         "question": "How do you set dynamic author metadata?",
//         "options": [
//             "Using <meta name='author'> tag",
//             "Using authors array in metadata object",
//             "Using setAuthor hook in component",
//             "Using author property in config"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 838,
//         "question": "What is manifest property for in metadata?",
//         "options": [
//             "Link to web app manifest file",
//             "Generate manifest.json automatically",
//             "Configure PWA settings directly",
//             "Define app configuration manifest"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 841,
//         "question": "When does Next.js automatically choose dynamic rendering?",
//         "options": [
//             "When using dynamic functions like cookies",
//             "When page has too many components",
//             "When images are used in page",
//             "When CSS modules are imported"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 842,
//         "question": "What are dynamic functions in Next.js?",
//         "options": [
//             "Functions that run only on client",
//             "Functions that change component behavior",
//             "Functions like cookies, headers, searchParams",
//             "Functions that optimize bundle size"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 843,
//         "question": "How do you force static rendering?",
//         "options": [
//             "Export const dynamic = 'force-static'",
//             "Use static property in page config",
//             "Add staticMode to next.config.js",
//             "Wrap page with StaticRender component"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 844,
//         "question": "How do you force dynamic rendering?",
//         "options": [
//             "Add dynamicMode to route config",
//             "Use force dynamic in page settings",
//             "Wrap component with DynamicRender",
//             "Export const dynamic = 'force-dynamic'"
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 845,
//         "question": "What does ISR stand for in Next.js?",
//         "options": [
//             "Instant Server Rendering for pages",
//             "Incremental Static Regeneration technique",
//             "Internal State Revalidation process",
//             "Indexed Server Response caching"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 846,
//         "question": "How do you enable ISR for a page?",
//         "options": [
//             "Export const revalidate with time seconds",
//             "Use ISR property in page config",
//             "Add revalidate to next.config.js file",
//             "Wrap page with ISRProvider component"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 847,
//         "question": "What does revalidate: 60 mean in ISR?",
//         "options": [
//             "Page rebuilds every 60 milliseconds",
//             "Page regenerates after 60 user visits",
//             "Page revalidates at most every minute",
//             "Page caches for exactly 60 hours"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 848,
//         "question": "What is the benefit of ISR over static?",
//         "options": [
//             "ISR pages load faster than static",
//             "ISR updates content without full rebuild",
//             "ISR reduces server costs significantly",
//             "ISR works offline without internet"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 849,
//         "question": "What does revalidate: false do in Next.js?",
//         "options": [
//             "Disables page rendering completely",
//             "Makes page fully dynamic rendering",
//             "Caches page indefinitely until rebuild",
//             "Throws error during build process"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 850,
//         "question": "Can you mix static and dynamic rendering?",
//         "options": [
//             "No, entire app uses one method",
//             "Yes, per route basis configuration",
//             "No, causes hydration errors always",
//             "Yes, but only in production mode"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 851,
//         "question": "What is on-demand revalidation in Next.js?",
//         "options": [
//             "Automatic revalidation every hour daily",
//             "User-triggered page refresh manually",
//             "Manual revalidation via API call",
//             "Browser-based cache clearing method"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 852,
//         "question": "How do you trigger on-demand revalidation?",
//         "options": [
//             "Using revalidatePath or revalidateTag functions",
//             "Using refresh button in browser",
//             "Using clearCache from next/cache",
//             "Using invalidate method on page"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 853,
//         "question": "What is the difference between SSR and ISR?",
//         "options": [
//             "SSR renders per request, ISR regenerates periodically",
//             "SSR is slower, ISR is faster",
//             "SSR for server, ISR for client",
//             "SSR static, ISR is dynamic always"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 854,
//         "question": "When should you use static rendering?",
//         "options": [
//             "For pages with user-specific data",
//             "For real-time dashboards with updates",
//             "For content that rarely changes",
//             "For pages requiring authentication"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 855,
//         "question": "When should you use dynamic rendering?",
//         "options": [
//             "For blog posts that never change",
//             "For landing pages with static content",
//             "For documentation sites without updates",
//             "For personalized user dashboards"
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 856,
//         "question": "What does dynamicParams option control?",
//         "options": [
//             "Behavior for non-preRendered dynamic routes",
//             "Maximum number of dynamic parameters",
//             "Parameter validation rules for routes",
//             "Dynamic import loading behavior"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 857,
//         "question": "What is the default rendering strategy?",
//         "options": [
//             "Always dynamic rendering for all pages",
//             "Always static rendering for all pages",
//             "Mixed based on route requirements",
//             "Static with automatic ISR enabled"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 858,
//         "question": "Can you use cookies in static rendering?",
//         "options": [
//             "Yes, cookies work in static pages",
//             "No, it forces dynamic rendering automatically",
//             "Yes, but only in Client Components",
//             "No, causes build time errors"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 859,
//         "question": "What happens during ISR regeneration?",
//         "options": [
//             "Old page shown while new generates",
//             "Page shows loading state to users",
//             "Users wait for regeneration completion",
//             "Page returns 503 error temporarily"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 860,
//         "question": "How do you revalidate specific pages only?",
//         "options": [
//             "Using revalidatePath with page path",
//             "Using revalidateAll with page filter",
//             "Using updatePage from next/cache",
//             "Using refreshPage with page ID"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 861,
//         "question": "What is cache tagging in Next.js?",
//         "options": [
//             "Labeling cache entries for targeted revalidation",
//             "Tagging pages with SEO metadata",
//             "Marking components for code splitting",
//             "Organizing routes in folder structure"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 862,
//         "question": "How do you add cache tags?",
//         "options": [
//             "Using tags option in fetch requests",
//             "Using cacheTag property in config",
//             "Using setTag from next/cache",
//             "Using tag attribute on components"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 863,
//         "question": "What does revalidateTag function do?",
//         "options": [
//             "Validates tag format and syntax",
//             "Revalidates all pages with that tag",
//             "Tags pages for future revalidation",
//             "Removes tags from cache entries"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 864,
//         "question": "Can you use headers in static rendering?",
//         "options": [
//             "Yes, headers available in static pages",
//             "No, forces switch to dynamic rendering",
//             "Yes, but only response headers",
//             "No, throws compilation errors"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 865,
//         "question": "What is the purpose of unstable_cache?",
//         "options": [
//             "Cache function results with custom logic",
//             "Clear unstable cache entries manually",
//             "Validate cache before using data",
//             "Debug caching issues in development"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 866,
//         "question": "How does static rendering improve performance?",
//         "options": [
//             "Reduces server load with pre-rendering",
//             "Eliminates JavaScript from pages",
//             "Compresses HTML automatically",
//             "Removes unused CSS from bundles"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 867,
//         "question": "What is the trade-off of dynamic rendering?",
//         "options": [
//             "Increases build time significantly",
//             "Reduces SEO ranking potential",
//             "Slower response time per request",
//             "Larger JavaScript bundle sizes"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 868,
//         "question": "Can you use searchParams in static pages?",
//         "options": [
//             "Yes, searchParams work in static",
//             "No, forces dynamic rendering mode",
//             "Yes, but only with generateStaticParams",
//             "No, causes build errors"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 869,
//         "question": "What does export const dynamic = 'error' do?",
//         "options": [
//             "Throws error if dynamic rendering needed",
//             "Enables error boundaries for page",
//             "Catches dynamic errors automatically",
//             "Shows error page to users"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 870,
//         "question": "How do you check rendering type in development?",
//         "options": [
//             "Check console logs during build",
//             "Use Next.js DevTools browser extension",
//             "Check page source HTML comments",
//             "Look at network request timing"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 871,
//         "question": "What is partial pre-rendering in Next.js?",
//         "options": [
//             "Rendering only visible viewport content",
//             "Mix static shell with dynamic content",
//             "Pre-rendering half of page components",
//             "Building pages in multiple stages"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 872,
//         "question": "Can you use ISR with dynamic routes?",
//         "options": [
//             "Yes, with generateStaticParams and revalidate",
//             "No, dynamic routes always render dynamically",
//             "Yes, but only with catch-all routes",
//             "No, causes build configuration errors"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 873,
//         "question": "What happens when revalidate time expires?",
//         "options": [
//             "Page deletes from cache immediately",
//             "Next request triggers background regeneration",
//             "Users see loading state always",
//             "Server returns 404 error"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 874,
//         "question": "How do you opt out of caching?",
//         "options": [
//             "Use cache: 'no-store' in fetch",
//             "Use noCache property in config",
//             "Use disableCache from next/cache",
//             "Use cache: false in request"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 875,
//         "question": "What is the benefit of static over dynamic?",
//         "options": [
//             "Faster response time and lower costs",
//             "Better personalization per user",
//             "More flexibility with real-time data",
//             "Easier authentication implementation"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 876,
//         "question": "Can you use dynamic rendering in Server Components?",
//         "options": [
//             "No, Server Components always static",
//             "Yes, Server Components support both modes",
//             "No, only Client Components support it",
//             "Yes, but loses Server Component benefits"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 877,
//         "question": "What does fetch cache option 'force-cache' do?",
//         "options": [
//             "Forces caching even for dynamic data",
//             "Clears cache before fetching data",
//             "Validates cache before using it",
//             "Forces fresh fetch ignoring cache"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 878,
//         "question": "How do you debug rendering issues?",
//         "options": [
//             "Check build output and page indicators",
//             "Use debugRender from next/debug",
//             "Add debug: true to config",
//             "Enable verbose mode in browser"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 881,
//         "question": "What is Request Memoization in Next.js?",
//         "options": [
//             "Caching duplicate requests during single render",
//             "Storing requests in browser localStorage",
//             "Memoizing component render results only",
//             "Caching API responses across pages"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 882,
//         "question": "How long does Request Memoization last?",
//         "options": [
//             "Permanently until manual cache clear",
//             "Across entire user session duration",
//             "Only during single server render",
//             "For 60 seconds after request"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 883,
//         "question": "What is the Data Cache in Next.js?",
//         "options": [
//             "Temporary memory cache for components",
//             "Persistent storage for fetch requests",
//             "Browser cache for static assets",
//             "Database query result caching"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 884,
//         "question": "How do you opt out of Data Cache?",
//         "options": [
//             "Using cache: 'no-store' in fetch",
//             "Using noCache: true in config",
//             "Using disableCache from next/cache",
//             "Using skipCache property in request"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 885,
//         "question": "What does Full Route Cache store?",
//         "options": [
//             "User session data per route",
//             "API responses for route handlers",
//             "Only JavaScript bundles for routes",
//             "Complete rendered HTML and RSC payload",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 886,
//         "question": "When is Full Route Cache created?",
//         "options": [
//             "During build time for static routes",
//             "On first user request dynamically",
//             "After page loads in browser",
//             "When user navigates between pages"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 887,
//         "question": "What does cache: 'force-cache' do in fetch?",
//         "options": [
//             "Clears cache before fetching data",
//             "Uses cached data or fetches fresh",
//             "Forces new fetch ignoring cache",
//             "Validates cache before using it"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 888,
//         "question": "What does cache: 'no-store' do in fetch?",
//         "options": [
//             "Stores data without caching metadata",
//             "Caches only on client not server",
//             "Always fetches fresh data skipping cache",
//             "Temporarily stores data in memory"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 889,
//         "question": "How do you set custom cache duration?",
//         "options": [
//             "Using next.revalidate option in fetch",
//             "Using cacheTime property in request",
//             "Using duration from next/cache",
//             "Using ttl property in config"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 890,
//         "question": "What does revalidate: 3600 mean?",
//         "options": [
//             "Cache expires after 3600 milliseconds",
//             "Cache revalidates every 3600 seconds",
//             "Cache stores 3600 entries maximum",
//             "Cache clears after 3600 requests"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 891,
//         "question": "Can you revalidate cache programmatically?",
//         "options": [
//             "Yes, using revalidatePath or revalidateTag",
//             "No, only automatic revalidation works",
//             "Yes, using clearCache from next/cache",
//             "No, requires server restart always"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 892,
//         "question": "What is the Router Cache in Next.js?",
//         "options": [
//             "Server-side cache for route handlers",
//             "Client-side cache for route segments",
//             "Browser cache for router library",
//             "Memory cache for navigation history"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 893,
//         "question": "How long does Router Cache persist?",
//         "options": [
//             "Permanently until browser closes completely",
//             "For current session or time-based",
//             "Only during single page navigation",
//             "Until user clicks refresh button"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 894,
//         "question": "What happens when you navigate back in Next.js?",
//         "options": [
//             "Page always fetches fresh data",
//             "Page reloads from server completely",
//             "Router Cache provides instant navigation",
//             "Browser cache serves the page"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 895,
//         "question": "How do you invalidate Router Cache?",
//         "options": [
//             "Use resetRouter from next/router",
//             "Use clearRouter from next/cache",
//             "Use invalidateCache on router object",
//             "Use router.refresh() from next/navigation",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 896,
//         "question": "What is cache tagging used for?",
//         "options": [
//             "Grouping related cache entries together",
//             "Marking cache priority levels",
//             "Labeling cache with metadata",
//             "Organizing cache by file type"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 897,
//         "question": "How do you add tags to fetch cache?",
//         "options": [
//             "Using cacheTag property in request",
//             "Using tags attribute on function",
//             "Using next.tags array in fetch",
//             "Using setTag from next/cache",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 898,
//         "question": "What does revalidateTag function do?",
//         "options": [
//             "Validates tag format and syntax",
//             "Revalidates all cache entries with tag",
//             "Tags cache for future revalidation",
//             "Removes specific tags from cache"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 899,
//         "question": "Can you use multiple tags per fetch?",
//         "options": [
//             "Yes, pass array of tag strings",
//             "No, only one tag allowed per fetch",
//             "Yes, but maximum three tags",
//             "No, causes cache conflicts"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 900,
//         "question": "What is unstable_cache function for?",
//         "options": [
//             "Caching function results with custom keys",
//             "Clearing unstable cache entries manually",
//             "Validating cache before using data",
//             "Debugging cache issues in development"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 901,
//         "question": "How does unstable_cache differ from fetch cache?",
//         "options": [
//             "Works with non-fetch async functions",
//             "Only caches fetch API requests",
//             "Stores data in browser only",
//             "Requires manual cache invalidation"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 902,
//         "question": "What does cache: 'reload' do in fetch?",
//         "options": [
//             "Reloads page after fetching data",
//             "Fetches fresh data and updates cache",
//             "Clears cache before each request",
//             "Revalidates cache before using it"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 903,
//         "question": "Can you cache POST requests in Next.js?",
//         "options": [
//             "No, only GET requests are cached",
//             "Yes, all HTTP methods cache automatically",
//             "No, POST always bypasses cache",
//             "Yes, with special cache configuration"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 904,
//         "question": "What happens when cache becomes stale?",
//         "options": [
//             "Cache deletes automatically from storage",
//             "Stale data served, revalidation happens background",
//             "Request blocks until fresh data fetched",
//             "Error thrown to user immediately"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 905,
//         "question": "How do you disable all caching?",
//         "options": [
//             "Set export const dynamic = 'force-dynamic'",
//             "Use noCache: true in config",
//             "Add disableCache to next.config.js",
//             "Use cache: false in all fetches"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 906,
//         "question": "What is the purpose of cache headers?",
//         "options": [
//             "Control browser and CDN caching behavior",
//             "Define cache storage location path",
//             "Set maximum cache entry size",
//             "Configure cache encryption settings"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 907,
//         "question": "Can you cache third-party API responses?",
//         "options": [
//             "Yes, using fetch with cache options",
//             "No, only internal APIs cache",
//             "Yes, but requires proxy setup",
//             "No, third-party blocks caching"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 908,
//         "question": "What does fetch next.revalidate: false do?",
//         "options": [
//             "Disables caching for this request",
//             "Caches indefinitely until rebuild",
//             "Validates data before caching it",
//             "Revalidates on every request"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 909,
//         "question": "How does caching affect dynamic routes?",
//         "options": [
//             "Each param value cached separately",
//             "All params share single cache",
//             "Dynamic routes never use cache",
//             "Cache only works with static params"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 910,
//         "question": "What is the benefit of Request Memoization?",
//         "options": [
//             "Eliminates duplicate requests per render",
//             "Caches requests across page reloads",
//             "Reduces server memory usage significantly",
//             "Speeds up network request timing"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 911,
//         "question": "Can you cache errors in Next.js?",
//         "options": [
//             "No, only successful responses cache",
//             "Yes, error responses can cache",
//             "No, errors bypass cache completely",
//             "Yes, but only 404 errors"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 912,
//         "question": "What does cache: 'no-cache' do in fetch?",
//         "options": [
//             "Skips cache completely for request",
//             "Revalidates cache before using data",
//             "Caches only in memory temporarily",
//             "Disables browser cache for request"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 913,
//         "question": "How do you check if data is cached?",
//         "options": [
//             "Check response headers for cache status",
//             "Use isCached from next/cache",
//             "Check build output logs only",
//             "Use cacheCheck helper function"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 914,
//         "question": "What is the cache hierarchy in Next.js?",
//         "options": [
//             "Request Memo → Data Cache → Full Route",
//             "Full Route → Data Cache → Request Memo",
//             "Data Cache → Request Memo → Full Route",
//             "All caches work independently"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 915,
//         "question": "Can you customize cache storage location?",
//         "options": [
//             "No, Next.js controls storage internally",
//             "Yes, using cacheDirectory in config",
//             "No, cache uses fixed .next folder",
//             "Yes, with custom cache adapter"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 916,
//         "question": "What happens to cache on deployment?",
//         "options": [
//             "Cache persists across deployments automatically",
//             "Cache clears on every deployment",
//             "Cache transfers to new deployment",
//             "Cache rebuilds during deployment"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 917,
//         "question": "How do you cache database queries?",
//         "options": [
//             "Using unstable_cache around query function",
//             "Using cacheQuery from database library",
//             "Using queryCache in database config",
//             "Database queries auto-cache by default"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 918,
//         "question": "What is stale-while-revalidate strategy?",
//         "options": [
//             "Serve stale data while fetching fresh",
//             "Block request until validation completes",
//             "Serve fresh data or nothing",
//             "Validate then serve cached data"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 919,
//         "question": "What is knitting in React Server Components?",
//         "options": [
//             "Optimizing component bundle size automatically",
//             "Combining Server and Client Components together",
//             "Connecting components with shared state",
//             "Merging multiple layouts into one"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 920,
//         "question": "What is the traditional React rendering paradigm?",
//         "options": [
//             "Server renders HTML then client hydrates",
//             "Everything renders on client side only",
//             "Server sends static HTML without JavaScript",
//             "Client requests data then renders components"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 921,
//         "question": "How does RSC paradigm differ from traditional React?",
//         "options": [
//             "RSC eliminates client-side JavaScript completely",
//             "RSC only works with static generation",
//             "RSC allows server and client rendering",
//             "RSC requires full page reloads"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 922,
//         "question": "What is the dependency tree in RSC?",
//         "options": [
//             "Tree showing component render order visually",
//             "Hierarchy of Server and Client Components",
//             "NPM package dependencies for project",
//             "Database relationship structure diagram"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 923,
//         "question": "Can Server Components import Client Components?",
//         "options": [
//             "Yes, Server can import Client Components",
//             "No, only Client imports Server allowed",
//             "Yes, but causes hydration errors",
//             "No, they must be separate"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 924,
//         "question": "Can Client Components import Server Components?",
//         "options": [
//             "Yes, with special import syntax",
//             "No, it breaks component boundary rules",
//             "Yes, but only in development",
//             "No, causes infinite render loops"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 925,
//         "question": "What is hybrid composition in Next.js?",
//         "options": [
//             "Mixing Server and Client Components strategically",
//             "Combining multiple rendering strategies together",
//             "Using both React and Vue",
//             "Merging CSS and JavaScript files"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 926,
//         "question": "How can Client Components access Server Components?",
//         "options": [
//             "Import them directly using standard import",
//             "Via context API shared between both",
//             "Through props as children or slots",
//             "Using useServer hook from React",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 927,
//         "question": "What is the children pattern in RSC composition?",
//         "options": [
//             "Inheriting props from parent components",
//             "Nesting components in folder structure",
//             "Passing Server Components as children prop",
//             "Creating child routes in routing",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 928,
//         "question": "Why use children pattern over direct import?",
//         "options": [
//             "Allows Client wrapping Server Components safely",
//             "Improves performance by lazy loading",
//             "Reduces bundle size significantly always",
//             "Enables better TypeScript type checking"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 929,
//         "question": "What is the composition boundary in RSC?",
//         "options": [
//             "Limit on component nesting depth",
//             "Border between different route segments",
//             "Maximum props that can pass",
//             "Line between Server and Client Components",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 930,
//         "question": "Can you pass functions through composition boundary?",
//         "options": [
//             "Yes, all functions serialize automatically",
//             "No, unless wrapped in useCallback",
//             "Yes, but only arrow functions",
//             "No, functions cannot cross boundary",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 931,
//         "question": "What data types can cross Server-Client boundary?",
//         "options": [
//             "Only primitive types like strings",
//             "Serializable data excluding functions classes",
//             "All JavaScript types including symbols",
//             "Only JSON-compatible data structures"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 932,
//         "question": "What is the slots pattern in RSC?",
//         "options": [
//             "Passing multiple Server Components as props",
//             "Time slots for rendering components",
//             "Memory slots for component caching",
//             "Route slots for parallel rendering"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 933,
//         "question": "How does the dependency tree affect bundle size?",
//         "options": [
//             "More Client Components increase bundle size",
//             "Server Components always increase bundle",
//             "Tree structure doesn't affect size",
//             "Deeper trees always reduce bundle"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 934,
//         "question": "What happens when Client Component wraps Server Component?",
//         "options": [
//             "Server Component becomes Client Component automatically",
//             "Server Component executes on client side",
//             "Server Component maintains server execution boundary",
//             "Causes hydration mismatch errors always"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 935,
//         "question": "Can you use context across Server-Client boundary?",
//         "options": [
//             "No, context doesn't cross boundaries",
//             "Yes, but only for static values",
//             "No, unless using special provider",
//             "Yes, context works everywhere seamlessly"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 936,
//         "question": "What is the interleaving pattern in RSC?",
//         "options": [
//             "Alternating Server and Client Components",
//             "Interleaving data fetching with rendering",
//             "Mixing static and dynamic rendering",
//             "Combining multiple data sources together"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 937,
//         "question": "Why keep components as Server Components when possible?",
//         "options": [
//             "Server Components render faster always",
//             "Reduces client bundle and improves performance",
//             "Server Components have more features",
//             "Client Components cause security issues"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 938,
//         "question": "What determines if component should be Server or Client?",
//         "options": [
//             "Need for interactivity and browser APIs",
//             "Component file size and complexity",
//             "Number of props component receives",
//             "Position in component tree structure"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 939,
//         "question": "Can Server Components access browser APIs?",
//         "options": [
//             "Yes, all browser APIs available",
//             "No, they run on server only",
//             "Yes, but only window object",
//             "No, unless using polyfills"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 940,
//         "question": "Can Client Components fetch data on server?",
//         "options": [
//             "No, Client Components always fetch client-side",
//             "Yes, during initial server render only",
//             "No, fetching requires Server Components",
//             "Yes, using special fetch configuration"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 941,
//         "question": "What is the recommended composition strategy?",
//         "options": [
//             "Use Client Components for everything",
//             "Use Server Components by default",
//             "Mix both equally throughout app",
//             "Separate Server and Client completely"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 942,
//         "question": "How do you share state between Server and Client?",
//         "options": [
//             "Pass state through props boundary",
//             "Use shared context provider",
//             "Store in global variable",
//             "Cannot share state between them"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 943,
//         "question": "What is component tree colocation in RSC?",
//         "options": [
//             "Placing related Server and Client together",
//             "Storing components in same folder",
//             "Rendering components at same time",
//             "Sharing component logic between types"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 944,
//         "question": "Can you conditionally render Server Components?",
//         "options": [
//             "Yes, using standard conditional logic",
//             "No, Server Components always render",
//             "Yes, but only in Client Components",
//             "No, causes streaming errors"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 945,
//         "question": "What is the lifting content pattern in RSC?",
//         "options": [
//             "Moving Client Components higher in tree",
//             "Lifting Server Components into Client slots",
//             "Hoisting state to parent components",
//             "Promoting components to root level"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 946,
//         "question": "How does RSC improve initial page load?",
//         "options": [
//             "Reduces JavaScript sent to browser",
//             "Compresses HTML more efficiently",
//             "Preloads all components upfront",
//             "Eliminates CSS from bundle"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 947,
//         "question": "What is the component payload in RSC?",
//         "options": [
//             "Serialized component tree from server",
//             "JavaScript bundle for components",
//             "Component props and state data",
//             "CSS styles for components"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 948,
//         "question": "Can you use hooks in Server Components?",
//         "options": [
//             "Yes, all React hooks work",
//             "No, hooks are Client-only features",
//             "Yes, but only useEffect hook",
//             "No, unless using async hooks"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 949,
//         "question": "What is the main benefit of hybrid composition?",
//         "options": [
//             "Simplifies component architecture design",
//             "Optimizes both performance and interactivity",
//             "Eliminates need for state management",
//             "Reduces total number of components"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 950,
//         "question": "How do you pass event handlers to Server Components?",
//         "options": [
//             "Wrap handler in serializable format",
//             "Use special serverAction helper function",
//             "Cannot pass handlers to Server Components",
//             "Pass through context provider instead"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 951,
//         "question": "What is the component split strategy in RSC?",
//         "options": [
//             "Separating interactive from static parts",
//             "Splitting large files into smaller",
//             "Dividing components by route segments",
//             "Breaking components into atoms"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 952,
//         "question": "Can Server Components re-render without page reload?",
//         "options": [
//             "Yes, through server actions or navigation",
//             "No, requires full page refresh",
//             "Yes, but only with client state",
//             "No, Server Components are static"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 953,
//         "question": "What is the recommended pattern for forms in RSC?",
//         "options": [
//             "Use Client Component for entire form",
//             "Use Server Component with Server Actions",
//             "Use Client wrapper with Server children",
//             "Use only Server Components throughout"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 954,
//         "question": "How does composition affect Time to Interactive?",
//         "options": [
//             "More Server Components reduce TTI time",
//             "More Client Components reduce TTI time",
//             "Composition has no effect on TTI",
//             "Only static components affect TTI"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 955,
//         "question": "What is the main challenge of RSC composition?",
//         "options": [
//             "Deciding component placement in tree",
//             "Managing component file organization",
//             "Handling CSS-in-JS styling",
//             "Debugging component render issues"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 956,
//         "question": "Can you use third-party Client libraries in Server Components?",
//         "options": [
//             "Yes, with special import syntax",
//             "No, they violate server boundary",
//             "Yes, but only pure libraries",
//             "No, unless they support RSC"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 957,
//         "question": "What is the wrapper pattern in RSC?",
//         "options": [
//             "Client Component wrapping Server children",
//             "Server Component wrapping Client children",
//             "HOC pattern for component composition",
//             "Layout wrapping all page components"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 958,
//         "question": "How do you optimize the dependency tree?",
//         "options": [
//             "Minimize Client Components and push down",
//             "Use only Server Components throughout",
//             "Flatten tree structure completely",
//             "Increase component nesting depth"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 959,
//         "question": "Where should filter state be stored in Next.js?",
//         "options": [
//             "In localStorage for persistence across sessions",
//             "In URL searchParams for share-ability",
//             "In global Redux store for access",
//             "In component state using useState"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 960,
//         "question": "Why store filter values in URL searchParams?",
//         "options": [
//             "Improves component render performance significantly",
//             "Reduces server load and bandwidth",
//             "Allows sharing and bookmarking filtered state",
//             "Enables offline functionality without network"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 961,
//         "question": "How do you read searchParams in Server Components?",
//         "options": [
//             "Through searchParams prop passed to page",
//             "Using useSearchParams hook from next/navigation",
//             "Through query prop in component",
//             "Using getSearchParams helper from next/server"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 962,
//         "question": "How do you update searchParams in Client Components?",
//         "options": [
//             "Using setSearchParams from next/navigation",
//             "Using updateParams from next/router",
//             "Using useRouter and router.replace method",
//             "Using window.location.search directly"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 963,
//         "question": "Should filter component be Server or Client Component?",
//         "options": [
//             "Server Component for better SEO",
//             "Client Component for interactivity handling",
//             "Server Component for performance always",
//             "Either works depending on requirements"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 964,
//         "question": "How do you preserve other searchParams when updating?",
//         "options": [
//             "Merge new params with existing URLSearchParams",
//             "Clear all params then set new",
//             "Use preserveParams option in router",
//             "Next.js preserves them automatically"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 965,
//         "question": "What triggers re-render when searchParams change?",
//         "options": [
//             "Manual refresh required by user",
//             "Navigation updates page automatically",
//             "setState call in component",
//             "Browser reload after URL change"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 966,
//         "question": "How do you create filter buttons with searchParams?",
//         "options": [
//             "Use form with GET method",
//             "Use Link component with updated href",
//             "Use <a> tag with new URL",
//             "Use onClick updating window.location"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 967,
//         "question": "How do you clear all filters from URL?",
//         "options": [
//             "Set searchParams to empty object",
//             "Navigate to pathname without search",
//             "Use clearFilters from next/navigation",
//             "Call resetParams on router object"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 968,
//         "question": "Can you use multiple filter criteria simultaneously?",
//         "options": [
//             "Yes, using multiple searchParams keys",
//             "No, only one filter allowed",
//             "Yes, but maximum three filters",
//             "No, causes URL parsing errors"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 969,
//         "question": "How do you handle filter with pagination?",
//         "options": [
//             "Use separate state for each",
//             "Use different routes per page",
//             "Store pagination in cookies only",
//             "Combine both in searchParams with keys",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 970,
//         "question": "What happens to filters on page navigation?",
//         "options": [
//             "Filters reset to default values",
//             "Filters lost unless manually saved",
//             "Filters persist in URL automatically",
//             "Filters save to localStorage",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 971,
//         "question": "How do you set default filter values?",
//         "options": [
//             "Use defaultParams in router config",
//             "Check if searchParam exists or use default",
//             "Set in component initial state",
//             "Define in next.config.js file"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 972,
//         "question": "Should you debounce filter input updates?",
//         "options": [
//             "No, update URL on every keystroke",
//             "Yes, to reduce navigation and renders",
//             "No, Next.js debounce&#8217;s automatically",
//             "Yes, but only in production"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 973,
//         "question": "How do you style active filter button?",
//         "options": [
//             "Next.js adds active class automatically",
//             "Use activeClassName prop on Link",
//             "Compare searchParam with button value",
//             "Use CSS :active pseudo-class"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 974,
//         "question": "Can filters work with Server Components?",
//         "options": [
//             "No, filters require client interactivity",
//             "Yes, searchParams passed to Server Components",
//             "Yes, but only with forms",
//             "No, Server Components are static"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 975,
//         "question": "How do you create a search filter component?",
//         "options": [
//             "Use input with onChange updating searchParams",
//             "Use form with POST method",
//             "Use searchBox from next/ui",
//             "Use filter prop on data array"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 976,
//         "question": "What is best practice for filter URL structure?",
//         "options": [
//             "Use encoded keys like ?filter=encoded",
//             "Use short keys like ?c=b",
//             "Use numbered keys like ?f1=value",
//             "Use descriptive keys like ?category=books",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 977,
//         "question": "How do you handle multiple values for one filter?",
//         "options": [
//             "Use JSON encoded string",
//             "Use array notation in URL",
//             "Use separate keys for each value",
//             "Use comma-separated string in searchParam",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 978,
//         "question": "Should you validate filter values from URL?",
//         "options": [
//             "No, validation causes performance issues",
//             "Yes, but only in production",
//             "No, Next.js validates automatically",
//             "Yes, users can manipulate URL params",
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 979,
//         "question": "How do you create a dropdown filter?",
//         "options": [
//             "Use select with onChange updating URL",
//             "Use dropdown from next/components",
//             "Use menu with static options",
//             "Use radio buttons with forms"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 980,
//         "question": "Can you use filter with static generation?",
//         "options": [
//             "Yes, using generateStaticParams but limited to three filters",
//             "No, filtering requires dynamic rendering",
//             "Yes, using generateStaticParams for combinations",
//             "No, static pages cannot have params",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 981,
//         "question": "How do you reset single filter while keeping others?",
//         "options": [
//             "Set filter key value to empty string",
//             "Delete specific key from URLSearchParams",
//             "Use resetFilter with filter name",
//             "Navigate to base URL manually"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 982,
//         "question": "What is the benefit of URL-based filters over state?",
//         "options": [
//             "Faster component rendering performance overall",
//             "Smaller JavaScript bundle size reduction",
//             "Shareable links and browser navigation support",
//             "Better TypeScript type safety"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 983,
//         "question": "How do you handle filter loading states?",
//         "options": [
//             "Use Suspense boundary around filtered content",
//             "Use isLoading from useSearchParams hook",
//             "Use loading prop on filter component",
//             "Next.js shows loading automatically"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 984,
//         "question": "Should filters be accessible via keyboard?",
//         "options": [
//             "No, increases complexity unnecessarily",
//             "No, mouse interaction sufficient",
//             "Yes, for accessibility and usability",
//             "Yes, but only in forms",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 985,
//         "question": "How do you create a range filter (min-max)?",
//         "options": [
//             "Use single param with dash separator",
//             "Use two searchParams for min and max",
//             "Use range component from next/ui",
//             "Use slider with single value"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 986,
//         "question": "Can you animate filter transitions in Next.js?",
//         "options": [
//             "No, routing prevents animations",
//             "Yes, but only with framer-motion",
//             "No, breaks navigation behavior",
//             "Yes, using CSS transitions on elements",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 987,
//         "question": "How do you show active filter count?",
//         "options": [
//             "Use filterCount from useRouter hook",
//             "Count non-empty searchParams keys",
//             "Next.js tracks count automatically",
//             "Use global state counter variable"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 988,
//         "question": "What is best pattern for complex filter logic?",
//         "options": [
//             "Extract filter logic into helper function",
//             "Inline all logic in component",
//             "Use external filter library always",
//             "Create separate filter page route"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 989,
//         "question": "How do you handle filter conflicts?",
//         "options": [
//             "Use filterResolver from next/navigation",
//             "Validate and resolve in filter logic",
//             "Allow all conflicts to pass through",
//             "Disable conflicting filter options"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 990,
//         "question": "Should you show filter results count?",
//         "options": [
//             "No, increases server load unnecessarily",
//             "Yes, improves user experience feedback",
//             "No, users can count themselves",
//             "Yes, but only for small datasets",
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 991,
//         "question": "How do you create mobile-friendly filters?",
//         "options": [
//             "Use responsive design with drawer or modal",
//             "Create separate mobile filter page",
//             "Hide filters on mobile completely",
//             "Use horizontal scroll for options"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 992,
//         "question": "Can filters affect SEO in Next.js?",
//         "options": [
//             "No, searchParams ignored by crawlers",
//             "Yes, but only with robots meta",
//             "No, filters are client-only",
//             "Yes, filtered pages can be indexed",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 993,
//         "question": "How do you implement Apply Filters button pattern?",
//         "options": [
//             "Update URL on each selection immediately",
//             "Use form submission to apply filters",
//             "Store temp state then batch update URL",
//             "Next.js handles batch updates automatically"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 994,
//         "question": "What is the performance impact of many filters?",
//         "options": [
//             "More filters increase URL complexity minimally",
//             "More filters slow rendering significantly",
//             "Filter count doesn't affect performance",
//             "More filters reduce server response time"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 995,
//         "question": "How do you handle filter with sorting?",
//         "options": [
//             "Combine both in single param value",
//             "Use separate searchParam keys for each",
//             "Use different routes for sorting",
//             "Store sorting in separate state"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 996,
//         "question": "Should you preserve filters across different pages?",
//         "options": [
//             "Always preserve for consistency",
//             "Never preserve to avoid confusion",
//             "Only preserve on same route",
//             "Depends on user experience requirements",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 997,
//         "question": "How do you test filter functionality?",
//         "options": [
//             "Next.js tests filters automatically",
//             "Test URL updates and rendered results",
//             "Use filterTest from testing library",
//             "Only test UI interaction visually",
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 998,
//         "question": "What accessibility features should filters have?",
//         "options": [
//             "Accessibility handled by Next.js automatically",
//             "ARIA labels, keyboard nav, screen reader support",
//             "Only color contrast and font size",
//             "Just keyboard navigation is sufficient",
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 999,
//         "question": "Where should UI state like modal visibility be stored?",
//         "options": [
//             "On server for consistency across requests",
//             "In client component state with useState",
//             "In cookies for server access",
//             "In URL searchParams for sharing"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1000,
//         "question": "Where should user authentication state be managed in web apps?",
//         "options": [
//             "In client localStorage for convenience",
//             "In URL searchParams for tracking",
//             "On server with cookies or sessions",
//             "In client Context for access"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1001,
//         "question": "Where should filter state be stored in Next.js?",
//         "options": [
//             "On server in database always",
//             "In client component state only",
//             "In URL searchParams readable by both",
//             "In cookies for persistence"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1002,
//         "question": "Where should shopping cart state be stored?",
//         "options": [
//             "On server database for persistence",
//             "In client localStorage temporarily",
//             "In URL for sharing capability",
//             "Both client storage and server sync"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1003,
//         "question": "Where should form validation state be stored?",
//         "options": [
//             "On server only for security",
//             "In client for UX and server for security",
//             "In URL searchParams for tracking",
//             "In cookies for persistence"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1004,
//         "question": "Where should temporary loading states be stored?",
//         "options": [
//             "In client component state only",
//             "On server for consistency",
//             "In URL for tracking progress",
//             "In cookies for persistence"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1005,
//         "question": "Where should theme preferences be stored in Next.js?",
//         "options": [
//             "In client localStorage for speed",
//             "On server database for sync",
//             "In cookies accessible by both sides",
//             "In URL searchParams for sharing"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1006,
//         "question": "Where should cached API responses be stored?",
//         "options": [
//             "On server with data cache",
//             "In client with caching library",
//             "Both server cache and client cache",
//             "In URL for debugging"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1007,
//         "question": "Where should sensitive data like tokens be stored?",
//         "options": [
//             "In client localStorage for access",
//             "In URL searchParams for convenience",
//             "On server in httpOnly cookies",
//             "In client sessionStorage temporary"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1008,
//         "question": "Where should pagination state be stored in Next.js?",
//         "options": [
//             "On server in database always",
//             "In client component state only",
//             "In URL searchParams for navigation",
//             "In cookies for remembering"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1009,
//         "question": "Where should real-time notifications be stored?",
//         "options": [
//             "On server pushed to client",
//             "In client polled from server",
//             "In URL for tracking updates",
//             "In cookies for persistence"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1010,
//         "question": "Where should form input state during typing be stored?",
//         "options": [
//             "Send to server on every keystroke",
//             "In client state until submission",
//             "In URL for real-time sharing",
//             "In cookies for auto-save"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1011,
//         "question": "Where should user session data be stored in web apps?",
//         "options": [
//             "In client localStorage for speed",
//             "In URL searchParams for access",
//             "On server with session management",
//             "In client Context for sharing"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1012,
//         "question": "What is the main advantage of server-side state?",
//         "options": [
//             "Faster client-side rendering always",
//             "Better security and data consistency",
//             "Easier state management code",
//             "Works offline without network"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1013,
//         "question": "What is the main advantage of client-side state?",
//         "options": [
//             "Better security for sensitive data",
//             "Automatic sync across devices",
//             "Instant updates without server round-trip",
//             "Data persists after browser close"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1014,
//         "question": "Where should state that needs SEO indexing be stored?",
//         "options": [
//             "In client localStorage for speed",
//             "On server or URL searchParams",
//             "In client Context for access",
//             "In cookies for persistence"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1015,
//         "question": "Where should state shared across pages be stored?",
//         "options": [
//             "In URL searchParams for navigation",
//             "In client Context for access",
//             "On server database for persistence",
//             "Depends on state type and requirements"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1016,
//         "question": "Can Client Components access server-side state directly in Next.js?",
//         "options": [
//             "Yes, through automatic state sync",
//             "No, must pass via props or API",
//             "Yes, using special server hooks",
//             "No, unless using Context"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1017,
//         "question": "Can Server Components access client-side state directly in Next.js?",
//         "options": [
//             "Yes, through cookies or headers",
//             "No, client state unavailable on server",
//             "Yes, using special client functions",
//             "No, unless passed via props"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1018,
//         "question": "Where should optimistic UI updates be stored?",
//         "options": [
//             "On server immediately for consistency",
//             "In client state before server confirmation",
//             "In URL for tracking changes",
//             "In cookies for rollback capability"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1019,
//         "question": "Where should draft content be stored?",
//         "options": [
//             "On server auto-saved periodically",
//             "In client localStorage temporarily",
//             "Both client and server for safety",
//             "In URL for sharing drafts"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1020,
//         "question": "Where should analytics tracking state be stored?",
//         "options": [
//             "In client and sent to server",
//             "On server only for privacy",
//             "In URL for debugging issues",
//             "In cookies for persistence"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1021,
//         "question": "Where should feature flags be stored in Next.js?",
//         "options": [
//             "In client for instant toggles",
//             "On server for controlled rollout",
//             "In URL for testing features",
//             "In cookies for user targeting"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1022,
//         "question": "What state requires server-side storage for security?",
//         "options": [
//             "UI theme and appearance preferences",
//             "Temporary loading and error states",
//             "Authentication tokens and user roles",
//             "Modal open/close toggle state"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1023,
//         "question": "What state is best kept client-side for performance?",
//         "options": [
//             "User authentication and authorization",
//             "User preferences synced across devices",
//             "Shopping cart with checkout data",
//             "Temporary UI interactions and animations",
//         ],
//         "correctOption":3,
//         "points": 20
//     },
//     {
//         "id": 1024,
//         "question": "How do you sync state between client and server in Next.js?",
//         "options": [
//             "Using Server Actions, revalidation, or polling",
//             "Using automatic state sync library",
//             "Using built-in framework sync methods",
//             "Framework syncs automatically always"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1025,
//         "question": "Where should A/B test variant state be stored?",
//         "options": [
//             "In client for instant switching",
//             "On server for consistent experience",
//             "In URL for testing variants",
//             "In localStorage for persistence"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1026,
//         "question": "Where should scroll position state be stored?",
//         "options": [
//             "On server for consistency",
//             "In client state or sessionStorage",
//             "In URL searchParams always",
//             "In cookies for persistence"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1027,
//         "question": "Where should multi-step form progress be stored?",
//         "options": [
//             "In client state until submission form",
//             "On server after each step",
//             "In URL for navigation support",
//             "Depends on form complexity and requirements"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1028,
//         "question": "What is the trade-off of client-side state?",
//         "options": [
//             "Better performance but potential data loss",
//             "Worse security but easier access",
//             "Faster updates but no persistence",
//             "All of the above considerations"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1029,
//         "question": "What is the trade-off of server-side state?",
//         "options": [
//             "Better security but slower updates",
//             "More persistence but complex code",
//             "Easier sync but higher costs",
//             "All of the above considerations"
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1030,
//         "question": "Where should WebSocket connection state be stored?",
//         "options": [
//             "On server for connection management",
//             "In client for real-time updates",
//             "Both client and server coordination",
//             "In URL for connection tracking"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//         {
//             "id": 1034,
//             "question": "What does an API endpoint represent in web development?",
//             "options": [
//                 "A URL for accessing resources",
//                 "A database connection string only",
//                 "A React component for forms",
//                 "A CSS styling configuration file"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1035,
//             "question": "What is the main difference between PUT and PATCH methods?",
//             "options": [
//                 "PUT is faster than PATCH",
//                 "PUT replaces all, PATCH updates partially",
//                 "PUT creates, PATCH deletes resources",
//                 "PUT is public, PATCH is private"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//     {
//             "id": 1037,
//             "question": "What is a RESTFul API in web development?",
//             "options": [
//                 "A database management system only",
//                 "Architecture using HTTP methods standards",
//                 "A frontend framework for React",
//                 "A styling library for CSS"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1039,
//             "question": "Why can't route.js and page.js exist in the same folder?",
//             "options": [
//                 "They serve different URL paths",
//                 "They conflict on same route",
//                 "Next.js doesn't support route files",
//                 "Page files have higher priority"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1040,
//             "question": "What does HTTP status code 201 indicate?",
//             "options": [
//                 "Resource successfully created on server",
//                 "Request was successfully deleted completely",
//                 "Server error occurred during request",
//                 "Resource not found on server"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1041,
//             "question": "What is the purpose of HTTP status codes?",
//             "options": [
//                 "To style API responses properly",
//                 "To indicate request outcome status",
//                 "To encrypt data during transmission",
//                 "To compress response data size"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1042,
//             "question": "What does idempotent mean for HTTP methods like PUT?",
//             "options": [
//                 "Multiple identical requests same result",
//                 "Faster response time for requests",
//                 "Requires authentication for every request",
//                 "Only works with JSON data"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1043,
//             "question": "What is the request object in Route Handlers?",
//             "options": [
//                 "Contains incoming HTTP request data",
//                 "A configuration for database connection",
//                 "A React component state object",
//                 "A styling object for responses"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1044,
//             "question": "What is the difference between App Router and Pages Router API routes?",
//             "options": [
//                 "App uses route.js, Pages uses api folder",
//                 "No difference, they are identical",
//                 "Pages doesn't support API routes",
//                 "App Router is slower overall"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1045,
//             "question": "What does HTTP verb mean in web development?",
//             "options": [
//                 "A database query language syntax",
//                 "Methods defining request type action",
//                 "A JavaScript function for APIs",
//                 "A CSS property for styling"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1046,
//             "question": "What is the purpose of NextResponse.json() in Route Handlers?",
//             "options": [
//                 "To parse incoming JSON data",
//                 "To return JSON response easily",
//                 "To validate JSON schema structure",
//                 "To compress JSON file size"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1047,
//             "question": "What does CRUD stand for in API development?",
//             "options": [
//                 "Create, Read, Update, Delete operations",
//                 "Connect, Request, Upload, Download operations",
//                 "Cache, Render, Upload, Display operations",
//                 "Compile, Run, Update, Debug operations"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1048,
//             "question": "What is dynamic routing in Route Handlers?",
//             "options": [
//                 "Routes created automatically at build",
//                 "Routes with variable path segments",
//                 "Routes that change every request",
//                 "Routes only for authenticated users"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//         "id": 1049,
//         "question": "How do you export a POST handler in a Route Handler file?",
//         "options": [
//             "export default function POST(request)",
//             "export const POST = (request)",
//             "export async function POST(request)",
//             "export handler POST = (request)"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1050,
//         "question": "What URL path would access a Route Handler at app/api/users/route.js?",
//         "options": [
//             "http://localhost:3000/users endpoint path",
//             "http://localhost:3000/api/users endpoint path",
//             "http://localhost:3000/route/users endpoint path",
//             "http://localhost:3000/api/route/users endpoint path"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1051,
//         "question": "How do you return JSON data from a Route Handler?",
//         "options": [
//             "return Response.json(data) or NextResponse.json(data)",
//             "return JSON.stringify(data) as string",
//             "return { json: data } object",
//             "return new JsonResponse(data) constructor"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//    {
//         "id": 1052,
//         "question": "Which HTTP method is used to delete a resource in REST APIs?",
//         "options": [
//             "REMOVE method for resource deletion",
//             "DELETE method for resource deletion",
//             "DESTROY method for resource deletion",
//             "DROP method for resource deletion"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1053,
//         "question": "How do you access request body data in a POST Route Handler?",
//         "options": [
//             "const data = request.body.json()",
//             "const data = await request.json()",
//             "const data = request.getBody()",
//             "const data = await request.body()"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1054,
//         "question": "Where should you create a Route Handler for API endpoints in Next.js?",
//         "options": [
//             "Inside pages directory with api prefix",
//             "Inside app directory following folder structure",
//             "Inside public directory for api routes",
//             "Inside src/api directory with route files"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1055,
//         "question": "Can you export multiple HTTP methods from a single route.js file?",
//         "options": [
//             "No, only one method allowed",
//             "Yes, export GET, POST, etc.",
//             "Only GET and POST together",
//             "Only with middleware configuration enabled"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1056,
//         "question": "How do you access URL parameters in a Route Handler?",
//         "options": [
//             "Through request.query.get() method available",
//             "Through request.params object directly accessible",
//             "Through context.params in second argument",
//             "Through request.url.params object property"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1059,
//         "question": "What is the main difference between authentication and authorization?",
//         "options": [
//             "Authorization comes before authentication always",
//             "Both are exactly the same",
//             "Authentication verifies identity, authorization checks permissions",
//             "Authentication is for APIs only"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//
//     {
//         "id": 1062,
//         "question": "Where should the middleware.js file be placed in Next.js?",
//         "options": [
//             "Inside app directory with routes",
//             "Inside pages directory with API",
//             "Inside public folder for access",
//             "At project root or src",
//         ],
//         "correctOption": 3,
//         "points": 10
//     },
//     {
//         "id": 1063,
//         "question": "When does Next.js middleware execute during a request?",
//         "options": [
//             "After response is sent back",
//             "Only during build time process",
//             "Before route handler runs completely",
//             "After component renders on page"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1064,
//         "question": "What can middleware be used for in Next.js?",
//         "options": [
//             "Only for styling components properly",
//             "Authentication, redirects, and request modification",
//             "Only for database queries execution",
//             "Only for static file serving"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1065,
//         "question": "What does a typical authentication flow verify?",
//         "options": [
//             "User permissions for specific resources",
//             "Username and password are correct",
//             "User's internet connection speed level",
//             "User's browser version compatibility info"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1066,
//         "question": "What is a common example of authorization?",
//         "options": [
//             "User logging into the system",
//             "Validating email format structure correctly",
//             "Checking if user is admin",
//             "Hashing user password for security"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1067,
//         "question": "What does the middleware matcher config do?",
//         "options": [
//             "Defines which routes middleware applies",
//             "Matches user credentials with database",
//             "Connects to external API services",
//             "Validates form input data types"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1068,
//         "question": "What is a JWT in authentication context?",
//         "options": [
//             "JavaScript Testing Tool for apps",
//             "JSON Web Token for auth",
//             "Java Web Technology for servers",
//             "Joint Web Transport protocol standard"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1069,
//         "question": "What happens if middleware returns NextResponse.redirect()?",
//         "options": [
//             "Request continues to original destination",
//             "User redirected to different URL",
//             "Middleware throws an error immediately",
//             "Response is cached permanently forever"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1070,
//         "question": "Can middleware run on all routes by default?",
//         "options": [
//             "No, must specify routes explicitly",
//             "Yes, except static files explicitly",
//             "Only on API routes specifically",
//             "Only on dynamic routes only"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1071,
//         "question": "What is session-based authentication?",
//         "options": [
//             "Storing auth state on server",
//             "Using only cookies for auth",
//             "Authentication without any password required",
//             "Only for mobile app authentication"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1072,
//         "question": "What is token-based authentication?",
//         "options": [
//             "Using session cookies for storage",
//             "Client stores token after login",
//             "Server stores all user data",
//             "No authentication is required ever"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1073,
//         "question": "What is role-based access control (RBAC)?",
//         "options": [
//             "Permissions based on user roles",
//             "Authentication using email only verification",
//             "Database backup strategy for security",
//             "Encryption method for sensitive data"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1074,
//         "question": "What does NextResponse.next() do in middleware?",
//         "options": [
//             "Stops request processing completely now",
//             "Continues to next middleware layer",
//             "Redirects to home page immediately",
//             "Throws authentication error to user"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1075,
//         "question": "What is protected route in Next.js?",
//         "options": [
//             "Route requiring authentication to access",
//             "Route encrypted with SSL certificate",
//             "Route only for admin users",
//             "Route with faster loading speed"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1076,
//         "question": "Where are cookies typically checked for authentication?",
//         "options": [
//             "In React component state only",
//             "In middleware or server components",
//             "In CSS files for styling",
//             "In package.json configuration file"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1077,
//         "question": "How does middleware access request headers in Next.js?",
//         "options": [
//             "request.headers.get('header-name') method call",
//             "request.getHeader('header-name') function call",
//             "request.header['header-name'] array access",
//             "headers('header-name') global function call"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1078,
//         "question": "What is the security risk of storing JWT in localStorage?",
//         "options": [
//             "Vulnerable to XSS attacks completely",
//             "Takes too much storage space",
//             "Cannot be accessed by JavaScript",
//             "Automatically expires after one hour"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1079,
//         "question": "How can you implement conditional middleware execution based on path?",
//         "options": [
//             "Use multiple middleware.js files structure",
//             "Use matcher config or conditional logic",
//             "Middleware always runs on paths",
//             "Create separate auth.js for conditions"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1080,
//         "question": "What is the purpose of httpOnly flag in authentication cookies?",
//         "options": [
//             "Makes cookie accessible via JavaScript",
//             "Increases cookie expiration time significantly",
//             "Prevents JavaScript access to cookie",
//             "Compresses cookie data for performance"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1081,
//         "question": "How do you pass data from middleware to route handlers?",
//         "options": [
//             "Through request headers modification carefully",
//             "Using global variables for sharing",
//             "Cannot pass data between them",
//             "Through URL query parameters only"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1082,
//         "question": "What happens when middleware modifies request URL in Next.js?",
//         "options": [
//             "Browser URL changes immediately visible",
//             "Causes infinite redirect loop error",
//             "Middleware crashes with error message",
//             "Internal rewrite without browser change",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1083,
//         "question": "How does Next.js middleware handle Server Components authentication?",
//         "options": [
//             "Runs before components render entirely",
//             "Runs after components render completely",
//             "Cannot interact with components ever",
//             "Only works with client components"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1084,
//         "question": "What is the difference between rewrite and redirect in middleware?",
//         "options": [
//             "Rewrite changes URL, redirect internal",
//             "No difference between them functionally",
//             "Redirect changes URL, rewrite internal",
//             "Both change browser URL visibly",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1085,
//         "question": "How can you implement rate limiting in Next.js middleware?",
//         "options": [
//             "Track requests using headers storage",
//             "Next.js handles it automatically always",
//             "Impossible in middleware layer currently",
//             "Only possible with external services"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1086,
//         "question": "What is the recommended way to verify JWT tokens in middleware?",
//         "options": [
//             "Store secret in environment variables",
//             "Hardcode secret in middleware file",
//             "Use client-side validation only approach",
//             "No verification needed for JWTs"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1087,
//         "question": "How does middleware interact with Edge Runtime in Next.js?",
//         "options": [
//             "Middleware only runs in Node",
//             "Must specify Edge explicitly always",
//             "Middleware runs in Edge automatically",
//             "Edge Runtime doesn't support middleware"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1088,
//         "question": "What is the security benefit of using SameSite cookie attribute?",
//         "options": [
//             "Encrypts cookie data automatically always",
//             "Increases cookie storage size limit",
//             "Makes cookies accessible cross-origin freely",
//             "Prevents CSRF attacks effectively now",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1089,
//         "question": "How can you implement multi-factor authentication flow in middleware?",
//         "options": [
//             "Check for MFA token presence",
//             "Middleware cannot handle MFA ever",
//             "Only possible in client components",
//             "Requires separate server for MFA"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1090,
//         "question": "What is the impact of middleware on static page generation?",
//         "options": [
//             "Static pages ignore middleware completely",
//             "Middleware runs on every request",
//             "Middleware only runs at build",
//             "Causes static pages to fail"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1092,
//         "question": "What directive marks a function as Server Action?",
//         "options": [
//             "'use action' at function top",
//             "'server only' at function top",
//             "'use server' at function top",
//             "'async server' at function top"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1095,
//         "question": "Where can Server Actions be invoked from?",
//         "options": [
//             "Only from server components always",
//             "Only from middleware.js configuration file",
//             "Only from API route handlers",
//             "Server/Client Components and forms too",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//
//     {
//         "id": 1096,
//         "question": "Can Server Actions be called from Client Components?",
//         "options": [
//             "No, only from servers",
//             "Yes, by importing them properly",
//             "Only with special middleware setup",
//             "Only during build time phase"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1097,
//         "question": "What is the main difference between Server Actions and API endpoints?",
//         "options": [
//             "Server Actions simpler, no routes",
//             "API endpoints are always faster",
//             "Server Actions only for databases",
//             "No difference between them functionally"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1098,
//         "question": "What happens during the Server Action execution flow?",
//         "options": [
//             "Requires manual API endpoint creation",
//             "Everything runs on client side",
//             "Only executes during build time",
//             "Client calls, server executes, returns",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 1099,
//         "question": "Can you use Server Actions in form submissions?",
//         "options": [
//             "No, only API routes",
//             "Only with JavaScript enabled always",
//             "Yes, with action prop directly",
//             "Only in client components specifically"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1100,
//         "question": "What do Server Actions automatically handle?",
//         "options": [
//             "Only CSS styling for forms",
//             "POST requests and serialization",
//             "Only database connection pooling tasks",
//             "Only frontend state management logic"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1101,
//         "question": "How does Next.js create endpoints for Server Actions?",
//         "options": [
//             "You must manually create them",
//             "Automatically generates POST endpoints internally",
//             "Only works with GET requests",
//             "Requires external server configuration setup"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1102,
//         "question": "What is the relationship between Server Actions and caching?",
//         "options": [
//             "Server Actions revalidate cache automatically",
//             "Server Actions cannot affect cache",
//             "Cache only works with APIs",
//             "Server Actions disable all caching"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1103,
//         "question": "Can Server Actions be used for data mutations?",
//         "options": [
//             "No, only for reading",
//             "Yes, for create, update, delete",
//             "Only for deletion operations specifically",
//             "Only with external database services"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1104,
//         "question": "What does 'use server' inside a function do?",
//         "options": [
//             "Marks single function as action",
//             "Marks entire file as server",
//             "Creates API endpoint automatically always",
//             "Enables server-side rendering only mode"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1106,
//         "question": "Do Server Actions work without JavaScript enabled?",
//         "options": [
//             "No, JavaScript is required always",
//             "Yes, with progressive enhancement support",
//             "Only on modern browsers specifically",
//             "Only with external libraries installed"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1107,
//         "question": "How do you pass data to Server Actions?",
//         "options": [
//             "Through function parameters or FormData",
//             "Through global variables storage",
//             "Through URL query strings only",
//             "Through localStorage in browser only"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1108,
//         "question": "What is the security benefit of Server Actions?",
//         "options": [
//             "Faster than API endpoints always",
//             "Automatically encrypts all data fully",
//             "Prevents all SQL injection attacks",
//             "Code never sent to client",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1109,
//         "question": "Can you return JSX from Server Actions?",
//         "options": [
//             "No, only JSON data",
//             "Yes, for optimistic updates support",
//             "Only in client components specifically",
//             "Only with special configuration setup"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1110,
//         "question": "How do Server Actions trigger cache revalidation?",
//         "options": [
//             "Using revalidatePath or revalidateTag functions",
//             "Automatically without any code needed",
//             "Cache never revalidates with actions",
//             "Only through manual page refresh"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1111,
//         "question": "What is the execution context of Server Actions?",
//         "options": [
//             "Runs on both simultaneously always",
//             "Runs on client browser side",
//             "Always runs on server environment",
//             "Runs only during build process"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1112,
//         "question": "Can you use Server Actions with useTransition hook?",
//         "options": [
//             "No, incompatible with React hooks",
//             "Yes, for pending states handling",
//             "Only with useEffect hook together",
//             "Only in class components specifically"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1113,
//         "question": "What happens when Server Action throws an error?",
//         "options": [
//             "Application immediately crashes completely ",
//             "Caught by error boundaries properly",
//             "Error is silently ignored always",
//             "Automatically retries three times always"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1114,
//         "question": "How do Server Actions differ from traditional form submissions?",
//         "options": [
//             "Server Actions don't require routing",
//             "Traditional forms are always faster",
//             "Server Actions only work offline",
//             "No difference between them ever"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1115,
//         "question": "Can Server Actions access cookies and headers?",
//         "options": [
//             "No, security prevents this access",
//             "Yes, using Next.js helper functions",
//             "Only cookies, not headers ever",
//             "Only in production environment mode"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1116,
//         "question": "What is closure in Server Actions context?",
//         "options": [
//             "Closure is not supported here",
//             "Actions are always isolated completely",
//             "Actions can access outer scope",
//             "Only global variables are accessible",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1117,
//         "question": "How do you handle validation in Server Actions?",
//         "options": [
//             "Validation happens automatically always on client",
//             "Validate data before processing logic",
//             "Server Actions skip validation entirely",
//             "Only client-side validation is possible"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1118,
//         "question": "Can Server Actions be used with TypeScript?",
//         "options": [
//             "No, JavaScript only support available",
//             "Yes, with full type safety",
//             "Only with custom configuration setup",
//             "Only in development mode usage"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1119,
//         "question": "What is binding in Server Actions?",
//         "options": [
//             "Connecting to database systems only",
//             "Creating event listeners for forms",
//             "Passing arguments with bind method",
//             "Styling components with CSS rules"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1120,
//         "question": "How do Server Actions integrate with react's Suspense?",
//         "options": [
//             "Requires special Suspense configuration always",
//             "Actions work with Suspense boundaries",
//             "Suspense is incompatible with actions",
//             "Only client actions support Suspense",
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//         {
//             "id": 1123,
//             "question": "Can React Hook Form work with Server Actions?",
//             "options": [
//                 "Yes, using action prop integration",
//                 "No, they are incompatible together",
//                 "Only with additional middleware setup",
//                 "Only in production mode only"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1124,
//             "question": "What does useFormStatus return?",
//             "options": [
//                 "Only boolean pending state value",
//                 "Object with pending and data",
//                 "Array with state and setter",
//                 "String with form status message"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1125,
//             "question": "How do you integrate React Hook Form with Server Actions?",
//             "options": [
//                 "Requires external library for integration",
//                 "Cannot integrate them together ever",
//                 "Pass Server Action to handleSubmit",
//                 "Only through API endpoints route",
//             ],
//             "correctOption": 2,
//             "points": 20
//         },
//         {
//             "id": 1126,
//             "question": "What is the main benefit of useFormStatus?",
//             "options": [
//                 "Automatic form validation handling logic",
//                 "Prevents form submission errors always",
//                 "Automatically saves form data locally",
//                 "Shows loading state during submission",
//             ],
//             "correctOption": 3,
//             "points": 10
//         },
//         {
//             "id": 1127,
//             "question": "Can you use useFormStatus outside a form context?",
//             "options": [
//                 "Yes, anywhere in application code",
//                 "Only in Server Components specifically",
//                 "No, must be form child",
//                 "Only with special configuration setup"
//             ],
//             "correctOption": 2,
//             "points": 20
//         },
//         {
//             "id": 1128,
//             "question": "How does React Hook Form handle validation with Server Actions?",
//             "options": [
//                 "Client validates, then Server Action",
//                 "Only server-side validation happens always",
//                 "No validation is possible ever",
//                 "Validation only during build time"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1129,
//             "question": "What is the pending property in useFormStatus?",
//             "options": [
//                 "Boolean indicating form submission state",
//                 "Number of pending form fields",
//                 "Array of validation errors found",
//                 "String with current form status"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1130,
//             "question": "Can you disable submit button using useFormStatus?",
//             "options": [
//                 "No, requires custom state logic",
//                 "Yes, using pending property value",
//                 "Only with React Hook Form",
//                 "Only in Client Components specifically"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1131,
//             "question": "How do you get form data in Server Action with React Hook Form?",
//             "options": [
//                 "Through function parameters or FormData",
//                 "Only through global state storage",
//                 "Through localStorage in browser only",
//                 "Server Actions cannot access data"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1132,
//             "question": "What is the data property in useFormStatus?",
//             "options": [
//                 "Contains submitted FormData object values",
//                 "Contains validation error messages only",
//                 "Contains form component reference object",
//                 "Contains user authentication token data"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1133,
//             "question": "Can React Hook Form trigger Server Action revalidation?",
//             "options": [
//                 "Yes, Server Action handles it",
//                 "No, revalidation is impossible here",
//                 "Only with special hook configuration",
//                 "Only during page navigation events"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1134,
//             "question": "What happens when Server Action is executing?",
//             "options": [
//                 "useFormStatus pending becomes true immediately",
//                 "Form automatically resets all fields",
//                 "Page refreshes completely automatically always",
//                 "Nothing changes in UI state"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//     {
//         "id": 1135,
//         "question": "How do you show loading spinner with useFormStatus?",
//         "options": [
//             "useFormStatus provides built-in spinner component",
//             "Check pending and render conditionally",
//             "Cannot show loading state ever",
//             "Only with external library support"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1136,
//         "question": "Can you use multiple useFormStatus in same form?",
//         "options": [
//             "No, only one per form",
//             "Only in Server Components specifically",
//             "Only with nested forms structure",
//             "Yes, in different child components",
//         ],
//         "correctOption": 3,
//         "points": 30
//     },
//     {
//         "id": 1137,
//         "question": "What is progressive enhancement with Server Actions and forms?",
//         "options": [
//             "Forms work without JavaScript enabled",
//             "Forms only work with JavaScript",
//             "Forms automatically validate all data",
//             "Forms submit faster than normal"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1138,
//         "question": "How does React Hook Form's handleSubmit work with Server Actions?",
//         "options": [
//             "Validates then calls Server Action",
//             "Skips validation completely for speed",
//             "Only works with API endpoints",
//             "Prevents Server Action execution always"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1139,
//         "question": "Can useFormStatus track multiple form submissions?",
//         "options": [
//             "Yes, tracks all nested forms",
//             "No, only tracks parent form",
//             "Only with special configuration setup",
//             "Only in development mode usage"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1140,
//         "question": "What is the method property in useFormStatus?",
//         "options": [
//             "Post method for form fields",
//             "HTTP method of form submission",
//             "Component rendering method reference object",
//             "Database query method for data"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1141,
//         "question": "How do you handle errors from Server Actions in forms?",
//         "options": [
//             "With try-catch in Client component",
//             "Errors automatically appear in console",
//             "Return error from Server Action",
//             "Cannot handle errors from actions",
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1142,
//         "question": "Can React Hook Form reset after Server Action success?",
//         "options": [
//             "No cannot reset with Server Actions",
//             "Automatically resets always by default",
//             "Yes, call reset method manually",
//             "Only resets on page refresh"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1143,
//         "question": "What is optimistic UI update with Server Actions?",
//         "options": [
//             "Update UI before server confirms",
//             "Update UI after server confirms",
//             "Only for read operations usage",
//             "Automatic feature requiring no code"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1144,
//         "question": "How do you pass additional data to Server Action with React Hook Form?",
//         "options": [
//             "Through global state storage",
//             "Through URL parameters route",
//             "Use bind method or hidden fields",
//             "Cannot pass additional data ever",
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1145,
//         "question": "Can useFormStatus access form validation errors?",
//         "options": [
//             "Yes, through errors property always",
//             "No, only pending and data",
//             "Only with React Hook Form",
//             "Only in Server Components specifically"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1146,
//         "question": "What is the action property in useFormStatus?",
//         "options": [
//             "Validation action for form fields",
//             "Array of all form actions",
//             "Reference to current form action",
//             "CSS action for form styling"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1147,
//         "question": "How does Server Action affect form submission flow?",
//         "options": [
//             "Submits without page refresh automatically",
//             "Always causes full page reload",
//             "Prevents form submission completely always",
//             "Only works with page navigation"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1148,
//         "question": "Can you use useFormState with Server Actions?",
//         "options": [
//             "Yes, for form state management",
//             "No, useFormStatus only for actions",
//             "Only with API endpoints route",
//             "Only in Server Components specifically"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1149,
//         "question": "What is the relationship between useTransition and form submission?",
//         "options": [
//             "useTransition prevents form submission",
//             "No relationship between them ever",
//             "useTransition shows pending UI state",
//             "Only works with API endpoints"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1150,
//         "question": "How do you validate Server Action response in React Hook Form?",
//         "options": [
//             "Validation always happens automatically",
//             "Check returned data and setError",
//             "Cannot validate server responses ever",
//             "Only through middleware validation layer"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1153,
//         "question": "When should you use Optimistic UI updates?",
//         "options": [
//             "For actions likely to succeed",
//             "For all server requests always",
//             "Only for read operations usage",
//             "Never with Server Actions usage"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1154,
//         "question": "What happens if an Optimistic update fails?",
//         "options": [
//             "Application crashes completely immediately always",
//             "Keep optimistic changes showing forever",
//             "Nothing, ignore the error silently",
//             "Revert UI to previous state",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 1155,
//         "question": "Which React hook is commonly used for Optimistic UI?",
//         "options": [
//             "useEffect for side effects only",
//             "useOptimistic for optimistic updates directly",
//             "useState for state management only",
//             "useRef for DOM references only"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1156,
//         "question": "What does useOptimistic hook return?",
//         "options": [
//             "Array with optimistic state, update function",
//             "Only the optimistic state value",
//             "Object with state and methods",
//             "Promise resolving to state value"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1157,
//         "question": "Can you use Optimistic UI with Server Actions?",
//         "options": [
//             "No, incompatible with Server Actions",
//             "Yes, perfect combination for UX",
//             "Only with API endpoints route",
//             "Only in Client Components specifically"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1158,
//         "question": "What is rollback in Optimistic UI context?",
//         "options": [
//             "Refreshing entire page completely always",
//             "Moving forward with new state",
//             "Reverting to previous UI state",
//             "Deleting all cached data entirely"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1159,
//         "question": "How do you handle errors in Optimistic updates?",
//         "options": [
//             "Show error and revert state",
//             "Ignore errors and continue forward",
//             "Errors cannot occur with optimistic",
//             "Automatically retry infinite times always"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1160,
//         "question": "What is the trade-off of using Optimistic UI?",
//         "options": [
//             "Complexity vs perceived performance gain",
//             "No trade-offs, always better approach",
//             "Slower performance in all cases",
//             "Cannot use with modern frameworks"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1161,
//         "question": "How does useOptimistic work with Server Actions?",
//         "options": [
//             "Prevents Server Action execution completely",
//             "Waits for action then updates",
//             "Only updates after successful action",
//             "Updates UI, action runs, confirms/reverts",
//         ],
//         "correctOption":3,
//         "points": 30
//     },
//     {
//         "id": 1162,
//         "question": "What should you consider before implementing Optimistic UI?",
//         "options": [
//             "Action success rate and rollback complexity",
//             "Only the UI design aesthetics",
//             "Server performance and speed only",
//             "Browser compatibility with CSS only"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//         {
//             "id": 1163,
//             "question": "What is the App Router in Next.js?",
//             "options": [
//                 "New routing system using app directory",
//                 "Old routing system with pages folder",
//                 "External routing library for React",
//                 "Database routing configuration system"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1165,
//             "question": "Which router supports React Server Components?",
//             "options": [
//                 "Both support them equally well",
//                 "Pages Router supports them natively",
//                 "App Router supports them natively",
//                 "Neither router supports them ever"
//             ],
//             "correctOption": 2,
//             "points": 10
//         },
//         {
//             "id": 1168,
//             "question": "Which router introduced layouts feature?",
//             "options": [
//                 "Pages Router with _app.js only",
//                 "App Router with layout.js natively",
//                 "Both have identical layout support",
//                 "Neither supports layouts at all"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1169,
//             "question": "How does App Router handle loading states?",
//             "options": [
//                 "Using loading.js file convention specifically",
//                 "Only with custom React components",
//                 "No built-in loading support available",
//                 "Only through external libraries usage"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1170,
//             "question": "How does Pages Router handle loading states?",
//             "options": [
//                 "Not possible in Pages Router",
//                 "Using loading.js file automatically always",
//                 "Automatic loading states built-in always",
//                 "Manual implementation with custom code",
//             ],
//             "correctOption": 3,
//             "points": 10
//         },
//         {
//             "id": 1171,
//             "question": "Which router supports streaming by default?",
//             "options": [
//                 "Pages Router streams automatically always",
//                 "App Router supports streaming natively",
//                 "Both support streaming equally well",
//                 "Neither supports streaming at all"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1172,
//             "question": "What is the error handling file in App Router?",
//             "options": [
//                 "error.js handles all errors always",
//                 "errors.js for global error handling",
//                 "error.js creates error boundaries automatically",
//                 "No error handling files available",
//             ],
//             "correctOption": 2,
//             "points": 10
//         },
//         {
//             "id": 1173,
//             "question": "What is the error handling file in Pages Router?",
//             "options": [
//                 "error.js handles all errors automatically",
//                 "No error handling available ever",
//                 "errors.js for error boundary creation",
//                 "error.js for custom error pages",
//             ],
//             "correctOption": 3,
//             "points": 10
//         },
//         {
//             "id": 1174,
//             "question": "How does App Router define API routes?",
//             "options": [
//                 "route.js file in app directory",
//                 "api folder inside pages directory",
//                 "Cannot create API routes ever",
//                 "Only with external server setup"
//             ],
//             "correctOption": 0,
//             "points": 10
//         },
//         {
//             "id": 1175,
//             "question": "How does Pages Router define API routes?",
//             "options": [
//                 "route.js in pages directory structure",
//                 "with middleware configuration setup",
//                 "Files in pages/api directory structure",
//                 "Cannot create API routes ever",
//             ],
//             "correctOption": 2,
//             "points": 10
//         },
//         {
//             "id": 1176,
//             "question": "Which router supports nested layouts natively?",
//             "options": [
//                 "Pages Router with custom implementation",
//                 "App Router with native support",
//                 "Both support nested layouts equally",
//                 "Neither supports nested layouts ever"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1177,
//             "question": "What is the default rendering in App Router?",
//             "options": [
//                 "Static generation by default always",
//                 "Incremental static regeneration by default",
//                 "Client-side rendering by default always",
//                 "Server-side rendering by default always",
//             ],
//             "correctOption": 3,
//             "points": 20
//         },
//     {
//         "id": 1178,
//         "question": "What is the default rendering in Pages Router?",
//         "options": [
//             "Server Components by default always",
//             "Depends on data fetching method",
//             "Always client-side rendering only mode",
//             "Only static generation supported ever"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1179,
//         "question": "How does App Router handle data fetching?",
//         "options": [
//             "Only with getServerSideProps function always",
//             "Only with getStaticProps function always",
//             "Using fetch with caching automatically",
//             "Cannot fetch data in components"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1180,
//         "question": "How does Pages Router handle data fetching?",
//         "options": [
//             "Using fetch API directly only",
//             "getServerSideProps, getStaticProps, and getInitialProps",
//             "Only with external libraries support",
//             "Cannot fetch data in pages"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1181,
//         "question": "Which router supports Server Actions?",
//         "options": [
//             "Pages Router with special config",
//             "App Router supports them natively",
//             "Both support Server Actions equally",
//             "Neither supports Server Actions ever"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1182,
//         "question": "What is template.js in App Router?",
//         "options": [
//             "Similar to layout but remounts",
//             "Identical to layout.js functionality exactly",
//             "Only for styling templates configuration",
//             "Not a valid file convention"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1183,
//         "question": "Does Pages Router have template.js?",
//         "options": [
//             "Yes, identical to App Router",
//             "No, not available in Pages",
//             "Only with custom configuration setup",
//             "Only in production mode available"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1184,
//         "question": "How does App Router handle metadata?",
//         "options": [
//             "Using Head component from next/head",
//             "Using metadata export or generateMetadata",
//             "Only with external SEO libraries",
//             "Cannot add metadata in routes"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1185,
//         "question": "How does Pages Router handle metadata?",
//         "options": [
//             "Using metadata export from file",
//             "Using Head component from next/head",
//             "Automatic metadata generation always available",
//             "Cannot add metadata in pages"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1186,
//         "question": "Which router supports parallel routes?",
//         "options": [
//             "Pages Router with custom setup",
//             "App Router with @ convention",
//             "Both support parallel routes equally",
//             "Neither supports parallel routes ever"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1187,
//         "question": "Which router supports intercepting routes?",
//         "options": [
//             "Both support intercepting routes equally",
//             "Pages Router with middleware only",
//             "App Router with (..) convention",
//             "Neither supports intercepting routes ever"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1188,
//         "question": "What is the _app.js file in Pages Router?",
//         "options": [
//             "Configuration file for Next.js",
//             "API route for authentication only",
//             "Error handling component for pages",
//             "Custom App component wrapper globally",
//         ],
//         "correctOption": 3,
//         "points": 10
//     },
//     {
//         "id": 1189,
//         "question": "What replaces _app.js in App Router?",
//         "options": [
//             "app.js in app directory structure",
//             "Root layout.js in app directory",
//             "_app.js still used in App",
//             "No replacement exists at all"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1190,
//         "question": "What is _document.js in Pages Router?",
//         "options": [
//             "Custom HTML document structure wrapper",
//             "Page component for documentation routes",
//             "API route for documents only",
//             "Styling configuration file for CSS"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1191,
//         "question": "Does App Router have _document.js?",
//         "options": [
//             "Yes, identical to Pages Router",
//             "No, uses layout.js instead mainly",
//             "Only with special configuration enabled",
//             "Only in production build mode"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1192,
//         "question": "How does App Router handle dynamic routes?",
//         "options": [
//             "[...param] for all routes always",
//             "[param] folder naming convention exactly",
//             "No dynamic routes supported ever",
//             "With middleware configuration setup"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1193,
//         "question": "How does Pages Router handle dynamic routes?",
//         "options": [
//             "Using folder naming convention only",
//             "[param].js file naming convention exactly",
//             "No dynamic routes supported ever",
//             "Only with external libraries usage"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1194,
//         "question": "Which router supports route groups?",
//         "options": [
//             "Both support route groups equally",
//             "Neither supports route groups ever",
//             "Pages Router with folders only",
//             "App Router with (group) convention",
//         ],
//         "correctOption": 3,
//         "points": 20
//     },
//     {
//         "id": 1195,
//         "question": "What is the purpose of route groups in App Router?",
//         "options": [
//             "Organization without affecting URL path",
//             "Grouping API endpoints together",
//             "Creating protected routes automatically always",
//             "No practical purpose at all"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1196,
//         "question": "Can you use both routers in same project?",
//         "options": [
//             "No, must choose one only",
//             "Yes, during incremental migration phase",
//             "Only in development mode usage",
//             "Only with special Next.js version"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1197,
//         "question": "Which router is recommended for new projects?",
//         "options": [
//             "Pages Router for stability always",
//             "App Router for modern features",
//             "Both are equally recommended always",
//             "Neither, use external router instead"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1198,
//         "question": "What is not-found.js in App Router?",
//         "options": [
//             "Custom 404 page for routes",
//             "Error boundary for all errors",
//             "Loading state component for pages",
//             "API route for missing data"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1199,
//         "question": "What is 404.js in Pages Router?",
//         "options": [
//             "not-found.js alternative file naming convention",
//             "No 404 pages supported ever",
//             "Custom 404 error page exactly",
//             "Only works with middleware setup"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1200,
//         "question": "Which router supports Suspense boundaries better?",
//         "options": [
//             "Pages Router with custom boundaries",
//             "App Router with native integration",
//             "Both support Suspense equally well",
//             "Neither supports Suspense at all"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1201,
//         "question": "How does App Router handle client components?",
//         "options": [
//             "'use client' directive at top",
//             "All components client by default",
//             "Cannot use client components ever",
//             "Only with special configuration setup"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1202,
//         "question": "How does Pages Router handle client components?",
//         "options": [
//             "All components client by default",
//             "Using 'use client' directive always",
//             "Cannot use client components ever",
//             "Only Server Components are supported"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1203,
//         "question": "Which router supports middleware better?",
//         "options": [
//             "Pages Router with middleware.js only",
//             "Both support middleware equally well",
//             "App Router with enhanced features",
//             "Neither supports middleware at all"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1204,
//         "question": "What is the caching behavior in App Router?",
//         "options": [
//             "Aggressive caching by default automatically",
//             "No caching by default ever",
//             "Only manual caching is possible",
//             "Caching only for static pages"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1205,
//         "question": "What is the caching behavior in Pages Router?",
//         "options": [
//             "Aggressive caching like App Router",
//             "Depends on rendering method chosen",
//             "No caching supported at all",
//             "Only for API routes caching"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1206,
//         "question": "How does App Router handle catch-all routes?",
//         "options": [
//             "[...slug] folder naming convention exactly",
//             "[...slug].js file naming convention exactly",
//             "No catch-all routes supported ever",
//             "Only with middleware configuration setup"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1207,
//         "question": "How does Pages Router handle catch-all routes?",
//         "options": [
//             "[...slug] folder naming convention exactly",
//             "[...slug].js file naming convention exactly",
//             "No catch-all routes supported ever",
//             "Only with custom implementation code"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1208,
//         "question": "Which router supports route handlers?",
//         "options": [
//             "Pages Router with route.js files",
//             "App Router with route.js files",
//             "Both support route handlers equally",
//             "Neither supports route handlers ever"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1209,
//         "question": "What is getServerSideProps in Pages Router?",
//         "options": [
//             "API route handler function only",
//             "Static generation function for builds",
//             "Client-side data fetching function only",
//             "Function for server-side rendering data",
//         ],
//         "correctOption": 3,
//         "points": 10
//     },
//     {
//         "id": 1210,
//         "question": "Does App Router have getServerSideProps?",
//         "options": [
//             "Yes, identical to Pages Router",
//             "No, uses async components instead",
//             "Only with special configuration enabled",
//             "Only in production mode available"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1211,
//         "question": "What is getStaticProps in Pages Router?",
//         "options": [
//             "Server-side rendering function for data",
//             "Client-side data fetching function only",
//             "Function for static generation data",
//             "API route handler function only"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1212,
//         "question": "Does App Router have getStaticProps?",
//         "options": [
//             "Yes, identical to Pages Router",
//             "Only with ISR enabled specifically",
//             "No, uses fetch with cache",
//             "Only in development mode usage"
//         ],
//         "correctOption": 2,
//         "points": 10
//     },
//     {
//         "id": 1213,
//         "question": "Which router supports ISR (Incremental Static Regeneration)?",
//         "options": [
//             "Only Pages Router supports ISR",
//             "Both support ISR with revalidate",
//             "Only App Router supports ISR",
//             "Neither supports ISR at all"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1214,
//         "question": "How does App Router implement ISR?",
//         "options": [
//             "Using revalidate in fetch options",
//             "Using getStaticProps with revalidate property",
//             "ISR not supported in App",
//             "Only manual revalidation is possible"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1215,
//         "question": "How does Pages Router implement ISR?",
//         "options": [
//             "Using fetch with revalidate option",
//             "Using revalidate in getStaticProps return",
//             "ISR not supported in Pages",
//             "Only with middleware configuration setup"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1216,
//         "question": "Which router has better TypeScript support?",
//         "options": [
//             "Both have identical TypeScript support",
//             "Pages Router with better types",
//             "App Router with enhanced types",
//             "Neither has TypeScript support ever"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1217,
//         "question": "What is the main advantage of App Router?",
//         "options": [
//             "Server Components and modern features",
//             "Simpler learning curve for beginners",
//             "Better backwards compatibility always guaranteed",
//             "Faster build times in production"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1218,
//         "question": "What is the main advantage of Pages Router?",
//         "options": [
//             "Server Components support built-in always",
//             "Maturity and ecosystem stability established",
//             "Better performance in all cases",
//             "More modern features than App"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1219,
//         "question": "Can App Router use getInitialProps?",
//         "options": [
//             "Yes, fully supported function always",
//             "No, not recommended in App",
//             "Only in Client Components specifically",
//             "Only with special configuration setup"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1220,
//         "question": "Which router supports font optimization better?",
//         "options": [
//             "Pages Router with next/font only",
//             "App Router with next/font integration",
//             "Both optimize fonts equally well",
//             "Neither optimizes fonts at all"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1221,
//         "question": "How does App Router handle image optimization?",
//         "options": [
//             "Using next/image component with features",
//             "No image optimization supported ever",
//             "Only with external CDN services",
//             "Manual optimization required always for images"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1222,
//         "question": "How does Pages Router handle image optimization?",
//         "options": [
//             "No image optimization available ever",
//             "Using next/image component with features",
//             "Only with external libraries support",
//             "Automatic optimization without configuration always"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1223,
//         "question": "Which router supports static exports better?",
//         "options": [
//             "Pages Router with easier setup",
//             "Both support static exports equally",
//             "App Router with limitations noted",
//             "Neither supports static exports ever"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1224,
//         "question": "What is the performance difference between routers?",
//         "options": [
//             "App Router significantly always fast ",
//             "App Router generally faster with RSC",
//             "Pages Router always faster overall",
//             "No performance difference between them",
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1225,
//         "question": "How does App Router handle redirects?",
//         "options": [
//             "Using redirect() function from next/navigation",
//             "Only with middleware configuration setup",
//             "Using useRouter hook push method",
//             "Redirects not supported in App"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1226,
//         "question": "How does Pages Router handle redirects?",
//         "options": [
//             "Using redirect() function from navigation",
//             "Using router.push or getServerSideProps redirect",
//             "Only with middleware configuration setup",
//             "Redirects not supported in Pages"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1227,
//         "question": "Which router supports granular caching control?",
//         "options": [
//             "Both have identical caching control",
//             "Pages Router with cache control",
//             "App Router with segment config",
//             "Neither supports caching control ever"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1443,
//         "question": "What is the main difference between Server and Client data fetching?",
//         "options": [
//             "Server fetching is always faster",
//             "Server fetching happens before render, client after",
//             "Client fetching is more secure",
//             "They are identical in functionality"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1444,
//         "question": "How do you fetch data in Server Components?",
//         "options": [
//             "Using useEffect with fetch API",
//             "Using async/await directly in component",
//             "Using getServerSideProps function",
//             "Server Components cannot fetch data"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1445,
//         "question": "What is parallel data fetching in Next.js?",
//         "options": [
//             "Fetching data on multiple servers",
//             "Initiating multiple requests simultaneously",
//             "Using parallel routes for data",
//             "Parallel processing of single request"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1446,
//         "question": "What is sequential data fetching?",
//         "options": [
//             "Fetching data in order, waiting for each",
//             "Organizing data in sequences",
//             "Fetching from multiple databases",
//             "Sequential numbering of requests"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1447,
//         "question": "How does Next.js deduplicate fetch requests?",
//         "options": [
//             "By caching identical requests automatically",
//             "Manual deduplication required always",
//             "Deduplication is not supported",
//             "Only for GET requests deduplication"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1448,
//         "question": "What is the data cache in Next.js fetch?",
//         "options": [
//             "Browser localStorage for data",
//             "Server-side persistent HTTP cache",
//             "Client-side temporary memory cache",
//             "Database query result cache"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1449,
//         "question": "How do you opt out of fetch caching per request?",
//         "options": [
//             "Using cache: 'no-store' option",
//             "Using noCache: true option",
//             "Caching cannot be disabled",
//             "Use different fetch library"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1450,
//         "question": "What happens when fetch request fails in Server Component?",
//         "options": [
//             "Returns null and continues rendering",
//             "Error boundary catches and shows fallback",
//             "Automatically retries 3 times",
//             "Switches to client-side fetching"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1451,
//         "question": "Can you fetch data in parallel from multiple Server Components?",
//         "options": [
//             "No, Server Components fetch sequentially",
//             "Yes, each component's fetch runs independently",
//             "Only with special configuration",
//             "Only in production mode"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1452,
//         "question": "How does streaming affect data fetching in Server Components?",
//         "options": [
//             "All data must load before streaming",
//             "Components stream as their data resolves",
//             "Streaming is disabled during fetching",
//             "Data fetching prevents streaming"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },

//     {
//         "id": 1228,
//         "question": "Can you mix Server and Client Components in App Router?",
//         "options": [
//             "No, must choose one type",
//             "Yes, with 'use client' directive",
//             "Only with middleware configuration setup",
//             "Only in development mode usage"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1229,
//         "question": "Which router supports partial pre-rendering better?",
//         "options": [
//             "Pages Router with manual implementation",
//             "App Router with experimental PPR",
//             "Both support PPR equally well",
//             "Neither supports PPR at all"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1230,
//         "question": "How does App Router handle navigation?",
//         "options": [
//             "Using useRouter from next/navigation exactly",
//             "Using useRouter from next/router exactly",
//             "No programmatic navigation supported ever",
//             "Only with Link component usage"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1231,
//         "question": "How does Pages Router handle navigation?",
//         "options": [
//             "Using useRouter from next/navigation exactly",
//             "Using useRouter from next/router exactly",
//             "No programmatic navigation supported ever",
//             "Only with Link component usage"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1232,
//         "question": "Which router supports automatic code splitting better?",
//         "options": [
//             "Pages Router with better splitting",
//             "Both have automatic code splitting",
//             "App Router with improved splitting",
//             "Neither has code splitting support"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1233,
//         "question": "What is the bundle size difference?",
//         "options": [
//             "Pages Router always smaller bundles",
//             "No bundle size difference ever",
//             "App Router significantly larger always",
//             "App Router typically smaller bundles",
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1234,
//         "question": "Which router is better for SEO?",
//         "options": [
//             "Pages Router with better SEO",
//             "Both equal for SEO optimization",
//             "App Router with metadata API",
//             "Neither is good for SEO"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1235,
//         "question": "Can you mix Server and Client Components in Pages Router?",
//         "options": [
//             "Yes, with 'use client' directive",
//             "No, all are client components",
//             "Only with special configuration setup",
//             "Only in production mode available"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//         {
//             "id": 1236,
//             "question": "What does 'UI as a function of state' mean in React?",
//             "options": [
//                 "UI components are JavaScript functions only",
//                 "UI automatically reflects current state values",
//                 "UI requires manual updates after state changes",
//                 "UI stores all state in function scope"
//             ],
//             "correctOption": 1,
//             "points": 10
//         },
//         {
//             "id": 1237,
//             "question": "In the equation UI = f(state), what does 'f' represent?",
//             "options": [
//                 "The fetch function for getting data",
//                 "The filter function for arrays of data",
//                 "The rendering logic for transforming state to UI",
//                 "The function component definition"
//             ],
//             "correctOption": 2,
//             "points": 20
//         },
//         {
//             "id": 1238,
//             "question": "What is the main benefit of treating UI as a function of state?",
//             "options": [
//                 "UI updates are predictable and deterministic",
//                 "Functions run faster than class components",
//                 "State becomes optional in all components",
//                 "Manual DOM manipulation becomes easier"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1239,
//             "question": "How does React implement the concept of 'UI as a function of state'?",
//             "options": [
//                 "By storing UI templates in database",
//                 "By converting state to HTML strings",
//                 "By manually updating DOM when state changes",
//                 "By re-rendering components when state changes",
//             ],
//             "correctOption": 3,
//             "points": 20
//         },
//         {
//             "id": 1240,
//             "question": "What happens when state changes in 'UI as function of state' model?",
//             "options": [
//                 "UI remains unchanged until manual refresh",
//                 "State reverts to previous value automatically",
//                 "UI automatically recomputes and re-renders",
//                 "UI requires explicit update function call"
//             ],
//             "correctOption": 2,
//             "points": 10
//         },
//         {
//             "id": 1241,
//             "question": "Why is 'UI as a function of state' considered declarative?",
//             "options": [
//                 "You write how to update each element",
//                 "You manually describe DOM manipulation steps",
//                 "You declare functions before using them",
//                 "You declare what UI should be for state",
//             ],
//             "correctOption": 3,
//             "points": 20
//         },
//         {
//             "id": 1242,
//             "question": "In vanilla JavaScript, why is 'UI as function of state' harder to achieve?",
//             "options": [
//                 "You must manually sync state with DOM",
//                 "JavaScript cannot handle state changes",
//                 "Functions cannot return HTML in JavaScript",
//                 "JavaScript doesn't support functions at all",
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1243,
//             "question": "What does deterministic rendering mean in 'UI as function of state'?",
//             "options": [
//                 "Same state always produces same UI output",
//                 "UI renders at predetermined time intervals",
//                 "Rendering happens in determined order always",
//                 "State determines component lifecycle only"
//             ],
//             "correctOption": 0,
//             "points": 30
//         },
//         {
//             "id": 1244,
//             "question": "How does component re-rendering relate to 'UI as function of state'?",
//             "options": [
//                 "Re-rendering is separate from state changes",
//                 "Re-rendering only happens on manual trigger",
//                 "Re-rendering is the function call with state",
//                 "Re-rendering prevents state from changing"
//             ],
//             "correctOption": 2,
//             "points": 30
//         },
//         {
//             "id": 1245,
//             "question": "What would violate the 'UI as function of state' principle?",
//             "options": [
//                 "Using useState to manage component state",
//                 "Directly manipulating DOM without updating state",
//                 "Passing props from parent to child",
//                 "Using useEffect for side effects"
//             ],
//             "correctOption": 1,
//             "points": 30
//         },
//         {
//             "id": 1246,
//             "question": "Why is 'UI as a function of state' easier to debug?",
//             "options": [
//                 "It separates data and presentation clearly",
//                 "State and UI relationship is predictable",
//                 "It prevents side effects in rendering",
//                 "It ensures UI updates automatically with state changes"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1247,
//             "question": "In 'UI = f(state)', what happens if function is impure?",
//             "options": [
//                 "State management becomes easier overall",
//                 "React automatically makes function pure",
//                 "Performance improves significantly for app",
//                 "UI becomes unpredictable and harder to debug",
//             ],
//             "correctOption": 3,
//             "points": 30
//         },
//         {
//             "id": 1248,
//             "question": "How does react's Virtual DOM support 'UI as function of state'?",
//             "options": [
//                 "It stores all state in virtual memory",
//                 "It compares new and old UI efficiently",
//                 "It prevents state from changing",
//                 "It converts state to virtual objects"
//             ],
//             "correctOption": 1,
//             "points": 20
//         },
//         {
//             "id": 1249,
//             "question": "What does 'single source of truth' mean in 'UI as function of state'?",
//             "options": [
//                 "State is the authoritative source for UI",
//                 "Only one component can have state",
//                 "UI can only display one piece data",
//                 "Truth values can only be boolean"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1250,
//             "question": "Why does React prevent direct state mutation in 'UI as function' model?",
//             "options": [
//                 "Mutations are too slow for performance",
//                 "Direct mutations don't trigger re-renders",
//                 "React cannot detect primitive type mutations",
//                 "State must always be string type"
//             ],
//             "correctOption": 1,
//             "points": 30
//         },
//         {
//             "id": 1251,
//             "question": "How does 'UI as function of state' simplify state management?",
//             "options": [
//                 "You only update state, UI updates automatically",
//                 "State management is completely eliminated",
//                 "UI and state are stored together",
//                 "Functions manage state without components"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1252,
//             "question": "What is the relationship between props and 'UI as function of state'?",
//             "options": [
//                 "Props are part of input to function",
//                 "Props replace state completely in function",
//                 "Props and state are unrelated concepts",
//                 "Props prevent function from rendering UI"
//             ],
//             "correctOption": 0,
//             "points": 20
//         },
//         {
//             "id": 1253,
//             "question": "How does immutability relate to 'UI as function of state'?",
//             "options": [
//                 "Immutability makes state updates unpredictable",
//                 "Immutability ensures function remains pure and predictable",
//                 "Immutability is unrelated to function model",
//                 "Immutability prevents UI from updating"
//             ],
//             "correctOption": 1,
//             "points": 30
//         },
//         {
//             "id": 1254,
//             "question": "Why is testing easier with 'UI as function of state' model?",
//             "options": [
//                 "Tests run faster with function components",
//                 "Testing frameworks only support this model",
//                 "You can test input state and output",
//                 "State cannot be tested in model"
//             ],
//             "correctOption": 2,
//             "points": 30
//         },
//     {
//         "id": 1255,
//         "question": "What does 'unidirectional data flow' mean in 'UI as function of state'?",
//         "options": [
//             "Data flows only from child to parent",
//             "Data can flow in any direction freely",
//             "Data flows from state to UI in direction",
//             "Data flow is circular between components"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//                 "id": 1256,
//                 "question": "What does 'UI as a function of data' mean in modern web applications?",
//                 "options": [
//                     "UI components store all application data",
//                     "UI automatically reflects the current data values",
//                     "UI requires manual refresh after data changes",
//                     "UI functions fetch data from servers"
//                 ],
//                 "correctOption": 1,
//                 "points": 10
//             },
//                 {
//                     "id": 1257,
//                     "question": "How does 'UI = f(data)' differ from 'UI = f(state)'?",
//                     "options": [
//                         "Data typically comes from external sources",
//                         "Data and state are completely identical",
//                         "Data cannot trigger UI updates",
//                         "Data is always stored locally only"
//                     ],
//                     "correctOption": 0,
//                     "points": 20
//                 },
//                 {
//                     "id": 1258,
//                     "question": "In 'UI as function of data', what happens when server data changes?",
//                     "options": [
//                         "UI remains unchanged until page reload",
//                         "UI automatically updates to reflect new data",
//                         "Data reverts to cached version automatically",
//                         "UI requires manual DOM manipulation"
//                     ],
//                     "correctOption": 1,
//                     "points": 10
//                 },
//                 {
//                     "id": 1259,
//                     "question": "Why is 'UI as function of data' crucial for real-time applications?",
//                     "options": [
//                         "Real-time apps don't need state management",
//                         "UI automatically syncs with changing server data",
//                         "Data updates are slower than state",
//                         "Functions run faster with external data"
//                     ],
//                     "correctOption": 1,
//                     "points": 20
//                 },
//                 {
//                     "id": 1260,
//                     "question": "How does React Query implement 'UI as function of data'?",
//                     "options": [
//                         "It syncs server data with UI automatically",
//                         "It stores data permanently in state",
//                         "It converts data to local storage",
//                         "It prevents data from changing",
//                     ],
//                     "correctOption": 0,
//                     "points": 20
//                 },
//                 {
//                     "id": 1261,
//                     "question": "What is the main challenge in 'UI as function of data' model?",
//                     "options": [
//                         "Data is too fast to process",
//                         "Keeping UI synchronized with remote data changes",
//                         "Data cannot be converted to UI",
//                         "Functions cannot accept external data"
//                     ],
//                     "correctOption": 1,
//                     "points": 20
//                 },
//                 {
//                     "id": 1262,
//                     "question": "How does 'UI as function of data' relate to Server Components in Next.js?",
//                     "options": [
//                         "Server Components fetch and render data directly",
//                         "Server Components cannot access any data",
//                         "Server Components only handle local state",
//                         "Server Components prevent data fetching"
//                     ],
//                     "correctOption": 0,
//                     "points": 30
//                 },
//                 {
//                     "id": 1263,
//                     "question": "What problem does 'UI as function of data' solve in collaborative apps?",
//                     "options": [
//                         "Users cannot share data with others",
//                         "Collaboration requires manual data sync",
//                         "Data conflicts are impossible to resolve",
//                         "Multiple users see consistent data-driven UI",
//                     ],
//                     "correctOption": 3,
//                     "points": 30
//                 },
//                 {
//                     "id": 1264,
//                     "question": "Why is caching important in 'UI as function of data' model?",
//                     "options": [
//                         "Caching prevents data from being used",
//                         "Caching improves performance while maintaining sync",
//                         "Caching replaces the need for functions",
//                         "Caching stores UI instead of data"
//                     ],
//                     "correctOption": 1,
//                     "points": 20
//                 },
//                 {
//                     "id": 1265,
//                     "question": "How does optimistic UI relate to 'UI as function of data'?",
//                     "options": [
//                         "UI updates before server confirms data change",
//                         "Optimistic UI prevents data from changing",
//                         "Data optimism improves function performance",
//                         "UI waits for server data always",
//                     ],
//                     "correctOption": 0,
//                     "points": 30
//                 },
//         {
//         "id": 1391,
//         "question": "What is the purpose of React.lazy()?",
//         "options": [
//             "To delay component rendering by time",
//             "To dynamically import components for code splitting",
//             "To make components render faster",
//             "To lazy load images and assets"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1392,
//         "question": "What must wrap a lazy-loaded component?",
//         "options": [
//             "ErrorBoundary component",
//             "React.Suspense boundary",
//             "Loading wrapper component",
//             "No wrapper needed"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1393,
//         "question": "What does React.lazy() return?",
//         "options": [
//             "A promise that resolves to component",
//             "Regular component immediately",
//             "Dynamic component that lazy loads",
//             "Configuration object for lazy loading"
//         ],
//         "correctOption": 2,
//         "points": 20
//     },
//     {
//         "id": 1394,
//         "question": "Can you use React.lazy() for named exports?",
//         "options": [
//             "Yes, directly with named imports",
//             "No, only default exports are supported",
//             "Yes, with re-export wrapper module",
//             "Named exports work automatically"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1395,
//         "question": "What happens when lazy component fails to load?",
//         "options": [
//             "App crashes completely",
//             "Error boundary can catch and handle it",
//             "Silently fails with no render",
//             "Infinite retry automatically"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1396,
//         "question": "Can React.lazy() be used in Server Components?",
//         "options": [
//             "Yes, works everywhere",
//             "No, only in Client Components with Suspense",
//             "Only with special configuration",
//             "SSR doesn't support lazy loading"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1397,
//         "question": "How does code splitting improve performance?",
//         "options": [
//             "Makes code execute faster",
//             "Reduces initial JavaScript bundle size",
//             "Increases caching efficiency only",
//             "Optimizes server response time"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1398,
//         "question": "What is route-based code splitting?",
//         "options": [
//             "Splitting code by file size limits",
//             "Lazy loading components for each route",
//             "Separating API and UI code",
//             "Splitting CSS from JavaScript"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1399,
//         "question": "What is React Testing Library's guiding principle?",
//         "options": [
//             "Test implementation details thoroughly",
//             "Test how users interact with app",
//             "Test only class components",
//             "Test all internal state changes"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1400,
//         "question": "Which method renders a component for testing?",
//         "options": [
//             "mount() from enzyme library",
//             "render() from React Testing Library",
//             "create() from test renderer",
//             "display() from jest-dom"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1401,
//         "question": "What is the purpose of screen.getByRole()?",
//         "options": [
//             "Query elements by ARIA role",
//             "Get component by class name",
//             "Query by data-tested attribute",
//             "Get element by internal state"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1402,
//         "question": "How do you test async behavior in React Testing Library?",
//         "options": [
//             "Use setTimeout and wait manually",
//             "Use waitFor() or findBy queries",
//             "Async testing is not supported",
//             "Use delay() helper function"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1403,
//         "question": "What is the difference between getBy and queryBy?",
//         "options": [
//             "No difference, they're aliases",
//             "getBy throws if not found, queryBy returns null",
//             "queryBy is faster than getBy",
//             "getBy is for async, queryBy for sync"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1404,
//         "question": "How do you test user events in React Testing Library?",
//         "options": [
//             "Using userEvent library for realistic interactions",
//             "Calling component methods directly",
//             "Manipulating state manually in tests",
//             "Using enzyme's simulate method"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1405,
//         "question": "What should you avoid testing in React components?",
//         "options": [
//             "User interactions and behavior",
//             "Implementation details like state",
//             "Rendered output and accessibility",
//             "Integration with other components"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1406,
//         "question": "How do you mock API calls in tests?",
//         "options": [
//             "Never mock, always use real APIs",
//             "Use MSW (Mock Service Worker) or jest.mock()",
//             "Mocking is automatic in tests",
//             "Use setTimeout to fake responses"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1407,
//         "question": "What is snapshot testing in React?",
//         "options": [
//             "Taking screenshots of components",
//             "Capturing rendered output for regression testing",
//             "Testing component performance metrics",
//             "Debugging state at specific moments"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1408,
//         "question": "How do you test components that use Context?",
//         "options": [
//             "Context cannot be tested",
//             "Wrap component with context providers in test",
//             "Mock all context values globally",
//             "Context works automatically in tests"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//         {
//         "id": 1409,
//         "question": "What is the windowing/virtualization technique?",
//         "options": [
//             "Opening multiple browser windows",
//             "Rendering only visible items in long lists",
//             "Creating virtual DOM copies",
//             "Simulating window resize events"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1410,
//         "question": "Which library is commonly used for virtualization in React?",
//         "options": [
//             "react-window or react-virtualized",
//             "react-dom and react-router",
//             "redux and react-redux",
//             "axios and fetch"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1411,
//         "question": "What is debouncing in React applications?",
//         "options": [
//             "Removing bounce effects from buttons",
//             "Delaying function execution until input pause",
//             "Validating input immediately on change",
//             "Preventing all event handlers from firing"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1412,
//         "question": "What is throttling in event handlers?",
//         "options": [
//             "Limiting function calls to once per time period",
//             "Stopping all events from propagating",
//             "Slowing down component rendering",
//             "Compressing event data size"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1413,
//         "question": "When should you use Web Workers in React?",
//         "options": [
//             "For all state updates always",
//             "For heavy computations blocking UI",
//             "For rendering components faster",
//             "For managing application routing"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1414,
//         "question": "What is the purpose of React.memo's second argument?",
//         "options": [
//             "To specify component display name",
//             "Custom comparison function for props",
//             "To set memoization cache size",
//             "To define component lifecycle"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1415,
//         "question": "How does useDeferredValue help performance?",
//         "options": [
//             "Delays non-urgent updates during typing",
//             "Prevents all re-renders completely",
//             "Caches component output permanently",
//             "Disables React DevTools overhead"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1416,
//         "question": "What is the purpose of useTransition hook?",
//         "options": [
//             "To mark state updates as non-urgent",
//             "To add CSS transitions automatically",
//             "To transition between routes smoothly",
//             "To manage component lifecycle transitions"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//         {
//         "id": 1417,
//         "question": "How do you type props in TypeScript React component?",
//         "options": [
//             "Using interface or type for props object",
//             "Props are automatically typed always",
//             "TypeScript doesn't support React props",
//             "Use PropTypes from prop-types package"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1418,
//         "question": "What is React.FC (FunctionComponent) used for?",
//         "options": [
//             "To type functional components with props",
//             "To create class components in TypeScript",
//             "To define API fetch functions",
//             "To type CSS-in-JS styles"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1419,
//         "question": "How do you type useState in TypeScript?",
//         "options": [
//             "useState<Type>(initialValue) with generic",
//             "useState(initialValue: Type) with annotation",
//             "TypeScript infers type automatically always",
//             "Cannot type useState in TypeScript"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1420,
//         "question": "How do you type event handlers in TypeScript React?",
//         "options": [
//             "Using React.MouseEvent<HTMLElement> type",
//             "Using native Event type only",
//             "Event handlers cannot be typed",
//             "Using any type for flexibility"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1421,
//         "question": "What is the type for children prop in TypeScript?",
//         "options": [
//             "React.Children type from React",
//             "React.ReactNode or React.ReactElement",
//             "string | number | JSX.Element",
//             "any type for flexibility"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1422,
//         "question": "How do you type useRef for DOM elements?",
//         "options": [
//             "useRef<HTMLDivElement>(null) with element type",
//             "useRef(null: HTMLElement) with annotation",
//             "useRef cannot be typed in TypeScript",
//             "useRef<DOMElement>(nullRetryOContinue2 / 2javascript) with generic DOM"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1423,
//         "question": "How do you type Context value in TypeScript?",
//         "options": [
//             "createContext<Type>(defaultValue) with generic",
//             "Context values cannot be typed",
//             "Use any type for Context values",
//             "TypeScript infers context type automatically"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1424,
//         "question": "What is the correct way to type optional props?",
//         "options": [
//             "Use ? operator: name?: string",
//             "Use | undefined: name: string | undefined",
//             "Both approaches are valid in TypeScript",
//             "Optional props cannot be typed"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1425,
//         "question": "How do you type Custom Hooks in TypeScript?",
//         "options": [
//             "Define return type and parameter types",
//             "Custom Hooks are automatically typed",
//             "Use 'any' type for all hooks",
//             "Custom Hooks cannot use TypeScript"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1426,
//         "question": "What is the type for style prop in React?",
//         "options": [
//             "React.CSSProperties for inline styles",
//             "Object type for all styles",
//             "string type for CSS strings",
//             "Style props cannot be typed"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1427,
//         "question": "What is semantic HTML in context of accessibility?",
//         "options": [
//             "Using HTML5 tags like header, nav, main",
//             "Adding semantic comments in code",
//             "Using className for semantics",
//             "Semantic HTML is not related to a11y"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1428,
//         "question": "What is the purpose of ARIA labels?",
//         "options": [
//             "To style elements with CSS",
//             "To provide accessible names for screen readers",
//             "To improve SEO ranking",
//             "To validate HTML structure"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1429,
//         "question": "Why is keyboard navigation important?",
//         "options": [
//             "Makes typing faster in forms",
//             "Users with disabilities rely on keyboard",
//             "Improves website loading speed",
//             "Reduces mouse hardware costs"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1430,
//         "question": "What is focus management in React applications?",
//         "options": [
//             "Controlling which element has keyboard focus",
//             "Managing component rendering focus",
//             "Optimizing performance bottlenecks",
//             "Focusing on important features only"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1431,
//         "question": "What is the purpose of aria-live regions?",
//         "options": [
//             "To create live video streams",
//             "To announce dynamic content changes to screen readers",
//             "To enable real-time collaboration",
//             "To improve animation performance"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1432,
//         "question": "Why should interactive elements be keyboard accessible?",
//         "options": [
//             "Keyboard is faster than mouse",
//             "Many users cannot use mouse devices",
//             "Keyboards are more reliable hardware",
//             "It's only for developer convenience"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1433,
//         "question": "What is color contrast ratio in accessibility?",
//         "options": [
//             "Difference between text and background colors",
//             "Number of colors used in design",
//             "Brightness level of screen display",
//             "Contrast between light and dark themes"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1434,
//         "question": "How do you make a custom button accessible?",
//         "options": [
//             "Use div with onClick handler only",
//             "Use button element or role='button' with keyboard support",
//             "Add aria-label='button' to div",
//             "Custom buttons cannot be accessible"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1453,
//         "question": "What is the execution order of middleware in Next.js?",
//         "options": [
//             "After route handler execution",
//             "Before any route handler or page render",
//             "Simultaneously with page rendering",
//             "Only after authentication check"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1454,
//         "question": "Can middleware modify request headers?",
//         "options": [
//             "No, headers are read-only",
//             "Yes, using request.headers.set()",
//             "Only response headers can be modified",
//             "Only in production mode"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1455,
//         "question": "What is the matcher config in middleware?",
//         "options": [
//             "Matches user authentication credentials",
//             "Specifies which routes middleware applies to",
//             "Matches request and response pairs",
//             "Pattern for URL parameter matching"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1456,
//         "question": "Can middleware set cookies?",
//         "options": [
//             "No, cookies are read-only in middleware",
//             "Yes, using response.cookies.set()",
//             "Only through Server Actions",
//             "Only in API routes"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1457,
//         "question": "What happens if middleware throws an error?",
//         "options": [
//             "Request continues to route handler",
//             "Error boundary catches it automatically",
//             "Returns 500 error to client",
//             "Middleware silently fails and continues"
//         ],
//         "correctOption": 2,
//         "points": 30
//     },
//     {
//         "id": 1458,
//         "question": "Can middleware access environment variables?",
//         "options": [
//             "No, env variables unavailable in middleware",
//             "Yes, using process.env as usual",
//             "Only NEXT_PUBLIC_ variables",
//             "Only in development mode"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1459,
//         "question": "What is the Edge Runtime limitation for middleware?",
//         "options": [
//             "No limitations at all",
//             "Cannot use Node.js APIs like fs",
//             "Cannot access request headers",
//             "Cannot perform redirects"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1460,
//         "question": "Can middleware be used for A/B testing?",
//         "options": [
//             "No, middleware is only for authentication",
//             "Yes, by rewriting based on user segments",
//             "A/B testing requires external service",
//             "Only with paid Next.js plans"
//         ],
//         "correctOption": 1,
//         "points": 30
//   },
//         {
//         "id": 1461,
//         "question": "What is i18n in web development?",
//         "options": [
//             "Internet Infrastructure Initiative",
//             "Internationalization for multi-language support",
//             "Image optimization technique",
//             "Interactive interface design"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1462,
//         "question": "How does Next.js handle locale detection?",
//         "options": [
//             "Manual locale setting required always",
//             "From URL, cookies, and Accept-Language header",
//             "Only from browser localStorage",
//             "Locale detection is not supported"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1463,
//         "question": "What is the recommended structure for locale routes in App Router?",
//         "options": [
//             "[locale]/page.js pattern for dynamic locale",
//             "Separate app directories per locale",
//             "locale-en/page.js for each language",
//             "Locales are handled automatically"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1464,
//         "question": "How do you access current locale in Server Component?",
//         "options": [
//             "Using useLocale hook from next/navigation",
//             "From params.locale in page props",
//             "Using getLocale() function",
//             "Locale is not available in Server Components"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1465,
//         "question": "What is locale negotiation in i18n?",
//         "options": [
//             "User selecting language from dropdown",
//             "Determining best locale based on preferences",
//             "Translating content between languages",
//             "Negotiating API response formats"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1466,
//         "question": "How do you create locale-specific metadata in Next.js?",
//         "options": [
//             "Using metadata export or generateMetadata with locale",
//             "Separate metadata files per language",
//             "Metadata cannot be localized",
//             "Only through external i18n library"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1467,
//         "question": "What is the purpose of middleware in i18n routing?",
//         "options": [
//             "To translate content automatically",
//             "To detect and redirect to appropriate locale",
//             "To validate translation files",
//             "Middleware is not used for i18n"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1468,
//         "question": "How do you handle locale in URL for SEO?",
//         "options": [
//             "Hide locale in URL for cleaner links",
//             "Include locale prefix in URL path",
//             "Use query parameters for locale",
//             "Store locale only in cookies"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1469,
//         "question": "What is XSS (Cross-Site Scripting) vulnerability?",
//         "options": [
//             "Server overload attack",
//             "Injecting malicious scripts into web pages",
//             "Stealing SSL certificates",
//             "Cross-domain resource sharing"
//         ],
//         "correctOption": 1,
//         "points": 10
//     },
//     {
//         "id": 1470,
//         "question": "How does React help prevent XSS attacks?",
//         "options": [
//             "By automatically escaping rendered content",
//             "By blocking all JavaScript execution",
//             "By encrypting all user input",
//             "React doesn't prevent XSS"
//         ],
//         "correctOption": 0,
//         "points": 20
//     },
//     {
//         "id": 1471,
//         "question": "What is CSRF (Cross-Site Request Forgery)?",
//         "options": [
//             "Forcing users to make unwanted requests",
//             "Forging SSL certificates",
//             "Cross-site resource sharing",
//             "Client-side request filtering"
//         ],
//         "correctOption": 0,
//         "points": 10
//     },
//     {
//         "id": 1472,
//         "question": "How can you prevent CSRF attacks?",
//         "options": [
//             "Using HTTPS only for all requests",
//             "CSRF tokens and SameSite cookies",
//             "Disabling all POST requests",
//             "CSRF cannot be prevented"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1473,
//         "question": "Why is dangerouslySetInnerHTML dangerous?",
//         "options": [
//             "It causes performance issues",
//             "It can execute malicious scripts from untrusted content",
//             "It breaks React rendering lifecycle",
//             "It's not actually dangerous"
//         ],
//         "correctOption": 1,
//         "points": 20
//     },
//     {
//         "id": 1474,
//         "question": "What is the principle of least privilege in security?",
//         "options": [
//             "Give users minimum access needed for task",
//             "Restrict all user actions by default",
//             "Privilege only for administrators",
//             "Least important security principle"
//         ],
//         "correctOption": 0,
//         "points": 30
//     },
//     {
//         "id": 1475,
//         "question": "How should you handle sensitive data in environment variables?",
//         "options": [
//             "Commit .env files to repository",
//             "Never expose server-only vars to client",
//             "Use NEXT_PUBLIC_ for all variables",
//             "Store in localStorage for speed"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
//     {
//         "id": 1476,
//         "question": "What is Content Security Policy (CSP)?",
//         "options": [
//             "Policy for caching static content",
//             "Header restricting resource loading sources",
//             "Copyright protection for website content",
//             "Security policy for CSS stylesheets"
//         ],
//         "correctOption": 1,
//         "points": 30
//     },
    {
        "id": 1406,
        "question": "How do you initialize a new project with npm?",
        "options": [
            "npm start",
            "npm create",
            "npm init",
            "npm new"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• npm init برای ساخت package.json جدید\n" +
            "- سوالاتی درباره نام، version، description می‌پرسد\n" +
            "- npm init -y برای skip کردن سوالات و default values\n" +
            "- اولین قدم هر پروژه Node.js\n" +
            "- package.json فایل اصلی برای مدیریت dependencies"
    },
    {
        "id": 1407,
        "question": "How do you install a package and save it to package.json?",
        "options": [
            "npm get react",
            "npm add react",
            "npm download react",
            "npm install react",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• npm install react یا npm i react برای نصب\n" +
            "- خودکار در package.json و node_modules اضافه می‌شود\n" +
            "- npm install react --save دیگر لازم نیست (پیش‌فرض است)\n" +
            "- همزمان package-lock.json هم update می‌شود\n" +
            "- برای چند package: npm install react react-dom"
    },
    {
        "id": 1408,
        "question": "How do you remove a package from your project?",
        "options": [
            "npm delete package-name",
            "npm remove package-name",
            "npm uninstall package-name",
            "npm drop package-name"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• npm uninstall package-name یا npm un package-name\n" +
            "- از node_modules و package.json حذف می‌شود\n" +
            "- npm remove و npm rm هم کار می‌کنند (alias)\n" +
            "- package-lock.json نیز update می‌شود\n" +
            "- برای چند package: npm uninstall react react-dom"
    },
    {
        "id": 1412,
        "question": "How do you add a package using Yarn?",
        "options": [
            "yarn install react",
            "yarn add react",
            "yarn get react",
            "yarn set react"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• yarn add react برای نصب package جدید\n" +
            "- خودکار در package.json و yarn.lock اضافه می‌شود\n" +
            "- yarn add react react-dom برای چند package\n" +
            "- yarn add eslint --dev برای devDependencies\n" +
            "- معادل npm install react"
    },
    {
        "id": 1411,
        "question": "What is the Yarn equivalent of npm install?",
        "options": [
            "yarn get",
            "yarn add",
            "yarn download",
            "yarn install",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• yarn install یا فقط yarn\n" +
            "- تمام dependencies از package.json نصب می‌شود\n" +
            "- yarn.lock برای lock کردن versions\n" +
            "- معمولاً سریع‌تر از npm\n" +
            "- offline caching برای installs بدون اینترنت"
    },
    {
        "id": 1413,
        "question": "How do you run scripts defined in package.json?",
        "options": [
            "npm exec start",
            "npm run start",
            "npm do start",
            "npm script start"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• npm run script-name برای اجرای scripts\n" +
            "- مثل npm run dev، npm run build، npm run test\n" +
            "- npm start و npm test بدون run کار می‌کنند\n" +
            "- در yarn فقط yarn dev کافی است\n" +
            "- scripts در package.json تعریف می‌شوند"
    },
    {
        "id": 1414,
        "question": "How do you check the installed version of a package?",
        "options": [
            "npm version react",
            "npm check react",
            "npm list react",
            "npm info react"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• npm list react یا npm ls react\n" +
            "- version نصب شده در پروژه را نشان می‌دهد\n" +
            "- npm list --depth=0 فقط top-level packages\n" +
            "- npm list -g --depth=0 برای global packages\n" +
            "- yarn list react در Yarn"
    },
    {
        "id": 1415,
        "question": "What command shows available updates for packages?",
        "options": [
            "npm check",
            "npm updates",
            "npm outdated",
            "npm versions"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• npm outdated لیست packages با version جدیدتر\n" +
            "- Current: version فعلی نصب شده\n" +
            "- Wanted: latest version در semver range\n" +
            "- Latest: جدیدترین version در registry\n" +
            "- yarn upgrade-interactive برای Yarn"
    },
    {
        "id": 1419,
        "question": "What does npm start command do?",
        "options": [
            "Starts npm service",
            "Runs the 'start' script from package.json",
            "Installs all dependencies",
            "Creates a new project"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• npm start اجرای script با نام 'start' از package.json\n" +
            "- معمولاً development server را start می‌کند\n" +
            "- مثل npm run start اما بدون 'run'\n" +
            "- npm test نیز همین رفتار را دارد\n" +
            "- shortcut برای commonly used scripts"
    },
    {
        "id": 1420,
        "question": "How do you update a single package to latest version?",
        "options": [
            "npm update package-name",
            "npm upgrade package-name",
            "npm refresh package-name",
            "npm latest package-name"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• npm update package-name برای update یک package\n" +
            "- در محدوده semver range مشخص شده\n" +
            "- npm update بدون نام، همه را update می‌کند\n" +
            "- yarn upgrade package-name در Yarn\n" +
            "- package-lock.json نیز update می‌شود"
    },
    {
        "id": 1421,
        "question": "What is the Yarn equivalent of npm uninstall?",
        "options": [
            "yarn delete",
            "yarn remove",
            "yarn drop",
            "yarn uninstall"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• yarn remove package-name برای حذف\n" +
            "- از package.json و yarn.lock حذف می‌شود\n" +
            "- node_modules نیز پاک می‌شود\n" +
            "- معادل npm uninstall\n" +
            "- yarn remove react react-dom برای چند package"
    },
    {
        "id": 1422,
        "question": "How do you check npm version installed on your system?",
        "options": [
            "npm --version",
            "npm check version",
            "npm get version",
            "npm info"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• npm --version یا npm -v برای check کردن\n" +
            "- version npm روی سیستم شما\n" +
            "- node --version یا node -v برای Node.js\n" +
            "- yarn --version برای Yarn\n" +
            "- مهم برای compatibility و troubleshooting"
    },
    {
        "id": 1426,
        "question": "How do you clear npm cache?",
        "options": [
            "npm cache clear",
            "npm clean cache",
            "npm cache clean --force",
            "npm remove cache"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• npm cache clean --force برای پاک کردن cache\n" +
            "- --force ضروری است برای تایید\n" +
            "- وقتی corruption یا مشکلات عجیب دارید\n" +
            "- yarn cache clean در Yarn\n" +
            "- معمولاً نیازی به manual cleaning نیست"
    },
    {
        "id": 1391,
        "question": "What is the difference between npm install and npm ci?",
        "options": [
            "No difference, they are identical commands",
            "npm install is for production, npm ci for development",
            "npm ci is faster and uses exact versions from lock file",
            "npm ci only installs devDependencies"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• npm ci برای CI/CD و production builds\n" +
            "- از package-lock.json دقیقاً استفاده می‌کند\n" +
            "- node_modules را حذف و از نو نصب می‌کند\n" +
            "- سریع‌تر و deterministic است\n" +
            "- npm install می‌تواند package-lock را update کند"
    },
    {
        "id": 1393,
        "question": "What is the difference between dependencies and devDependencies?",
        "options": [
            "devDependencies are faster to install",
            "No difference, both are installed the same way",
            "dependencies are optional, devDependencies required",
            "dependencies for production, devDependencies for development",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• dependencies برای runtime نیاز است\n" +
            "- در production bundle می‌آیند\n" +
            "- devDependencies فقط برای development (testing, build tools)\n" +
            "- npm install --production فقط dependencies را نصب می‌کند\n" +
            "- eslint, jest در devDependencies قرار می‌گیرند"
    },
    {
        "id": 1395,
        "question": "What is the purpose of package-lock.json?",
        "options": [
            "Locks package.json from being edited",
            "Ensures exact dependency versions across installs",
            "Prevents npm install from running",
            "Encrypts sensitive package information"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• package-lock.json exact versions تمام dependencies را ذخیره می‌کند\n" +
            "- including nested dependencies\n" +
            "- deterministic installs را تضمین می‌کند\n" +
            "- در git commit می‌شود\n" +
            "- npm ci از آن استفاده می‌کند"
    },
    {
        "id": 1396,
        "question": "What does npm outdated command show?",
        "options": [
            "Old files in project directory",
            "Packages with available newer versions",
            "Deprecated npm commands used",
            "Unused dependencies in package.json"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• npm outdated لیست packages با versions جدیدتر\n" +
            "- Current, Wanted و Latest versions\n" +
            "- Wanted: مطابق با semver range در package.json\n" +
            "- Latest: جدیدترین version در npm registry\n" +
            "- برای planning updates مفید است"
    },
    {
        "id": 1399,
        "question": "What is npx used for?",
        "options": [
            "Installing packages permanently",
            "Executing packages without global install",
            "Removing unused packages",
            "Updating package.json automatically"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• npx packages را بدون global install اجرا می‌کند\n" +
            "- temporary download و execute\n" +
            "- همیشه latest version استفاده می‌کند\n" +
            "- npx create-react-app my-app\n" +
            "- جلوگیری از global pollution"
    },
    {
        "id": 1405,
        "question": "What is npm cache and when should you clean it?",
        "options": [
            "Cache stores installed packages for faster reinstalls",
            "Cache is browser cookies for npm website",
            "Cache stores user preferences",
            "Cache is temporary build files"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• npm cache downloaded packages را ذخیره می‌کند\n" +
            "- برای faster subsequent installs\n" +
            "- npm cache clean --force برای پاک کردن\n" +
            "- زمانی که corruption یا weird errors\n" +
            "- معمولاً نیازی به manual cleaning نیست"
    },
    {
        "id": 1431,
        "question": "What command creates a new Git repository?",
        "options": [
            "git create",
            "git start",
            "git init",
            "git new"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• git init برای ساخت repository جدید\n" +
            "- فولدر .git ایجاد می‌شود\n" +
            "- اولین command برای شروع Git\n" +
            "- در root directory پروژه اجرا می‌شود\n" +
            "- بعد از آن می‌توانید commit کنید"
    },
    {
        "id": 1432,
        "question": "How do you download a repository from GitHub?",
        "options": [
            "git download <url>",
            "git clone <url>",
            "git pull <url>",
            "git get <url>"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• git clone <url> برای دانلود repository\n" +
            "- تمام history و files را می‌آورد\n" +
            "- git clone https://github.com/user/repo.git\n" +
            "- یک folder جدید ایجاد می‌کند\n" +
            "- remote origin خودکار set می‌شود"
    },
    {
        "id": 1433,
        "question": "What command shows the current status of your repository?",
        "options": [
            "git info",
            "git state",
            "git status",
            "git check"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• git status برای دیدن وضعیت فعلی\n" +
            "- فایل‌های modified، staged، untracked\n" +
            "- branch فعلی\n" +
            "- commits ahead/behind\n" +
            "- پرکاربردترین command روزانه"
    },
    {
        "id": 1437,
        "question": "What command downloads changes from GitHub?",
        "options": [
            "git fetch",
            "git pull",
            "git get",
            "git download",
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• git pull برای دانلود و merge تغییرات\n" +
            "- git pull origin main\n" +
            "- معادل git fetch + git merge\n" +
            "- تغییرات دیگران را می‌آورد\n" +
            "- قبل از شروع کار روزانه اجرا کنید"
    },
    {
        "id": 1442,
        "question": "What file tells Git which files to ignore?",
        "options": [
            ".gitignore",
            ".ignore",
            "ignore.txt",
            "git-ignore.txt"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• .gitignore فایل برای ignore کردن\n" +
            "- node_modules/، .env، *.log\n" +
            "- در root directory قرار می‌گیرد\n" +
            "- patterns برای matching files\n" +
            "- sensitive data را ignore کنید"
    },
    {
        "id": 1443,
        "question": "How do you temporarily save uncommitted changes?",
        "options": [
            "git save",
            "git temp",
            "git stash",
            "git hold"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• git stash برای ذخیره موقت تغییرات\n" +
            "- git stash pop برای برگرداندن\n" +
            "- git stash list برای لیست stashes\n" +
            "- وقتی می‌خواهید branch عوض کنید\n" +
            "- git stash drop برای حذف"
    },
    {
        "id": 1444,
        "question": "What is the difference between git fetch and git pull?",
        "options": [
            "No difference, they are the same",
            "fetch downloads, pull downloads and merges",
            "fetch is faster than pull",
            "pull only works with main branch"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• git fetch فقط تغییرات را download می‌کند\n" +
            "- local branch را تغییر نمی‌دهد\n" +
            "- git pull = fetch + merge\n" +
            "- fetch برای دیدن تغییرات قبل از merge\n" +
            "- pull مستقیماً تغییرات را apply می‌کند"
    },
    {
        "id": 1445,
        "question": "How do you undo the last commit but keep changes?",
        "options": [
            "git undo",
            "git reset --soft HEAD~1",
            "git revert HEAD",
            "git back"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• git reset --soft HEAD~1 برای undo commit\n" +
            "- changes در staging area می‌مانند\n" +
            "- git reset --hard HEAD~1 همه را حذف می‌کند\n" +
            "- git reset --mixed HEAD~1 از staging خارج می‌کند\n" +
            "- فقط برای local commits که push نشده"
    },
    {
        "id": 1448,
        "question": "What is a Pull Request in GitHub?",
        "options": [
            "Pulling code from another repository",
            "Request to merge your branch into another branch",
            "Downloading repository files",
            "Creating a new branch"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• Pull Request (PR) درخواست merge است\n" +
            "- معمولاً از feature branch به main\n" +
            "- دیگران code را review می‌کنند\n" +
            "- discussion و comments\n" +
            "- بعد از approval، merge می‌شود"
    },
    {
        "id": 1450,
        "question": "What does git clone do differently than downloading a ZIP?",
        "options": [
            "ZIP is faster than clone",
            "Clone only downloads main branch",
            "Clone includes Git history, ZIP doesn't",
            "No difference between them"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• git clone تمام history و .git را می‌آورد\n" +
            "- می‌توانید commit، branch، push کنید\n" +
            "- ZIP فقط فایل‌های فعلی\n" +
            "- ZIP نمی‌توانید با Git کار کنید\n" +
            "- clone برای development، ZIP برای فقط دیدن"
    },
    {
        "id": 1456,
        "question": "What is TypeScript?",
        "options": [
            "A new programming language replacing JavaScript",
            "JavaScript with static type checking",
            "A JavaScript framework like React",
            "A database query language"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• TypeScript superset از JavaScript است\n" +
            "- اضافه کردن types به JavaScript\n" +
            "- compile می‌شود به JavaScript\n" +
            "- type errors در compile time\n" +
            "- همه JavaScript کد، TypeScript معتبر است"
    },
    {
        "id": 1461,
        "question": "How do you define an array type in TypeScript?",
        "options": [
            "let numbers: number[] = [1, 2, 3]",
            "let numbers: array<number> = [1, 2, 3]",
            "let numbers: [number] = [1, 2, 3]",
            "let numbers = number[1, 2, 3]"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• number[] برای array از numbers\n" +
            "- string[] برای array از strings\n" +
            "- Array<number> syntax دیگر (generics)\n" +
            "- (number | string)[] برای mixed types\n" +
            "- readonly number[] برای immutable"
    },
    {
        "id": 1462,
        "question": "What is an interface in TypeScript?",
        "options": [
            "A way to define object shape/structure",
            "A class that can't be instantiated",
            "A function type definition",
            "A variable declaration"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• interface برای define کردن object structure\n" +
            "- interface User { name: string; age: number }\n" +
            "- می‌تواند extend شود\n" +
            "- برای type checking objects\n" +
            "- compile نمی‌شود به JavaScript"
    },
    {
        "id": 1464,
        "question": "What is the difference between interface and type?",
        "options": [
            "No difference, completely interchangeable",
            "Interface can extend, type can't extend",
            "Interface for objects, type for unions and other types",
            "Type is deprecated, use interface"
        ],
        "correctOption": 2,
        "points": 20,
        "explanation": "• interface بیشتر برای object shapes\n" +
            "- type برای unions، primitives، tuples\n" +
            "- interface می‌تواند merged شود\n" +
            "- type برای complex types بهتر\n" +
            "- در React Props معمولاً interface"
    },
    {
        "id": 1466,
        "question": "What does the void type represent?",
        "options": [
            "Empty object",
            "Null or undefined",
            "Function that returns nothing",
            "Any type"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• void برای functions که return ندارند\n" +
            "- function log(message: string): void {}\n" +
            "- معمولاً برای side effects\n" +
            "- undefined return می‌توان داشت\n" +
            "- null نمی‌تواند assign شود (strict mode)"
    },
    {
        "id": 1470,
        "question": "What is a tuple in TypeScript?",
        "options": [
            "An array with fixed length and types",
            "A special kind of object",
            "An array of only numbers",
            "A function return type"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• tuple array با length و type ثابت\n" +
            "- let point: [number, number] = [10, 20]\n" +
            "- let user: [string, number] = ['Ali', 25]\n" +
            "- ترتیب types مهم است\n" +
            "- مثل Python tuples اما با type safety"
    },
    {
        "id": 1471,
        "question": "How do you define a type for React component props?",
        "options": [
            "interface Props { name: string }",
            "type Props = { name: string }",
            "props: { name: string }",
            "Both interface and type work"
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• هم interface و هم type کار می‌کنند\n" +
            "- interface Props { name: string; age?: number }\n" +
            "- const MyComponent = (props: Props) => {}\n" +
            "- یا destructure: ({ name, age }: Props)\n" +
            "- convention معمولاً interface در React"
    },
    {
        "id": 1472,
        "question": "What does the never type represent?",
        "options": [
            "Values that never occur",
            "Null values only",
            "Empty arrays",
            "Undefined values"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• never برای values که هرگز اتفاق نمی‌افتند\n" +
            "- functions که throw می‌کنند\n" +
            "- infinite loops\n" +
            "- unreachable code\n" +
            "- exhaustive checks در switch/if"
    },
    {
        "id": 1474,
        "question": "What is the unknown type in TypeScript?",
        "options": [
            "Same as any type",
            "Safer version of any, requires type checking",
            "For undefined values only",
            "For objects only"
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• unknown ایمن‌تر از any است\n" +
            "- نمی‌توانید بدون check استفاده کنید\n" +
            "- باید typeof یا type guard استفاده کنید\n" +
            "- let value: unknown = getValue()\n" +
            "- توصیه می‌شود به جای any"
    },
    {
        "id": 1475,
        "question": "How do you type a variable that can be null?",
        "options": [
            "let name: string | null",
            "let name: string?",
            "let name: nullable<string>",
            "let name: string = null"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• | null برای nullable types\n" +
            "- let name: string | null = null\n" +
            "- در strictNullChecks mode ضروری است\n" +
            "- string | undefined نیز متفاوت است\n" +
            "- optional (?) شامل undefined است"
    },
    {
        "id": 1480,
        "question": "What is the difference between type and interface for extending?",
        "options": [
            "interface uses extends, type uses &",
            "Only type can extend",
            "Only interface can extend",
            "Both use extends keyword"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• interface با extends کار می‌کند\n" +
            "- interface User extends Person {}\n" +
            "- type با & (intersection)\n" +
            "- type User = Person & { age: number }\n" +
            "- هر دو برای composition استفاده می‌شوند"
    },
    {
        "id": 1481,
        "question": "How do you type an event handler in React?",
        "options": [
            "React.MouseEvent<HTMLButtonElement>",
            "Event<HTMLInputElement>",
            "MouseEvent",
            "ButtonEvent"
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• React.MouseEvent<HTMLButtonElement> برای click\n" +
            "- React.ChangeEvent<HTMLInputElement> برای input\n" +
            "- React.FormEvent<HTMLFormElement> برای form\n" +
            "- const handleClick = (e: React.MouseEvent) => {}\n" +
            "- generic برای element type"
    },
    {
        "id": 1487,
        "question": "How do you type an async function?",
        "options": [
            "async function fetch(): Promise<Data> {}",
            "async function fetch(): async<Data> {}",
            "async function fetch(): Future<Data> {}",
            "async function fetch(): Async<Data> {}"
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• Promise<Type> برای async functions\n" +
            "- async function getData(): Promise<User> {}\n" +
            "- const getData = async (): Promise<User[]> => {}\n" +
            "- Promise<void> اگر return ندارد\n" +
            "- await نتیجه unwrap می‌کند"
    },
    {
        "id": 53,
        "question": "When encountering a temporary build error like 'Module not found: Error: Can't resolve \"path/index.js\"' after recent file changes, what is the first recommended action?",
        "options": [
            "Restart the development server using CTRL + C and npm start.",
            "Reinstall all dependencies by deleting node_modules and running npm install.",
            "Create a new package.json file and reinitialize the project.",
            "Clear browser cache and refresh the page."
        ],
        "correctOption": 0,
        "points": 20,
        "explanation": "• در برخی مواقع پس از تغییرات اخیر در فایل‌ها، build موقتاً دچار خطا می‌شود\n" +
            "- ری‌استارت سرور توسعه باعث ری‌بیلد کامل پروژه و رفع خطاهای موقت می‌شود\n" +
            "- در صورت تداوم خطا پس از ری‌استارت، حذف و نصب مجدد وابستگی‌ها مرحله بعدی است\n" +
            "- پاک‌کردن کش مرورگر تأثیری بر خطاهای build ندارد"
    },
    {
        "id": 54,
        "question": "What is the primary purpose of the src folder in a React project?",
        "options": [
            "It serves as the brain of the app, containing all the JavaScript and TypeScript files.",
            "It stores static assets like images and HTML templates.",
            "It maintains a snapshot of the project’s dependency tree.",
            "It contains the compiled production-ready code after the build process."
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• پوشه src محل اصلی کدهای منبع برنامه است\n" +
            "- شامل فایل‌های logic، component و ماژول‌های TypeScript/JavaScript است\n" +
            "- فایل‌های استاتیک مانند تصاویر معمولاً در پوشه public نگهداری می‌شوند\n" +
            "- خروجی نهایی build در پوشه dist یا build ذخیره می‌شود، نه در src"
    },
    {
        "id": 55,
        "question": "Which of the following statements about React components is correct?",
        "options": [
            "Components cannot return JSX directly and require a wrapper function.",
            "Components must always use function declarations; arrow functions are not allowed.",
            "Components must start with a capital letter to be recognized by React.",
            "Components can only be created using class syntax in modern React."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• در React نام کامپوننت‌ها باید با حرف بزرگ شروع شود تا React بتواند آن‌ها را از عناصر HTML متمایز کند\n" +
            "- استفاده از حروف کوچک باعث می‌شود React آن را به عنوان یک تگ HTML معمولی تفسیر کند\n" +
            "- می‌توان از function declaration یا arrow function برای تعریف کامپوننت استفاده کرد\n" +
            "- نیاز به هیچ wrapper خاصی برای بازگرداندن JSX وجود ندارد"
    },
    {
        "id": 56,
        "question": "In JSX, why do we use className instead of class for styling elements?",
        "options": [
            "className automatically applies camelCase conventions to all class names.",
            "className provides better browser compatibility for styled components.",
            "className is used to avoid conflicts with the class keyword in JavaScript.",
            "className enables conditional rendering of CSS styles automatically."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• در JSX از className به جای class استفاده می‌شود چون 'class' در JavaScript یک کلمه رزرو شده است\n" +
            "- JSX در نهایت به JavaScript کامپایل می‌شود، بنابراین استفاده از class باعث بروز خطا می‌شود\n" +
            "- React هنگام render مقدار className را به ویژگی HTML class تبدیل می‌کند\n" +
            "- این ویژگی رفتاری خاصی برای camelCase یا styled components ندارد"
    },
    {
        "id": 57,
        "question": "What is the purpose of adding 'emmet.includeLanguages': { 'javascript': 'javascript react' } in the settings.json file?",
        "options": [
            "It ensures automatic formatting of JSX elements on save.",
            "It automatically renames React components to match file names.",
            "It enables Emmet support in .js files for JSX syntax.",
            "It converts JavaScript files into TypeScript automatically."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• با این تنظیم، VS Code تشخیص می‌دهد که فایل‌های JavaScript حاوی JSX هستند\n" +
            "- این ویژگی پشتیبانی Emmet (شامل auto-complete و expand کردن shorthand) را برای JSX فعال می‌کند\n" +
            "- به طور پیش‌فرض Emmet فقط در فایل‌های .jsx یا .tsx فعال است\n" +
            "- این تنظیم هیچ ربطی به فرمت خودکار یا TypeScript ندارد"
    },
    {
        "id": 58,
        "question": "Why is React.Fragment or shorthand <> used in React components?",
        "options": [
            "To improve performance by optimizing how JSX is compiled.",
            "To ensure that JSX elements use camelCase property naming convention.",
            "To group multiple elements without adding extra DOM nodes.",
            "To automatically wrap elements with a parent <div> during rendering."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• از React.Fragment یا فرم کوتاه <> برای گروه‌بندی چند المنت JSX استفاده می‌شود\n" +
            "- این کار بدون افزودن تگ اضافی به DOM انجام می‌شود\n" +
            "- استفاده از div اضافی می‌تواند باعث به‌هم‌ریختگی ساختار و مشکلات در استایل شود\n" +
            "- Fragment هیچ تأثیری بر نام‌گذاری camelCase یا عملکرد JSX ندارد"
    },
    {
        "id": 59,
        "question": "Why are components like Image, Title, and Author separated into their own functional components?",
        "options": [
            "To enable independent styling and testing of each component.",
            "To promote reusability and maintainability in larger applications.",
            "To reduce the number of return statements in the parent component.",
            "To automatically fetch data for each component from an API."
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• جداسازی کامپوننت‌ها باعث افزایش قابلیت استفاده مجدد و نگهداری آسان‌تر کد می‌شود\n" +
            "- هر کامپوننت می‌تواند مستقل تست و استایل‌دهی شود\n" +
            "- کاهش تعداد return هدف اصلی نیست و داده‌ها به صورت خودکار fetch نمی‌شوند\n" +
            "- این ساختار به خوانایی و سازمان‌دهی بهتر پروژه کمک می‌کند"
    },
    {
        "id": 60,
        "question": "In the Greeting component, why is Person called as <Person /> instead of Person()?",
        "options": [
            "Calling Person() directly would break React's virtual DOM mechanism.",
            "Using <Person /> is required only if the component is a functional component.",
            "It is just a stylistic choice and both approaches work identically.",
            "React components must be invoked as JSX elements to ensure proper rendering.",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• در React، کامپوننت‌ها باید به صورت JSX (<Person />) فراخوانی شوند تا React بتواند lifecycle و virtual DOM را مدیریت کند\n" +
            "- فراخوانی مستقیم Person() ممکن است باعث عدم هماهنگی با سیستم رندر React شود\n" +
            "- این محدودیت فقط برای functional components نیست و برای class components هم صادق است\n" +
            "- این موضوع صرفاً یک انتخاب استایلی نیست و رفتار رندر را تحت تأثیر قرار می‌دهد"
    },
    {
        "id": 61,
        "question": "What is the purpose of React Developer Tools?",
        "options": [
            "To modify component styles directly in the browser.",
            "To inspect and debug the component hierarchy and props in a React.",
            "To automatically optimize React components for better performance.",
            "To convert class components to functional components automatically."
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• React Developer Tools برای بررسی و دیباگ کامپوننت‌ها و props در یک برنامه React استفاده می‌شود\n" +
            "- امکان مشاهده درخت کامپوننت‌ها، state و props به صورت زنده فراهم می‌کند\n" +
            "- این ابزار تغییر خودکار استایل یا بهینه‌سازی کامپوننت‌ها را انجام نمی‌دهد\n" +
            "- تبدیل خودکار نوع کامپوننت‌ها نیز توسط این ابزار انجام نمی‌شود"
    },
    {
        "id": 62,
        "question": "What is the main reason for using the style prop for inline styling in JSX?",
        "options": [
            "Inline styles allow using CSS syntax without transformations.",
            "Inline styles are more performant than external CSS in React applications.",
            "The style prop is a JavaScript object, allowing dynamic styling with computed properties.",
            "The style prop automatically converts CSS files into scoped modules."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• در JSX، ویژگی style به صورت یک شیء جاوااسکریپت تعریف می‌شود\n" +
            "- این ساختار امکان استفاده از مقادیر پویا و متغیرها را در استایل‌ها فراهم می‌کند\n" +
            "- از سینتکس CSS معمول (با خط فاصله) پشتیبانی نمی‌کند و باید از camelCase استفاده شود\n" +
            "- عملکرد آن بهتر از CSS خارجی نیست و برای استایل‌های ساده یا پویا مناسب‌تر است"
    },
    {
        "id": 63,
        "question": "What happens when an array index is used as the key instead of a unique identifier in a list of React components?",
        "options": [
            "The key will improve the rendering speed by using the index value.",
            "The list will render correctly, but reordering or modifying items may cause unexpected behavior.",
            "React will throw an error because key should be a string.",
            "The list items will automatically re-render even without state changes."
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• استفاده از index به عنوان key باعث می‌شود React در تغییر ترتیب یا حذف آیتم‌ها، تشخیص درستی از تغییرات نداشته باشد\n" +
            "- این موضوع می‌تواند به render اشتباه یا از دست رفتن state محلی منجر شود\n" +
            "- هرچند کامپوننت‌ها بدون خطا render می‌شوند، رفتار آن‌ها در به‌روزرسانی‌ها غیرقابل پیش‌بینی است\n" +
            "- کلید باید مقدار یکتا و پایدار (مانند id) داشته باشد تا الگوریتم diff به‌درستی کار کند"
    },
    {
        "id": 64,
        "question": "What is the purpose of using the spread operator (...) when passing props to a React component?",
        "options": [
            "It improves performance by reducing the size of the props object.",
            "It passes each property as separate props to the component.",
            "It combines all props into a single object for the component.",
            "It prevents unnecessary re-renders by memoizing the props."
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• عملگر spread در زمان ارسال props باعث می‌شود ویژگی‌های یک شیء به صورت جداگانه به کامپوننت منتقل شوند\n" +
            "- به عنوان مثال، اگر شیء شامل title و author باشد، این دو به صورت جداگانه به عنوان props در دسترس خواهند بود\n" +
            "- این روش عملکرد را بهبود نمی‌دهد بلکه فقط کد را خواناتر می‌کند\n" +
            "- props جدید ساخته نمی‌شود بلکه پراپرتی‌های شیء به همان شکل گسترش می‌یابند"
    },
    {
        "id": 65,
        "question": "Why is the key prop important when rendering a list of items in React?",
        "options": [
            "It ensures the props are passed correctly to the child components.",
            "It prevents the application from throwing an error during rendering.",
            "It automatically provides a unique ID for each list element in the DOM.",
            "It uniquely identifies a list item to optimize rendering and updates efficiently.",
        ],
        "correctOption": 3,
        "points": 20,
        "explanation": "• ویژگی key به React کمک می‌کند تا هر آیتم در لیست را به‌طور یکتا شناسایی کند\n" +
            "- این شناسایی باعث بهینه‌سازی فرآیند diffing و جلوگیری از render غیرضروری می‌شود\n" +
            "- در صورت عدم وجود key، React هشدار می‌دهد اما الزاماً خطا رخ نمی‌دهد\n" +
            "- key برای props یا ایجاد ID خودکار در DOM استفاده نمی‌شود"
    },
    {
        "id": 66,
        "question": "How can you pass the event object in an inline event handler in React?",
        "options": [
            "By accessing it directly within the onChange handler.",
            "By using an inline arrow function to pass the event object to the handler.",
            "By declaring a global variable named e to represent the event object.",
            "By importing the event object from the React library manually."
        ],
        "correctOption": 1,
        "points": 20,
        "explanation": "• در React، برای دریافت event باید از تابع پیکان (arrow function) استفاده کرد که رویداد را به عنوان آرگومان دریافت می‌کند\n" +
            "- مثال: (e) => handleChange(e) یا مستقیماً (e) => console.log(e.target.value)\n" +
            "- event به‌صورت خودکار به تابع منتقل نمی‌شود مگر آن‌که در تعریف تابع اشاره شود\n" +
            "- نیازی به تعریف متغیر global یا import جداگانه برای event نیست"
    },
    {
        "id": 67,
        "question": "What happens when you use an inline function directly in an onClick event in React?",
        "options": [
            "The function only runs when the button is clicked.",
            "The function runs immediately when the component renders.",
            "The function cannot use variables from outside its scope.",
            "The function must be defined outside the component to work."
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• در React اگر تابع ناشناس مستقیماً در رویداد onClick نوشته شود، فقط هنگام کلیک اجرا می‌شود\n" +
            "- این روش باعث می‌شود تابع در زمان render فراخوانی نشود\n" +
            "- تابع می‌تواند به متغیرها و state های بیرونی دسترسی داشته باشد\n" +
            "- نیازی نیست تابع خارج از کامپوننت تعریف شود مگر برای بهینه‌سازی"
    },
    {
        "id": 68,
        "question": "What is the default file where the root React component is rendered in a create-react-app project?",
        "options": [
            "public/index.html",
            "src/App.js",
            "src/index.js",
            "src/main.js"
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• در پروژه‌هایی که با create-react-app ساخته می‌شوند، ریشه برنامه در فایل src/index.js رندر می‌شود\n" +
            "- این فایل کامپوننت <App /> را در عنصر DOM با شناسه root که در public/index.html قرار دارد، mount می‌کند\n" +
            "- فایل App.js تنها کامپوننت اصلی برنامه است، نه محل رندر\n" +
            "- فایل index.html صرفاً ساختار پایه HTML را فراهم می‌کند و شامل هیچ کد React نیست"
    },
    {
        "id": 69,
        "question": "What is a fundamental rule about JSX syntax in React components?",
        "options": [
            "JSX can include multiple sibling elements without a parent.",
            "JSX must return a single element as its parent.",
            "JSX allows comments using // directly within the HTML structure.",
            "JSX requires every element to have a key prop."
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "• در JSX باید تمام المنت‌ها درون یک المنت والد (مثل div یا Fragment) قرار گیرند\n" +
            "- JSX نمی‌تواند چند المنت هم‌سطح را بدون والد برگرداند\n" +
            "- برای نوشتن کامنت باید از {/* comment */} استفاده کرد، نه //\n" +
            "- ویژگی key فقط هنگام ساخت لیست الزامی است، نه برای تمام المنت‌ها"
    },
    {
        "id": 70,
        "question": "When using the style prop in JSX, what is the correct syntax?",
        "options": [
            "The value should be an object with camelCase property names.",
            "The value can only be imported from an external CSS file.",
            "The value should be a string with CSS rules.",
            "The value must be written in a separate style tag inside JSX."
        ],
        "correctOption": 0,
        "points": 10,
        "explanation": "• در JSX ویژگی style باید به‌صورت یک شیء جاوااسکریپت تعریف شود\n" +
            "- نام ویژگی‌ها باید به شکل camelCase نوشته شوند (مثل backgroundColor به‌جای background-color)\n" +
            "- استایل‌ها نمی‌توانند به‌صورت رشته CSS معمولی نوشته شوند\n" +
            "- برای استایل‌های خارجی باید از فایل CSS مجزا استفاده کرد، نه از ویژگی style"
    },
    {
        "id": 71,
        "question": "In React, why is using camelCase important for attribute names in JSX?",
        "options": [
            "Because camelCase attributes ensure compatibility with CSS frameworks.",
            "Because React does not support traditional HTML attribute naming conventions.",
            "Because camelCase automatically optimizes rendering performance.",
            "Because JSX attributes map directly to JavaScript properties.",
        ],
        "correctOption": 3,
        "points": 10,
        "explanation": "• در JSX ویژگی‌ها (attributes) در واقع به ویژگی‌های جاوااسکریپت نگاشت می‌شوند\n" +
            "- به همین دلیل باید از نام‌گذاری camelCase استفاده شود (مثل onClick به‌جای onclick)\n" +
            "- این ساختار با نحوه‌ی تعریف پراپرتی‌ها در DOM مطابقت دارد\n" +
            "- ربطی به فریم‌ورک‌های CSS یا بهینه‌سازی عملکرد ندارد"
    },
    {
        "id": 72,
        "question": "Which of the following statements about import in React is true?",
        "options": [
            "Named imports cannot coexist with default imports in the same file.",
            "Default imports can include multiple variables in a single statement.",
            "Named imports require the same name as the exported variable.",
            "Default imports must always be renamed using the 'as' keyword."
        ],
        "correctOption": 2,
        "points": 10,
        "explanation": "• در import های نام‌دار باید نام دقیق متغیر export شده را استفاده کرد\n" +
            "- مثال: export const Button → import { Button } from './Button'\n" +
            "- default import فقط یک مقدار را دریافت می‌کند ولی می‌تواند همراه named import استفاده شود\n" +
            "- استفاده از as فقط برای تغییر نام اختیاری است و اجباری نیست"
    },
    {
        "id": 1495,
        "question": "What is the main difference between index.css and App.css in React?",
        "options": [
            "No difference, both are the same",
            "index.css for global styles, App.css for App component styles",
            "index.css is faster than App.css",
            "App.css only works with class components"
        ],
        "correctOption": 1,
        "points": 10,
        "explanation": "•  index.css در index.js import می‌شود → تمام برنامه دسترسی دارد\n" +
            "- App.css در App.js import می‌شود → فقط برای App component\n" +
            "- index.css اول load می‌شود، بنابراین برای global styles مناسب است\n" +
            "- این تفکیک باعث organization بهتر کد می‌شود\n" +
            "- گزینه 1 غلط: هر کدام کاربرد و scope مخصوص خود دارند"
    },
{
    "id": 1496,
    "question": "Where should you define CSS reset styles?",
    "options": [
        "In App.css",
        "In component CSS files",
        "In index.css",
        "In package.json"
    ],
    "correctOption": 2,
    "points": 10,
    "explanation": "• reset styles مثل * { margin: 0; padding: 0; } روی همه elements تاثیر دارد\n" +
        "- index.css اولین فایل CSS است که load می‌شود\n" +
        "- browser default styles را override می‌کند قبل از component styles\n" +
        "- اگر در App.css بگذارید، فقط App component را تحت تاثیر قرار می‌دهد\n" +
        "- گزینه 1 و 2 غلط: reset باید قبل از component styles اعمال شود"
},
{
    "id": 1497,
    "question": "Which file is imported first in a React application?",
    "options": [
        "App.css is always first",
        "index.css is imported before App.css",
        "Order doesn't matter",
        "React decides automatically"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "•index.js entry point برنامه است → اول اجرا می‌شود\n" +
        "- import './index.css' در index.js → اولین CSS\n" +
        "- سپس <App /> render می‌شود → App.css load می‌شود\n" +
        "- این ترتیب برای CSS specificity مهم است\n" +
        "- گزینه 3 غلط: order در CSS cascade بسیار مهم است"
},
{
    "id": 1498,
    "question": "Where should you define font-family for entire application?",
    "options": [
    "In every component CSS",
    "In App.css",
    "In index.css on body tag",
    "In HTML file directly"
    ],
    "correctOption": 2,
    "points": 10,
    "explanation": "•  body { font-family: 'Roboto', sans-serif; } به همه children inherit می‌شودCSS\n" +
        "- index.css global است → تمام برنامه را پوشش می‌دهد\n" +
        "- یک بار تعریف کنید، در همه components استفاده شود (DRY principle)\n" +
        "- گزینه 1 غلط: تکرار کد و hard to maintain\n" +
        "- گزینه 2 غلط: فقط App component و children آن را تحت تاثیر قرار می‌دهد"
},
{
    "id": 1499,
    "question": "Can you have multiple component-specific CSS files like App.css?",
    "options": [
    "No, only App.css is allowed",
    "Yes, each component can have its own CSS file",
    "Only for class components",
    "Maximum 3 CSS files allowed"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "• React محدودیتی روی تعداد CSS files ندارد\n" +
        "- هر component می‌تواند فایل CSS اختصاصی داشته باشد\n" +
        "- مثال: Header.js → import './Header.css'\n" +
        "- این روش component-based architecture را تقویت می‌کند\n" +
        "- separation of concerns: هر component styles خود را مدیریت می‌کند\n" +
        "- گزینه 1 غلط: هیچ محدودیتی وجود ندارد"
},
{
    "id": 1500,
    "question": "What type of styles should go in index.css?",
    "options": [
        "Component-specific styles",
        "Global styles, resets, and typography",
        "Only color definitions",
        "Animation keyframes only"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "• index.css برای shared styles استفاده می‌شود\n" +
        "- CSS resets: * { margin: 0; padding: 0; } → consistency در browsers\n" +
        "- Typography: body { font-family, font-size, line-height } → base text styling\n" +
        "- CSS variables: :root { --primary-color } → reusable values\n" +
        "- هر چیزی که در همه جای برنامه نیاز است\n" +
        "- گزینه 1 غلط: component-specific styles باید در فایل component باشد"
},
{
    "id": 1501,
    "question": "What happens if same CSS class is defined in both index.css and App.css?",
    "options": [
        "index.css always wins",
        "App.css overrides due to import order",
        "Error is thrown",
        "React merges them automatically"
    ],
    "correctOption": 1,
    "points": 20,
    "explanation": "•  index.css اول import می‌شود در index.js\n" +
        "- App.css بعد import می‌شود در App.js\n" +
        "- با specificity یکسان، stylesheet بعدی override می‌کند\n" +
        "- مثال: .button در index.css (قرمز) + .button در App.css (آبی) = آبی wins\n" +
        "- گزینه 3 غلط: CSS اجازه duplicate class names را می‌دهد"
},
{
    "id": 1502,
    "question": "Should CSS variables be defined in index.css or App.css?",
    "options": [
    "Always in App.css",
    "In index.css for global access",
    "In component CSS files",
    "CSS variables don't work in React"
],
    "correctOption": 1,
    "points": 10,
    "explanation": "•  CSS variables باید globally accessible باشند\n" +
        "- :root selector در index.css → تمام DOM tree دسترسی دارد\n" +
        "- مثال: :root { --primary-color: #3498db; }\n" +
        "- هر component می‌تواند var(--primary-color) استفاده کند\n" +
        "- یک جا تعریف، همه جا استفاده (single source of truth)\n" +
        "- گزینه 1 غلط: App.css فقط App component و children را پوشش می‌دهد"
},
{
    "id": 1503,
    "question": "Where should media queries for responsive layout go?",
    "options": [
    "Only in index.css",
    "Only in component CSS files",
    "Can be in both depending on scope",
    "Media queries don't work in React"
],
    "correctOption": 2,
    "points": 10,
    "explanation": "• media queries بسته به scope قرار می‌گیرند\n" +
        "- Global breakpoints در index.css: مثل font-size برای mobile\n" +
        "- Component-specific در CSS مربوطه: مثل .header flex-direction\n" +
        "- best practice: shared breakpoints → index.css, unique → component CSS\n" +
        "- این flexibility باعث maintainability می‌شود\n" +
        "- گزینه 1 غلط: محدود کردن media queries به index.css منطقی نیست"
},
{
    "id": 1504,
    "question": "What is the best practice for organizing CSS in React?",
    "options": [
        "Put everything in index.css",
        "Global in index.css, component-specific in separate files",
        "Never use CSS, only inline styles",
        "Use only App.css for entire app"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "•  index.css: resets، globals، typography، variables → shared foundation\n" +
        "- Component CSS: specific styles فقط برای آن component → encapsulation\n" +
        "- این approach scalability را بهبود می‌دهد در projects بزرگ\n" +
        "- debugging آسان‌تر: می‌دانید کدام style کجاست\n" +
        "- گزینه 1 غلط: همه چیز در یک فایل → hard to maintain"
},
{
    "id": 1505,
    "question": "Can you use CSS preprocessors like SASS with both index.css and App.css?",
    "options": [
        "No, only vanilla CSS allowed",
        "Yes, rename to .scss and configure",
        "Only index.css can be SASS",
        "SASS doesn't work in React"
    ],
    "correctOption": 1,
    "points": 20,
    "explanation": "• React preprocessors را support می‌کند\n" +
        "- index.css → index.scss و App.css → App.scss rename کنید\n" +
        "- npm install sass برای setup\n" +
        "- import './index.scss' مثل CSS معمولی کار می‌کند\n" +
        "- SASS features: variables، nesting، mixins قابل استفاده\n" +
        "- گزینه 1 غلط: React محدودیت روی CSS format ندارد"
},
{
    "id": 1506,
    "question": "Where should normalize.css or reset.css be imported?",
    "options": [
    "In App.css",
    "In index.js/main.jsx before other CSS",
    "In component files",
     "Not needed in React"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "•  normalize/reset باید اول از همه load شود\n" +
        "- در index.js: import 'normalize.css' → سپس import './index.css'\n" +
        "- دلیل: browser defaults را reset می‌کند قبل از custom styles\n" +
        "- اگر بعد import شود،ممکن است custom styles را override کند\n" +
        "- order of imports = order of application در CSS\n" +
        "- گزینه 1 غلط: App.css بعد از index load می‌شود، خیلی دیر است"
},
{
    "id": 1507,
    "question": "What is the disadvantage of putting all styles in index.css?",
    "options": [
    "It's slower",
    "Hard to maintain, no component separation",
    "index.css has size limit",
    "Doesn't work with React"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "• تمام styles در یک فایل مشکلات زیاد دارد\n" +
        "- Maintenance سخت: 1000+ lines در یک فایل → پیدا کردن style مشکل\n" +
        "- No separation: نمی‌دانید کدام style برای کدام component است\n" +
        "- Naming conflicts بیشتر: .button ممکن است 5 جا استفاده شود\n" +
        "- Team collaboration سخت: همه در یک فایل تغییر می‌دهند → conflicts\n" +
        "- گزینه 1 غلط: performance تفاوت قابل توجهی ندارد"
},
{
    "id": 1508,
    "question": "Can you conditionally import CSS files in React?",
    "options": [
        "No, all imports are static",
        "Yes, using dynamic import()",
        "Only in development mode",
        "Only for index.css"
    ],
    "correctOption": 1,
    "points": 20,
    "explanation": "•  JavaScript dynamic import را support می‌کند\n" +
        "- مثال: if (darkMode) { import('./theme-dark.css') }\n" +
        "- در runtime بر اساس شرایط CSS load می‌شود\n" +
        "- Use case: theme switching، conditional styling\n" +
        "- Code splitting برای CSS → bundle size کمتر\n" +
        "- گزینه 1 غلط: import() statement dynamic است نه static"
},
{
    "id": 1509,
    "question": "What's the alternative to traditional CSS files in React?",
    "options": [
        "No alternatives exist",
        "CSS Modules, Styled Components, Tailwind",
        "Only inline styles",
        "HTML style tags"
    ],
    "correctOption": 1,
    "points": 10,
    "explanation": "• React ecosystem راه‌های مختلف styling دارد\n" +
        "- CSS Modules: scoped styles → no global conflicts\n" +
        "- Styled Components: CSS-in-JS → dynamic styling with props\n" +
        "- Tailwind CSS: utility-first → rapid development\n" +
        "- هر approach برای use case خاص بهینه است\n" +
        "- گزینه 1 غلط: alternatives زیادی وجود دارند و widely used هستند"
},
{
    "id": 1510,
    "question": "Why is it recommended to avoid @import in CSS files in React?",
    "options": [
    "@import doesn't work in React",
    "@import blocks parallel downloads, slows loading",
    "@import is only for SASS",
    "@import is deprecated in CSS"
    ],
    "correctOption": 1,
    "points": 20,
    "explanation": "• @import performance را کاهش می‌دهد\n" +
        "- @import sequential است: فایل 1 → سپس فایل 2 → سپس فایل 3\n" +
        "- JavaScript import parallel download می‌کند: همه با هم\n" +
        "- مثال بد: @import url('other.css'); در index.css\n" +
        "- مثال خوب: import './other.css' در JS file\n" +
        "- Build tools مثل Webpack این را بهتر optimize می‌کنند"
},


]
