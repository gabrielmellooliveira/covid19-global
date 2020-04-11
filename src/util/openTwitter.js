import { Linking } from 'react-native';

export default function openTwitter(text) {
    return Linking.openURL(`https://twitter.com/intent/tweet?text=${text}`);
}