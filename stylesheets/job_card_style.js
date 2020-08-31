import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
import { PRIMARY_THEME, DARK_THEME, current_theme } from '../components/Colors';

if (current_theme == 1) {
    var colors = PRIMARY_THEME;
}
else {
    var colors = DARK_THEME;
}

const job_card_style = StyleSheet.create({
    jobcard_view: {
        width: "95%",
        backgroundColor: colors.secondary_background,
        alignSelf: "center",
        padding: 10,
        elevation: 10,
        marginVertical: "1%"
    },
    jobcard_head: {
        color: "#69a74e",
        fontSize: width / 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    jobcard_details: {
        fontSize: width / 28,
        fontWeight: "bold",
        padding: 1,
        color: "#606770"
    }
});

module.exports = job_card_style;