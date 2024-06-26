import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
	return (
		<ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/logo-red.png")} />
				<AppText style={styles.tagline}> Sell What You Don't Need</AppText>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonContainer: {
		width: "100%",
		padding: 20,
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},

	tagline: {
		fontSize: 25,
		fontWeight: "600",
		paddingVertical: 20,
	},
});

export default WelcomeScreen;
