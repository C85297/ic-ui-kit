import { html } from "lit-html";

export default {
  title: "Web Components/Theme",
  component: "ic-theme",
};

export const SwitchTheme = {
  render: () =>
    html` <ic-theme color="rgba(27, 60, 121, 1)"></ic-theme>
      <ic-button
        variant="primary"
        id="default-btn"
        onClick="document.querySelector('ic-theme').color='rgb(27, 60, 121)'"
      >
        Default theme
      </ic-button>
      <ic-button
        variant="primary"
        id="custom-btn"
        onClick="document.querySelector('ic-theme').color='rgba(255, 201, 60, 1)'"
      >
        Sunrise theme
      </ic-button>
      <div style="padding-top:10px">
        <ic-top-navigation
          app-title="ApplicationName"
          status="alpha"
          version="v0.0.7"
        >
          <svg
            slot="app-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
            />
          </svg>
          <ic-search-bar
            slot="search"
            placeholder="Search"
            label="Search"
          ></ic-search-bar>
          <ic-navigation-button
            label="button1"
            slot="buttons"
            onclick="alert('test')"
          >
            <svg
              slot="icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
              />
            </svg>
          </ic-navigation-button>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
            selected="true"
          ></ic-navigation-item>
          <ic-navigation-item
            slot="navigation"
            label="Navigation"
            href="/"
          ></ic-navigation-item>
        </ic-top-navigation>
        <ic-hero
          heading="Hero heading"
          subheading="Hero description. This is a Hero component, it should be used as a page heading."
          secondary-heading="Secondary Heading"
          secondary-subheading="This is a secondary description."
          full-width
        >
          <div slot="interaction" style="display: flex">
            <ic-text-field
              placeholder="Filter display"
              label="Filter display"
              hide-label
            ></ic-text-field>
            <ic-button variant="primary" style="margin-left:16px"
              >Filter</ic-button
            >
          </div>
          <ic-button variant="secondary" slot="interaction">See all</ic-button>
          <ic-link
            href="https://google.com"
            slot="interaction"
            style="margin-top:10px"
            >Help</ic-link
          >
        </ic-hero>
        <ic-alert
          heading="This alert uses a custom message slot"
          dismissible="true"
          ><ic-button slot="action" variant="secondary">Button</ic-button>
          <ic-typography variant="body" slot="message">
            <p>
              This is some text and
              <ic-link href="/" inline> this is an inline link</ic-link> within
              the text.
            </p>
          </ic-typography>
        </ic-alert>
        <ic-footer
          align="full-width"
          description="The ICDS is maintained by the Design Practice Team. If you've got a question or want to feedback, 
          please get in touch."
          caption="All content is available under the Open Government Licence v3.0, except source code and code examples which are available under the MIT Licence."
        >
          <ic-footer-link slot="link" href="/">Get Started</ic-footer-link>
          <ic-footer-link slot="link" href="/">Accessibility</ic-footer-link>
          <ic-footer-link slot="link" href="/">Styles</ic-footer-link>
          <ic-footer-link slot="link" href="/">Components</ic-footer-link>
          <ic-footer-link slot="link" href="/">Patterns</ic-footer-link>
          <ic-footer-link slot="link" href="/">Design toolkit</ic-footer-link>
          <div
            slot="logo"
            style="display:flex; align-items:center; gap:var(--ic-space-sm);"
          >
            <ic-button>Slotted Button</ic-button>
            <ic-footer-link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
                />
              </svg>
            </ic-footer-link>
          </div>
        </ic-footer>
      </div>`,

  name: "Switch theme",

  parameters: {
    layout: "fullscreen",
  },
};
