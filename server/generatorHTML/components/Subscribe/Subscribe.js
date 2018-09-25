import React from 'react';

class Subscribe extends React.Component {
    render() {
        const { placeholder, buttonText } = props;

        return (
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                />
                <button>{buttonText}</button>
            </div>
        );
    }
}
