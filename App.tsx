import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  useColorScheme,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PhotoLibraryIcon } from './src/components/PhotoLibraryIcon';

const Tab = createBottomTabNavigator();

// Photos Screen with custom photo_library image
function PhotosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Photos</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.photoGrid}>
          {/* Add your custom photo_library image */}
          <View style={styles.customImageContainer}>
            <Image
              source={require('./assets/images/photo_library.png')}
              style={styles.photoLibraryIcon}
              resizeMode="contain"
            />
            <Text style={styles.customImageText}>Photo Library</Text>
          </View>

          {/* Placeholder for photo grid */}
          {Array.from({ length: 11 }, (_, i) => (
            <View key={i} style={styles.photoPlaceholder}>
              <Icon name="photo" size={40} color="#9E9E9E" />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Capture Screen
function CaptureScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Capture</Text>
      </View>
      <View style={styles.centerContent}>
        <View style={styles.captureArea}>
          <Icon name="camera-alt" size={80} color="#6200EE" />
          <Text style={styles.captureText}>Tap to capture photo</Text>
          <TouchableOpacity style={styles.captureButton}>
            <Icon name="camera" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Share Screen
function ShareScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Share</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.shareSection}>
          <Text style={styles.sectionTitle}>Recent Shares</Text>
          {/* Placeholder for recent shares */}
          {Array.from({ length: 5 }, (_, i) => (
            <TouchableOpacity key={i} style={styles.shareItem}>
              <Icon name="person" size={24} color="#6200EE" />
              <Text style={styles.shareItemText}>Contact {i + 1}</Text>
              <Icon name="share" size={20} color="#9E9E9E" />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.shareSection}>
          <Text style={styles.sectionTitle}>Share Options</Text>
          <TouchableOpacity style={styles.shareOption}>
            <Icon name="link" size={24} color="#6200EE" />
            <Text style={styles.shareOptionText}>Copy Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareOption}>
            <Icon name="email" size={24} color="#6200EE" />
            <Text style={styles.shareOptionText}>Send via Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareOption}>
            <Icon name="message" size={24} color="#6200EE" />
            <Text style={styles.shareOptionText}>Send via SMS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Main App Component
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = isDarkMode ? '#121212' : '#FFFFFF';

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Photos') {
              return <PhotoLibraryIcon size={size} color={color} />;
            } else if (route.name === 'Capture') {
              return <Icon name="camera-alt" size={size} color={color} />;
            } else if (route.name === 'Share') {
              return <Icon name="share" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#9E9E9E',
          tabBarStyle: {
            backgroundColor: isDarkMode ? '#1F1F1F' : '#FFFFFF',
            borderTopColor: isDarkMode ? '#333333' : '#E0E0E0',
            borderTopWidth: 1,
            elevation: 8,
            shadowOpacity: 0.1,
            shadowRadius: 4,
            shadowColor: '#000000',
            shadowOffset: { height: -2, width: 0 },
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen name="Photos" component={PhotosScreen} />
        <Tab.Screen name="Capture" component={CaptureScreen} />
        <Tab.Screen name="Share" component={ShareScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#6200EE',
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 4,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  // Photos Screen Styles
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoPlaceholder: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
  },
  // Capture Screen Styles
  captureArea: {
    alignItems: 'center',
    padding: 32,
  },
  captureText: {
    fontSize: 18,
    color: '#666666',
    marginTop: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  captureButton: {
    backgroundColor: '#6200EE',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: '#6200EE',
    shadowOffset: { height: 3, width: 0 },
  },
  // Share Screen Styles
  shareSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  shareItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
  },
  shareItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    marginLeft: 12,
  },
  shareOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
  },
  shareOptionText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 16,
  },
  // Add new styles for the custom image
  customImageContainer: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#F5F5F5',
    marginBottom: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
  },
  photoLibraryIcon: {
    width: 40,
    height: 40,
  },
  customImageText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default App;
