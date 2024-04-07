import java.util.List;

// Abstract class for Phone
abstract class AbstractPhone {
    protected List<String> sims;

    public abstract void chooseSim(List<String> sims);
    public abstract void choosePlan(String sim);

    // Default implementation for recharge method
    public void recharge() {
        if (sims == null || sims.isEmpty()) {
            System.out.println("No SIMs selected.");
            return;
        }
        for (String sim : sims) {
            choosePlan(sim);
            // Code to perform recharge for each SIM
            System.out.println("Recharge completed for " + sim);
        }
    }
}

class AndroidPhone extends AbstractPhone {
    @Override
    public void chooseSim(List<String> sims) {
        this.sims = sims;
        System.out.println("Selected SIMs: " + sims);
    }

    @Override
    public void choosePlan(String sim) {
        System.out.println("Choosing plan for Android phone with SIM: " + sim);
        // Additional logic specific to Android phones
        switch (sim) {
            case "Jio":
                System.out.println("Available plans for Jio: Plan1 - Rs. 239, Plan2 - Rs. 299");
                break;
            case "Vodafone":
                System.out.println("Available plans for Vodafone: Plan1 - Rs. 199, Plan2 - Rs. 249");
                break;
            default:
                System.out.println("No plans available for " + sim);
        }
    }
}

class IPhone extends AbstractPhone {
    @Override
    public void chooseSim(List<String> sims) {
        this.sims = sims;
        System.out.println("Selected SIMs: " + sims);
    }

    @Override
    public void choosePlan(String sim) {
        System.out.println("Choosing plan for iPhone with SIM: " + sim);
        // Additional logic specific to iPhones
        switch (sim) {
            case "Airtel":
                System.out.println("Available plans for Airtel: Plan1 - Rs. 199, Plan2 - Rs. 249");
                break;
            case "Idea":
                System.out.println("Available plans for Idea: Plan1 - Rs. 219, Plan2 - Rs. 279");
                break;
            default:
                System.out.println("No plans available for " + sim);
        }
    }
}

public class Abstraction {
    public static void main(String[] args) {
        // Example usage
        AbstractPhone androidPhone = new AndroidPhone();
        List<String> androidSims = List.of("Jio", "Vodafone");
        androidPhone.chooseSim(androidSims);
        androidPhone.recharge();

        AbstractPhone iPhone = new IPhone();
        List<String> iPhoneSims = List.of("Airtel", "Idea");
        iPhone.chooseSim(iPhoneSims);
        iPhone.recharge();
    }
}
