import styled from "styled-components";

export const Nav = styled.div `

display: flex;
justify-content: space-between;
background-color: #29323c;
padding: 2rem;


h2 {
   color: white;
   

}

input {
    border-radius: 5px 0 0 5px;
    padding: 0.7rem;
    border: none;
    font-weight: bold;
    
}

input:hover {
    background: rgb(207, 205, 205);

}

button {
    padding: 0.7rem;
    border: none;
    background: #a6a4a5;
    border-radius: 0 5px 5px 0;
    width: 50px;
    cursor: pointer;
}

button:hover {
    opacity: 0.5;
}

`