// transforme uma funcao que soma dois numeros em uma funcao de duas etapas (curried)
const sum = (a: number) => (b: number) => a + b;
sum(1)(2); // 3

// implemente as funcoes pipe e compose para uma pipeline de funcoes
const pipe = (...fns: Function[]) => (args: any) => fns.reduce((fn, f) => f(fn(args)), args);
const compose = (...fns: Function[]) => (args: any) => fns.reduce((fn, f) => f(fn(args)), args);

// flatten com reduce -> implemente uma funcao que achata arrays de multiplos niveis em um unico array
const flatten = (arr: any[]) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

//  groupBy -> Crie uma funcao que agrupe usuarios por idade ou por inicial do nome
const groupBy = (arr: any[], key: string) => arr.reduce((acc, val) => {
  acc[val[key]] = acc[val[key]] || [];
  acc[val[key]].push(val);
  return acc;
}, {});

// map personalizado -> reimplemente o comportamento do map usando apenas reduce
const map = (arr: any[], fn: Function) => arr.reduce((acc, val) => {
  acc.push(fn(val));
  return acc;
}, []);

// filter personalizado -> reimplemente o comportamento do filter usando apenas reduce
const filter = (arr: any[], fn: Function) => arr.reduce((acc, val) => {
  if (fn(val)) {
    acc.push(val);
  }
  return acc;
}, []);

// contador de palavars -> dada uma string, conte quantas vezes cada palavra aparece
const countWords = (str: string) => str.split(' ').reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

// imutabilidade profunda -> Dado um objeto de usuários com endereço, crie uma função que altere apenas a cidade de um usuário sem modificar o objeto original.
const updateCity = (users: any[], userId: string, city: string) => {
  return users.map((user) => user.id === userId ? { ...user, address: { ...user.address, city } } : user);
}

// funcao uniq -> Implemente uma função que remove valores duplicados de um array sem usar Set.
const uniq = (arr: any[]) => arr.reduce((acc, val) => {
  if (!acc.includes(val)) {
    acc.push(val);
  }
  return acc;
}, []);

// async pipe -> Implemente um asyncPipe que permita encadear funções assíncronas.
const asyncPipe = (...fns: Function[]) => async (args: any) => {
  return fns.reduce(async (acc, fn) => {
    return await fn(await acc);
  }, args);
}

// correções 
// 2 - pipe e compose
const toUpperCase = (str: string) => str.toUpperCase();
const exclaim = (str: string) => `${str}!`;
pipe(toUpperCase, exclaim)('hello'); // 'HELLO!'
compose(toUpperCase, exclaim)('hello'); // 'HELLO!'

