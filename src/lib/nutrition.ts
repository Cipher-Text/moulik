export type Value={amount:number|null;unit:string;basis:string};
export function convertServing(value:Value,fromGrams:number,toGrams:number):Value{if(value.amount===null||fromGrams<=0||toGrams<=0)return {...value,amount:null};return {...value,amount:value.amount*toGrams/fromGrams}}
export function bmi(heightCm:number,weightKg:number){if(!Number.isFinite(heightCm)||!Number.isFinite(weightKg)||heightCm<100||heightCm>250||weightKg<20||weightKg>350)return null;return weightKg/((heightCm/100)**2)}
export function scoreQuiz(answers:boolean[],expected:boolean[]){return answers.reduce((n,a,i)=>n+(a===expected[i]?1:0),0)}
