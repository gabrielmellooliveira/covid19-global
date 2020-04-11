import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import formatNumber from '../../util/formatNumber';

import styles from './styles';

export default function CountryItem({ country }) {
    const navigation = useNavigation();

    function navigateToDetail(country) {
        navigation.navigate('Detail', { country });
    }

    return (
        <View style={styles.countryItemContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    resizeMode="stretch"
                    style={styles.countryItemImage}
                    source={{ uri: country.countryInfo.flag }} 
                />

                <View style={styles.countryItemInfo}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.countryItemValueBold}>
                            {country.country} -
                        </Text>
                        <Text style={[styles.countryItemValueBold, { marginLeft: 5 }]}>
                            {formatNumber(country.cases)}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                        <Text style={[styles.countryItemValue, { color: "#e02041" }]}>
                            <Feather name="user-x" size={16} color="#e02041" />
                            {` ${formatNumber(country.deaths)}`}
                        </Text>
                        <Text style={[styles.countryItemValue, { marginLeft: 10, color: '#27ae60' }]}>
                            <Feather name="user-check" size={16} color="#27ae60" />
                            {` ${formatNumber(country.recovered)}`}
                        </Text>
                    </View>
                </View>

                <View style={styles.countryItemButtonContainer}>
                    <TouchableOpacity style={styles.countryItemButton} onPress={() => navigateToDetail(country)}>
                        <Feather name="arrow-right" size={18} color="#e02041" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
