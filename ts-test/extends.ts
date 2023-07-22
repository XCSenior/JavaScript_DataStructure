class Phone {
    public brand: string;
    public price: number;

    constructor(brand: string, price: number){
        this.brand = brand;
        this.price = price;
    }

    call(){
        console.log("我能打电话。");
    }
}

class SmartPhone extends Phone {
    public color: string;
    public size: string;

    constructor(brand: string, price: number, color: string, size: string){
        super(brand, price);
        this.color = color;
        this.size = size;
    }
}
