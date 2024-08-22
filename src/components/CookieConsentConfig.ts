import type { CookieConsentConfig } from "vanilla-cookieconsent";


export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box inline",
      position: "bottom left",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga)/, //regex
          },
        ],
      },
      services: {
        "Google Analytics": {
          onAccept() {
            console.log('accepted');
            
          },
          onReject() {
            console.log('rejected');
          }
        }
      }
    },
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Cookies for content",
          description:
            "I use cookies for analytics; it helps me figure out what type of content you like to read. They are disabled by default and even if you consent, you can opt out at any time.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
              "I use cookies for analytics; it helps me figure out what type of content you like to read. They are disabled by default and even if you consent, you can opt out at any time.",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "Necessary cookies are vital for a website to function properly.",
              linkedCategory: "necessary",
              cookieTable: {
                headers: {
                    name: "Name",
                    domain: "Service",
                    description: "Description",
                    expiration: "Expiration"
                },
                body: [
                    {
                        name: "cc_cookie",
                        domain: "mhwelander.net",
                        description: "Persists your consent choices for cookies on this website.",
                        expiration: "6 months"
                    } 
                ]
            }
            },
            {
              title: "Analytics Cookies",
              description:
                "Analytics cookies are used to provide information on metrics such as visitor count, bounce rate, and traffic sources.",
              linkedCategory: "analytics",
              cookieTable: {
                headers: {
                    name: "Name",
                    domain: "Service",
                    description: "Description",
                    expiration: "Expiration"
                },
                body: [
                    {
                        name: "_ga",
                        domain: "Google Analytics",
                        description: "Used to distinguish one user from another on a domain.",
                        expiration: "1 year, 1 month, 4 days"
                    },
                    {
                        name: "_ga_*",
                        domain: "Google Analytics",
                        description: "Used to store counts and page views.",
                        expiration: "1 year, 1 month, 4 days"
                    }
                ]
            }
            },
          ],
        },
      },
    },
  },
};
