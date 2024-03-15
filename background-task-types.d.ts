declare module '@voximplant/react-native-foreground-service'{
    interface NotificationChannel {
        id: string;
        name: string;
        description: string;
        enableVibration: boolean;
        importance?: number;
    }

    interface NotificationConfig {
        channelId: string;
        id: number;
        title: string;
        text: string;
        icon: string;
        priority: number;
        button: string;
    }

    export default class VIForegroundService {
        static getInstance(): VIForegroundService;
        createNotificationChannel(channel: NotificationChannel): Promise<void>;
        startService(config: NotificationConfig): Promise<void>;
        off(): void;
        stopService(): Promise<void>;
    }
}