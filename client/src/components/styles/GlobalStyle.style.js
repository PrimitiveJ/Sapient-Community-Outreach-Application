
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    p {
        color: ${({theme}) => theme.textColorOne};
    }


    /*
        Global modal styles start
    */
    .modal-content {
        background-color: #629072;
    }

    .modal-title {
        color: #e4e7ca;
    }

    .modal-body label {
        color: white;
    }

    .modal-content button {
        background-color: #81b88f;
        border-color: #7b9175;
    }

    .modal-content .btn.btn-primary:hover {
        background-color: #afd0a9;
        border-color: #9ab597;
    }

    .modal-content .btn.btn-secondary {
        background-color: #9e7373;
        border-color: #796666;
    }

    .modal-content .btn.btn-secondary:hover {
        background-color: #775757;
        border-color: #796666;
    }

    .modal-body input[type="checkbox"] {
        margin-left: 10px;
        margin-right: 5px;
    }

    .modal-body form h1 {
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .modal-body .form-label {
        color: #aeefaf;
        letter-spacing: 1px;
    }

    .modal-body small {
        color: white !important;
    }
    /*
        Global modal styles end
    */
`;

export default GlobalStyle;