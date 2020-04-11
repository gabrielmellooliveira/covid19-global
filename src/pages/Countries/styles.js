import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    countriesContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    countriesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    countriesLogo: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    countriesLogoImage: {
        width: 26, 
        height: 26, 
        marginRight: 5
    },
    countriesLogoText: {
        fontWeight: 'bold', 
        color: 'black',
        fontSize: 18,
    },
    countriesHeaderText: {
        fontSize: 15,
        color: '#737380'
    },
    countriesHeaderTextBold: {
        fontWeight: 'bold'
    },
    countriesTitle: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131A',
        fontWeight: 'bold'
    },
    countriesDescription: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    countriesTag: {
        fontSize: 14, 
        lineHeight: 24,
        color: '#737380',
        fontWeight: 'bold'
    },
    countryList: {
        marginTop: 32
    }
});