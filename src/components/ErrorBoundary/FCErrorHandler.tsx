import React, { useState, useEffect } from "react";
import ErrorFallback from "./ErrorFallback";

// Custom hook
const userErrorHandler = () => {
    const [error, setError] = useState<Error | null>(null);

    const handleError = (err: Error) => {
        setError(err);
    }

    return { error, handleError }
}

const FCErrorHandler: React.FC = () => {
    const { error, handleError } = userErrorHandler();

    useEffect(() => {
        try {
            // Code that might through an error.
        } catch (err: any) {
            handleError(err);
        }
    }, [handleError])

    if (error) {
        return <ErrorFallback error={error} errorInfo={null} />;
    }
    return <div>Interactive UI</div>
}

export default FCErrorHandler;
