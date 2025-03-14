import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <h2>Home</h2>
            <Wrapper>
                <StyledLink to="/login">▶ Q1. 로그인</StyledLink>
                <StyledLink to="/insert_data">▶ Q2. 데이터 삽입하기</StyledLink>
                <StyledLink to="/ref">▶ Q3. useRef 예제</StyledLink>
                <StyledLink to="/callback">▶ Q3. useCallback 예제</StyledLink>
                <StyledLink to="/memo">▶ Q3. useMemo 예제</StyledLink>
                <StyledLink to="/effect">▶ Q3. useEffect 공부</StyledLink>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 10rem;
    gap: 1rem;
    padding-top: 1rem;
    margin-bottom: 0;
    border-top: 1px solid #969696;
`;

const StyledLink = styled(Link)`
    color: inherit;
`;

export default Home;
