import styled from "styled-components";

export const DataInput = () => {
    return (
        <Wrapper>
            <CustomInput placeholder="데이터를 입력해주세요." />
            <InsertBtn>등록</InsertBtn>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
    max-width: 30rem;
    padding-bottom: 2rem;
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
