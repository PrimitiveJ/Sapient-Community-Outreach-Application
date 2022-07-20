
import styled from 'styled-components';


const LocalStyles = styled.header`
  width: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  padding-bottom: 20px;

  .headerLogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Edu VIC WA NT Beginner", cursive;
  }

  .registerButtonContainer {
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .signupBtn,
  .loginBtn,
  .logoutBtn {
    font-weight: 700;
    background: none;
    box-shadow: 0 0 5px black;
    transition: background-color 0.5s;
  }

  .signupBtn {
    text-decoration: underline;
  }

  .loginBtn {
    background-color: #6f9674;
  }

  .logoutBtn {
    background-color: #304631;
  }

  .registerBtn:hover {
    background-color: ${({ theme }) => theme.themeEight};
  }

  h1 {
    font-family: inherit;
    color: ${({ theme }) => theme.textColorFour};
    font-size: 3rem;
    margin-bottom: 10px;
  }

  .headerLogo p {
    font-family: inherit;
    text-align: center;
  }
`;

export default LocalStyles;