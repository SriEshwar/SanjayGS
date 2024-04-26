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
    public String model;

    public TitanWatch(String model, double price) {
        super("Titan", price);
        this.model = model;
    }

    @Override
    public void displayResult() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Price: $" + price);
    }
}

class FastrackWatch extends TitanWatch {
    private String design;

    public FastrackWatch(String design, double price) {
        super("XYZ789", price);
        this.design = design;
    }

    @Override
    public void displayResult() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Design: " + design + ", Price: $" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Watch normalWatch = new Watch("Generic", 50);
        TitanWatch titanWatch = new TitanWatch("ABC123", 100);
        FastrackWatch fastrackWatch = new FastrackWatch("Sporty", 150);

        System.out.println("Generic Watch:");
        normalWatch.displayResult();
        System.out.println("\nTitan Watch:");
        titanWatch.displayResult();
        System.out.println("\nFastrack Watch:");
        fastrackWatch.displayResult();
    }
}
