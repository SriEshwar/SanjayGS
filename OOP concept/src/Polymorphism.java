import java.util.List;

// Parent class for all types of phones
class Phone {
    protected List<String> sims;

    public void chooseSim(List<String> sims) {
        this.sims = sims;
        System.out.println("Selected SIMs: " + sims);
    }

    public void choosePlan(String sim) {
        System.out.println("Choosing plan for phone with SIM: " + sim);
    }

    public void recharge() {
        if (sims == null || sims.isEmpty()) {
            System.out.println("No SIMs selected.");
            return;
        }
        for (String sim : sims) {
            choosePlan(sim);
            System.out.println("Recharge completed for " + sim);
        }
    }
}

// Android phone subclass
class AndroidPhone extends Phone {
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

// iPhone subclass
class IPhone extends Phone {
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

public class Polymorphism {
    public static void main(String[] args) {
        // Polymorphism
        Phone androidPhone = new AndroidPhone();
        List<String> androidSims = List.of("Jio", "Vodafone");
        androidPhone.chooseSim(androidSims);
        androidPhone.recharge();

        Phone iPhone = new IPhone();
        List<String> iPhoneSims = List.of("Airtel", "Idea");
        iPhone.chooseSim(iPhoneSims);
        iPhone.recharge();
    }
}
//Polymorphism