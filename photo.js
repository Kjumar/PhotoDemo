export class Photo
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

export class MattedPhoto extends Photo
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

export class FramedPhoto extends Photo
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
