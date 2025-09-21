# StayFinder - Complete Hostel & PG Booking Website

## 📁 Project Structure
```
stayfinder-website/
├── index.html          (Main website file)
├── admin.html          (Admin panel file)
├── README.md           (This tutorial file)
├── firebase-config.js  (Firebase configuration - to be created)
└── assets/
    ├── images/         (Store your images here)
    └── docs/           (Store additional documents)
```

## 🚀 Complete Setup Guide for Beginners

### Step 1: Create Project Folder on Your Computer

1. **Right-click** on your Desktop
2. Select **"New Folder"**
3. Name it **"stayfinder-website"**
4. **Double-click** to open the folder

### Step 2: Create the Website Files

1. **Right-click** inside the folder
2. Select **"New" → "Text Document"**
3. Name it **"index.html"** (make sure to replace .txt with .html)
4. **Copy and paste** the main website code (from the first artifact) into this file
5. **Save** the file

6. Create another file called **"admin.html"**
7. **Copy and paste** the admin panel code (from the second artifact) into this file
8. **Save** the file

9. Create **"README.md"** file and paste this tutorial content

### Step 3: Set Up Firebase Database

#### 3.1 Create Firebase Account
1. Go to **https://firebase.google.com**
2. Click **"Get Started"**
3. **Sign in** with your Google account (create one if you don't have)

#### 3.2 Create New Firebase Project
1. Click **"Create a project"**
2. Project name: **"stayfinder-app"**
3. Click **"Continue"**
4. **Disable** Google Analytics (for simplicity)
5. Click **"Create project"**
6. Wait for project to be created, then click **"Continue"**

#### 3.3 Set Up Firestore Database
1. In the Firebase console, click **"Firestore Database"** from the left menu
2. Click **"Create database"**
3. Select **"Start in test mode"**
4. Click **"Next"**
5. Choose your location (select closest to your area)
6. Click **"Done"**

#### 3.4 Set Up Authentication
1. Click **"Authentication"** from the left menu
2. Click **"Get started"**
3. Go to **"Sign-in method"** tab
4. Click on **"Email/Password"**
5. **Enable** the first option (Email/Password)
6. Click **"Save"**

#### 3.5 Get Firebase Configuration
1. Click the **gear icon** (Project Settings) in the left menu
2. Scroll down to **"Your apps"** section
3. Click the **"Web"** icon `</>`
4. App nickname: **"StayFinder Web App"**
5. Click **"Register app"**
6. **Copy** the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

#### 3.6 Update Your Website Files
1. **Open** both `index.html` and `admin.html`
2. **Find** this line in both files:
```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    // ... other config
};
```
3. **Replace** the entire config object with your actual Firebase configuration
4. **Save** both files

### Step 4: Create Admin User

1. **Open** your `index.html` file in a web browser
2. **Click** "Register" and create an account with your email
3. Go to **Firebase Console** → **Firestore Database**
4. Find the **"users"** collection
5. **Click** on your user document
6. **Edit** the document and change `role` field from `"user"` to `"admin"`
7. **Save** the changes

### Step 5: Test Your Website Locally

1. **Right-click** on `index.html`
2. Select **"Open with" → "Web Browser"** (Chrome, Firefox, etc.)
3. Your website should load and work!

### Step 6: Set Up GitHub Repository

#### 6.1 Create GitHub Account
1. Go to **https://github.com**
2. Click **"Sign up"**
3. Create your account with username, email, and password
4. **Verify** your email address

#### 6.2 Create New Repository
1. Click the **"+"** icon in the top right
2. Select **"New repository"**
3. Repository name: **"stayfinder-website"**
4. **Check** "Add a README file"
5. Click **"Create repository"**

### Step 7: Upload Files to GitHub

#### Method 1: Using GitHub Web Interface (Easiest for beginners)

1. In your GitHub repository page, click **"uploading an existing file"**
2. **Drag and drop** or click **"choose your files"**
3. Select **ALL** your project files (`index.html`, `admin.html`, `README.md`)
4. **Wait** for upload to complete
5. In the **"Commit changes"** section at the bottom:
   - Title: **"Initial website upload"**
   - Description: **"Added main website and admin panel"**
6. Click **"Commit changes"**

#### Method 2: Using Git (Command Line)
If you want to learn Git commands:

1. **Download and install Git** from https://git-scm.com
2. **Open** Command Prompt/Terminal in your project folder
3. Run these commands one by one:

```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/stayfinder-website.git
git push -u origin main
```

### Step 8: Enable GitHub Pages (Free Hosting)

1. In your GitHub repository, click **"Settings"** tab
2. Scroll down to **"Pages"** in the left menu
3. Under **"Source"**, select **"Deploy from a branch"**
4. Select **"main"** branch
5. Select **"/ (root)"** folder
6. Click **"Save"**
7. **Wait 2-5 minutes** for deployment

### Step 9: Access Your Live Website

After GitHub Pages is set up:
- **Main Website**: `https://YOUR_USERNAME.github.io/stayfinder-website/`
- **Admin Panel**: `https://YOUR_USERNAME.github.io/stayfinder-website/admin.html`

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🔧 Website Features

### For Users:
- ✅ **User Registration & Login**
- ✅ **Search** hostels and PGs by location and type
- ✅ **"Locate Near Me"** feature with interactive map
- ✅ **View property details** on map markers
- ✅ **Book properties** with one click
- ✅ **Responsive design** for mobile devices

### For Admins:
- ✅ **Add new properties** with map coordinate selection
- ✅ **Manage booking requests** (approve/reject)
- ✅ **View all registered users**
- ✅ **Real-time dashboard** with statistics
- ✅ **Interactive map** for property management

## 🎨 Customization Guide

### Changing Colors and Styling
1. **Open** `index.html` and `admin.html`
2. **Find** the `<style>` section
3. **Look** for color codes like `#667eea`, `#764ba2`
4. **Replace** with your preferred colors
5. **Save** and refresh to see changes

### Adding Your Logo
1. **Create** an `assets/images/` folder in your project
2. **Add** your logo image file
3. **Find** the `.logo` class in CSS
4. **Replace** text with: `background-image: url('assets/images/your-logo.png');`

### Modifying Location
1. **Find** this line in both files:
```javascript
let userLocation = { lat: 19.2404498544239, lng: 73.13241886605059 };
```
2. **Replace** with your area's coordinates
3. **Get coordinates** from Google Maps by right-clicking on your location

## 🐛 Troubleshooting Common Issues

### Issue 1: Firebase Not Working
**Problem**: Website shows Firebase errors
**Solution**: 
- Double-check your Firebase configuration
- Ensure Firestore is in "test mode"
- Verify Authentication is enabled for Email/Password

### Issue 2: Map Not Loading
**Problem**: Map appears blank or broken
**Solution**:
- Check internet connection
- Ensure Leaflet CDN links are working
- Try refreshing the page

### Issue 3: Admin Panel Access Denied
**Problem**: Can't access admin panel
**Solution**:
- Ensure you changed your user role to "admin" in Firestore
- Clear browser cache and try again
- Check Firebase console for user role

### Issue 4: GitHub Pages Not Working
**Problem**: Website not accessible via GitHub Pages URL
**Solution**:
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository settings
- Ensure files are in the main branch root folder

## 📱 Making Updates

### To Update Your Website:
1. **Make changes** to your local files
2. **Go to GitHub** repository
3. **Click** on the file you want to update
4. **Click** the edit icon (pencil)
5. **Make changes** and commit
6. **Wait 2-3 minutes** for changes to reflect on live site

### To Add More Properties:
1. **Access** your admin panel
2. **Log in** with your admin account
3. **Go to** "Manage Properties" tab
4. **Click** on map to set coordinates
5. **Fill** the form and click "Add Property"

## 🔐 Security Best Practices

1. **Change** Firestore rules to production mode after testing
2. **Create** different Firebase projects for testing and production
3. **Never share** your Firebase configuration publicly
4. **Use environment variables** for sensitive data in production

## 📞 Advanced Features You Can Add

### 1. Payment Integration
- Add **Stripe** or **PayPal** for online payments
- Implement booking confirmation after payment

### 2. Email Notifications
- Use **EmailJS** to send booking confirmation emails
- Notify admins of new booking requests

### 3. Image Upload
- Allow property owners to upload photos
- Use **Firebase Storage** for image hosting

### 4. Reviews and Ratings
- Add user review system
- Display property ratings and feedback

### 5. Advanced Search Filters
- Price range filters
- Amenity-based filtering
- Distance-based search

## 🆘 Getting Help

If you encounter issues:

1. **Check** the browser console for error messages (F12 key)
2. **Verify** all files are uploaded correctly
3. **Ensure** Firebase configuration is correct
4. **Test** each feature step by step

For Firebase-specific issues:
- Visit **Firebase Documentation**: https://firebase.google.com/docs
- Check **Firebase Console** for error logs

For GitHub Pages issues:
- Visit **GitHub Pages Documentation**: https://docs.github.com/en/pages

## 🎉 Congratulations!

You now have a complete, professional hostel and PG booking website with:
- ✅ **User authentication** system
- ✅ **Interactive maps** with location services
- ✅ **Admin panel** for property management
- ✅ **Real-time database** with Firebase
- ✅ **Live website** hosted on GitHub Pages
- ✅ **Mobile-responsive** design

Your website is ready to use and can handle real bookings! You can share the GitHub Pages URL with anyone to access your website.

## 📈 Next Steps

1. **Customize** the design to match your brand
2. **Add more properties** through the admin panel
3. **Test** all features thoroughly
4. **Share** your website URL with potential users
5. **Monitor** bookings and user activity through the admin panel

**Remember**: This is a fully functional website that you've built from scratch. Be proud of your accomplishment! 🎊