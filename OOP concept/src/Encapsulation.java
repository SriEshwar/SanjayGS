class Watch {
    private String brand;
    private double price;

    public Watch(String brand, double price) {
        this.brand = brand;
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void displayResult() {
        System.out.println("Brand: " + brand + ", Price: $" + price);
    }
}

public class Main {
    public static void main(String[] args) {
        Watch watch = new Watch("Generic", 50);

        // Displaying initial watch information
        System.out.println("Initial Watch Information:");
        watch.displayResult();

        // Modifying watch information
        watch.setBrand("SmartWatch");
        watch.setPrice(100);

        // Displaying modified watch information
        System.out.println("\nModified Watch Information:");
        System.out.println("Brand: " + watch.getBrand() + ", Price: $" + watch.getPrice());
    }
}




