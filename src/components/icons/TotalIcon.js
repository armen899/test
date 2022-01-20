import React from 'react';

const TotalIcon = (props) => {
    const { color } = props
    return (
        <svg width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.4"
                d="M22.9166 12.4999C22.9166 18.253 18.253 22.9166 12.4999 22.9166C6.74679 22.9166 2.08325 18.253 2.08325 12.4999C2.08325 6.74784 6.74679 2.08325 12.4999 2.08325C18.253 2.08325 22.9166 6.74784 22.9166 12.4999Z"
                fill={color} />
            <path
                d="M16.5207 9.06759L14.8332 14.4009C14.7707 14.6197 14.5936 14.7968 14.3748 14.8603L9.06233 16.5259C8.70816 16.6416 8.36441 16.2968 8.47899 15.9426L10.1457 10.5988C10.2082 10.3801 10.3852 10.2134 10.604 10.1405L15.9373 8.47384C16.3019 8.35926 16.6352 8.70301 16.5207 9.06759Z"
                fill={color} />
        </svg>

    );
}

export default TotalIcon;
TotalIcon.defaultProps = {
    color: "black",
};