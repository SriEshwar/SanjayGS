class Watch {
    protected String brand;
    protected double price;

    public Watch(String brand, double price) {
        this.brand = brand;
        this.price = price;
    }

    public void displayResult() {
        System.out.println("Brand: " + brand + ", Price: $" + price);
    }
}

class TitanWatch extends Watch {
    private String model;

    public TitanWatch(String brand, String model, double price) {
        super(brand, price);
        this.model = model;
    }

    @Override
    public void displayResult() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Price: $" + price);
    }
}

class FastrackWatch extends Watch {
    private String design;

    public FastrackWatch(String brand, String design, double price) {
        super(brand, price);
        this.design = design;
    }

    @Override
    public void displayResult() {
        System.out.println("Brand: " + brand + ", Design: " + design + ", Price: $" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        TitanWatch titanWatch = new TitanWatch("Titan", "ABC123", 100);
        FastrackWatch fastrackWatch = new FastrackWatch("Fastrack", "Sporty", 150);

        System.out.println("Titan Watch:");
        titanWatch.displayResult();
        System.out.println("\nFastrack Watch:");
        fastrackWatch.displayResult();
    }
}
