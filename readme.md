# Introduction

Customer's Canvas is an SDK for web-to-print solutions developed by Aurigma, Inc. For example, you can embed the Customer's Canvas editor into your web application and allow your users to edit designs of such products as commercial printing, specialty items, apparel, packaging, stickers, wide-print formatting, etc. You can learn more details about this SDK at:

https://customerscanvas.com/

# What you will find in this repo?

This repo contains a set of Customer's Canvas SDK demos.

These web applications demonstrate the basic functionality of Customer’s Canvas. You will learn how to:
- Generate authorization tokens.
- Obtain a list of uploaded design files.
- Personalize print products in the Design Editor.
- Save the personalized designs with the possibility to edit them later.

## Demos

[ASP.NET Core + IFrame API](./iframe-api-sample/)

Demonstrates how you can integrate a design editor into your website.

[ASP.NET Core + UI Framework](./ui-framework-sample/)

Demonstrates a multi-step editor for print products.

# Applied Technologies

These web applications will use:
- On the back end: ASP.NET Core.
- On the front end: Vue.JS with Vue CLI, Webpack, and Node Package Manager.
- The Customer’s Canvas SDK:
  - [Design Editor](https://customerscanvas.com/docs/cc/)
  - [UI Framework](https://customerscanvas.com/support/ui-framework)
  - [IFrame API](https://customerscanvas.com/docs/cc/customerscanvas.htm)


# Prerequisites

## Customer’s Canvas

It is assumed that before you begin, you already have a deployed instance of the Customer’s Canvas application. You can find detailed information about installing and configuring Customer’s Canvas at
https://customerscanvas.com/docs/cc/

You can configure Customer’s Canvas in `Configuration/AppSettings.config`:

```XML
  <!-- Enables secure access to the Web API by using tokens. -->
  <add key="SecureModeEnabled" value="True" />
  <!-- Defines a list of domains, which can access your Customer’s Canvas instance. -->
  <add key="HttpHeaderAllowOriginDomains" value="*" />
  <!-- Defines a key that must be passed in request headers when using the Web API. -->
  <add key="ApiSecurityKey" value="UniqueSecurityKey" />
  <!-- If true, allows you to run Customer’s Canvas and a demo application over different protocols, HTTP and HTTPS. -->
  <add key="UnsafeHttpWebApiEnabled" value="true" />
```

## ASP.NET Core App

For details about setting up the development environment and initializing the first ASP.NET Core project, you can refer to the Microsoft documentation at 
https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/start-mvc?view=aspnetcore-3.1&tabs=visual-studio-code


## The Front End

### Installing Node.js

You can download Node.js, which includes the npm package manager, from the [official website](https://nodejs.org/en/).

### Installing the JavaScript Tools

When the installation of Node.js is complete, you can use **npm** to install the following tools that we will use for developing the front end:
1. [Vue.js](https://vuejs.org/v2/guide/) JavaScript framework

  `npm install -g vue`
2. [Vue CLI environment](https://cli.vuejs.org/guide/) for project management

    `npm install -g @vue/cli`

# How to get started?

1. Clone the project.
3. Navigate to a demo folder.
4. Refer to `readme.md` to run the demo.
