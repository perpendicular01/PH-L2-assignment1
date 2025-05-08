// 1
{

    const formatString = (input: string, toUpper?: boolean): string => {

        if (toUpper === false) {
            return input.toLowerCase();
        }

        else {
            return input.toUpperCase();
        }
    }
}


// 2
{

    const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
        return items.filter(item => item.rating >= 4);

    }

}


// 3
{
    const concatenateArrays = <T>(...arrays: T[][]): T[] => {
        const ans: T[] = [];

        for (let i = 0; i < arrays.length; i++) {
            const curr = arrays[i];
            for (let j = 0; j < curr.length; j++) {
                ans.push(curr[j]);
            }

        }

        return ans;
    }

}

// 4
{
    class Vehicle {
        constructor(private make: string, public year: number) { }

        getInfo() {
            console.log(`make: ${this.make},  year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }

        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }


}



// 5
{
    const processValue = (value: string | number): number => {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }

    }


}



// 6
{
    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length === 0) {
            return null;
        }
        let ans = products[0];

        for (let i = 1; i < products.length; i++) {
            if (products[i].price > ans.price) {
                ans = products[i];
            }
        }
        return ans;
    }


}



// 7
{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    const getDayType = (day: Day): string => {
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend"
        }
        else {
            return "WeekDay"
        }

    }


}



// 8
{
    const squareAsync = async (n: number): Promise<number> => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number not allowed"))
                }
                else {
                    resolve(n * n);
                }

            }, 1000);
        });
    }


}