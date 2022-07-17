
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

    .modal-content input,
    .modal-content select {
        margin-bottom: 15px;
    }

    .modal-content button {
        background-color: #81b88f;
        border-color: #7b9175;
    }

    .modal-content .btn.btn-primary:hover {
        background-color: #7eaf74;
        border-color: #7eaf74;
    }

    .modal-content .btn.btn-secondary {
        background-color: #2c5632;
        border-color: #2c5632;
    }

    .modal-content .btn.btn-secondary:hover {
        background-color: #1c3a1f;
        /* border-color: #796666; */
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