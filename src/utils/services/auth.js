import auth from '@react-native-firebase/auth'

export const _handleSignUpTask=(userName,password)=>{
    auth().createUserWithEmailAndPassword(userName,password).then(data=>console.log)
}