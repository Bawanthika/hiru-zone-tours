# Hiru Zone Tours Website (with Owner Admin Panel)

## Folder Structure
hiru-zone-tours/
├── index.html           (Main Public Website)
├── admin.html           (Owner Admin Panel to upload feedbacks & photos without code)
├── firebase-config.js   (Paste your Firebase project keys here)
├── README.md
└── images/
    ├── hirusha-badge.png
    ├── hirusha-profile.jpg
    ├── airport-welcome.jpg
    ├── van-exterior.jpg
    ├── van-front-seats.jpg
    ├── van-passenger-seats.jpg
    ├── van-luggage.jpg
    └── feedback-form.jpg

## How to Test Locally Right Now
1. Extract this ZIP folder.
2. Open `index.html` in your browser to view the main website.
3. Click the small **Admin** link in the bottom-right footer (or open `admin.html`).
4. Sign in with password `hiru2026` to test adding new guest feedback photos or tour photos.

## How to Connect Free Firebase Cloud (For Live Multi-Device Admin Uploads)
1. Go to https://console.firebase.google.com and create a free project (`hiru-zone-tours`).
2. Enable **Authentication -> Email/Password** and add an admin user for the client.
3. Enable **Firestore Database** (Start in production mode, allow read for all, write for authenticated users).
4. Enable **Storage** (Allow read for all, write for authenticated users).
5. Register a **Web App** in Project Settings, copy the `firebaseConfig` object, and paste it into `firebase-config.js`.
6. Deploy to Vercel or Netlify for free!
