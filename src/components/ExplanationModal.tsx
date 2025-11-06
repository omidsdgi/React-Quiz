import { useEffect } from 'react';
import {ExplanationModalProps} from "../type/QuizTypes";

export function ExplanationModal({
                                     isOpen,
                                     isCorrect,
                                     explanation,
                                     onClose
                                 }: ExplanationModalProps) {

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
            return () => window.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                animation: 'fadeIn 0.5s ease'
            }}
        >
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: 'var(--color-darkest)',
                    borderRadius: '12px',
                    padding: '2.5rem',
                    maxWidth: '500px',
                    width: '90%',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    border: `3px solid ${isCorrect ? 'var(--color-theme)' : '#ee5a52'}`
                }}
            >
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '3rem',
                        backgroundColor: isCorrect ? 'rgba(26, 230, 181, 0.1)' : 'rgba(238, 90, 82, 0.1)',
                        color: isCorrect ? 'var(--color-theme)' : '#ee5a52'
                    }}>
                        {isCorrect ? '✓' : '✗'}
                    </div>

                    <h3 style={{
                        margin: 0,
                        fontSize: '1.8rem',
                        color: isCorrect ? 'var(--color-theme)' : '#ee5a52',
                        fontWeight: 'bold'
                    }}>
                        {isCorrect ? 'پاسخ صحیح!' : 'پاسخ نادرست'}
                    </h3>
                </div>

                {/* متن توضیحات */}
                <div style={{
                    backgroundColor: 'var(--color-dark)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    marginBottom: '2rem',
                    lineHeight: '1.8',
                    fontSize: '2rem',
                    color: 'var(--color-light)',
                    textAlign: 'justify',
                    direction: 'rtl'
                }}>
                    {explanation}
                </div>

                {/* دکمه ادامه */}
                <button
                    onClick={onClose}
                    className="btn btn-ui"
                    style={{
                        width: '100%',
                        padding: '1.2rem',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        backgroundColor: isCorrect ? 'var(--color-theme)' : '#ee5a52',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    ادامه
                </button>
            </div>

            {/* استایل انیمیشن */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
}