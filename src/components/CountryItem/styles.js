import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    countryItemContainer: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    countryItemImage: {
        width: 85, 
        height: 50, 
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ecf0f1',
        shadowColor: 'rgba(0,0,0, .7)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 5
    },
    countryItemInfo: { 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        marginLeft: 10
    },
    countryItemButtonContainer: {
        justifyContent: 'center', 
        alignItems: 'flex-end'
    },
    countryItemButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 40,
        minWidth: 30
    },
    countryItemValue: {
        fontSize: 16
    },
    countryItemValueBold: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    }
});