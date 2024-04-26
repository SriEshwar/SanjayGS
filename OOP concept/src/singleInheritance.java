class Watch{
    protected String brand;
    protected double price; 
    
    public Watch(String brand, double price){
        this.brand = brand;
        this.price = price; 
    }
    
    public void displayResult(){
        System.out.println("Brand: " + brand + ", Price: $" + price); 
    }
}

class TitanWatch extends Watch {
    private String model;

    public TitanWatch(String model, double price) {
        super("Titan", price); // parent constructor
        this.model = model;
    }

    @Override
    public void displayResult() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Price: $" + price); 
    }
}

public class Main {
    public static void main(String[] args) {
        Watch normalWatch = new Watch("Generic", 50);
        TitanWatch titanWatch = new TitanWatch("ABC123", 100);

        System.out.println("Generic Watch:");
        normalWatch.displayResult();
        System.out.println("\nTitan Watch:");
        titanWatch.displayResult();
    }
}
