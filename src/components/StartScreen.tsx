import {StartScreenProps} from "../type/QuizTypes";
import {useState} from "react";
import {mockQuestions} from "../mock/mockQuestions";


export function StartScreen({ numQuestions, dispatch }: StartScreenProps) {
    const [selectedLevel, setSelectedLevel] = useState<"fundamental" | "intermediate" | "advanced" | null>(null);
    const [startRange, setStartRange] = useState<number>(1);
    const [endRange, setEndRange] = useState<number>(10);
    const [showRangeSelection, setShowRangeSelection] = useState<boolean>(false);


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
            const count = endRange - startRange + 1;

            dispatch({
                type: "selectLevelWithCount",
                payload: {
                    level: selectedLevel,
                    count: count,
                    startFrom: startRange
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
        const selectedCount = Math.max(0, endRange - startRange + 1)

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
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                min="1"
                                max={maxQuestions}
                                value={startRange === 0 ? '' : startRange}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    // اجازه خالی بودن یا فقط اعداد
                                    if (value === '' || /^\d+$/.test(value)) {
                                        const numValue = value === '' ? 0 : parseInt(value);
                                        setStartRange(numValue);
                                    }
                                }}
                                onBlur={(e) => {
                                    let value = parseInt(e.target.value);
                                    if (isNaN(value) || value < 1) {
                                        value = 1;
                                    } else if (value > maxQuestions) {
                                        value = maxQuestions;
                                    }

                                    setStartRange(value);

                                    // تنظیم endRange اگر نیاز باشد
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
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                min={startRange}
                                max={maxQuestions}
                                value={endRange === 0 ? '' : endRange}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    // اجازه خالی بودن یا فقط اعداد
                                    if (value === '' || /^\d+$/.test(value)) {
                                        const numValue = value === '' ? 0 : parseInt(value);
                                        setEndRange(numValue);
                                    }
                                }}
                                onBlur={(e) => {
                                    let value = parseInt(e.target.value);
                                    const minValue = Math.max(1, startRange);
                                    if (isNaN(value) || value < minValue) {
                                        value = minValue;
                                    } else if (value > maxQuestions) {
                                        value = maxQuestions;
                                    }

                                    setEndRange(value);
                                }}
                                className="range-input"
                            />
                        </label>
                    </div>

                    <p className="optimization-info" style={{
                        fontSize: '1.3rem',
                        color: 'var(--color-theme)',
                        marginTop: '1rem',
                        padding: '1rem',
                        backgroundColor: 'rgba(26, 230, 181, 0.1)',
                        borderRadius: '8px'
                    }}>
                        ⚡ Optimized: Only {selectedCount} questions will be loaded (not all {maxQuestions})
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
                {levelInfo.map((level) => {
                    const isSelected = selectedLevel === level.key;

                    return (
                        <div
                            key={level.key}
                            className={`level-card ${level.count === 0 ? 'disabled' : ''} ${
                                isSelected ? 'selected' : ''
                            }`}
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
                                    <span className="level-points">{level.points} points for each question</span>
                                </div>
                            </div>
                            <div className="level-arrow">→</div>
                            {isSelected && (
                                <div className="selected-indicator">
                                    <span>✓</span>
                                </div>
                            )}
                        </div>
                    );
                })}
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
