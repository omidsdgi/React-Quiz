import {StartScreenProps} from "../type/QuizTypes";
import {useState} from "react";
import {mockQuestions} from "../mock/mockQuestions";


export function StartScreen({ numQuestions, dispatch, state }: StartScreenProps) {
    const [selectedLevel, setSelectedLevel] = useState<"fundamental" | "intermediate" | "advanced" | null>(null);
    const [startRange, setStartRange] = useState<number>(1);
    const [endRange, setEndRange] = useState<number>(10);
    const [showRangeSelection, setShowRangeSelection] = useState<boolean>(false);

    // تعداد سوالات موجود برای هر سطح - با safe access
    const getLevelQuestionCount = (level: "fundamental" | "intermediate" | "advanced"): number => {

        const pointsMap = {
            fundamental: 10,
            intermediate: 20,
            advanced: 30
        };
        return mockQuestions.filter(q => q.points === pointsMap[level]).length;
    };

    const handleLevelSelect = (level: "fundamental" | "intermediate" | "advanced") => {
        const questionCount = getLevelQuestionCount(level);

        // اگر سوالی موجود نباشد
        if (questionCount === 0) {
            console.warn(`No questions available for ${level} level`);
            return;
        }

        setSelectedLevel(level);
        setShowRangeSelection(true);
        setEndRange(Math.min(10, questionCount));
        setStartRange(1);
    };

    const handleRangeSubmit = () => {
        if (selectedLevel && startRange <= endRange && startRange > 0) {
            dispatch({
                type: "selectRange",
                payload: {
                    level: selectedLevel,
                    startIndex: startRange,
                    endIndex: endRange
                }
            });
            setShowRangeSelection(false);
        }
    };

    const resetSelection = () => {
        setShowRangeSelection(false);
        setSelectedLevel(null);
        setStartRange(1);
        setEndRange(10);
    };

    const levelInfo = [
        {
            key: "fundamental" as const,
            title: "Fundamental",
            description: "Basic React concepts and fundamentals",
            icon: "🟢",
            difficulty: "Beginner",
            points: 10,
            count: getLevelQuestionCount("fundamental")
        },
        {
            key: "intermediate" as const,
            title: "Intermediate",
            description: "Hooks, state management, and advanced patterns",
            icon: "🟡",
            difficulty: "Intermediate",
            points: 20,
            count: getLevelQuestionCount("intermediate")
        },
        {
            key: "advanced" as const,
            title: "Advanced",
            description: "Performance, testing, and complex architectures",
            icon: "🔴",
            difficulty: "Expert",
            points: 30,
            count: getLevelQuestionCount("advanced")
        }
    ];

    if (showRangeSelection && selectedLevel) {
        const maxQuestions = getLevelQuestionCount(selectedLevel);
        const selectedLevelInfo = levelInfo.find(info => info.key === selectedLevel);

        return (
            <div className="start">
                <h2>Select Question Range</h2>
                <div className="level-info-selected">
                    <span className="level-icon">{selectedLevelInfo?.icon}</span>
                    <div className="level-details">
                        <h3>{selectedLevelInfo?.title} Level</h3>
                        <p>{selectedLevelInfo?.description}</p>
                        <p className="level-stats">
                            {maxQuestions} questions available • {selectedLevelInfo?.points} points each
                        </p>
                    </div>
                </div>

                <div className="range-selection">
                    <div className="range-input-group">
                        <label>
                            From question:
                            <input
                                type="number"
                                min="1"
                                max={maxQuestions}
                                value={startRange}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (inputValue === '') {
                                        return;
                                    }
                                    const value = parseInt(inputValue);
                                    if (!isNaN(value)) {
                                        setStartRange(value);
                                    }
                                }}
                                onBlur={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (isNaN(value) || value < 1) {
                                        setStartRange(1);
                                    } else if (value > maxQuestions) {
                                        setStartRange(maxQuestions);
                                    }

                                    if (endRange < value) {
                                        setEndRange(value);
                                    }
                                }}
                                className="range-input"
                            />
                        </label>

                        <label>
                            To question:
                            <input
                                type="number"
                                min={startRange}
                                max={maxQuestions}
                                value={endRange}
                                onChange={(e) => {
                                    const inputValue = e.target.value;
                                    if (inputValue === '') {
                                        return;
                                    }
                                    const value = parseInt(inputValue);
                                    if (!isNaN(value)) {
                                        setEndRange(value);
                                    }
                                }}
                                onBlur={(e) => {
                                    const value = parseInt(e.target.value);
                                    if (isNaN(value) || value < startRange) {
                                        setEndRange(startRange);
                                    } else if (value > maxQuestions) {
                                        setEndRange(maxQuestions);
                                    }
                                }}
                                className="range-input"
                            />
                        </label>
                    </div>

                    <p className="range-info">
                        Selected: {Math.max(0, endRange - startRange + 1)} questions
                        • Total points: {Math.max(0, endRange - startRange + 1) * (selectedLevelInfo?.points || 0)}
                    </p>

                    <div className="range-buttons">
                        <button
                            className="btn btn-ui"
                            onClick={handleRangeSubmit}
                            disabled={startRange > endRange || endRange > maxQuestions || startRange < 1}
                        >
                            Confirm Selection
                        </button>
                        <button
                            className="btn"
                            onClick={resetSelection}
                        >
                            Back to Levels
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>Choose your difficulty level</h3>

            {numQuestions > 0 ? (
                <p className="selected-info">
                    {numQuestions} questions selected - Ready to start!
                </p>
            ) : (
                <p className="instruction">
                    Select a level and question range to begin
                </p>
            )}

            <div className="level-list">
                {levelInfo.map((level) => (
                    <div
                        key={level.key}
                        className={`level-card ${level.count === 0 ? 'disabled' : ''}`}
                        onClick={() => level.count > 0 && handleLevelSelect(level.key)}
                    >
                        <div className="level-icon">{level.icon}</div>
                        <div className="level-content">
                            <div className="level-header">
                                <h4>{level.title}</h4>
                                <span className="level-difficulty">{level.difficulty}</span>
                            </div>
                            <p className="level-description">{level.description}</p>
                            <div className="level-stats">
                                <span className="level-count">{level.count} questions</span>
                                <span className="level-points">{level.points} pts each</span>
                            </div>
                        </div>
                        <div className="level-arrow">→</div>
                    </div>
                ))}
            </div>

            {numQuestions > 0 && (
                <button
                    className="btn btn-ui start-quiz-btn"
                    onClick={() => dispatch({type: "start"})}
                >
                    Start Quiz ({numQuestions} questions)
                </button>
            )}
        </div>
    );
}
