import React from "react";
import PropTypes from "prop-types";

const Loader = ({
    width,
    height,
    color,
    label,
    className,
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke={color}
        aria-label={label}
        className={className}
    >
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>
        </g>
    </svg>
);

Loader.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
};

Loader.defaultProps = {
    label: "",
    className: "",
};

export default Loader;
