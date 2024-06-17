import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";

import Card from "./components/Card";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import RegisterScreen from "./screens/RegisterScreen";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function App() {
	return (
		//<ListingsScreen />
		<MessagesScreen />
		// <ListingEditScreen />

		// <View style={{ flexDirection: "column", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: 20 }}>
		// 	<Card title="Red Jacket for sale" subTitle="$100" image={require("./assets/jacket.jpg")} />
		// </View>
	);
}
