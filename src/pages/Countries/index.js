import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { formatNumber, openTwitter } from '../../util';
import { CountryItem } from '../../components';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    async function loadCountries() {
        if (loading) {
            return;
        }

        setLoading(true);

        const responseAll = await api.get('all');

        setTotal(responseAll.data.cases);

        const responseCountries = await api.get('countries?sort=cases');

        setCountries(responseCountries.data);
        setLoading(false);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <View style={styles.countriesContainer}>
            <View style={styles.countriesHeader}>
                <View>
                    <View style={styles.countriesLogo}>
                        <Image source={logoImg} style={styles.countriesLogoImage} />
                        <Text style={styles.countriesLogoText}>
                            COVID-19!
                        </Text>
                    </View>
                </View>
                <Text style={styles.countriesHeaderText}>
                    Total de 
                    <Text style={styles.countriesHeaderTextBold}>
                        {total !== 1 ? ` ${formatNumber(total)} casos` : ` ${formatNumber(total)} caso`}
                    </Text>.
                </Text>
            </View>

            <Text style={styles.countriesTitle}>
                Casos Globais!
            </Text>
            <Text style={styles.countriesDescription}>
                Veja os casos dos países no mundo.
            </Text>
            <Text style={styles.countriesTag} onPress={_ => openTwitter('%23FIQUEEMCASA')}>
                <Feather name="twitter" size={14} color="#00acee" iconStyle={{ marginRight: 5 }} />
                {` #FIQUEEMCASA`} 
            </Text>

            <FlatList
                data={countries}
                style={styles.countryList}
                keyExtractor={country => String(country.country)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: country }) => (
                    <CountryItem country={country} />
                )}
            />
        </View>
    );
}
