import React from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';

export default function Themes(props) {
  
    const colors = [ {key: 0, color: "rgb(225, 189, 224)"},
                    {key: 2, color: "rgb(205, 233, 254)"},
                    {key: 3, color: "rgb(182, 173, 193)"},
                    {key: 4, color: "rgb(64, 128, 128)"},
                    {key: 5, color: "rgb(225, 225, 153)"},
                    {key: 6, color: "black"},
                    {key: 7, color: "rgb(107, 107, 107)"},
                    {key: 8, color: "white"},
                    {key: 9, color: "rgb(155, 155, 206)"},
                    {key: 10, color: "rgb(205, 254, 188)"},
                    {key: 11, color: "rgb(251, 125, 89)"},
                    {key: 12, color: "rgb(184, 231, 228)"},
                    {key: 13, color: "rgb(75, 136, 209)"},
                    {key: 14, color: "rgb(192, 192, 192)"},
                    {key: 15, color: "rgb(128, 0, 64)"},
    ]
    
   return ( 
       <>
        <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 15}}>Change Theme</Text>
        <FlatList 
            style={{alignSelf: 'center', margin: 12,}}
            data={colors}
            numColumns={3}
            renderItem={ ({item}) =>
                <TouchableOpacity   
                    style={{backgroundColor: item.color, 
                            borderWidth: 1, width: 70,                                
                            margin: 10, height: 40                                                         
                    }}
                    onPress={() =>  props.colorChanger(item.color)} > 
                </TouchableOpacity>                        
            }          
        />
        </>
                                                   
    );
    }
