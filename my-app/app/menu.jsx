import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import {Colors} from "@/constants/Colors";
import {MENU_ITEMS} from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages"

export default function Menu_Screen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
    const styles = createStyleSheet(theme, colorScheme);
    const Container = Platform.OS === "web"? ScrollView : SafeAreaView;
    const SeparatorComponent= <View style={styles.separator}></View>
    const headerComponent =<Text>Top Of the List</Text>
    const footerComponent =<Text>End Of the List</Text>
    return (
        <Container>
            <FlatList 
                data={MENU_ITEMS}
                ListEmptyComponent={<Text>No Menu Found</Text>}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={SeparatorComponent}
                ListHeaderComponent={headerComponent}
                ListFooterComponent={footerComponent}
                ListFooterComponentStyles={styles.footer}
                renderItem={({item}) =>(
                    <View>
                        <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        </View>
                        <Image source={MENU_IMAGES[item.id-1]} style={styles.image}></Image>
                    </View>
                )}>

            </FlatList>

        </Container>

    )
}


function createStyleSheet(theme, colorScheme){
    return StyleSheet.create({
        contentContainer:{
            paddingTop:20,
            paddingBottom:20,
            paddingRight:10,
            paddingLeft:10,
            // paddingHorizontal:10,
            // backgroundColor: theme.background,
        },
        image:{
            width:'100%',
            heigth:'100%',
            flex:1,
            justifyContent:'center',
        },
        separator:{
            height:5,
            backgroundColor:'rgb(73, 81, 73)'
        },
        footer:{
            marginHorizontal:'auto'
        }

    })
}