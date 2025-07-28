import React from "react";

interface FooterProps {
    children: React.ReactNode;
}
export default function Footer({children}: FooterProps) {
    return (
        <div className="footer">
            {children}
        </div>
    );
}