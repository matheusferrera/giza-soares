import { chromium } from 'playwright';
import fs from 'fs';
import https from 'https';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1'
  });
  const page = await context.newPage();
  
  try {
    await page.goto('https://www.instagram.com/gizasoares/', { waitUntil: 'networkidle', timeout: 15000 });
    
    // Attempt to extract the image URL
    // On mobile view, profile pic is usually an img inside a specific section
    const imgUrl = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      // Find the one that looks like a profile picture (usually has 'profile_pic' in URL or is the first circular image)
      const profilePic = imgs.find(img => img.src.includes('scontent') && img.src.includes('dst-jpg'));
      if (profilePic) {
        // Try to get a higher resolution by removing the size parameter like s150x150
        return profilePic.src.replace(/s\d+x\d+_tt\d+\//, '');
      }
      return null;
    });

    if (imgUrl) {
      console.log('Found image URL:', imgUrl);
      // Download the image
      const file = fs.createWriteStream('public/profile-high.jpg');
      https.get(imgUrl, function(response) {
        response.pipe(file);
        file.on('finish', function() {
          file.close();
          console.log('Image downloaded successfully to public/profile-high.jpg');
          process.exit(0);
        });
      }).on('error', function(err) {
        fs.unlink('public/profile-high.jpg', () => {});
        console.error('Error downloading:', err.message);
        process.exit(1);
      });
    } else {
      console.log('Could not find profile picture.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Scraping error:', error);
    process.exit(1);
  }
})();