import styled from "styled-components";

const Insert_data = () => {
    return (
        <Container>
            <Title>데이터 입력</Title>
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

const Title = styled.h2`
`

export default Insert_data;
