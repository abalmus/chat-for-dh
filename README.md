# chat-for-dh

Simple Chat application based on "Odi" (typescript framework) and React. Socket.io is used for bidirectional and event-based communication.

## Features
| Feature Name   |      Completed      |
| --- | --- |
| Server-Side Rendering   | YES |
| Real Time Communication | YES |
| Localization via i18n   | YES | 
| Theming                 | YES |
| CSS Preprocessor        | YES |
| Smiles                  | NO  | 
| Link Parser             | NO  |
| Scheduled Messages      | NO  |
| Unread messages         | NO  |

## Installation

### Environment
| Name  |      Version      |
| --- | --- |
| npm   | 6.7.0 |
| node   | 11.15.0 |
| yarn | 1.13.0 |

### Build the code
#### 1. Clone repository:
```
git clone https://github.com/abalmus/chat-for-dh.git
```

#### 2. Install Dependencies (YARN or NPM)

```
cd chat-for-dh

yarn install

yarn start
```

#### 3. Open Application in Browser

```
http://localhost:8080
```

Please note you can change the port here: `chat-for-dh/server/src/index.ts` on line 5.
