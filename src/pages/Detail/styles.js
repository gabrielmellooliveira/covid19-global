import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    detailContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    detailHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    detailHeaderText: {
        marginTop: 0, 
        fontSize: 24, 
        color: 'black',
        marginLeft: 10, 
        fontWeight: 'bold'
    },
    detailHeaderFlag: {
        width: 50, 
        height: 30, 
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ecf0f1'
    },
    detailItem: {
        padding: 24,
        paddingHorizontal: 18,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },
    detailItemTitle: { 
        fontSize: 24, 
        marginTop: 0, 
        marginBottom: 5, 
        color: '#41414d', 
        fontWeight: 'bold'
    },
    detailItemTitle2: {
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 5,
        color: '#13131a',
        fontWeight: 'bold'
    }
});