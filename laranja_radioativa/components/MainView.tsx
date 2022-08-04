import React from "react"
import { View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { AppColors, Styles } from "../styles"


interface ViewInterface {
    children?:React.ReactNode
}

export const MainView = ({children} : ViewInterface) => {
    return <View style={[Styles.mainView]}>
    <LinearGradient colors={[AppColors.preto,AppColors.vermelho_saturado]} style={{position:'absolute',height:'100%',width:'100%'}}>
    </LinearGradient>
    {children}
    </View>
}