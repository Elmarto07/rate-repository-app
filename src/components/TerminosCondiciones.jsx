import React from "react";
import {Text, View, ScrollView, StyleSheet} from 'react-native'
import SwitchButton from './switchButton';

const TerminosCondiciones = ({ onSwitchToggle }) => {

    return (
        <View style={styles.scroll}>
            <ScrollView style={styles.textDiv}>     
                
                    <Text style={styles.text}>TERMINOS Y CONDICIONES
                    
                    </Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet libero nibh, eget ornare quam vestibulum vitae. Proin lobortis dolor est, ac accumsan mauris condimentum non. In quis urna sed nisl pellentesque vestibulum id eu nunc. Integer mollis tempus elit scelerisque aliquam. Sed ac metus tincidunt, molestie ex in, rhoncus felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis tellus vestibulum, eleifend nisi non, ultricies dui. Donec ac placerat urna. Phasellus vestibulum id velit eu luctus. Etiam venenatis commodo blandit. Phasellus nec est eget magna eleifend convallis. Etiam vitae sollicitudin libero, sit amet tempor sem. Nulla eu volutpat massa. Quisque eget feugiat orci. Vestibulum viverra metus eget tortor finibus tempus. Praesent quis tincidunt risus.

Cras vel metus vitae magna volutpat posuere eget nec sem. Quisque eget risus dui. Praesent lectus enim, vulputate eu semper sit amet, venenatis at magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sit amet ante interdum, pretium justo in, posuere arcu. Vivamus maximus faucibus enim, euismod laoreet lectus tincidunt sit amet. Nullam sed sem vitae diam iaculis ultrices. Aenean vel lorem a orci malesuada tempus sit amet at purus. Duis interdum consequat interdum. Donec nec leo eros. Etiam nisl arcu, gravida eu quam ut, commodo tincidunt nibh. Nullam ultrices</Text>
            <SwitchButton  onValueChange={onSwitchToggle}/>            
            </ScrollView>   
        </View>    
    );
};

const styles = StyleSheet.create({
    textDiv: {
        width: 300,
        height: 50,
        backgroundColor: '#d4d0d0',
        
    },
    scroll:{
        margin: 20,
        height: 200,
    },
    text: {
        textAlign: 'center',
      },
})

export default TerminosCondiciones;