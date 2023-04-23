/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import styled from "styled-components";

// TransitionStyle
const TransitionStyle = styled.div`
    .transition-enter {
        opacity: 0.01;
        transform: translate(0, -10px);
    }
    .transition-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 500ms ease-in;
    }
    .transition-exit {
        opacity: 1;
        transform: translate(0, 0);
    }
    .transition-exit-active {
        opacity: 0.01;
        transform: translate(0, 10px);
        transition: all 500ms ease-in;
    }
`;

const HomeLayout = styled.div`
    width: 100%;
`;

export { TransitionStyle, HomeLayout };
