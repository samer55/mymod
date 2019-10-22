import React, { Component } from 'react';
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import firebase from 'firebase'


// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { firebaseApp } from '../firebase'
import { NavigationActions } from 'react-navigation'
import { observer,inject } from 'mobx-react/native'
import _ from 'lodash'

@inject("appStore") @observer

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      selectedType: null,
      username: '',
      email: '',
      errMsg:'',
      password: '',
      confirmationPassword: '',
      emailValid: true,
      passwordValid: true,
      usernameValid: true,
      confirmationPasswordValid: true,
    };

    this.setSelectedType = this.setSelectedType.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmationPassword = this.validateConfirmationPassword.bind(
      this
    );
    this.signup = this.signup.bind(this);
  }
  static navigationOptions = {
header: null,
};
  signup() {
    LayoutAnimation.easeInEaseOut();
    const usernameValid = this.validateUsername();
    const emailValid = this.validateEmail();
    const passwordValid = this.validatePassword();
    const confirmationPasswordValid = this.validateConfirmationPassword();
   {
      this.setState({ isLoading: true });
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ isLoading: false });
      }, 1500);
    }
  }

  _handleSignUp = () => {
    console.log('---------------------------------------------------------------');
    LayoutAnimation.easeInEaseOut();
    const usernameValid = this.validateUsername();
    const emailValid = this.validateEmail();
    const passwordValid = this.validatePassword();

    const confirmationPasswordValid = this.validateConfirmationPassword();
     this.setState({errMsg: 'Signing Up...'})
     console.log('------------signup----------------------------');
    if(this.state.selectedType){
     if (
      emailValid &&
      passwordValid &&
      confirmationPasswordValid &&
      usernameValid
    ) {
        console.log('-----------'+this.state.username+'---email---'+this.state.password);
      this.setState({ isLoading: true });
       firebaseApp.database().ref('usernameList').child(this.state.username.toLowerCase()).once('value')
       .then((snapshot) => {
         if (snapshot.val()) {
           this.setState({ errMsg: "Username not available." })
         }
         else {
           firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
           .then(() => {
             const userId = firebaseApp.auth().currentUser.uid;
             const userem = firebaseApp.auth().currentUser.email;
             const user =firebaseApp.auth().currentUser
               console.log('-----------'+user.uid);
             firebaseApp.database().ref('usernameList').child(this.state.username.toLowerCase()).set(user.uid)
             user.updateProfile({displayName: this.state.username})
             .then(() => {
               const uid = user.uid
               const username = user.displayName
               const post_count = 0
              const createdAt= firebase.database.ServerValue.TIMESTAMP
             const updatedAt= firebase.database.ServerValue.TIMESTAMP
               const chat_count = 0
               const Teacher = []
               const type = this.state.selectedType
               const order_count = 0
               const email = user.email
               firebaseApp.database().ref('users/' + user.uid)
               .set({
                 uid,
                 username,
                 createdAt,
Teacher:false,
                 updatedAt,
                 post_count,
                 chat_count,
                 order_count,
                 type,
                 email,
               })

               this.props.appStore.username = user.displayName
               this.props.appStore.post_count = post_count
               this.props.appStore.order_count = order_count
               this.props.appStore.chat_count = chat_count
               this.props.appStore.user = user
               LayoutAnimation.easeInEaseOut();
               this.setState({ isLoading: false });
               if (type=="Student") {
                 this.props.navigation.navigate('StudentSign')

               }else {
                 this.props.navigation.navigate('ModaresSign')

               }
             }, function(error) {
               console.log(error);
                 this.setState({ isLoading: false });
             });
           })
           .catch((error) => {
             console.log(error);
             this.setState({ errMsg: error.message });
               this.setState({ isLoading: false });
           })
         }
       })
     }
   }else{
     this.setState({errMsg:'please select teacher or student'})
   }
   }
  validateUsername() {
    const { username } = this.state;
    const usernameValid = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    this.setState({ usernameValid });
    usernameValid || this.usernameInput.shake();
    return usernameValid;
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = re.test(email);
    LayoutAnimation.easeInEaseOut();
    this.setState({ emailValid });
    emailValid || this.emailInput.shake();
    return emailValid;
  }

  validatePassword() {
    const { password } = this.state;
    const passwordValid = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    this.setState({ passwordValid });
    passwordValid || this.passwordInput.shake();
    return passwordValid;
  }

  validateConfirmationPassword() {
    const { password, confirmationPassword } = this.state;
    const confirmationPasswordValid = password === confirmationPassword;
    LayoutAnimation.easeInEaseOut();
    this.setState({ confirmationPasswordValid });
    confirmationPasswordValid || this.confirmationPasswordInput.shake();
    return confirmationPasswordValid;
  }

  setSelectedType = selectedType =>
    LayoutAnimation.easeInEaseOut() || this.setState({ selectedType });

  render() {
    const {
      isLoading,
      selectedType,
      confirmationPassword,
      email,
      emailValid,
      password,
      passwordValid,
      confirmationPasswordValid,
      username,
      usernameValid,
    } = this.state;

    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.formContainer}
        >
          <Text style={styles.signUpText}>Sign up</Text>
          <Text style={styles.error}>{this.state.errMsg}</Text>

          <Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
          <View style={styles.userTypesContainer}>

            <UserTypeItem
              label="STUDENT"
              labelColor="black"
              image={{uri:'https://cdn3.iconfinder.com/data/icons/avatar-set/512/Avatar03-512.png'}}
              onPress={() => this.setSelectedType('Student')}
              selected={selectedType === 'Student'}
            />
            <UserTypeItem
              label="Tutor"
              labelColor="black"
              image={{uri:'https://cdn1.iconfinder.com/data/icons/flat-character-color-1/60/flat-design-character_6-512.png'}}
              onPress={() => this.setSelectedType('Teacher')}
              selected={selectedType === 'Teacher'}
            />
          </View>
          <View style={{ width: '80%', alignItems: 'center' }}>
            <FormInput
              refInput={input => (this.usernameInput = input)}
              icon="user"
              value={username}
              onChangeText={username => this.setState({ username })}
              placeholder="Username"
              returnKeyType="next"
              errorMessage={
                usernameValid ? null : "Your username can't be blank"
              }
              onSubmitEditing={() => {
                this.validateUsername();
                this.emailInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.emailInput = input)}
              icon="envelope"
              value={email}
              onChangeText={email => this.setState({ email })}
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="next"
              errorMessage={
                emailValid ? null : 'Please enter a valid email address'
              }
              onSubmitEditing={() => {
                this.validateEmail();
                this.passwordInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.passwordInput = input)}
              icon="lock"
              value={password}
              onChangeText={password => this.setState({ password })}
              placeholder="Password"
              secureTextEntry
              returnKeyType="next"
              errorMessage={
                passwordValid ? null : 'Please enter at least 8 characters'
              }
              onSubmitEditing={() => {
                this.validatePassword();
                this.confirmationPasswordInput.focus();
              }}
            />
            <FormInput
              refInput={input => (this.confirmationPasswordInput = input)}
              icon="lock"
              value={confirmationPassword}
              onChangeText={confirmationPassword =>
                this.setState({ confirmationPassword })
              }
              placeholder="Confirm Password"
              secureTextEntry
              errorMessage={
                confirmationPasswordValid
                  ? null
                  : 'The password fields are not identics'
              }
              returnKeyType="go"
              onSubmitEditing={() => {
                this.validateConfirmationPassword();
                this.signup();
              }}
            />
          </View>
          <Button
            loading={isLoading}
            title="SIGNUP"
            containerStyle={{ flex: -1 }}
            buttonStyle={styles.signUpButton}


            titleStyle={styles.signUpButtonText}
            onPress={this._handleSignUp}
            disabled={isLoading}
          />
        </KeyboardAvoidingView>
        <View style={styles.loginHereContainer}>
          <Text style={styles.alreadyAccountText}>
            Already have an account.
          </Text>
          <Button
            title="Login here"
            titleStyle={styles.loginHereText}
            containerStyle={{ flex: -1 }}
            buttonStyle={{ backgroundColor: 'transparent' }}
            underlayColor="transparent"
            onPress={() => Alert.alert('🔥', 'You can login here')}
          />
        </View>
      </ScrollView>
    );
  }
}

export const UserTypeItem = props => {
  const { image, label, labelColor, selected, ...attributes } = props;
  return (
    <TouchableOpacity {...attributes}>
      <View
        style={[
          styles.userTypeItemContainer,
          selected && styles.userTypeItemContainerSelected,
        ]}
      >
        <Text style={[styles.userTypeLabel, { color: labelColor }]}>
          {label}
        </Text>
        <Image
          source={image}
          style={[
            styles.userTypeMugshot,
            selected && styles.userTypeMugshotSelected,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export const FormInput = props => {
  const { icon, refInput, ...otherProps } = props;
  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={'simple-line-icon'} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="light"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpText: {
    color: 'black',
    fontSize: 28,

  },
  whoAreYouText: {
    color: '#7384B4',

    fontSize: 14,
  },
  error: {
    color: 'red',

    fontSize: 14,
  },
  userTypesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  userTypeItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: 'yellow',

    fontSize: 14,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(110, 120, 170, 1)',
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: 'black',

    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336',
  },
  signUpButtonText: {

    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
  },
  loginHereContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alreadyAccountText: {

    fontSize: 12,
    color: 'black',
  },
  loginHereText: {
    color: '#FF9800',

    fontSize: 12,
  },
});
