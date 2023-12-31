const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

// identityThree("3")

function identityFour<T>(val: T): T {
    return val;
}

interface Bootle {
    brand: string,
    type: number,
}

//identityFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
    //do some db ops
    const myIndex = 3
    return products[myIndex]
}

//Generic arrow method
const getMoreSearchProducts = <T,>(products: T[]):T => {
    //some db ops
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

//Using Type Parameters in Generic
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

//anotherFunction(3, {connection :"connection", password: "password", username: "username"})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Syllabus<T>{
    public cart: T[] =[]

    addToCart(product: T){
        this.cart.push(product)
    }
}