import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBjm5f2A0ByvNIjS6J525YZuT3JIPu3_ls',
	authDomain: 'house-marketplace-app-e10f2.firebaseapp.com',
	projectId: 'house-marketplace-app-e10f2',
	storageBucket: 'house-marketplace-app-e10f2.appspot.com',
	messagingSenderId: '46759625770',
	appId: '1:46759625770:web:602820cb4679195fa6ef53',
	measurementId: 'G-4ZX28S8134',
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore();
