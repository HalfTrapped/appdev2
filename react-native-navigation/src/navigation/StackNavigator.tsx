import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, useNavigation, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';

function SettingsScreen({ route }) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>User ID: {JSON.stringify(userId)}</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}



function HomeScreen({ route }) {
  const navigation = useNavigation();
  React.useEffect(() => {
    if (route.params?.post) {
      alert('New post: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={
          () =>
            navigation.navigate('More', {
              screen: 'Settings',
              params: { userId: 'jane' },
            })
        }
      >
        Go to Settings
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Details', {itemId: 86, otherParam: 'anything you want here'});
        }}
      >
        Go to Details
      </Button>
    </View>
  );
}
  
function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button onPress={() => navigation.navigate('Home')}>
        Go to Home
      </Button>
      <Button
        onPress={
          () =>
            navigation.push('Details', {
              // Randomly generate an ID for demonstration purposes
              itemId: Math.floor(Math.random() * 100),
              otherParam: 'Updated parameter',
            })
        }
      >
        Go to Details... again
      </Button>

      <Button onPress={() => navigation.goBack()}>
        Go back
      </Button>
      <Button onPress={() => navigation.popToTop()}>
        Go back to first screen in stack
      </Button>

    </View>
  );
}

function CreatePostScreen({ route }) {
  const navigation = useNavigation();
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
      </Button>
    </>
  );
}



const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      CreatePost: CreatePostScreen,
      options: {
        title: 'Overview',
        initialParams: { itemId: 42 },
      },
    },
    Details: DetailsScreen,
  },
});

const MoreStack = createNativeStackNavigator({
  screens: {
    Settings: SettingsScreen,
    Profile: ProfileScreen,
  },
});

const RootTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    More: MoreStack,
  },
});

const Navigation = createStaticNavigation(RootTabs);

export default Navigation;

