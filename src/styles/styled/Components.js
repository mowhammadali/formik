import styled , {css} from "styled-components/macro";

export const PrimaryBtn = styled.button`
    font-size: 18px;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.6rem;
    color: white;
    background-color: ${props => props.theme.primaryColor};
    ${props => props.disabeBtn && css`
         opacity: 0.6;
        cursor: auto !important;
        `
    }
`