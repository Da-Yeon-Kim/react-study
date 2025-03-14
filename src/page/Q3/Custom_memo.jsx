import React, { useCallback, useRef, useState } from "react";

// 직접 구현한 얕은 비교
function myEquals(prev, next) {
    if (!prev || !next || prev.length !== next.length) {
        return false;
    }
    return prev.every((val, i) => val === next[i]);
}

export function useCustomMemo(factory, _deps, _equals = myEquals) {
    // 직접 작성한 useRef를 통해서 만들어보세요.
    const ref = useRef({ value: undefined, deps: undefined });

    if (!_equals(ref.current.deps, _deps)) {
        ref.current.value = factory();
        ref.current.deps = _deps;
        console.log("useMemo factory 실행됨");
    }

    return ref.current.value;
}

export const Custom_memo = () => {
    const [cnt, setCnt] = useState(0);

    const click = () => {
        setCnt(cnt + 1);
    };

    const testData = React.useMemo(() => {
        console.log("함수 재생성");
        return cnt;
    }, []);

    const testClick = useCallback(() => setCnt((prev) => prev + 1), []);

    return (
        <>
            {/* <div>{testData}</div> */}
            <div>{cnt}</div>
            <button onClick={testClick}>클릭</button>
        </>
    )
}