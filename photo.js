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

class MattedPhoto extends Photo
{
    constructor(width = 8, height = 10, color = "grey")
    {
        super(width, height);

        this.color = color;
    }

    price()
    {
        return super.price() + 10;
    }

    toString()
    {
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.price()}`;
    }
}

class FramedPhoto extends Photo
{
    constructor(width = 8, height = 10, material = "wood", style = "traditional")
    {
        super(width, height);

        this.material = material;
        this.style = style;
    }

    price()
    {
        return super.price() + 25;
    }

    toString()
    {
        return `This is a ${this.width} by ${this.height} ${this.material} framed photo. The style is ${this.style} and it costs ${this.price()}`;
    }
}

let p1 = new Photo();
let p2 = new Photo(14, 10);
let m1 = new MattedPhoto();
let m2 = new MattedPhoto(14, 10, "blue");
let f1 = new FramedPhoto();
let f2 = new FramedPhoto(14, 10, "steel", "brushed metal");
console.log(p1.toString());
console.log(p2.toString());
console.log(m1.toString());
console.log(m2.toString());
console.log(f1.toString());
console.log(f2.toString());