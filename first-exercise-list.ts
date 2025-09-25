// funcao para dobrar o numero
const doubleNumbers = (numbers: number[]): number[] => {
  const numbersToDouble: number[] = [...numbers];

  return numbersToDouble.map((number) => number * 2);
}

// funcao para adicionar um novo usuario ao array
interface User { name: string; age: number; }
const addNewUser = (user: User, users: User[]): User[] => {
  return [...users, user];
}

// funcao para saudar e capitalizar o nome
const capitalizeFirstLetter = (name: string): string => {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
}

const greet = (name: string): string => {
  return `Olá, ${name}`;
}

const compose = (...fns: Function[]) => (args: any) => fns.reduce((fn, f) => f(fn(args)), args);

const greatAndCapitalize = compose(greet, capitalizeFirstLetter);

// reduce para media de idade
const user: User[] = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 30 },
  { name: 'Jill', age: 35 },
  { name: 'Jack', age: 40 },
]

const averageAge = user.reduce((acc, user) => acc + user.age, 0) / user.length;
