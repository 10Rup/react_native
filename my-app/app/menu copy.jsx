import { Appearance, StyleSheet, Platform, SaveAreaView, ScrollView, FlatList, View, Text, Iamge } from "react-native";
import {Colors} from "@/constants/Colors";
import {MENU_ITEMS} from "@/constants/MenuItems";


export default function Menu_Screen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const styles = createStyleSheet(theme, colorScheme);
    const Container = Platform.OS ==="web"? ScrollView : SaveAreaView;
    
    return (
        <Container>
            <FlatList 
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>{
                    <View>
                        <Text>{item}</Text>
                    </View>
                }}
            >

            </FlatList>

        </Container>

    )
}


function createStyleSheet(theme, colorScheme){
    return StyleSheet.create({

    })
}