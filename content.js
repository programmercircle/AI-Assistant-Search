// Content script to help pre-fill text in AI assistants
// This runs on the AI service pages to insert the query text

(function() {
  'use strict';
  
  // Get query parameter from URL
  const urlParams = new URLSearchParams(window.location.search);
  const queryText = urlParams.get('q');
  
  if (!queryText) return;
  
  // Helper function to wait for element
  function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      
      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      setTimeout(() => {
        observer.disconnect();
        reject(new Error('Element not found'));
      }, timeout);
    });
  }
  
  // Helper to set input value and trigger events
  function setInputValue(element, value) {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLTextAreaElement.prototype,
      'value'
    ).set;
    nativeInputValueSetter.call(element, value);
    
    // Trigger input events
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  }
  
  // ChatGPT
  if (window.location.hostname.includes('chat.openai.com')) {
    waitForElement('#prompt-textarea, textarea[placeholder*="Message"]')
      .then(textarea => {
        setInputValue(textarea, queryText);
        textarea.focus();
      })
      .catch(err => console.log('Could not find ChatGPT input:', err));
  }
  
  // Claude (claude.ai might handle this differently)
  if (window.location.hostname.includes('claude.ai')) {
    waitForElement('div[contenteditable="true"], textarea')
      .then(input => {
        if (input.tagName === 'TEXTAREA') {
          setInputValue(input, queryText);
        } else {
          // For contenteditable divs
          input.textContent = queryText;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
      })
      .catch(err => console.log('Could not find Claude input:', err));
  }
  
  // Grok (X.com)
  if (window.location.hostname.includes('x.com')) {
    waitForElement('textarea[placeholder*="Ask"], div[contenteditable="true"]')
      .then(input => {
        if (input.tagName === 'TEXTAREA') {
          setInputValue(input, queryText);
        } else {
          input.textContent = queryText;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
      })
      .catch(err => console.log('Could not find Grok input:', err));
  }
  
  // Perplexity
  if (window.location.hostname.includes('perplexity.ai')) {
    waitForElement('textarea, input[type="text"]')
      .then(input => {
        setInputValue(input, queryText);
        input.focus();
      })
      .catch(err => console.log('Could not find Perplexity input:', err));
  }
  
  // Gemini (Google)
  if (window.location.hostname.includes('gemini.google.com')) {
    waitForElement('rich-textarea, textarea, div[contenteditable="true"]')
      .then(input => {
        if (input.tagName === 'TEXTAREA') {
          setInputValue(input, queryText);
        } else if (input.tagName === 'RICH-TEXTAREA') {
          // Gemini uses a custom rich-textarea component
          const textarea = input.querySelector('textarea');
          if (textarea) {
            setInputValue(textarea, queryText);
          } else {
            input.textContent = queryText;
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        } else {
          // For contenteditable divs
          input.textContent = queryText;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
      })
      .catch(err => console.log('Could not find Gemini input:', err));
  }
  
  // Copilot (Microsoft)
  if (window.location.hostname.includes('copilot.microsoft.com')) {
    waitForElement('textarea[placeholder*="Ask"], textarea.textarea, div[contenteditable="true"]')
      .then(input => {
        if (input.tagName === 'TEXTAREA') {
          setInputValue(input, queryText);
        } else {
          input.textContent = queryText;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        }
        input.focus();
      })
      .catch(err => console.log('Could not find Copilot input:', err));
  }
})();
