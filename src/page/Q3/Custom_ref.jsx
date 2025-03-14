import { useRef, useState } from "react";

const custom_refs = new Set();
const answer_refs = new Set();

function MyuseRef(initialValue) {
    const [ref] = useState(() => ({ current: initialValue }));
    return ref;
}

function MyuseRef2(initialValue) {
    const ref = { current: initialValue };
    return ref;
}

function MyuseRef3(initialValue) {
    const [ref] = useState(initialValue);
    return { current: ref };
}

const Custom_ref = () => {
    const [, rerender] = useState({});
    const custom_ref = MyuseRef3(null);
    const answer_ref = useRef(null);

    custom_refs.add(custom_ref);
    answer_refs.add(answer_ref);

    const click_custom = () => {
        rerender({});
        console.log("커스텀 :", custom_refs);
    };
    const click_answer = () => {
        rerender({});
        console.log("정답 :", answer_refs);
    };

    return (
        <>
            <div ref={custom_ref}>
                <button onClick={click_custom}>커스텀</button>
            </div>
            <div ref={answer_ref}>
                <button onClick={click_answer}>정답</button>
            </div>
        </>
    );
};

export default Custom_ref;