import styled from 'styled-components';

export const App = styled.div`
        text-align: center;
        `;
export const Body = styled.div`
        display: flex;
        background-color: #282c34;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        color: white;
        @media (max-width: 787px) {
            margin-top:15vh;
            flex-direction: column;
        }
        `;
export const Body1 = styled.div`
        background-color: #282c34;
        padding-left:180px;
        color: white;
        margin-top:-22px;
        height:230vh;
        `;
export const ButtonStarted = styled.button`
        height: 80px;
        width: 14vw;
        font-size: 1.5rem;
        border-radius: 30px;
        border: none;
        margin:auto;
        background-color: #ffffff;
        transition: 0.3s ease-in-out;
        &:hover{
            width: 15vw;
            background-color: #61dafb;
            transition: 0.3s ease-in-out;
        }
        @media (max-width: 787px) {
            height: 80px;
            width: 40vw;
            font-size: 1.5rem;
            border-radius: 30px;
            border: none;
            margin:auto;
            background-color: #ffffff;
            transition: 0.3s ease-in-out;
            &:hover{
                background-color: #61dafb;
                color:black;
                width: 40vw;
                transition: 0.3s ease-in-out;
            }
        }
        `;
export const Box11 = styled.div`
        width:40vw;
        `;        
export const Code = styled.code`
        color:rgb(244, 93, 93);
        background-color: transparent;
        `
export const CodeStruct = styled.div`       
        margin:auto;
        padding:auto;
        margin-left: 10%;
        width:37vw;
        font-size: 13px;
        margin-right:250px;
        font-style: bold;
        color:#ffffffe0;
        background-color: #454545;
        border:2px solid rgb(253, 134, 118);
        `; 
export const CodeStruct1 = styled.div`
        margin:auto;
        padding:auto;
        width:37vw;
        margin-left: 10%;
        margin-right:250px;
        font-size: 13px;
        color:#ffffffe0;
        background-color: #454545;
        border:2px solid rgb(253, 134, 118);
        `;
export const Docs = styled.div`
        background-color: transparent;
        padding-left:-12px;
        `;
export const Test= styled.div`
        margin:2vw;
        margin-top:18vh;
        @media (max-width: 787px) {
            margin-top:0vh;
        }
        `;
export const MessageIO = styled.div`
        transition: 0.3s ease-in-out;
        margin-top:16vh;
        background: transparent;
        `;
export const LoginS = styled.div`
        margin-top: 15vh;
        `;