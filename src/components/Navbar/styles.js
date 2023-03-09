import styled from "styled-components";

export const Nav = styled.div `

display: flex;
justify-content: space-between;
flex-wrap: wrap;
background-color: #29323c;
padding: 1.5rem;


h2 {
   color: white;
}

span {
    color: #5848c2;
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
    background: #5848c2;
    color: white;
    border-radius: 0 5px 5px 0;
    width: 50px;
    cursor: pointer;
}

button:hover {
    opacity: 0.5;
}

@media only screen and (min-width: 560px) {
    .burguer {
        display: none;
    }
}

@media only screen and (max-width: 500px) {
   
    display: flex;
    justify-content: center;
    padding: 10px;

    h2 {
        margin-bottom: 10px;
    }
    
    form {
        display: none;
    }

    .navbar {
        display: flex;
    }
   
}

`