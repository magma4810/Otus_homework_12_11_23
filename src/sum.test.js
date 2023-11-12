import { sumNum,maxNum,returnMounth } from './sum'

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
    
})