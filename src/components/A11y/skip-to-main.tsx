/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { memo } from "react";

/* -------------------------- SkipToMain PropTypes -------------------------- */
interface Props {
    content: string;
}

const SkipToMain = ({ content = "0" }: Props) => (
    <div>
        <a
            className="skip-main animated fadeIn"
            href={`#${content}`}
            aria-label="Skip navigation and go to main content"
        >
            Skip to main content
        </a>
    </div>
);

export default memo(SkipToMain);
