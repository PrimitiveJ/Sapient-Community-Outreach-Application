import styled from 'styled-components';

const LocalStyles = styled.div`

    .eventCardBtn {
        margin-top: 20px;
        background-color: #583e28;
        border-color: #583e28;
    }   

    .eventCardBtn:active,
    .eventCardBtn:hover,
    .eventCardBtn:focus {
        border-color: #583e28 !important;
        box-shadow: none;
    }

    .card-title.eventTitle {  
        color: #affba9;
    }

    .card-header.eventDate {
        color: #fcfeb3;
    }   


`;

export default LocalStyles;