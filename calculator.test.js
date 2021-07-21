const calculator = require('./calculator');

describe('operations',()=>{
    test('sums correctly',()=>{
        let newCalc = new calculator()
        expect(newCalc.sum(4,2)).toBe(6)
    });
    test('subtracts correctly',()=>{
        let newCalc = new calculator()
        expect(newCalc.subtract(4,2)).toBe(2)
    });
    test('divides correctly',()=>{
        let newCalc = new calculator()
        expect(newCalc.divide(4,2)).toBe(2)
    });
    test('multiplies correctly',()=>{
        let newCalc = new calculator()
        expect(newCalc.multiply(4,2)).toBe(8)
    });
})