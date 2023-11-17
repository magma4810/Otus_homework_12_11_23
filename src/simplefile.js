import { returnDateWeek } from './homeworksOtus.js';

returnDateWeek(document.querySelector('#app1'))
// describe('homework number 7', () =>{
//     let div;
//     let button;
//     let input;
//     beforeEach(()=>{
//         div = document.createElement('div');
//         makeInteractiveList(div);
//         button = div.querySelector('button');
//         input = div.querySelector("input");
//     })
//     function getLi(){
//         return [...div.querySelectorAll("li")].map((li) => li. innerHTML);
//     }
//     it('is a function', () => {
//         expect(makeInteractiveList).toBeInstanceOf(Function);
//     })
//     it('make initial markup', () => {
//         expect(div.querySelector('input')).toBeTruthy();
//         expect(button).toBeTruthy();
//         expect(button.innerHTML).toBe('Add');
//         expect(button.hidden).toBe(true);
//         expect(div.querySelectorAll('li').length).toBe(3);
//         expect(getLi()).toEqual(['1','22','333']);
//     });
//     it("shows or hides the button based on the input content",()=>{
//         input.value = "123";
//         input.dispatchEvent(new Event("input"));
//         expect(button.hidden).toBe(false);

//         div.querySelector("input").value = "";
//         input.dispatchEvent(new Event("input"));
//         expect(button.hidden).toBe(true);
//     })
//     it("adds new paragraph on button click",()=>{
//         input.value = "123";
//         input.dispatchEvent(new Event("input"));
//         button.click();
//         expect(getLi()).toEqual(['1','22','333','123']);
//         expect(input.value).toBe('');
//         expect(button.hidden).toBe(true);
//     })
//     it("removes first paragraph if total p number is more than 5",()=>{
//         const text1 = "4444";
//         input.value = text1;
//         input.dispatchEvent(new Event("input"));
//         button.click();

//         const text2 = "55555";
//         input.value = text2;
//         input.dispatchEvent(new Event("input"));
//         button.click();

//         const text3 = "666666";
//         input.value = text3;
//         input.dispatchEvent(new Event("input"));
//         button.click();

//         expect(getLi()).toEqual(['22','333',text1,text2,text3]);

//     })
// })

