import { Alert } from "react-native";

export const createTwoButtonAlert = (alertHading, alertBody) =>
Alert.alert(
    `${alertHading}`,
    `${alertBody}`,
    [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        { text: "Book", onPress: () => console.log("Booking Pressed") }
    ]
);