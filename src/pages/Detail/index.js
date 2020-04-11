import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { formatNumber } from '../../util';
import { InfoText } from '../../components';

import styles from './styles.js';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const country = route.params.country;

    function navigateToBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.detailContainer}>
            <View style={[styles.detailHeader, { justifyContent: 'space-between' }]}>
                <View style={styles.detailHeader}>
                    <Image 
                        style={styles.detailHeaderFlag}
                        resizeMode="stretch"
                        source={{ uri: country.countryInfo.flag }} 
                    />
                    <Text style={styles.detailHeaderText}>
                        {country.country}
                    </Text>
                </View>
                
                <TouchableOpacity onPress={navigateToBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.detailItem}>
                <Text style={styles.detailItemTitle}>
                    Dados gerais
                </Text>

                <InfoText
                    propertyText="Total de casos:"
                    valueText={formatNumber(country.cases)}
                />

                <InfoText
                    propertyText="Total de mortes:"
                    valueText={formatNumber(country.deaths)}
                    valueColor="#e02041"
                />

                <InfoText
                    propertyText="Total de recuperações:"
                    valueText={formatNumber(country.recovered)}
                    valueColor="#27ae60"
                />

                <InfoText
                    propertyText="Total de casos atuais:"
                    valueText={formatNumber(country.active)}
                />
            </View>
            
            <View style={[styles.detailItem, { marginTop: 20 }]}>
                <Text style={styles.detailItemTitle2}>
                    Dados diários
                </Text>

                <InfoText
                    propertyText="Total de casos hoje:"
                    propertyFontSize={16}
                    valueText={formatNumber(country.todayCases)}
                    valueFontSize={16}
                />

                <InfoText
                    propertyText="Total de mortes hoje:"
                    propertyFontSize={16}
                    valueText={formatNumber(country.todayDeaths)}
                    valueFontSize={16}
                />
            </View>
        </View>
    );
}
