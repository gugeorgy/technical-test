# Kangurus - Technical Test

This project includes the implementation of several features for the Kangurus technical test.

## Setup

To use this project, you need to provide the API client details in a `.env.local` file in the root of the project. You can use the `.env.example` file as a reference for the structure. The `.env.example` file looks like this:

```shellscript
# Node
NODE_ENV=development
CLIENT_ID=xxx
CLIENT_SECRET=yyy
GRANT_TYPE=client_credentials
API_BASE_URL=https://kangurus.com/technical-interviews/api
```

Replace xxx with your Client ID and yyy with your Client Secret.

## Features

### Feature 1: UI Integration

We have implemented a responsive hero section based on the provided design mockup. This section supports devices from 360px to 1920px. We used a combination of SVGs and CSS shapes to recreate the design elements from the provided PSD and export folder. The used fonts are provided in woff2 format.

The colors used in the design are:

- Light blue: #34febc
- Dark blue: #030d12
- Yellow: #ffde00
- White: #ffffff

The hero section covers the full viewport width and height, with a small page scroll revealing the footer. On mobile, the navigation opens via a burger menu that contains the navigation links and the login block.

### Feature 2: API and Player Login

We have implemented an account login mechanism using the existing API. The player information is displayed in the navigation bar after login. The test player account details are:

- Username: john.doe@example.com
- Password: p4s5W0rDL33t

The API client details are:

- Client ID: xxx
- Client secret: yyy

### Feature 3: Friends List

We have added a feature that displays a list of the player's friends. This feature is implemented in the `FriendsPage` component in the `pages/friends.tsx` file.

The `FriendsPage` component fetches the player's information and the information of each of the player's friends using the `getPlayerInfo` function. It then displays this information in a table, with each row representing a friend. Each row displays the friend's avatar, nickname, and online status.

If the player has no friends, a message saying "No friends found" is displayed instead of the table.

This feature enhances the social aspect of the application by allowing users to see their friends' online status and other information.

#### Outcomes

The Friends List feature can be used to:

- Quickly check which friends are online and available for a game.
- View the profile details of friends, such as their avatar and nickname.
- Enhance the social interaction within the application by providing a platform for players to connect and interact.
- Encourage players to add more friends by providing a dedicated space to view and manage their friends list.

## Getting Started

First, run the development server:

````bash
npm run dev

## Getting Started

First, run the development server:

```bash
npm run dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Good luck! 🚀

Need help? sannremy@kangurus.com
