abstract class IceCream {
    public abstract void makeIceCream();
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
        iceCream.makeIceCream();
    }
}
public class IceCreamFactoryMachine {
    public static void main(String[] args) {
        IceCreamFactory factory = new IceCreamFactory();

        IceCream vanilla = new VanillaIceCream();
        IceCream chocolate = new ChocolateIceCream();
        IceCream strawberry = new StrawberryIceCream();

        factory.makeIceCream(vanilla);
        factory.makeIceCream(chocolate);
        factory.makeIceCream(strawberry);
    }
}
