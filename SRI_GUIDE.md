# Subresource Integrity (SRI) Implementation Guide

## Overview
This guide explains how to implement SRI for external scripts and stylesheets to ensure security against CDN compromises and script tampering.

## How to Generate SRI Hashes

### Method 1: Using OpenSSL (Recommended)
```bash
# For JavaScript files
curl -s https://example.com/script.js | openssl dgst -sha384 -binary | openssl base64 -A

# For CSS files
curl -s https://example.com/styles.css | openssl dgst -sha384 -binary | openssl base64 -A
```

### Method 2: Online SRI Generator
Visit: https://www.srihash.org/

### Method 3: Using Node.js
```javascript
const crypto = require('crypto');
const fs = require('fs');

const fileContent = fs.readFileSync('script.js');
const hash = crypto.createHash('sha384').update(fileContent).digest('base64');
console.log(`sha384-${hash}`);
```

## Implementation Examples

### JavaScript with SRI
```html
<script src="https://example.com/script.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"></script>
```

### CSS with SRI
```html
<link rel="stylesheet" href="https://example.com/styles.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous">
```

### Google Analytics with SRI (Template)
```html
<!-- Step 1: Get the current GA4 gtag.js file -->
<!-- curl -s "https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID" | openssl dgst -sha384 -binary | openssl base64 -A -->

<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_ID"
        integrity="sha384-[GENERATED_HASH_HERE]"
        crossorigin="anonymous"></script>
```

## Current Status

### ✅ Completed
- Removed non-functional placeholder Google Analytics code
- Updated CSP to remove unused Google Analytics domains
- Created SRI template for future external scripts
- Added defensive checks to tracking functions

### 📋 Ready for Implementation
When you add external scripts:
1. Generate SRI hash using methods above
2. Add `integrity` and `crossorigin` attributes
3. Update CSP if needed to allow the domain

## Security Benefits
- **Prevents CDN compromises**: Scripts must match exact hash
- **Detects tampering**: Any modification breaks the hash
- **Fails securely**: Modified scripts won't execute
- **Browser support**: Modern browsers fully support SRI

## Notes
- SRI requires `crossorigin="anonymous"` for cross-origin resources
- Hash must be regenerated when external scripts update
- Use SHA-384 or SHA-512 for better security than SHA-256
- Consider monitoring external script changes for hash updates