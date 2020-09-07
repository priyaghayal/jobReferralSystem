import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import EditPost from '../screens/EditPost';
import NewPost from '../screens/NewPost';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import changeTheme from '../screens/changeTheme';

import DynamicStyle from '../utils/DyamicStyle';

import ReferPerson from '../screens/ReferPerson';
import ReferredPeople from '../screens/ReferredPeople';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerLeft: () => null
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: "Details"
        }
    },
    EditPost: {
        screen: EditPost,
        navigationOptions: {
            title: "Edit Post Details"
        }
    },
    NewPost: {
        screen: NewPost,
        navigationOptions: {
            title: "Add New Post"
        }
    },
    ReferPerson: {
        screen: ReferPerson,
        navigationOptions: {
            title: "Refer Person"
        }
    },
    ReferredPeople: {
        screen: ReferredPeople,
        navigationOptions: {
            title: "Referred People"
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            title: "Settings"
        }
    },
    changeTheme: {
        screen: changeTheme,
        navigationOptions: {
            title: "Change Theme"
        }
    }

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: DynamicStyle.bgColor,
            height: 50
        }
    }
});

export default HomeStack;

