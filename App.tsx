import { Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { PaperProvider, Snackbar } from 'react-native-paper'
import { ReactNode, useState } from 'react'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView />
      <View style={styles.container}>
        <SnackWrap color="red">
          <Snack name="Red"/>
        </SnackWrap>
        <SnackWrap color="green">
          <Snack name="Green"/>
        </SnackWrap>
        <SnackWrap color="blue">
          <Snack name="Blue"/>
        </SnackWrap>
      </View>
    </PaperProvider>
  );
}

function SnackWrap({children, color}: { children: ReactNode, color: string }) {
  return <View style={[styles.snackWrap, {backgroundColor: color}]}>
    {children}
  </View>
}

function Snack({name}: { name: string }) {
  const [isOpen, setOpen] = useState(false)

  return <>
    <Button title={`Open snack "${name}"`} onPress={() => setOpen(true)} color="#fff"/>
    <Snackbar visible={isOpen} onDismiss={() => setOpen(false)}>
      Snack bar text
    </Snackbar>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  snackWrap: {
    marginHorizontal: 32
  },
});
