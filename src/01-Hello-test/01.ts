const sentence = "Hello my friends"

export function splitIntoWords (sentence: string){
    const words = sentence.toLowerCase().split(' ').map(w=>w.replace('!','')); 
    
    return words.filter(w => w !=='');
}

export function sum (a:number, b:number) {
    return a+b;
}

export function mult (a:number, b:number) {
    return a*b;
}