
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    p {
        color: ${({theme}) => theme.textColorOne};
    }

    /*
        Override bootstrap
    */
    .container {
        padding: 0;
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
        margin-right: 5px;
    }

    .modal-body small.error,
    .modal-body .form-label.form-label.error {
        color: #ffee77;
        font-weight: 400;
        font-family: cursive;
        margin-top: 15px;
    }

    .modal-content input,
    .modal-content select {
        margin-bottom: 15px;
    }

    .btn {
        transition: filter 0.25s;
    }

    .btn:active,
    .btn:focus {
        box-shadow: none !important;
    }

    .btn:hover {
        filter: sepia(0.6);
    }

    .modal-content .btn-close {
        background-color: #8bb888;
        opacity: 1;
        color: white;
    }

    .modal-content button {
        /* background-color: #81b88f; */
        background-color: #4a3415;
        border-color: #7b9175;
    }

    .modal-content .btn-primary:hover,
    .modal-content .btn-primary:active,
    .modal-content .btn-primary:focus {
        /* background-color: #7eaf74; */
        background-color: #4a3415;
        border-color: #7eaf74;
        box-shadow: none;
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

    .modal-body form h1,
    .modal-body form h2,
    .modal-header h2 {
        color: white;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }

    .modal-body form h2 {
        font-size: 1.5rem;
    }

    .modal-body .form-label {
        color: #abcaab;
        font-family: cursive;
        /* letter-spacing: 1px; */
    }

    .modal-body small {
        color: white;
    }

    .calendar button {
        background-color: #c9ffdb;
    }

    .rbc-day-bg {
        background-color: #44664b;
    }

    .rbc-button-link {
        background: none !important;
    }

    .rbc-button-link {
        color: white;
    }
    /*
        Global modal styles end
    */
`;

export default GlobalStyle;