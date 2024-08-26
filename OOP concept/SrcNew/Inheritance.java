class IceCream {
    String flavor;
    double price;

    public IceCream(String flavor, double price) {
        this.flavor = flavor;
        this.price = price;
    }

    public void prepare() {
        System.out.println("Preparing " + flavor + " ice cream...");
    }

    public void serve() {
        System.out.println("Serving " + flavor + " ice cream.");
    }
}
class VanillaIceCream extends IceCream {
    public VanillaIceCream(double price) {
        super("Vanilla", price);
    }

    // Overriding the serve method to add specific behavior
    @Override
    public void serve() {
        super.serve();
        System.out.println("Adding vanilla toppings.");
    }
}

class ChocolateIceCream extends IceCream {
    public ChocolateIceCream(double price) {
        super("Chocolate", price);
    }

    // Overriding the serve method to add specific behavior
    @Override
    public void serve() {
        super.serve();
        System.out.println("Adding chocolate sauce.");
    }
}
public class IceCreamShop {
    public static void main(String[] args) {
        IceCream vanillaIceCream = new VanillaIceCream(2.5);
        IceCream chocolateIceCream = new ChocolateIceCream(3.0);

        // Using inherited methods
        vanillaIceCream.prepare();
        vanillaIceCream.serve();

        System.out.println(); // Line break for readability

        chocolateIceCream.prepare();
        chocolateIceCream.serve();
    }
}

