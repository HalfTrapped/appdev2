import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      
      {/* Course & Section */}
      <View>
        <Text>Course & Section:</Text>
        <Text>BSIS3 A</Text>
      </View>

      {/* Name */}
      <View>
        <Text>Name:</Text>
        <Text>Tulalian, Aaron Matthew R.</Text>
      </View>

      {/* Age */}
      <View>
        <Text>Age:</Text>
        <Text>21</Text>
      </View>

      {/* Favorite Hobby */}
      <View>
        <Text>Favorite Hobby:</Text>
        <Text>
          Drawing, Playing card games, listening to documentaries and fantasy stories
        </Text>
      </View>

      {/* Pet Peeves */}
      <View>
        <Text>3 Pet Peeves:</Text>
        <Text>
          1. Watching short content with loud volume{"\n"}
          2. Violating boundaries like ignoring requests like "no touching"{"\n"}
          3. ALWAYS asking for consideration from instructors
        </Text>
      </View>

    </View>
  );
};
