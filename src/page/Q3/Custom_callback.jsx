import { useEffect, useRef, useState } from "react";
import { useCustomMemo } from "./Custom_memo";

function useCustomCallback(factory, _deps) {
    // 직접 작성한 useMemo를 통해서 만들어보세요.
    return useCustomMemo(() => factory, _deps);
}

const Custom_callback = () => {
    const [cnt, setCnt] = useState(0);

    const onDelete = useCustomCallback(() => {
        setCnt((prev) => prev + 1);
        console.log("안녕");
    }, []);

    // 이전 렌더링에서의 참조를 저장
    const prevRef = useRef();

    useEffect(() => {
        if (prevRef.current) {
            console.log(
                // 이전 렌더링의 참조와 현재를 비교
                prevRef.current === onDelete
                    ? "✅ 함수가 유지됨!"
                    : "⚠️ 함수가 새로 생성됨!"
            );
        }
        prevRef.current = onDelete;
    }, [onDelete, cnt]);

    return (
        <div>
            <div>{cnt}</div>
            <button onClick={onDelete}>클릭!</button>
        </div>
    );
};

export default Custom_callback;