public class Watch {
    private String brand;
    private String model;
    private String displayType;
    private String strapMaterial;
    private String waterResistance;

    public Watch(String brand, String model, String displayType, String strapMaterial, String waterResistance) {
        this.brand = brand;
        this.model = model;
        this.displayType = displayType;
        this.strapMaterial = strapMaterial;
        this.waterResistance = waterResistance;
    }

    public void displayFeatures() {
        // Display the features of the watch
        System.out.println("Brand: " + this.brand);
        System.out.println("Model: " + this.model);
        System.out.println("Display Type: " + this.displayType);
        System.out.println("Strap Material: " + this.strapMaterial);
        System.out.println("Water Resistance: " + this.waterResistance);
    }

    // Accessor methods for private fields
    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    // Other accessor methods for other private fields...

    // Inner class SmartWatch extending Watch
    public static class SmartWatch extends Watch {
        private boolean bluetoothEnabled;
        private boolean heartRateMonitor;

        public SmartWatch(String brand, String model, String displayType, String strapMaterial, String waterResistance,
                          boolean bluetoothEnabled, boolean heartRateMonitor) {
            super(brand, model, displayType, strapMaterial, waterResistance);
            this.bluetoothEnabled = bluetoothEnabled;
            this.heartRateMonitor = heartRateMonitor;
        }

        public void displaySmartFeatures() {
            // Display smart features of the watch
            System.out.println("Brand: " + getBrand());
            System.out.println("Bluetooth Enabled: " + bluetoothEnabled);
            System.out.println("Heart Rate Monitor: " + heartRateMonitor);
        }
    }

    public static void main(String[] args) {
        // Example usage
        SmartWatch myWatch = new SmartWatch("Titan", "Classic", "Analog", "Leather", "30 meters", true, true);
        myWatch.displaySmartFeatures();
        myWatch.displayFeatures();
    }
}


// MultiLevel Inheritance

public class Watch {
    private String brand;
    private String model;
    private String displayType;
    private String strapMaterial;
    private String waterResistance;

    public Watch(String brand, String model, String displayType, String strapMaterial, String waterResistance) {
        this.brand = brand;
        this.model = model;
        this.displayType = displayType;
        this.strapMaterial = strapMaterial;
        this.waterResistance = waterResistance;
    }

    public void displayFeatures() {
        // Display the features of the watch
        System.out.println("Brand: " + this.brand);
        System.out.println("Model: " + this.model);
        System.out.println("Display Type: " + this.displayType);
        System.out.println("Strap Material: " + this.strapMaterial);
        System.out.println("Water Resistance: " + this.waterResistance);
    }

    // Accessor methods for private fields
    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    // Other accessor methods for other private fields...

    // Inner class TitanSmartWatch extending Watch
    public static class TitanSmartWatch extends Watch {
    private boolean bluetoothEnabled;
    private boolean heartRateMonitor;

    public TitanSmartWatch(String brand, String model, String displayType, String strapMaterial, String waterResistance,
                      boolean bluetoothEnabled, boolean heartRateMonitor) {
        super(brand, model, displayType, strapMaterial, waterResistance);
        this.bluetoothEnabled = bluetoothEnabled;
        this.heartRateMonitor = heartRateMonitor;
    }

    // Getter method for heartRateMonitor
    protected boolean isHeartRateMonitorEnabled() {
        return heartRateMonitor;
    }

    public void displayTitanFeatures() {
        // Display smart features of the watch
        System.out.println("Brand: " + getBrand());
        System.out.println("Bluetooth Enabled: " + bluetoothEnabled);
        System.out.println("Heart Rate Monitor: " + isHeartRateMonitorEnabled());
    }
}

    // Inner class TitanRegalia extending TitanSmartWatch
    public static class TitanRegalia extends TitanSmartWatch {
        private boolean callsEnabled;
        private boolean locationTracer;

        public TitanRegalia(String brand, String model, String displayType, String strapMaterial, String waterResistance,
                          boolean bluetoothEnabled, boolean heartRateMonitor, boolean callsEnabled, boolean locationTracer) {
            super(brand, model, displayType, strapMaterial, waterResistance, bluetoothEnabled, heartRateMonitor);
            this.callsEnabled = callsEnabled;
            this.locationTracer = locationTracer;
        }

        public void displayTitanRegaliaFeatures() {
            // Display smart features of the watch
            System.out.println("Brand: " + getBrand());
           
            System.out.println("Calls Enabled: " + callsEnabled);
            System.out.println("Location Tracer: " + locationTracer);
        }
    }

    public static void main(String[] args) {
        // Example usage
        TitanRegalia myWatch = new TitanRegalia("Titan", "Classic", "Analog", "Leather", "30 meters", true, true, true, true);
        myWatch.displayTitanRegaliaFeatures();
        myWatch.displayTitanFeatures();
        myWatch.displayFeatures();
    }
}


