import { useState } from "react";
import styled from "styled-components";

const Insert_data = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const newTodos = {
        id: Date.now(),
        text: text,
    }

    const handleSubmit = () => {
        setText('');
        setTodos([newTodos, ...todos]);
    }

    const hanldeCustomInput = (e) => {
        setText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <Container>
            <h2>데이터 입력</h2>
            <Wrapper>
                <CustomInput
                    placeholder="데이터를 입력해주세요."
                    value={text}
                    onChange={hanldeCustomInput}
                    onKeyDown={handleKeyDown}
                />
                <InsertBtn onClick={handleSubmit}>등록</InsertBtn>
            </Wrapper>
            <Wrapper>
                <ul>
                    {todos.map(item => (
                        <li key={item.id}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    align-items: center;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    max-width: 30rem;
    padding-bottom: 1rem;
    margin: 1rem;
    margin-bottom: 0;
    border-bottom: 1px solid #969696;
`

const CustomInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding: 0.6rem 1rem;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: 0px;
`

const InsertBtn = styled.button`
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    text-align: center;
    white-space: nowrap;
    color: white;
    background-color: tomato;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`

export default Insert_data;
