import React from 'react';
import {
    View, 
    Image, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const ImageProfileGithub = 'https://camo.githubusercontent.com/ea8039446cd686b6613c475070a4cc3ea6c7a6befc2fd24958d41addd7002d28/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3636343237303930363730383732313636342f3937303239393238323034373530303332382f646f776e6c6f616432303232303530303039323134352e706e67';
const urlToMyGithub = 'https://github.com/LeticiaMile';

const App = () => {

    const handlePressGoToGithub = async ()=>{
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}> 
    <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
    <View style={style.content}>
        <Image 
        accessibilityLabel="Personagem da Leticia" 
        style={style.avatar} 
        source={{uri: ImageProfileGithub}}
        /> 
    <Text accessibilityLabel ="Nome: Leticia Milena"
    style={[style.defaultText, style.name]}
    >Leticia Milena</Text>
    <Text accessibilityLabel ="Nickname: LeticiaMile"
    style={[style.defaultText, style.nickname]}
    >@LeticiaMile</Text>
    <Text accessibilityLabel ="Descrição: Estudante de Tecnologia da Informação | Mobile Developer."
    style={[style.defaultText, style.description]}
    >Estudante de Tecnologia da Informação | Mobile Developer. 
    </Text>
    <Pressable onPress={handlePressGoToGithub}>
    <View style={style.button}>
        <Text style={[style.defaultText, style.textButton]}>Open is Github</Text>
    </View>
    </Pressable>
    </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{  //Column
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a Tela INTEIRA
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    button: {  
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    });