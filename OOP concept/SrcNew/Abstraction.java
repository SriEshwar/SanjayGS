abstract class IceCream {
    // Abstract method that must be implemented by subclasses
    public abstract void makeIceCream();

    // A common method that could be shared across all ice creams (optional)
    public void prepareCone() {
        System.out.println("Preparing a cone for the ice cream...");
    }
}
class VanillaIceCream extends IceCream {
    @Override
    public void makeIceCream() {
        System.out.println("Making vanilla ice cream...");
        // Add vanilla specific ingredients
        // Mix ingredients
        // Freeze the mixture
        System.out.println("Vanilla ice cream is ready!");
    }
}

class ChocolateIceCream extends IceCream {
    @Override
    public void makeIceCream() {
        System.out.println("Making chocolate ice cream...");
        // Add chocolate specific ingredients
        // Mix ingredients
        // Freeze the mixture
        System.out.println("Chocolate ice cream is ready!");
    }
}

class StrawberryIceCream extends IceCream {
    @Override
    public void makeIceCream() {
        System.out.println("Making strawberry ice cream...");
        // Add strawberry specific ingredients
        // Mix ingredients
        // Freeze the mixture
        System.out.println("Strawberry ice cream is ready!");
    }
}
class IceCreamFactory {
    public void makeIceCream(IceCream iceCream) {
        iceCream.prepareCone();  // Common preparation step
        iceCream.makeIceCream(); // Specific ice cream making process
    }
}
public class IceCreamFactoryMachine {
    public static void main(String[] args) {
        IceCreamFactory factory = new IceCreamFactory();

        IceCream vanilla = new VanillaIceCream();
        IceCream chocolate = new ChocolateIceCream();
        IceCream strawberry = new StrawberryIceCream();

        factory.makeIceCream(vanilla);    // Abstraction in action
        factory.makeIceCream(chocolate);  // Abstraction in action
        factory.makeIceCream(strawberry); // Abstraction in action
    }
}
