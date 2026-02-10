# Chrome Web Store Submission Checklist

## Pre-Submission Requirements

### 1. Developer Account
- [ ] Create Chrome Web Store developer account
- [ ] Pay one-time $5 registration fee
- [ ] Verify your email address

### 2. Extension Files
- [✓] manifest.json (version 1.1.0)
- [✓] background.js
- [✓] content.js
- [✓] popup.html
- [✓] popup.js
- [✓] Icons (16x16, 48x48, 128x128)
- [✓] All files in ZIP format

### 3. Store Listing Assets

#### Required:
- [ ] **Detailed Description** (use CHROME_STORE_LISTING.md)
- [ ] **Icon (128x128)** - Already created ✓
- [ ] **Small Tile (440x280)** - Create promotional tile
- [ ] **Screenshots** - Minimum 1, recommended 3-5 (1280x800 or 640x400)
- [ ] **Privacy Policy** (PRIVACY_POLICY.md created ✓)
- [ ] **Category**: Productivity or Search Tools

#### Optional but Recommended:
- [ ] **Marquee Tile (1400x560)** - Large promotional banner
- [ ] **Video** - Demo video (YouTube link)
- [ ] **Website URL** - GitHub repository or landing page

### 4. Legal & Compliance
- [✓] Privacy Policy written
- [ ] Privacy Policy hosted publicly (GitHub or website)
- [ ] Terms of Service (optional but recommended)
- [ ] Verify no trademark infringement
- [ ] Ensure compliance with Chrome Web Store policies

---

## Assets to Create

### Screenshots (Minimum 3-5)

**Screenshot 1: Main Feature - Context Menu**
- Show: Webpage with selected text and right-click menu displaying all 6 AI options
- Resolution: 1280x800 (16:10 ratio)
- Caption: "Select any text and right-click to access 6 AI assistants instantly"

**Screenshot 2: Settings Panel**
- Show: Extension popup with toggle switches
- Resolution: 1280x800
- Caption: "Customize which AI services appear in your menu"

**Screenshot 3: Auto-Fill in Action**
- Show: ChatGPT or Claude interface with text already filled in
- Resolution: 1280x800
- Caption: "Your selected text automatically fills into the AI chat"

**Screenshot 4: Real-World Usage**
- Show: Using the extension on a popular site (Wikipedia, Stack Overflow, etc.)
- Resolution: 1280x800
- Caption: "Works on any website - perfect for research and learning"

**Screenshot 5: All AI Services**
- Show: Collage or grid showing all 6 AI service logos/interfaces
- Resolution: 1280x800
- Caption: "One extension, six powerful AI assistants"

### Promotional Images

**Small Tile (440x280)**
Design elements:
- Extension icon prominently displayed
- Text: "AI Answers In One Click"
- List: 6 AI service names or icons
- Color scheme: Match extension (purple/blue gradient)

**Marquee Tile (1400x560)** - Optional but helps visibility
Design elements:
- Large headline: "Your Gateway to AI Assistants"
- Subheading: "One click away from ChatGPT, Claude, Gemini & More"
- Feature bullets
- Professional, clean design

---

## Store Listing Content

### Extension Name (45 characters max)
**Option 1:** AI Assistant Search - ChatGPT, Claude, Gemini & More (52 chars - too long)
**Option 2:** AI Search - ChatGPT, Claude, Gemini, Copilot (47 chars - too long)
**Option 3:** AI Assistant Search - Quick AI Access (39 chars) ✓
**Recommended:** AI Assistant Search

### Short Description (132 characters max)
**Final:** Instantly search selected text with ChatGPT, Claude, Gemini, Copilot, Grok, or Perplexity. One right-click away! (130 chars) ✓

### Category Selection
**Primary:** Productivity
**Secondary:** Search Tools (if available)

### Language
English (United States)

---

## Pre-Launch Testing Checklist

### Functionality Tests
- [ ] Test on Wikipedia page
- [ ] Test on Stack Overflow
- [ ] Test on GitHub
- [ ] Test on news website
- [ ] Test on documentation page
- [ ] Verify all 6 AI services open correctly
- [ ] Verify auto-fill works on each service
- [ ] Test toggle switches in settings
- [ ] Test with services disabled
- [ ] Test with only one service enabled

### Browser Compatibility
- [ ] Chrome (latest version)
- [ ] Chrome (one version back)
- [ ] Edge (Chromium-based)
- [ ] Brave (optional)

