import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";

import Card from "./components/Card";

export default function App() {
	return (
		// <ListingDetailsScreen />
		<ViewImageScreen />
		// <View style={{ flexDirection: "column", alignItems: "center", width: "100%", marginTop: 40, paddingHorizontal: 20 }}>
		// 	<Card title="Red Jacket for sale" subTitle="$100" image={require("./assets/jacket.jpg")} />
		// </View>
	);
}
