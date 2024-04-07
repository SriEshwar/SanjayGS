import java.util.ArrayList;
//import java.util.HashMap;
import java.util.List;
//import java.util.Map;

interface Phone {
    void recharge();
    void chooseSim(List<String> sims);
    void choosePlan(String sim);
}

class AndroidPhone implements Phone {
    private List<String> sims = new ArrayList<>();

    @Override
    public void chooseSim(List<String> sims) {
        this.sims.addAll(sims);
        System.out.println("Selected SIMs for Android phone: " + sims);
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
            // Add cases for other SIMs
            default:
                System.out.println("No plans available for " + sim);
        }
    }

    @Override
    public void recharge() {
        // For demonstration purposes, let's choose the first SIM for recharge
        choosePlan(sims.get(0));
        // Code to perform recharge
        System.out.println("Recharge completed for Android phone with SIMs: " + sims);
    }
}

class IPhone implements Phone {
    private List<String> sims = new ArrayList<>();

    @Override
    public void chooseSim(List<String> sims) {
        this.sims.addAll(sims);
        System.out.println("Selected SIMs for iPhone: " + sims);
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
            // Add cases for other SIMs
            default:
                System.out.println("No plans available for " + sim);
        }
    }

    @Override
    public void recharge() {
        // For demonstration purposes, let's choose the first SIM for recharge
        choosePlan(sims.get(0));
        // Code to perform recharge
        System.out.println("Recharge completed for iPhone with SIMs: " + sims);
    }
}

public class Interface {
    public static void main(String[] args) {
        // Example usage
        Phone androidPhone = new AndroidPhone();
        List<String> androidSims = new ArrayList<>();
        androidSims.add("Jio");
        androidSims.add("Vodafone");
        androidPhone.chooseSim(androidSims);
        androidPhone.recharge();

        Phone iPhone = new IPhone();
        List<String> iPhoneSims = new ArrayList<>();
        iPhoneSims.add("Airtel");
        iPhoneSims.add("Idea");
        iPhone.chooseSim(iPhoneSims);
        iPhone.recharge();
    }
}