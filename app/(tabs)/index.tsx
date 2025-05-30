import {ScrollView, Text, View, Image, Platform} from "react-native";
import {styles} from "@/assets/components/resumeStyleSheet";
import {Link} from "expo-router";

export default function Index() {
    return (
        <ScrollView style={{flex: 1, backgroundColor: "black"}}>
            <View style={{alignItems: "center",}}>
                <Text style={styles.header}>Sam Hapke</Text>
                <Text style={styles.standardText}>Polk City, Iowa</Text>
                <Text style={[styles.standardText, {textDecorationLine: "underline"}]}>samuel.p.hapke@gmail.com</Text>

                <Text style={styles.subHeader}>Summary</Text>
                <Text style={styles.standardText}>Adaptive, Self-Motivated, and Diligent worker. Currently working in React Native.</Text>
                <Text style={styles.standardText}>Interested in learning more development languages, and always seeking to deepen my knowledge.</Text>
                <Text style={styles.subHeader}>Skills</Text>
                <Text style={styles.standardText}>Independence, Organization, Communication.</Text>
                <Text style={styles.standardText}>current experience in javascript, html, and react native.</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1, alignItems: "center"}}>
                        <Text style={styles.subHeader}>HackerRank</Text>
                        <Link href={"https://www.hackerrank.com/profile/gamidoi"} style={styles.standardLink}>https://www.hackerrank</Link>
                        <Link href={"https://www.hackerrank.com/profile/gamidoi"} style={styles.standardLink}>.com/profile/gamidoi</Link>
                    </View>
                    {Platform.OS === "web" && <View style={{flex: 1, alignItems: "center"}}></View>}
                    <View style={{flex: 1, alignItems: "center"}}>
                        <Text style={styles.subHeader}>GitHub</Text>
                        <Link href={"https://github.com/Gamidoi"} style={styles.standardLink}>https://github.com</Link>
                        <Link href={"https://github.com/Gamidoi"} style={styles.standardLink}>/Gamidoi</Link>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: "center"}}>
                    <Text style={styles.subHeader}>Portfolio Piece</Text>
                    <Text style={styles.standardText}>DnD Character Tracker</Text>
                    <Image  style={styles.QRstyle} source={require("../../assets/images/QRCodeForDnDCharacterTracker2.png")} />
                    <Link href={"https://gamidoi.github.io/DnDCharacterTracker/"} style={styles.standardLink}>https://gamidoi.github.io/DnDCharacterTracker/</Link>
                </View>

                <Text style={styles.subHeader}>References</Text>
                <Text style={styles.standardText}>Sharon Heger</Text>
                <Text style={styles.standardText}>Retired Postmaster, Polk City, Iowa</Text>
                <Text style={styles.standardText}> </Text>
                <Text style={styles.standardText}>Madison (Maddie) Epperson</Text>
                <Text style={styles.standardText}>Owner of Epperson Farm Bureau, Nevada, Iowa</Text>
                <Text style={styles.standardText}> </Text>
                <Text style={styles.standardText}>contact information available on request</Text>

            </View>
        </ScrollView>
    );
}


