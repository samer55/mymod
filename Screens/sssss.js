import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height * 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  inputContainer: {
    flex: 1,
    height: 160,
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  titleContainer: {
    height: 40,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,.6)',
    marginBottom: 10,
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 2,
  },
  inputField: {
    flex: 1,
    width: 300,
    paddingLeft: 10,
    paddingTop: 4,
    paddingBottom: 4,
    padding:5,
    fontSize: 13,
  },
  spinner: {
    marginLeft: width * 0.5 - 50,
    marginTop: height * 0.5 - 50,
  },
  listText: {
    fontSize: 17,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: (width - 45) / 2,
    height: 50,
    borderRadius: 6,
    backgroundColor: '#546E7A',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
});
