interface Famaily {
  add: string;
  father: string;
  fatherAge: number
}

let obj: Partial<Famaily>;

obj = {
  addf: 'beijing'
}

console.log(obj);