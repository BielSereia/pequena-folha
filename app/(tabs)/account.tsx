import { TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller, FieldValues } from 'react-hook-form';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';

export default function TabTwoScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [ submittedData, setSubmittedData ] = useState<FieldValues>();

  const onSubmit = (data: FieldValues) => {
    console.log('Submitted Data:', data);
    setSubmittedData(data);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Autenticar</ThemedText>
      </ThemedView>
      <ThemedText>Entre em sua conta para começar</ThemedText>
      <ThemedView style={styles.contentContainer}>
      <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Seu email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          rules={{ required: 'Você deve inserir seu e-mail' }}
        />
        { errors.email && <Text style={styles.errorText}>{errors.email.message?.toString()}</Text> }

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Sua senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          rules={{ required: 'Você deve inserir sua senha' }}
        />
        { errors.password && <Text style={styles.errorText}>{errors.password.message?.toString()}</Text> }

        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  contentContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 4,
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
