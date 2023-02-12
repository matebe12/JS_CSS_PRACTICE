function Computer(computer){
    for (const key in computer) {
        this[key] = computer[key]
    }
}

Computer.prototype.getPropertyValue = function(key){
    return this[key]
}

Computer.prototype.setPropertyValue = function (key, value) {
    this[key] = value;
}

const hansung = new Computer({
    name: '인민에어',
    brand: '한성',
    cpu: 'Intel 10',
    memory: '16GB'
})

const samsung = new Computer({
    name: '삼성노트북',
    brand: '삼성',
    cpu: 'Intel 10',
    memory: '16GB'
})


console.log(hansung.getPropertyValue('name'))
hansung.setPropertyValue('name','짭에어')
console.log(hansung.getPropertyValue('name'))
console.log(Computer.prototype)
console.log(hansung.__proto__)
console.log(hansung.__proto__.getPropertyValue)
hansung.__proto__.getPropertyValue = 1
console.log(hansung.__proto__)


/**
 *  일반 함수
 * 
 */

function TestFn(){

}

const test = new TestFn()
TestFn.prototype.test = 1
console.log(`TestFn :: `, TestFn.prototype)
console.log(`TestFn :: `, test.__proto__ )