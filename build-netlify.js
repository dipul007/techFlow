#!/usr/bin/env node

import { execSync } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

async function buildForNetlify() {
  console.log('Building for Netlify deployment...');
  
  try {
    // Run Vite build for frontend only
    console.log('Building frontend...');
    execSync('vite build', { stdio: 'inherit' });
    
    // Create _redirects file for SPA routing
    const redirectsContent = `/*    /index.html   200`;
    await fs.writeFile('dist/public/_redirects', redirectsContent);
    
    console.log('✅ Netlify build completed successfully!');
    console.log('📁 Frontend build: dist/public/');
    console.log('⚡ Serverless function: netlify/functions/api.js');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

buildForNetlify();