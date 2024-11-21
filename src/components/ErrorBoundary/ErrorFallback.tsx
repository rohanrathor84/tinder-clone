import React, { ErrorInfo } from "react";
import "./ErrorFallback.scss";

interface IErrorFallbackProps {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error, errorInfo }) => {
    return (
        <div className="error-fallback">
            <h1>Something went wrong.</h1>
            <p>We apologize for the inconvenience. Please try refreshing the page, or contact support if the problem persists.</p>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {error && error.toString()}
                <br />
                {errorInfo?.componentStack}
            </details>
        </div>
    )
}

export default ErrorFallback;