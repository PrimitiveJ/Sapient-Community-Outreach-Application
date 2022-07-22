
import styled from 'styled-components';

export default styled.div`

    /* ALL LOCAL PAGE STYLES GO HERE */

    /* 
        These styles are applied to the main page container.
        This is basically the local 'body' of the page.
    */
    /* font-family: 'quicksand';
    font-weight: lighter; */
    /* background: rgba(92,129,202,1); */
    color:rgb(0, 0, 0);

    font-family: 'Josefin Sans';
    font-weight: 900;

    h1 {
        color: white;
    }

    h2 {
        font-weight: inherit;
    }

    .card {
        /* background-color: #8c9cff; */
        background-color: white;
    }

    .card-text {
        color: black;
    }

    .card-title {
        position: relative;
        color: #003cff;
        width: fit-content;
        font-weight: 900;
        /* text-decoration: underline; */
    }

    .card-title::after {
        z-index: 20;
        content: '';
        background-color: #003cff;
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
    }

    .main-container {
        padding-top: 2vw;
        padding-left: 5vw;
        padding-right: 5vw;
        padding-bottom: 5vw;
    }

    .main-container .accordion-item {
        background-color: #384539 !important;
    }

    .card {
        background-color: #a0ada2 !important;
    }   

    .main-container img {
        box-shadow: 0 0 20px #666666;
        border-radius: 20px;
        object-fit: cover;
        width: 100%;
        height: 35vw;
        max-height: 550px;
    }

    .event-date-title {
        text-align: right;
    }

    span.blue {
        color: #1a39a1;
    }

    span.green {
        color: #deffdd;
    }

    .description-box {
        margin-top: 25px !important;
        margin-bottom: 30px !important;
    }

    .description-box p {
        color: black;
    }

    .description-box h3 {
        margin-bottom: 15px !important;
    }

    .signup-participant-btn {
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    .event-head-info {
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 15px;
    }

    .event-body-info.row {
        margin-top: 30px;
        text-align: center;
    }

    .event-body-info > div {
        margin-bottom: 5px;
        margin-top: 5px;
    }

    // General page styling
    .accordion {
        box-shadow: 0px 13px 23px -13px rgba(0,0,0,0.5);
        width: 420px;
        background-color: transparent;
        margin: auto;
        margin-top: 50px;
    }

    .title {
        height: 30px;
        width: 400px;
        background-color: rgba(0,0,0, .4);
        color: #ffddcc;
        text-transform: uppercase;
        letter-spacing: 1px;
        text-align: left;
        line-height: 2;
        font-weight: lighter;
        position: relative;
        padding: 10px;
        z-index: 2000;
        border-radius: 4px;
        margin-top: 2px;
        transition: all .2s ease-in;
    }

    .title-text {
        margin-left: 10px;
    }

    .title:hover {
        cursor: pointer;
        background-color: rgba(0,0,0, .5);
    }

    .title:active {
        background-color: rgba(0, 0, 0, .55);
    }

    .content {
        height: 30px;
        width: 420px;
        background-color: transparent;
        border-radius: 4px;
        color: white;
        font-size: 14px;
        text-align: center;
        position: relative;
        z-index: 1000;
        margin-top: -30px;
        text-align: left;
        transition: all 200ms cubic-bezier(0.600, -0.280, 0.735, 0.045);
    }

    .content-open {
        margin-top: 0px;
        height: 200px;
        background-color: rgba(0,0,0, .1);
        transition: all 350ms cubic-bezier(0.080, 1.090, 0.320, 1.275);
    }

    .content-text {
        padding: 15px;
        visibility: hidden;
        opacity: 0;
        overflow: auto;
        transition: all .2s ease-in;
    }

    .content-text-open {
        visibility: visible;
        opacity: 1;
        transition: all .8s ease-in;
    }

    .fa-angle-down {
        font-size: 20px;
        color: rgba(255,255,255, .5);
        transition: all .6s cubic-bezier(0.080, 1.090, 0.320, 1.275);
    }

    .fa-rotate-180 {
        color: rgba(255,255,255, 1);
    }

    .arrow-wrapper {
        position: absolute;
        margin-left: 375px;
    }

`


