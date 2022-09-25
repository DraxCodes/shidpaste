import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { readable } from 'svelte/store';
import { PUBLIC_FIREBASE_API_KEY } from '$env/static/public';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: 'paste-28992.firebaseapp.com',
	projectId: 'paste-28992',
	storageBucket: 'paste-28992.appspot.com',
	messagingSenderId: '1098934563030',
	appId: '1:1098934563030:web:02c66fe8bcc03be4b79977',
	measurementId: 'G-LJE6DEGENQ'
};
initializeApp(firebaseConfig);

const userMapper = (cliamID, claimEmail, isLoggedIn) => ({
	id: cliamID,
	email: claimEmail,
	loginState: isLoggedIn
});

export const auth = getAuth();

export const signUpWithEmailPassword = async (email, password) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    return userCredentials;
}

export const loginWithEmailPassword = async (email, password) => {
	const credentials = await signInWithEmailAndPassword(auth, email, password);
	return credentials;
};

export const user = readable(userMapper('0', 'N/A', false), (set) => {
	const unsub = auth.onAuthStateChanged(async (fireUser) => {
		if (auth.currentUser) {
			const token = await fireUser.getIdTokenResult();
			const user = userMapper(token.claims.user_id, token.claims.email, true);
			set(user);
		} else {
			const user = userMapper('0', 'test', false);
			set(user);
		}
	});

	return unsub;
});

export const logOut = async () => {
	console.log('logging out');
	await signOut(auth);
};
