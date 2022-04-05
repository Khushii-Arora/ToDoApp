import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

import GetTask from "./src/GetTask.jsx";
import Header from "./src/Header.jsx";
import PostTask from "./src/PostTask.jsx";
export default function App() {
  return (
    <View style={styles.container}> 
      <StatusBar style="auto" />

       <Header />

        
           {/*ADD TASK HERE*/}
            <PostTask />
            <GetTask />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#ff0000',
     
  },
 
});
