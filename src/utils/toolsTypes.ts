import { Home } from '../screen/Home';
import { Mural } from '../screen/Mural';
import { QrCode } from '../screen/QrCode';
import { NewsFeed } from '../screen/NewsFeed';
import { Aura } from '../screen/Aura';

export const toolTypes = {
    home: {
        title: 'Home',
        screen: Home,
    },
    mural: {
        title: 'Mural',
        screen: Mural,
    },
    qrcode: {
        title: 'QrCode',
        screen: QrCode,
    },
    newsfeed: {
        title: 'NewsFeed',
        screen: NewsFeed,
    },
    aura: {
        title: 'Aura',
        screen: Aura,
    }
  };