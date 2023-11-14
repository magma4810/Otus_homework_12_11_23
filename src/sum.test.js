import { sumNum,maxNum,returnMounth,sumFrom50_Before100,multiplicationTableForSeven,averageAllOddNum } from './sum'

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
})