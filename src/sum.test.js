import { sumNum,maxNum,returnMounth,sumFrom50_Before100 } from './sum'
//3875
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
})