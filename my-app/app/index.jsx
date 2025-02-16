import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import coffeeShopImg from '@/assets/images/coffeeshophouse.jpg'
import {Link} from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeShopImg}
      resizeMode='cover'
      style={styles.image}>
        
        
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/explore" style={styles.link}>Explore</Link>
        
        <Link href="/contactus" style={{ marginHorizontal : 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
        <Link href="/menu" style={{ marginHorizontal : 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Coffee Menu</Text>
          </Pressable>
        </Link>

      </ImageBackground>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container :{
        flex:1,
        flexDirection: 'column',
        
    },
    title:{
        color: 'white',
        fontWeight:'bold',
        textAlign : 'center',
        fontSize:40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom:120,
    },
 
    link:{
        color: 'white',
        fontWeight:'bold',
        textAlign : 'center',
        fontSize:40,
        textDecorationLine: 'underline',
        backgroundColor: 'rgba(6, 2, 2, 0.5)',
    },

    button:{
        height:60,
        borderRadius:20,
        justifyContent:"center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding:6,
    },
    buttonText:{
        color: 'white',
        fontWeight:'bold',
        textAlign : 'center',
        fontSize:16,
        // textDecorationLine: 'underline',
        // backgroundColor: 'rgba(6, 2, 2, 0.5)',
        padding:4,
    },



    image:{
      width:'100%',
      heigth:'100%',
      flex:1,
      justifyContent:'center',
    },

})

export default app