import { sum } from "../sum";

test("it should sum two numbers together", () => {
    const ans = sum(4,5);
    
    //assertion
    except(ans).toBe(9);
});