### User Experience
- [ ] Context menu appears quickly
- [ ] Icon is visible in toolbar
- [ ] Settings popup opens smoothly
- [ ] No console errors
- [ ] Performance is acceptable (< 50ms response)

---

## Submission Steps

### Step 1: Package Extension
1. Create ZIP file of extension folder
2. Ensure manifest.json is in root of ZIP
3. Max size: 20MB (current size: ~50KB ✓)
4. Test ZIP by loading as unpacked extension

### Step 2: Upload to Developer Dashboard
1. Go to: https://chrome.google.com/webstore/devconsole
2. Click "New Item"
3. Upload ZIP file
4. Wait for upload confirmation

### Step 3: Fill Out Store Listing
1. **Product Details:**
   - Name: AI Assistant Search
   - Summary: [Use short description]
   - Description: [Use detailed description from CHROME_STORE_LISTING.md]
   - Category: Productivity
   - Language: English

2. **Graphic Assets:**
   - Upload icon (128x128)
   - Upload small tile (440x280)
   - Upload screenshots (minimum 1)
   - Upload marquee tile (optional)

3. **Privacy:**
   - Privacy policy URL: [Your hosted URL]
   - Justify permissions:
     * contextMenus: Required to add right-click menu option
     * storage: Required to save user's AI service preferences
     * tabs: Required to open AI services in new tabs
     * host_permissions: Required to auto-fill selected text on AI service pages

4. **Distribution:**
   - Visibility: Public
   - Regions: All regions
   - Pricing: Free

### Step 4: Submit for Review
1. Review all information
2. Click "Submit for Review"
3. Wait for review (typically 1-3 business days)

---

## Post-Submission

### If Approved
- [ ] Celebrate! 🎉
- [ ] Share on social media
- [ ] Post on Reddit (r/chrome, r/productivity)
- [ ] Monitor reviews
- [ ] Respond to user feedback

### If Rejected
- [ ] Read rejection reason carefully
- [ ] Fix issues mentioned
- [ ] Re-submit with explanations

### Common Rejection Reasons & Fixes
1. **Privacy Policy Missing**: Host PRIVACY_POLICY.md on GitHub and add URL
2. **Permissions Unclear**: Add detailed justification for each permission
3. **Misleading Icon/Name**: Ensure no trademark issues, don't impersonate AI services
4. **Poor Quality**: Add more screenshots, improve description
5. **Single Use Violation**: Clarify the single purpose (AI assistant access)

---

## Marketing Plan (Post-Launch)

### Week 1: Soft Launch
- [ ] Share with friends and colleagues
- [ ] Post on LinkedIn
- [ ] Post on Twitter/X
- [ ] Post on relevant subreddits

### Week 2-4: Grow Users
- [ ] Create demo video
- [ ] Write blog post
- [ ] Submit to Product Hunt
- [ ] Reach out to tech bloggers
- [ ] Engage in relevant online communities

### Ongoing:
- [ ] Monitor reviews weekly
- [ ] Respond to all reviews
- [ ] Track installation numbers
- [ ] Collect feature requests
- [ ] Plan updates based on feedback

---

## Useful Links

- **Developer Dashboard:** https://chrome.google.com/webstore/devconsole
- **Developer Program Policies:** https://developer.chrome.com/docs/webstore/program-policies/
- **Publishing Guide:** https://developer.chrome.com/docs/webstore/publish/
- **Best Practices:** https://developer.chrome.com/docs/webstore/best_practices/
- **Branding Guidelines:** https://developer.chrome.com/docs/webstore/branding/

---

## Version Updates (Future)

When you need to update:
1. Increment version in manifest.json
2. Create new ZIP
3. Upload to existing item in dashboard
4. Describe changes in "What's New" section
5. Submit for review

---

## Success Metrics to Track

- Total installs
- Weekly active users
- User reviews (rating and count)
- Uninstall rate
- Support requests

**Goal for First Month:**
- 100+ installs
- 4+ star rating
- 5+ positive reviews

**Goal for First 6 Months:**
- 1,000+ installs
- 4.5+ star rating
- Featured in relevant collections (if possible)

---

## Notes

- The Chrome Web Store review process typically takes 1-3 business days
- First-time submissions may take longer
- Be patient and professional in all communications
- Quality over quantity - focus on making users happy

Good luck with your submission! 🚀
