import React from "react";
import { useNavigate } from "react-router-dom";
import { Styled, styled } from "styled-components";

export default function Login() {
    const navigate = useNavigate()
    const LoginDiv = styled.div`margin:auto; width:50%;height:50%;align-items:center; display:flex; flex-direction: column;border: 1px solid #afafaf;border-radius: 3px;box-shadow: 0px 0px 8px #777;justify-content: center;font-family: Poppins;`
    const Section = styled.section`width:100%; height:100vh;display:flex;align-items: center;`
    const Form = styled.form`width:100%;display:flex;align-items: center;flex-direction:column`
    const InputBtn = styled.button`background:rgb(192, 227, 239);color: black;width: 100px;padding:10px;border-radius:5px;border: 0px solid transparent;cursor: pointer;font-weight:bold;`
    const Input = styled.input`color: #777;font-weight: bold;width:60%;padding: 10px;border: 1px solid #afafaf;border-radius: 5px;outline: none;`
    const H1 = styled.h1`font-size: xx-large;`
    return (
        <Section>
            <LoginDiv>
                <H1>Login</H1>
                <Form onSubmit={e => {
                    e.preventDefault()
                    navigate("/visual-inspection")
                }}>
                    <Input type="text" required name="username" placeholder="Username" />
                    <br />
                    <Input type="password" required name="password" placeholder="Password" />
                    <br />
                </Form>
                <InputBtn type="submit" onClick={()=>navigate('/visual-inspection')}>Login</InputBtn>
            </LoginDiv>

        </Section>
    )
}