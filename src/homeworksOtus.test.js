import { sumNum,maxNum,returnMounth,sumFrom50_Before100,multiplicationTableForSeven,
    averageAllOddNum,objectUser,makeInteractiveList } from './homeworksOtus'

describe('test code' , ()=>{
    it('return sum num', ()=>{
        expect(sumNum('777')).toEqual(21);
    });
    it('return max num', ()=>{
        expect(maxNum(12,122)).toEqual(122);
    });
    it('return mounth',()=>{
        expect(returnMounth(5)).toEqual('май')
    })
    it('return sum from 50 before 100',()=>{
        expect(sumFrom50_Before100()).toEqual(3875)
    })
    it('return multiplication Table For Seven',()=>{
        expect(multiplicationTableForSeven()).toEqual(['7 * 1 = 7', '7 * 2 = 14', '7 * 3 = 21', '7 * 4 = 28', '7 * 5 = 35', 
        '7 * 6 = 42', '7 * 7 = 49', '7 * 8 = 56', '7 * 9 = 63', '7 * 10 = 70'])
    })
    it('return average All Odd Number',()=>{
        expect(averageAllOddNum(10)).toEqual(6)
    })
    it('return objectUser_Admin',()=>{//???
        expect(objectUser('5')).toEqual({role: 'admin', age: '5'})
    })
})
describe('homework number seven', () =>{
    let div;
    let button;
    let input;
    beforeEach(()=>{
        div = document.createElement('div');
        makeInteractiveList(div);
        button = div.querySelector('button');
        input = div.querySelector("input");
    })
    function getLi(){
        return [...div.querySelectorAll("li")].map((li) => li. innerHTML);
    }
    it('is a function', () => {
        expect(makeInteractiveList).toBeInstanceOf(Function);
    })
    it('make initial markup', () => {
        expect(div.querySelector('input')).toBeTruthy();
        expect(button).toBeTruthy();
        expect(button.innerHTML).toBe('Add');
        expect(button.hidden).toBe(true);
        expect(div.querySelectorAll('li').length).toBe(3);
        expect(getLi()).toEqual(['1','22','333']);
    });
    it("shows or hides the button based on the input content",()=>{
        input.value = "123";
        input.dispatchEvent(new Event("input"));
        expect(button.hidden).toBe(false);

        div.querySelector("input").value = "";
        input.dispatchEvent(new Event("input"));
        expect(button.hidden).toBe(true);
    })
    it("adds new paragraph on button click",()=>{
        input.value = "123";
        input.dispatchEvent(new Event("input"));
        button.click();
        expect(getLi()).toEqual(['1','22','333','123']);
        expect(input.value).toBe('');
        expect(button.hidden).toBe(true);
    })
    it("removes first paragraph if total p number is more than 5",()=>{
        const text1 = "4444";
        input.value = text1;
        input.dispatchEvent(new Event("input"));
        button.click();

        const text2 = "55555";
        input.value = text2;
        input.dispatchEvent(new Event("input"));
        button.click();

        const text3 = "666666";
        input.value = text3;
        input.dispatchEvent(new Event("input"));
        button.click();

        expect(getLi()).toEqual(['22','333',text1,text2,text3]);

    })
})