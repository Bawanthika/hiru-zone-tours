// =========================================================================
// FIREBASE CONFIGURATION (Hiru Zone Tours Admin & Dynamic Gallery/Reviews)
// =========================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAVHWGUzu1FRcgzRQVHuiZdcvzi99gW3Ww",
  authDomain: "hiru-zone-tours.firebaseapp.com",
  projectId: "hiru-zone-tours",
  storageBucket: "hiru-zone-tours.firebasestorage.app",
  messagingSenderId: "57920451566",
  appId: "1:57920451566:web:794f523436b4a8222654ff",
  measurementId: "G-G08K7K0SZ3"
};

export function isFirebaseConfigured() {
  return firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY";
}