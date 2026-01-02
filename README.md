# Certificate Verification - React App

A professional certificate verification system built with React featuring animated confetti and smooth page transitions.

## Features

- ✨ **Animated Confetti** - Colorful confetti particles falling from top to bottom on the success page
- 🎯 **Certificate Validation** - Format: `O1B/A1/IP253`
- 🔄 **Smooth Transitions** - Professional page transitions with animations
- 📱 **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- 🎨 **Modern UI** - Beautiful gradient backgrounds and polished components
- 🔔 **Real-time Notifications** - Success/error notifications

## Installation

1. Navigate to the project directory:
```bash
cd Internship
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment Options

### 1. **Vercel** (Recommended - Easiest)
```bash
npm install -g vercel
vercel
```

### 2. **Netlify**
```bash
npm run build
# Then drag and drop the build folder to netlify.com
```

### 3. **GitHub Pages**
Update `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name"
```

Then:
```bash
npm install gh-pages --save-dev
npm run build
npm run deploy
```

### 4. **Traditional Hosting** (cPanel, Hostinger, etc.)
1. Run `npm run build`
2. Upload the `build` folder contents to your host's public_html
3. Make sure your host supports Node.js or use static hosting

## File Structure

```
src/
├── CertificateVerification.jsx    # Main component
├── CertificateVerification.css    # Styles
├── index.js                        # Entry point
public/
├── index.html                      # HTML template
package.json                        # Dependencies and scripts
```

## How It Works

1. **Success Page** (Initial Load)
   - Shows verification confirmation with animated checkmark
   - Confetti continuously falls from top to bottom
   - Click "Verify Certificate" to go to form

2. **Form Page**
   - Input certificate ID in format: `O1B/A1/IP253`
   - Real-time validation
   - Success notification on valid input

3. **Confetti Animation**
   - Custom Canvas-based animation
   - 5 new confetti pieces generated every 100ms
   - Smooth falling motion with rotation
   - Auto-cleanup for performance

## Certificate Format

Valid formats:
- `O1B/A1/IP253`
- `ABC/XYZ/TEST123`
- `A1/B2/C3`
- Any combination matching: `[A-Z0-9]/[A-Z0-9]/[A-Z0-9]`

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## License

MIT
