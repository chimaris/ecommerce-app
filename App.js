import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";

import Card from "./components/Card";
import AccountScreen from "./screens/AccountScreen";
import ListingsScreen from "./screens/ListingsScreen";
import AppTextInput from "./components/AppTextInput";
import AppPicker from "./components/AppPicker";

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
];
export default function App() {
	return (
		// <ListingDetailsScreen />
		// <ViewImageScreen />
		// <ListingsScreen />
		<View>
			<AppTextInput placeholder="Input Name" />
			<AppPicker items={categories} icon="apps" placeholder="Category" />
		</View>
		// <View style={{ flexDirection: "column", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: 20 }}>
		// 	<Card title="Red Jacket for sale" subTitle="$100" image={require("./assets/jacket.jpg")} />
		// </View>
	);
}
