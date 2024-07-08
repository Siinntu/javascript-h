let pattern ='pw'

let regExOne=new RegExp(pattern)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)

let regExThree=/pw/gi

const strtocheck="pw is growing at a rapid speed and recently they are working on pwskill to create skills based pwcontent"
const result=regExThree.test(strtocheck)
console.log(result)

const anotherresult=strtocheck.match(regExThree)
console.log(anotherresult);

const onemoreresult=strtocheck.replace(regExThree,'sintu')
console.log(onemoreresult)