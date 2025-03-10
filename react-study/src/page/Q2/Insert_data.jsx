import styled from "styled-components";
import { DataInput } from "../../components/InsertData/DataInput";

const Insert_data = () => {
    return (
        <Container>
            <Title>데이터 입력</Title>
            <DataInput />
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
