import React from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';

export default function CurrentMemo(props) {
  
   
    return ( 
        
        <ScrollView style={[styles.currentMemoBodyContainer, {borderColor: props.color}]}>         
           <TextInput style={styles.input} 
                      multiline = {true}
                      autoFocus={false}
                      onChangeText={text=>props.edit(text)}
                      value={props.memo.body}
                      />  
        </ScrollView>                                               
    );
    }
  
  const styles = StyleSheet.create({
    input: {
      padding: 15,
    },
    currentMemoBodyContainer: {
      backgroundColor: 'white',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 0,
      borderBottomWidth: 10,
      // borderColor: 'rgb(184, 231, 228)',
     
    } 
  });