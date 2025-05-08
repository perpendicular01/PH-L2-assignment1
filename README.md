

## 1. Differences between Interfaces and Types in typeScript

In TypeScript, both interface and type are used to define custom types. Differences : 
### Interfaces
- used to describe the shape of objects.
- can be extended using 'extends'.
- ideal for defining contracts in oop.

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  id: number;
}
```
### Types
- more fexiable
- can extend other types using intersections (&)
- can be used for unions, intersections, tuples etc

  
```ts
type Person = {
  name: string;
  age: number;

};
```

## 6. How does TypeScript help in improving code quality and project maintainability?
TypeScript helps us to write better, safer, and more organized code
- ### Helps Us write Faster and Smarter
It gives us auto-suggestions and hints in our code editor.
- ### Great for Team Projects
Everyone can see what kind of data is expected by using types and interfaces.
- ### More Readable Code
Types make our code easier to understand
- ###  Catches Mistakes Early
TypeScript warns us about errors before running the code.

```ts
let age: number = 25;
// age = "five";  it will show error as age is  assigned as number 
