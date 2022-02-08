import styled from "styled-components";

const NavBar = styled.nav`
    width: 30.5rem;
    height: 2.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        display: none;
        overflow: hidden;
    }
`;
export default NavBar;