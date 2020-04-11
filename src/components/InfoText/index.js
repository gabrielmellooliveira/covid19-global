import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles.js';

export default function InfoText({ 
    propertyText, valueText, 
    propertyFontSize, valueFontSize, 
    propertyColor, valueColor
}) {
    const stylesProperty = { fontSize: propertyFontSize || 18, color: propertyColor || 'black' };
    const stylesValue = { fontSize: valueFontSize || 18, color: valueColor || 'black' };

    return (
        <View style={styles.infoText}>
            <Text style={[styles.infoTextProperty, stylesProperty]}>
                {propertyText}
            </Text>
            <Text style={[styles.infoTextValue, stylesValue]}>
                {valueText}
            </Text>
        </View>
    );
}
