import {Text, SafeAreaView, Image, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {loginUserAction} from '../../redux/slices/loginSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpMode, setSignUpMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const loginUser = () => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (signUpMode) {
      if (emailRegex?.test(email)) {
        if (password?.length < 6) {
          Alert.alert('Error', 'Minimum password length is 6 characters!');
        } else {
          setDisabled(true);
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
              firestore()
                .collection('Users')
                .doc(res?.user?.uid)
                .set({
                  name: name,
                  email: email,
                  password: password,
                  uid: res?.user?.uid,
                })
                .then(() => {
                  dispatch(
                    loginUserAction({
                      name,
                      email,
                      password,
                      uid: res?.user?.uid,
                    }),
                  );
                  setDisabled(false);
                })
                .catch(e => {
                  console.log(e);
                  setDisabled(false);
                });
            })
            .catch(e => {
              setDisabled(false);
              Alert.alert('Error', e.message);
            });
        }
      } else {
        Alert.alert('Error', 'Enter correct email!');
        setDisabled(false);
      }
    } else {
      if (emailRegex?.test(email)) {
        setDisabled(true);
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            firestore()
              .collection('Users')
              .doc(res?.user?.uid)
              .get()
              .then(documentSnapshot => {
                dispatch(loginUserAction({...documentSnapshot.data()}));
                setDisabled(false);
              })
              .catch(e => {
                setDisabled(false);
                console.log(e);
              });
          })
          .catch(e => {
            Alert.alert('Error', e.message);
            setDisabled(false);
          });
      } else {
        Alert.alert('Error', 'Enter correct email!');
        setDisabled(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputView}>
        {signUpMode ? (
          <CustomInput
            placeholder={'Enter Your Name'}
            value={name}
            setValue={text => setName(text)}
          />
        ) : null}
        <CustomInput
          placeholder={'Enter Your Email'}
          value={email}
          setValue={text => setEmail(text)}
          keyboardType={'email-address'}
        />
        <CustomInput
          placeholder={'Enter Your Password'}
          value={password}
          setValue={text => setPassword(text)}
          secureTextEntry={true}
        />
        <CustomButton
          verified={
            signUpMode
              ? email?.trim()?.length > 0 &&
                password?.trim()?.length > 0 &&
                name?.trim()?.length > 0
              : email?.trim()?.length > 0 && password?.trim()?.length > 0
          }
          value={signUpMode ? 'Sign Up' : 'Login'}
          onPress={loginUser}
          disabled={disabled}
          loading={disabled}
        />
      </View>
      <Text style={styles.footerText}>
        {signUpMode ? 'Already a user? ' : 'New to Instagram? '}
        <Text
          style={styles.signupText}
          onPress={() => setSignUpMode(prev => !prev)}>
          {signUpMode ? 'Login here' : 'Sign up now'}
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
