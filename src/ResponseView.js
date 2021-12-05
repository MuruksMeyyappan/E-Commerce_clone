import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-width: 640px) {
      ${props}
    }
  `;
};
