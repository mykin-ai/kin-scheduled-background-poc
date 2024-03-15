const { withAndroidManifest } = require('@expo/config-plugins');

const withBackgroundService = (config) => {
    return withAndroidManifest(config, async (config) => {
        const androidManifest = config.modResults.manifest;

        // Ensure the <application> tag exists
        const application = androidManifest.application[0];

        // Define the <service> element to be added
        const serviceElement = {
            $: {
                'android:name': 'com.kinbackgroundactionsjava.BackgroundActionsTask',
            },
            // Include any additional attributes for the <service> tag here
        };

        console.log("pluggggggg")
        // Add the <service> element to the <application> tag
        if (!application.service) {
            application.service = [];
        }
        application.service.push(serviceElement);

        return config; // Return the modified config
    });
};

module.exports = withBackgroundService;
