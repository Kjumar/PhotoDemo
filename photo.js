class Photo
{
    constructor(width = 8, height = 10)
    {
        this.width = width;
        this.height = height;
    }

    price()
    {
        if (this.width == 8 && this.height == 10)
        {
            return 4;
        }
        else if (this.width == 10 && this.height == 12)
        {
            return 6;
        }
        else
        {
            return 10;
        }
    }

    toString()
    {
        return "This is a " + this.width + " by " + this.height + " photo and it costs " + this.price();
    }
}

let p1 = new Photo();
let p2 = new Photo(14, 10);
console.log(p1.toString());
console.log(p2.toString());