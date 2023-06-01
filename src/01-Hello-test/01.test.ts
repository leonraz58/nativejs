import { sum } from "./01";
import { mult } from "./01";
import { splitIntoWords } from "./01";

test ('sum shoult be correct', () =>{
    const a = 1;
    const b = 2;
    const c = 3;
    
    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('splitting shoult be correct', ()=>{
    const sen1 = "hello my friends";
    const sen2 = "js is a programming language";

    const result1 = splitIntoWords(sen1);
    const result2 = splitIntoWords(sen2);

    expect (result1.length).toBe(3);
    expect (result1[0]).toBe("hello");
    expect (result1[1]).toBe("my");
    expect (result1[2]).toBe("friends");

    expect (result2.length).toBe(5);
    expect (result2[0]).toBe("js");
    expect (result2[1]).toBe("is");
    expect (result2[2]).toBe("a");
    expect (result2[3]).toBe("programming");
    expect (result2[4]).toBe("language");
}

)

test ('mult shoult be correct', () =>{
    const a = 1;
    const b = 2;
    const c = 3;
    
    //action
    const result1 = mult(a,b);
    const result2 = mult(b,c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})