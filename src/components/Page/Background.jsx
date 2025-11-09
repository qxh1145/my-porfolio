import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Threads from "./Threads";

const Background = () => {
    const [threadColor, setThreadColor] = useState([0, 0, 0]);
    const [borderColor, setBorderColor] = useState('#333');

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
                    setThreadColor(theme === 'dark' ? [1, 1, 1] : [0, 0, 0]);
                    setBorderColor(theme === 'dark' ? '#FFF' : '#333');
                }
            });
        });

        observer.observe(document.body, { attributes: true });

        // Set initial color
        const initialTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        setThreadColor(initialTheme === 'dark' ? [1, 1, 1] : [0, 0, 0]);
        setBorderColor(initialTheme === 'dark' ? '#FFF' : '#333');

        return () => observer.disconnect();
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                inset: 50,
                border: `2px solid ${borderColor}`,
                overflow: "hidden",
                padding: 0,
                boxSizing: "border-box",
                zIndex: -1,               // send to background
                pointerEvents: "none",    // let clicks pass through
            }}
        >
            <Threads
                color={threadColor}
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
};

export default Background;
